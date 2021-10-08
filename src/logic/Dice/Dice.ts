import { Entity } from 'logic/Entity/Entity';
import { randomNumber } from 'utils/random';
import { animate } from 'utils/animate';
import { getRoundedRect } from 'utils/roundedRect';

export class Dice extends Entity {
  private pointRadius = this.width * 0.08;

  private speed = 7;

  private readonly points = {
    c: [this.x + this.width / 2, this.y + this.height / 2],
    lt: [this.x + this.width / 3.5, this.y + this.height / 3.5],
    lc: [this.x + this.width / 3.5, this.y + this.height / 2],
    lb: [this.x + this.width / 3.5, this.y + (this.height * 2.5) / 3.5],
    rt: [this.x + (this.width * 2.5) / 3.5, this.y + this.height / 3.5],
    rc: [this.x + (this.width * 2.5) / 3.5, this.y + this.height / 2],
    rb: [this.x + (this.width * 2.5) / 3.5, this.y + (this.height * 2.5) / 3.5],
  };

  private readonly edges = [
    [this.points.c],
    [this.points.lt, this.points.rb],
    [this.points.lt, this.points.c, this.points.rb],
    [this.points.lt, this.points.rt, this.points.rb, this.points.lb],
    [
      this.points.lt,
      this.points.rt,
      this.points.rb,
      this.points.lb,
      this.points.c,
    ],
    [
      this.points.lt,
      this.points.lc,
      this.points.lb,
      this.points.rt,
      this.points.rc,
      this.points.rb,
    ],
  ];

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    private color: string = 'white',
  ) {
    super(ctx, x, y, size, size);
  }

  public init() {}

  public async roll(
    time: number = randomNumber(10, 20, true),
  ): Promise<number> {
    return animate<number>(this.update, this.speed * time, null, time);
  }

  private update = (step: number, prevNumber: number) => {
    if (step % this.speed) {
      return prevNumber;
    }

    const number = this.getNextNumber(prevNumber);

    this.draw(number);

    return number;
  };

  private getNextNumber(prevNumber: number) {
    let number;

    while (!number || number === prevNumber) {
      number = Math.ceil(Math.random() * 6);
    }

    return number;
  }

  public draw(num = 1) {
    this.roundedRect(this.x, this.y, this.width, this.width, this.width * 0.2);

    const edge = new Path2D();

    this.edges[num - 1].forEach(([x, y]) => {
      edge.moveTo(x, y);
      edge.arc(x, y, this.pointRadius, 0, Math.PI * 2);
    });

    this.ctx.save();

    this.ctx.fillStyle = 'black';
    this.ctx.fill(edge);

    this.ctx.restore();
  }

  private roundedRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    const rectangle = getRoundedRect(x, y, width, height, radius);

    this.ctx.save();
    this.ctx.fillStyle = 'black';
    this.ctx.lineWidth = 3;
    this.ctx.stroke(rectangle);

    this.ctx.fillStyle = this.color;
    this.ctx.fill(rectangle);
    this.ctx.restore();
  }
}
