import { Position } from 'utils/Position';
import { Props } from './types';

export abstract class Entity extends Position implements Props {
  public readonly initialX: number;

  public readonly initialY: number;

  public readonly centerX = this.width / 2;

  public readonly centerY = this.height / 2;

  constructor(
    public ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    readonly width: number,
    readonly height: number,
  ) {
    super(x, y, width, height);

    this.initialX = x;
    this.initialY = y;
  }

  abstract init(): void;

  public abstract draw(): void;
}
