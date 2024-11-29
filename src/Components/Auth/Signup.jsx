import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { authSignupaxios} from '../../Services/authService';

function Signup() {
  const [state, setState] = useState('');
 const navigate =  useNavigate();
  const [user, setUser] = useState({
    username:'',
    email:'',
    phone:'',
    password:'',
  })
const handleInput =(e)=>{
const {name, value} = e.target;
setUser({
  ...user,
  [name]:value,
})
}

const handleSubmit = async(e)=>{
  e.preventDefault();
  const response = await  authSignupaxios(user);  
  if(response?.success){
    navigate("/login");
  }else{
    setState(response);
  }
  // console.log(response,"response")
  
}


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
          <form className="space-y-4" onSubmit= {handleSubmit}>
           
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="johndoe123"
                value={user.username}
                onChange={handleInput}
                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@example.com"
                value={user.email}
                onChange={handleInput}
                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

           

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+91 9876543210"
                value={user.phone}
                onChange={handleInput}
                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleInput}
                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2  focus:ring-blue-500 "
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-center text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
              LogIn
            </Link>
           
          </p>
          {state && (
          <p
            className={`text-center text-sm mt-6 font-semibold ${
              state?.success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {state.message}
          </p>
        )}
        </div>
      </div>
    </>
  );
}

export default Signup;
