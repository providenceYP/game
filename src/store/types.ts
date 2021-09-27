import { AsyncThunk } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, unknown>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

type AuthState = {
  loading: boolean;
  status: string | null;
};

export { PendingAction, RejectedAction, FulfilledAction, AuthState };
