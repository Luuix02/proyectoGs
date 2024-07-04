import React from 'react'
import "../../../src/styles/Planilla/main.css";
export const DatosIntegrantes = () => {
    const filas = [];
  for (let i = 1; i <= 10; i++) {
    filas.push(
      <tr key={i}>
        <td className="whill">{i}</td>
        <input type="text"></input>
        <td></td>
        <td></td>
      </tr>
    );
  }
  return (
    <div className="principal">
    <div className="containerPlanillaIns">
      <div className="mt-4 table-container tablaIns w-10/12">
        <div className='buscador-compañeros'>
      <h1>Busca tus compañeros</h1>
      <input type="search" placeholder='Busca por su numero de cedula' />
      <button className='botonPlanillaInscrip'>Buscar</button>
        </div>
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
  )
}
