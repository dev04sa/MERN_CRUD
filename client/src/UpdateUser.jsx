import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { updateUser } from './redux/UserSlice';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {
    const {id} = useParams() 
    const users= useSelector(state => state.users.users);
    const user=users.find(u => u.id===id)
    console.log(user)



    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email);
    const [age,setAge]=useState(user.age);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/update/'+id,{name,email,age})
    .then(result => {
      dispatch(updateUser({id,name,email,age}))
    //   dispatch(updateUser(result.data))
      console.log(result)
    }
      )
      navigate('/')
    .catch(err => console.log(err))

    }
  return (
    <div>
        <div className="container mt-5 ">
    <form  className="my-custom-form" onSubmit={handleUpdate} >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e)=> setName(e.target.value)}
          value={name}
          className="form-control my-custom-input"
          id="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
        
          className="form-control my-custom-input"
          id="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          onChange={(e)=> setAge(e.target.value)}
          value={age}
      
          className="form-control my-custom-input"
          id="age"
        />
      </div>

      <button type="submit" className="btn btn-primary my-custom-button">Update</button>
    </form>
  </div>
    </div>
  )
}

export default UpdateUser