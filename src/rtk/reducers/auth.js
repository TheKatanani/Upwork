import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token:localStorage.getItem('token') || null,
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.userId = action.payload.token;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem("token")
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;