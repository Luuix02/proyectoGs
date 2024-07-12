"use client";

import { useState } from "react";
import "../../../styles/styleCrearCampeonato/crearcampeonato.css";
import Calendarioo from "../../../../components/pages/calendar/Calendario";
import Boton from "../../../../components/pages/CrearCampeonato/Boton";
import Guardar from "./guardarCambios/page";
import RootLayout from "@/app/layout";
import Link from "next/link"
export default function CrearCampeonato() {
  const path = "/organizador"
  const [GuardarCambios, setGuardarCambios] = useState("crearCampeonato");
  const handleGuardar = () => {
    setGuardarCambios(
      GuardarCambios === "crearCampeonato" ? "guardar" : "crearCampeonato"
    );
  };

  const handleCerrarCancelar = () => {
    setGuardarCambios(!GuardarCambios)
  }
  return (
    <>
      <RootLayout backgroundImage={true}>
        <div class="contenedor2" >
          {GuardarCambios === "guardar" && <Guardar
            cerrarCancelar={handleCerrarCancelar}
          />}

          <div class="contendorPrincipalFormulario">
            <p class="textDeCrearCampeonato">Crea tu campeonato</p>
            <form class="Formulario">
              <div class="name_select_fechas">
                <div class="form-group">
                  <input type="text" placeholder="Nombre del campeonato" />
                  <label className="form-label">
                    Ingrese nombre del campeonato
                  </label>
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Descripcion del campeonato" />
                  <label className="form-label">
                    Descripción del campeonato
                  </label>
                </div>

                <div class="DireccionDeSelectores">
                  <div className="selectores">
                    <p>Disciplina</p>
                    <select>
                      <option selected disabled hidden value="">
                        Seleccione
                      </option>
                      <option>Fútbol</option>
                      <option>Fútbol sala</option>
                      <option>Microfútbol</option>
                    </select>
                  </div>
                  <div className="selectores">
                    <p>Categoria</p>
                    <select>
                      <option selected disabled hidden value="">
                        Seleccione
                      </option>
                      <option>Femenino</option>
                      <option>Masculino</option>
                      <option>Mixto</option>
                    </select>
                  </div>
                  <div className="selectores">
                    <p>Modalidad</p>
                    <select>
                      <option selected disabled hidden value="">
                        Seleccione
                      </option>
                      <option>Interfichas</option>
                      <option>Relámpago</option>
                    </select>
                  </div>
                </div>
                <div class="AlineacionDeFechas">
                  <fieldset class="Inscripcion">
                    <legend>Fecha de Inscripción</legend>

                    <Boton fechaText="Fecha de Apertura" />
                    <Boton fechaText="Fecha de Culminación" />
                  </fieldset>
                  <fieldset class="Inscripcion">
                    <legend>Fecha del Campeonato</legend>

                    <Boton fechaText="Fecha de Inicio" />
                    <Boton fechaText="Fecha de Finalización" />
                  </fieldset>
                </div>
                <div class="BotonVolver">
                  <Link href={`${path}/campeonatos`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="Volver"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l14 0" />
                      <path d="M5 12l6 6" />
                      <path d="M5 12l6 -6" />
                    </svg>
                  </Link>

                </div>
              </div>

              <div class="Dias_Cantidad">


                <Calendarioo />
                <div class="AlineacionDeMinYMax">
                  <fieldset class="cantidadJugador">
                    <legend>Cantidad de jugadores</legend>
                    <div class="min_max">
                      <label>Cantidad mínima</label>
                      <input
                        class="minMax"
                        type="number"
                        name="cantidad"
                        min="0"
                        max="20"
                        step="1"
                      />
                    </div>
                    <div class="min_max">
                      <label>Cantidad máxima</label>
                      <input
                        class="minMax"
                        type="number"
                        name="cantidad"
                        min="0"
                        max="20"
                        step="1"
                      />
                    </div>
                  </fieldset>
                </div>

                <div class="DivBotonGuardar">
                  <div
                    class="BotonGuadar "
                    value={setGuardarCambios}
                    onClick={handleGuardar}

                  >
                    Guardar
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
