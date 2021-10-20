import { Entity } from '../Entity/Entity';

export class Tile extends Entity {
  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    x: number,
    y: number,
    public borderColor: string,
    public insideColor: string,
  ) {
    super(ctx, x, y, width, height);
  }

  init(): void {}

  draw(): void {
    const rect = new Path2D();

    rect.rect(this.x, this.y, this.width, this.height);

    this.ctx.save();
    this.ctx.fillStyle = this.insideColor;
    this.ctx.strokeStyle = this.borderColor;

    this.ctx.fill(rect);
    this.ctx.stroke(rect);

    this.ctx.restore();
  }
}
