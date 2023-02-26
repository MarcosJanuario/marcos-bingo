import React, { useEffect, useState } from 'react';
import './NewPlayerContent.css';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';
import InputField from '../../../components/InputField/InputField';
import _ from 'lodash';
import type { Player } from './Types';
import PlayerListItem from './PlayerListItem/PlayerListItem';
import ColorPicker from '../../../components/ColorPicker/ColorPicker';

const INITIAL_COLORS = ['#29B6F6', '#EF5350', '#66BB6A'];
const DEFAULT_PLAYER = { name: '', stoneColor: '' };

const NewPlayerContent = (): JSX.Element => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [player, setPlayer] = useState<Player>(DEFAULT_PLAYER);

  useEffect(() => {
    updateState('stoneColor', INITIAL_COLORS[players.length]);
  }, []);

  const addPlayer = (): void => {
    const tempPlayers = _.cloneDeep(players);
    tempPlayers.push(player);
    setPlayers(tempPlayers);
    setPlayer({
      name: '',
      stoneColor: INITIAL_COLORS[players.length + 1]
    });
  };

  const handleNameChange = (newName: React.ChangeEvent<HTMLInputElement>): void => {
    updateState('name', newName.target.value);
  };

  const handleColorPicker = (newColor: string): void => {
    updateState('stoneColor', newColor);
  };

  const updateState = (prop: string, value: string): void => {
    const tempPlayer = _.cloneDeep(player);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tempPlayer[prop] = value;
    setPlayer(tempPlayer);
  };

  return (
    <div className="new-player-content-wrapper">
      <div className="players-wrapper">
        <div className="header">
          <span>Players</span>
        </div>
        <div className={`players-list-wrapper ${players.length === 0 && 'centered'}`}>
          {players.length === 0 && <span>No Players. Please add at least 2</span>}
          {players.map((player: Player, index: number) => (
            <PlayerListItem key={index} player={player} />
          ))}
        </div>
      </div>

      <InputField label="Player Name" value={player.name} onChange={handleNameChange} />

      <ColorPicker
        label="Choose a player color"
        defaultColor={INITIAL_COLORS[players.length]}
        onColorPicked={handleColorPicker}
      />

      <div className="spacer" />

      <ButtonEffect label="Add Player" onClick={addPlayer} disabled={player.name === ''} />

      <div className="spacer" />

      <ButtonEffect label="Start Game" onClick={addPlayer} disabled={players.length < 2} />
    </div>
  );
};

export default NewPlayerContent;
