import React from 'react';
import GameComponent from 'logic/Game/index';
import PlayerCard from 'components/PlayerCard/PlayerCard';

export default function GameScreen() {
  enum PlayerType {
    bot = 'bot',
    player = 'player',
    name = 'Jason',
  }
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <PlayerCard
          color="bg-green-300"
          name={PlayerType.name}
          playerType={PlayerType.player}
          playerHealth="❤️ 100"
        />
        <PlayerCard
          color="bg-red-300"
          name="Simon"
          playerType="bot"
          playerHealth="❤️ 100"
        />
      </div>
      <GameComponent />
    </div>
  );
}
