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
                <header>Crear Campeonato</header>
                <form class="form" action="#">
                    <div class="input-box">
                        <label>Full Name</label>
                        <input required="" placeholder="Enter full name" type="text"/>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label>Phone Number</label>
                            <input required="" placeholder="Enter phone number" type="telephone"/>
                        </div>
                        <div class="input-box">
                            <label>Birth Date</label>
                            <input required="" placeholder="Enter birth date" type="date"/>
                        </div>
                    </div>
                    <div class="input-box address">
                        <label>Address</label>
                        <input required="" placeholder="Enter street address" type="text"/>
                            <div class="column">
                                <div class="select-box">
                                    <select>
                                        <option hidden="">Country</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Germany</option>
                                        <option>Japan</option>
                                    </select>
                                </div>
                                <input required="" placeholder="Enter your city" type="text"/>
                            </div>
                    </div>
                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
}
