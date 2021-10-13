import { Position } from 'utils/Position';
import { Props } from './types';

export abstract class Entity extends Position implements Props {
  public readonly initialX: number;

  public readonly initialY: number;

  public readonly centerX: number;

  public readonly centerY: number;

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

    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
  }

  abstract init(): void;

  public abstract draw(): void;
}
