import Image from "next/image"
import '../../../src/styles/styleEstadisticas/styleIntegrantes.css'
export default function Integrantes() {


  return (
    <>
    <div className="contenedorIntegrante">
    <Image src='/images/imageEstadistica/benzema.jpg' width={50} height={50} className="imagenIntegrante"/>
      <h1 className="nombreJugador"> Benzema</h1>
    </div>
    </>
  )
}
