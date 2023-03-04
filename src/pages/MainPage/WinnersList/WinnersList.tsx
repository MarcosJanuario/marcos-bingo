import React, { useEffect, useState } from 'react';
import './winnersList.scss';
import { StoredWinner } from '../../../utils/types';
import { getLocalStorageWinners } from '../../../utils/methods';

const WinnersList = (): JSX.Element => {
  const [winnersList, setWinnersList] = useState<StoredWinner[]>([]);
  useEffect(() => {
    const winners = getLocalStorageWinners();
    setWinnersList(winners);
  }, []);

  return (
    <div className="winners-list-wrapper">
      <div className="winners-header">
        <span>Winners List</span>
      </div>
      {winnersList
        .sort((a: StoredWinner, b: StoredWinner) => b.times - a.times)
        .map((storedWinner: StoredWinner, index: number) => (
          <div key={index} className="stored-winner-wrapper">
            <span>{storedWinner.name}</span>
            <span>{`${storedWinner.times} X`}</span>
          </div>
        ))}
    </div>
  );
};

export default WinnersList;
