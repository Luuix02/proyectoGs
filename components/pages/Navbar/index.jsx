import Link from 'next/link'
import Image from "next/image";
import '../../../src/styles/StyleNavbar/main.css'
export default function Header() {
    const path = '/auth'

    return (
        <>
            <nav>
                <div class='containerPrincipal'>
                    <div class="logo">
                    <Image src={"/logoGos.png"} width={260} height={60}></Image>
                    </div>
                    <div class="links">
                        <Link href={`${path}/registro`}>Registrarse</Link>
                        <Link href={`${path}/inicioSesion`}>Iniciar sesión</Link>
                        <a href="#section_dow">Equipo Bienestar</a>
                        <a href="#section_ft">Contactanos</a>
                        <a></a>
                    </div>
                </div>
            </nav>

        </>
    )
}