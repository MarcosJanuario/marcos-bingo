import { Player } from '../utils/types';

export interface PlayersContext {
  players: Player[];
  addPlayer: () => void;
  removePlayer: () => void;
  reset: () => void;
}

export interface PlayersProviderProps {
  children: any;
}

export interface PlayersState {
  players: Player[];
}

export interface PlayersAction {
  type: string;
  player: Player;
}
