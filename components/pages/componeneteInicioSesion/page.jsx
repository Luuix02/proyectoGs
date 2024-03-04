import Link from 'next/link';
import "../../../src/styles/stylesIniciarSesion/styleIniciarSesion.css";

export default function InicioSesion() {
    const path = '/auth';
    return (
        <html className='html_iniciarsesion'>
        <div className='contenedorPrincipal'>
            <h1 className='tituloPrincipal'>Inicio de Sesión</h1>
            <br /> <br />

            <div className='contenedorDatos'>
                <form action="datos">
                    <label htmlFor="email" className='etiquetaDato'>Correo Electrónico</label>
                    <input type="email" id="email" name="email" placeholder="ej: pepito@gmail.com" required className='campoDato' />

                    <label htmlFor="password" className='etiquetaDato'>Contraseña</label>
                    <input className='campoContraseña' type="password" id="password" name="password" placeholder="***********" required />

                    <h1 className='enlaceOlvido'>Olvidé mi contraseña</h1>

                    <br />
                    <button className='botonInicioSesion'>Iniciar Sesión</button>

                    <h1 className='tituloPrincipal'>¿No tienes cuenta? <br />
                        <Link href={`${path}/Registro`}>Regístrate</Link>
                    </h1>

                </form>
            </div>
            </div>
        </html>
    );
}
