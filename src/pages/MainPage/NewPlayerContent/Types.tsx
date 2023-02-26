import { Player } from '../../../utils/types';

export interface PlayerListItemProps {
  player: Player;
  onRemove: (player: Player) => void;
}
