'use client'
import React, { useState } from "react";

import RootLayout from "@/app/layout";
import { DatosEquipos } from "../../../../components/pages/dashjugador/datosEquipos";
import { DatosIntegrantes } from "../../../../components/pages/dashjugador/datosIntegrantes";


export default function Planilla() {
 
  const [searchJugador, setSearchJugador]=useState()
  
  

  return (
    <>
      <RootLayout backgroundImage={true}>
       <DatosEquipos/>
       <DatosIntegrantes/>
      </RootLayout>
    </>
  );
}
