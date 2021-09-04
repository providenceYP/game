export type Props = {
  color?: string;
  name?: string;
  playerType?: string;
  playerHealth?: number;
  isReady?: boolean;
  changeStatus?: () => void;
};
