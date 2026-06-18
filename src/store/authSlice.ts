import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
}

// leer desde localStorage al iniciar
const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const initialState: AuthState = {
  isAuthenticated: !!token,
  token: token,
  username: username,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; username: string }>,
    ) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.username);
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;

      localStorage.removeItem("token");
      localStorage.removeItem("username");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
