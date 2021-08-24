import { Position } from 'utils/Position';
import { Props } from './types';

export abstract class Entity extends Position implements Props {
  public initialX: number;

  public initialY: number;

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

  abstract init(): void;
}
