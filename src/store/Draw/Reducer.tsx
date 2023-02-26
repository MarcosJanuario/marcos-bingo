import { DrawAction, DrawState } from '../types';
import { cloneDeep } from 'lodash';
import { DEFAULT_DRAW_STATE } from '../../utils/constants';

export const reducer = (state: DrawState, action: DrawAction) => {
  if (action.type === 'DRAW') {
    const tempNumbers = cloneDeep(state.numbers);
    const randomIndex = Math.floor(Math.random() * tempNumbers.length);
    const drawnNumber = tempNumbers.splice(randomIndex, 1)[0];
    const tempDrawnNumber = cloneDeep(state.drawnNumbers);
    tempDrawnNumber.push(drawnNumber);
    return {
      numbers: tempNumbers,
      drawnNumbers: tempDrawnNumber
    };
  }

  return DEFAULT_DRAW_STATE;
};
