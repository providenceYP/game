// @ts-nocheck

import React,  { Component, createRef } from 'react';
import Game from './Game';

interface Props {}
interface State {}

export class GameComponent extends Component<Props, State> {
	state = {};

	canvas = createRef<HTMLCanvasElement>();

	game: Game;

	componentDidMount() {
		this.game = new Game(this.canvas.current);

		this.game.init();
	}

	render() {
		return <canvas ref={this.canvas}></canvas>;
	}
}
