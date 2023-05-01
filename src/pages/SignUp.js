import React, {useState, useEffect} from 'react';
import '../css/SignUp.css';
import pmsfondo from '../assets/pmsfondo.png';
import black_logo from '../assets/logo-moving-box-black.png';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    const parsed_info = JSON.parse(userInfo)
    if(parsed_info != null){
      if(parsed_info.is_admin != true){
        navigate('/company/data')
      }else{
        navigate('/admin/company/add')
      }
    }
  },[])

    const registerUser = (e) => {
        e.preventDefault()
        if(email === ""){
          alert("Please enter email")
        }else if(password === ""){
          alert("Please enter password")
        }else if(name === ""){
          alert("Please enter name")
        }else {
          const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('password', password)
        axios.post('http://localhost:5000/apis/user/signup', data).then((response) => {
            if(response.data.is_registered === true){
                navigate('/')
            }
        })
        }
        
    }


  return (
    <div className='login__background'>
      <div className='login__box'>
        <div className='login__left'>
          <img src={pmsfondo} alt='pmsfondo'/>
        </div>
        <div className='login__right'>
            <img src={black_logo} alt='pmsfondo'/>
            <p>Customers Private Area</p>
            <form>
              <div>
                <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Name'/>
              </div>

              <div>
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
              </div>
              <div>
                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
              </div>
              <button onClick={(e) => registerUser(e)} className='login__btn'>Sign up</button>
            </form>
            <p>Already have an account <Link style={{color:'#03a9f4'}} to='/'>Signin</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;