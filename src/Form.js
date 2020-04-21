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
                <label>Role:&nbsp;
                    <select name='Role'
                    >
                        <option value="frontend">Front End</option>
                        <option value="backend">Back End</option>
                        <option value="ds">DS</option>
                    </select></label>


                <button onClick={onSubmit}>submit</button>
            </form>
        </div >

    )
}
// something


export default Form