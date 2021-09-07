import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from 'api';
import { LoginFormType } from 'pages/Login/types';
import { RegisterFormType } from 'pages/Register/types';

export enum Statuses {
  OK = 'OK',
  ERROR = 'ERROR',
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user: LoginFormType) => {
    try {
      await API.createRequest('login', user);
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: RegisterFormType) => {
    const { firstName, secondName, login, email, password, phone } = user;

    try {
      await API.createRequest('register', {
        first_name: firstName,
        second_name: secondName,
        login,
        email,
        password,
        phone,
      });
    } catch (error) {
      throw new Error(error);
    }
  },
);

const slice = createSlice({
  name: 'auth',
  initialState: { loading: false, status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => ({ ...state, loading: true }))
      .addCase(loginUser.fulfilled, (state) => ({
        ...state,
        loading: false,
        status: Statuses.OK,
      }))
      .addCase(loginUser.rejected, (state) => ({
        ...state,
        loading: false,
        status: Statuses.ERROR,
      }))
      .addCase(registerUser.pending, (state) => ({ ...state, loading: true }))
      .addCase(registerUser.fulfilled, (state) => ({
        ...state,
        loading: false,
        status: Statuses.OK,
      }))
      .addCase(registerUser.rejected, (state) => ({
        ...state,
        loading: false,
        status: Statuses.ERROR,
      }));
  },
});

export default slice.reducer;
