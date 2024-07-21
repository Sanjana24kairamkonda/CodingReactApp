import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post('/login',{username,password})
    .then(result=>{
      console.log(result)
      if(result.data==="success"){
        alert('Successful Login')
        navigate('/mainpage')
      }else{
      alert("Invalid credentials")}
    })
    .catch(err=>console.log(err))
      
  };
      

  return (
    <div className='login-form-container'>
      
      <form className='login-form' onSubmit={handleLogin}>
      <h2>Login</h2>
        <div className='form-control'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-control'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
        <p className='signup-link'>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
      </form>
      
    </div>
  );
};

export default Login;
