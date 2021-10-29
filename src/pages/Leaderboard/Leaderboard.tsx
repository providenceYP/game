import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from 'store';
import { getLeaderboard } from 'store/slices/leaderboard';
import { LeaderboardData } from 'store/types';

import Avatar from 'components/Avatar';
import Layout from 'components/Layout';
import Table from 'components/Table';

const Leaderboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector<State>(
    (state) => state?.leaderboard?.data,
  ) as LeaderboardData[];

  useEffect(() => {
    dispatch(
      getLeaderboard({ ratingFieldName: 'health', limit: 10, cursor: 0 }),
    );
  }, [dispatch]);

  const headers = ['№', 'Аватар', 'Имя', 'Здоровье'];
  const rows =
    data?.map(({ user: { avatar, display_name }, health }, index) => [
      index + 1,
      <Avatar imageSrc={avatar} />,
      display_name,
      health,
    ]) || [];

  return (
    <Layout>
      <div className="container m-auto max-w-3xl p-8">
        <h1 className="text-gray-600 text-3xl mb-14">Топ-10 лидеров</h1>
        <div className="flex justify-between">
          <Table headers={headers} rows={rows.slice(0, 5)} />
          <Table headers={headers} rows={rows.slice(5, 10)} />
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
