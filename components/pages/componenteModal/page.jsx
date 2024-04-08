import React from "react";
import Modal from "react-modal";
import "../componeneteInicioSesion/page.jsx";
import "../../../src/styles/styleModal/style.css";
import RecuperarContraseña from "../ComponenteRecuperarContraseña/page.jsx";


export default function OlvidoContraseña({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className= "modal" // Aplica estilos CSS al modal
      overlayClassName= "overlay" // Aplica estilos CSS al fondo semi-transparente
    >
      {/* <h2>Ingresa tu correo electrónico para reestablecer tu contraseña </h2> */}
      {/* <RecuperarContraseña></RecuperarContraseña> */}
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  );
}
