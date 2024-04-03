import React from 'react';
import Modal from '../componeneteInicioSesion/page.jsx'
import "../../../src/styles/styleModal/style.css"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>Cerrar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
