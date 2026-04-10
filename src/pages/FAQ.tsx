import React, { useState } from 'react'
import { CustomHeader } from '../shared/CustomHeader'
import CustomFooter from '../shared/CustomFooter'
import "../styles/FAQ.css"
import { Button } from '@mui/material'



const FAQ = () => {

    const dropdownButtonStyle =
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

    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const renderSection = (id: string, title: string, content: React.ReactNode) => (
        <>
            <Button
                variant="contained"
                color="primary"
                sx={dropdownButtonStyle}
                onClick={() => toggleSection(id)}
            >
                {openSection === id ? `- ${title}` : `+ ${title}`}
            </Button>
            {openSection === id && (
                <div className="faq-answer">
                    {content}
                </div>
            )}
        </>
    );

  return (
    <div>
        <CustomHeader/>

        <div className="faq-page">
            <div className="faq-title">
                <h1>Preguntas Frecuentes</h1>
                <p>En muchas ocasiones los jugadores escribís al 
                    soporte de KinesisPlay para que os ayudemos con 
                    ciertos temas que os surgen cuando hacéis reservas 
                    a través de nuestra plataforma, pero, 
                    aunque la reserva la hayáis realizado a través de KinesisPlay, 
                    hay algunos casos en los que son los clubes los que 
                    tienen que gestionarlo. </p>
                    <br/>
                    <p>Aquí queremos dejaros un resumen de 
                    estos casos y una pequeña explicación para 
                    recordaros cómo debéis actuar:</p>
            </div>
            <div className="faq-content">
                {renderSection('pregunta-1', '¿Cómo puedo anular una reserva?',
                    <p>Para anular una reserva, accede a tu perfil, ve a "Mis Reservas" y selecciona la reserva que deseas cancelar. Pulsa el botón de cancelar y confirma la acción.</p>
                )}
                {renderSection('pregunta-2', '¿Puedo cancelar una reserva si llueve?',
                    <p>Sí, si las condiciones meteorológicas impiden el uso de la pista, puedes solicitar la cancelación sin coste. Contacta con el club o cancela desde tu perfil.</p>
                )}
                {renderSection('pregunta-6', '¿Cómo puedo obtener un reembolso?',
                    <p>Los reembolsos se procesan automáticamente si cancelas con al menos 24 horas de antelación. Para cancelaciones tardías, contacta con nuestro soporte.</p>
                )}
                {renderSection('pregunta-3', '¿Cómo puedo modificar mi reserva?',
                    <p>Desde la sección "Mis Reservas" en tu perfil puedes modificar la fecha y hora de tu reserva, siempre que haya disponibilidad en el nuevo horario.</p>
                )}
                {renderSection('pregunta-4', '¿Qué puedo hacer si un jugador tiene mala conducta?',
                    <p>Puedes reportar la incidencia a través de nuestro formulario de contacto o directamente al club. Tomaremos las medidas necesarias según nuestra política de convivencia.</p>
                )}
                {renderSection('pregunta-5', 'El club en el que he reservado está cerrado. ¿Qué hago?',
                    <p>Si el club está cerrado inesperadamente, recibirás un reembolso completo automáticamente. También puedes contactar con soporte para reubicar tu reserva en otro club cercano.</p>
                )}
            </div>
        </div>

        <CustomFooter/>
    </div>
  )
}

export default FAQ