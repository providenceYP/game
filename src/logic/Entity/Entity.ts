import { Position } from 'utils/Position';
import { Props } from './types';

export abstract class Entity extends Position implements Props {
  public readonly initialX: number;

  public readonly initialY: number;

  public readonly centerX: number;

  public readonly centerY: number;

  public readonly innerCenterX: number;

  public readonly innerCenterY: number;

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

    this.innerCenterX = this.width / 2;

    this.innerCenterY = this.height / 2;

    this.centerX = this.x + this.innerCenterX;
    this.centerY = this.y + this.innerCenterY;
  }

  abstract init(...args: any[]): void;

  public abstract draw(...args: any[]): void;
}
