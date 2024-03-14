import React from 'react'
import Link from 'next/link'


export default function CardCampeonato() {
  return (
    <article className="descripcion ">
              <div className="texto">
                  <h1 className="tituloTorneo">Torneo del Ascenso Dorado</h1>
                  <p className="text">El torneo del Ascenso Dorado
                      no es solo un torneo;es una
                      oportunidad para elevarse
                      por encima de las adversidades,
                      ¿Tienes lo necesario para
                      enfrentarte y emerger
                      como un campeón?
                      Inscríbete y prepárate</p>
              </div>

              <div className="">
                  <h1 className="progreso">Progreso</h1>
                  <section className="barraProgreso">
                      <h1 className="porciento">0%</h1>
                  </section>
                  <p className="">Fecha de inicio:   15/01/2024</p>
                  <p className="">Fecha de finalizacion:   12/02/2024</p>

                  <Link href='campeonatos/estadisticas/tarde'
                      className="editar">Editar</Link>
              </div>
          </article>
  )
}
