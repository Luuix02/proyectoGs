import '@/styles/styleEstadisticas/styleEstadistica.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const path = '/organizador/campeonatos/estadisticas/'
export const Estadistica = () => {
  return (
    <>
      <div className='contenedorPartido ' > 
      <div className=' contenedorImagen'>
          <Image src="/imageEstadistica/millonarios.png" width={60} height={100} className='imagen rounded-full' />
        <p className='nombreEquipo'>Millonarios</p>
        </div>
        <div className='faltas bg-yellow-500 '>
          <p>0</p>
        </div>
        <div className='faltas rojas bg-red-700 m-0'>
          <p>0</p>
        </div>
        <div className='marcador'>
        <p>2</p>
        </div>
        <div className='estadoPartido'>
          <p >terminado</p>
        </div>
        
    </div>
    <div className='contenedorPartido contepar' >
      <div className=' contenedorImagen'>
          <Image src="/image/imageEstadistica/nacional.png" width={60} height={100} className='imagen rounded-full'/>
        <p className='nombreEquipo'>Nacional</p>
        </div>
        <div className='faltas bg-yellow-500 '>
          <p>0</p>
        </div>
        <div className='faltas rojas bg-red-700 m-0'>
          <p>0</p>
        </div>
        <div className='marcador'>
          <p>2</p>
        </div>
        <div className='estadoPartido contenedorBoton'>
          <button className='botonDetalle'><Link href={`${path}/verDetalle`}>ver detalle</Link></button>
        </div>
    </div>
    </>
  )
}
