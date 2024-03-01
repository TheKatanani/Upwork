import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token:localStorage.getItem('token') || null,
        user:'user'
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem("token")
        },
        setUser(state,action) {
            state.user=action.payload.name
        },
    },
});

export const { login, logout,setUser } = authSlice.actions;
export default authSlice.reducer;