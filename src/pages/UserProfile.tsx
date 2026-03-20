import React, { useContext, useEffect, useState } from 'react'
import { CustomHeader } from '../shared/CustomHeader'
import { UserContext } from '../context/user.context'
import { CustomInput } from '../shared/CustomInput'
import CustomFooter from '../shared/CustomFooter'
import '../styles/UserProfile.css'
import { useCourts } from '../hooks/useBooking'
import { Link } from 'react-router';
import { Button } from '@mui/material';

export const UserProfile = () => {
    const { user, isAuthenticated, updateUser, fetchPreviousBookings, favoriteCourts, addFavoriteCourt, removeFavoriteCourt } = useContext(UserContext);
    const [activeTab, setActiveTab] = useState<'perfil' | 'reservas' | 'pagos' | 'favoritos'>('perfil');

    const [bookings, setBookings] = useState<any[]>([]);
    const { data: Courts = [], isLoading: isLoadingCourts } = useCourts();
    const [formData, setFormData] = useState({
        username: user?.username || '',
        name: user?.fullName || '',
        email: user?.email || '',
        phone: user?.phone || '',
        birthDate: user?.birthDate || ''
    });
    

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username || '',
                name: user.fullName || '',
                email: user.email || '',
                phone: user.phone || '',
                birthDate: user.birthDate || ''
            });
        }
    }, [user]);

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

    const toggleFavorite = (e: React.MouseEvent, courtId: string) => {
    e.stopPropagation();
    if (isAuthenticated) {
      if (!favoriteCourts.includes(courtId)) {
        addFavoriteCourt(courtId);
      } else {
        removeFavoriteCourt(courtId);
      }
    }
  };

    return (
        <div className="profile-page-container">
            <CustomHeader />
            <main className="profile-page-wrapper">
                <h1 className="profile-title">Mi Perfil</h1>
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
                                <span>Mis Reservas</span>
                            </button>
                            <button 
                                className={`sidebar-nav-item ${activeTab === 'favoritos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('favoritos')}
                            >
                                <span className="nav-icon">⭐</span>
                                <span>Mis Favoritos</span>
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
                                        bookings.filter(booking => booking.status === 'confirmed').map((booking, index) => (
                                            <div className="reservation-card" key={index}>
                                                <div className="reservation-info">
                                                    <h4>{booking.court.name || "Reserva sin nombre"}</h4>
                                                    <p>Reservada para el {new Date(booking.date).toLocaleDateString('es-ES')} a las {booking.startTime}</p>
                                                </div>
                                                <span className={`reservation-status ${booking.status === 'completed' ? 'status-completed' : ''}`}>
                                                    {booking.status || 'Desconocido'}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="section-subtitle">No tienes reservas previas.</p>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'favoritos' && (
                            <div className="section-container">
                                <div className="section-header">
                                    <h2 className="section-title">Mis Favoritos</h2>
                                    <p className="section-subtitle">Encuentra aquí tus pistas favoritas guardadas.</p>
                                </div>
                                <div className="favorites-list">
                                    {favoriteCourts.length > 0 ? 
                                    (
                                        Courts.filter(court => favoriteCourts.includes(court.id)).map((court) => (
                                            <div className="favorite-card" key={court.id}>
                                                <div className="favorite-info">
                                                    <h4>{court.name || "Pista sin nombre"}</h4>
                                                    <p>{court.location}</p>
                                                    <div className="favorite-court-image">
                                                        <img className='court-image' src={court.image} alt={court.name} />
                                                    </div>
                                                    <Button 
                                                        component={Link}
                                                        to={`/reservar?courtId=${court.id}`}
                                                        variant="contained" 
                                                        sx={{
                                                            backgroundColor: 'var(--primary)',
                                                            fontSize: '1.2rem',
                                                            color: 'var(--text-main)',
                                                            fontWeight: 700,
                                                            marginTop: '10px',
                                                            border: '2px solid var(--glass-border)',
                                                            borderRadius: '12px',
                                                            textTransform: 'none',
                                                            fontFamily: 'inherit',
                                                            '&:hover': {
                                                                backgroundColor: 'var(--primary-dark)',
                                                                transform: 'translateY(-2px)',
                                                            },
                                                            transition: 'all 0.3s ease'
                                                        }}>Reservar otra vez</Button>
                                                </div>
                                                <button 
                                                    className={`favorite-button ${favoriteCourts.includes(court.id) ? 'active' : ''}`}
                                                    onClick={(e) => toggleFavorite(e, court.id)}
                                                    title={favoriteCourts.includes(court.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                                                >
                                                    {favoriteCourts.includes(court.id) ? '★' : '☆'}
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="section-subtitle">No tienes ninguna pista marcada como favorita.</p>
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
