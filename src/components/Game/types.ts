import { Player } from 'logic/Player/Player';

export type Props = {
  players: Player[];
  onChangeHealth: (player: Player) => void;
};
