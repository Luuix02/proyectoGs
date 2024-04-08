"use client";
import Link from "next/link";
import "../../../src/styles/stylesIniciarSesion/styleIniciarSesion.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import OlvidoContrasena from "@/app/auth/recuperarContrasena/page";

export default function InicioSesion() {
  const path = "/auth";
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ruta, setRuta] = useState("");

  const datosJugador = {
    email: "pepitoPerez@gmail.com",
    password: "1234",
  };
  const datosAdmin = {
    email: "pedrito@soy.sena.edu.co",
    password: "1234",
  };

  const validacionRutas = () => {
    if (email === datosJugador.email && password === datosJugador.password) {
      setRuta("/jugador/dashboard");
    } else if (email === datosAdmin.email && password === datosAdmin.password) {
      setRuta("/organizador/campeonatos");
    } else {
      console.log("Datos incorrectos");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    validacionRutas();
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/fotos-premium/objeto-pelota-futbol-fondo-abstracto_262243-569.jpg)",
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
          <form action="datos" onSubmit={handlerSubmit}>
            <label htmlFor="email" className="etiquetaDato correoFor">
              Correo electrónico
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="ej: pepito@gmail.com"
              required
              className="campoDato"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />

            <label htmlFor="password" className="etiquetaDato contraseñaFor">
              Contraseña
            </label>
            <input
              className="campoContraseña"
              type="password"
              id="password"
              name="password"
              placeholder="*********"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
            <Link
              className="olvidoContraseña"
              href= "#" onClick={openModal}
            >
              ¿Olvidaste tu contraseña?

            </Link>
            {/* <OlvidoContrasena></OlvidoContrasena> */}

            <Link className="registrateIniciar" href={`${path}/registro`}>
              ¿No tienes cuenta?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
