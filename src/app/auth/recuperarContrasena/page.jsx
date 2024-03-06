import React from 'react';
import Link from 'next/link';
import "../../../styles/styleRecuperarContraseña/styleRecuperarContraseña.css";

export default function OlvidoContrasena() {
  const path = '/auth';
  return (
    <div className='contenedorRecuperarContraseña'>
      <h1 className='tituloRecuperarContraseña'>Recuperar Contraseña</h1>
      <br /> <br />

      <div className='contenedorFormulario'>
        <form>
          <div className='campoConEtiqueta'>
            <label htmlFor="correo" className='etiquetaDato'>Ingresa tu Correo Electrónico</label>
            <input  type="email" id="correo" name="correo" placeholder="ej: pepito@gmail.com" required className='campoDato' />
          </div>

          <div className='botonesRecuperarContraseña'>
            <button className='botoncancelar'>Cancelar</button>
            <Link href={`${path}/inicioSesion`}>
              <button className='botonEnviar'>Enviar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
