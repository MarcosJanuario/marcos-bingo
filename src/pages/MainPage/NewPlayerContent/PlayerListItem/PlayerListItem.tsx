import React from 'react';
import './PlayerListItem.css';
import type { PlayerListItemProps } from '../Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PlayerListItem = ({ player, onRemove }: PlayerListItemProps): JSX.Element => (
  <div className="player-list-item-wrapper">
    <div className="player-list-item-name-wrapper">
      <span style={{ color: player.stoneColor }}>{player.name}</span>
    </div>
    <div className="player-list-item-icon-wrapper" onClick={() => onRemove(player)}>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  </div>
);

export default PlayerListItem;
