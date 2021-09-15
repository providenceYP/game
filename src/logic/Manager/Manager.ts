import GameMap from 'logic/GameMap/GameMap';
import { Messenger } from 'logic/Messenger/Messenger';
import { Dice } from 'logic/Dice/Dice';
import { PlayerObject } from 'logic/PlayerObject/PlayerObject';
import { Direction } from 'logic/PlayerObject/types';
import { Cell } from 'logic/Cell/Cell';
import { Player } from 'logic/Player/Player';

export default class Manager {
  private diceSize = 125;

  private activePlayer: PlayerObject;

  private cells: Cell[];

  private playerObjects: PlayerObject[];

  constructor(
    private ctx: CanvasRenderingContext2D,
    private map: GameMap,
    private messenger: Messenger,
    private onEndGame: () => void,
    players: Player[],
  ) {
    this.playerObjects = players.map(
      (player, index) =>
        new PlayerObject(
          this.ctx,
          0,
          0,
          this.map.squareSize / 3,
          player.color,
          player,
          index ? Direction.backward : Direction.forward,
        ),
    );
  }

  init(): void {
    this.cells = this.map.tiles.map((tile) => new Cell(tile));

    this.cells[0].tile.insideColor = 'grey';
    this.cells[1].addPlayer(this.playerObjects[0]);
    this.cells[this.cells.length - 1].addPlayer(this.playerObjects[1]);

    this.update();
    this.messenger.show('Waiting all players...');
  }

  async start() {
    this.update();

    this.activePlayer = await this.diceFight();

    this.messenger.show(`${this.activePlayer.player.name} goes first.`, () => {
      this.update();
      this.nextStep();
    });
  }

  rollDices = async (dices: Dice[]): Promise<number> => {
    const results = await Promise.all(dices.map((dice) => dice.roll()));

    const indexOfMaxResult = results.reduce(
      (acc: number, value, index, list) => (value > list[acc] ? index : acc),
      0,
    );

    const hasWinner =
      results.filter((res) => res !== results[indexOfMaxResult]).length ===
      results.length - 1;

    return hasWinner ? indexOfMaxResult : this.rollDices(dices);
  };

  update = () => {
    this.map.draw();

    this.cells.forEach((cell) => {
      cell.draw();
    });
  };

  nextStep = () => {
    this.activePlayer.player.run(this.step);
  };

  step = async () => {
    const dice = new Dice(
      this.ctx,
      ((this.map.centerX * Math.random()) % this.map.centerX) +
        this.map.centerX / 2,
      ((this.map.centerY * Math.random()) % this.map.centerY) +
        this.map.centerY / 2,
      this.diceSize,
      this.activePlayer.color,
    );

    const moveSteps = await dice.roll();

    setTimeout(async () => {
      await this.movePlayerObject(moveSteps);

      this.changeActivePlayer();

      const cellIndex = this.getCellIndexByPlayer(this.activePlayer);
      const sign = this.activePlayer.direction === Direction.forward ? 1 : -1;
      const nextIndex = (cellIndex + sign) % this.cells.length;

      if (this.cells[nextIndex].players.length) {
        this.fight();
      } else {
        this.activePlayer.player.run(this.step);
      }
    }, 2000);
  };

  movePlayerObject = async (steps: number) => {
    const cellIndex = this.getCellIndexByPlayer(this.activePlayer);

    const sign = this.activePlayer.direction === Direction.forward ? 1 : -1;
    for (let i = 0; i < steps; i += 1) {
      const index = (cellIndex + i * sign) % this.cells.length;
      const nextIndex = (cellIndex + (i + 1) * sign) % this.cells.length;

      if (this.cells[nextIndex].players.length) {
        return;
      }

      this.cells[index].removePlayer(this.activePlayer);
      // eslint-disable-next-line no-await-in-loop
      await this.cells[nextIndex].receivePlayer(this.activePlayer, this.update);
    }
  };

  getCellIndexByPlayer = (player: PlayerObject) =>
    this.cells.findIndex(({ players }) => players.includes(player));

  changeActivePlayer = () => {
    this.activePlayer = this.playerObjects.filter(
      (player) => player !== this.activePlayer,
    )?.[0];
  };

  diceFight = async (): Promise<PlayerObject> => {
    const playerDices = this.playerObjects.map(
      (entity, index) =>
        new Dice(
          this.ctx,
          ((this.map.centerX * Math.random() * index) % this.map.centerX) +
            this.map.centerX / 2,
          ((this.map.centerY * Math.random() * index) % this.map.centerY) +
            this.map.centerY / 2,
          this.diceSize,
          entity.color,
        ),
    );

    const wonDiceIndex = await this.rollDices(playerDices);

    return this.playerObjects[wonDiceIndex];
  };

  fight = () => {
    this.messenger.show('Fight!', async () => {
      this.update();
      const { player } = await this.diceFight();

      setTimeout(this.end, 1000, player);
    });
  };

  end = (player: Player) => {
    this.update();
    this.messenger.show(`${player.name} won!!!`, this.onEndGame);
  };
}
