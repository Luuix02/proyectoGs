import Link from "next/link"

export default function Guardar() {
  
  const path ='/organizador';
  return (  
    <div class="MuestraDeConfirmacion" >
    <div class="contendorConfirmacionCambios" >
      <p class="textoConfirmacion">¿Desea confirmar los cambios?</p>
        <div class="AlineacionBotonesConfirmacion">
            
              <Link  href={`${path}/campeonatos`} class="BotonesConfirmacion">ddds </Link>
              
            
              <button class="BotonesConfirmacion" ><Link href={`${path}/campeonatos`}> 
           Cancelar
            </Link></button>
            <li><Link href={`${path}/campeonatos`} class="BotonesConfirmacion">aceptar</Link></li>
        </div>
    </div>
    </div>
  )
}
