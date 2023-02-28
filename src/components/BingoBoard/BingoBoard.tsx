import React from 'react';
import './bingoBoard.css';
import { createUnorderedMatrix, hasBingo } from '../../utils/methods';

const BingoBoard = () => {
  const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
  // Example usage:
  // const matrix = [
  //   [3, 17, 6, 24, 11],
  //   [14, 22, 7, 21, 2],
  //   [12, 23, '', 4, 8],
  //   [1, 5, 15, 16, 19],
  //   [18, 9, 10, 13, 20]
  // ];
  const matrix = createUnorderedMatrix(); //TODO: generate at the very beginning
  console.log('matrix: ', matrix);
  const nums = [1, 3, 6, 8, 9, 11, 14, 16, 18, 21, 23]; //TODO: use the drawn numbers always
  // const nums = [14, 222, 7, 241, 2];
  if (hasBingo(matrix, nums)) {
    console.log('BINGO!!!: ', matrix);
  }

  return (
    <div className="bingo-board">
      {bingoLetters.map((letter, index) => (
        <div key={index} className="bingo-cell letter-cell">
          {letter}
        </div>
      ))}

      {matrix.map((row, rowIndex) =>
        row.map((number, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="bingo-cell number-cell">
            {number}
          </div>
        ))
      )}
    </div>
  );
};

export default BingoBoard;
