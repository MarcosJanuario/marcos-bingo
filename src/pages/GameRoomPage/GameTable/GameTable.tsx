import React from 'react';
import './GameTable.css';

interface GameTableProps {
  children: any;
}

const GameTable = ({ children }: GameTableProps): JSX.Element => (
  <div className="game-table-wrapper">{children}</div>
);

export default GameTable;
