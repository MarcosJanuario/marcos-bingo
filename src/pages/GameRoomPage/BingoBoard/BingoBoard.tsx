import React, { useContext, useEffect, useState } from 'react';
import './bingoBoard.scss';
import { createUnorderedMatrix, hasBingo } from '../../../utils/methods';
import DrawContext from '../../../store/Draw/DrawContext';
import PlayersContext from '../../../store/Players/PlayersContext';
import { Player } from '../../../utils/types';
import BingoPiece from '../../../components/BingoPiece/BingoPiece';
import Modal from '../../../components/Modal/Modal';
import WinnerContent from './WinnerContent/WinnerContent';
import BingoLetters from './BingoLetters/BingoLetters';
import { cloneDeep } from 'lodash';

interface BingoBoardProps {
  player: Player;
}

const BingoBoard = ({ player }: BingoBoardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bingoNumbers, setBingoNumbers] = useState<(string | number)[]>([]);
  const [matrix] = useState<(string | number)[][]>(createUnorderedMatrix());
  const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
  const drawCtx = useContext(DrawContext);
  const playersCtx = useContext(PlayersContext);

  useEffect((): void => {
    const bingo = hasBingo(matrix, drawCtx.drawnNumbers);
    if (bingo.hasBingo) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setBingoNumbers(cloneDeep(bingo.bingoStones)!);
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

  const isBingoNumber = (stoneNumber: string | number): boolean =>
    (bingoNumbers.includes(stoneNumber) || (!stoneNumber && bingoNumbers.includes(''))) &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    playersCtx.winner?.id === player.id;

  return (
    <div className="bingo-board">
      {showModal && (
        <Modal showCloseButton={false}>
          <WinnerContent player={player} closeModal={() => handleModalClose()} />
        </Modal>
      )}

      <BingoLetters bingoLetters={bingoLetters} />

      {matrix.map((row: (string | number)[], rowIndex: number) =>
        row.map((number: string | number, colIndex: number) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`bingo-cell number-cell ${isBingoNumber(number) && 'drawn-number'}`}>
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
