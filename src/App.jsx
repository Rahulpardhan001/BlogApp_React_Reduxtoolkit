
import {Routes, Route} from 'react-router-dom'

import Header from "./Components/Pages/Header"
import Home from "./Components/Pages/Home"
import Footer from './Components/Pages/Footer'
import About from './Components/Pages/About'

import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import Project from './Components/Pages/Project'
import Newsletter from './Components/Pages/Newsletter'
import Detail from './Components/Pages/Detail'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import ProtectedRoute from './Redux/Slices/AuthSlice/ProtectedRoute'
import Logout from './Components/Auth/Logout'




function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Add dark class to <html> when dark mode is active
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class when dark mode is inactive
    }
  }, [isDarkMode]);

  return (
    <>
<Header/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project"
          element={<ProtectedRoute element={<Project />} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
<Footer/>
 </>
  )
}

export default App
