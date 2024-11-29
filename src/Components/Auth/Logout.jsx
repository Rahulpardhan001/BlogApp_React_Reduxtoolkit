import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Slices/AuthSlice/authSlice';
import {useNavigate } from 'react-router-dom';

function Logout() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
    useEffect(()=>{
        dispatch(logout())
        navigate("/login");
    },[dispatch, navigate])
}

export default Logout
