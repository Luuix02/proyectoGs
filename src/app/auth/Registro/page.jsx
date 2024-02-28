import React from 'react'
import Link from 'next/link'
import '../../../styles/styleRegistro/styleRegistro.css'

export default function Registro() {
  return (
    <div className='divpadre'>
      <h1 className='titulo'>Registrate en GoSport</h1>
      <br />
        
      <div className='divdatos'>
        <form action="datos">
          <label htmlFor="nombre">Nombres :</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />
          
          <label htmlFor="apellidos">Apellidos :</label>
          <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos" required />

          <label htmlFor="telefono">Telefono :</label>
          <input className='la' type="tel" id="telefono" name="telefono" placeholder="ej:3163221523" required />

          <label className='Label' htmlFor="genero">Genero :</label>
          <select className='Select' name="genero" id="genero">
            <option value="selecciona" disabled defaultValue>selecciona</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
          </select>
          
          <br /> 
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="ej:pepito@gmail.com" required />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="*****" required />

          <label htmlFor="confirmar-password">Confirmar Contraseña</label>
          <input type="password" id="confirmar-password" name="confirmar-password" placeholder="*****" required />

          <div className='divre'>
            <button   type="submit" className='Botonregistros'>Registrarse</button>

            
          </div>
          <h1 className='cuenta'>¿Ya tienes cuenta? <Link href="/inicioSesion">Inicia sesion</Link>
          </h1> 

          
  
          

         
        </form>
      </div>
    </div>
  );
}