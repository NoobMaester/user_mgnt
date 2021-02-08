import {FaRegTrashAlt, FaPencilAlt} from 'react-icons/fa'
import React from 'react'


const User = ({user, handleClick2, remove}) => {
    
    return (        
        <div className='user'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.department}</p>
            <span>
                <FaPencilAlt className='icons' style={{margin:'9px'}} onClick = {handleClick2}/>
                <FaRegTrashAlt className='icons' style={{margin:'9px'}} onClick = {() => remove(user.id)}/>
            </span>
        </div>
    )
}

export default User
