"use client"
import React, { useState } from 'react';
import Modal from '../componenteModal/Modal'; // Importa el Modal creado

// Importa estilos específicos de tu componente Perfil
import '../../../src/styles/stylePerfil/perfil.css';
import Image from 'next/image';
import SideBarPrincipal from '../../common/sidebar/page';

export default function Perfil() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <article className='contenedorPagePerfil'>
      <SideBarPrincipal />
      <section className="section">
        <form action="" className="formulario">
          <div className='textPerfil'>
            <label htmlFor="">Foto de Perfil</label>
            <div className='imagenPerfil'>
              <Image src={'/Images/iconosSide/fotos.png'} width={60} height={60} />
              <p className='cambiar'>cambiar foto</p>
            </div>
          </div>
          <article className='contenedorFormulario'>
            <div className='textoFmo'>
              <label htmlFor="" className="pr-5">Nombre</label>
              <label htmlFor="" className="pr-3">Apellidos</label>
              <label htmlFor="" className="pr-4">Telefono</label>
              <label htmlFor="" className="pr-10">Correo</label>
              <label htmlFor="">Contraseña</label>
            </div>
            <div className='contenedorCajas'>
              <input type="text" className='cajaTexto' />
              <input type="text" className='cajaTexto' />
              <input type="text" className='cajaTexto' />
              <input type="text" className='cajaTexto' />
              <input type="text" className='cajaTexto' />
              <a href="#" className="text" onClick={(e) => { e.preventDefault(); openModal(); }}>Olvido contraseña</a>
            </div>
          </article>
          <button className="guardar">Guardar cambios</button>
        </form>
      </section>
      <Modal isOpen={modalOpen} onClose={closeModal} /> {/* Renderiza el Modal aquí */}
    </article>
  );
}