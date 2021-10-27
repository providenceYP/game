import { Player } from 'logic/Player/Player';

export type Props = {
  players: Player[];
  onChangeHealth: (player: Player) => void;
};

export enum Status {
  pause = 'pause',
  started = 'started',
  ended = 'ended',
}
