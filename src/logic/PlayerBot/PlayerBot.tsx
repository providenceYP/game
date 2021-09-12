import { randomNumber } from 'utils/random';

import { IPlayer } from 'logic/IPlayer/IPlayer';
import { PlayerType } from 'pages/GameScreen/types';

export class PlayerBot extends IPlayer {
  public isReady = true;

  public type = PlayerType.bot;

  run(callback: () => void) {
    setTimeout(callback, randomNumber(500, 1500));
  }
}
