import Link from "next/link";
import '../../../src/styles/styleCampeonato/styleCampeonato.css';
import Image from "next/image";
import CardCampeonato from "./cardCampeonato";
import '../../../src/app/globals.css'
export default function Campeonatos() {
  return (
    <section className="contnidoCampeonatos fondoApp">
          <article className="cardCampeonato">
              <Image src={'/logo.png'} width={150} height={150}></Image>
              <h1 className="w-96 text-2xl">¡Bienvenido a <p className="textoE">GoSport</p>
                  lugar para crear y gestionar tus
                  campeonatos de fútbol!</h1>
          </article>
          <article  className="campeonatosDisponibles">
        <CardCampeonato/>
        <CardCampeonato/>
          </article>

      </section>
  )
}
