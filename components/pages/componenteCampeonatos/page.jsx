import Link from "next/link";
import '../../../src/styles/styleCampeonato/styleCampeonato.css';
import Image from "next/image";
export default function Campeonatos() {
  return (
      <section className="contnidoCampeonatos">
          <article className="cardCampeonato">
              <Image src={'/logo.png'} width={150} height={150}></Image>
              <h1 className="w-96 text-2xl">¡Bienvenido a <p className="textoE">GoSport</p>
                  lugar para crear y gestionar tus
                  campeonatos de fútbol!</h1>
          </article>

          <article className="descripcion flex gap-10 border m-10 p-4 rounded-lg w-max">
              <div className="texto">
                  <h1 className="font-bold">Torneo del Ascenso Dorado</h1>
                  <p className="text-xl">El torneo del Ascenso Dorado
                      no es solo un torneo;es una
                      oportunidad para elevarse
                      por encima de las adversidades,
                      ¿Tienes lo necesario para
                      enfrentarte y emerger
                      como un campeón?
                      Inscríbete y prepárate</p>
              </div>

              <div className="">
                  <h1 className="font-bold">Progreso</h1>
                  <section className="barraProgreso bg-white rounded-lg text-end mt-7">
                      <h1 className="porciento">0%</h1>
                  </section>
                  <p className="mt-7">Fecha de inicio:   15/01/2024</p>
                  <p className="mb-7">Fecha de finalizacion:   12/02/2024</p>

                  <Link href='/inicioSesion/organizador/campeonatos/estadisticas/tarde'
                      className="editar text-white text-2xl bg-red-500 p-2 rounded-md ">Editar</Link>
              </div>
          </article>

      </section>
  )
}
