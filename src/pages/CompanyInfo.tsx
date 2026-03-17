import React from 'react'
import { CustomHeader } from '../shared/CustomHeader'
import CustomFooter from '../shared/CustomFooter'

import "../styles/CompanyInfo.css"

export const CompanyInfo = () => {
  return (
    <div>
        <CustomHeader/>

        <div className="company-info">
            <h1 className="company-info-title">Información Para Empresas</h1>
            <h2>En esta sección encontrarás toda la información necesaria sobre nuestro servicio.</h2>

            <div className="company-info-content">
                <div className="company-info-content-item">
                    <div className="company-info-what-is-desportes">
                    <div className="company-info-content-item-text">
                        <h2 className="company-info-subtitle">¿Qué es Desportes?</h2>
                        <p className="company-info-text">Desportes es una plataforma que permite a las empresas gestionar sus 
                        reservas de espacios deportivos de manera online. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus sed ante laoreet, placerat elit in, tristique diam. 
                        Nulla ultrices imperdiet quam id eleifend. Donec mollis dignissim porttitor. 
                        Nunc rutrum lectus et tortor gravida, in euismod neque tempor. 
                        Suspendisse eu tempor risus. Cras id egestas turpis. 
                        Sed augue justo, volutpat quis blandit id, suscipit a nisl. 
                        Sed et ligula dolor. Pellentesque faucibus accumsan auctor. 
                        Vestibulum sit amet gravida mi. 
                        Proin tortor magna, pretium quis gravida eget, posuere vitae nisi. 
                        Nulla mattis magna eget dolor bibendum, at accumsan nisi imperdiet. 
                        Aenean ac lacus lorem. Praesent in consectetur enim, interdum finibus lacus.</p>
                    </div>
                    <div className="company-info-content-item-image">
                        <img src="../public/placeholder-image.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="company-info-why-choose-us">
                    <div className="company-info-content-item-text">
                        <h2 className="company-info-subtitle">¿Por qué elegirnos?</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h1>300K+</h1>
                            <h3>Usuarios mensuales recurrentes.</h3>
                        </div>
                        <div className="feature-card">
                            <h1>24</h1>
                            <h3>Polideportivos disponibles entre los que elegir.</h3>
                        </div>
                        <div className="feature-card">
                            <h1>500K+</h1>
                            <h3>Reseñas positivas de usuarios.</h3>
                        </div>
                    </div>
                </div>

                <div className="company-info-content-item">
                    <div className="company-info-content-item-text">
                        <h2 className="company-info-subtitle">¿Qué beneficios ofrece Desportes?</h2>
                    </div>
                    <div className="company-info-benefits">
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h1>Eficiencia</h1>
                            <img src="../public/icons/logo-efficiency-benefits.png" alt="eficiencia"></img>
                            <h3>Análisis a tiempo real de tus pistas que te permite incrementar los cupos, ç
                                reducir cancelaciones y maximizar la eficiencia de tus pistas.</h3>
                        </div>
                        <div className="benefit-card">
                            <h1>Lealtad</h1>
                            <img src="../public/icons/logo-loyalty-benefits-gray.png" alt="lealtad"></img>
                            <h3>Los usuarios amarán lo simple que es conseguir una reserva, 
                                lo cual te permitirá centrarte en su experiencia.</h3>
                        </div>
                        <div className="benefit-card">
                            <h1>Crecimiento</h1>
                            <img src="../public/icons/logo-growth-benefits.png" alt="crecimiento"></img>
                            <h3>Usar nuestra plataforma permitirá que tu negocio crezca 
                                de manera exponencial.</h3>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="company-info-content-item">
                    <div className="user-review-card-grid">
                        <div className="user-review-card">
                            <div className="user-review-card-header">
                                <img src="" alt="Usuario 1" />
                                <div className="user-review-card-header-info">
                                    <h2>Usuario 1</h2>
                                    <h3>5.0</h3>
                                </div>
                            </div>
                            <div className="user-review-card-body">
                                <p>Excelente servicio, recomiendo a todos.</p>
                            </div>
                        </div>
                        <div className="user-review-card">
                            <div className="user-review-card-header">
                                <img src="../assets/user-default-icon.png" alt="Usuario 1" />
                                <div className="user-review-card-header-info">
                                    <h2>Usuario 1</h2>
                                    <h3>5.0</h3>
                                </div>
                            </div>
                            <div className="user-review-card-body">
                                <p>Excelente servicio, recomiendo a todos.</p>
                            </div>
                        </div>
                        <div className="user-review-card">
                            <div className="user-review-card-header">
                                <img src="" alt="Usuario 1" />
                                <div className="user-review-card-header-info">
                                    <h2>Usuario 1</h2>
                                    <h3>5.0</h3>
                                </div>
                            </div>
                            <div className="user-review-card-body">
                                <p>Excelente servicio, recomiendo a todos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company-info-content-item">
                    <h2>Contacta Con Nuestros Expertos</h2>
                    <p>Si tienes alguna duda, no dudes en contactarnos usando el formulario de abajo.</p>
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
                </div>
            </div>
        </div>

        <CustomFooter/>
    </div>
  )
}
