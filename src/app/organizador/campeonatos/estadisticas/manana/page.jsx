
'use client'
import React from 'react'
import '@/styles/styleEstadisticas/styleManana.css'
import SideBarCampeonato from '../../../../../../components/common/sidebarCampeonato/page'
import PageEstadisticas from '../../../../../../components/pages/componentEstadistica/pageEstadistica.jsx'





export default function Manana() {
  return (
    <>
    <div className='contenedorDiv'>
    <SideBarCampeonato/>
        <div className='contenedorCompleto'>
          <h1 className='jornada'>Mañana</h1>
         <PageEstadisticas/>
        </div>
        </div>
    </>
  )
}
