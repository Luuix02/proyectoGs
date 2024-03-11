import Link from 'next/link'
import '../../../src/styles/StyleNavbar/main.css'
export default function Header() {
    const path = '/auth'

    return (
        <>
            <nav>
                <div class='containerPrincipal'>
                    <div class="logo">
                        <img src="" alt="Logo" />
                    </div>
                    <div class="links">
                        <Link href={`${path}/registro`}>Registrarse</Link>
                        <Link href={`${path}/inicioSesion`}>Iniciar sesión</Link>
                        <a href="">Equipo Bienestar</a>
                        <a href="">Contactanos</a>
                       
                        <a></a>
                    </div>
                </div>
            </nav>

        </>
    )
}