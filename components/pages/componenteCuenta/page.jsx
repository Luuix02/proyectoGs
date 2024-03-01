import React from 'react'
import '../../../src/styles/stylePerfil/perfil.css'
import Image from 'next/image'
export default function Perfil() {
  return (
    <section className="section">
    <h1 className="text-2xl font-bold">Editar Cuenta</h1>
    <hr />
    <form action="" className="formulario">
        <div className='textPerfil'>
      <label htmlFor="">Foto de Perfil</label>
      <div className='imagenPerfil'>
        <Image  src={'/Images/iconosSide/fotos.png'} width={60} height={60}/>
        <p className='cambiar'>cambiar foto</p>
      </div>
        </div>
      <article className='contenedorFormulario'>
        <div className='textoFmo'>
        <label htmlFor="" className="pr-5">Nombre</label>
        <label htmlFor="" className="pr-3">Apellidos</label>
        <label htmlFor="" className="pr-4">Telefono</label>
        <label htmlFor="" className="pr-10">Email</label>
        <label htmlFor="">Password </label>
        </div>
        <div className='contenedorCajas'>
    <input type="text" 
    className='cajaTexto'/>
    <input type="text" 
    className='cajaTexto'/>
    <input type="text" 
    className='cajaTexto'/>
    <input type="text" 
    className='cajaTexto'/>
    <h1 className="text">Cambiar password</h1>
        </div>
      </article>
      <button className="guardar">Guardar cambios</button>
    </form>
  </section>
  )
}


