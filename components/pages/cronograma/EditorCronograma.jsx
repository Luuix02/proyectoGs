import Image from 'next/image'
import "./Cronograma.css"
import React from 'react'
export default function ComponenteCronograma({ texto1, texto2 }) {
    return (
        <div class="contenedorCard">
            <section class="seccion1">
                <span class="equipos">
                    <Image src="/image/Cronogramas/EscudoNacional.png" width={40} height={50} />
                    <p>{texto1}</p>
                </span>
                <span class="equipos">
                    <Image src="/image/Cronogramas/escudo.png" width={40} height={50} />
                    <p>{texto2}</p>
                </span>
            </section>
            <section class="seccion2">
                <p >Detalles</p>
                <span>
                    <label>Hora:</label>
                    <input type="time" />
                </span>
                <span>
                    <label>Fecha:
                    </label>
                    <input type="date" />
                </span>
            </section>
        </div>


    )
}