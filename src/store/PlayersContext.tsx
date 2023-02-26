import { createContext } from 'react';
import { Player } from '../utils/types';

const PlayersContext = createContext({
  players: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  addPlayer: (_player: Player) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  removePlayer: (_player: Player) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  reset: () => {}
});

export default PlayersContext;
