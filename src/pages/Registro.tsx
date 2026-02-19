import { Link } from "react-router"
import { CustomImage } from "../shared/CustomImage"
import { CustomInput } from "../shared/CustomInput"
import { CustomSubtitle } from "../shared/CustomSubtitle"
import { CustomTitle } from "../shared/CustomTitle"

function Registro() {
  return (
    <>
      <header>
        <Link to="/inicio">
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

          <CustomTitle text="Crea tu cuenta" />
          <CustomSubtitle text="Fácil, rápido y sencillo. Regístrate ahora y disfruta de todos nuestros servicios." />

          <form>
            <div className="datos-personales">
            <CustomInput
              labelText="Nombre y Apellidos"
              inputType="text"
              inputId="full-name"
              inputName="full-name"
              isRequired={true}
              placeholder="Tu nombre y apellidos..."
            />

            <CustomInput
              labelText="Correo Electrónico"
              inputType="email"
              inputId="email"
              inputName="email"
              isRequired={true}
              placeholder="correo@ejemplo.com"
            />

            <CustomInput
              labelText="Número de Teléfono"
              inputType="number"
              inputId="phone"
              inputName="phone"
              isRequired={true}
              placeholder="123 45 67 89"
            />

            <CustomInput
              labelText="Fecha de Nacimiento"
              inputType="date"
              inputId="birth-date"
              inputName="birth-date"
              isRequired={true}
              placeholder="dd/mm/yyyy"
            />
            </div>

            <CustomInput
              labelText="Nombre de Usuario"
              inputType="text"
              inputId="username"
              inputName="username"
              isRequired={true}
              placeholder="Tu nombre de usuario..."
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

            <button type="submit">Regístrate</button>
          </form>

          <p className="footer-text">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="register-link">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Registro
