import React from 'react';
import { Player } from '../../../../utils/types';
import './WinnerContent.scss';
import ButtonEffect from '../../../../components/ButtonEffect/ButtonEffect';

interface WinnersContentProps {
  player: Player;
  closeModal: () => void;
}

const WinnerContent = ({ player, closeModal }: WinnersContentProps): JSX.Element => (
  <div className="winner-content-wrapper">
    <div className={`winner-image ${player.gender}`} />
    <div className="winner-content-player">
      <span style={{ color: player.stoneColor }}>{`Congratulations ${player.name}!`}</span>
    </div>
    <div className="winner-content-button-wrapper">
      <ButtonEffect label="Close" onClick={closeModal} />
    </div>
  </div>
);

export default WinnerContent;
