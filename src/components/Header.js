import {FaPlus, FaSearch} from 'react-icons/fa'
import {useState} from 'react';


const Header = ({handleClick, clicked}) => {
    const [search, setSearch] = useState('');
    if (!search){
        console.log('input something motherfucker');
    }
    
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
                        onChange = {(e) => {setSearch(e.target.value)}}
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
