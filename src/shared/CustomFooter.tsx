import React from 'react'
import { Link } from 'react-router'
import "../index.css"


const CustomFooter = () => {
  return (
    <footer>
        <div className="custom-footer">
            <div className="footer-social-media">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" alt="TikTok" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" />
                </a>
            </div>
            <div className="footer-links">
                <Link className="footer-link" to="/">Inicio</Link>
                <Link className="footer-link" to="/terminos">Términos y Condiciones</Link>
                <Link className="footer-link" to="/politica-privacidad">Política de Privacidad</Link>
                <Link className="footer-link" to="/faq">FAQ</Link>
                <Link className="footer-link" to="/contacto">Contáctanos</Link>
            </div>
            <div className="footer-copyright">
                <p>© 2026 KinesisPlay. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}

export default CustomFooter
