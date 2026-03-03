import Button from '@mui/material/Button'
import { Link } from 'react-router'
import { UserContext } from '../context/user.context'
import { useContext, useState } from 'react'

import { CustomTitle } from '../shared/CustomTitle'
import { CustomImage } from '../shared/CustomImage'

import '../styles/LandingPage.css'
import { Courts } from '../mock-data/court-mock-data'
import { Sports } from '../mock-data/sport-mock-data'
import CustomFooter from '../shared/CustomFooter'

const Landing = () => {
  const { isAuthenticated, user, logout } = useContext(UserContext);
  const [currentSportIndex, setCurrentSportIndex] = useState(0);

  const handlePrevSport = () => {
    setCurrentSportIndex((prev) => (prev === 0 ? Sports.length - 1 : prev - 1));
  };

  const handleNextSport = () => {
    setCurrentSportIndex((prev) => (prev === Sports.length - 1 ? 0 : prev + 1));
  };

  const getPrevIndex = () => (currentSportIndex === 0 ? Sports.length - 1 : currentSportIndex - 1);
  const getNextIndex = () => (currentSportIndex === Sports.length - 1 ? 0 : currentSportIndex + 1);

  return (
    <div>
      <header>
        <div className="logo-title">
          <div className="landing-page-logo">
            <CustomImage src="src\assets\logo.png" alt="logo" className="logo"></CustomImage>
          </div>
          <div className="landing-page-title">
            <Link to="/"><CustomTitle text="Desportes"></CustomTitle></Link>
          </div>
        </div>

        {isAuthenticated ? (
          <div className="user-menu">
            <CustomImage
              src="src/assets/user-default-icon.png"
              alt="Perfil"
              className="user-avatar"
            />
            <span className="user-greeting">
              Bienvenido, <strong>{user?.username}</strong>
            </span>
            <Button
              variant="outlined"
              onClick={logout}
              sx={{
                borderColor: 'var(--error)',
                color: 'var(--error)',
                fontWeight: 700,
                borderRadius: '12px',
                textTransform: 'none',
                fontFamily: 'inherit',
                '&:hover': {
                  borderColor: '#ff6b81',
                  backgroundColor: 'rgba(255, 71, 87, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Cerrar Sesión
            </Button>
          </div>
        ) : (
          <div className="log-in">
            <Link to="/login">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'var(--primary)',
                  color: '#000',
                  fontWeight: 700,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontFamily: 'inherit',
                  '&:hover': {
                    backgroundColor: 'var(--primary-dark)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/registro">
              <Button
                variant="outlined"
                sx={{
                  borderColor: 'var(--primary)',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontFamily: 'inherit',
                  '&:hover': {
                    borderColor: 'var(--primary-dark)',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Regístrate
              </Button>
            </Link>
          </div>
        )}
      </header>
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Reserva tu pista favorita en segundos.</h1>
          <p className="hero-description">¡Únete a Desportes y disfruta de la mejor experiencia de reserva de pistas deportivas!</p>
          <Link to="/reservar">
          <Button variant="contained" sx={{ 
            backgroundColor: 'var(--primary)',
            fontSize: '1.2rem',
            color: 'white', 
            fontWeight: 700, 
            borderRadius: '12px', 
            textTransform: 'none', 
            fontFamily: 'inherit', 
            '&:hover': { 
              backgroundColor: 'var(--primary-dark)', 
              transform: 'translateY(-2px)', }, 
              transition: 'all 0.3s ease' }}>Reservar ahora <span>→</span></Button>
          </Link>
        </div>
      </section>
      <section>
        <div className="popular-courts">
          <h1 className="section-title">Las pistas más populares</h1>
          <div className="courts-grid">
            {
              Courts.slice(0, 3).map(court => (
                <div className="court-card" key={court.id}>
                  <img src={court.image} alt={court.name} />
                  <h2>{court.name}</h2>
                  <h3>{court.description}</h3>
                  <Link to={`/reservar?courtId=${court.id}`}>
                    <Button variant="contained" sx={{ 
                      backgroundColor: 'var(--primary)',
                      fontSize: '1.2rem',
                      color: 'white', 
                      fontWeight: 700, 
                      marginTop: '10px',
                      borderRadius: '12px', 
                      textTransform: 'none', 
                      fontFamily: 'inherit', 
                      '&:hover': { 
                        backgroundColor: 'var(--primary-dark)', 
                        transform: 'translateY(-2px)', }, 
                        transition: 'all 0.3s ease' }}>Reservar ahora <span>→</span></Button>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="sports-carousel-section">
        <h1 className="section-title">Tus deportes favoritos al alcance de tu mano</h1>
        <div className="sports-carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={handlePrevSport}>←</button>
          
          <div className="carousel-track">
            <div className="sport-card sport-card-prev">
              <Link to={`/reservar?sportId=${Sports[getPrevIndex()].id}`}>
              <img src={Sports[getPrevIndex()].iconUrl} alt={Sports[getPrevIndex()].name}/>
              </Link>
            </div>
            
            <div className="sport-card sport-card-center">
              <Link to={`/reservar?sportId=${Sports[currentSportIndex].id}`}>
              <img src={Sports[currentSportIndex].iconUrl} alt={Sports[currentSportIndex].name} />
              </Link>
            </div>
            
            <div className="sport-card sport-card-next">
              <Link to={`/reservar?sportId=${Sports[getNextIndex()].id}`}>
              <img src={Sports[getNextIndex()].iconUrl} alt={Sports[getNextIndex()].name} />
              </Link>
            </div>
          </div>
          
          <button className="carousel-btn carousel-btn-next" onClick={handleNextSport}>→</button>
        </div>
        
        {/* Indicadores de posición */}
        <div className="carousel-dots">
          {Sports.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSportIndex ? 'dot-active' : ''}`}
              onClick={() => setCurrentSportIndex(index)}
            ></span>
          ))}
        </div>
      </section>
      <section>
        <div className="why-choose-us">
          <h1 className="section-title">¿Por qué elegirnos?</h1>
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
      </section>
      <CustomFooter />
    </div>
  )
}

export default Landing
