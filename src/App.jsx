import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Profile from './pages/Profile'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/actions/UsersAction'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUser())
  })

  return (
    <>
   <BrowserRouter>
   
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/LandingPage' element={<LandingPage/>} />
    <Route path='/Profile' element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
