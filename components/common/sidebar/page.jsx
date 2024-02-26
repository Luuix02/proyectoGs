import Link from 'next/link'
import Image from 'next/image'
import '../../../src/styles/styleSidebar/styleSidebar.css'

export default function SideBarPrincipal() {
    const path = 'organizador'
    const pathImg = '/images/IconosSide'
  return (
    <aside className="barraLateral">
        <ul className="lista">
          <div className={`contenedor `}>
            <Image src={`${pathImg}/campeonatos.png`}className='img' width={35} height={35}></Image>
          <Link href={`${path}/campeonatos`} >Campeonatos </Link>
          </div>
          <div className='contenedor'>
            <Image src={`${pathImg}/crearCampenato.png`} className='img2' width={35} height={35}></Image>
            <Link href={`${path}/crearCampeonato`}>Crear Campeonatos</Link>
          </div>
          <div className='contenedor'>
            <Image src={`${pathImg}/fotos.png`} width={35} height={35}></Image>
            <Link href={`${path}/fotos`}>Fotos</Link>
          </div>
          <div className='contenedor'>
            <Image src={`${pathImg}/cuenta.png`} width={35} height={35}></Image>
            <Link href={`${path}/cuenta`}>Cuenta</Link>
          </div>
          <div className='contenedor'>
            <Image src={`${pathImg}/salir.png`} width={35} height={35}></Image>
            <Link href={`/inicioSesion`}>Salir</Link>
          </div >
          </ul>
      </aside>
  )
}
