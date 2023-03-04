import { Gender } from './types';

export const INITIAL_COLORS = ['#29B6F6', '#EF5350', '#66BB6A', '#FFEE58'];
export const DEFAULT_PLAYER = { id: '', name: '', stoneColor: '', gender: 'male' as Gender };
export const MAX_PLAYERS = 3;

export const DEFAULT_PLAYER_STATE = {
  players: [],
  winner: null
};

export const DEFAULT_DRAW_STATE = {
  numbers: Array.from({ length: 25 }, (_, i) => i + 1),
  drawnNumbers: []
};

export const BINGO_LETTERS = ['B', 'I', 'N', 'G', 'O'];
