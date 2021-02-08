import React from 'react'
import {useState} from 'react';


const Overlay = ({handleClick, handleAdd}) => {
    const option = ['HR', 'SERVICES'];

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[department, setDepartment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (!department && !email && !name){
            alert('Please fill out the from');
            return
        }else if (!name) {
            alert('Please Add Your Full Name');
            return

        }else if(!email){
            alert('Please Add Your Email');
            return

        }else if(!department){
            alert('Please Select a Department');
            return
        }else if(!department && !email && !name){
            alert('Please fill out the from');
            return
        }

        handleAdd({name, email, department});

        setName('');
        setEmail('');
        setDepartment('');
    }

    return (
        <div className='overlay' >
            <div className='text'>
                <h2>Update</h2>
                <form className= 'add-form' onSubmit = {onSubmit}>
                    <div className='left'>
                        <div className='name'>
                            <label>Name</label>
                            <input type="text" value ={name} onChange = {(e) => setName(e.target.value)} />
                        </div>
                        

                        <label>Department</label>
                        <select value={department} onChange= {(e) => setDepartment(e.target.value)}>
                            <option value="1">Select</option>
                            <option value="HR">{option[0]}</option>
                            <option value="SERVICES">{option[1]}</option>
                        </select>              
                    </div>
                    <div className='right'>
                        <label>Email</label>
                        <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>

                        <span className='buttons'>
                            <button className='btn-1 btn' onClick={handleClick}>Cancel</button>
                            <button type="submit" className='btn btn-primary' value="submit">Update</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Overlay
