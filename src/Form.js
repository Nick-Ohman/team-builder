import React from 'react'

function Form(props) {

    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
    } = props

    return (
        <div>
            <form className='team2'>
                <h2>Friend Form</h2>
                <div className='form'>
                    <label>First Name:&nbsp;
                    <input
                            value={values.fName}
                            onChange={onInputChange}
                            name='fName'
                            type='text'
                        /></label>
                </div>
                <div className='form'>
                    <label>Last Name:&nbsp;
                    <input
                            value={values.lName}
                            onChange={onInputChange}
                            name='lName'
                            type='text'
                        /></label>
                </div>
                <div className='form'>
                    <label>Email:&nbsp;
                    <input
                            value={values.email}
                            onChange={onInputChange}
                            name='email'
                            type='text'
                        /></label>
                </div><br></br>
                <div className="dropdown">
                <label>Role:&nbsp;
                    <select 
                    name='role'
                    value={values.role}
                    onChange={onInputChange}>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="DS">DS</option>
                    </select></label>
                    </div>

                <button onClick={onSubmit}>submit</button>
            </form>
        </div >

    )
}
// something


export default Form