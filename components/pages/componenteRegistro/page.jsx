'use client'
import React, { useState } from "react";
import Link from "next/link";
import "../../../src/styles/styleRegistro/styleRegistro.css";
import RootLayout from "@/app/layout";
import { useRouter } from "next/router";
import { registroUser } from "@/lib/api";

export default function Registro() {
 
  const path = "/auth";

  const [datosRegistro, setDatosRegistro] = useState({
    correo: "",
    contrasena: "",
    nombres: "",
    telefono: "",
    identificacion: "",
    programa: "",
    fichaFin: "",
    ficha: "",
    confirmarContrasena: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registroUser(datosRegistro);
      console.log("usario registrado", response);
    } catch (error) {
      console.log("Errro al registrar usuario", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosRegistro((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };


return (
  <>
    
      <body className="FONDO  ">
        <div className="mayor class">
          <h1 className="titulo">Regístrate en GoSport</h1>
          <br />
          <div className="divdatos2">
            <div className="divdatos">
              <form onSubmit={handleSubmit} action="datos">
                <label htmlFor="nombres">Nombres</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={datosRegistro.nombres}
                  onChange={handleChange}
                  placeholder="ejemplo juan perez"
                  required
                />


                <label htmlFor="telefono">Teléfono</label>
                <input
                  className="la"
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={datosRegistro.telefono}
                  onChange={handleChange}
                  placeholder="ej:3163221523"
                  required
                />



{/* agregar los campos de identificacion, fin fecha y programa*/}


                <label htmlFor="ficha">N° Ficha</label>
                <input
                  className="la"
                  type="  tel"
                  id="ficha"
                  name="ficha"
                  value={datosRegistro.ficha}
                  onChange={handleChange}
                  placeholder="ej:2669739"
                  required
                />

                <br />
                <label htmlFor="correo">Email</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={datosRegistro.correo}
                  onChange={handleChange}
                  placeholder="ej:pepito@gmail.com"
                  required
                />

                <label htmlFor="contrasena">Contraseña</label>
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  value={datosRegistro.contrasena}
                  onChange={handleChange}
                  placeholder="***********"
                  required
                />

                <label htmlFor="confirmar-password">Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmarContrasena"
                  name="confirmarContrasena"
                  value={datosRegistro.confirmarContrasena}
                  onChange={handleChange}
                  placeholder="***********"
                  required
                />

                
                  <button type="submit" className="Botonregistros">Registrarse</button>
               

                <p className="cuenta">
                  ¿Ya tienes cuenta?{" "}
                  <Link
                    href={`${path}/inicioSesion`}
                    className="parairaotrapagina"
                  >
                    Inicia Sesión
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </body>
   
  </>
);
};
