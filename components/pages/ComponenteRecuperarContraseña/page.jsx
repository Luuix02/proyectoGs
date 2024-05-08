import React from "react";
import "../../../src/styles/styleRecuperarContraseña/styleRecuperarContraseña.css";
export default function RecuperarContraseña({onClose}) {
  return (
    <>
       <div className="modalBackground">
      <div className="modalContenido">
        <span className="cerrarModal" onClick={onClose}>X</span>
        <div className="contenedorPrincipalRecuperarClave">
          <div className="inputsLlenarFor">
            <form action="recuperarContraseña" className="formularioRecuperarClave">
              <label className="emailTitle" htmlFor="email">Email</label>
              <input className="llenarEmail"
                type="email"
                id="email"
                name="email"
                placeholder="ej:pepito@gmail.com"
                required
              />
<br />
              <label className="contraseñaTitle" htmlFor="password">Contraseña</label>
              <input className="llenarContraseña"
                type="password"
                id="password"
                name="password"
                placeholder="***********"
                required
              />
            </form>

            <div className="botonesRecuperarClave">
              <button className="botonCancelar" onClick={onClose}>Cancelar</button>
              <button className="botonEnviar">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    </>
  )
}