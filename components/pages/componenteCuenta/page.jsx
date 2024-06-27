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


  const [file,setFile]= useState(null);
  const [imagen,setImagen]= useState(null);

  return (
    <article className='contenedorPagePerfil'>
      <SideBarPrincipal />
      <section className="section">
        {/* <form action="" className="formulario"> */}
          {/* <div className='textPerfil'> */}
            <label htmlFor="">Foto de Perfil</label>
        
              <form className='imagenPerfil' onSubmit={ async (e)=>{
                e.preventDefault();

                const formData = new FormData();
                formData.append('image', file)

                const respuesta = await fetch('/api', {
                  method: "POST" ,
                  body: formData
                 
                })
                const data =  await respuesta.json()
                console.log(data);
                setImagen(data.url);
              }}>
              {/* <Image src={'/Images/iconosSide/fotos.png'} alt='' width={60} height={60}  /> */}
              <input type='file'onChange={(e)=>{
                setFile(e.target.files[0])
              }} />
              <p className='cambiar'>cambiar foto</p>

              <button type='submit'>Enviar </button>
              </form>
              {
                imagen&&(
                  <img src={imagen} alt=""/>
                )
              }
             
           
          {/* </div> */}
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
        {/* </form> */}
      </section>
      <Modal isOpen={modalOpen} onClose={closeModal} /> {/* Renderiza el Modal aquí */}
    </article>
  );
}