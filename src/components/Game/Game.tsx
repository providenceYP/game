import React, { useCallback, useEffect, useRef, useState } from 'react';

import Game from 'logic/Game/Game';

import Button from 'components/Button';

import { Props } from './types';

function GameComponent({ players }: Props) {
  const [isEnded, setIsEnded] = useState(false);
  const canvas = useRef<HTMLCanvasElement>();
  const game = useRef<Game>(null);

  const onEndGame = useCallback(() => {
    setIsEnded(true);
  }, []);

  useEffect(() => {
    game.current = new Game(canvas.current);
  }, []);

  useEffect(() => {
    if (!isEnded) {
      game.current.init(players, onEndGame);
    }
  }, [isEnded]);

  useEffect(() => {
    if (
      !isEnded &&
      !game.current.started &&
      players.every(({ isReady }) => isReady)
    ) {
      game.current.start();
    }
  }, [players, isEnded]);

  const restart = useCallback(() => {
    setIsEnded(false);
  }, []);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvas} className="max-w-full" />
      {isEnded && (
        <div className="absolute bg-gray-400 h-full w-full top-0 left-0 bg-opacity-40">
          <Button
            className="text-4xl bg-blue-700 text-white p-8 rounded absolute left-1/2 top-1/4 transform -translate-y-1/2 -translate-x-1/2"
            onClick={restart}
          >
            Restart
          </Button>
        </div>
      )}
    </div>
  );
}

export default React.memo(GameComponent);
