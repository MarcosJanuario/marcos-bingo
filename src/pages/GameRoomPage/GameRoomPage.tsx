import React, { useContext, useEffect, useRef, useState } from 'react';
import './GameRoomPage.scss';
import GameTable from '../../components/GameTable/GameTable';
import BingoDrum from './BingoDrum/BingoDrum';
import BingoBoard from './BingoBoard/BingoBoard';
import PlayersContext from '../../store/Players/PlayersContext';
import { Player } from '../../utils/types';
import Confetti from 'react-confetti';
import useWindowSize from '../../utils/customHooks/useWindowsSize';
import { useNavigate } from 'react-router-dom';

const GameRoomPage = (): JSX.Element => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  const confettiRef = useRef(null);
  const playersCtx = useContext(PlayersContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (playersCtx.players.length === 0) {
      navigate('/');
    }
    if (playersCtx.winner) {
      setShowConfetti(true);
    }
  }, [playersCtx.winner]);

  return (
    <div className="game-room-wrapper bg-image">
      <div className="confetti-wrapper" ref={confettiRef}>
        {showConfetti && <Confetti numberOfPieces={200} width={width} height={height} />}
      </div>
      <GameTable>
        <BingoDrum />
      </GameTable>
      {playersCtx.players.map((player: Player) => (
        <GameTable key={player.id}>
          <div className="player-table-wrapper">
            <div className="player-table-header">
              <span style={{ backgroundColor: player.stoneColor }}>{player.name}</span>
            </div>
            <BingoBoard player={player} />
          </div>
        </GameTable>
      ))}
    </div>
  );
};

export default GameRoomPage;
