

import Cards from "../../components/pages/Card";

import Header from "../../components/pages/Navbar";
import Subcard from "../../components/pages/Subcard";
import "./page.module.css";

export default function Home() {
  return (
    
    <body className="bodyLandingPage">
      <div class="Conten">
        <Header />

        <div class="Sub-cont">
          <p class="cont-p">Crea campeonatos inolvidables. ¡Dale vida a la competencia
            y eleva el espíritu deportivo! ¿Estás listo para ser parte
            de la experiencia? </p>
          <div>
            <button type="submit">¡Unete ahora!</button>
          </div>
        </div>
        <div class="photo">
          <img class="photo-1"
            src="\images\imgLanding\futbol-sala.png" alt="" />
          <img class="photo-2"
            src="\images\imgLanding\section1.png" alt="" />
        </div>
      </div>

      <section class="section-2">
        <h2 class="title">PARA ORGANIZADORES</h2>

        <p class="title-2">Domina la organización de tus torneos como  nunca antes</p>

        <p class="title-3">¡Bienvenido a nuestro exclusivo espacio para organizadores de campeonatos!
          En nuestro software, te ofrecemos la plataforma perfecta para dar vida a
          tus ideas y convertir tus campeonatos en experiencias inolvidables.
          ¿Por qué unirte a nosotros? Aquí tienes algunas razones irresistibles:
        </p>

      </section >
      <Cards />

      <section class="section-player">
        <h2 class="title">PARA JUGADORES</h2>

        <p class="title-2">Conviértete en campeón: Regístrate para participar de campeonatos exclusivos.</p>

        <p class="title-3">¡Sumérgete en la acción y vive la pasión de cada campeonato en nuestra
          plataforma diseñada para verdaderos amantes del juego! ¿Por qué deberías unirte a nosotros?
          Aquí tienes razones irresistibles:
        </p>
      </section>

      <Subcard />

      <section class="section-3">
        <div class="Bienestar section-3-div">
          <h1 class="section-3-h1">Equipo Bienestar al Aprendiz</h1>
          <h5 class="section-3-h5"> ¿Quiénes somos?</h5>
          <p class="section-3-p">Equipo encargado de gestionar y realizar acciones para el bienestar
            de sus aprendices en el marco de los planes, politicas y normativas
            institucionales.
          </p>

          <div class="sub-section-div">
            <div className="sub-section-div2">
              <img className="sub-section-div-img"
                src="\images\BienesApren\TeamAp.jpg" alt="" />
            </div>

            <div className="section-3-p3">
              <h4 class="section-3-p2 index-1">Nuestro propósito</h4>
              <p class="">"Promover la inclusión y la diversidad a través del deporte, creando espacios donde
                todas las personas, independientemente de sus capacidades físicas o condiciones socioeconómicas, puedan participar
                y disfrutar de los beneficios del ejercicio físico, fortaleciendo así la cohesión social y el respeto mutuo."</p>
            </div>
          </div>

          <div className="section-3-p4">
            <div className="section-3-p4-div">
              <h4 class="section-3-p2">GoSport DG</h4>
              <p class="section-3-pp ">Uno de nuestros propósitos es fomentar la practica del deporte y la actividad
                fisica para el desarrollo de habitos de vida saludable, el adecuado uso del tiempo
                libre y el desarrollo de habilidades socioemocionales apoyando al proceso de formacion
                integral.</p>

              <div class="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
              </div>
            </div>

            <div className="section-3-subdiv">
              <img
                src="\images\BienesApren\Colombia.jpg" alt="" />
            </div>

          </div>
        </div>
      </section>
    </body>
 
  );
}

