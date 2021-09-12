import { changeAlpha } from 'utils/colors';

import { Entity } from 'logic/Entity/Entity';
import { IPlayer } from 'logic/IPlayer/IPlayer';

import { Direction } from './types';

export class PlayerObject extends Entity {
  public trackColor: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    private radius: number,
    public color: string,
    public player: IPlayer,
    public direction: Direction = Direction.forward,
  ) {
    super(ctx, x, y, 2 * radius, 2 * radius);

    this.trackColor = changeAlpha(this.color, 0.3);
  }

  init(): void {}

  draw(): void {
    const circle = new Path2D();

    circle.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);

    this.ctx.save();

    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#003300';

    this.ctx.fill(circle);
    this.ctx.stroke(circle);

    this.ctx.restore();
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
