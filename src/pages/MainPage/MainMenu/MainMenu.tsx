import React, { useContext, useState } from 'react';
import './MainMenu.css';
import ButtonEffect from '../../../components/ButtonEffect/ButtonEffect';
import Modal from '../../../components/Modal/Modal';
import NewPlayerContent from '../NewPlayerContent/NewPlayerContent';
import PlayersContext from '../../../store/Players/PlayersContext';

const MainMenu = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const playersCtx = useContext(PlayersContext);

  const test = () => console.log('clicked on change');

  const toggleModal = (): void => {
    playersCtx.reset();
    setShowModal((prevState: boolean) => !prevState);
  };

  return (
    <div className="main-menu-wrapper">
      <ButtonEffect label="Top 10 Luckiest People" onClick={test} disabled={true} />
      <div className="spacer" />
      <ButtonEffect label="New Game" onClick={toggleModal} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewPlayerContent />
        </Modal>
      )}
    </div>
  );
};

export default MainMenu;
