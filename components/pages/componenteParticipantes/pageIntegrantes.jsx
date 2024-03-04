import "../../../src/styles/styleListadoIntegrantes/style.css";
import Image from "next/image";
export default function Integrantes() {
  return (
    <>
      <div class="contenedorIntegrantesEqCard">
        <div className="integrante">
          <div className="fotoPerfilIntegrante">
            <Image
              src="/images/imgFases/JUNIOR.jpg"
              width={45}
              height={45}
              className="fotoIntegrante"
            />
          </div>
          <div className="datosPersonalCapitan">
            <p>Leymar Zhubekgeng</p>
            <p>31476238898</p>
            <p>Capitán</p>
          </div>
        </div>
        <div className="integrante">
          <div className="fotoPerfilIntegrante">
            <Image
              src="/images/imgFases/JUNIOR.jpg"
              width={45}
              height={45}
              className="fotoIntegrante"
            />
          </div>
          <div className="nombresIntegrante">
            <p>Leymar Zhubekgeng</p>
          </div>
        </div>
      </div>
    </>
  );
}
