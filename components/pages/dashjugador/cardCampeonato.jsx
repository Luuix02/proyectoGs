import Link from "next/link"
import '../../../src/styles/styleDashJugador/styleCard.css'
export default function CardCampeonato() {
  return (
    <article className="cardCampeonato">
    <div className="column">
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

    <div className="column column2">
      <h1 className="">Maximo de integrantes: 15</h1>
      <p className="">Fecha de inicio:   15/01/2024</p>
      <p className="espacio">Fecha de finalizacion:   12/02/2024</p>

      <Link href='/inicioSesion/organizador/campeonatos/estadisticas'
        className="inscribirme ">Incribirme</Link>
    </div>
  </article>
  )
}
