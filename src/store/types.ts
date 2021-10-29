import { AsyncThunk } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, unknown>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type User = {
  avatar?: string;
  display_name: string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone?: string;
  second_name: string;
};

export type AuthState = {
  loading: boolean;
  status: string | null;
  user?: User;
};

export type LeaderboardData = {
  user: User;
  health: number;
};

export type LeaderboardState = {
  loading: boolean;
  data: LeaderboardData[];
  status: string | null;
};

export enum Statuses {
  OK = 'OK',
  ERROR = 'ERROR',
}

export enum ActionTypes {
  PENDING = '/pending',
  REJECTED = '/rejected',
  FULFILLED = '/fulfilled',
}
