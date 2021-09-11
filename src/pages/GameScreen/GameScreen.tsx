import React, { useState } from 'react';

import Layout from 'components/Layout';
import PlayerCard from 'components/PlayerCard';
import GameComponent from 'components/Game';

import { Player } from 'logic/Player/Player';
import { PlayerType } from './types';

export default function GameScreen() {
  // TODO: убрать после добавления redux
  const [players, setPlayers] = useState([
    new Player('Jason', PlayerType.player),
    new Player('Simon', PlayerType.bot),
  ]);

  const makeHandleChangeStatus = (index: number) => () => {
    setPlayers((state) => {
      const newPlayers = [...state];
      newPlayers[index].isReady = true;

      return newPlayers;
    });
  };

  return (
    <Layout className="p-10">
      <div className="self-start mr-10">
        {players.map(({ color, name, type, health, isReady }, index) => (
          <PlayerCard
            key={name}
            color={color}
            name={name}
            playerType={type}
            playerHealth={health}
            isReady={isReady}
            changeStatus={makeHandleChangeStatus(index)}
          />
        ))}
      </div>
      <GameComponent players={players} />
    </Layout>
  );
}
