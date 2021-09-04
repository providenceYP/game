import { PlayerType } from 'pages/GameScreen/types';

export class Player {
  public isReady = this.type === PlayerType.bot;

  public health = 100;

  constructor(
    public name: string,
    public type: PlayerType,
    public color: string = Player.generateColor(),
  ) {}

  static generateColor() {
    // eslint-disable-next-line no-bitwise
    return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`.padEnd(7, 'f');
  }
}
