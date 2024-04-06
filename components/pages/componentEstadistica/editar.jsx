'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/styles/styleEstadisticas/styleEditar.css'
import ContendedorIntegrante from './contendedorIntegrante'


export default function EditarPartido() {
  const[seconds, setSeconds]=useState(0)
  const [running, setRunning]=useState(false)
  const [integranteAmarillo1, setIntegranteAmarillo1]= useState(false)
  const [integranteAmarillo2, setIntegranteAmarillo2]= useState(false)
  
  useEffect(()=>{

  const previSeconds=setInterval(()=>{
    if(running){
setSeconds(seconds+1)}
  },1000)
  return ()=> clearInterval(previSeconds)
})
const start = () => {
  setRunning(true);
};

const stop = () => {
  setRunning(false);
}
const reset=()=>{
  setRunning(false)
  setSeconds(0)
}
const viewContainer=(number)=>{
 if(number == 1){
  (!integranteAmarillo1)?setIntegranteAmarillo1(true):setIntegranteAmarillo1(false)
  setIntegranteAmarillo2(false)
 }else{
  (!integranteAmarillo2)?setIntegranteAmarillo2(true):setIntegranteAmarillo2(false)
  setIntegranteAmarillo1(false)
 }
}
  return(
    <>
    <section className='contenedorPrincipal'>
      
      <div className='cronometro'>
        <div className='numero'>{seconds}</div>
      </div>
      <div className='divContenedor'>
    <div className='contenedorEquipo'>

<Image src="/images/imageEstadistica/nacional.png" width={300} height={300} className='imageEquipo' />
<h1 className='nombreEquipo'>Nacional</h1>
<div className='contenedorFaltas'>
  <table>
    <tr className='columnas'>
      <th><div className='falta amarilla' onClick={()=>viewContainer(1)}></div></th>
      {integranteAmarillo1 && <ContendedorIntegrante/>}
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
                  <th><div className='falta amarilla' onClick={()=>viewContainer(2)}></div></th>
                  {integranteAmarillo2 && <ContendedorIntegrante/>}
             
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} /></th>
                </tr>
</table>


            </div>
            </div>
            </div>
            <div className='botonesCronometro'>
            <button className='botones' onClick={start}>Iniciar partido</button>
        <button className='botones' onClick={stop}>Pausar</button>
        <button className='botones' onClick={reset }>Final del partido</button>
        </div>
    </section>
    </>
  )}
