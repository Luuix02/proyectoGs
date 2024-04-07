import RootLayout from "@/app/layout";
import Campeonatos from "../../../../components/pages/componenteCampeonatos/page";

export default function CampeonatosAdmin() {
  return (
    <>
      <RootLayout backgroundImage={true}>
        <article className="">
          <Campeonatos />
        </article>
      </RootLayout>
    </>
  );
}
