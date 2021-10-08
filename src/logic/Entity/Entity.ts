import { Position } from 'utils/Position';
import { Props } from './types';

export abstract class Entity extends Position implements Props {
  public readonly initialX: number;

  public readonly initialY: number;

  public readonly innerCenterX = this.width / 2;

  public readonly centerX = this.x + this.innerCenterX;

  public readonly innerCenterY = this.height / 2;

  public readonly centerY = this.y + this.innerCenterY;

  constructor(
    public ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    super(x, y, width, height);

    this.initialX = x;
    this.initialY = y;
  }

  abstract init(...args: any[]): void;

  public abstract draw(...args: any[]): void;
}
