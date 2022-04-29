import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
      const updatedPersistRoot =
      {
        ...persistRoot,
        user: {
          ...persistRoot.user,
          currentUser: action.payload
        }
      }
      localStorage.setItem("persist:root", JSON.stringify(updatedPersistRoot));
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
      //get users
      // getUser: (state) => {
      //   state.isFetching = true;
      //   state.error = false
      // },
      // getUserSuccess: (state, action) => {
      //   state.isFetching = false;
      //   state.users = action.payload;
      // },
      // getUserFailure: (state) => {
      //   state.isFetching = false;
      //   state.error = true;
      // },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
