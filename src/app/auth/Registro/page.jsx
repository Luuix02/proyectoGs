import React from 'react';
import Link from 'next/link';
import '../../../styles/styleRegistro/styleRegistro.css';

export default function Registro() {
  const path = '/auth';

  return (
    <body className='dar'>


      <div className='mayor class'>
        <h1 className='titulo'>Regístrate en GoSport</h1>
        <br />

        <div className='divdatos'>
          <form action="datos">
            <label htmlFor="nombre">Nombres</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />

            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos" required />

            <label htmlFor="telefono">Teléfono</label>
            <input className='la' type="tel" id="telefono" name="telefono" placeholder="ej:3163221523" required />

            <label htmlFor="genero">Género</label>
            <select name="genero" id="genero" defaultValue="selecciona">
              <option value="selecciona" disabled>Selecciona</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            </select>

            <label htmlFor="ficha">N° Ficha</label>
            <input className='la' type="  tel" id="ficha" name="ficha" placeholder="ej:2669739" required />


            <br />
            <label  htmlFor="email">Email</label>
            <input  type="email" id="email" name="email" placeholder="ej:pepito@gmail.com" required />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="***********" required />

            <label htmlFor="confirmar-password">Confirmar contraseña</label>
            <input type="password" id="confirmar-password" name="confirmar-password" placeholder="***********" required />

            <Link href={`${path}/inicioSesion`}>
              <button className='Botonregistros'>Registrarse</button>
            </Link>

            <p className='cuenta'>¿Ya tienes cuenta? <Link href={`${path}/inicioSesion`} className='parairaotrapagina'>Inicia Sesión</Link></p>
          </form>
        </div>
      </div>
    </body>
  );
}
