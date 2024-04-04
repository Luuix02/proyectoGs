import React from 'react';
import '../componeneteInicioSesion/page.jsx'; 
import "../../../src/styles/styleModal/style.css";

const ComponenteModal = ({ isOpen, onClose, children }) => { 
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default ComponenteModal; 
