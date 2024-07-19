'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../../src/styles/Campeonato/get.css';

export default function CardCampeonato() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3001/campeonato');
                console.log(response.data); // Verifica la respuesta en la consola
                if (response.data && Array.isArray(response.data)) {
                    setTasks(response.data);
                } else {
                    console.error('Fetch tasks returned unexpected data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);


    return (
        <div className='emoji-contenedor'>
            <div className="button-wrapper">
                <Link href="/organizador/campeonatos/crear">
                    <button className="btn btn-create">
                        <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                        </svg>
                        <span className="btn-text">Crear campeonato</span>
                    </button>
                </Link>
            </div>
            <div className="container">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="header-cell">Disciplina</th>
                                <th className="header-cell">Nombre Campeonato</th>
                                <th className="header-cell">Fin Inscripción</th>
                                <th className="header-cell">Inicio</th>
                                <th className="header-cell">Cantidad Equipos</th>
                                <th className="header-cell"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task._id} className="table-row">
                                    <td>{task.nombreDiciplinas}</td>
                                    <td>{task.nombreCampeonato}</td>
                                    <td>{task.finInscripcion}</td>
                                    <td>{task.fechaFin}</td>
                                    <td>{task.tamanoEquipos}</td>
                                    <td>
                                        <Link className="custom-style"
                                            href={`/organizador/campeonatos/edit/${task._id}`}>
                                            Editar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
