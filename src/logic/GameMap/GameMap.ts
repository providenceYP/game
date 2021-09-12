import { Tile } from '../Tile/Tile';

export default class GameMap {
  public squareSize = 64;

  public horizontalTilesQuantity = Math.floor(this.width / this.squareSize);

  public verticalTilesQuantity = Math.floor(this.height / this.squareSize);

  public centerX = this.width / 2;

  public centerY = this.height / 2;

  public readonly tiles: Tile[] = [];

  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number,
  ) {}

  init(): void {
    this.initTiles();
  }

  private createTile = (x: number, y: number) =>
    new Tile(
      this.ctx,
      this.squareSize,
      this.squareSize,
      x,
      y,
      '#000000',
      '#ffffff',
    );

  initTiles(): void {
    for (let i = this.verticalTilesQuantity - 1; i > 0; i -= 1) {
      this.addEntity(this.createTile(0, this.squareSize * i));
    }

    for (let i = 0; i < this.horizontalTilesQuantity; i += 1) {
      this.addEntity(this.createTile(this.squareSize * i, 0));
    }

    for (let i = 1; i < this.verticalTilesQuantity; i += 1) {
      this.addEntity(
        this.createTile(
          this.squareSize * (this.horizontalTilesQuantity - 1),
          this.squareSize * i,
        ),
      );
    }

    for (let i = this.horizontalTilesQuantity - 2; i > 0; i -= 1) {
      this.addEntity(
        this.createTile(
          this.squareSize * i,
          this.squareSize * (this.verticalTilesQuantity - 1),
        ),
      );
    }
  }

  addEntity(entity: Tile) {
    this.tiles.push(entity);
  }

  draw = () => {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.tiles.forEach((entity) => entity.draw());
  };
}
