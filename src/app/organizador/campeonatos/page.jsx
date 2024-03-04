import React from 'react'
import SideBarPrincipal from '../../../../components/common/sidebar/page'
import Campeonatos from '../../../../components/pages/componenteCampeonatos/page'
import RootLayout from '@/app/layout'

export default function CampeonatosAdmin() {
  return (
      <>
          <RootLayout>
          <SideBarPrincipal />
          <Campeonatos/>
          </RootLayout>
      </>
  )
}
