import React, { useContext, useEffect, useState } from 'react';
import './bingoBoard.css';
import { createUnorderedMatrix, hasBingo } from '../../../utils/methods';
import DrawContext from '../../../store/Draw/DrawContext';
import PlayersContext from '../../../store/Players/PlayersContext';
import { Player } from '../../../utils/types';
import BingoPiece from '../../../components/BingoPiece/BingoPiece';
import Modal from '../../../components/Modal/Modal';
import WinnerContent from './WinnerContent/WinnerContent';

interface BingoBoardProps {
  player: Player;
}

const BingoBoard = ({ player }: BingoBoardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [matrix] = useState<(string | number)[][]>(createUnorderedMatrix());
  const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
  const drawCtx = useContext(DrawContext);
  const playersCtx = useContext(PlayersContext);

  useEffect((): void => {
    if (hasBingo(matrix, drawCtx.drawnNumbers).hasBingo) {
      setShowModal(true);
      playersCtx.setWinner(player);
    }
  }, [drawCtx.drawnNumbers]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isDrawn = (stone: number): boolean => drawCtx.drawnNumbers.includes(stone);

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <div className="bingo-board">
      {showModal && (
        <Modal showCloseButton={false}>
          <WinnerContent player={player} closeModal={() => handleModalClose()} />
        </Modal>
      )}

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
