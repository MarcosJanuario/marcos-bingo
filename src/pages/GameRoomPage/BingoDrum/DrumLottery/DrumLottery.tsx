import React, { useContext } from 'react';
import './DrumLottery.scss';
import ButtonEffect from '../../../../components/ButtonEffect/ButtonEffect';
import DrawContext from '../../../../store/Draw/Context';

const DrumLottery = (): JSX.Element => {
  const drawCtx = useContext(DrawContext);

  const draw = (): void => drawCtx.draw();
  return (
    <div className="drum-lottery-wrapper">
      <div className="number-pool-wrapper">
        {drawCtx.numbers.map((piece: number) => (
          <div key={piece} className="bingo-number pool-item">
            {piece}
          </div>
        ))}
      </div>
      <div className="spacer" />
      <ButtonEffect label="Draw" onClick={draw} />
    </div>
  );
};

export default DrumLottery;
