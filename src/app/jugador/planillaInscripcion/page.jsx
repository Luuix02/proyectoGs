import React from "react";
import "../../../styles/Planilla/main.css";
import RootLayout from "@/app/layout";

export default function Planilla() {
  const filas = [];
  for (let i = 1; i <= 10; i++) {
    filas.push(
      <tr key={i}>
        <td className="whill">{i}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <>
      <RootLayout backgroundImage={false}>
        <div className="container">
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
              <input className="mt-4-input" id="address" />
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
                />
              </div>

              <div className="flex-1">
                <label className="text-black" htmlFor="state">
                  ㅤ
                </label>
                <input
                  placeholder="Secundario"
                  className="m-4-input"
                  id="state"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 table-container tabla w-10/12">
            <table border="1">
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
          <div class="Button">
            <button> Inscribir </button>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
