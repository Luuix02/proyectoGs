import React from 'react'
import Image from 'next/image'
import '@/styles/styleEstadisticas/styleDetalle.css'

export default function Detalle() {
  return (
      <>
     
        <section className='contenedorDetalle'>
          <div className='contenedorEquipo'>

            <Image src="/images/imageEstadistica/nacional.png" width={300} height={300} className='imageEquipo' />
            <h1 className='nombreEquipo'>Nacional</h1>
            <div className='contenedorFaltas'>
              <table>
                <tr className='columnas'>
                  <th><div className='falta amarilla'> </div></th>
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} /></th>
                </tr>
              </table>
            </div>
          </div>
          <div className='marcador'>
            <h1 className='numeroMarcador'>2</h1>
            <h3 className='numeroMarcador'>-</h3>
            <h1 className='numeroMarcador'>1</h1>
          </div>
          <div className='contenedorEquipo'>

            <Image src="/images/imageEstadistica/MILONARIOS.png" width={300} height={300} className='imageEquipo' />
            <h1 className='nombreEquipo'>Millonarios</h1>
            <div className='contenedorFaltas'>
              <table>
                <tr className='columnas'>
                  <th><div className='falta amarilla'> </div></th>
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/images/imageEstadistica/balon.png' width={30} height={30} /></th>
                </tr>
</table>

            </div>
          </div>

       </section>
   
    </>

  )
}
