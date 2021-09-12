import { PlayerType } from 'pages/GameScreen/types';
import { IPlayer } from 'logic/IPlayer/IPlayer';

export class Player extends IPlayer {
  public isReady = false;

  public type = PlayerType.player;

  run(callback: () => void) {
    const listener = () => {
      window.removeEventListener('keydown', listener);
      window.removeEventListener('touchstart', listener);

      callback();
    };

    window.addEventListener('keydown', listener);
    window.addEventListener('touchstart', listener);
  }
}
