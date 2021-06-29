import React from 'react'
import User from './User'

const Users = ({users, handleClick2, remove}) => {

    return (
        <div className='user-list'>
            <div className='header'>
                <h4>Full Name</h4>
                <h4>Email Address</h4>
                <h4>Department</h4>
                <h4>Action</h4>
            </div>
            {users.map((user) => (
                <User key={user.id} user ={user} handleClick2 = {handleClick2} remove = {remove}/>
            ))}
        </div>
    )
}

export default Users
