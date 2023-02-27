import React from 'react';
import './BingoPiece.scss';

interface BingoPieceProps {
  piece: number;
}

const BingoPiece = ({ piece }: BingoPieceProps): JSX.Element => (
  <div key={piece} className="bingo-number pool-item">
    {piece}
  </div>
);

export default BingoPiece;
