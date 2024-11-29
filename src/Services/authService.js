
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export const authSignupaxios =async(user)=> {
  try {
    const response =await axios.post('http://localhost:8000/api/auth/register', user,
    {
      headers: { 'Content-Type': 'application/json' },
    
    });
    if (response.status === 201) {
          return response.data; // Return the response data if needed
    } else {
      alert('Something went wrong. Please try again.');
    }
     
    } catch (error) {
      return error.response?.data
      console.log("error forntend register");
    }
}


// loginaxio

export const authLoginaxios =async(user)=> {
  try {
    const response =await axios.post('http://localhost:8000/api/auth/login', user,
    {
      headers: { 'Content-Type': 'application/json' },
    
    });
    return response?.data; 
     
    } catch (error) {
      console.log(error.message)
      return error.response?.data
    }
}
