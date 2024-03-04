import Image from "next/image";
import "../../../src/styles/styleListadoIntegrantes/style.css";
export default function Integrante() {
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
          <div className="nombresIntegrante">
            <p>Leymar Zhubekgeng</p>
          </div>
        </div>
      </div>
    </>
  );
}
