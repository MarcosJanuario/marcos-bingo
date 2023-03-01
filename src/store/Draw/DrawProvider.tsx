import React, { useReducer } from 'react';
import Context from './DrawContext';
import { DEFAULT_DRAW_STATE } from '../../utils/constants';
import { ProviderProps } from '../types';
import { drawReducer } from './DrawReducer';

const DrawProvider = ({ children }: ProviderProps) => {
  const [drawState, dispatchDraw] = useReducer(drawReducer, DEFAULT_DRAW_STATE);

  const drawHandler = () => dispatchDraw({ type: 'DRAW' });

  const resetBingoHandler = () => dispatchDraw({ type: 'RESET' });

  const playersContext = {
    numbers: drawState.numbers,
    drawnNumbers: drawState.drawnNumbers,
    draw: drawHandler,
    reset: resetBingoHandler
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Context.Provider value={playersContext}>{children}</Context.Provider>;
};

export default DrawProvider;
