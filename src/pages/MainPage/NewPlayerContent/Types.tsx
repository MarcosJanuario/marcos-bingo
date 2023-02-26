export interface Player {
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  stoneColor: string;
}

export interface PlayerListItemProps {
  player: Player;
}
