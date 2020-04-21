import React from 'react'

function Form(props) {

    const{
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
    } = props

    return (
        <div>
            <form className='team2'>
                <h2>Friend Form</h2>
                <label>First Name:&nbsp;
                    <input
                        value={values.fName}
                        onChange={onInputChange}
                        name='fName'
                        type='text'
                    /></label>
                <label>Last Name:&nbsp;
                    <input
                        value={values.lName}
                        onChange={onInputChange}
                        name='lName'
                        type='text'
                    /></label>
                <label>Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    /></label>
                    <button onClick={onSubmit}>submit</button>
            </form>
        </div >

    )
}



export default Form