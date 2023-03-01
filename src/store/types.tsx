import { Player } from '../utils/types';

export interface PlayersContext {
  players: Player[];
  addPlayer: () => void;
  removePlayer: () => void;
  reset: () => void;
}

export interface ProviderProps {
  children: any;
}

export interface PlayersState {
  players: Player[];
  winner?: null | Player;
}

export interface PlayersAction {
  type: string;
  player: Player;
}

export interface DrawState {
  numbers: number[];
  drawnNumbers: number[];
}

export interface DrawAction {
  type: string;
}
