import React, { useContext } from 'react';
import './DrumLottery.scss';
import ButtonEffect from '../../../../components/ButtonEffect/ButtonEffect';
import DrawContext from '../../../../store/Draw/Context';
import BingoPiece from '../../../../components/BingoPiece/BingoPiece';

const DrumLottery = (): JSX.Element => {
  const drawCtx = useContext(DrawContext);

  const draw = (): void => drawCtx.draw();
  return (
    <div className="drum-lottery-wrapper">
      <div className="number-pool-wrapper">
        {drawCtx.numbers.map((piece: number) => (
          <BingoPiece key={piece} piece={piece} />
        ))}
      </div>
      <div className="spacer" />
      <ButtonEffect label="Draw" onClick={draw} />
    </div>
  );
};

export default DrumLottery;
