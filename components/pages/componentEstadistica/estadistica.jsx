import '@/styles/styleEstadisticas/styleEstadistica.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const path = '/organizador/campeonatos/estadisticas'
export default function Estadistica (){

  return (
    <><div>
      <div className='contenedorPartido ' > 
      <div className=' contenedorImagen'>
          <Image src="/images/imageEstadistica/MILONARIOS.png" width={40} height={40} className='imagen rounded-full' />
          
        <p className='nombreEquipo'>Millonarios</p>
        </div>
        <button className='faltas amarillas '><Link href={`${path}/editar`}>0</Link></button>
        <button className='faltas rojas '><Link href={`${path}/editar`}>0</Link></button>
        <div className='marcador'>
        <p>2</p>
        </div>
        <div className='estadoPartido'>
          <p className='estadoTitulo'>terminado</p>
        </div>
        
    </div>
    <div className='contenedorPartido contepar' >
      <div className=' contenedorImagen'>
          <Image src="/images/imageEstadistica/nacional.png" width={40} height={40} className='imagen rounded-full'/>

         
        <p className='nombreEquipo'>Nacional</p>
        </div>
        <button className='faltas amarillas '><Link href={`${path}/editar`}> 0</Link></button>
        <button className='faltas rojas '><Link href={`${path}/editar`}> 0</Link></button>
        <div className='marcador'>
          <p>2</p>
        </div>
        <div className='estadoPartido contenedorBoton'>
          <button className='botonDetalle'><Link href={`${path}/verDetalle`}><p className='tituloDetalle'>ver Detalle</p></Link></button>
        </div>
    </div>
    </div>
    </>
  )
}
