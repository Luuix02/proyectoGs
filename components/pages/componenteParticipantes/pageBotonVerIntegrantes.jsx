import React, { useEffect, useState } from "react";
import ListadoIntegrantesTabla from "./pageListadoIntegrantes";

export default function BotonVerIntegrantes() {
  const [modalVisible, setModalVisible] = useState(false);
  const [integrantes, setIntegrantes] = useState([]);

  const obtenerIntegrantesDesdeAPI = async () => {
    try {
      const response = await fetch("http://localhost:5000/players");
      const data = await response.json();
      if (Array.isArray(data.data)) {
        setIntegrantes(data.data);
      } else {
        console.error("La respuesta de la API no es un array:", data);
      }
    } catch (error) {
      console.error("Error al obtener los integrantes:", error);
    }
  };

  useEffect(() => {
    if (modalVisible) {
      obtenerIntegrantesDesdeAPI();
    }
  }, [modalVisible]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <button onClick={handleOpenModal} className="botonVerIntegrantesCard">
        Ver integrantes
      </button>

      {modalVisible && (
        <div className="modalIntegrantes">
          <div className="modalContentIntegrantes">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <ListadoIntegrantesTabla integrantes={integrantes} />
          </div>
        </div>
      )}
    </>
  );
}
