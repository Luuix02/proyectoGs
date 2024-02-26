import { PageEstadisticas } from '../../../../../../components/pages/estadistica/pageEstadistica'
import React from 'react'
import '@/styles/styleEstadisticas/styleManana.module.css'
import RootLayout from '@/app/layout'


export default function Manana() {
  return (
    <>
   

        <div >
          <h1 className='jornada'>Mañana</h1>
          <PageEstadisticas />
        </div>
   
    </>
  )
}
