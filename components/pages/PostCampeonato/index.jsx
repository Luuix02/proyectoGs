'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react'
import '../../../src/styles/Campeonato/Post.css'

export default function CreateCampeonato() {

    const [nombreCampeonato, setNombreCampeonato] = useState('');
    const [nombreDiciplinas, setNombreDiciplinas] = useState('');
    const [tamanoEquipos, setTamanoEquipos] = useState('');
    const [fechaIniciio, setFechaIniicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [inicioInscripcion, setInicioInscripcion] = useState('');
    const [finInscripcion, setFinInscripcion] = useState('');
    const [cantidadEquipos, setCantidadEquipos] = useState('')
    const [error, setError] = useState(null);

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            nombreCampeonato,
            nombreDiciplinas,
            tamanoEquipos,
            fechaIniciio,
            fechaFin,
            descripcion,
            inicioInscripcion,
            finInscripcion,
            cantidadEquipos
        };

        try {
            const response = await axios.post('http://localhost:3001/campeonato/', data);
            console.log('Respuesta del servidor:', response.data);
            router.push('/organizador/campeonatos');
        } catch (error) {
            console.error('Error al crear el campeonato:', error);
            if (error.response) {
                console.error('Detalles del error:', error.response.data);
            }
            setError('Error al crear el campeonato. Inténtalo de nuevo.');
        }
    };

    return (
        <div className='contenedor'>
            <section class="container">
                <div className='header-create'>
                    <header>¡Crea tu Campeonato! Completa el formulario a continuación</header>
                </div>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="input-box">
                        <label className='name-label'>Nombre Campeonato</label>
                        <input
                            required
                            placeholder="name"
                            type="text"
                            onChange={(e) => setNombreCampeonato(e.target.value)}
                        />
                    </div>
                    
                    <div class="column">
                        <div class="input-box">
                            <label>Diciplina</label>
                            <div class="column">
                                <div class="select-box">
                                    <select onChange={(e) => setNombreDiciplinas(e.target.value)}>
                                        <option hidden>Selecciona</option>
                                        <option>Futbol Sala</option>
                                        <option>Microfutbol</option>
                                        <option>Futbol 11</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="input-box">
                            <label>Tamaño de Equipos</label>
                            <input
                                required
                                placeholder="10"
                                type="number"
                                onChange={(e) => setTamanoEquipos(e.target.value)}
                            />
                        </div>
                        <div class="input-box">
                            <label>Cantidad de Equipos</label>
                            <input
                                required
                                placeholder="10"
                                type="number"
                                onChange={(e) => setCantidadEquipos(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label>Fecha de Inicio</label>
                            <input required
                                placeholder="Enter birth date"
                                type="date"
                                onChange={(e) => setFechaIniicio(e.target.value)}
                            />
                        </div>
                        <div class="input-box">
                            <label>Fin de Fin</label>
                            <input required
                                placeholder="Enter birth date"
                                type="date"
                                onChange={(e) => setFechaFin(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="input-box address">
                        <label>Descripción</label>
                        <input require
                            placeholder="CTPI"
                            type="text"
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>

                    <div class="column">
                        <div class="input-box">
                            <label>Inicio Inscripcion</label>
                            <input required
                                placeholder="Enter birth date"
                                type="date"
                                onChange={(e) => setInicioInscripcion(e.target.value)}
                            />
                        </div>
                        <div class="input-box">
                            <label>Fin de Inscripción</label>
                            <input required
                                placeholder="Enter birth date"
                                type="date"
                                onChange={(e) => setFinInscripcion(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Crear campeonato</button>
                </form>
            </section>
        </div>
    )
}
