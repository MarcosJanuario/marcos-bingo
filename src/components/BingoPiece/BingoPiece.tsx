import React from 'react';
import './BingoPiece.scss';

interface BingoPieceProps {
  piece: number;
  color?: string;
  absolute?: boolean;
}

const BingoPiece = ({ piece, color, absolute = false }: BingoPieceProps): JSX.Element => {
  const stoneStyle = {
    background: color ?? '#f5f5f5',
    boxShadow: `1px 2px 0 0 ${color ?? '#ffffff'}`
  };

  return (
    <div
      key={piece}
      data-testid="bingo-piece"
      className={`bingo-number pool-item ${absolute && 'absolute'}`}
      style={stoneStyle}>
      {piece}
    </div>
  );
};

export default BingoPiece;
