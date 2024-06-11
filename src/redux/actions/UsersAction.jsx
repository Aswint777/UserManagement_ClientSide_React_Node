import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const UserLogin = createAsyncThunk(
  'user/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log(userCredentials);
      const { data } = await axios.post('http://localhost:3000/userLoginPost', userCredentials, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);





// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// export const UserLogin = async (userCredentials) => {
//   const { data } = createAsyncThunk(
//     "user/login",
//     await axios.post("http://localhost:3000/getUser"),
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//     },
//     { userCredentials }
//   );
//   return data;
// };

