import React, { useState } from 'react';

import Layout from 'components/Layout';
import PlayerCard from 'components/PlayerCard/PlayerCard';
import GameComponent from 'components/Game';

import { Player } from 'logic/Player/Player';
import { PlayerType } from './types';

export default function GameScreen() {
  // TODO: убрать после добавления redux
  const [players, setPlayers] = useState([
    new Player('Jason', PlayerType.player),
    new Player('Simon', PlayerType.bot),
  ]);

  return (
    <Layout>
      <div className="self-start">
        {players.map(({ color, name, type, health, isReady }, index) => (
          <PlayerCard
            key={name}
            color={color}
            name={name}
            playerType={type}
            playerHealth={health}
            isReady={isReady}
            changeStatus={() => {
              setPlayers((state) => {
                const newPlayers = [...state];
                newPlayers[index].isReady = true;

                return newPlayers;
              });
            }}
          />
        ))}
      </div>
      <GameComponent players={players} />
    </Layout>
  );
}
