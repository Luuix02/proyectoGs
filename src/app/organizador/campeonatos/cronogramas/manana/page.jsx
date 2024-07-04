"use client"
import "../../../../../styles/styleCronograma/Cronograma.css"
import ComponenteCronograma from "../../../../../../components/pages/cronograma/EditorCronograma"
import Image from 'next/image'
import React from 'react'
import { useState } from "react";
export default function Manana() {
    const [showCalendarIndex, setShowCalendarIndex] = useState(-1); // Inicialmente ningún calendario está mostrándose

    const handleShowCalendar = (index) => {
        setShowCalendarIndex(index);
    }
    return (
        <>
            <section class="contenedorDeTextoJornada">
                <h1 class="texto">JORNADA MAÑANA</h1>
            </section>
            <div class="contenedorEquipos">

                <ComponenteCronograma 
                key={1}
                texto2={"Cali"}
                texto1={"Once Caldas"}
                onShowCalendar={() => handleShowCalendar(index)}
           
                imagen1={<Image src={'/image/Cronogramas/EscudoNacional.png'} />}
                imagen2={""}
                />
                <ComponenteCronograma texto2={"Nacional"} texto1={"America"}
                    imagen1={""}
                    imagen2={""}
                    key={2}
                    onShowCalendar={()=> handleShowCalendar(2)}
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
// import React, { useState } from 'react';
// import "../../../../../styles/styleCronograma/Cronograma.css";
// import ComponenteCronograma from "../../../../../../components/pages/cronograma/EditorCronograma";
// import Image from 'next/image';

// export default function Manana() {
//     const [showCalendarIndex, setShowCalendarIndex] = useState(-1); // Inicialmente ningún calendario está mostrándose

//     const handleShowCalendar = (index) => {
//         setShowCalendarIndex(index);
//     }

//     // Definimos los datos manualmente
//     const equipos = [
//         { texto1: "Cali", texto2: "Once Caldas", imagen1: '/image/Cronogramas/EscudoNacional.png', imagen2: '' },
//         { texto1: "Nacional", texto2: "America", imagen1: '', imagen2: '' },
//         { texto1: "Alemania", texto2: "Francia", imagen1: '', imagen2: '' }
//     ];

//     return (
//         <>
//             <section className="contenedorDeTextoJornada">
//                 <h1 className="texto">JORNADA MAÑANA</h1>
//             </section>
//             <div className="contenedorEquipos">
//                 {equipos.map((equipo, index) => (
//                     <ComponenteCronograma
//                         key={index}
//                         texto1={equipo.texto1}
//                         texto2={equipo.texto2}
//                         onShowCalendar={() => handleShowCalendar(index)}
//                         mostrarCalendario={showCalendarIndex === index}
//                         imagen1={equipo.imagen1 && <Image src={equipo.imagen1} />}
//                         imagen2={equipo.imagen2 && <Image src={equipo.imagen2} />}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// }