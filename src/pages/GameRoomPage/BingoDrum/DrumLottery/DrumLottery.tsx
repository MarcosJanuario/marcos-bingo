import React, { useContext, useState } from 'react';
import './DrumLottery.scss';
import ButtonEffect from '../../../../components/ButtonEffect/ButtonEffect';
import DrawContext from '../../../../store/Draw/Context';
import BingoPiece from '../../../../components/BingoPiece/BingoPiece';
import Modal from '../../../../components/Modal/Modal';
import DrawingContent from './DrawingContent/DrawingContent';

const SHOW_MODAL_TIMER = 1000;
const HIDE_MODAL_TIMER = 500;

const DrumLottery = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const drawCtx = useContext(DrawContext);

  const draw = (): void => {
    setShowModal(true);
    setTimeout(() => {
      drawCtx.draw();
      setTimeout(() => {
        setShowModal(false);
      }, HIDE_MODAL_TIMER);
    }, SHOW_MODAL_TIMER);
  };
  return (
    <div className="drum-lottery-wrapper">
      {showModal && (
        <Modal showCloseButton={false}>
          <DrawingContent />
        </Modal>
      )}
      <div className="number-pool-wrapper">
        {drawCtx.numbers.map((piece: number) => (
          <BingoPiece key={piece} piece={piece} />
        ))}
      </div>
      <div className="spacer" />
      <ButtonEffect label="Draw" onClick={draw} disabled={drawCtx.numbers.length === 0} />
    </div>
  );
};

export default DrumLottery;
