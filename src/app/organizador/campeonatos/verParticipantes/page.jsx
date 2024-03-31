"use client";

import SideBarCampeonato from "../../../../../components/common/sidebarCampeonato/page";
import CardsEquipos from "../../../../../components/pages/componenteParticipantes/pageCardsEquipos";
import "../../../../styles/stylePageVerParticipantes/style.css";
import { useState, useEffect } from "react";

export default function verParticipantes() {
  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    const obtenerEquiposDesdeAPI = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/teams");
        const datos = await respuesta.json();

        const equiposObtenidos = datos.data.map((equipo) => ({
          nombre: equipo.name,
          imagen: equipo.image_path,
        }));
        setEquipos(equiposObtenidos);
      } catch (error) {
        console.error("Error al obtener los equipos:", error);
      }
    };

    obtenerEquiposDesdeAPI();
  }, []);

  return (
    <>
      <SideBarCampeonato />
      <div class="bodyIntegrantes">
        <CardsEquipos equipos={equipos} />
      </div>
    </>
  );
}
