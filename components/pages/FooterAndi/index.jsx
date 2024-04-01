import '../../../src/styles/footerAndi/main.css'
export default function Footer() {
    return (
        <footer class="footer">
            <div class="fuct">
                <div class="footer-content">
                    <h3>GoSport</h3>
                    <p>Vive la emoción de jugar tu deporte favorito</p>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Términos y condiciones</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h3>Síguenos en redes sociales</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>Contacto</h3>
                    <p>Email: info@example.com</p>
                    <p>Teléfono: +123456789</p>
                </div>
            </div>
        </footer>


    )
}