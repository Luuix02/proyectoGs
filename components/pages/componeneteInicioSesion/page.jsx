"use client";
import Link from "next/link";
import "../../../src/styles/stylesIniciarSesion/styleIniciarSesion.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OlvidoContrasena from "@/app/auth/recuperarContrasena/page";
import RecuperarContraseña from "../ComponenteRecuperarContraseña/page";
import { loginUser } from "../../../src/lib/api";

export default function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState();
  const path = "/auth";
  const router = useRouter();

  const ruta = ("/organizador/campeonatos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginUser(correo, contrasena)  
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const [mostrarRecuperarContraseña, setMostrarRecuperarContraseña] =
    useState(false);

  const abrirRecuperarContraseña = () => {
    setMostrarRecuperarContraseña(true);
  };

  const cerrarRecuperarContraseña = () => {
    setMostrarRecuperarContraseña(false);
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  

  // const datosJugador = {
  //   email: "pepitoPerez@gmail.com",
  //   password: "1234",
  // };
  // const datosAdmin = {
  //   email: "pedrito@soy.sena.edu.co",
  //   password: "1234",
  // };

  // const validacionRutas = () => {
  //   if (email === datosJugador.email && password === datosJugador.password) {
  //     setRuta("/jugador/dashboard");
  //   } else if (email === datosAdmin.email && password === datosAdmin.password) {
  //     setRuta("/organizador/campeonatos");
  //   } else {
  //     console.log("Datos incorrectos");
  //   }
  // };

  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   validacionRutas();
  // };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/iniciarSesion/imgIn.png')",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="contenedorPrincipalInicioSe">
          <h1 className="tituloPrincipal">Inicia sesión ahora</h1>
          <br />
          <div className="contenedorDatos">
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="etiquetaDato correoFor">
                Correo electrónico
              </label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="ej: pepito@gmail.com"
                required
                className="campoDato"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
              />
              <br />

              <label htmlFor="password" className="etiquetaDato contraseñaFor">
                Contraseña
              </label>
              <input
                className="campoContraseña"
                type="contrasena"
                id="contrasena"
                name="contrasena"
                placeholder="*********"
                required
                onChange={(e) => setContrasena(e.target.value)}
                value={contrasena}
              />

              <br />
              <button
                className="botonInicioSesion"
                type="submit"
                onClick={() => router.push(ruta)}
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="enlacesAdicionales">
              <span
                className="olvidarContraseña"
                onClick={abrirRecuperarContraseña}
              >
                ¿Olvidaste tu contraseña?
              </span>

              <Link className="registrateIniciar" href={`${path}/registro`}>
                ¿No tienes cuenta?
              </Link>
            </div>
          </div>
        </div>
        {mostrarRecuperarContraseña && (
          <RecuperarContraseña onClose={cerrarRecuperarContraseña} />
        )}
      </div>
    </>
  );
}
