import { createSlice } from "@reduxjs/toolkit";
// import { Login } from "../actions/userActions";
// import { UserLogin } from "../actions/userActions";
import { UserLogin } from "../actions/UsersAction";

const UserSlice = createSlice({
  name: "user",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(Login.fulfilled, (state, { payload }) => {
  //       state.loading = false;
  //       state.user = payload.users;
  //       state.error = null;
  //     })
  //     .addCase(Login.pending, (state, { payload }) => {
  //       state.loading = true;
  //     })
  //     .addCase(Login.rejected, (state, { payload }) => {
  //       state.loading = false;
  //       state.user = [];
  //       state.error = payload.error;
  //     });
  // },
});
export default UserSlice.reducer;
