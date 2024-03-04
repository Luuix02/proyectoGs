import Link from "next/link"

export default function Guardar() {
  
  const path ='/organizador';
  return (  
    <div class="MuestraDeConfirmacion" >
    <div class="contendorConfirmacionCambios" >
      <p class="textoConfirmacion">¿Desea confirmar los cambios?</p>
        <div class="AlineacionBotonesConfirmacion">
              <button class="BotonesConfirmacion" ><Link href={`${path}/campeonatos`}> 
           Aceptar
            </Link></button>

            <button class="BotonesConfirmacion" ><Link href={`${path}/crearCampeonato`}> 
           Cancelar
            </Link></button>
           
        </div>
    </div>
    </div>
  )
}
