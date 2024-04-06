import RootLayout from "@/app/layout";
import InicioSesion from "../../../../components/pages/componeneteInicioSesion/page";

export default function Iniciar() {
  return (
    <>
      <RootLayout backgroundImage={false}>
        <InicioSesion />
      </RootLayout>
    </>
  );
}
