import PageEstadisticas from "../../../../../../components/pages/componentEstadistica/pageEstadistica";
import React from "react";
import "@/styles/styleEstadisticas/styleTarde.css";
import SideBarCampeonato from "../../../../../../components/common/sidebarCampeonato/page";
import RootLayout from "@/app/layout";

export default function Tarde() {
  return (
    <>
      <RootLayout backgroundImage={true}>
        <SideBarCampeonato />
        <div>
          <h1 className="jornada">Tarde</h1>
          <PageEstadisticas />
        </div>
      </RootLayout>
    </>
  );
}
