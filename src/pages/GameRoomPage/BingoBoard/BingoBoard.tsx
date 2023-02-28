import React, { useContext, useEffect, useState } from 'react';
import './bingoBoard.css';
import { createUnorderedMatrix, hasBingo } from '../../../utils/methods';
import DrawContext from '../../../store/Draw/Context';
import { Player } from '../../../utils/types';
import BingoPiece from '../../../components/BingoPiece/BingoPiece';

interface BingoBoardProps {
  player: Player;
}

const BingoBoard = ({ player }: BingoBoardProps) => {
  const [matrix, setMatrix] = useState<(string | number)[][]>(createUnorderedMatrix());
  const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
  const drawCtx = useContext(DrawContext);

  useEffect((): void => {
    if (hasBingo(matrix, drawCtx.drawnNumbers).hasBingo) {
      console.log('BINGO!!!: ', hasBingo(matrix, drawCtx.drawnNumbers));
      console.log(`${player.name} WON!`);
    }
  }, [drawCtx.drawnNumbers]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isDrawn = (stone: number): boolean => drawCtx.drawnNumbers.includes(stone);

  return (
    <div className="bingo-board">
      {bingoLetters.map((letter, index) => (
        <div key={index} className="bingo-cell letter-cell">
          {letter}
        </div>
      ))}

      {matrix.map((row: (string | number)[], rowIndex: number) =>
        row.map((number: string | number, colIndex: number) => (
          <div key={`${rowIndex}-${colIndex}`} className="bingo-cell number-cell">
            {number}
            {isDrawn(Number(number)) && (
              <BingoPiece
                key={number}
                piece={Number(number)}
                color={player.stoneColor}
                absolute={true}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BingoBoard;
