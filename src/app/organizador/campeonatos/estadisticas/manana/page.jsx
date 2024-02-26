import { PageEstadisticas } from '../../../../../../components/pages/estadistica/pageEstadistica'
import React from 'react'
import '@/styles/styleEstadisticas/styleManana.module.css'
import RootLayout from '@/app/layout'
import SideCampeonato from '@/Components/sideCampeonato'

export default function Manana() {
  return (
    <>
      <RootLayout>

        <SideCampeonato></SideCampeonato>
        <div >
          <h1 className='jornada'>Mañana</h1>
          <PageEstadisticas />
        </div>
      </RootLayout>
    </>
  )
}
