"use client"

import {useState} from 'react'
import "../../../styles/styleCrearCampeonato/crearcampeonato.css"
import Calendarioo from './calendar/Calendario';
import Boton from "../../../../components/pages/CrearCampeonato/Boton";
import Guardar from "./guardarCambios/page";

export default function CrearCampeonato() {
  // const [BotonVer, setBotonVer] = useState('crearCampeonato')

  // const handleClickAbrir = () =>{
  //   setBotonVer(BotonVer == 'crearCampeonato' ? 'calendar' : 'crearCampeonato');
  // }

  const[GuardarCambios, setGuardarCambios] = useState('crearCampeonato')
  const handleGuardar = () =>{
    setGuardarCambios(GuardarCambios==='crearCampeonato'? 'guardar': 'crearCampeonato');
  }

  return (
    <>
   
      <div class="contenedor2" active>

    
        {GuardarCambios === 'guardar' && <Guardar/>}
        
        <div class="contendorPrincipalFormulario">
          <p class="textDeCrearCampeonato">Crea tu campeonato</p>
          <form class="Formulario">
            
          < div class= "name_select_fechas">
            <div class="form-group">
              <input  type="text" placeholder="Nombre del campeonato" />
              <label className="form-label">Ingrese nombre del campeonato</label>
            </div>
            <div class="form-group">
              <input  type="text" placeholder="Descripcion del campeonato" />
              <label className="form-label">Descripcion del campeonato</label>
              </div>

            <div class="DireccionDeSelectores">
              <div className="selectores">
                <p>Disciplina</p>
                <select  >
                  <option selected disabled hidden value="">Seleccione</option>
                  <option >Futbol</option>
                  <option>Futbol sala</option>
                  <option>Microfutbol</option>
                </select>
              </div>
              <div className="selectores">
                <p>Categoria</p>
                <select  >
                  <option selected disabled hidden value="">Seleccione</option>
                  <option>Femenino</option>
                  <option>Masculino</option>
                  <option>Mixto</option>
                </select>
              </div>
              <div className="selectores">
                <p>Modalidad</p>
                <select  >
                  <option selected disabled hidden value="">Seleccione</option>
                  <option>Interfichas</option>
                  <option>Relampago</option>
                </select>
              </div>
            </div>
        <div class="AlineacionDeFechas">
            <fieldset>
              <legend>Fechas de inscripciones</legend>

              <Boton fechaText="Fecha de Inicio" />
              <Boton fechaText="Fecha de finalizacion" />
            </fieldset>
            <fieldset>
              <legend>Fechas de Campeonato</legend>
           
              <Boton fechaText="Fecha de Inicio" />
              <Boton fechaText="Fecha de Finalizacion" />

              </fieldset>
            </div>
            </div>

            <div class="Dias_Cantidad">
                <p class="textoDiasDefinidos">Dias definidos</p>
                 {/* <svg value={setBotonVer} onClick={handleClickAbrir} class="botonVerCalendario" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" 
                hover="red"
                stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg> */}
                <Calendarioo/>
              {/* <div class="EspacioCalendario">
                { {BotonVer === 'calendar' && <Calendarioo/> } }
              
                </div> */}
            <div class="AlineacionDeMinYMax">
            <div class="min_max" >
              <label>Cantidad minima</label>
              <input  class="minMax" type="number" name="cantidad" min="0" max="20" step="1" />
            </div>
            <div class="min_max" >
              <label>Cantidad maxima</label>
              <input  class="minMax" type="number" name="cantidad" min="0" max="20" step="1" />
            </div>
            </div>

          
            </div>
            

          </form>
          <div class="DivBotonGuardar">
            <div class="BotonGuadar " active value={setGuardarCambios} onClick={handleGuardar}>
             
              Guardar
              
            </div>
            </div> 
        </div>
       
      </div>


    </>
  )
}
