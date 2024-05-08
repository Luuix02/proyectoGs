import Link from "next/link";
import "../../../src/styles/styleCampeonato/styleCampeonato.css";
import Image from "next/image";
import CardCampeonato from "./cardCampeonato";
import SideBarPrincipal from "../../common/sidebar/page";

export default function Campeonatos() {
  return (
    <article className="contenedorPageCampeonatos">
      <SideBarPrincipal />
      <section className="contnidoCampeonatos">
        <article className="cardCampeonato">
          <Image src={"/goSport1.png"} width={160} height={160}></Image>
          <h1 className="">
            ¡Bienvenido a <p className="textoE">GoSport</p>
            lugar para crear y gestionar tus campeonatos de fútbol!
          </h1>
        </article>
        <article className="campeonatosDisponibles">
          <CardCampeonato />
          <CardCampeonato />
        </article>
      </section>
    </article>
  );
}
