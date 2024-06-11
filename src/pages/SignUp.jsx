import React from 'react'

const SignUp = () => {
    
  return (
    <>
<div className="w-full">
        <div className="left-0 w-full mt-20 "></div>
        <div className=" px-4 py-4  ">
          <div className="max-w-[450px]  mx-auto bg-gray-400 text-white p-5 rounded-md ">
            <div className="max-w-[320] mx-auto  py-10 ">
              <h1 className="text-3xl font-normal">Sign Up</h1>
              <form  className="w-full flex flex-col py-4">
                <p>User Name</p>
              <input
                // onChange={(e)=>setEmail(e.target.value)}
                  className="py-3 my-2 p-4 bg-gray-200 rounded"
                  type="text"
                  placeholder="User Name"
                  autoComplete="email"
                />
                <p>Email</p>
                <input
                // onChange={(e)=>setEmail(e.target.value)}
                  className="py-3 my-2 p-4 bg-gray-200 rounded "
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                />
                <p>Password</p>
                <input
                //   onChange={(e)=>setPassword(e.target.value)}

                  className="py-3 p-4 my-2 bg-gray-200 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <p>Confirm Password</p>
                <input
                //   onChange={(e)=>setPassword(e.target.value)}

                  className="py-3 p-4 my-2 bg-gray-200 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button className="bg-green-500 py-3 my-6 rounded font-bold ">
                  Sign Up
                </button>
                <div>

                </div>

            </form>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default SignUp
