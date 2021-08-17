import { Entity } from '../Entity/Entity';
// import Game from '../Game/Game';
// import { IEntity } from '../Entity/IEntity';
// import { Position } from '../../utils/Position';

export class Tile extends Entity {
  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    x: number,
    y: number,
    public colorBorder: string,
    public colorInside: string,
    public widthInside: number,
    public heightInside: number,
    public xInside: number,
    public yInside: number,
  ) {
    super(ctx, x, y, width, height);
    // this.colorBorder;
    // this.colorInside,
  }

  init(): void {
    this.update();
  }

  update(): void {
    this.ctx.fillStyle = this.colorBorder;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.colorInside;
    this.ctx.fillRect(this.xInside, this.yInside, this.widthInside, this.heightInside);
  }
}
