export type Props = {
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;

	init?(): void;

	update?(): void;

}
