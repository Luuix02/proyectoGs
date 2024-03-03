'use client'
import React from 'react'
import SideBarCampeonato from "../../../../../../components/common/sidebarCampeonato/page";
import "../../../../../styles/stylePageDerrotero/style.css";
import DerroteroFases from '../../../../../../components/pages/componenteFases/pageDerrotero';

export default function TardeDerr() {
    return (
      <>
      <SideBarCampeonato/>
      <article class = "bodyDerrotero">
          <div >
            <h1 className='jornada'>Tarde</h1>
          <DerroteroFases/>
          </div>
          </article>
      </>
    )
  }