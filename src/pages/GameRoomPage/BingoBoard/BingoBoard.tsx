import React, { useContext, useEffect, useState } from 'react';
import './bingoBoard.css';
import { createUnorderedMatrix, hasBingo } from '../../../utils/methods';
import DrawContext from '../../../store/Draw/Context';
import { Player } from '../../../utils/types';

interface BingoBoardProps {
  player: Player;
}

const BingoBoard = ({ player }: BingoBoardProps) => {
  const [matrix, setMatrix] = useState<(string | number)[][]>(createUnorderedMatrix());
  const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
  const drawCtx = useContext(DrawContext);

  useEffect((): void => {
    console.log('NEW NUMBER DRAW. Checking bingo...: ', matrix);
    if (hasBingo(matrix, drawCtx.drawnNumbers)) {
      console.log('BINGO!!!: ', matrix);
      console.log(`${player.name} WON!`);
    }
  }, [drawCtx.drawnNumbers]);

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
