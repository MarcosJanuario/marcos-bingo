export const INITIAL_COLORS = ['#29B6F6', '#EF5350', '#66BB6A', '#FFEE58'];
export const DEFAULT_PLAYER = { id: '', name: '', stoneColor: '' };
export const MAX_PLAYERS = 3;

export const DEFAULT_PLAYER_STATE = {
  players: []
};

export const DEFAULT_DRAW_STATE = {
  numbers: Array.from({ length: 25 }, (_, i) => i + 1),
  drawnNumbers: []
};
