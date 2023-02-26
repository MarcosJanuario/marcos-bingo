import React, { useReducer } from 'react';
import { Player } from '../../utils/types';
import Context from './Context';
import { DEFAULT_PLAYER_STATE } from '../../utils/constants';
import { ProviderProps } from '../types';
import { reducer } from './Reducer';

const Provider = ({ children }: ProviderProps) => {
  const [playersState, dispatchPlayers] = useReducer(reducer, DEFAULT_PLAYER_STATE);

  const addPlayerHandler = (player: Player) => dispatchPlayers({ type: 'ADD', player: player });

  const removePlayerHandler = (player: Player) =>
    dispatchPlayers({ type: 'REMOVE', player: player });

  const resetPlayerHandler = () =>
    dispatchPlayers({ type: 'RESET', player: { id: '', name: '', stoneColor: '' } });

  const playersContext = {
    players: playersState.players,
    addPlayer: addPlayerHandler,
    removePlayer: removePlayerHandler,
    reset: resetPlayerHandler
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Context.Provider value={playersContext}>{children}</Context.Provider>;
};

export default Provider;
