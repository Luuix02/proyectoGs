'use client'
import "../../../src/styles/Planilla/main.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const DatosEquipos = ({ id }) => {
  const [image, setImage] = useState()
  const [estadoImg, setEstadoImg] = useState()
  const [mensaje, setMensaje] = useState()
  const [jugadores, setJugadores] = useState([])
  const [jugador, setJugador] = useState()
  const [file, setFile] = useState()
  const [nombreEquipo, setNombreEquipo] = useState()
  const [nombreCapitan, setNombreCapitan] = useState()
  const [contactoUno, setContactoUno] = useState()
  const [contactoDos, setContactoDos] = useState()
  
  const handleImage =async (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file)) 
    setFile(file)
  }

  const submit = async(e) => {
    e.preventDefault()
    // const formData = new FormData();
    // formData.append("imageAgregar", file)

    // const respuesta = await fetch('/api/post',{
    //   method:'POST',
    //   body: formData
    // })

    // const dataImage = await respuesta.json()
    
    // setEstadoImg(dataImage.url)
    if(jugadores.length <10){
      console.log("Numero de jugadores no alcanzado")
    }else{
    const response = await axios.post('http://localhost:3001/inscripcionEquipos', {
      nombreEquipo: nombreEquipo,
      nombreCapitan: nombreCapitan,
      contactoUno: contactoUno,
      contactoDos: contactoDos,
      IdCampeonato: id,
      ganador: true,
      imgLogo: "imgshsshshs",
      participantes: jugadores
    })
    setMensaje(response.data.msg)
    console.log(response.data)
    Swal.fire({
      icon:"success",
      title: mensaje
    })

  }
  }

  const searchJugador = async (idenfiticacion) => {
    try {
      const response = await axios.get(`http://localhost:3001/usuarios/indentificacion/${idenfiticacion}`)
      console.log(response)
      const { value: formValues } = await Swal.fire({
        title: "Deseas agregar a este jugador",
        
        html: `
          <h1>${response.data.nombres}</h1>
          <input id="swal-input1" class="swal2-input" required  placeholder="Ingresa la ficha" >
          <input id="swal-input2" class="swal2-input" required  placeholder="Ingresa el dorsal" >
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value
          ];
        }
      });
      if (formValues) {
        Swal.fire({
          title:"Datos del jugador",
          showCancelButton: true,
          confirmButtonText: "Save",
          confirmButtonColor: "#04ff00",
          cancelButtonColor: "#d33",
          text: `Nombre ${response.data.nombres} \n 
          Ficha ${JSON.stringify(formValues[0])} \n
          Dorsal ${JSON.stringify(formValues[1])}`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Jugador guardado correctamente", "", "success");
            setJugadores(prev => [...prev,
               {nombreJugador:response.data.nombres,
                ficha:formValues[0],
                dorsal:formValues[1]
               }
              ])
          }
        });
      }
    } catch (error) {
      console.log(error)
      if(error){
        Swal.fire({
          icon: "error",
          title: "Jugador no registrado",
          text: `identificacion no encontrada ${idenfiticacion}`
        })
      }
    }
  }

  console.log(jugadores)
  return (
    <div className="principal">
      <div className="containerPlanillaIns">
        <div className="PlanHl">
            <form action="" onSubmit={submit}>
          <div className="Nosee">
              <div className="Tainer">
                <div>
                  <h2 className="tainer-h2">Planilla Inscripcion Equipo</h2>

                  <div className="mt-4">
                    <label className="mt-4-label" htmlFor="name">
                      Equipo
                    </label>
                    <input className="mt-4-input " type="text" onChange={e=> setNombreEquipo(e.target.value)} />
                  </div>

                  <div className="mt-4">
                    <label className="mt-4-label" htmlFor="address">
                      Capitan
                    </label>
                    <input className="mt-4-input" id="address" onChange={e=> setNombreCapitan(e.target.value)} />
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
                       onChange={e=>setContactoUno(e.target.value)}
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
                        onChange={e=> setContactoDos(e.target.value)}
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


          <div className="mt-4 table-container tablaIns w-10/12">
            <div className='buscador-compañeros'>
              <h1>Busca tus compañeros</h1>
              <input type="search" onChange={e => setJugador(e.target.value)} placeholder='Busca por su numero de cedula' />
              <button className='botonPlanillaInscrip' onClick={() => searchJugador(jugador)}>Buscar</button>
            </div>
            <table className="tablaPlanillaIns">
              <thead>
                <tr>
                  <th className="whill th1">N°</th>
                  <th className="whill">Nombre </th>
                  <th className="whill">Ficha </th>
                  <th className="whill th3">N° Dorsal </th>
                </tr>
              </thead>
              <tbody>
                {jugadores && jugadores.map((jugador, indice)=>(
              <tr key={indice}>
            <td className="whill">{indice}</td>
            <td>{jugador.nombreJugador}</td>
            <td>{jugador.ficha}</td>
            <td>{jugador.dorsal}</td>
            </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="ButtonPlanillaIns">
            <button className="botonPlanillaInscrip" type="submit"> Inscribir </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
