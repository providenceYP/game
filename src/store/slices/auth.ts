import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from 'api';
import { transformObjectToCase, snakelize } from 'src/utils/cases';
import {
  UserLogin,
  UserLoginDTO,
  UserRegister,
  UserRegisterDTO,
} from 'types/user';
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
      await API.createRequest('login', user as UserLoginDTO);
    } catch (error) {
      console.log(error);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: UserRegister) => {
    try {
      await API.createRequest(
        'register',
        transformObjectToCase(user, snakelize) as UserRegisterDTO,
      );
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
        (action: { type: string }) => action.type.endsWith(ActionTypes.PENDING),
        (state: AuthState) => ({ ...state, loading: true }),
      )
      .addMatcher<RejectedAction>(
        (action: { type: string }) =>
          action.type.endsWith(ActionTypes.REJECTED),
        () => ({
          loading: false,
          status: Statuses.ERROR,
        }),
      )
      .addMatcher<FulfilledAction>(
        (action: { type: string }) =>
          action.type.endsWith(ActionTypes.FULFILLED),
        () => ({
          loading: false,
          status: Statuses.OK,
        }),
      );
  },
});

export default slice.reducer;
