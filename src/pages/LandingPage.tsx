import Button from '@mui/material/Button'
import { Link } from 'react-router'

const Landing = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Bienvenido a la página de inicio</h1>
      <Link to="/login"><Button>Ir a Login</Button></Link>
      <Link to="/registro"><Button>Ir a Registro</Button></Link>
    </div>
  )
}

export default Landing
