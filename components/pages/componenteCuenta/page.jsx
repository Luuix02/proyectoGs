  "use client";
import React, { useState, useEffect, useRef } from 'react';
import Modal from '../componenteModal/Modal'; // Importa el Modal creado

import '../../../src/styles/stylePerfil/perfil.css';
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

    // Imagenes perfil
    const [file, setFile] = useState(null); // Imagen
    const [imagen, setImagen] = useState(null); // URL de la imagen
    const funcionalidadInput = useRef(null);

    const [imagePreview, setImagePreview] = useState(null); // Guarda la URL de la imagen para verla previamente 
    const [modalFotoOpen, setModalFotoOpen] = useState(false);

    // Funciones de Modal Perfil
    const handleCloseModal = () => {
        setModalFotoOpen(false);
        setFile(null);
        setImagePreview(null);
    };

    // Mantener la imagen en la pantalla cuando se renderize del 

    // Funcion Post
    const savePost = async () => {
        if (!file) {
            return;
        }
    
        const formData = new FormData();
        formData.append("imageAgregar", file);
        const publicId = localStorage.getItem('public_id') || ''; // Retrieve public_id if it exists
        formData.append("public_id", publicId); // Append public_id to the form data
    
        const respuesta = await fetch('/api/post', {
            method: 'POST',
            body: formData
        });
    
        const data = await respuesta.json();
        setImagen(data.url);
    
        if (data.public_id) {
            localStorage.setItem('public_id', data.public_id);
            console.log('Public ID saved:', data.public_id);
        } else {
            console.error('No public_id returned from server');
        }
    
        // Guarda la URL en la base de datos
        await axios.put(`http://localhost:3001/usuarios/66918435536450decd1e3d07`, {
            url_foto: data.url
        });
    
        setModalFotoOpen(false);
    };
    
    
    // Funcion Update
    const saveUpdate = async () => {
        if (!file) {
            return;
        }
        const formData = new FormData();
        formData.append("imageUpdate", file);
        formData.append("public_id", localStorage.getItem('public_id'));
    
        const respuesta = await fetch('/api/post', {
            method: 'PUT',
            body: formData
        });
    
        const data = await respuesta.json();
        setImagen(data.url);
    
        if (data.public_id) {
            localStorage.setItem('public_id', data.public_id);
            console.log('Public ID saved:', data.public_id);
        } else {
            console.error('No public_id returned from server');
        }
    
        // Guarda la URL en la base de datos
        await axios.put(`http://localhost:3001/usuarios/66918435536450decd1e3d07`, {
            url_foto: data.url
        });
    
        setModalFotoOpen(false);
    };
    // Funcion DELETE
    const handleDelete = async () => {
        try {
            const publicId = localStorage.getItem('public_id');
            if (!publicId) {
                throw new Error('No public_id found in localStorage');
            }
    
            console.log('Public ID:', publicId); // Verificar si public_id está presente
    
            // Eliminar imagen de Cloudinary
            const deleteResponse = await fetch('/api/post', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ public_id: publicId })
            });
            const deleteData = await deleteResponse.json();
    
            if (deleteData.error) {
                throw new Error(deleteData.error);
            }
    
            console.log('Imagen eliminada de Cloudinary:', deleteData); // Verificar la respuesta de eliminación
    
            // Actualizar base de datos con URL vacía o null
            await axios.delete(`http://localhost:3001/usuarios/66918435536450decd1e3d07`, {
                url_foto: ' '  // O establece el campo en null, dependiendo de tu esquema de base de datos
            });
    
            // Limpiar localStorage y establecer la imagen predeterminada
            localStorage.removeItem('public_id');
            setImagen('/sinfoto.png');
    
            console.log('Imagen eliminada exitosamente');
        } catch (error) {
            console.error('Error eliminando la imagen:', error);
        }
    };
    
    // Funcion donde se guarda el input
    const input = () => {
        funcionalidadInput.current.click();
    };

    const ImagePreviewMuestra = (e) => {
        const image = e.target.files[0];
        if (image) {
            setFile(image);
            const urlImagePreview = URL.createObjectURL(image);
            setImagePreview(urlImagePreview);
            setModalFotoOpen(true);
        }
    };

    // CONSUMO API GET
    const [user, setUser] = useState([]);
    useEffect(() => {
        const consumo = async () => {
            try {
                const respuesta = await axios.get('http://localhost:3001/usuarios');
                const data = respuesta.data;
                setUser(data);

                // Obtener el usuario actual
                const organizador = data.find(user => user.rol === "organizador"&& user._id==="66918435536450decd1e3d07");
                if (organizador) {
                    // Establecer la imagen del usuario
                    if (organizador.url_foto) {
                        setImagen(organizador.url_foto);
                    } else {
                        setImagen('/sinfoto.png');
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        consumo();
    }, []);

    // CONSUMO API PUT
    const [updateUser, setUpdateUser] = useState({ nombre: '', telefono: '', correo: '', contrasena: '', url_foto: '' });

    const handleChangePutDb = (e) => {
        const { name, value } = e.target;
        setUpdateUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleBoton = async (e) => {
        e.preventDefault();

        const publicId = localStorage.getItem('public_id');
        if (!publicId) {
            console.log('No existe la foto');
            return;
        }
        try {
            await axios.put('http://localhost:3001/usuarios/66733bd3715375cdd10e6598', {
                nombre: updateUser.nombre,
                telefono: updateUser.telefono,
                correo: updateUser.correo,
                contrasena: updateUser.contrasena,
                url_foto: imagen
            });
            console.log('Usuario Actualizado');
        } catch (error) {
            console.log('Hubo un error');
        }
    };
    return (
      
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
                  <button class="botonEnviarClouddinary" onClick={savePost}>Enviar</button>  
                </form>
                  </section>
                
              
                  <section className='seccionDatos'> 
                  {
                  user.filter(user=>user.rol === "organizador"&& user._id==="66918435536450decd1e3d07").map((organizador)=>(
                    <form key={organizador._id} onSubmit={handleBoton} className='EtiquetaForm'>
                     
                     
                
                    <div className='DireccionCampolargo'>
                    <label className='textoDeFormulario colortTexto'>Nombres</label>
                    <input className='Campos' placeholder={organizador.nombres} value={updateUser.nombre}
                  onChange={handleChangePutDb}
                   type='text'/>
                    </div>
                    
                    <div className='DireccionCampolargo telefono'>
                    <label className='textoDeFormulario colortTexto'>Telefono</label>
                    <input placeholder={organizador.telefono} value={updateUser.telefono} onChange={handleChangePutDb} className='Campos' type='text'/>
                    </div>
                    
                    
                    <div className='DireccionFormulario'>
                    
                      <label className='textoDeFormulario colortTexto' >Correo electronico</label>
                      <section className='SeccionVerCorreoAntiguo'>
                      <p className='colortTexto' value={updateUser.correo}  >{organizador.correo}</p>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="iconCheck"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                      </svg>
                      </section>
                      <section className='datosDireccionCamposCorreo'>
                      <input className='Campos' type='text' value={updateUser.correo} onChange={handleChangePutDb} placeholder={organizador.correo}/>
                      <input  className='Campos' value={updateUser.correo} onChange={handleChangePutDb} type='text' placeholder='Confirmacion'/>
                      </section>
                    </div>


                    <div className='DireccionFormulario'>
                    <label className='colortTexto textoDeFormulario'>Contraseña</label>
                    <section className='datosDireccionCamposCorreo'>
                    <input className='Campos' value={updateUser.contrasena} onChange={handleChangePutDb} placeholder='******' type='text'/>
                    <input value={updateUser.contrasena} onChange={handleChangePutDb} placeholder='Confirmacion' className='Campos' type='text'/>
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