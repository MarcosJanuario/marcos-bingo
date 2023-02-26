import React from 'react';
import './PlayerListItem.css';
import type { PlayerListItemProps } from '../Types';

const PlayerListItem = ({ player }: PlayerListItemProps): JSX.Element => (
  <div className="player-list-item-wrapper">{player.name}</div>
);

export default PlayerListItem;
