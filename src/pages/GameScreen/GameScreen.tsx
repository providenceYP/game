import React from 'react';

import Layout from 'components/Layout';
import PlayerCard from 'components/PlayerCard/PlayerCard';

import GameComponent from 'logic/Game/index';

import { PlayerType } from './types';

export default function GameScreen() {
  return (
    <Layout>
      <div className="self-start">
        <PlayerCard
          color={PlayerType.green}
          name="Jason"
          playerType={PlayerType.player}
          playerHealth={100}
        />
        <PlayerCard
          color={PlayerType.red}
          name="Simon"
          playerType={PlayerType.bot}
          playerHealth={100}
        />
      </div>
      <GameComponent />
    </Layout>
  );
}
