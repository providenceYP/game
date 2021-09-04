import { Entity } from 'logic/Entity/Entity';

export class Dice extends Entity {
  private pointRadius = this.width * 0.08;

  private animationHandle: ReturnType<typeof setTimeout>;

  private speed = 120;

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

  public async roll(time: number) {
    return new Promise((resolve) => {
      if (this.animationHandle) {
        clearTimeout(this.animationHandle);
      }

      this.animationHandle = setTimeout(
        this.update,
        this.speed,
        resolve,
        null,
        time,
      );
    });
  }

  private update = (
    resolve: (value: number) => void,
    prevNumber: number,
    time: number,
    item = 0,
  ) => {
    const number = this.getNextNumber(prevNumber);

    this.draw(number);

    if (item < time) {
      this.animationHandle = setTimeout(
        this.update,
        this.speed,
        resolve,
        number,
        time,
        item + 1,
      );
    } else {
      resolve(number);
    }
  };

  private getNextNumber(prevNumber: number) {
    let number;

    while (!number || number === prevNumber) {
      number = Math.ceil(Math.random() * 6);
    }

    return number;
  }

  public draw(num: number) {
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
    const rectangle = new Path2D();
    rectangle.moveTo(x, y + radius);
    rectangle.lineTo(x, y + height - radius);
    rectangle.arcTo(x, y + height, x + radius, y + height, radius);
    rectangle.lineTo(x + width - radius, y + height);
    rectangle.arcTo(
      x + width,
      y + height,
      x + width,
      y + height - radius,
      radius,
    );
    rectangle.lineTo(x + width, y + radius);
    rectangle.arcTo(x + width, y, x + width - radius, y, radius);
    rectangle.lineTo(x + radius, y);
    rectangle.arcTo(x, y, x, y + radius, radius);

    this.ctx.save();
    this.ctx.fillStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.stroke(rectangle);

    this.ctx.fillStyle = this.color;
    this.ctx.fill(rectangle);
    this.ctx.restore();
  }
}
