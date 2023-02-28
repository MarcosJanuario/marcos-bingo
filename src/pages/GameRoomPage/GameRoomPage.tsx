import React, { useContext } from 'react';
import './GameRoomPage.scss';
import GameTable from '../../components/GameTable/GameTable';
import BingoDrum from './BingoDrum/BingoDrum';
import BingoBoard from './BingoBoard/BingoBoard';
import Context from '../../store/Players/Context';
import { Player } from '../../utils/types';

const GameRoomPage = (): JSX.Element => {
  const playersCtx = useContext(Context);

  return (
    <div className="game-room-wrapper bg-image">
      <GameTable>
        <BingoDrum />
      </GameTable>
      {playersCtx.players.map((player: Player) => (
        <GameTable key={player.id}>
          <div className="player-table-wrapper">
            <div className="player-table-header" style={{ backgroundColor: player.stoneColor }}>
              <span>{player.name}</span>
            </div>
            <BingoBoard player={player} />
          </div>
        </GameTable>
      ))}
    </div>
  );
};

export default GameRoomPage;
