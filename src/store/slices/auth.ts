import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from 'api';
import { UserLogin, UserLoginBack } from 'types/user';
import { RegisterFormType } from 'pages/Register/types';
import {
  PendingAction,
  RejectedAction,
  FulfilledAction,
  AuthState,
} from 'store/types';

export enum Statuses {
  OK = 'OK',
  ERROR = 'ERROR',
}

export enum ActionTypes {
  PENDING = '/pending',
  REJECTED = '/rejected',
  FULFILLED = '/fulfilled',
}

const initialState: AuthState = { loading: false, status: null };

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user: UserLogin) => {
    try {
      await API.createRequest('login', user as UserLoginBack);
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  },
);

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith(ActionTypes.PENDING),
        (state) => ({
          ...state,
          loading: false,
          status: Statuses.OK,
        }),
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith(ActionTypes.REJECTED),
        (state) => ({
          ...state,
          loading: false,
          status: Statuses.ERROR,
        }),
      )
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith(ActionTypes.FULFILLED),
        (state) => ({ ...state, loading: true }),
      );
  },
});

export default slice.reducer;
