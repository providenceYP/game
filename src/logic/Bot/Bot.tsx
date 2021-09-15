import { randomNumber } from 'utils/random';

import { Player } from 'logic/Player/Player';
import { PlayerType } from 'pages/GameScreen/types';

export class Bot extends Player {
  public isReady = true;

  public type = PlayerType.bot;

  run(callback: () => void) {
    setTimeout(callback, randomNumber(500, 1500));
  }
}
