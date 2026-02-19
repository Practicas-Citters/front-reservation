import { CustomImage } from "./shared/CustomImage"
import { CustomInput } from "./shared/CustomInput"
import { CustomSubtitle } from "./shared/CustomSubtitle"
import { CustomTitle } from "./shared/CustomTitle"

function Login() {
  return (
    <>
      <header>
        <a href="/inicio">
          <span>←</span> Volver al Inicio
        </a>
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

          <form>
            <CustomInput
              labelText="Correo Electrónico"
              inputType="email"
              inputId="email"
              inputName="email"
              isRequired={true}
              placeholder="nombre@ejemplo.com"
            />

            <CustomInput
              labelText="Contraseña"
              inputType="password"
              inputId="password"
              inputName="password"
              isRequired={true}
              placeholder="••••••••"
              labelLink={{
                text: "¿Olvidaste tu contraseña?",
                href: "/recuperar",
                className: "forgot-password-link"
              }}
            />

            <button type="submit">Entrar ahora</button>
          </form>

          <p className="footer-text">
            ¿Aún no tienes cuenta?
            <a href="/registro" className="register-link">Crea una aquí</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
