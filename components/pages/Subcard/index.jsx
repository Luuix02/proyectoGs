import '../../../src/styles/Cards/index.css';
export default function Subcard() {
    return (
        <>
            <section class="card-section">
                <div class="card-row">
                    <div class="card-item container-1">
                        <img src="\images\Cards\Card-1.jpg" alt="img" />
                        <h4 class="card-title">Facilidad de creación</h4>
                        <p class="card-description">Crea campeonatos en cuestión de minutos con nuestro proceso intuitivo y amigable.</p>
                    </div>
                    <div class="card-item container-2">
                        <img src="\images\Cards\Card-2.jpg" alt="img" />
                        <h4 class="card-title">Sorteo automático de equipos</h4>
                        <p class="card-description">Di adiós a las complicaciones. Deja que nuestro sistema inteligente distribuya los equipos de manera justa y aleatoria.</p>
                    </div>
                    <div class="card-item container-3">
                        <img src="\images\Cards\Card-3.jpg" alt="img" />
                        <h4 class="card-title">Cronogramas personalizados</h4>
                        <p class="card-description">Elabora tus cronogramas flexibles y personalizables para adaptarse a cualquier estilo de campeonato.</p>
                    </div>
                </div>
                <p class="card-pa">Únete a nosotros y experimenta el juego como te gusta,
                    estamos aquí para hacer que cada torneo sea una experiencia única.
                    ¡Regístrate ahora y prepárate para la próxima aventura!
                </p>
                <button class="boton"
                    type="submit">Registrarse</button>

            </section>

        </>
    )
}