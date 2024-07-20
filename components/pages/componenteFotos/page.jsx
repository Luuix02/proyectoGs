"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SideBarPrincipal from '../../common/sidebar/page';
import '../../../src/styles/styleFotos/fotos.css';

const Fc = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/photo')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las fotos');
        }
        return response.json();
      })
      .then(data => setPhotos(data))
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  const handleDelete = (photoId) => {
    fetch(`http://localhost:3001/photo/${photoId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar la foto');
        }
        setPhotos(photos.filter(photo => photo._id !== photoId));
      })
      .catch(error => {
        console.error('Error deleting photo:', error);
      });
  };

  return (
    <main style={{ display: 'flex' }}>
      <SideBarPrincipal />
      <div className='divmayor'>
        <div className='divpaginasiguiente'>
          <Link href="/organizador/fotos/formulario">
            <button className='botonpagina'>Subir Imágenes</button>
          </Link>
        </div>
        <div className='contenedorSubirImagenes'>
          <div className='grid-container'>
            {photos.map(photo => (
              <div key={photo._id} className="card">
                <img className='cards' src={photo.ImageUrl} alt={photo.Nombre} />
                <h2>{photo.Nombre}</h2>
                <p>{photo.Descripcion}</p>
                <button onClick={() => handleDelete(photo._id)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Fc;
