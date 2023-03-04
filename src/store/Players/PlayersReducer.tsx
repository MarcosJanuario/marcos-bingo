import { PlayersAction, PlayersState } from '../types';
import { cloneDeep } from 'lodash';
import { Player } from '../../utils/types';
import { DEFAULT_PLAYER_STATE } from '../../utils/constants';

export const playersReducer = (state: PlayersState, action: PlayersAction) => {
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

  if (action.type === 'SET_WINNER') {
    return {
      players: state.players,
      winner: action.player
    };
  }

  return DEFAULT_PLAYER_STATE;
};
