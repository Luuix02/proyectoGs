import React from 'react'
import Image from 'next/image'
import '@/styles/styleEstadisticas/styleEditar.css'

export default function EditarPartido() {
  return (
    <>
    <section className='contenedorPrincipal'>
    <div className='contenedorEquipo'>

<Image src="/images/imageEstadistica/nacional.png" width={500} height={500} className='imageEquipo' />
<h1 className='nombreEquipo'>Nacional</h1>
<div className='contenedorFaltas'>
  <table>
    <tr className='columnas'>
      <th><div className='falta amarilla'> </div></th>
      <th><div className='falta roja'> </div></th>
      <th><Image src='/images/imageEstadistica/balon.png' width={55} height={55} /></th>
    </tr>
  </table>
</div>
</div>
<div className='contenedorEquipo'>
 <Image src="/images/imageEstadistica/MILONARIOS.png" width={500} height={500} className='imageEquipo' />
            <h1 className='nombreEquipo'>Millonarios</h1>
            <div className='contenedorFaltas'>
              <table>
                <tr className='columnas'>
                  <th><div className='falta amarilla'> </div></th>
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/images/imageEstadistica/balon.png' width={55} height={50} /></th>
                </tr>
</table>


            </div>
            </div>
    </section>
    </>
  )}
