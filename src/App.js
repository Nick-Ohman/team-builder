import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Team from './Team'
import Form from './Form'

import './App.css';


const initialTeamList = [
  {
    id: uuid(),
    fName: 'Michael',
    lName: 'Quinn',
    email: 'mq@mq.com',

  },
  
]
const initalFormValues = {
  fName: '',
  lName: '',
  email: '',
}

function App() {

  const [teams, setTeams] = useState(initialTeamList)
  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initalFormValues)


  const onInputChange = evt => {
    // 🔥 STEP 4 - IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
      const name = evt.target.name
    // b) pull the value of the input from the event object
      const value = evt.target.value
    // c) set a new state for the whole form // ARGH

      setFormValues({
        ...formValues,
        [name]: value
      })
      // copy over all the properties from formValues
     
     
   
  }

  const onCheckboxChange = evt => {
    // a) pull the name of the checkbox from the event
    
    // b) pull whether checked true or false, from the event
   
    // c) set a new state for the whole form
    
  }

  const onSubmit = evt => {
    // 🔥 STEP 5 - IMPLEMENT A SUBMIT HANDLER
    evt.preventDefault()

    const newTeam = {
      id: uuid(),
      fName: formValues.fName,
      lName: formValues.lName,
      email: formValues.email,
    
    }

    setTeams([...teams, newTeam])

    setFormValues(initalFormValues)
  }
  return (
    <div className="container">
      <header><h1>Team App</h1></header>
      {
        teams.map(team => {
          return (
            <Team key={team.id} team={team} />
          )
        })
      }
      <Form
      values={formValues}
      onInputChange={onInputChange}
      onCheckboxChange={onCheckboxChange}
      onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
