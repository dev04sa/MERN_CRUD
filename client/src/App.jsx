import CreateUser from "./CreateUser"
import Users from "./Users"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { getUser } from './redux/UserSlice';
import UpdateUser from "./UpdateUser";


const App = () => {

  const dispatch=useDispatch();

    useEffect(() =>{
        const fetchData= async ()=> {
            try {
                    const response= await axios.get('http://localhost:3001')
                    dispatch(getUser(response.data));
                
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    },[])
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users/>} ></Route>
        <Route path="/create" element={<CreateUser/>} ></Route>
        <Route path="/edit/:id" element={<UpdateUser/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App