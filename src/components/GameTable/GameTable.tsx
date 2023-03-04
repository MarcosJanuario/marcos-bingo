import React from 'react';
import './GameTable.css';

interface GameTableProps {
  children: JSX.Element;
}

const GameTable = ({ children }: GameTableProps): JSX.Element => (
  <div data-testid="game-table-wrapper" className="game-table-wrapper">
    {children}
  </div>
);

export default GameTable;
