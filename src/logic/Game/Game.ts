import GameMap from 'logic/GameMap/GameMap';
import { Messanger } from 'logic/Messanger/Messanger';
import Manager from 'logic/Manager/Manager';
import { IPlayer } from 'logic/IPlayer/IPlayer';

export default class Game {
  private ctx: CanvasRenderingContext2D;

  public width = 1024;

  public height = 768;

  public started = false;

  private map: GameMap;

  private messanger: Messanger;

  private manager: Manager;

  private onEndGame: () => void;

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
  }

  init(players: IPlayer[], onEndGame: () => void): void {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.onEndGame = onEndGame;

    this.map = new GameMap(this.ctx, this.width, this.height);

    this.map.init();

    this.messanger = new Messanger(this.ctx, this.width, this.height);

    this.manager = new Manager(
      this.ctx,
      players,
      this.map,
      this.messanger,
      this.end,
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
