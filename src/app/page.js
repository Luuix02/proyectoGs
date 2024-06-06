
'use client'

import Footer from "../../components/pages/FooterLanding";
import Header from "../../components/pages/Navbar";
import RootLayout from "./layout";

import '../styles/loanding/main.css';

import Aos from 'aos'
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <RootLayout backgroundImage={false}>
        <div class="pagesPri">

          <div class="Conten">
            <Header />
            <div class="Sub-cont">
              <div class="Sub-cont-d">
                <p class="cont-p">
                  Crea campeonatos inolvidables. ¡Dale vida a la competencia y
                  eleva el espíritu deportivo! ¿Estás listo para ser parte de la
                  experiencia?{" "}
                </p>
                <button class="shadow__btn">
                  Unete Ahora
                </button>

              </div>
            </div>
          </div>

          {/* Seccion Administrador */}

          <div className="section-admin">

            <div className="admin-pc" data-aos="fade-right" >
              <img className="flotante"
                src="\images\landing\video.png" alt="img" />
            </div>

            <div className="admin-icons">
              <div className="admin-text">
                <h3 className="admin-title">PARA ORGANIZADORES</h3>
                <p className="admin-title-p">Optimiza la gestión de tus torneos con nuestra plataforma, convierte tus ideas en experiencias inolvidables.</p>
              </div>

              <div className="admin-rest">

                <div className="admin-icon">
                  <div className="admin-icon-img">
                    <img data-aos="zoom-in-down"
                      src="images\landing\administracion.png" alt="img" />
                  </div>
                  <div className="admin-info">
                    <p className="admin-icon-p">Facilidad de creación</p>
                    <p className="admin-icon-st">Crea campeonatos en cuestión de minutos con nuestro proceso intuitivo y amigable.</p>
                  </div>

                </div>
                <div className="admin-icon">
                  <div className="admin-icon-img">
                    <img data-aos="zoom-in-down"
                      src="images\landing\bingo.png" alt="img" />
                  </div>
                  <div className="admin-info">
                    <p className="admin-icon-p">Sorteo automático de equipos</p>
                    <p className="admin-icon-st">Di adiós a las complicaciones. Deja que nuestro sistema inteligente distribuya los equipos de manera justa y aleatoria.</p>
                  </div>
                </div>
                <div className="admin-icon">
                  <div className="admin-icon-img">
                    <img data-aos="zoom-in-down"
                      src="images\landing\project.png" alt="img" />
                  </div>
                  <div className="admin-info">
                    <p className="admin-icon-p">Cronogramas personalizados</p>
                    <p className="admin-icon-st">Di adiós a las complicaciones. Deja que nuestro sistema inteligente distribuya los equipos de manera justa y aleatoria.</p>
                  </div>


                </div>

              </div>
            </div>

          </div>


          {/* Sesion Jugador */}

          <div className="section-player">

            <div className="player-icons">
              <div className="player-text">
                <h3 className="admin-title" data-aos="fade-up-right" >PARA JUGADORES</h3>
                <p className="admin-title-p">Regístrate y participa en campeonatos exclusivos en nuestra plataforma para amantes del juego.</p>
              </div>

              <div className="player-rest">

                <div className="admin-icon">
                  <div className="player-icon-img">
                    <img data-aos="zoom-in-down"
                      src="images\landing\estadisticas.png" alt="img" />
                  </div>
                  <div className="admin-info">
                    <p className="admin-icon-p">Explora campeonatos </p>
                    <p className="admin-icon-st">Crea campeonatos en cuestión de minutos con nuestro proceso intuitivo y amigable.</p>
                  </div>
                </div>
                <div className="admin-icon">
                  <div className="admin-icon-img">
                    <img data-aos="zoom-in-down"
                      src="images\landing\view.png" alt="img" />
                  </div>
                  <div className="admin-info">
                    <p className="admin-icon-p">Visualiza participantes</p>
                    <p className="admin-icon-st">Explora quiénes son todos los participantes y capitanes de los equipos.</p>
                  </div>
                </div>
                <div className="admin-icon">
                  <div className="admin-icon-img">
                    <img data-aos="zoom-in-down"
                      src="images\landing\bingo.png" alt="img" />
                  </div>
                  <div className="admin-info">
                    <p className="admin-icon-p">Estadísticas en tiempo real</p>
                    <p className="admin-icon-st">Crea campeonatos en cuestión de minutos con nuestro proceso intuitivo y amigable.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="player-lapto" data-aos="fade-left">
              <img className="flotante"
                src="\images\landing\chat.png" alt="img" />
            </div>

          </div>

          <section class="section-3" id="section_dow">
            <div class="Bienestar section-3-div">
              <h1 class="section-3-h1">Equipo Bienestar al Aprendiz</h1>
              <h5 class="section-3-h5"> ¿Quiénes somos?</h5>
              <p class="section-3-p">
                Equipo encargado de gestionar y realizar acciones para el
                bienestar de sus aprendices en el marco de los planes, politicas
                y normativas institucionales.
              </p>

              <div class="sub-section-div">
                <div className="sub-section-div2">
                  <img
                    className="sub-section-div-img"
                    src="\images\BienesApren\TeamAp.jpg"
                    alt=""
                  />
                </div>

                <div className="section-3-p3">
                  <h4 class="section-3-p2 index-1">Nuestro propósito</h4>
                  <p class="">
                    "Promover la inclusión y la diversidad a través del deporte,
                    creando espacios donde todas las personas,
                    independientemente de sus capacidades físicas o condiciones
                    socioeconómicas, puedan participar y disfrutar de los
                    beneficios del ejercicio físico, fortaleciendo así la
                    cohesión social y el respeto mutuo."
                  </p>

                </div>
              </div>

              <div className="section-3-p4" id="section_ft">
                <div className="section-3-p4-div">
                  <h4 class="section-3-p2">GoSport DG</h4>
                  <p class="section-3-pp ">
                    Uno de nuestros propósitos es fomentar la practica del
                    deporte y la actividad fisica para el desarrollo de habitos
                    de vida saludable, el adecuado uso del tiempo libre y el
                    desarrollo de habilidades socioemocionales apoyando al
                    proceso de formacion integral.
                  </p>
                </div>
                <div className="section-3-subdiv">
                  <img src="\images\BienesApren\Colombia.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
          <div class="footerd">
            <Footer />
          </div>
        </div>
      </RootLayout>
    </>
  );
}
