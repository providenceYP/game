import { generateRGBA } from 'utils/colors';

import { PlayerType } from 'pages/GameScreen/types';

export abstract class Player {
  public isReady = false;

  public type: PlayerType;

  public health = 100;

  constructor(
    public name: string,
    public color: string = generateRGBA(100, 200),
  ) {}

  abstract run(callback: () => void): void;
}
