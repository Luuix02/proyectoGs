import React from "react";
import CampeonatosDisponibles from "../../../../components/pages/dashjugador/campeonatosDisponibles";
import RootLayout from "@/app/layout";

export default function DashJugador() {
  return (
    <>
      <RootLayout backgroundImage={false}>
        <CampeonatosDisponibles />
      </RootLayout>
    </>
  );
}
