import React, { useState } from 'react'

import { CustomHeader } from '../shared/CustomHeader'
import CustomFooter from '../shared/CustomFooter'
import { Button } from '@mui/material'

import "../styles/TermsandConds.css"

const termsButtonStyle =
{
    borderRadius: "10px",
    padding: "1rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    backgroundColor: "#2D344D",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    color: "var(--text-main)",
    marginTop: "1rem",
    textAlign: "left",
    justifyContent: "flex-start",
    "&:hover": {
        backgroundColor: "#2D344D",
        color: "var(--primary)",
        borderColor: "var(--primary)",
    },
}

export const TermsandConds = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const renderSection = (id: string, title: string, content: React.ReactNode) => (
        <>
            <Button
                variant="contained"
                color="primary"
                sx={termsButtonStyle}
                onClick={() => toggleSection(id)}
            >
                {openSection === id ? `- ${title}` : `+ ${title}`}
            </Button>
            {openSection === id && (
                <div className="terms-text-container">
                    {content}
                </div>
            )}
        </>
    );

    return (
        <div>
            <CustomHeader />
            <main className="terms-and-conds-container">
                <h1>Términos y Condiciones</h1>
                <p>En esta sección te compartimos toda la información relacionada a los derechos y
                    obligaciones con respecto a los servicios y/o productos que KinesisPlay
                    te ofrece, así como las obligaciones y derechos que adquieres al utilizar nuestra plataforma.
                    Te pedimos que leas detenidamente esta sección y conozcas nuestras políticas y condiciones
                    antes de acceder a nuestra plataforma y hacer uso de su contenido.</p>
                <strong><p className="last-update">Última actualización: 13 de marzo de 2026</p></strong>
                <div className="highlighted-sections">
                    <div className="highlighted-section-card">
                        <h3>Condiciones de Uso</h3>
                        <p>Esta sección necesita ser completada con la información correspondiente.</p>
                    </div>
                    <div className="highlighted-section-card">
                        <h3>Reservas y Pagos</h3>
                        <p>Esta sección necesita ser completada con la información correspondiente.</p>
                    </div>
                    <div className="highlighted-section-card">
                        <h3>Cancelaciones y Reembolsos</h3>
                        <p>Esta sección necesita ser completada con la información correspondiente.</p>
                    </div>
                    <div className="highlighted-section-card">
                        <h3>Política de Privacidad</h3>
                        <p>Esta sección necesita ser completada con la información correspondiente.</p>
                    </div>
                </div>
                <div className="terms-and-conds">
                    <h2>Términos del Servicio</h2>
                    {renderSection('servicio-1', 'Aceptación de los Términos',
                        <p>Al acceder y utilizar la plataforma KinesisPlay, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de ellos, te rogamos que no utilices nuestros servicios.</p>
                    )}
                    {renderSection('servicio-2', 'Uso de la Plataforma',
                        <p>La plataforma está destinada exclusivamente a la reserva de instalaciones deportivas. Queda prohibido cualquier uso indebido, incluyendo la suplantación de identidad, el uso automatizado o la alteración del funcionamiento del sistema.</p>
                    )}
                    {renderSection('servicio-3', 'Propiedad Intelectual',
                        <p>Todo el contenido de la plataforma, incluyendo textos, imágenes, logotipos y código fuente, es propiedad de KinesisPlay o de sus licenciantes y está protegido por las leyes de propiedad intelectual vigentes.</p>
                    )}

                    <h2>Condiciones</h2>
                    {renderSection('condicion-1', 'Política de Cancelación',
                        <p>Las cancelaciones realizadas con al menos 24 horas de antelación recibirán un reembolso completo. Las cancelaciones con menos de 24 horas podrán estar sujetas a un cargo parcial según la política del club.</p>
                    )}
                    {renderSection('condicion-2', 'Responsabilidad del Usuario',
                        <p>El usuario es responsable de mantener la confidencialidad de su cuenta y contraseña. Cualquier actividad realizada bajo tu cuenta será de tu responsabilidad. Notifícanos inmediatamente si detectas un uso no autorizado.</p>
                    )}
                    {renderSection('condicion-3', 'Modificaciones de los Términos',
                        <p>KinesisPlay se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en la plataforma. Te recomendamos revisar esta sección periódicamente.</p>
                    )}
                </div>

            </main>
            <CustomFooter />
        </div>
    )
}
