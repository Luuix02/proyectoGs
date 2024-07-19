'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import '../../../src/styles/Campeonato/Post.css'

export default function CreateCampeonato() {

    const [nombreDiciplinas, setnombreDiciplinas] = useState('');
    const [estadoCampeonato, setEstadoCampeonato] = useState('')

    const [nombreCampeonato, setNombreCampeonato] = useState('');
    const [tamanoEquipos, setTamanoEquipos] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const [tipoCampeonato, setTipoCampeonato] = useState('');

    const [descripcion, setDescripcion] = useState('');
    const [inicioInscripcion, setInicioInscripcion] = useState('');
    const [finInscripcion, setFinInscripcion] = useState('');
    
    const [añoCreacion, setAñoCreacion] = useState('');
    const [error, setError] = useState(null);

    const router = useRouter();

    // Modalidad y sede

    // const [modal, setModalidades] = useState([]);
    // const [selectedModalidad, setSelectedModalidad] = useState('');

    // const [sedes, setSedes] = useState([]);
    // const [selectedSede, setSelectedSede] = useState('');

    // const params = useParams();
    // const id = params?.id;



    // useEffect(() => {
    //     const fetchModalidades = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/modalidad/');
    //             if (response.data && Array.isArray(response.data.modalidades)) {
    //                 setModalidades(response.data.modalidades);
    //             } else {
    //                 console.error('Fetch Modalidades returned unexpected data:', response.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching Modalidades:', error);
    //             setError('Error fetching Modalidades');
    //         }
    //     };

    //     fetchModalidades();
    // }, []);

    // useEffect(() => {
    //     const fetchSedes = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/sede/');
    //             if (response.data && Array.isArray(response.data.sedes)) {
    //                 setSedes(response.data.sedes);
    //             } else {
    //                 console.error('Fetch Sedes returned unexpected data:', response.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching Sedes:', error);
    //             setError('Error fetching Sedes');
    //         }
    //     };

    //     fetchSedes();
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const campeonatoData = {

            nombreDiciplinas,
            estadoCampeonato,
            nombreCampeonato,
            tamanoEquipos,
            fechaInicio,
            fechaFin,
            tipoCampeonato,
            descripcion,
            inicioInscripcion,
            finInscripcion,
            añoCreacion,

            // modalidad: selectedModalidad,
            // sede: selectedSede
        };

        try {
            const response = await axios.post('http://localhost:3001/campeonato/', campeonatoData);
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


    // const handleSelectChange = (e) => {
    //     setSelectedModalidad(e.target.value);
    // };

    // const handleSelectChangeSede = (e) => {
    //     setSelectedSede(e.target.value);
    // };


    return (
        <div className='contenedor'>

            {/* <div>
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
                                <option hidden>Selecciona una sede...</option>
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
            </div> */}


            <section class="container">
                <div className='header-create'>
                    <header>¡Crea tu Campeonato! Completa el formulario a continuación</header>
                </div>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="input-box label-name">
                        <label className='name-label'>Nombre Campeonato</label>
                        <input
                            required
                            placeholder="ingresa nombre de campeonato"
                            type="text"
                            onChange={(e) => setNombreCampeonato(e.target.value)}
                        />
                    </div>

                    <div class="column">
                        <div class="input-box">
                            <label>Disciplina</label>
                            <input
                                required
                                placeholder="Futbol sala"
                                type="text"
                                onChange={(e) => setnombreDiciplinas(e.target.value)}
                            />
                        </div>
                        <div class="input-box">
                            <label>Estado Campeonato</label>
                            <input
                                required
                                placeholder="Inscrito"
                                type="text"
                                onChange={(e) => setEstadoCampeonato(e.target.value)}
                            />
                        </div>
                        <div class="input-box">
                            <label>Tamaño equipo</label>
                            <input
                                required
                                placeholder="numero participantes"
                                type="number"
                                onChange={(e) => setTamanoEquipos(e.target.value)}
                            />
                        </div>
                    </div>

                    <div class="column init-label">
                        <div class="input-box">
                            <label>Fecha de Inicio</label>
                            <input required
                                placeholder="Enter birth date"
                                type="date"
                                onChange={(e) => setFechaInicio(e.target.value)}
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

                    <div class="column init-label">
                        <div class="input-box">
                            <label>Tipo campeonato</label>
                            <input required
                                placeholder="Recreacional"
                                type="text"
                                onChange={(e) => setTipoCampeonato(e.target.value)}
                            />
                        </div>
                        <div class="input-box">
                            <label>Año creacios</label>
                            <input required
                                placeholder="2024"
                                type="text"
                                onChange={(e) => setAñoCreacion(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="input-box address init-label">
                        <label>Descripción</label>
                        <input require
                            placeholder="Ingrese una breve descripción del campeonato"
                            type="text"
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>

                    <div class="column init-label">
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
