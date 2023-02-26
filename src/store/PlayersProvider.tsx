import React, { useReducer } from 'react';
import { Player } from '../utils/types';
import PlayersContext from './PlayersContext';
import { cloneDeep } from 'lodash';
import { DEFAULT_PLAYER_STATE } from '../utils/constants';
import { PlayersAction, PlayersProviderProps, PlayersState } from './types';

const playersReducer = (state: PlayersState, action: PlayersAction) => {
  if (action.type === 'ADD') {
    const tempPlayers = cloneDeep(state.players);
    tempPlayers.push(action.player);
    return {
      players: tempPlayers
    };
  }
  if (action.type === 'REMOVE') {
    const playerIndex = state.players.findIndex((player: Player) => player.id === action.player.id);
    const tempPlayers = cloneDeep(state.players);
    tempPlayers.splice(playerIndex, 1);
    return {
      players: tempPlayers
    };
  }
  if (action.type === 'RESET') {
    return {
      players: []
    };
  }

  return DEFAULT_PLAYER_STATE;
};

const PlayersProvider = ({ children }: PlayersProviderProps) => {
  const [playersState, dispatchPlayers] = useReducer(playersReducer, DEFAULT_PLAYER_STATE);

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
  return <PlayersContext.Provider value={playersContext}>{children}</PlayersContext.Provider>;
};

export default PlayersProvider;
