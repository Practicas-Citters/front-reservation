import { useState } from 'react'

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

    const renderSection = (id: string, title: string) => (
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
                    <p>Esta sección necesita ser completada con la información correspondiente.</p>
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
                    obligaciones con respecto a los servicios y/o productos que Desportes
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
                    {renderSection('servicio-1', 'Sección de Ejemplo')}
                    {renderSection('servicio-2', 'Sección de Ejemplo')}
                    {renderSection('servicio-3', 'Sección de Ejemplo')}

                    <h2>Condiciones</h2>
                    {renderSection('condicion-1', 'Sección de Ejemplo')}
                    {renderSection('condicion-2', 'Sección de Ejemplo')}
                    {renderSection('condicion-3', 'Sección de Ejemplo')}
                </div>

            </main>
            <CustomFooter />
        </div>
    )
}
