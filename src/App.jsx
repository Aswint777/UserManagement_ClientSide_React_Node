import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
