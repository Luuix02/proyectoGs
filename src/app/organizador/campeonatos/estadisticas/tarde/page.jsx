import PageEstadisticas from '../../../../../../components/pages/componentEstadistica/pageEstadistica'
import React from 'react'
import '@/styles/styleEstadisticas/styleTarde.css'
import SideBarCampeonato from '../../../../../../components/common/sidebarCampeonato/page'

export default function Tarde() {
  return (
    <>
       <div className='contenedorCompleto'>
       <SideBarCampeonato/>
        <div className='contenedorPartidos'>
          <h1 className='jornada'>Tarde</h1>
          <PageEstadisticas/>
        </div>
      
        </div>
    </>
  )
}

