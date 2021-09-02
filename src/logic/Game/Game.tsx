import { Props } from '../Entity/types';
import { Tile } from '../Tile/Tile';
import { PlayerObject } from '../PlayerObject/PlayerObject';

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

  public radius = this.squareSize - 10;

  protected entities: Props[] = [];

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
  }

  init(): void {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.startX, this.startY, this.width, this.height);
    this.initEntities();
  }

  initEntities(): void {
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

      this.addEntity(
        new PlayerObject(
          this.ctx,
          50, // x
          this.height - this.squareSize - 32 - this.squareSize, // y
          (this.squareSize - 20) / 2, // radius
          '#def9ed', // color
          'one', // playerType
        ),
      );

      this.addEntity(
        new PlayerObject(
          this.ctx,
          50 + 256 + this.squareSize, // x
          this.height - this.squareSize + 32, // y
          (this.squareSize - 20) / 2, // radius
          '#fee8e8', // color
          'two', // playerType
        ),
      );
    }
  }

  addEntity(entity: any) {
    this.entities.push(entity);
    entity.init();
  }
}
