import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { authLoginaxios } from '../../Services/authService';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../Redux/Slices/AuthSlice/authSlice';


function Login() {
 const navigate = useNavigate();
 const dispatch = useDispatch();
  const [state, setState] = useState("")
  const [user, setUser] = useState({
    email:'',
    password:'',
  })
const handleChange=(e)=>{
const {name, value} = e.target;
  setUser({
    ...user,
    [name]:value
  })
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  // console.log(user)
  const response = await authLoginaxios(user);
  if(response?.success){
    console.log(response, "rrrrrrrrrr")
    // dispatch(loginSuccess({token:response.token, userId: response.userId}))
    dispatch(loginSuccess({ token: response.token, userId: response.userId }));
    navigate('/');
  }
  setState(response);
  setUser({email:'', password:''});
}

  return (
        <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your username"
                value={user.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>

              <div>
                <a href="#" className="text-sm text-green-600 hover:text-green-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-600 hover:text-green-500 font-medium">
              Sign up
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

export default Login;
