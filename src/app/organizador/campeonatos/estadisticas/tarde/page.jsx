import PageEstadisticas from "../../../../../../components/pages/componentEstadistica/pageEstadistica";
import React from "react";
import "@/styles/styleEstadisticas/styleTarde.css";
import SideBarCampeonato from "../../../../../../components/common/sidebarCampeonato/page";
import RootLayout from "@/app/layout";

export default function Tarde() {
  return (
    <>
<<<<<<< HEAD
       <div className='contenedorCompleto'>
       <SideBarCampeonato/>
        <div className='contenedorPartidos'>
          <h1 className='jornada'>Tarde</h1>
          <PageEstadisticas/>
        </div>
      
        </div>
=======
      <RootLayout backgroundImage={true}>
        <SideBarCampeonato />
        <div>
          <h1 className="jornada">Tarde</h1>
          <PageEstadisticas />
        </div>
      </RootLayout>
>>>>>>> d59ad724d2e132d497f68405b68233a5346998b4
    </>
  );
}
