'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useRouter, useParams } from 'next/navigation';


import '../../../../styles/Campeonato/modalida.css';

export default function Page() {
    const [modal, setModal] = useState([]);
    const [selectedModalidad, setSelectedModalidad] = useState('');

    const [sedes, setSedes] = useState([]);
    const [selectedSede, setSelectedSede] = useState('');

    const [error, setError] = useState(null);
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        const fetchModalidad = async () => {
            try {
                const response = await axios.get('http://localhost:3001/modalidad/');
                console.log(response.data);
                if (response.data && Array.isArray(response.data.modalidades)) {
                    setModal(response.data.modalidades);
                } else {
                    console.error('Fetch Modalidad returned unexpected data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching Modalidad:', error);
                setError('Error fetching Modalidad'); // Agregar manejo de error si es necesario
            }
        };

        fetchModalidad();
    }, []);

    const handleSelectChange = (e) => {
        setSelectedModalidad(e.target.value); // Actualiza el estado con la modalidad seleccionada
    };

    const navigateToAnotherPage = () => {
        if (selectedModalidad) {
            router.push(`/organizador/campeonatos/crear/${selectedModalidad}`); // Navega a la otra página con el ID de la modalidad seleccionada
        } else {
            console.warn('No modalidad selected'); // Maneja el caso donde no se ha seleccionado ninguna modalidad
        }
    };

    useEffect(() => {
        const fetchSedes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/sede/');
                if (response.data && Array.isArray(response.data.sedes)) {
                    setSedes(response.data.sedes);
                } else {
                    console.error('Fetch Sedes returned unexpected data:', response.data);
                }
            } catch (error) {
                console.error('Hubo un problema con la solicitud:', error);
            }
        };

        fetchSedes();
    }, []);

    const handleSelectChangeSede = (e) => {
        setSelectedSede(e.target.value); // Actualiza el estado con la sede seleccionada
    };



    return (
        <>
            <div className='main-modalidad'>

                <div className="input-box">
                    <label>Modalidad</label>
                    <div className="column">
                        <div className="select-box">
                            <select onChange={handleSelectChange} value={selectedModalidad}>
                                <option hidden>Selecciona</option>
                                {modal.map(modal => (
                                    <option key={modal._id} value={modal._id}>
                                        {modal.nombreModalidad}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="input-box">
                    <label>Selecciona una sede:</label>
                    <div className="column">
                        <div className="select-box">
                            <select onChange={handleSelectChangeSede} value={selectedSede}>
                                <option value="" hidden>Selecciona una sede...</option>
                                {sedes.map(sede => (
                                    <option key={sede._id} value={sede._id}>
                                        {sede.nombreSede}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="button-container">
                    <button onClick={navigateToAnotherPage}>Ir a otra página</button>
                </div>
            </div>

        </>
    );
}
