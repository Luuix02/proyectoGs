'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'
import '../../../src/styles/Campeonato/Post.css'

export default function CreateCampeonato() {


    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.post('http://localhost:3001/campeonato');
                if (response.data && Array.isArray(response.data.campeonatos)) {
                    setTasks(response.data.campeonatos);
                } else {
                    console.error('Fetch tasks returned unexpected data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching CrearCampeonato:', error);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div className='contenedor'>
        <section class="container">
            <header>Editar Campeonato</header>
            <form class="form" action="#">
                <div class="input-box">
                    <label>Nombre Campeonato</label>
                    <input required="" placeholder="Alt Nacional" type="text"/>
                </div>
                <div class="input-box address">
                    <label>Diciplina</label>
                        <div class="column">
                            <div class="select-box">
                                <select>
                                    <option hidden="">Futbol Sala</option>
                                    <option>Microfutbol</option>
                                    <option>Futbol 11</option>
                                </select>
                            </div>
                            <input required="" placeholder="Participantes Equipo" type="number"/>
                        </div>
                </div>
                <div class="column">
                <div class="input-box">
                        <label>Inicio</label>
                        <input required="" placeholder="Enter birth date" type="date"/>
                    </div>
                    <div class="input-box">
                        <label>Fin</label>
                        <input required="" placeholder="Enter birth date" type="date"/>
                    </div>
                </div>
                <div class="input-box address">
                    <label>Descripcion</label>
                    <input required="" placeholder="Enter street address" type="text"/>
                        <div class="column">
                            <div class="select-box">
                                <select>
                                    <option hidden=""></option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <input required="" placeholder="Suuu" type="text"/>
                        </div>
                </div>
                <button type="sunmit">Crear</button>
            </form>
        </section>
    </div>
    )
}
