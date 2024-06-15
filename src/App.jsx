import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/UsersAction";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
    console.log(user, "----------");
  }, [!user]);
  console.log(user, "=============================");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              user && user?.role === "user" ? (
                <LandingPage />
              ) : user && user?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Home />
              )
            }
          />{" "}
          <Route
            path="/Login"
            element={
              user && user?.role === "user" ? <LandingPage /> : <Login />
            }
          />
          <Route
            path="/SignUp"
            element={
              user && user?.role === "user" ? <LandingPage /> : <SignUp />
            }
          />
          <Route
            path="/LandingPage"
            element={user && user?.role === "user" ? <LandingPage /> : <Home />}
          />
          <Route
            path="/Profile"
            element={user && user?.role === "user" ? <Profile /> : <Home />}
          />
          <Route
            path="/AdminDashboard"
            element={
              user && user?.role === "Admin" ? <AdminDashboard /> : <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

