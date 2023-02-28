import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalProps } from './types';

const Modal = ({ showCloseButton = true, children, onClose }: ModalProps): JSX.Element => {
  const ModalContent = (): JSX.Element => (
    <div className="modal">
      <div className="modal-content">
        {showCloseButton && (
          <div className="modal-close-wrapper">
            <div className="modal-close-icon" onClick={onClose}>
              <FontAwesomeIcon icon={faRemove} />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <>{ReactDOM.createPortal(<ModalContent />, document.getElementById('modal-root'))}</>;
};

export default Modal;
