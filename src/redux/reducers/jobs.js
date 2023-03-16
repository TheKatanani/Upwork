import {
  createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  mainApi
} from '../../API';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    searchResults: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setStatusIdle: (state) => {
      state.status = 'idle';
    },
    setStatusLoading: (state) => {
      state.status = 'loading';
    },
    setStatusSucceeded: (state) => {
      state.status = 'succeeded';
    },
    setStatusFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setSearchResults,
  setStatusIdle,
  setStatusLoading,
  setStatusSucceeded,
  setStatusFailed,
  clearError,
} = jobsSlice.actions;

export const selectSearchResults = state => state.jobs.searchResults;
export const selectStatus = state => state.jobs.status;
export const selectError = state => state.jobs.error;

export const fetchSearchResults = (searchTerm) => async (dispatch) => {
  dispatch(setStatusLoading());
  try {
    const response = await axios.get(`${mainApi}jobs?title_like=${encodeURIComponent(searchTerm)}`);
    dispatch(setSearchResults(response.data));
    dispatch(setStatusSucceeded());
  } catch (error) {
    dispatch(setStatusFailed(error.message));
  }
};

export default jobsSlice.reducer;