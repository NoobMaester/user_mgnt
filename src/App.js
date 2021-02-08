import {useState} from 'react';
import Overlay from './components/Overlay';
import Header from './components/Header'
import Users from './components/Users';
import Modal from './components/Modal'

function App() {
  const [users, setUsers] = useState([
    {
      id:1,
      name:'Name1 Cesar',
      email:'brucec@email.com',
      department:'SERVICES',
      active:'Dormant'
    },
    {
      id:3,
      name:'Name2 Rose',
      email:'naema@email.com',
      department:'SERVICES',
      active:'Dormant'
    },
    {
      id:4,
      name:'Name3 Amber',
      email:'name2@email.com',
      department:'SERVICES',
      active:'Dormant'
    },
    {
      id:5,
      name:'Naeem Cesar',
      email:'name3@email.com',
      department:'SERVICES',
      active:'Dormant'
    },
    {
      id:6,
      name:'Bsdffd Sultan',
      email:'hear@email.com',
      department:'SERVICES',
      active:'Dormant'
    },
    {
      id:14,
      name:'ffdfgh Sultan',
      email:'raym@email.com',
      department:'SERVICES',
      active:'Dormant'
    },
    {
      id:2,
      name:'Citric Zest',
      email:'citric@email.com',
      department:'SERVICES',
      active:'Active'
    }
  ]);

  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);


  const handleClick = () =>{
    setShow(!show);
  }

  const handleClick2 = () =>{
    console.log('ndaq');
    setShow2(!show2);
  }

  const handleAdd = (user)=>{
    console.log(user)

    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = {id, ...user};
    setUsers([...users, newUser])
  }

  const remove = (id) => {
    alert('Are You Sure You Want to Remove This User?')
    const newU = users.filter((user) => user.id !== id)
    setUsers(newU);
  }

  return (
    <div className="App">
      <Header handleClick = {handleClick}/>
      <Users users ={users} handleClick2 = {handleClick2} remove = {remove}/>
      {show && <Overlay handleClick={handleClick} handleAdd = {handleAdd} />}
      {show2 && <Modal handleClick2 = {handleClick2}/>}
    </div>
  );
}

export default App;
