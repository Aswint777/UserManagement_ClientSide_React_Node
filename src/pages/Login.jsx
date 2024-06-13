import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { UserLogin } from '../redux/actions/userActions'
import { UserLogin } from "../redux/actions/UsersAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(UserLogin({ email, password }));
    console.log(
      user,
      "....................................................................."
    );

    // try{
    //   const user = { userName , token : 'fake Token '}
    //   // dispatch(loginSuccess(user))
    // }catch{
    //   console.log('login failed ')
    //   // dispatch(loginFailure('invalid credentials '))
    // }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // const handleInputChange =()=>{
  // }
  // const formdata = new FormData();
  // formdata.append(name,)

  return (
    <>
      <div className="w-full">
        <div className="left-0 w-full mt-20 "></div>
        <div className=" px-4 py-4  ">
          <div className="max-w-[450px]  mx-auto bg-gray-400 text-white p-5 rounded-md ">
            <div className="max-w-[320] mx-auto  py-10 ">
              <h1 className="text-3xl font-normal">Sign In</h1>
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col py-4"
              >
                <p>Email</p>
                <input
                  // onChange={(e)=>setEmail(e.target.value)}
                  className="py-3 my-2 p-4 bg-gray-200 rounded "
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onChange={handleInputChange}
                />
                <p>Password</p>
                <input
                  className="py-3 p-4 my-2 bg-gray-200 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <p className="text-red-700 flex justify-center">{error}</p>

                <button
                  className="bg-green-500 py-3 my-6 rounded font-bold "
                  type="submit"
                  // onClick={dispatch(Login(formdata))}
                >
                  Sign In
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

export default Login;
