"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import "../../../src/styles/styleFotos/fotos.css";
import SideBarPrincipal from "../../common/sidebar/page";

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
        // Actualizar el estado para reflejar la eliminación
        setPhotos(photos.filter(photo => photo._id !== photoId));
      })
      .catch(error => {
        console.error('Error deleting photo:', error);
      });
  };

  console.log(photos)
  return (
    <>
      <main style={{ display: "flex" }}>
        <SideBarPrincipal />
        <div className='divmayor'>
          <div className='contenedorSubirImagenes'>
            {photos.map(photo => (
              <div key={photo._id}>
                <img className='cards' src={`http://localhost:3001/${photo.Imagepath}`} alt={photo.Nombre} />
                <h2>{photo.Nombre}</h2>
                <p>{photo.Descripcion}</p>
                <button onClick={() => handleDelete(photo._id)}>Eliminars</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Fc;
