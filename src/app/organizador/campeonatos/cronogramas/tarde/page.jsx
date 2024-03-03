import React from 'react'
import ComponenteCronograma from "../../../../../../components/pages/cronograma/EditorCronograma"
import "../../../../../styles/styleCronograma/Cronograma.css"
export default function Tarde() {
    return (
        <>
            <section class="contenedorDeTextoJornada">
                <h1 class="texto">TARDE</h1>
            </section>
            <div class="contenedorEquipos">
                <ComponenteCronograma
                    texto1={'Cali'} texto2={'Nacional'}></ComponenteCronograma>
                <ComponenteCronograma
                    texto1={'Pasto'} texto2={'Bogota'}></ComponenteCronograma>
                <ComponenteCronograma
                    texto1={'Colombia'} texto2={'Puerto Rico'}></ComponenteCronograma>
                <ComponenteCronograma
                    texto1={'Millnarios'} texto2={'Nacional'}></ComponenteCronograma>
                <ComponenteCronograma
                    texto1={'Argentina'} texto2={'Peru'}></ComponenteCronograma>
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                />

                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                    imagen1={""}
                    imagen2={""}
                />



            </div>
        </>
    )
}