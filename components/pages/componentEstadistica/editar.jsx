'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/styles/styleEstadisticas/styleEditar.css'
import Integrante from '../componenteParticipantes/pageIntegrante'


export default function EditarPartido() {
  const[seconds, setSeconds]=useState(0)
  useEffect(()=>{
  
  const previSeconds=setInterval(()=>{
setSeconds(seconds+1)
  },1000)
  return ()=> clearInterval(previSeconds)
})
  return(
    <>
    <section className='contenedorPrincipal'>
      <div className='cronometro'>
        <div className='numero'>{seconds}</div>
        <button className='botones'>inicio</button>
        <button className='botones'>fin</button>
      </div>
    <div className='contenedorEquipo'>

<Image src="/images/imageEstadistica/nacional.png" width={300} height={300} className='imageEquipo' />
<h1 className='nombreEquipo'>Nacional</h1>
<div className='contenedorFaltas'>
  <table>
    <tr className='columnas'>
      <th><div className='falta amarilla'> </div></th>
      <th><div className='falta roja'> </div></th>
      <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} /></th>
    </tr>
  </table>
</div>
</div>
<div className='contenedorEquipo'>
 <Image src="/images/imageEstadistica/MILONARIOS.png" width={300} height={300} className='imageEquipo' />
            <h1 className='nombreEquipo'>Millonarios</h1>
            <div className='contenedorFaltas'>
              <table>
                <tr className='columnas'>
                  <th><div className='falta amarilla'> </div></th>
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} /></th>
                </tr>
</table>

<Integrante/>

            </div>
            </div>
    </section>
    </>
  )}
