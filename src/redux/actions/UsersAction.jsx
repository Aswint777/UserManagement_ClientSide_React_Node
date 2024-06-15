import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserLogin = createAsyncThunk(
  "user/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log(userCredentials);
      const res = await axios.post(
        "http://localhost:3000/userLoginPost",
        userCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const UserSignUp = createAsyncThunk(
  "user/signUp",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      console.log(userCredentials);
      console.log("pppppppppppppppppp");
      // console.log(data);
      const res = await axios.post(
        "http://localhost:3000/userSignUpPost",
        userCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res, "----=-=-=-=-=-=-=-=-=-=-");
      console.log("data yuser");
      return res;
    } catch (error) {
      console.log(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const logOut = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      console.log("credentials ");
      const { data } = await axios.get("http://localhost:3000/userLogOut", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(data);
      console.log("data yuser");
      return data;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3000/getUser", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(data);
      console.log("data yuser");
      return data;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const adminDashboard = createAsyncThunk(
  "user/AdminDashboard",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/admin/AdminDashboard",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      console.log("data adminDashboard");
      return data;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const userStatus = createAsyncThunk(
  "user/userStatus",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log(userCredentials);
      const { data } = await axios.post(
        "http://localhost:3000/userStatus",
        userCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      console.log("data yuser");
      return data;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log("zzzz");
      console.log(userCredentials);
      // console.log(data);
      const res = await axios.post(
        "http://localhost:3000/updateUserProfile",
        userCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const profilePhoto = createAsyncThunk(
  "user/userProfilePhoto",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log("zzzz");
      console.log(userCredentials);
      // console.log(data);
      const res = await axios.post(
        "http://localhost:3000/userProfilePhoto",
        userCredentials,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);


// multipart/form-data