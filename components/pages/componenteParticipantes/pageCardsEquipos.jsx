"use client";

import Image from "next/image";
import "../../../src/styles/styleIntegrantesEquipo/style.css";
import React, { useState } from "react";


export default function CardsEquipos() {
  
  
  return (
    <>
      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image
              src="/images/imgFases/JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 1</p>

          <button
            // onClick={handleVerIntegrantes}
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
              src="/images/imgFases/JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 2</p>

          <button
            // onClick={handleVerIntegrantes}
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
              src="/images/imgFases/JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 3</p>

          <button
            // onClick={handleVerIntegrantes}
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
              src="/images/imgFases/JUNIOR.jpg"
              width={70}
              height={70}
              class="equipoLogoCard"
            />
          </div>
          <p class="nombreEquipoCard">Equipo 4</p>

          <button
            // onClick={handleVerIntegrantes}
            class="botonVerIntegrantesCard"
          >
            Ver integrantes
          </button>
        </div>
      </div>
    </>
  );
}
