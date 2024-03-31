"use client";

import Image from "next/image";
import "../../../src/styles/styleIntegrantesEquipo/style.css";
import React, { useState } from "react";
import ListadoIntegrantes from "@/app/organizador/campeonatos/verParticipantes/listadoParticipantes/pageListadoPar";

export default function CardsEquipos({ equipos }) {
  const [BotonVerParticipantes, setBotonVerParticipantes] =
    useState("verParticipantes");

  const handleClickOpen = () => {
    setBotonVerParticipantes(
      BotonVerParticipantes === "verParticipantes"
        ? "listadoParticipantes"
        : "listadoParticipantes"
    );
  };

  return (
    <>
      {/* <div className="contenedorPrincipalCardsEquipos"> */}
      {equipos.map((equipo, index) => (
        <div key={index} class="contenedorCardEq">
          <div class="CardFigura">
            <div class="imagenEquipoCard">
              <Image
                src={equipo.imagen}
                width={70}
                height={70}
                class="equipoLogoCard"
              />
            </div>
            <p class="nombreEquipoCard">{equipo.nombre}</p>

            <button
              value={setBotonVerParticipantes}
              onClick={handleClickOpen}
              class="botonVerIntegrantesCard"
            >
              Ver integrantes
            </button>
          </div>
        </div>
      ))}
      {/* </div> */}
    </>
  );
}
