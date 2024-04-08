import React from "react";
import Detalle from "../../../../../../components/pages/componentEstadistica/verDetalle";
import RootLayout from "@/app/layout";
export default function VerDetalle() {
  return (
    <>
     <RootLayout backgroundImage={true}>
      <Detalle />
      </RootLayout>
    </>
  );
}
