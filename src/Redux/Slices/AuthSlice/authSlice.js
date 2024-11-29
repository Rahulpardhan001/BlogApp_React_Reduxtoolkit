import { createSlice } from "@reduxjs/toolkit";





const authSlice = createSlice({
  name: "auth",
  initialState: {
  
    userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : null,
    isAuthenticated: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.user;
      state.isAuthenticated = true;
      // Save to localStorage
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("userId", JSON.stringify(action.payload.userId));
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.isAuthenticated = false;
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
