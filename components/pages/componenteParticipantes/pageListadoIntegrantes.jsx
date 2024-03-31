"use client";
import "../../../src/styles/styleListadoIntegrantesTabla/style.css";
import "../../../src/styles/styleModalntegrantes/style.css";
export default function ListadoIntegrantesTabla({ integrantes, onClose }) {
  return (
    <div className="divTablaListadoIntegrantes">
      <h1>Listado de integrantes</h1>
      <table className="tablaInicio">
        <thead>
          <tr className="tablaTrIntegrantes">
            <th className="tablaThIntegrantes">Foto</th>
            <th className="tablaTrIntegrantes">Nombre</th>
            <th className="tablaTrIntegrantes">Número de Camiseta</th>
          </tr>
        </thead>
        <tbody>
          {integrantes &&
            integrantes.map((player) => (
              <tr className="tablaTrIntegrantes" key={player.id}>
                <td className="tablaTdIntegrantes">
                  <img src={player.image_path} alt={player.name} />
                </td>
                <td className="tablaTdIntegrantes">{player.name}</td>
                <td className="tablaTdIntegrantes">{player.type_id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
