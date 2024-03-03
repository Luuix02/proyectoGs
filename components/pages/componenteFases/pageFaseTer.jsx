import Link from "next/link";
import "../../../src/styles/stylesFases.css/styles.css";
import Image from "next/image";
export default function FaseTercera() {
  const path = '/organizador/campeonatos'
  return (
    <>
      <div class="ContenedorEquiposTer">
        <div class="Fase1">
          <p>25 Febrero 2024</p>
          <p>2:00 pm</p>
          <Link href={`${path}/cronogramas`} >
          <div className="iconEditar">
              <Image src="/images/imgFases/edit.png" width={17} height={17} />
            </div>
          </Link>
        </div>
        <div class="Equipos">
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
                <div class="nombre">Equipo 4</div>
              </div>
            </div>
            <div class="linea"></div>
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
      </div>
    </>
  );
}
