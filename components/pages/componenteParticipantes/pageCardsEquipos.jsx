import Image from "next/image";
import "../../../src/styles/styleIntegrantesEquipo/style.css";
export default function CardsEquipos() {
  return (
    <>
      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image src="/images/imgFases/JUNIOR.jpg" 
            width={70} 
            height={70} 
            class = "equipoLogoCard"
            />
          </div>
            <p class="nombreEquipoCard">Equipo 1</p>
        
          <button class="botonVerIntegrantesCard">Ver integrantes</button>
        </div>
      </div>


      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image src="/images/imgFases/JUNIOR.jpg" 
            width={70} 
            height={70} 
            class = "equipoLogoCard"
            />
          </div>
            <p class="nombreEquipoCard">Equipo 2</p>
        
          <button class="botonVerIntegrantesCard">Ver integrantes</button>
        </div>
      </div>


      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image src="/images/imgFases/JUNIOR.jpg" 
            width={70} 
            height={70} 
            class = "equipoLogoCard"
            />
          </div>
            <p class="nombreEquipoCard">Equipo 3</p>
        
          <button class="botonVerIntegrantesCard">Ver integrantes</button>
        </div>
      </div>


      <div class="contenedorCardEq">
        <div class="CardFigura">
          <div class="imagenEquipoCard">
            <Image src="/images/imgFases/JUNIOR.jpg" 
            width={70} 
            height={70} 
            class = "equipoLogoCard"
            />
          </div>
            <p class="nombreEquipoCard">Equipo 4</p>
        
          <button class="botonVerIntegrantesCard">Ver integrantes</button>
        </div>
      </div>
    </>
  );
}
