"use client"
import React, { useState, useEffect, useRef } from 'react';
import Modal from '../componenteModal/Modal'; // Importa el Modal creado

// Importa estilos específicos de tu componente Perfil
import '../../../src/styles/stylePerfil/perfil.css';
import Image from 'next/image';
import SideBarPrincipal from '../../common/sidebar/page';

//importacion Modal fotos perfil
import ModalFotoPerfil from "./modalFotoPerfil";

//Consumo 
import axios from "axios";



export default function Perfil() {
  const [modalOpen, setModalOpen] = useState(false);
  

  //modal Brayan
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

 

    //Imagenes perfil
  const [file,setFile]= useState(null); //Imagen
  const [imagen,setImagen]= useState('/sinfoto.png'); //url de la imagen
  const funcionalidadInput = useRef(null);
  const [imagePreview, setImagePreview]= useState(null); //Guarda la URl de la imagen para verla previamente 
  const [modalFotoOpen, setModalFotoOpen]= useState(false);

   //Funciones de Modal Perfil
   const handleCloseModal = () => {
    setModalFotoOpen(false);
    setFile(null);
    setImagePreview(null);
  };

  // Funcion Post
const savePost = async () => {
  if (!file) {
    return;
  }
  const formData = new FormData();
  formData.append("imageAgregar", file);
  

  const respuesta = await fetch('/api/post', {
    method: 'POST',
    body: formData
  });

  const data = await respuesta.json();
  setImagen(data.url);
  localStorage.setItem('imageStaticNavegador', data.url);
  localStorage.setItem('public_id', data.public_id); // Guardar public_id
  setModalFotoOpen(false);
}

// Funcion Update
const saveUpdate = async () => {
  if (!file) {
    return;
  }
  const formData = new FormData();
  formData.append("imageUpdate", file);
  formData.append("public_id", "public_id_image");
  
  const respuesta = await fetch('/api/post', {
    method: 'PUT',
    body: formData
  });

  const data = await respuesta.json();
  setImagen(data.url);
  localStorage.setItem('imageStaticNavegador', data.url);
  localStorage.setItem('public_id', data.public_id); // Guardar public_id
  setModalFotoOpen(false);
}
  //fUNCION DELETE
const handleDelete = async () => {
  try {
    const publicId = localStorage.getItem('public_id'); 
    if (!publicId) {
      throw new Error('No public_id found in localStorage');
    }

    const respuesta = await fetch('/api/post', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ public_id: publicId })
    });

    const data = await respuesta.json();
    if (data.error) {
      throw new Error(data.error);
    }

    localStorage.removeItem('imageStaticNavegador');
    localStorage.removeItem('public_id');

    setImagen('/sinfoto.png');
    localStorage.setItem('imageStaticNavegador','/sinfoto.png');
    console.log('Image deleted successfully');
  } catch (error) {
    console.error('Error eliminando la imagen:', error);
  }
}

  
  
  
  //mantener la iamgen en la pantalla cuando se renderize del Post
  useEffect(()=>{
    const savedImgeUrl = localStorage.getItem('imageStaticNavegador');
    if (savedImgeUrl) {
      setImagen(savedImgeUrl);
    }else{
      setImagen('/sinfoto.png')
    }
  },[])
  //funcion donde se gurada el input
  const input = () =>{
    funcionalidadInput.current.click();
  }

  const ImagePreviewMuestra = (e)=>{
    const image = e.target.files[0];
    if(image){
      setFile(image);
      const urlImagePreview = URL.createObjectURL(image);
      setImagePreview(urlImagePreview)
      setModalFotoOpen(true)
    }
  }

  //CONSUMO API
  const [user, setUser]  = useState([]);
  useEffect(()=>{
    const consumo = async()=>{
      try{
        const respuesta = await axios.get('http://localhost:3001/usuarios')
        const data = respuesta.data;
        setUser(data); 
        setImagen('/sinfoto.png')
      }
      catch(error){
        console.log(error)
      }
    }
    consumo();
  },[])

  return (
    //mapeo
    
    <div className='ContenedorPrincipalEditarPerfil'>
    
      <SideBarPrincipal />  
      <section className="section">
              <div className='ContenedorFormulario'>
                <section className='seccionFoto'> 
                
                <div class="ContenedorFoto">
                
               {
                setImagen && (
                  <img  className='ImagenPerfil' width={230} height={230} src={imagen} alt=""/>
                )
              }
              <button className='ContenedorFotoDelete' onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" class="IconDelete" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
             <path d="M4 7l16 0"></path>
             <path d="M10 11l0 6"></path>
             <path d="M14 11l0 6"></path>
           <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>
              </button>
               <button onClick={input} style={{ display: imagen === '/sinfoto.png' ? 'none' : 'block'}} className={`ContenedorFotoUpdate ${imagen !== '/sinfoto.png' ? '' : 'hidden'}`}>
               <svg xmlns="http://www.w3.org/2000/svg" class="iconupdate" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
             <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
            </svg>
               </button>
               <button onClick={input} style={{ display: imagen !== '/sinfoto.png' ? 'none' : 'block' }} className={`ContenedorAgregar ${imagen === '/sinfoto.png' ? '' : 'hidden'}`}>
               <svg xmlns="http://www.w3.org/2000/svg" class="IconAgregar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                 <path d="M15 12h-6"></path>
                 <path d="M12 9v6"></path>
            </svg>
               </button>
               </div>
              
               <form className='imagenPerfil' onSubmit={(e)=> e.preventDefault()}>
                <input
                className='escanearFoto'
                ref={funcionalidadInput}  
                type='file'
                onChange={ImagePreviewMuestra}
                />
                <button type='submit' onClick={async (e) => {
                e.preventDefault();
                await update();
              }}className='botonEnviarClouddinary'>Enviar</button>
                
               </form>
                </section>
                <section className='seccionDatos'> 
                {
                 user.filter(user=>user.rol === "organizador").map((organizador)=>(
                  <form key={organizador._id} className='EtiquetaForm'>
                  <div className='DireccionCampolargo'>
                  <label className='textoDeFormulario colortTexto'>Nombres</label>
                  <input className='Campos' placeholder={organizador.nombres} type='text'/>
                  </div>
                  
                  <div className='DireccionCampolargo telefono'>
                  <label className='textoDeFormulario colortTexto'>Telefono</label>
                  <input placeholder={organizador.telefono} className='Campos' type='text'/>
                  </div>
                  
                  
                  <div className='DireccionFormulario'>
                   
                    <label className='textoDeFormulario colortTexto'>Correo electronico</label>
                    <section className='SeccionVerCorreoAntiguo'>
                    <p className='colortTexto'>{organizador.correo}</p>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="iconCheck"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
                    </section>
                    <section className='datosDireccionCamposCorreo'>
                    <input className='Campos' type='text' placeholder={organizador.correo}/>
                    <input  className='Campos' type='text' placeholder='Confirmacion'/>
                    </section>
                   </div>


                   <div className='DireccionFormulario'>
                   <label className='colortTexto textoDeFormulario'>Contraseña</label>
                   <section className='datosDireccionCamposCorreo'>
                   <input className='Campos' placeholder='******' type='text'/>
                   <input  placeholder='Confirmacion' className='Campos' type='text'/>
                   </section>
                  </div>


                  <button type='submit' className='EnviarDatosPersonales'>Enviar</button>
                </form>

                 ))
                 }           
                  
                </section>

              </div>
          
              <a href="#" className="text" onClick={(e) => { e.preventDefault(); openModal(); }}>Olvido contraseña</a>
            
           
        {/* </form> */}
      </section>
      <Modal isOpen={modalOpen} onClose={closeModal} /> {/* Renderiza el Modal aquí */}
      <ModalFotoPerfil 
      isOpen={modalFotoOpen}
      onClose={handleCloseModal}
      onSave={savePost}
      imagePreview={imagePreview}
      />
      <ModalFotoPerfil 
      isOpen={modalFotoOpen}
      onClose={handleCloseModal}
      onSave={saveUpdate}
      imagePreview={imagePreview}
      />
    </div>
   
  );
}