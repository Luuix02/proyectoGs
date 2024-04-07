"use client";
import React from "react";
import "@/styles/styleEstadisticas/styleManana.css";
import SideBarCampeonato from "../../../../../../components/common/sidebarCampeonato/page";
import PageEstadisticas from "../../../../../../components/pages/componentEstadistica/pageEstadistica.jsx";
import RootLayout from "@/app/layout";

export default function Manana() {
  return (
    <>
<<<<<<< HEAD
    <div className='contenedorDiv'>
    <SideBarCampeonato/>
        <div className='contenedorCompleto'>
          <h1 className='jornada'>Mañana</h1>
         <PageEstadisticas/>
        </div>
        </div>
=======
      <RootLayout backgroundImage={true}>
        <SideBarCampeonato />
        <div>
          <h1 className="jornada">Mañana</h1>
          <PageEstadisticas />
        </div>
      </RootLayout>
>>>>>>> d59ad724d2e132d497f68405b68233a5346998b4
    </>
  );
}
