'use client'
import Link from "next/link";
import "../../../src/styles/styleDashJugador/styleCard.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export default function CardCampeonato() {
  const [campeonatos, setCampenatos] = useState()
  const token = Cookies.get('token')
  useEffect(()=>{
    const obtenerCampeonatos =async()=>{
    const response = await axios.get('http://localhost:3001/campeonato')
    console.log(response)
    setCampenatos(response.data)
    }
    obtenerCampeonatos()
  },[])

  console.log(campeonatos)
  return (
    <>
        {campeonatos && campeonatos.map((campeonato)=>(
    <article className="cardCampeonato" key={campeonato._id}>

      <div className="column">
        <h1 className="font-bold">{campeonato.nombreCampeonato}</h1>
        <p className="text-xl">
         {campeonato.descripcion}
         </p>
      </div>

      <div className="column column2">
        <h1 className="">Categoria {campeonato.nombreDiciplinas}</h1>
        <p className="">Fecha de inicio {campeonato.fechaIniciio}</p>
        <p className="espacio">Fecha de finalizacion {campeonato.fechaFin}</p>

        <Link href={`/jugador/dashboard/${campeonato._id}`} className="inscribirme ">
          Inscribirme
        </Link>
      </div>
    </article>
        ))}
    </>

  );
}
