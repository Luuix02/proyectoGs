"use client";

import Image from "next/image";
import "../../../src/styles/styleIntegrantesEquipo/style.css";
import BotonVerIntegrantes from "./pageBotonVerIntegrantes";

export default function CardsEquipos({ equipos }) {
  return (
    <>
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
            <BotonVerIntegrantes />
          </div>
         
        </div>
      
      ))}
      
    </>
  );
}
