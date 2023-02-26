import React from 'react';
import './GameRoomPage.css';
import GameTable from './GameTable/GameTable';
import BingoDrum from './BingoDrum/BingoDrum';

const GameRoomPage = (): JSX.Element => (
  <div className="game-room-wrapper bg-image">
    <GameTable>
      <BingoDrum />
    </GameTable>
  </div>
);

export default GameRoomPage;
