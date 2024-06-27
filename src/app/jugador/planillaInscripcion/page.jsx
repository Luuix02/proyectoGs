'use client'
import React, { useState } from "react";
import "../../../styles/Planilla/main.css";
import RootLayout from "@/app/layout";
import { useForm } from "react-hook-form";


export default function Planilla() {
  const [image, setImage]=useState()
  const [estadoImg, setEstadoImg] = useState(false)
  const [searchJugador, setSearchJugador]=useState()
  const {
    register, 
         handleSubmit,
         formState:{errors}} =useForm()
  const filas = [];
  for (let i = 1; i <= 10; i++) {
    filas.push(
      <tr key={i}>
        <td className="whill"
        onChange={e=> setSearchJugador(e.target.value)}>{i}</td>
        <input type="text"></input>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <>
      <RootLayout backgroundImage={true}>
        <div className="principal">
          <div className="containerPlanillaIns">
            <div className="PlanHl">
              <div className="Nosee">
                <div className="Tainer">
                  <h2 className="tainer-h2">Planilla Inscripcion Equipo</h2>

                  <div className="mt-4">
                    <label className="mt-4-label" htmlFor="name">
                      Equipo
                    </label>
                    <input className="mt-4-input " type="text" />
                  </div>

                  <div className="mt-4">
                    <label className="mt-4-label" htmlFor="address">
                      Capitan
                    </label>
                    <input className="mt-4-input" id="address" {...register('capitan')}/>
                  </div>

                  <div className="tunder">
                    <div className="flex-1">
                      <label className="text-black" htmlFor="city">
                        Contacto
                      </label>
                      <input
                        placeholder="Principal"
                        className="m-4-input"
                        id="city"
                        type="text"
                        {...register('contactoUno')}
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-black" htmlFor="state">

                      </label>
                      <input
                        placeholder="Secundario"
                        className="m-4-input"
                        id="state"
                        type="text"
                        {...register('contactoDos')}
                      />
                    </div>
                    <div class="custom-select">
                      <label for="options">Jornada</label>
                      <select id="options" name="options" >
                        <option value="option1">Mañana</option>
                        <option value="option2">Tarde</option>
                        {}
                      </select>
                    </div>
                    {estadoImg ? 
                    <div class="card">
                    <img src={image} alt="" />
                    </div> :
                    <input type="file" className="inpuntImg" />
                  }
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 table-container tablaIns w-10/12">
              <table className="tablaPlanillaIns">
                <thead>
                  <tr>
                    <th className="whill th1">N°</th>
                    <th className="whill">Nombre </th>
                    <th className="whill">Ficha </th>
                    <th className="whill th3">N° Dorsal </th>
                  </tr>
                </thead>
                <tbody>{filas}</tbody>
              </table>
            </div>
            <div class="ButtonPlanillaIns">
              <button className="botonPlanillaInscrip"> Inscribir </button>
            </div>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
