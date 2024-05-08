import Link from "next/link"
import "../../../../../styles/styleCronograma/Cronograma.css"
export default function GuardarCronograma({cerrarCancelar}) {
  
  const path ='/organizador/campeonatos';
  return (  
    <div class="MuestraDeConfirmacionCronograma" >
    <div class="contendorConfirmacionCambiosCronograma" >
      <p class="textoConfirmacion">¿Desea confirmar los cambios?</p>
        <div class="AlineacionBotonesConfirmacion">
            <Link type="button" class="BotonesConfirmacion" href={`${path}/verParticipantes`}> 
           Aceptar
            </Link>

            <button type="button" onClick={cerrarCancelar} class="BotonesConfirmacionCancelar"> 
           Cancelar
            </button>
           
        </div>
    </div>
    </div>
  )
}
