"use client";
import { registroUser } from "@/lib/api";
import { useForm } from "react-hook-form";
import "../../../src/styles/styleRegistro/styleRegistro.css";
import { useState } from "react";

export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.finFicha = new Date(data.finFicha).toISOString();
    try {
      const response = await registroUser(data);
      alert("Usuario registrado correctamente");
      reset();
    } catch (error) {
      console.error("Error en el registro del usuario:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="contenedorPadreRegisro">
      <div className="contenedorFormularioReg">
        <h1 className="tituloPrincipal">Regístrate en GoSport</h1>
        <h2 className="tituloSecundario">
          Queremos saber un poco de ti, por favor llena el formulario completo
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="nombres"
                placeholder="Ingresa tus nombres completos"
                className="campoDato"
                {...register("nombres", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.nombres && <span>{errors.nombres.message}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="telefono"
                placeholder="Ingresa tu número de celular"
                className="campoDato"
                {...register("telefono", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.telefono && <span>{errors.telefono.message}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="identificacion"
                placeholder="Ingresa tus número de identificación"
                className="campoDato"
                {...register("identificacion", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.identificacion && (
                <span>{errors.identificacion.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="programa"
                placeholder="Ingresa el programa que estás cursando"
                className="campoDato"
                {...register("programa", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.programa && <span>{errors.programa.message}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="ficha"
                placeholder="Ingresa tu número de ficha"
                className="campoDato"
                {...register("ficha", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.ficha && <span>{errors.ficha.message}</span>}
            </div>
            <div className="form-group">
              <input
                type="date"
                id="finFicha"
                placeholder="Ingresa fecha de terminación del programa"
                className="campoDato"
                {...register("finFicha", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.finFicha && <span>{errors.finFicha.message}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="correo"
                placeholder="Ingresa tu correo electrónico"
                className="campoDato"
                {...register("correo", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.correo && <span>{errors.correo.message}</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                id="contrasena"
                placeholder="Crea tu contraseña"
                className="campoDato"
                {...register("contrasena", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.contrasena && <span>{errors.contrasena.message}</span>}
            </div>
          </div>
          <div className="form-group-btn">
            <button type="submit" className="Registrar">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
