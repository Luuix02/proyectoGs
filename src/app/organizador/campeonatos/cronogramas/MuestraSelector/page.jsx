"use client";
import React from "react";
import "../../../../../styles/styleCronograma/Cronograma.css";
import Tarde from "../tarde/page";
import Manana from "../manana/page";
import { useState } from "react";

import GuardarCronograma from "../guardarCambios/page";

export default function MuestraSelector() {
  const [selectOption, setSelectOption] = useState("Seleccione Jornada");
  const [mostrarGuardarCambios, setMostrarGuardarCambios] = useState("cronogramas")
  const handleChange = (event) => {
    setSelectOption(event.target.value);
  };
  const handleMostarCambios = () => {
    setMostrarGuardarCambios(mostrarGuardarCambios==="cronogramas"? "guardarCambios" : "guardarCambios");
  }
  const handleCerrarCancelar = () => {
    setMostrarGuardarCambios(!mostrarGuardarCambios)
  }
  return (
    <>
      
        <div class="ContainerPrincipal">
     

          <div class="contenedorCronograma">
            
         
          {
            mostrarGuardarCambios === "guardarCambios" && <GuardarCronograma
            cerrarCancelar={handleCerrarCancelar}
            />
          }
            <div class="AlineacionSelectorYFase">
              

            <select
              value={selectOption}
              class="selectorJornada"
              onChange={handleChange}
            >
              <option value={"Seleccione Jornada"}>Seleccione Jornada</option>
              <option value={"manana"}>Jornada Mañana</option>
              <option value={"tarde"}>Jornada Tarde</option>
            </select>
            <span class="FasesCard">
            <p class="textoFase">FASE 1</p>
            </span>
            {selectOption === "manana" && <Manana />}
            {selectOption === "Seleccione Jornada" && <Manana />}
          {selectOption === "tarde" && <Tarde />}
            </div>
           
           
          <div iv class="AlineacionBotonGuardar">
          <div onClick={handleMostarCambios} class="GuardarBoton">
          Guardar
         </div>
          </div>

          <span class="FasesCard">
            <p class="textoFase">FASE 2</p>
            </span>
            <span class="FasesCard">
            <p class="textoFase">FASE 3</p>
            </span>
            <span class="FasesCard">
            <p class="textoFase">FASE FINAL</p>
            </span>
          </div>
          
         
        </div>
        
   
    </>
  );
}
