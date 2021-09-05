import React from 'react';

import Layout from 'components/Layout';
import PlayerCard from 'components/PlayerCard/PlayerCard';

import GameComponent from 'logic/Game/index';

import { PlayerType } from './types';

export default function GameScreen() {
  return (
    <Layout className="p-10">
      <div className="self-start mr-10">
        <PlayerCard
          color={PlayerType.green}
          name="Jason"
          playerType={PlayerType.player}
          playerHealth={100}
          className="mb-10"
        />
        <PlayerCard
          color={PlayerType.red}
          name="Simon"
          playerType={PlayerType.bot}
          playerHealth={100}
        />
      </div>
      <div className="self-start">
        <GameComponent />
      </div>
    </Layout>
  );
}
