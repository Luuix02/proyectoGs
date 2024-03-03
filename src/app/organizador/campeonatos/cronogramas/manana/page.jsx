"use client"
import "../../../../../styles/styleCronograma/Cronograma.css"
import ComponenteCronograma from "../../../../../../components/pages/cronograma/EditorCronograma"
import Image from 'next/image'
import React from 'react'
export default function Manana() {
    return (
        <>
            <section class="contenedorDeTextoJornada">
                <h1 class="texto">MAÑANA</h1>
            </section>
            <div class="contenedorEquipos">

                <ComponenteCronograma texto2={"Cali"} texto1={"Once Caldas"}
                    imagen1={<Image src={'/image/Cronogramas/EscudoNacional.png'} />}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Nacional"} texto1={"America"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Alemania"} texto1={"Francia"}
                   
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                 
                />
                <ComponenteCronograma texto2={"Colombia"} texto1={"Venezuela"}
                    
                />
                <ComponenteCronograma texto2={"Argetnina"} texto1={"Peru"}
                  
                />
                <ComponenteCronograma texto2={"Barcelona"} texto1={"Pasto"}
                />
                <ComponenteCronograma texto2={"Chelsea"} texto1={"Pasto"}
                   
                />
                <ComponenteCronograma texto2={"Tolima"} texto1={"Amazonas"}
                 
                />
                <ComponenteCronograma texto2={"Bogota"} texto1={"Popayan"}
                    
                />
            </div>
        </>
    )
}