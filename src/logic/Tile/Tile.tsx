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
    public lineWidth = 1,
  ) {
    super(ctx, x, y, width, height);
  }

  init(): void {}

  draw(): void {
    this.ctx.save();

    this.ctx.fillStyle = this.borderColor;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.fillStyle = this.insideColor;
    this.ctx.clearRect(
      this.x + this.lineWidth,
      this.y + this.lineWidth,
      this.width - 2 * this.lineWidth,
      this.height - 2 * this.lineWidth,
    );
    this.ctx.fillRect(
      this.x + this.lineWidth,
      this.y + this.lineWidth,
      this.width - 2 * this.lineWidth,
      this.height - 2 * this.lineWidth,
    );

    this.ctx.restore();
  }
}
