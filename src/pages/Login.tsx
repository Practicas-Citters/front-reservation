import { Link, useNavigate } from "react-router"
import { useContext, useState } from "react"
import { UserContext, UserProvider } from "../context/user.context"

import { CustomImage } from "../shared/CustomImage"
import { CustomInput } from "../shared/CustomInput"
import { CustomSubtitle } from "../shared/CustomSubtitle"
import { CustomTitle } from "../shared/CustomTitle"
import "../styles/Login.css"

function Login() {

  const { login } = useContext(UserContext);

  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisLoading(true);
    if (login(email, password)) {
      navigate("/");
    }
    setisLoading(false);
  }

  return (
    <>
      <header>
        <Link to="/inicio" className="back-link">
          <span>←</span> Volver al Inicio
        </Link>
      </header>

      <div className="login-page-wrapper">
        <div className="login-container">
          <div className="logo-container">
            <CustomImage
              src="src/assets/logo.png"
              alt="Logo de Desportes"
              className="logo"
            />
          </div>

          <CustomTitle text="Iniciar Sesión" />
          <CustomSubtitle text="Accede a tu cuenta para reservar tus canchas favoritas." />

          <form onSubmit={handleLoginForm}>
            <CustomInput
              labelText="Correo Electrónico"
              inputType="email"
              inputId="email"
              inputName="email"
              isRequired={true}
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <CustomInput
              labelText="Contraseña"
              inputType="password"
              inputId="password"
              inputName="password"
              isRequired={true}
              placeholder="••••••••"
              value={password}
              onChange={event => setPassword(event.target.value)}
              labelLink={{
                text: "¿Olvidaste tu contraseña?",
                href: "/recuperar",
                className: "forgot-password-link"
              }}
            />

            <button type="submit" disabled={isLoading}>Entrar ahora</button>
          </form>

          <p className="footer-text">
            ¿Aún no tienes cuenta?
            <Link to="/registro" className="register-link">Crea una aquí</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
