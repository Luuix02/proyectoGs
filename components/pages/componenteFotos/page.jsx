"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../src/styles/styleFotos/fotos.css";
import SideBarPrincipal from "../../common/sidebar/page";

export default function Fotos() {
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    nombres: "",
    descripcion: "",
    imagen: null,
  });

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/photo");
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Nombre", formData.nombres);
    data.append("Descripcion", formData.descripcion);
    data.append("image", formData.imagen);

    try {
      await axios.post("http://localhost:3001/photo", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchPhotos(); // Update the photos after a new one is added
      setFormData({
        nombres: "",
        descripcion: "",
        imagen: null,
      });
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/photo/${id}`);
      fetchPhotos(); // Update the photos after one is deleted
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  return (
    <main style={{ display: "flex" }}>
      <SideBarPrincipal />
      <div className="contenedorSubirImagenes">
        <h2 className="tituloSubirImg">
          Comparte los mejores momentos de tu campeonato y que siga la diversión!!!
        </h2>

        <div className="divdatos2">
          <div className="divdatos">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombres">Nombres</label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                placeholder="Ejemplo: Juan Pérez"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
              <label htmlFor="descripcion">Descripción</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                placeholder="Ejemplo: El jugador destacado del partido"
                value={formData.descripcion}
                onChange={handleChange}
                required
              />
              <label htmlFor="imagen">Imagen</label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                onChange={handleChange}
                required
              />
              <button type="submit">Subir Imagen</button>
            </form>
          </div>
        </div>

        <div className="imagenesContainer">
          {photos.map((photo) => {
            // Correcting the URL construction
            const imageUrl = `http://localhost:3001/uploads/${photo.Imagepath.replace(/^uploads\//, '')}`;
            console.log(`Loading image from URL: ${imageUrl}`);

            return (
              <div key={photo._id} className="contenedorImagen">
                <img
                  src={imageUrl}
                  alt={photo.Nombre}
                  width={250}
                  height={250}
                  onError={(e) => {
                    console.error(`Error loading image from URL: ${imageUrl}`, e);
                  }}
                />
                <p>{photo.Nombre}</p>
                <p>{photo.Descripcion}</p>
                <button onClick={() => handleDelete(photo._id)}>Eliminar</button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
