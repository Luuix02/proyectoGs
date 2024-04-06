import React from 'react'
import '../../../src/styles/styleEstadisticas/styleContenedorIntegrante.css'
import Integrantes from './integrantes'


export default function ContendedorIntegrante() {
  return (
    <div className='contenedorIntegrantes'>
    <div className='conteInteUnitario'><Integrantes/></div>
    <div className='conteInteUnitario'><Integrantes/></div>
    <div className='conteInteUnitario'><Integrantes/></div>
    <div className='conteInteUnitario'><Integrantes/></div>
    <div className='conteInteUnitario'><Integrantes/></div>
  </div>
  )
}
