import React, { useContext } from 'react';
import './DrawnNumbers.scss';
import DrawContext from '../../../../store/Draw/Context';
import BingoPiece from '../../../../components/BingoPiece/BingoPiece';

const DrawnNumbers = (): JSX.Element => {
  const drawCtx = useContext(DrawContext);

  return (
    <div className="drawn-numbers-wrapper">
      <div className="drawn-numbers-header">
        <span>Drawn Numbers</span>
      </div>
      <div className="drawn-numbers-pool">
        {drawCtx.drawnNumbers &&
          drawCtx.drawnNumbers.map((piece: number) => <BingoPiece key={piece} piece={piece} />)}
      </div>
    </div>
  );
};

export default DrawnNumbers;
