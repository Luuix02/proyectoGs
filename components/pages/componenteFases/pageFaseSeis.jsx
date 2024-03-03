import Link from "next/link";
import "../../../src/styles/stylesFases.css/styles.css";
import Image from "next/image";
export default function FaseSexta() {
  const path = '/organizador/campeonatos'
  return (
    <>
      <div class="ContenedorEquiposSeis">
        <div class="Fase1">
          <h1>Fase1</h1>
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
                <div class="nombre">Equipo 9</div>
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
                <div class="nombre">Equipo 10</div>
              </div>
            </div>
          </div>

          <div class="Fase1">
            <p>25 Febrero 2024</p>
            <p>2:00 pm</p>
          </div>
          <Link href={`${path}/cronogramas`} >
          <div className="iconEditar1">
              <Image src="/images/imgFases/edit.png" width={17} height={17} />
            </div>
          </Link>
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
                <div class="nombre">Equipo 11</div>
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
                <div class="nombre">Equipo 12</div>
              </div>
            </div>
          </div>

          <div class="Fase1">
            <p>25 Febrero 2024</p>
            <p>2:00 pm</p>
          </div>
          <Link href={`${path}/cronogramas`} >
          <div className="iconEditar1">
              <Image src="/images/imgFases/edit.png" width={17} height={17} />
            </div>
          </Link>
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
                <div class="nombre">Equipo 13</div>
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
                <div class="nombre">Equipo 14</div>
              </div>
            </div>
          </div>

          <div class="Fase1">
            <p>25 Febrero 2024</p>
            <p>2:00 pm</p>
          </div>
          <Link href={`${path}/cronogramas`} >
          <div className="iconEditar1">
              <Image src="/images/imgFases/edit.png" width={17} height={17} />
            </div>
          </Link>
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
                <div class="nombre">Equipo 15</div>
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
                <div class="nombre">Equipo 16</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
