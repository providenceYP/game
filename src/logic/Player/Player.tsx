import { generateRGBA } from 'utils/colors';

import { PlayerType } from 'pages/GameScreen/types';

export abstract class Player {
  public isReady = false;

  public type: PlayerType;

  public health = 100;

  constructor(
    public name: string,
    public onChangeHealth: (player: Player) => void,
    public color: string = generateRGBA(100, 200),
  ) {}

  abstract run(callback: () => void): void;

  subtractHealth(health: number) {
    this.health = Math.max(0, this.health - health);
    this.onChangeHealth(this);
  }
}
