import { createSlice } from "@reduxjs/toolkit";
// import { Login } from "../actions/userActions";
// import { UserLogin } from "../actions/userActions";
import {
  UserLogin,
  UserSignUp,
  adminDashboard,
  getUser,
  logOut,
  updateProfile,
} from "../actions/UsersAction";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    //login
      .addCase(UserLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(UserLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      // signUp
      .addCase(UserSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(UserSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserSignUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      // LogOut
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      // getUser
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      // admin Dashboard 
      .addCase(adminDashboard.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(adminDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminDashboard.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      // User Profile Edit 
      .addCase(updateProfile.fulfilled,(state,{payload})=>{
        state.loading = false
        state.user=payload
        state.error = null
      })
      .addCase(updateProfile.pending,(state)=>{
        state.loading = true;

      })
      .addCase(updateProfile .rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      
  },
});
export default UserSlice.reducer;
