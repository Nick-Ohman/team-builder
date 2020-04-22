import React from 'react'

function Team(props) {

    return (
        <div className='team-container'>
            <p>First Name:{props.team.fName}</p>
            <p>Last Name: {props.team.lName}</p>
            <p>Email: {props.team.email}</p>
            <p>Role: {props.team.role}</p>
        </div>

    )

}

export default Team