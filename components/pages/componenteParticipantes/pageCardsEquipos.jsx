"use client";

import Image from "next/image";
import "../../../src/styles/styleIntegrantesEquipo/style.css";
import React, { useState } from "react";
import ListadoIntegrantes from "@/app/organizador/campeonatos/verParticipantes/listadoParticipantes/pageListadoPar";



export default function CardsEquipos() {

  const [BotonVerParticipantes, setBotonVerParticipantes] = useState('verParticipantes')
    
  const handleClickOpen = () => { 
    setBotonVerParticipantes(BotonVerParticipantes === 'verParticipantes' ? 'listadoParticipantes' : 'listadoParticipantes');

  }

  

return(

    <>
      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image
              src="/images/imgFases/ESCUDO_JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 1</p>

        <button
          value={setBotonVerParticipantes} onClick={handleClickOpen} 
            class="botonVerIntegrantesCard"
          >
            Ver integrantes
          </button>
        </div>
      </div>

      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image
              src="/images/imgFases/ESCUDO_JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 2</p>

        <button
          value={setBotonVerParticipantes} onClick={handleClickOpen} 
            class="botonVerIntegrantesCard"
          >
            Ver integrantes
          </button>
        </div>
      </div>

      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image
              src="/images/imgFases/ESCUDO_JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 3</p>

          <button
          value={setBotonVerParticipantes} onClick={handleClickOpen} 
            class="botonVerIntegrantesCard"
          >
            Ver integrantes
          </button>
        </div>
      </div>

      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image
              src="/images/imgFases/ESCUDO_JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 4</p>

          <button
          value={setBotonVerParticipantes} onClick={handleClickOpen} 
            class="botonVerIntegrantesCard"
          >
            Ver integrantes
        </button>
        <div className="ContenedorVerListadoIntegrantes">
          {BotonVerParticipantes === 'listadoParticipantes' && <ListadoIntegrantes/>}
        </div>
        </div>
      </div>
    </>
  );
}
