import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
export const LoginPage = () => {
    const auth= useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.handleLogin();        
        navigate('/blogs');
    }

  return (
    <div className="container"> 
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Enter Username"/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="Enter password"/>
        <button type="submit" onClick={handleLogin}>Submit</button>
    </div>
  )
}
