import { PlayerType } from 'pages/GameScreen/types';
import { Player } from 'logic/Player/Player';

export class Person extends Player {
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
