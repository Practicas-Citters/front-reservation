import { CustomHeader } from '../shared/CustomHeader'
import CustomFooter from '../shared/CustomFooter'
import { Link } from 'react-router'

import '../styles/ContactUs.css'

export const ContactUs = () => {
  return (
    <div className="contact-page-wrapper">
        <CustomHeader/>
        <main className="contact-us-container">
            <h1>Servicio de Contacto</h1>
            <h3>Gracias por usar nuestro servicio. Si necesitas ayuda, no dudes en contactarnos usando el formulario de abajo.</h3>
            <div className="contact-schedule">
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados y Domingos: Cerrado</p>
                <p>Si necesitas ayuda fuera de este horario, por favor, envíanos un correo electrónico y te responderemos lo antes posible.</p>
            </div>
            <div className="contact-us-form">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre Completo:</label>
                        <input type="text" className="form-control" id="name" placeholder="Inserta tu nombre aquí..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                        <input type="email" className="form-control" id="email" placeholder="Inserta tu email aquí..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono:</label>
                        <input type="phone" className="form-control" id="phone" placeholder="Inserta tu teléfono aquí..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="reason" className="form-label">Motivo de Contacto:</label>
                        <select className="form-select" id="reason" name="reason" defaultValue="">
                            <option value="" disabled>Selecciona un motivo...</option>
                            <option value="ayuda-reserva">Necesito ayuda con una de mis reservas.</option>
                            <option value="pregunta-servicio">Tengo una pregunta sobre el servicio.</option>
                            <option value="sugerencia">Quiero hacer una sugerencia.</option>
                            <option value="queja">Quiero hacer una queja.</option>
                            <option value="otro">Otro.</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" rows={3} placeholder="Escribe tu mensaje aquí..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Información de Contacto</h3>
                <p>Teléfono: 123-456-7890</p>
                <p>Email: [EMAIL_ADDRESS]</p>
                <p>Dirección: 123 Calle Falsa, Ciudad, País</p>
            </div>
            <div className="FAQ">
                <h3>Preguntas Frecuentes</h3>
                <p>¿Tienes dudas? Consulta nuestra página de <Link to="/faq">Preguntas Frecuentes</Link>.</p>
            </div>
        </main>
        <CustomFooter/>
    </div>
  )
}
