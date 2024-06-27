import Image from 'next/image'
import "../../../src/styles/styleCronograma/Cronograma.css";
import React from 'react'
import Calendarioo from '../calendar/Calendario';
import { useState } from "react";

export default function EditorCronograma({ texto1, texto2, onShowCalendar }) {
    // //Declaracion de stados
    // const [muestraCalendario, setMuestraCalendario]= useState('cronograma');
    // //  funcion flecla del onClck para mostrar el calendario, operador ternario
    // const funcionMostrarCalendario = () => {
    //     setMuestraCalendario(muestraCalendario==='cronogramas'? 'Calendario':'Calendario')
    // }

    const [muestraCalendario, setMuestraCalendario] = useState(false);

    const funcionMostrarCalendario = () => {
        setMuestraCalendario(!muestraCalendario);
        onShowCalendar();
    }
    return (
        <>
        {/* <div class="ContenedorCalendarioCronograma"> */}

             
        <div class="contenedorCard">
            <section class="seccion1">
                
                <span class="ImagenesTexto">
                    <Image src={"/images/imageEstadistica/nacional.png"} alt='' width={40} height={50} />
                    <p>{texto1}</p>
                </span>
                <span class="ImagenesTexto">
                    <Image src="/images/imageEstadistica/MILONARIOS.png" alt='' width={40} height={50} />
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
              <button class="BotonVerCalendarioCronograma" onClick={funcionMostrarCalendario}>Ver Calendario</button>
            </section>
            
           
            
        </div>
        {muestraCalendario &&<div class="ContenedorPrincipalCalenadrio"> 
            <div class="Calendario">
                {
                     <Calendarioo/>
                }
            </div>
        </div>
}
        {/* </div> */}
       
       
        
        </>

    )
}

// import Image from 'next/image'
// import "../../../src/styles/styleCronograma/Cronograma.css";
// import React, { useState } from 'react'
// import Calendarioo from '../calendar/Calendario';

// export default function EditorCronograma({ texto1, texto2 }) {
//     // Declaración de estados
//     const [mostrarCalendarios, setMostrarCalendarios] = useState([true, true, true]);

//     // Función para mostrar solo el calendario de la carta seleccionada
//     const mostrarSoloCalendario = (index) => {
//         const nuevosEstados = mostrarCalendarios.map((estado, i) => i === index);
//         setMostrarCalendarios(nuevosEstados);
//     }

//     return (
//         <>
//         <div class="contenedorCard">
//             {mostrarCalendarios.map((mostrar, index) => (
//                 mostrar && 
//                 <div key={index} class="card">
//                     <section class="seccion1">
//                         <span class="ImagenesTexto">
//                             <Image src="/image/Cronogramas/EscudoNacional.png" alt='' width={40} height={50} />
//                             <p>{texto1}</p>
//                         </span>
//                         <span class="ImagenesTexto">
//                             <Image src="/image/Cronogramas/escudo.png" alt='' width={40} height={50} />
//                             <p>{texto2}</p>
//                         </span>
//                     </section>
//                     <section class="seccion2">
//                         <p >Detalles</p>
//                         <span>
//                             <label>Hora:</label>
//                             <input type="time" />
//                         </span>
//                         <span>
//                             <label>Fecha:</label>
//                             <input type="date" />
//                         </span>
//                         <button class="BotonVerCalendarioCronograma" onClick={() => mostrarSoloCalendario(index)}>Ver Calendario</button>
//                     </section>
//                 </div>
//             ))}
//         </div>
//         <div class="ContenedorPrincipalCalenadrio"> 
//             <div class="Calendarios">
//                 {mostrarCalendarios.map((mostrar, index) => (
//                     mostrar && <Calendarioo key={index} />
//                 ))}
//             </div>
//         </div>
//         </>
//     );
// }
