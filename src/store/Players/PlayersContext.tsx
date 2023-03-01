import { createContext } from 'react';
import { Player } from '../../utils/types';

const PlayersContext = createContext({
  players: [],
  winner: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  addPlayer: (_player: Player) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  removePlayer: (_player: Player) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  reset: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  setWinner: (_player: Player) => {}
});

export default PlayersContext;
