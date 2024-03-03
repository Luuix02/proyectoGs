import "../../../src/styles/stylesFases.css/styles.css";
import Image from "next/image";
export default function Ganador() {
  return (
    <>
      <div class="ContenedorEqGanador">
        <h1 class="Ganador">Ganador</h1>
        <div class="contenedorEquiposDerr">
          <div class="seccionVersusEq">
            <div class="contenidoVersus">
              <div class="imagenEscudo">
                <Image
                  src="/images/imgFases/JUNIOR.jpg"
                  width={45}
                  height={45}
                  class="escudo"
                />
              </div>
              <div class="nombre">Equipo 7</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
