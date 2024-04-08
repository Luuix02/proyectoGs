"use client";
import React from "react";
import "../../../../styles/styleCronograma/Cronograma.css"
import Tarde from "./tarde/page";
import Manana from "./manana/page";
import { useState } from "react";
import SideBarCampeonato from "../../../../../components/common/sidebarCampeonato/page";
import RootLayout from "@/app/layout";
import GuardarCronograma from "./guardarCambios/page";

export default function Cronograma() {
  const [selectOption, setSelectOption] = useState("manana");
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
      <RootLayout backgroundImage={true}>
        <SideBarCampeonato></SideBarCampeonato>
        <div class="ContainerPrincipal">
     

          <div class="contenedorCronograma">
         
          {
            mostrarGuardarCambios === "guardarCambios" && <GuardarCronograma
            cerrarCancelar={handleCerrarCancelar}
            />
          }
            <div class="AlineacionSelectorYFase">
              <div class="AnchoDeFase1">
                <p class="textoFase">Fase1</p>
              </div>
            <select
              value={selectOption}
              class="selectorJornada"
              onChange={handleChange}
            >
              <option value="" disabled>Seleccione Jornada</option>
              <option value={"manana"}>Jornada Mañana</option>
              <option value={"tarde"}>Jornada Tarde</option>
            </select>

            </div>
           
            {selectOption === "manana" && <Manana />}
          {selectOption === "tarde" && <Tarde />}
          <div class="AlineacionBotonGuardar">
          <div onClick={handleMostarCambios} class="GuardarBoton">
          Guardar
         </div>
          </div>
        
          </div>

         
        </div>
       
      </RootLayout>
    </>
  );
}
