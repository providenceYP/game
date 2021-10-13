import { Entity } from 'logic/Entity/Entity';

import { MonsterData } from 'utils/monsters';
import { getRoundedRect } from 'utils/roundedRect';

import angryImage from 'static/images/angry.png';

export class Monster extends Entity {
  private image: HTMLImageElement;

  private angryImage: HTMLImageElement;

  public shown = false;

  public health: number;

  public readonly attack: number;

  constructor(public ctx: CanvasRenderingContext2D, public data: MonsterData) {
    super(ctx, 0, 0, 0, 0);

    this.health = this.data.health;
    this.attack = this.data.attack;

    this.image = new Image();
    this.image.src = this.data.image;

    this.angryImage = new Image();
    this.angryImage.src = angryImage;
  }

  init(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.width = size;
    this.height = size;
  }

  public draw() {
    const borderWidth = this.width * 0.1;
    const textHeight = borderWidth;

    this.ctx.save();
    this.ctx.fillStyle = 'white';
    this.ctx.fill(
      getRoundedRect(this.x, this.y, this.width, this.height, this.width * 0.2),
    );

    const height = this.height - 3 * borderWidth - textHeight;
    const width = (this.image.width / this.image.height) * height;

    this.ctx.drawImage(
      this.image,
      this.x + borderWidth + (this.width - 2 * borderWidth - width) / 2,
      this.y + borderWidth,
      width,
      height,
    );

    this.ctx.fillStyle = 'black';
    this.ctx.font = `${textHeight}px sans-serif`;

    const text = `⚔️ ${this.data.attack} / ${this.health} ❤️`;
    const measureText = this.ctx.measureText(text);

    this.ctx.fillText(
      text,
      this.x + (this.width - measureText.width) / 2,
      this.y + this.height - borderWidth,
    );

    this.ctx.restore();
  }

  async subtractHealth(health: number) {
    this.health = Math.max(0, this.health - health);

    this.ctx.drawImage(
      this.angryImage,
      this.x + (this.width * 2) / 3,
      this.y + this.height / 7,
      this.width / 10,
      this.width / 10,
    );

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.draw();
        resolve();
      }, 500);
    });
  }
}
