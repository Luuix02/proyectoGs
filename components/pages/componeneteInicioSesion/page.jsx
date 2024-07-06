"use client";

import React, { useState } from "react";
import "../../../src/styles/stylesIniciarSesion/styleIniciarSesion.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../src/lib/api";
import { Check } from "react-feather";
import Cookies from "js-cookie";

// const LoginSchema = Yup.object().shape({
//   correo: Yup.string().email("Email inválido").required("Requerido"),
//   contrasena: Yup.string().required("Requerido"),
// });

const InicioSesion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setError,
    clearErrors,
  } = useForm();
  // resolver: yupResolver(LoginSchema),
  // mode: "onChange",

  const [isValid, setIsvalid] = useState({ correo: false, contrasena: false });
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data.correo, data.contrasena);
      setIsvalid({ correo: true, contrasena: true });
      Cookies.set("token", response.token, { path: "/" });

      const userRole = response.user.rol;
      if (userRole === "jugador") {
        router.push("/jugador/dashboard");
      } else if (userRole === "organizador") {
        router.push("/organizador/campeonatos");
      } else {
        throw new Error("Rol desconocido");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Credenciales inválidas. Verifica tus datos e intenta de nuevo.");
      } else {
        alert("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
      }
    }
  };

  return (
    <div className="contenedorPadreLogin">
      <div className="contenedorSecunLogin">
        <h1 className="tituloPrincipal">Inicia sesión ahora</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="correo" className="etiquetaDato correoFor">
            Correo electrónico
          </label>

          <div className="contIconoLog">
            <input
              {...register("correo")}
              type="text"
              id="correo"
              placeholder="ej: pepito@gmail.com"
              className="campoDato"
            />
            {errors.correo && <p>{errors.correo.message}</p>}
            {touchedFields.correo && isValid.correo && !errors.correo && (
              <Check className="iconLogin" />
            )}
          </div>

          <label htmlFor="contrasena" className="etiquetaDato contraseñaFor">
            Contraseña
          </label>
          <div className="contIconoLog">
            <input
              {...register("contrasena")}
              type="password"
              id="contrasena"
              placeholder="*********"
              className="campoContraseña"
            />
            {errors.contrasena && <p>{errors.contrasena.message}</p>}
            {touchedFields.contrasena &&
              isValid.contrasena &&
              !errors.contrasena && <Check className="iconLogin" />}
          </div>

          <button type="submit" className="botonInicioSesion">
            Iniciar Sesión
          </button>
        </form>

        <div className="enlacesAdicionales">
          <a className="registrateIniciar" href="/registro">
            ¿No tienes cuenta?
          </a>
          <span className="olvidarContraseña">¿Olvidaste tu contraseña?</span>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
