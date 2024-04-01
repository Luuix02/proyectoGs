import Image from "next/image";
import "../../../src/styles/styleFotos/fotos.css";
import SideBarPrincipal from "../../common/sidebar/page";
export default function Fotos() {
  return (
    <main style={{ display: "flex" }}>
      <SideBarPrincipal />
      <div className="contenedorSubirImagenes">
        <h2 className="tituloSubirImg">
          Comparte los mejores momentos de tu campeonato y que siga la
          diversión!!!
        </h2>
        <div className="contenedorImagen">
          <div className="imagenesContainer">
            <img
              src="https://cdn-icons-png.freepik.com/512/1040/1040241.png"
              width={200}
              height={200}
              alt="Logo de subir imagen"
              className="logoImagenSubir"
            />
            <img
              src="https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png"
              width={50}
              height={50}
              alt="Icono de agregar imagen"
              className="iconoAgregarImg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

