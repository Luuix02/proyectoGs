"use client";
import React from "react";
import "@/styles/styleEstadisticas/styleManana.css";
import SideBarCampeonato from "../../../../../../components/common/sidebarCampeonato/page";
import PageEstadisticas from "../../../../../../components/pages/componentEstadistica/pageEstadistica.jsx";
import RootLayout from "@/app/layout";

export default function Manana() {
  return (
    <>

      <RootLayout backgroundImage={true}>
        
        <SideBarCampeonato />
        <div  className='contenedorCompleto'>
          <h1 className="jornada">Mañana</h1>
          <PageEstadisticas />
        </div>
        
      </RootLayout>

    </>
  );
}
