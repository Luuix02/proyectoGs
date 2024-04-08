
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
  const [integranteRojo1, setIntegranteRojo1]= useState(false)
  const [integranteRojo2, setIntegranteRojo2]= useState(false)
  const [integranteGol1,setIntegranteGol1]= useState(false)
  const [integranteGol2,setIntegranteGol2]= useState(false)
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
  setIntegranteRojo1(false)
  setIntegranteRojo2(false)
  setIntegranteGol1(false)
    setIntegranteGol2(false)
 }else{
  (!integranteAmarillo2)?setIntegranteAmarillo2(true):setIntegranteAmarillo2(false)
  setIntegranteAmarillo1(false)
  setIntegranteRojo1(false)
  setIntegranteRojo2(false)
  setIntegranteGol1(false)
    setIntegranteGol2(false)
 }
}
const redContainer=(number)=>{
  if(number == 1){
    (!integranteRojo1)?setIntegranteRojo1(true):setIntegranteRojo1(false)
    setIntegranteRojo2(false)
    setIntegranteAmarillo1(false)
    setIntegranteAmarillo2(false)
    setIntegranteGol1(false)
    setIntegranteGol2(false)
   }else{
    (!integranteRojo2)?setIntegranteRojo2(true):setIntegranteRojo2(false)
    setIntegranteRojo1(false)
    setIntegranteAmarillo1(false)
    setIntegranteAmarillo2(false)
    setIntegranteGol1(false)
    setIntegranteGol2(false)
   }
  }
  const GolContainer=(number)=>{
    if(number == 1){
      (!integranteGol1)?setIntegranteGol1(true):setIntegranteGol1(false)
      setIntegranteGol2(false)
      setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
     }else{
      (!integranteGol2)?setIntegranteGol2(true):setIntegranteGol2(false)
      setIntegranteGol1(false)
      setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
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
      {integranteAmarillo1 && <ContendedorIntegrante />}
      <th><div className='falta roja' onClick={()=>redContainer(1)}> </div></th>
      {integranteRojo1 && <ContendedorIntegrante/>}
      <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} onClick={()=>GolContainer(1)} /></th>
      {integranteGol1 && <ContendedorIntegrante/>}
    </tr>
  </table>
</div>
</div>
<div className='contenedorEquipo'>
 <Image src="/images/imageEstadistica/MILONARIOS.png" width={300} height={300} className='imageEquipo' />
            <h1 className='nombreEquipo'>Millonarios</h1>
            <div className='contenedorFaltas'>
              
                <tr className='columnas'>
                  <th><div className='falta amarilla' onClick={()=>viewContainer(2)}></div></th>
                  {integranteAmarillo2 && <ContendedorIntegrante /> }
                  <th><div className='falta roja' onClick={()=>redContainer(2)}> </div></th>
                  {integranteRojo2 && <ContendedorIntegrante/>}
                  <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} onClick={()=>GolContainer(2)}/></th>
                  {integranteGol2 && <ContendedorIntegrante/>}
                </tr>



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
  );
}
