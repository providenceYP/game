import React, { useState } from 'react';

import Layout from 'components/Layout';
import PlayerCard from 'components/PlayerCard';
import GameComponent from 'components/Game';

import { Person } from 'logic/Person/Person';
import { Bot } from 'logic/Bot/Bot';

export default function GameScreen() {
  const username = localStorage.getItem('username');
  // TODO: убрать после добавления redux
  const [players, setPlayers] = useState([
    new Person(username || 'Jason'),
    new Bot('Simon'),
  ]);

  const makeHandleChangeStatus = (index: number) => () => {
    setPlayers((state) => {
      const newPlayers = [...state];
      newPlayers[index].isReady = true;

      return newPlayers;
    });
  };

  return (
    <Layout className="p-10 overflow-x-auto flex-wrap xl:flex-nowrap">
      <div className="flex flex-row self-start flex-wrap xl:mr-12 xl:flex-col xl:flex-nowrap">
        {players.map(({ color, name, type, health, isReady }, index) => (
          <PlayerCard
            key={name}
            color={color}
            name={name}
            playerType={type}
            playerHealth={health}
            isReady={isReady}
            changeStatus={makeHandleChangeStatus(index)}
            className={
              index === players.length - 1 ? 'mb-10' : 'mr-10 mb-10 xl:mr-0'
            }
          />
        ))}
      </div>
      <div className="self-start max-w-full xl:max-w-screen-lg">
        <GameComponent players={players} />
      </div>
    </Layout>
  );
}
