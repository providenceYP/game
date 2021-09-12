import React, { useEffect, useRef } from 'react';

import Game from 'logic/Game/Game';

import { Props } from './types';

function GameComponent({ players }: Props) {
  const canvas = useRef<HTMLCanvasElement>();
  const game = useRef<Game>(null);

  useEffect(() => {
    game.current = new Game(canvas.current);
    game.current.init(players);
  }, []);

  useEffect(() => {
    if (!game.current.started && players.every(({ isReady }) => isReady)) {
      game.current.start();
    }
  }, [players]);

  return <canvas ref={canvas} />;
}

export default React.memo(GameComponent);
