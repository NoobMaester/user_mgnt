import React from 'react'
import {FaCheckCircle, FaTimes} from 'react-icons/fa'

const Modal = ({handleClick2, remove, user, id}) => {
    return (
        <div className = 'overlay'>
            <div className = 'text-2'>
                <div className='title'>
                    <span></span>
                    <h3>Edit User</h3>
                    <FaTimes style={{width:'1.2em', height:'1.2em', marginTop:'9px'}} onClick = {handleClick2}/>
                </div>
                <form className='add-form2'>
                    <div className='form-'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Enter Full Name...'/>
                    </div>
                    <div className='form-'>
                        <label>Email</label>
                        <input type="text" placeholder='Enter Email...'/>
                    </div>
                    <div className='form-'>
                        <label>Department</label>
                        <select>
                            <option value="1">Select</option>
                            <option value="SERVICES">SERVICES</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>

                    <div className='btnz'>
                        <button type='submit' className='btn' style = {{border:'1px solid gray'}} onClick = {handleClick2}>
                            <FaTimes /> Cancel
                        </button>
                        <button type="submit" className= 'btn btn-primary'>
                            <FaCheckCircle/> Save Changes
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Modal
