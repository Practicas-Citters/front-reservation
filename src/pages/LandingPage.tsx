import { useNavigate } from 'react-router'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      Esta será la página de inicio.
      <button onClick={() => navigate("/login")}>Ir a Login</button>
      <button onClick={() => navigate("/registro")}>Ir a Registro</button>
    </div>
  )
}

export default Landing
