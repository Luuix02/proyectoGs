"use client"
import React, { useState } from 'react';
import Modal from '../../../../components/pages/componenteModal/page.jsx'; // Asegúrate de tener la ruta correcta al componente Modal
import "../../../styles/styleRecuperarContraseña/styleRecuperarContraseña.css";

export default function OlvidoContrasena() {
  const path = '/auth';
  const [showModal, setShowModal] = useState(false); // Estado para controlar la apertura del modal

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal(); // Abre el modal al enviar el formulario
    // Aquí podrías agregar la lógica para enviar el correo electrónico para restablecer la contraseña
  };

  return (
    <div className='html_recuperarContraseña'>
      <div className='contenedorRecuperarContraseña'>
        <h1 className='tituloRecuperarContraseña'>Recuperar Contraseña</h1>
        <br /> <br />

        <div className='contenedorFormulario'>
          <form onSubmit={handleSubmit}>
            <div className='campoConEtiqueta'>
              <label htmlFor="correo" className='etiquetaDato'>Ingresa tu Correo electrónico</label>
              <input type="email" id="correo" name="correo" placeholder="ej: pepito@gmail.com" required className='campoDato' />
            </div>

            <div className='botonesRecuperarContraseña'>
              <button type='button' className='botoncancelar'>Cancelar</button>
              <button type='submit' className='botonEnviar'>Enviar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <h2>Correo enviado</h2>
        <p>Se ha enviado un correo electrónico para restablecer tu contraseña.</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
}
