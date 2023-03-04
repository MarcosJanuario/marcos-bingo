import React from 'react';
import '../bingoBoard.scss';
import { BINGO_LETTERS } from '../../../../utils/constants';

const BingoLetters = (): JSX.Element => (
  <>
    {BINGO_LETTERS.map((letter: string, index: number) => (
      <div key={index} className="bingo-cell letter-cell">
        {letter}
      </div>
    ))}
  </>
);

export default BingoLetters;
