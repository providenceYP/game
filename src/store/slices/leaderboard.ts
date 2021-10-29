import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from 'api';

import { LeaderboardData, LeaderboardState, Statuses } from 'store/types';

const initialState: LeaderboardState = {
  loading: false,
  status: null,
  data: [],
};

export const getLeaderboard = createAsyncThunk(
  'leaderboard/get',
  async (data: { ratingFieldName: string; limit: number; cursor: number }) => {
    const response = await API.createRequest('leaderboard', data);

    return response.data;
  },
);

export const addToLeaderboard = createAsyncThunk(
  'leaderboard/add',
  async (data: any) =>
    API.createRequest('addToLeaderboard', {
      data,
      ratingFieldName: 'health',
      teamName: process.env.TEAM_NAME,
    }),
);

const slice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeaderboard.pending, (state: LeaderboardState) => ({
        ...state,
        loading: true,
      }))
      .addCase(getLeaderboard.rejected, () => ({
        loading: false,
        data: [],
        status: Statuses.ERROR,
      }))
      .addCase(
        getLeaderboard.fulfilled,
        (
          state: LeaderboardState,
          action: { payload: { data: LeaderboardData }[] },
        ) => ({
          loading: false,
          data: action.payload.map(({ data }) => data),
          status: Statuses.OK,
        }),
      );
  },
});

export default slice.reducer;
