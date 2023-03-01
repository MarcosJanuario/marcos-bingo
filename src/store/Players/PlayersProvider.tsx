import React, { useReducer } from 'react';
import { Gender, Player } from '../../utils/types';
import PlayersContext from './PlayersContext';
import { DEFAULT_PLAYER_STATE } from '../../utils/constants';
import { ProviderProps } from '../types';
import { playersReducer } from './PlayersReducer';

const PlayersProvider = ({ children }: ProviderProps) => {
  const [playersState, dispatchPlayers] = useReducer(playersReducer, DEFAULT_PLAYER_STATE);

  const addPlayerHandler = (player: Player) => dispatchPlayers({ type: 'ADD', player: player });

  const removePlayerHandler = (player: Player) =>
    dispatchPlayers({ type: 'REMOVE', player: player });

  const resetPlayerHandler = () =>
    dispatchPlayers({
      type: 'RESET',
      player: { id: '', name: '', stoneColor: '', gender: 'male' as Gender }
    });

  const winnerHandler = (player: Player) => dispatchPlayers({ type: 'SET_WINNER', player: player });

  const playersContext = {
    players: playersState.players,
    winner: playersState.winner,
    addPlayer: addPlayerHandler,
    removePlayer: removePlayerHandler,
    reset: resetPlayerHandler,
    setWinner: winnerHandler
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <PlayersContext.Provider value={playersContext}>{children}</PlayersContext.Provider>;
};

export default PlayersProvider;
