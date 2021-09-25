import { Player } from 'logic/Player/Player';

export type Props = {
  players: Player[];
};

export enum Status {
  pause = 'pause',
  started = 'started',
  ended = 'ended',
}
