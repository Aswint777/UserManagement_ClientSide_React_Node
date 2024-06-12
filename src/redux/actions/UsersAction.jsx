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



export const UserSignUp = createAsyncThunk(
  'user/signUp',
  async(userCredentials,{rejectWithValue})=>{
      try {
          console.log(userCredentials);
          const {data} = await axios.post('http://localhost:3000/userSignUpPost',userCredentials,{
              headers :{
                  'Content-Type':'application/json'
              },
              withCredentials:true,
          })
          console.log(data);
          console.log('data yuser');
          return data 
      } catch (error) {
          return rejectWithValue(err.response.data);
      }
  }
)

export const logOut = createAsyncThunk(
  'user/logout',
  async(_,{rejectWithValue})=>{
      try {
          
          console.log('credentials ');
          const {data} = await axios.get('http://localhost:3000/userLogOut',{
              headers :{
                  'Content-Type':'application/json'
              },
              withCredentials :true,
          })
          console.log(data);
          console.log('data yuser');
          return data 
      } catch (error) {
          return rejectWithValue(err.response.data);
      }
  }
)

export const getUser = createAsyncThunk(
  'user/getUser',
  async(_,{rejectWithValue})=>{
      try {
          const {data} = await axios.get('http://localhost:3000/getUser',{
              headers :{
                  'Content-Type':'application/json'
              },
              withCredentials:true,
          })
          console.log(data);
          console.log('data yuser');
          return data 
      } catch (error) {
          return rejectWithValue(err.response.data);
      }
  }
)

