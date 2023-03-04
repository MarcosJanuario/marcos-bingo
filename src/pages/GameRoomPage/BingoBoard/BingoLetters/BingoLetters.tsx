import React from 'react';
import '../bingoBoard.scss';

interface BingoLettersProps {
  bingoLetters: string[];
}

const BingoLetters = ({ bingoLetters }: BingoLettersProps): JSX.Element => (
  <>
    {bingoLetters.map((letter, index) => (
      <div key={index} className="bingo-cell letter-cell">
        {letter}
      </div>
    ))}
  </>
);

export default BingoLetters;
