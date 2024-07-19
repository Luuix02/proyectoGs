"use client"
import React, { useState } from 'react';
import './formulario.css'; // Import the CSS file

const Formulario = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    Nombre: '',
    Descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('Nombre', formData.Nombre);
    data.append('Descripcion', formData.Descripcion);
    if (selectedFile) {
      data.append('image', selectedFile);
    }

    fetch('http://localhost:3001/photo', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(data => {
        if (onUpload) {
          onUpload(data.photo);
        }
        setFormData({
          Nombre: '',
          Descripcion: ''
        });
        setSelectedFile(null);
      })
      .catch(error => {
        console.error('Error uploading photo:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="Nombre"
        value={formData.Nombre}
        onChange={handleInputChange}
        placeholder="Nombre"
        required
        className="form-input"
      />
      <input
        type="text"
        name="Descripcion"
        value={formData.Descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
        required
        className="form-input"
      />
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
        required
        className="form-input"
      />
      {selectedFile && (
        <div className="image-preview">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Vista previa"
            className="preview-img"
          />
        </div>
      )}
      <button type="submit" className="form-button">Subir Foto</button>
    </form>
  );
};

export default Formulario;
