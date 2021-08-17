import { IEntity } from '../Entity/IEntity';
import { Tile } from '../Tile/Tile';

export default class Game {
	protected ctx: CanvasRenderingContext2D;
	public width = 1044;
	public height = 778;
	public startX = 20;
	public startY = 10;

	protected entities: IEntity[] = [];

	constructor(protected canvas: HTMLCanvasElement) {
		this.ctx = canvas.getContext('2d');
	}

	init(): void {
		this.canvas.width = this.width;
		this.canvas.height = this.height;
        this.ctx.fillStyle = 'grey';
        this.ctx.fillRect(this.startX, this.startY, 1044, 778);
		this.initEntities();
	}

	initEntities(): void {
		this.addEntity(new Tile(this.ctx, 64, 64, this.startX, this.startY, '#000000', '#ffffff', 62, 62, this.startX + 1, this.startY + 1));
		for (let i=0; i<= 15; i++) {
			this.addEntity(new Tile(this.ctx, 64, 64, this.startX + 64 * i, this.startY, '#000000', '#ffffff', 62, 62, this.startX + 1 + 64 * i, this.startY + 1));
			this.addEntity(new Tile(this.ctx, 64, 64, this.startX + 64 * i, this.startY + 64 * 11, '#000000', '#ffffff', 62, 62, this.startX + 1 + 64 * i, this.startY + 1 + 64 * 11));
		}
		for (let i=1; i<= 12; i++) {
			this.addEntity(new Tile(this.ctx, 64, 64, this.startX, this.startY + 64 * i, '#000000', '#ffffff', 62, 62, this.startX + 1, this.startY + 1 + 64 * i));
			this.addEntity(new Tile(this.ctx, 64, 64, this.startX + 64 * 15, this.startY + 64 * i, '#000000', '#ffffff', 62, 62, this.startX + 1 + 64 * 15, this.startY + 1 + 64 * i));
		}
	}

	addEntity(entity: IEntity) {
		this.entities.push(entity);
		entity.init();
	}

}
