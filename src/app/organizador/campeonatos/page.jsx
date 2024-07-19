import RootLayout from "@/app/layout";
import Campeonatos from "../../../../components/pages/componenteCampeonatos/page";
import '../../../styles/Campeonato/round.css';

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
