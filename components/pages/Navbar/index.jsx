import Link from 'next/link'
import '../../../src/styles/StyleNavbar/main.css'
export default function Header() {

    return (
        <>
            <nav>
                <div class='containerPrincipal'>
                    <div class="logo">
                        <img src="" alt="Logo" />
                    </div>
                    <div class="links">
                        <a href="">Iniciar sesión</a>
                        <a href="">Regristrarse</a>
                        <a href="">Equipo Bienestar</a>
                        <a href="">Contactanos</a>
                    </div>
                </div>
            </nav>

        </>
    )
}