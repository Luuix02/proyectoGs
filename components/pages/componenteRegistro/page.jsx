'use client'
import { registroUser } from '@/lib/api';
import '../../../src/styles/styleRegistro/styleRegistro.css'

export default function RegisterUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try{
      await registroUser(data);
      alert('Usuario registrado correctamente');
    } catch (error){
      alert (error.message);
    }
  };

  return (
    <div className="contenedorPadreRegisro">
      <div className="contenedorFormularioReg">
        <h1 className="tituloPrincipal">Regístrate en GoSport</h1>
        <h2 className="tituloSecundario">Queremos saber un poco de ti, por favor llena el formulario completo</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="nombres"
                placeholder="Ingresa tus nombres completos"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="telefono"
                placeholder="Ingresa tu número de celular"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="identificacion"
                placeholder="Ingresa tus número de identificación"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="programa"
                placeholder="Ingresa el programa que estás cursando"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="ficha"
                placeholder="Ingresa tu número de ficha"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                id="finFicha"
                placeholder="Ingresa fecha de terminación del programa"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="correo"
                placeholder="Ingresa tu correo electrónico"
                className="campoDato"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="contrasena"
                placeholder="Crea tu contraseña"
                className="campoDato"
              />
            </div>
          </div>
          <div className="form-group-btn">
            <button className="Registrar">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}