import React from 'react';
import './winnersList.scss';
import { StoredWinner } from '../../../utils/types';
import { getLocalStorageWinners } from '../../../utils/methods';

const TOP_POSITIONS = 10;

const WinnersList = (): JSX.Element => {
  const winnersList = getLocalStorageWinners();

  return (
    <div className="winners-list-wrapper">
      <div className="winners-header">
        <span>Winners List</span>
      </div>

      <div className="winners-list">
        {winnersList
          .sort((a: StoredWinner, b: StoredWinner) => b.times - a.times)
          .slice(0, TOP_POSITIONS)
          .map((storedWinner: StoredWinner, index: number) => (
            <div key={index} className="stored-winner-wrapper">
              <span>{storedWinner.name}</span>
              <span>{`${storedWinner.times} X`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WinnersList;
