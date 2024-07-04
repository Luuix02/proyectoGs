import "../../../src/styles/Planilla/main.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const DatosEquipos = () => {
    const [image, setImage]=useState()
  const [estadoImg, setEstadoImg] = useState(false)
  const {id}= useParams() 
  const [mensaje, setMensaje] = useState()
    const {
        register, 
        handleSubmit,
        formState:{errors}} =useForm()

    const handleImage=(e)=>{
      const file = e.target.files[0]
      setImage(URL.createObjectURL(file))
    }

    const submit = handleSubmit(async(data)=>{

      const response = await axios.post('http://localhost:3001/inscripcionEquipos',{
        nombreEquipo: data.nombreEquipo,
        nombreCapitan: data.nombreCapitan,
        contactoUno: data.contactoUno,
        contactoDos: data.contactoDos,
        IdCampeonato: id
      })

      setMensaje(response.data)
    })

    return (
    <div className="PlanHl">
    <div className="Nosee">
      <div className="Tainer">
        <div>
        <h2 className="tainer-h2">Planilla Inscripcion Equipo</h2>

        <div className="mt-4">
          <label className="mt-4-label" htmlFor="name">
            Equipo
          </label>
          <input className="mt-4-input " type="text" {...register('nombreEquipo')} />
        </div>

        <div className="mt-4">
          <label className="mt-4-label" htmlFor="address">
            Capitan
          </label>
          <input className="mt-4-input" id="address" {...register('nombreCapitan')}/>
        </div>

        <div className="tunder">
          <div className="flex-1">
            <label className="text-black " htmlFor="city">
              Contacto
            </label>
            <input
              placeholder="Principal"
              className="m-4-input"
              id="city"
              type="text"
              {...register('contactoUno')}
            />
          </div>

          <div className="flex-1">
            <label className="text-black" htmlFor="state">

            </label>
            <input
              placeholder="Secundario"
              className="m-4-input"
              id="state"
              type="text"
              {...register('contactoDos')}
            />
          </div>
          </div>
      </div>
      <div class="card">
          <img className="imgLogoEquipo" src={image} alt="Logo Del Equipo" />
          <input type="file" onChange={handleImage} className="inpuntImg" />
          </div> 
     
        </div>
   
    </div>
  </div>
  )
}
