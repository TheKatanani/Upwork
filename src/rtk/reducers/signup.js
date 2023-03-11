import {
  createSlice
} from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    fname: "",
    lname: "",
    email: "",
    password: "",
    addres: "",
    error: {},
    sendEmail: false,
    agree: false,
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
    handleCheckBoxChange: (state, action) => {
      const {
        id,
        checked
      } = action.payload
      state[id] = checked
    },
    loading: (state, action) => {
      state.isLoading = action.payload
    },
    error: (state, action) => {
      state.error = action.payload.errors
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
  handleCheckBoxChange,
  showPassword
} = signupSlice.actions;
export default signupSlice.reducer;