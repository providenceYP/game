import React from 'react';
import GameComponent from 'logic/Game/index';
import PlayerCard from 'components/PlayerCard/PlayerCard';
import { PlayerType } from './types';

export default function GameScreen() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <PlayerCard
          color={PlayerType.green}
          name="Jason"
          playerType={PlayerType.player}
          playerHealth="❤️ 100"
        />
        <PlayerCard
          color={PlayerType.red}
          name="Simon"
          playerType={PlayerType.bot}
          playerHealth="❤️ 100"
        />
      </div>
      <GameComponent />
    </div>
  );
}
