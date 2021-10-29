import GameMap from 'logic/GameMap/GameMap';
import { Messenger } from 'logic/Messenger/Messenger';
import { Dice } from 'logic/Dice/Dice';
import { PlayerObject } from 'logic/PlayerObject/PlayerObject';
import { Direction } from 'logic/PlayerObject/types';
import { Cell } from 'logic/Cell/Cell';
import { Player } from 'logic/Player/Player';
import { Monster } from 'logic/Monster/Monster';

import { monsterCollection, MonsterData } from 'utils/monsters';
import { randomChoice } from 'utils/random';
import { animate } from 'utils/animate';

export default class Manager {
  private diceSize = 125;

  private cardSize = 300;

  private monstersCountFactor = 0.4;

  private actionTimeout = 2000;

  private monstersCount: number;

  private activePlayer: PlayerObject;

  private cells: Cell[];

  private playerObjects: PlayerObject[];

  private shownMonsters = [] as Monster[];

  constructor(
    private ctx: CanvasRenderingContext2D,
    private map: GameMap,
    private messenger: Messenger,
    private onEndGame: (player: Player) => void,
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

    this.monstersCount = Math.ceil(
      this.cells.length * this.monstersCountFactor,
    );

    this.initMonsters();

    this.update();
    this.messenger.show('Waiting all players...');
  }

  initMonsters() {
    const checkCellForMonster = ({ barriers }: Cell, index: number) =>
      !barriers.length && index > 1 && index < this.cells.length - 1;

    for (let i = 0; i < this.monstersCount; i += 1) {
      const cell = randomChoice<Cell>(this.cells, checkCellForMonster);
      const monster = randomChoice<MonsterData>(monsterCollection);

      cell.addBarrier(new Monster(this.ctx, monster));
    }
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

    this.shownMonsters.forEach((monster) => {
      monster.draw();
    });
  };

  nextStep = () => {
    this.activePlayer.player.run(this.step);
  };

  step = async () => {
    const moveSteps = await this.rollDice(this.activePlayer);

    setTimeout(async () => {
      await this.movePlayerObject(moveSteps);

      const cellIndex = this.getCellIndexByPlayer(this.activePlayer);
      const sign = this.activePlayer.direction === Direction.forward ? 1 : -1;
      const nextIndex = (cellIndex + sign) % this.cells.length;

      const barrier = this.cells[cellIndex].barriers.find(
        ({ health }) => health > 0,
      );

      if (barrier) {
        const times = 50;

        await animate((step) => {
          const cardSize = (this.cardSize * step) / times;
          const tileX = this.cells[cellIndex].tile.centerX;
          const tileY = this.cells[cellIndex].tile.centerY;
          const dx = (Math.abs(this.map.centerX - tileX) * step) / times;
          const dy = (Math.abs(this.map.centerY - tileY) * step) / times;

          this.cells[cellIndex].barriers[0].init(
            tileX - cardSize / 2 + (this.map.centerX > tileX ? dx : -dx),
            tileY - cardSize / 2 + (this.map.centerY > tileY ? dy : -dy),
            cardSize,
          );

          this.update();
          barrier.draw();
        }, times);

        this.activePlayer.player.run(() => this.fightWithMonster(barrier));
      } else if (this.cells[nextIndex].players.length) {
        this.fight();
      } else {
        this.changeActivePlayer();

        this.activePlayer.player.run(this.step);
      }
    }, this.actionTimeout);
  };

  rollDice(player: PlayerObject) {
    const dice = new Dice(
      this.ctx,
      ((this.map.centerX * Math.random()) % this.map.centerX) +
        this.map.centerX / 2,
      ((this.map.centerY * Math.random()) % this.map.centerY) +
        this.map.centerY / 2,
      this.diceSize,
      player.color,
    );

    return dice.roll();
  }

  async fightWithMonster(monster: Monster) {
    const attack = await this.rollDice(this.activePlayer);

    setTimeout(async () => {
      await monster.subtractHealth(attack);

      if (monster.health) {
        this.shownMonsters = this.shownMonsters
          .filter((barrier) => monster !== barrier)
          .concat(monster);

        this.activePlayer.player.subtractHealth(monster.attack);

        this.activePlayer.player.run(() => this.fightWithMonster(monster));
      } else {
        this.shownMonsters = this.shownMonsters.filter(
          (barrier) => barrier !== monster,
        );

        this.changeActivePlayer();
        this.activePlayer.player.run(this.step);
      }

      this.update();
    }, this.actionTimeout);
  }

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
    this.messenger.show(`${player.name} won!!!`, () => this.onEndGame(player));
  };
}
