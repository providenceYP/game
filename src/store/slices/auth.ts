import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from 'api';
import { LoginFormType } from 'pages/Login/types';

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (user: LoginFormType) => {
    try {
      await API.createRequest('login', user);
    } catch (error) {
      console.log(error);
    }
  },
);

const slice = createSlice({
  name: 'users',
  initialState: { loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => ({ ...state, loading: true }))
      .addCase(loginUser.fulfilled, (state) => ({ ...state, loading: false }))
      .addCase(loginUser.rejected, (state) => ({ ...state, loading: false }));
  },
});

export default slice.reducer;
