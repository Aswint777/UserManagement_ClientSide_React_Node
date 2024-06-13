import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSignUp } from "../redux/actions/UsersAction";

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(userName, email, password, "lllllllllll");
    dispatch(UserSignUp({ userName, email, password, confirmPassword }));
    console.log(user, "llll");
    console.log(
      error,
      "--------------------------------------------------------"
    );
    console.log("hererererr");
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // useEffect(()=>{
  //   if(user){
  //     navigate('/LandingPage')
  //   }
  //   // else{
  //   //   navigate('/')

  //   // }
  // },[user,navigate])

  return (
    <>
      <div className="w-full">
        <div className="left-0 w-full mt-20 "></div>
        <div className=" px-4 py-4  ">
          <div className="max-w-[450px]  mx-auto bg-gray-400 text-white p-5 rounded-md ">
            <div className="max-w-[320] mx-auto  py-10 ">
              <h1 className="text-3xl font-normal">Sign Up</h1>
              <form
                onSubmit={handleSignUp}
                className="w-full flex flex-col py-4"
              >
                <p>User Name</p>
                <input
                  className="py-3 my-2 p-4 bg-gray-200 rounded"
                  type="text"
                  placeholder="User Name"
                  autoComplete="email"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <p>Email</p>
                <input
                  className="py-3 my-2 p-4 bg-gray-200 rounded "
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Password</p>
                <input
                  className="py-3 p-4 my-2 bg-gray-200 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Confirm Password</p>
                <input
                  className="py-3 p-4 my-2 bg-gray-200 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
                <p className="text-red-700 flex justify-center">{error}</p>

                <button className="bg-green-500 py-3 my-6 rounded font-bold ">
                  Sign Up
                </button>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
