import { Entity } from 'logic/Entity/Entity';

export class Messanger extends Entity {
  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    super(ctx, 0, 0, width, height);
  }

  init() {}

  draw() {}

  show(text: string, callback = () => {}): void {
    this.ctx.save();

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.53)';
    this.ctx.fillRect(
      this.x,
      this.y,
      this.x + this.width,
      this.y + this.height,
    );

    this.ctx.font = '72px sans-serif';
    this.ctx.fillStyle = 'white';

    const maxWidth = this.width * 0.75;
    const measureText = this.ctx.measureText(text);
    const textWidth =
      measureText.width > maxWidth ? maxWidth : measureText.width;

    this.ctx.fillText(
      text,
      this.x + this.centerX - textWidth / 2,
      this.y + this.centerY,
      maxWidth,
    );

    this.ctx.restore();

    if (callback) {
      setTimeout(callback, 2000);
    }
  }
}
