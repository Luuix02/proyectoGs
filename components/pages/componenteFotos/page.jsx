import Image from 'next/image'
import '../../../src/styles/styleFotos/fotos.css'
export default function Fotos() {
  return (
    <section className="body">
    <h1 className="textI">Comparte tus mejores momentos deportivos</h1>
  <article className="contenedorF">
    <div className="column1">
        <Image src={'/images/imgFotos/liverpool.png'} width={100} height={100}/>
       <figure className="text">Equipo ganador<p className="textE">ADSO</p></figure> 
       
    </div>
    <div className="column2">
      <Image src={'/images/iconosSide/fotos.png'} width={50} height={50}/>
    </div>
  </article>
  <button className="boton">Publicar</button>
</section>
  )
}
