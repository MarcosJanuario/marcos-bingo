import React from 'react';
import './Modal.css';

interface ModalProps {
  children: any;
}

const Modal = ({ children }: ModalProps): JSX.Element => (
  <div className="modal">
    <div className="modal-content">{children}</div>
  </div>
);

export default Modal;
