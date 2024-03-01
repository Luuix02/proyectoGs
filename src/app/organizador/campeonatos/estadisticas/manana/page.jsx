<<<<<<< HEAD
'use client'
import React from 'react'
import '@/styles/styleEstadisticas/styleManana.css'
import SideBarCampeonato from '../../../../../../components/common/sidebarCampeonato/page'
import PageEstadisticas from '../../../../../../components/pages/componentEstadistica/pageEstadistica.jsx'
=======
import  PageEstadisticas  from '../../../../../../components/pages/estadistica/pageEstadistica'
import React from 'react'
import '@/styles/styleEstadisticas/styleManana.module.css'
>>>>>>> 5e0f7aabe35769678aa977e7828714cb05e870fb



export default function Manana() {
  return (
    <>
    <SideBarCampeonato/>
        <div >
          <h1 className='jornada'>Mañana</h1>
         <PageEstadisticas/>
        </div>
   
    </>
  )
}
