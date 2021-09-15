import GameMap from 'logic/GameMap/GameMap';
import { Messenger } from 'logic/Messenger/Messenger';
import Manager from 'logic/Manager/Manager';
import { Player } from 'logic/Player/Player';

export default class Game {
  private ctx: CanvasRenderingContext2D;

  public width = 1024;

  public height = 768;

  public started = false;

  private map: GameMap;

  private messenger: Messenger;

  private manager: Manager;

  private onEndGame: () => void;

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
  }

  init(players: Player[], onEndGame: () => void): void {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.onEndGame = onEndGame;

    this.map = new GameMap(this.ctx, this.width, this.height);

    this.map.init();

    this.messenger = new Messenger(this.ctx, this.width, this.height);

    this.manager = new Manager(
      this.ctx,
      this.map,
      this.messenger,
      this.end,
      players,
    );

    this.manager.init();
  }

  start() {
    this.started = true;

    this.manager.start();
  }

  end = () => {
    this.started = false;

    this.onEndGame();
  };
}
