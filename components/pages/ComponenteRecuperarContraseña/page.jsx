import React from "react";
import "../../../src/styles/styleRecuperarContraseña/styleRecuperarContraseña.css";
export default function RecuperarContraseña() {
  return (
    <>
      <div className="html_recuperarContraseña">
        <div className="contenedorRecuperarContraseña">
          <h1 className="tituloRecuperarContraseña">Recuperar Contraseña</h1>
          <br /> <br />
          <div className="contenedorFormulario">
            <form onSubmit={handleSubmit}>
              <div className="campoConEtiqueta">
                <label htmlFor="correo" className="etiquetaDato">
                  Ingresa tu Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="ej: pepito@gmail.com"
                  required
                  className="campoDato"
                />
              </div>

              <div className="botonesRecuperarContraseña">
                <button type="button" className="botoncancelar">
                  Cancelar
                </button>
                <button type="submit" className="botonEnviar">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
