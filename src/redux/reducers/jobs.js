import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../API';
import { getMockData } from '../../services/mockService';

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

export const selectSearchResults = (state) => state.jobs.searchResults;
export const selectStatus = (state) => state.jobs.status;
export const selectError = (state) => state.jobs.error;

export const fetchSearchResults = (searchTerm) => async (dispatch) => {
  dispatch(setStatusLoading());
  try {
    let results = null;

    if (mainApi && !mainApi.includes('undefined') && (mainApi.startsWith('http://') || mainApi.startsWith('https://'))) {
      try {
        const response = await axios.get(`${mainApi}jobs?title_like=${encodeURIComponent(searchTerm)}`, { timeout: 2500 });
        results = response.data;
      } catch (err) {
        console.warn('Live search API failed, falling back to mock search:', err.message);
      }
    }

    if (!results) {
      results = getMockData(`jobs?title_like=${encodeURIComponent(searchTerm)}`) || [];
    }

    dispatch(setSearchResults(results));
    dispatch(setStatusSucceeded());
  } catch (error) {
    dispatch(setStatusFailed(error.message));
  }
};

export default jobsSlice.reducer;