import React, { useContext, useEffect, useState } from 'react'
import { CustomHeader } from '../shared/CustomHeader'
import { UserContext } from '../context/user.context'
import { CustomInput } from '../shared/CustomInput'
import CustomFooter from '../shared/CustomFooter'
import '../styles/UserProfile.css'

export const UserProfile = () => {
    const { user, updateUser, fetchPreviousBookings } = useContext(UserContext);
    const [activeTab, setActiveTab] = useState<'perfil' | 'reservas' | 'pagos'>('perfil');

    const [bookings, setBookings] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        username: user?.username || '',
        name: user?.fullName || '',
        email: user?.email || '',
        phone: user?.phone || '',
        birthDate: user?.birthDate || ''
    });
    

    useEffect(() => {
        if (activeTab === 'reservas' && user?.email) {
            fetchPreviousBookings(user.email).then(data => setBookings(data));
        }
    }, [activeTab, user?.email, fetchPreviousBookings]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateUser(formData.username, formData.name, formData.email, formData.phone, formData.birthDate);
    };

    return (
        <div className="profile-page-container">
            <CustomHeader />
            <main className="profile-page-wrapper">
                <h1 className="profile-title">Datos de Usuario</h1>
                <div className="profile-container">
                    <aside className="profile-sidebar">
                        <div className="sidebar-header">
                            <div className="profile-pic-container">
                                <img src="src/assets/user-default-icon.png" alt="Perfil" />
                            </div>
                            <h3 className="sidebar-user-name">{user?.username}</h3>
                            <p className="sidebar-user-email">{user?.email}</p>
                        </div>

                        <nav className="sidebar-nav">
                            <button 
                                className={`sidebar-nav-item ${activeTab === 'perfil' ? 'active' : ''}`}
                                onClick={() => setActiveTab('perfil')}
                            >
                                <span className="nav-icon">👤</span>
                                <span>Datos de Usuario</span>
                            </button>
                            <button 
                                className={`sidebar-nav-item ${activeTab === 'reservas' ? 'active' : ''}`}
                                onClick={() => setActiveTab('reservas')}
                            >
                                <span className="nav-icon">📅</span>
                                <span>Reservas Previas</span>
                            </button>
                            <button 
                                className={`sidebar-nav-item ${activeTab === 'pagos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('pagos')}
                            >
                                <span className="nav-icon">💳</span>
                                <span>Datos de Pago</span>
                            </button>
                        </nav>
                    </aside>

                    <section className="profile-content">
                        {activeTab === 'perfil' && (
                            <div className="section-container">
                                <div className="section-header">
                                    <h2 className="section-title">Datos Personales</h2>
                                    <p className="section-subtitle">Gestiona tu información personal y cómo te ven los demás.</p>
                                </div>
                                <form className="profile-form" onSubmit={handleSubmit}>
                                    <CustomInput 
                                        labelText="Nombre de Usuario"
                                        inputId="username"
                                        inputName="username"
                                        inputType="text"
                                        isRequired={true}
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                    />
                                    <CustomInput 
                                        labelText="Nombre Completo"
                                        inputId="name"
                                        inputName="name"
                                        inputType="text"
                                        isRequired={true}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                    />
                                    <div className="form-full-width">
                                        <CustomInput 
                                            labelText="Correo Electrónico"
                                            inputId="email"
                                            inputName="email"
                                            inputType="email"
                                            isRequired={true}
                                            disabled={true}
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="profile-input"
                                            labelLink={{
                                                text: "¿Has olvidado tu contraseña?",
                                                href: "/recuperar",
                                                className: "forgot-password-link"
                                            }}
                                        />
                                    </div>
                                    <CustomInput 
                                        labelText="Teléfono"
                                        inputId="phone"
                                        inputName="phone"
                                        inputType="tel"
                                        isRequired={false}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                    />
                                    <CustomInput 
                                        labelText="Fecha de Nacimiento"
                                        inputId="birthDate"
                                        inputName="birthDate"
                                        inputType="date"
                                        isRequired={false}
                                        value={formData.birthDate}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                    />
                                    <button type="submit">Guardar Cambios</button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'reservas' && (
                            <div className="section-container">
                                <div className="section-header">
                                    <h2 className="section-title">Mis Reservas</h2>
                                    <p className="section-subtitle">Consulta el historial de tus actividades deportivas.</p>
                                </div>
                                <div className="reservations-list">
                                    {bookings.length > 0 ? (
                                        bookings.map((booking, index) => (
                                            <div className="reservation-card" key={index}>
                                                <div className="reservation-info">
                                                    <h4>{booking.court.name || "Reserva sin nombre"}</h4>
                                                    <p>Reservada para el {new Date(booking.date).toLocaleDateString('es-ES')} a las {booking.startTime}</p>
                                                </div>
                                                <span className={`reservation-status ${booking.status === 'completed' ? 'status-completed' : ''}`}>
                                                    {booking.status || 'Pendiente'}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="section-subtitle">No tienes reservas previas.</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'pagos' && (
                            <div className="section-container">
                                <div className="section-header">
                                    <h2 className="section-title">Métodos de Pago</h2>
                                    <p className="section-subtitle">Administra tus tarjetas y opciones de facturación.</p>
                                </div>
                                <div className="profile-form">
                                    <div className="form-full-width">
                                        <CustomInput 
                                            labelText="Titular de la tarjeta"
                                            inputId="cardHolder"
                                            inputName="cardHolder"
                                            inputType="text"
                                            isRequired={false}
                                            value={user?.fullName}
                                            onChange={() => {}}
                                            className="profile-input"
                                        />
                                    </div>
                                    <CustomInput 
                                        labelText="Número de Tarjeta"
                                        inputId="cardNumber"
                                        inputName="cardNumber"
                                        inputType="text"
                                        placeholder="**** **** **** 1234"
                                        isRequired={false}
                                        value=""
                                        onChange={() => {}}
                                        className="profile-input"
                                    />
                                    <CustomInput 
                                        labelText="Fecha de Expiración"
                                        inputId="expiry"
                                        inputName="expiry"
                                        inputType="text"
                                        placeholder="MM/YY"
                                        isRequired={false}
                                        value=""
                                        onChange={() => {}}
                                        className="profile-input"
                                    />
                                    <button type="submit">Actualizar Método de Pago</button>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </main>
            <CustomFooter />
        </div>
    )
}
