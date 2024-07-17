
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/styles/styleEstadisticas/styleEditar.css'
import ContendedorIntegrante from './contendedorIntegrante'


export default function EditarPartido() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [integranteAmarillo1, setIntegranteAmarillo1] = useState(false)
  const [integranteAmarillo2, setIntegranteAmarillo2] = useState(false)
  const [integranteRojo1, setIntegranteRojo1] = useState(false)
  const [integranteRojo2, setIntegranteRojo2] = useState(false)
  const [integranteGol1, setIntegranteGol1] = useState(false)
  const [integranteGol2, setIntegranteGol2] = useState(false)
  useEffect(() => {

    const previSeconds = setInterval(() => {
      if (running) {
        setSeconds(seconds + 1)
      }
    }, 1000)
    return () => clearInterval(previSeconds)
  })
  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  }
  const reset = () => {
    setRunning(false)
    setSeconds(0)
  }
  const viewContainer = (number) => {
    if (number == 1) {
      (!integranteAmarillo1) ? setIntegranteAmarillo1(true) : setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
      setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteGol1(false)
      setIntegranteGol2(false)
    } else {
      (!integranteAmarillo2) ? setIntegranteAmarillo2(true) : setIntegranteAmarillo2(false)
      setIntegranteAmarillo1(false)
      setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteGol1(false)
      setIntegranteGol2(false)
    }
  }
  const redContainer = (number) => {
    if (number == 1) {
      (!integranteRojo1) ? setIntegranteRojo1(true) : setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
      setIntegranteGol1(false)
      setIntegranteGol2(false)
    } else {
      (!integranteRojo2) ? setIntegranteRojo2(true) : setIntegranteRojo2(false)
      setIntegranteRojo1(false)
      setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
      setIntegranteGol1(false)
      setIntegranteGol2(false)
    }
  }
  const GolContainer = (number) => {
    if (number == 1) {
      (!integranteGol1) ? setIntegranteGol1(true) : setIntegranteGol1(false)
      setIntegranteGol2(false)
      setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
    } else {
      (!integranteGol2) ? setIntegranteGol2(true) : setIntegranteGol2(false)
      setIntegranteGol1(false)
      setIntegranteRojo1(false)
      setIntegranteRojo2(false)
      setIntegranteAmarillo1(false)
      setIntegranteAmarillo2(false)
    }
  }

  return (
    <div className='father-main'>
      <section className='content-section'>

        <div className='content-team'>
          <div className='team-one'>
            <img className='img-team'
              src="/images/imageEstadistica/nacional.png" alt="img" />
            <h1 className='name-team'>Nacional</h1>
            <div className='faltas-santion'>
              <div>
                <img src="\images\Resultados\gol.png" alt="img"
                  onClick={() => GolContainer(1)} />
              </div>
              {integranteGol1 && <ContendedorIntegrante />}

              <div onClick={() => viewContainer(1)}>
                <img src="\images\Resultados\amarilla.png" alt="img" />
              </div>
              {integranteAmarillo1 && <ContendedorIntegrante />}

              <div onClick={() => redContainer(1)}>
                <img src="\images\Resultados\roja.png" alt="img" />
              </div>
              {integranteRojo1 && <ContendedorIntegrante />}

            </div>
          </div>

          <div className='time'>
            <p>Tiempo de juego</p>
            <div className='numero'>{seconds}</div>
          </div>

          <div className='team-two'>
            <img className='img-team'
              src="/images/imageEstadistica/MILONARIOS.png" alt="img" />
            <h1 className='name-team'>Millonarios</h1>
            <div className='faltas-santion'>
              <div>
                <img src="\images\Resultados\gol.png" alt="img"
                  onClick={() => GolContainer(2)} />
              </div>
              {integranteGol2 && <ContendedorIntegrante />}
              <div onClick={() => viewContainer(2)}>
                <img src="\images\Resultados\amarilla.png" alt="img" />
              </div>
              {integranteAmarillo2 && <ContendedorIntegrante />}
              <div onClick={() => redContainer(2)}>
                <img src="\images\Resultados\roja.png" alt="img" />
              </div>
              {integranteRojo2 && <ContendedorIntegrante />}
            </div>
          </div>
        </div>

        <div className='btn-time'>
          <button className='btn-init'
          onClick={start}>Iniciar partido</button>
          <button className='btn-init'
          onClick={stop}>Pausar</button>
          <button className='btn-init'
          onClick={reset}>Final del partido</button>
        </div>
      </section>
    </div>
  );
}
