import React, {useEffect, useState} from 'react';
import '../css/Login.css';
import pmsfondo from '../assets/pmsfondo.png';
import black_logo from '../assets/logo-moving-box-black.png';
import axios from 'axios';

import {
  Link,
  useNavigate
} from "react-router-dom";

function Login() {
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

  const signinUser = (e) => {
        e.preventDefault()

        if(email === ""){
          alert("Please enter email")
        }else if(password === ""){
          alert("Please enter password")
        }else if(email === "" && password === ""){
          alert("Please fill all the fields")
        }else {
          const data = new FormData()
          data.append('email', email)
          data.append('password', password)
          axios.post('http://localhost:5000/apis/user/signin', data).then((response) => {
            console.log(response.data.status)
            console.log(response.data.is_loggedin)
            if(response.data.is_loggedin === true){
              localStorage.setItem('userInfo', JSON.stringify(response.data.user))
              if(response.data.user.is_admin != true){
                navigate('/company/data')
              }else {
                navigate('/admin/company/add')
              }
            }else{
              alert('Invalid email or password')
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
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
              </div>
              <div>
                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
              </div>
              <button className='login__btn' onClick={(e) => signinUser(e)}>Log in</button>
            </form>
            <p>Don't have an account <Link style={{color:'#03a9f4'}} to='/signup'>Signup</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;