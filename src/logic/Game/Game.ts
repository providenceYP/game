import { randomNumber } from 'utils/random';

import { Dice } from '../Dice/Dice';
import { Entity } from '../Entity/Entity';
import { Player } from '../Player/Player';
import { Tile } from '../Tile/Tile';

export default class Game {
  protected ctx: CanvasRenderingContext2D;

  public width = 1044;

  public height = 778;

  public startX = 20;

  public startY = 10;

  public squareSize = 64;

  public squareInnerSize = this.squareSize - 2;

  public horizontalTilesQuantity = 15;

  public verticalTilesQuantity = 12;

  public centerX = this.width / 2;

  public centerY = this.height / 2;

  public started = false;

  private players: Player[];

  private activePlayer: Player;

  protected entities: Entity[] = [];

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
  }

  init(players: Player[]): void {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.players = players;

    this.addEntities();
    this.update();

    this.showInfo('Waiting all players...');
  }

  addEntities(): void {
    for (let i = 0; i <= this.horizontalTilesQuantity; i += 1) {
      this.addEntity(
        new Tile(
          this.ctx,
          this.squareSize,
          this.squareSize,
          this.startX + this.squareSize * i,
          this.startY,
          '#000000',
          '#ffffff',
          this.squareInnerSize,
          this.squareInnerSize,
          this.startX + 1 + this.squareSize * i,
          this.startY + 1,
        ),
      );
      this.addEntity(
        new Tile(
          this.ctx,
          this.squareSize,
          this.squareSize,
          this.startX + this.squareSize * i,
          this.startY + this.squareSize * 11,
          '#000000',
          '#ffffff',
          this.squareInnerSize,
          this.squareInnerSize,
          this.startX + 1 + this.squareSize * i,
          this.startY + 1 + this.squareSize * 11,
        ),
      );
    }
    for (let i = 1; i <= this.verticalTilesQuantity; i += 1) {
      this.addEntity(
        new Tile(
          this.ctx,
          this.squareSize,
          this.squareSize,
          this.startX,
          this.startY + this.squareSize * i,
          '#000000',
          '#ffffff',
          this.squareInnerSize,
          this.squareInnerSize,
          this.startX + 1,
          this.startY + 1 + this.squareSize * i,
        ),
      );
      this.addEntity(
        new Tile(
          this.ctx,
          this.squareSize,
          this.squareSize,
          this.startX + this.squareSize * 15,
          this.startY + this.squareSize * i,
          '#000000',
          '#ffffff',
          this.squareInnerSize,
          this.squareInnerSize,
          this.startX + 1 + this.squareSize * 15,
          this.startY + 1 + this.squareSize * i,
        ),
      );
    }
  }

  addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  update = () => {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.startX, this.startY, this.width, this.height);

    this.entities.forEach((entity) => entity.init());
  };

  async start() {
    this.update();

    this.started = true;

    const playerDices = this.players.map(
      (entity, index) =>
        new Dice(
          this.ctx,
          ((this.centerX * Math.random() * index) % this.centerX) +
            this.centerX / 2,
          ((this.centerY * Math.random() * index) % this.centerY) +
            this.centerY / 2,
          125,
          entity.color,
        ),
    );

    const wonDiceIndex = await this.rollDices(playerDices);
    this.activePlayer = this.players[wonDiceIndex];

    this.showInfo(`${this.activePlayer.name} goes first.`, this.update);
  }

  rollDices = async (dices: Dice[]): Promise<number> => {
    const results = await Promise.all(
      dices.map((dice) => dice.roll(randomNumber(7, 16, true))),
    );

    const indexOfMaxResult = results.reduce(
      (acc: number, value, index, list) => (value > list[acc] ? index : acc),
      0,
    );

    const hasWinner =
      results.filter((res) => res !== results[indexOfMaxResult]).length ===
      results.length - 1;

    return hasWinner ? indexOfMaxResult : this.rollDices(dices);
  };

  showInfo(text: string, callback?: () => void) {
    this.ctx.fillStyle = 'rgba(0,0,0,0.53)';
    this.ctx.fillRect(
      this.startX,
      this.startY,
      this.startX + this.width,
      this.startY + this.height,
    );

    this.ctx.font = '72px sans-serif';
    this.ctx.fillStyle = 'white';

    const maxWidth = this.width * 0.75;
    const measureText = this.ctx.measureText(text);
    const textWidth =
      measureText.width > maxWidth ? maxWidth : measureText.width;

    this.ctx.fillText(
      text,
      this.startX + this.centerX - textWidth / 2,
      this.startY + this.centerY,
      maxWidth,
    );

    if (callback) {
      setTimeout(callback, 2000);
    }
  }
}
