import React from 'react';
import './Modal.css';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
  onClose: () => void;
  children: any;
}

const Modal = ({ children, onClose }: ModalProps): JSX.Element => (
  <div className="modal">
    <div className="modal-content">
      <div className="modal-close-wrapper">
        <div className="modal-close-icon" onClick={onClose}>
          <FontAwesomeIcon icon={faRemove} />
        </div>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
