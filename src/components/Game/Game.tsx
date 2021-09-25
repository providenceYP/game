import React, { useCallback, useEffect, useRef, useState } from 'react';

import Game from 'logic/Game/Game';

import Button from 'components/Button';
import Timer from 'components/Timer';

import { Props, Status } from './types';

function GameComponent({ players }: Props) {
  const [status, setStatus] = useState(Status.pause);
  const canvas = useRef<HTMLCanvasElement>();
  const game = useRef<Game>(null);

  const onEndGame = useCallback(() => {
    setStatus(Status.ended);
  }, []);

  useEffect(() => {
    game.current = new Game(canvas.current);
  }, []);

  useEffect(() => {
    if (status === Status.pause) {
      game.current.init(players, onEndGame);
    }
  }, [status]);

  useEffect(() => {
    if (
      status !== Status.ended &&
      !game.current.started &&
      players.every(({ isReady }) => isReady)
    ) {
      game.current.start();
      setStatus(Status.started);
    }
  }, [players, status]);

  const restart = useCallback(() => {
    setStatus(Status.pause);
  }, []);

  return (
    <div className="h-full w-full">
      <Timer started={status === Status.started} />
      <div className="relative">
        <canvas ref={canvas} className="max-w-full" />
        {status === Status.ended && (
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
    </div>
  );
}

export default React.memo(GameComponent);
