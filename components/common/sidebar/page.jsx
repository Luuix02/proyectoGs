import Link from 'next/link'
import Image from 'next/image'
import '../../../src/styles/styleSidebar/styleSidebar.css'

export default function SideBarPrincipal() {
   
    const pathImg = '/images/IconosSide'
  return (
    <aside className="barraLateral">
        <ul className="lista">
          <li className={`contenedor `}>
            <Image src={`${pathImg}/campeonatos.png`}className='img' width={35} height={35}></Image>
          <Link href={`campeonatos`} className='li'>Campeonatos </Link>
          </li>
          <li className='contenedor'>
            <Image src={`${pathImg}/crearCampenato.png`} className='img2' width={35} height={35}></Image>
            <Link href={`crearCampeonato`} className='li'>Crear Campeonatos</Link>
          </li>
          <li className='contenedor'>
            <Image src={`${pathImg}/fotos.png`} width={35} height={35}></Image>
            <Link href={`fotos`} className='li'>Fotos</Link>
          </li>
          <li className='contenedor'>
            <Image src={`${pathImg}/cuenta.png`} width={35} height={35}></Image>
            <Link href={`perfil`} className='li'>Cuenta</Link>
          </li>
          <li className='contenedor'>
            <Image src={`${pathImg}/salir.png`} width={35} height={35}></Image>
          <Link href={`/`} className='li'>Salir</Link>
          </li >
          </ul>
      </aside>
  )
}
