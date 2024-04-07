"use client"
import Link from 'next/link';
import "../../../src/styles/stylesIniciarSesion/styleIniciarSesion.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function InicioSesion() {
    const path = '/auth';
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ruta, setRuta] = useState('')

    const datosJugador = {
        email: "pepitoPerez@gmail.com",
        password: "1234"
    }
    const datosAdmin = {
        email: "pedrito@soy.sena.edu.co",
        password:"1234"
    }

    const validacionRutas = () => {
        if (email === datosJugador.email && password === datosJugador.password) {
            setRuta('/jugador/dashboard')
        } else if (email === datosAdmin.email && password === datosAdmin.password) {
            setRuta('/organizador/campeonatos')
        } else {
            console.log("Datos incorrectos");
        }
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        validacionRutas()
    }
    return (
        <div className='contenedorPrincipal'>
            <h1 className='tituloPrincipal'>Inicio de Sesión</h1>
            <br /> <br />

            <div className='contenedorDatos'>
                <form action="datos" onSubmit={handlerSubmit}>
                    <label htmlFor="email" className='etiquetaDato'>Correo electrónico</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="ej: pepito@gmail.com"
                            required className='campoDato'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                    <label htmlFor="password" className='etiquetaDato'>Contraseña</label>
                        <input
                            className='campoContraseña'
                            type="password" id="password"
                            name="password" placeholder="***********" required
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />

                        <Link className='olvidoContraseña' href={`${path}/recuperarContrasena`}>Olvido contraseña</Link>

                    <br />
                        <button className='botonInicioSesion'
                            type='submit'
                            onClick={()=> router.push(ruta)}
                        >Iniciar Sesión</button>
                    <Link href={ruta}></Link>

                    <h1 className='tituloPrincipal'>¿No tienes cuenta? <br />
                        <Link className="registrate" href={`${path}/registro`}>Regístrate</Link>
                    </h1>

                </form>
            </div>
            </div>
            
    );
}
