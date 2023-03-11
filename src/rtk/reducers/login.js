import {
    createSlice
} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        password: "",
        error: {},
        selectPhone: "",
        isLoading: false,
        showPassword: false,
    },
    reducers: {
        handleInputChange: (state, action) => {
            const {
                id,
                value
            } = action.payload
            state[id] = value
        },
        loading: (state, action) => {
            state.isLoading = action.payload
        },
        error: (state, action) => {
            state.error = action.payload
        },
        showPassword: (state) => {
            state.showPassword = !state.showPassword
        },
    },
});

export const {
    handleInputChange,
    loading,
    error,
    showPassword
} = loginSlice.actions;
export default loginSlice.reducer;
