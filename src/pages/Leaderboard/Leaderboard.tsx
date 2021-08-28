import React from 'react';

import Avatar from 'components/Avatar';
import Table from 'components/Table';

const users = new Array(10).fill({
  avatar: null,
  name: '123',
  health: 15,
});

const Leaderboard = (): JSX.Element => {
  const headers = ['№', 'Аватар', 'Имя', 'Здоровье'];
  const rows = users.map(({ avatar, name, health }, index) => [
    index + 1,
    <Avatar image={avatar} />,
    name,
    health,
  ]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="container m-auto max-w-3xl p-8">
        <h1 className="text-gray-600 text-3xl mb-14">Топ-10 лидеров</h1>
        <div className="flex justify-between">
          <Table headers={headers} rows={rows.slice(0, 5)} />
          <Table headers={headers} rows={rows.slice(5, 10)} />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
