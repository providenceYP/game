import { animate } from 'utils/animate';

import { PlayerObject } from 'logic/PlayerObject/PlayerObject';
import { Tile } from 'logic/Tile/Tile';
import { Monster } from 'logic/Monster/Monster';

import { Entity } from '../Entity/Entity';

export class Cell {
  private moveSpeed = 30;

  private readonly tileLineWidth: number;

  private readonly tileBorderColor: string;

  private passed = false;

  public players: PlayerObject[] = [];

  public readonly barriers: Monster[] = [];

  public readonly prizes: Entity[] = [];

  constructor(public readonly tile: Tile) {
    this.tileLineWidth = tile.lineWidth;
    this.tileBorderColor = tile.borderColor;
  }

  addPlayer(player: PlayerObject): PlayerObject[] {
    this.players.push(player);
    this.tile.insideColor = player.trackColor;

    player.move(this.tile.centerX, this.tile.centerY);

    return this.players;
  }

  async receivePlayer(player: PlayerObject, update: () => void) {
    this.players.push(player);

    const incX = (this.tile.centerX - player.x) / this.moveSpeed;
    const incY = (this.tile.centerY - player.y) / this.moveSpeed;

    await animate(() => {
      player.move(player.x + incX, player.y + incY);
      update();
    }, this.moveSpeed);

    this.addPlayer(player);
    update();
  }

  removePlayer(removingPlayer: PlayerObject): PlayerObject[] {
    const players = this.players.filter((player) => player !== removingPlayer);

    if (players.length !== this.players.length) {
      this.passed = true;
      this.players = players;
    }

    return this.players;
  }

  addBarrier(barrier: Monster): Monster[] {
    this.barriers.push(barrier);

    return this.barriers;
  }

  draw() {
    this.players.forEach((player) => {
      player.draw();
    });

    const barriers = this.barriers.filter(({ health }) => health > 0);

    if (barriers.length && !this.passed) {
      this.tile.lineWidth = this.tileLineWidth * 2;
      this.tile.borderColor = '#F07F6C';

      this.barriers.forEach((barrier) => {
        barrier.draw();
      });
    } else {
      this.tile.lineWidth = this.tileLineWidth;
      this.tile.borderColor = this.tileBorderColor;
    }
  }
}
