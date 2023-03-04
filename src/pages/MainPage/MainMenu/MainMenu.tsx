import React, { useContext, useState } from 'react';
import './MainMenu.css';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';
import Modal from '../../../components/Modal/Modal';
import NewPlayerContent from '../NewPlayerContent/NewPlayerContent';
import PlayersContext from '../../../store/Players/PlayersContext';
import { getLocalStorageWinners } from '../../../utils/methods';
import WinnersList from '../WinnersList/WinnersList';

const MainMenu = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<'newPlayer' | 'winnersList'>('newPlayer');
  const playersCtx = useContext(PlayersContext);
  const winners = getLocalStorageWinners();

  const handleNewPlayerModal = (): void => {
    setModalContent('newPlayer');
    playersCtx.reset();
    setShowModal((prevState: boolean) => !prevState);
  };

  const handleWinnersListModal = (): void => {
    setModalContent('winnersList');
    playersCtx.reset();
    setShowModal((prevState: boolean) => !prevState);
  };

  return (
    <div className="main-menu-wrapper">
      <ButtonEffect
        label="Top 10 Luckiest People"
        onClick={handleWinnersListModal}
        disabled={winners.length === 0}
      />
      <div className="spacer" />
      <ButtonEffect label="New Game" onClick={handleNewPlayerModal} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {modalContent === 'newPlayer' ? <NewPlayerContent /> : <WinnersList />}
        </Modal>
      )}
    </div>
  );
};

export default MainMenu;
