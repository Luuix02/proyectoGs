'use client'

import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import '../../../../../styles/Campeonato/edit.css'; 

const API_URL = 'http://localhost:3001/campeonato';

const Editar = () => {

    const [campeonato, setCampeonato] = useState({
        nombreCampeonato: '',
        nombreDiciplinas: '',
        tamanoEquipos: '',
        fechaIniciio: '',
        fechaFin: '',
        descripcion: '',
        inicioInscripcion: '',
        finInscripcion: '',
        cantidadEquipos: ''
    });

    const [error, setError] = useState(null);
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const getAllCampeonatos = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching campeonato:', error);
            throw error;
        }
    };

    const updateCampeonato = async (id, campeonato) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, campeonato);
            return response.data;
        } catch (error) {
            console.error('Error updating campeonato:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchCampeonato = async () => {
            if (id) {
                try {
                    const data = await getAllCampeonatos(id);
                    console.log('Task data:', data);
                    setCampeonato(data)
                } catch (error) {
                    console.error('Error fetching campeonato:', error);
                    setError('Error fetching campeonato');
                }
            } else {
                setError('Invalid campeonato ID');
            }
        };

        fetchCampeonato();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id) {
            setError('Invalid campeonato');
            return;
        }
        try {
            await updateCampeonato(id, campeonato);
            router.push('/organizador/campeonatos');
        } catch (error) {
            console.error('Error updating campeonato:', error);
            setError('Error updating campeonato');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='contenedor'>
            <section className="container">
                <header>Editar Campeonato</header>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label>Nombre Campeonato</label>
                        <input
                            required
                            type="text"
                            value={campeonato.nombreCampeonato}
                            onChange={(e) => setCampeonato({ ...campeonato, nombreCampeonato: e.target.value })}

                        />
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Disciplina</label>
                            <div className="column">
                                <div className="select-box">
                                    <select
                                        value={campeonato.nombreDiciplinas}
                                        onChange={(e) => setCampeonato({ ...campeonato, nombreDiciplinas: e.target.value })}
                                    >
                                        <option value="">Disciplina</option>
                                        <option value="Futbol Sala">Futbol Sala</option>
                                        <option value="Microfutbol">Microfutbol</option>
                                        <option value="Futbol 11">Futbol 11</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="input-box">
                            <label>Tamaño de Equipos</label>
                            <input
                                required
                                type="number"
                                value={campeonato.tamanoEquipos}
                                onChange={(e) => setCampeonato({ ...campeonato, tamanoEquipos: e.target.value })}

                            />
                        </div>
                        <div className="input-box">
                            <label>Cantidad de Equipos</label>
                            <input
                                required
                                type="number"
                                value={campeonato.cantidadEquipos}
                                onChange={(e) => setCampeonato({ ...campeonato, cantidadEquipos: e.target.value })}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Fecha de Inicio</label>
                            <input
                                required
                                type="date"
                                value={campeonato.fechaIniciio}
                                onChange={(e) => setCampeonato({ ...campeonato, fechaInicio: e.target.value })}

                            />
                        </div>
                        <div className="input-box">
                            <label>Fecha de Fin</label>
                            <input
                                required
                                type="date"
                                value={campeonato.fechaFin}
                                onChange={(e) => setCampeonato({ ...campeonato, fechaFin: e.target.value })}

                            />
                        </div>
                    </div>
                    <div className="input-box address">
                        <label>Descripción</label>
                        <input
                            required
                            type="text"
                            value={campeonato.descripcion}
                            onChange={(e) => setCampeonato({ ...campeonato, descripcion: e.target.value })}

                        />
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Inicio de Inscripción</label>
                            <input
                                required
                                type="date"
                                value={campeonato.inicioInscripcion}
                                onChange={(e) => setCampeonato({ ...campeonato, inicioInscripcion: e.target.value })}

                            />
                        </div>
                        <div className="input-box">
                            <label>Fin de Inscripción</label>
                            <input
                                required
                                type="date"
                                value={campeonato.finInscripcion}
                                onChange={(e) => setCampeonato({ ...campeonato, finInscripcion: e.target.value })}

                            />
                        </div>
                    </div>
                    <button type="submit">Guardar Cambios</button>
                </form>
            </section>
        </div>
    );
};

export default Editar;
