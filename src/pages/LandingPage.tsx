import Button from '@mui/material/Button'
import { Link } from 'react-router'
import { CustomTitle } from '../shared/CustomTitle'
import { CustomImage } from '../shared/CustomImage'
import '../styles/LandingPage.css'
import { UserContext } from '../context/user.context'
import { useContext } from 'react'

const Landing = () => {
  const { isAuthenticated, user, logout } = useContext(UserContext);

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
    </div>
  )
}

export default Landing
