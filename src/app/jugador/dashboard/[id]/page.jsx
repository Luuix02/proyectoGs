'use client'

import RootLayout from "@/app/layout";
import { DatosEquipos } from "../../../../../components/pages/dashjugador/datosEquipos";

export default function Planilla({params}) {
 
  return (
    <>
      <RootLayout backgroundImage={true}>
       <DatosEquipos id={params.id}/>
      </RootLayout>
    </>
  );
}
