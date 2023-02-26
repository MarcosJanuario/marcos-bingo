export interface Player {
  id: string;
  name: string;
  stoneColor: string;
}

export interface PlayerListItemProps {
  player: Player;
  onRemove: (index: number) => void;
  index: number;
}
