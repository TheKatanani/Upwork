import { createSlice } from '@reduxjs/toolkit';

const storedToken = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!storedToken,
    token: storedToken || null,
    user: storedUser || (storedToken ? 'Mohammed Katanani' : 'Guest'),
    isGuest: !storedToken,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.isGuest = false;
      state.token = action.payload?.token || 'mock-token-demo';
      if (action.payload?.name) {
        state.user = action.payload.name;
        localStorage.setItem('user', action.payload.name);
      }
      localStorage.setItem('token', state.token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.isGuest = true;
      state.token = null;
      state.user = 'Guest';
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setUser(state, action) {
      state.user = action.payload.name;
      localStorage.setItem('user', action.payload.name);
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;