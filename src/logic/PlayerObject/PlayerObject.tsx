export class PlayerObject {
  constructor(
    // this.state = {date: new Date()};
    public ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
    public playerType: string,
  ) {}

  init(): void {
    this.update();
  }

  update(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color; // '#def9ed';
    this.ctx.fill();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#003300';
    this.ctx.stroke();
  }

  move(counter: number): void {
    if (this.playerType === 'one') {
      if (this.y > 40) {
        this.y -= 64 * counter;
      } else {
        this.x += 64 * counter;
      }
    }
    if (this.playerType === 'two') {
      if (this.x < 1044) {
        this.x += 64 * counter;
      } else {
        this.y -= 64 * counter;
      }
    }
  }
}
