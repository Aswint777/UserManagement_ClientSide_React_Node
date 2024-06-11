import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute top-0 bg-gray-300 ">
    <h1 className="text-black-600 text-2xl font-bold cursor-pointer"
    onClick={()=>navigate('/')}>
            Home 
          </h1>
          <div>
              {/* <button className="text-white pr-4">Account </button> */}
            {/* <button
              className="bg-red-600 p-2 rounded-md cursor-pointer text-white"
            >
              LogOut
            </button> */}
          </div>
          <div>
              <button className="text-black pr-4" 
              onClick={()=>navigate('/Login')} >Sign In </button>
              <button onClick={()=>navigate('/SignUp')} className="bg-green-600 p-2 rounded-md cursor-pointer text-white">
                Sign Up
              </button>
          </div>
    </div>
   
    </>
  )
}

export default Navbar
