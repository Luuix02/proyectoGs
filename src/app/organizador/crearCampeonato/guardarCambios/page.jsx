import Link from "next/link"

export default function Guardar({cerrarCancelar}) {
  
  const path ='/organizador';
  return (  
    <div class="MuestraDeConfirmacion" >
    <div class="contendorConfirmacionCambios" >
      <p class="textoConfirmacion">¿Desea confirmar los cambios?</p>
        <div class="AlineacionBotonesConfirmacion">
            <Link type="button" class="BotonesConfirmacion" href={`${path}/campeonatos`}> 
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
