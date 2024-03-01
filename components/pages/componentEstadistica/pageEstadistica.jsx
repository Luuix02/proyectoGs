"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import  Estadistica  from './estadistica.jsx'

import '@/styles/styleEstadisticas/stylePageEstadistica.css'

<<<<<<< HEAD:components/pages/componentEstadistica/pageEstadistica.jsx
const path ='/organizador/campeonatos/estadisticas'
=======
const path ='@/src/'
>>>>>>> 5e0f7aabe35769678aa977e7828714cb05e870fb:components/pages/estadistica/pageEstadistica.jsx


export default function PageEstadisticas() {
  const router = useRouter()

  const handleChange = (event) => {
    const ruta = event.target.value;
    if (ruta) {
      router.push(ruta);
    }
  }
  return (
  
    <section className='contenedorEstadistica' >
    //   <select  className='btnJornada' onChange={handleChange} >Jornada
    //     <option value={`${path}/manana`} className='btnJornada' >Mañana</option>
    //     <option value={`${path}/tarde`} className='btnJornada' >Tarde</option>
    //     </select>
        <p className='tituloFase'>FASE 1</p>
     <div >
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />

     
      </div>
      <section>
        <div className='numeroFases'>
          FASE 2
        </div>
        <div className='numeroFases'>
          FASE 3
        </div>
        <div className='numeroFases'>
       FINAL
        </div>
      </section>

     </section>
   
  )
}
