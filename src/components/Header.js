import {FaPlus, FaSearch} from 'react-icons/fa'

const Header = ({handleClick, clicked}) => {
    
    return (
        <div>
            <header>
                <span className='main-header form-inline' >
                    
                    <button
                        className='btn btn-primary' 
                        onClick ={handleClick}> <FaPlus/> Add User
                    </button>
                    <input 
                        type="search" 
                        className='form-control form-control-sm' 
                        placeholder = 'Search by Name...'
                        
                    />
                    <select className='form-control form-control-sm'>
                        <option value="1">Department</option>
                        <option value="2">HR</option>
                        <option value="3">SERVICES</option>
                    </select>
                    <button 
                        onClick = {clicked}
                        className='btn btn-primary' 
                        type="submit"><FaSearch /> Search
                    </button>
                </span>
            </header>
        </div>
    )
}

export default Header
