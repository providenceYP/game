import { animate } from 'utils/animate';

import { PlayerObject } from 'logic/PlayerObject/PlayerObject';
import { Tile } from 'logic/Tile/Tile';

import { Entity } from '../Entity/Entity';

export class Cell {
  private moveSpeed = 30;

  public players: PlayerObject[] = [];

  public readonly barriers: Entity[] = [];

  public readonly prizes: Entity[] = [];

  constructor(public readonly tile: Tile) {}

  addPlayer(player: PlayerObject): PlayerObject[] {
    this.players.push(player);
    this.tile.insideColor = player.trackColor;

    player.move(
      this.tile.x + this.tile.centerX,
      this.tile.y + this.tile.centerY,
    );

    return this.players;
  }

  async receivePlayer(player: PlayerObject, update: () => void) {
    this.players.push(player);

    const endX = this.tile.x + this.tile.centerX;
    const endY = this.tile.y + this.tile.centerY;
    const incX = (endX - player.x) / this.moveSpeed;
    const incY = (endY - player.y) / this.moveSpeed;

    await animate(() => {
      player.move(player.x + incX, player.y + incY);
      update();
    }, this.moveSpeed);

    this.addPlayer(player);
    update();
  }

  removePlayer(removingPlayer: PlayerObject): PlayerObject[] {
    this.players = this.players.filter((player) => player !== removingPlayer);

    return this.players;
  }

  draw() {
    this.players.forEach((player) => {
      player.draw();
    });
  }
}
