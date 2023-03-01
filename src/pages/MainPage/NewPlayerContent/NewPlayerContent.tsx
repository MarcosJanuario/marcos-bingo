import React, { useContext, useEffect, useState } from 'react';
import './NewPlayerContent.css';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';
import InputField from '../../../components/InputField/InputField';
import { cloneDeep } from 'lodash';
import PlayerListItem from './PlayerListItem/PlayerListItem';
import ColorPicker from '../../../components/ColorPicker/ColorPicker';
import { Gender, Player } from '../../../utils/types';
import PlayersContext from '../../../store/Players/PlayersContext';
import { generateRandomId } from '../../../utils/methods';
import { DEFAULT_PLAYER, INITIAL_COLORS, MAX_PLAYERS } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import GenderSelector from '../../../components/GenderSelector/GenderSelector';

const NewPlayerContent = (): JSX.Element => {
  const [player, setPlayer] = useState<Player>(DEFAULT_PLAYER);
  const playersCtx = useContext(PlayersContext);
  const navigate = useNavigate();

  useEffect(() => {
    updateState('stoneColor', INITIAL_COLORS[playersCtx.players.length]);
  }, []);

  const addPlayer = (): void => {
    const tempPlayer = cloneDeep(player);
    tempPlayer.id = generateRandomId();
    playersCtx.addPlayer(tempPlayer);
    setPlayer({
      id: '',
      name: '',
      stoneColor: INITIAL_COLORS[playersCtx.players.length + 1],
      gender: 'male'
    });
  };

  const handleNameChange = (newName: React.ChangeEvent<HTMLInputElement>): void =>
    updateState('name', newName.target.value);

  const handleColorPicker = (newColor: string): void => updateState('stoneColor', newColor);

  const updateState = (prop: string, value: string): void => {
    const tempPlayer = cloneDeep(player);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tempPlayer[prop] = value;
    setPlayer(tempPlayer);
  };

  const onRemove = (player: Player): void => playersCtx.removePlayer(player);

  const noPlayers = (): boolean => playersCtx.players.length === 0;
  const threeOrMorePlayers = (): boolean => playersCtx.players.length >= 3;
  const leesThanTwoPlayers = (): boolean => playersCtx.players.length < 2;
  const limitOfPlayersReached = (): boolean => playersCtx.players.length === MAX_PLAYERS;

  return (
    <div className="new-player-content-wrapper">
      <div className={`players-wrapper`}>
        <div className="header">
          <span>Players</span>
        </div>
        <div
          className={`players-list-wrapper ${noPlayers() && 'no-players'} ${
            noPlayers() && 'centered'
          }`}>
          {noPlayers() && <span>No Players. Please add at least 2</span>}
          {playersCtx.players.map((player: Player, index: number) => (
            <PlayerListItem key={index} player={player} onRemove={onRemove} />
          ))}
        </div>
      </div>

      <InputField
        label="Player Name"
        error={!player.name}
        value={player.name}
        onChange={handleNameChange}
        disabled={threeOrMorePlayers()}
      />

      <ColorPicker
        label="Choose a player color"
        defaultColor={INITIAL_COLORS[playersCtx.players.length]}
        onColorPicked={handleColorPicker}
      />

      <div className="spacer" />

      <GenderSelector onChange={(gender: Gender) => updateState('gender', gender)} />

      <div className="spacer" />

      <ButtonEffect
        label="Add Player"
        onClick={addPlayer}
        disabled={player.name === '' || limitOfPlayersReached()}
      />

      <div className="spacer" />

      <ButtonEffect
        label="Start Game"
        onClick={() => navigate('/game-room')}
        disabled={leesThanTwoPlayers()}
      />
    </div>
  );
};

export default NewPlayerContent;
