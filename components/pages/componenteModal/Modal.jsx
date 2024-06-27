import React from 'react';
import styles from '../../../src/styles/styleModal/modal.module.css'; // Asegúrate de tener los estilos del modal aquí

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Recuperar Contraseña</h2>
        <p>Contenido para recuperar la contraseña...</p>
      </div>
    </div>
  );
};

export default Modal;