"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import "../../../src/styles/styleIntegrantesEquipo/style.css";
import BotonVerIntegrantes from "./pageBotonVerIntegrantes";

export default function CardsEquipos({ equipos }) {

  const [selectedJornada, setSelectedJornada] = useState('');
  
    const handleChangeJornada = (event) => {
      setSelectedJornada(event.target.value);
    };
  return (
    <>
<div className='tituloSelect'>
  <h2 className="tituloIntegrantes">Equipos inscritos jornada 
  <div className='tituloJornada'>
          {selectedJornada && (
              <p className='jornadaSeleccionada'>{selectedJornada}</p>
            )}
 </div>
  </h2>

  <div className='selectedJornadas'>
            
            <select className='selectorJornadasEquipos' value={selectedJornada} onChange={handleChangeJornada}>
              <option value="">Seleccionar jornada</option>
              <option value=" mañana">Jornada Mañana</option>
              <option value=" tarde">Jornada Tarde</option>
            </select>
          </div>

          
</div>
<div className='fasesEquiposCard'>
FASE 1
</div>
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
    
      <div className='fasesEquiposCard'>
FASE 2
</div>
<div className='fasesEquiposCard'>
FASE 3
</div>
<div className='fasesEquiposCard'>
FASE FINAL
</div>
    </>
  );
  }

