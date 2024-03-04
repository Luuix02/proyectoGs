import Link from "next/link"

export default function Guardar() {
  
  const path ='/organizador';
  return (  
    <div class="MuestraDeConfirmacion" active>
    <div class="contendorConfirmacionCambios" >
      <p class="textoConfirmacion">¿Desea confirmar los cambios?</p>
        <div class="AlineacionBotonesConfirmacion">
            
              <Link class="BotonesConfirmacion" href={`${path}/campeonatos`}><button class="">Aceptar</button> </Link>
              
            
            <Link href={`${path}/crearCampeonatos`}> 
            <button class="BotonesConfirmacion" >Cancelar
            </button></Link>
        </div>
    </div>
    </div>
  )
}
