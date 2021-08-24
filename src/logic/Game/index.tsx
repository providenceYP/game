import React, { useEffect, createRef } from 'react';
import Game from './Game';

export default function GameComponent() {
  const canvas = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const game = new Game(canvas.current);
    game.init();
  }, []);

  return <canvas ref={canvas}></canvas>;
}
