import Image from 'next/image'
import Link from 'next/link'
import '../../../src/styles/styleDashJugador/styleCam.css'
import CardCampeonato from './cardCampeonato'
import Carrusel from './carrusel'
export default function CampeonatosDisponibles() {
  return (

    <>
    <Carrusel/>
    <section className='contenedorBienvenida'>
        <h1 className='textoBienvenida' >
        “Estimado [nombre del jugador], bienvenido al área de inscripciones. 🏆 
        Aquí podrás elegir los campeonatos en los que deseas participar. 
        No olvides que cada torneo es una oportunidad para demostrar 
        tu habilidad en la cancha. ¡Éxito!”
        </h1>
        <h1 className='tituloCam'>Campeonatos Disponibles</h1>
       <article className='contenedorCards'>
        <CardCampeonato/>
        
        </article>
      </section>
    </>
  )
}
