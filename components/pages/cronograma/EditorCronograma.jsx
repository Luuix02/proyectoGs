import Image from 'next/image'
import "../../../src/styles/styleCronograma/Cronograma.css";
import React from 'react'
export default function ComponenteCronograma({ texto1, texto2 }) {
    return (
        <div class="contenedorCard">
            <section class="seccion1">
                <span class="ImagenesTexto">
                    <Image src="/image/Cronogramas/EscudoNacional.png" width={40} height={50} />
                    <Image src="/image/Cronogramas/escudo.png" width={40} height={50} />
                </span>
                <span class="ImagenesTexto">
                    <p>{texto1}</p>
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