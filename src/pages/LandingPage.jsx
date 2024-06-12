import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      {/* <h1 className='text-black text-9xl align-middle '>Landing page is here </h1> */}
      <button onClick={()=>navigate('/Profile')} className='m-24 rounded-sm p-2 border-gray-400 text-white bg-black'>Profile</button>
      <button onClick={()=>navigate('/')} className='m-24 rounded-sm p-2 border-gray-400 text-white bg-black'> Log Out</button>
    </div>
  )
}

export default LandingPage
