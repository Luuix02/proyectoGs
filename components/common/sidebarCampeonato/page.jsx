import Link from 'next/link'
import Image from 'next/image'
import '../../../src/styles/styleSidebarCampeonato/styleSidebarCam.css';
export default function SideBarCampeonato() {
    const pathUrl= "/organizador/campeonatos/"
    const pathImg = '/images/IconosSide'
  return (
    <aside className="barraLateralCam">
      <ul className="listaCam">
        <li className={`contenedorAsideCam `}>
          <Image
            src={`${pathImg}/estadistica.png`}
            className="img"
            width={35}
            height={35}
          ></Image>
          <Link href={`${pathUrl}estadisticas/tarde`} className="li">
            Estadisticas
          </Link>
        </li>
        <li className="contenedorAsideCam">
          <Image
            src={`${pathImg}/cronograma.png`}
            className="img2"
            width={35}
            height={35}
          ></Image>
          <Link href={`${pathUrl}cronogramas`} className="li">
            Cronograma 
          </Link>
        </li>
        <li className="contenedorAsideCam">
          <Image src={`${pathImg}/verParticipantes.png`} width={35} height={35}></Image>
          <Link href={`${pathUrl}verParticipantes`} className="li">
            Ver Participantes 
          </Link>
        </li>
        <li className="contenedorAsideCam">
          <Image src={`${pathImg}/derrotero.png`} width={35} height={35}></Image>
          <Link href={`${pathUrl}derrotero/mananaDerr`} className="li">
            Derrotero 
          </Link>
        </li>
        <li className="contenedorAsideCam">
          <Image src={`${pathImg}/campeonatos.png`} width={35} height={35}></Image>
          <Link href={`/organizador/campeonatos`} className="li">
            Campeonatos 
          </Link>
        </li>
      </ul>
    </aside>
  )
}
