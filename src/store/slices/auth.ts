import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from 'api';
import { transformObjectToCase, snakelize } from 'utils/cases';
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
  Statuses,
  ActionTypes,
} from 'store/types';

const initialState: AuthState = { loading: false, status: null, user: null };

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user: UserLogin) => API.createRequest('login', user as UserLoginDTO),
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: UserRegister) =>
    API.createRequest(
      'register',
      transformObjectToCase(user, snakelize) as UserRegisterDTO,
    ),
);

export const getUser = createAsyncThunk('auth/getUser', async () => {
  const response = await API.createRequest('user');

  return response.data;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () =>
  API.createRequest('logout'),
);

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => ({
      loading: false,
      status: Statuses.OK,
      user: action.payload,
    }));

    builder.addCase(logoutUser.fulfilled, () => ({
      loading: false,
      status: Statuses.OK,
      user: null,
    }));

    builder
      .addMatcher<PendingAction>(
        (action: { type: string }) => action.type.endsWith(ActionTypes.PENDING),
        (state: AuthState) => ({ ...state, loading: true }),
      )
      .addMatcher<RejectedAction>(
        (action: { type: string }) =>
          action.type.endsWith(ActionTypes.REJECTED),
        (state) => ({
          ...state,
          loading: false,
          status: Statuses.ERROR,
        }),
      )
      .addMatcher<FulfilledAction>(
        (action: { type: string }) =>
          action.type.endsWith(ActionTypes.FULFILLED),
        (state) => ({
          ...state,
          loading: false,
          status: Statuses.OK,
        }),
      );
  },
});

export default slice.reducer;
