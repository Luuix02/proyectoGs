import Link from 'next/link'
import Image from 'next/image'
import '../../../src/styles/styleSidebar/styleSidebar.css'

export default function SideBarPrincipal() {
   
    const pathImg = '/images/IconosSide'
  return (
    <aside className="barraLateral">
      <div className='headerAside'>
      <Image src={`${pathImg}/menu.png`}className='imgH' width={35} height={35}></Image>
      <h1 className='textHeader'>Administrador</h1>
      </div>
        <ul className="lista">
          <li className={`contenedorAside `}>
            <Image src={`${pathImg}/campeonatos.png`}className='img' width={35} height={35}></Image>
          <Link href={`campeonatos`} className='li'>Campeonatos </Link>
          </li>
          <li className='contenedorAside'>
            <Image src={`${pathImg}/crearCampenato.png`} className='img2' width={35} height={35}></Image>
            <Link href={`crearCampeonato`} className='li'>Crear Campeonatos</Link>
          </li>
          <li className='contenedorAside'>
            <Image src={`${pathImg}/fotos.png`} width={35} height={35}></Image>
            <Link href={`fotos`} className='li'>Fotos</Link>
          </li>
          <li className='contenedorAside'>
            <Image src={`${pathImg}/cuenta.png`} width={35} height={35}></Image>
            <Link href={`perfil`} className='li'>Cuenta</Link>
          </li>
          <li className='contenedorAside'>
            <Image src={`${pathImg}/salir.png`} width={35} height={35}></Image>
          <Link href={`/`} className='li'>Salir</Link>
          </li >
          </ul>
      </aside>
  )
}
