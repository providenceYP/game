import { Player } from 'logic/Player/Player';
import { User } from 'store/types';

export type Props = {
  players: Player[];
  onChangeHealth: (player: Player) => void;
  user: User;
};

export enum Status {
  pause = 'pause',
  started = 'started',
  ended = 'ended',
}
