import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { addUser } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom'; 

const CreateUser = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [age,setAge]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/create',{name,email,age})
    .then(result => {
      dispatch(addUser(result.data))
      console.log(result)
    }
      )
      navigate('/')
    .catch(err => console.log(err))

    }

    

  return (
    
    <div className="container mt-5 ">
    <form  className="my-custom-form" onSubmit={handleSubmit} >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e)=> setName(e.target.value)}
          
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
      
          className="form-control my-custom-input"
          id="age"
        />
      </div>

      <button type="submit" className="btn btn-primary my-custom-button">Submit</button>
    </form>
  </div>
  )
}

export default CreateUser