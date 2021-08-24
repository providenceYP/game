import { Props } from '../Entity/types';
import { Tile } from '../Tile/Tile';

export default class Game {
  protected ctx: CanvasRenderingContext2D;

  public width = 1044;

  public height = 778;

  public startX = 20;

  public startY = 10;

  public squareSize = 64;

  public squareInnerSize = this.squareSize - 2;

  protected entities: Props[] = [];

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
  }

  init(): void {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.startX, this.startY, 1044, 778);
    this.initEntities();
  }

  initEntities(): void {
    this.addEntity(
      new Tile(
        this.ctx,
        this.squareSize,
        this.squareSize,
        this.startX,
        this.startY,
        '#000000',
        '#ffffff',
        this.squareInnerSize,
        this.squareInnerSize,
        this.startX + 1,
        this.startY + 1,
      ),
    );
    for (let i = 0; i <= 15; i += 1) {
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
    for (let i = 1; i <= 12; i += 1) {
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

  addEntity(entity: Props) {
    this.entities.push(entity);
    entity.init();
  }
}
