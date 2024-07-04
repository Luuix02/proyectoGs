"use client";
import Link from "next/link";
import "../../../src/styles/stylesIniciarSesion/styleIniciarSesion.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OlvidoContrasena from "@/app/auth/recuperarContrasena/page";
import RecuperarContraseña from "../ComponenteRecuperarContraseña/page";
import { loginUser } from "../../../src/lib/api";
import Cookies from "js-cookie";

export default function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const [mostrarRecuperarContraseña, setMostrarRecuperarContraseña] =
    useState(false);
  const router = useRouter();
  // const ruta = "/organizador/campeonatos";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await loginUser(correo, contrasena);
      Cookies.set("token", data.token, { path: "/" });
      //  console.log(Cookies.get('jwt'));
      // localStorage.setItem("token", data.token);

      const userRole = data.user.rol;
      if (userRole === "jugador") {
        router.push("/jugador/dashboard");
      } else if (userRole === "organizador") {
        router.push("/organizador/campeonatos");
      } else {
        setError("Rol desconocido");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setError(
          "Las credenciales proporcionadas no son válidas. Por favor, verifica tus datos e intenta de nuevo."
        );
      } else {
        setError(
          "Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde."
        );
      }
    }
  };

  const abrirRecuperarContraseña = () => setMostrarRecuperarContraseña(true);
  const cerrarRecuperarContraseña = () => setMostrarRecuperarContraseña(false);

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
              <label htmlFor="correo" className="etiquetaDato correoFor">
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
              <label
                htmlFor="contrasena"
                className="etiquetaDato contraseñaFor"
              >
                Contraseña
              </label>
              <input
                className="campoContraseña"
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="*********"
                required
                onChange={(e) => setContrasena(e.target.value)}
                value={contrasena}
              />
              <br />
              <button className="botonInicioSesion" type="submit">
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
              <Link className="registrateIniciar" href="/registro">
                ¿No tienes cuenta?
              </Link>
            </div>
          </div>
          {mostrarRecuperarContraseña && (
            <RecuperarContraseña onClose={cerrarRecuperarContraseña} />
          )}
        </div>
      </div>
    </>
  );
}
