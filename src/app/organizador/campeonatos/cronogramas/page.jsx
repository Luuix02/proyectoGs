"use client"
import React from 'react'
import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import "../../../../styles/styleCronograma/Cronograma.css"
import Tarde from './tarde/page'
import Manana from './manana/page'
import { useState } from 'react'

export default function Cronograma() {
  const [selectOption , setSelectOption] = useState ('manana')

  const handleChange = (event) => {
    setSelectOption(event.target.value)
        }
  return (
    <RootLayout>

      <SideCampeonato />
      <div class="ContainerPrincipal">
        <div class="contenedorCronograma">
          <select value={selectOption} class="selectorJornada" onChange={handleChange}>
            <option value={"manana"} >Jornada Mañana
            </option>
            <option value={"tarde"}>Jornada Tarde</option>
          </select>
         
        </div >
        {selectOption === 'manana' && <Manana />}
          {selectOption === 'tarde' && <Tarde />}
      
        </div>

    </RootLayout>
  )
}


