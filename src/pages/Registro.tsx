import { useContext, useState } from "react"
import { UserContext } from "../context/user.context"
import { Link, useNavigate } from "react-router"

import { CustomImage } from "../shared/CustomImage"
import { CustomInput } from "../shared/CustomInput"
import { CustomSubtitle } from "../shared/CustomSubtitle"
import { CustomTitle } from "../shared/CustomTitle"
import "../styles/Registro.css"
import CustomFooter from "../shared/CustomFooter"

function Registro() {

  const { signin } = useContext(UserContext);

  const [isLoading, setisLoading] = useState(false)
  const [fullName, setFullName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [birthDate, setBirthDate] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);


  const navigate = useNavigate();

  const handleSignInForm = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    const data = {
      fullName,
      email,
      phone,
      birthDate,
      username,
      password
    };

    if (data.fullName && data.email && data.phone && data.birthDate && data.username && data.password) {
      const result = await signin(JSON.stringify(data));
      if (result) {
        navigate("/login");
      }
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

          <CustomTitle text="Crea tu cuenta" />
          <CustomSubtitle text="Fácil, rápido y sencillo. Regístrate ahora y disfruta de todos nuestros servicios." />

          <form onSubmit={handleSignInForm}>
            <div className="datos-personales">
              <CustomInput
                labelText="Nombre y Apellidos"
                inputType="text"
                inputId="full-name"
                inputName="full-name"
                isRequired={true}
                placeholder="Tu nombre y apellidos..."
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <CustomInput
                labelText="Correo Electrónico"
                inputType="email"
                inputId="email"
                inputName="email"
                isRequired={true}
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <CustomInput
                labelText="Número de Teléfono"
                inputType="number"
                inputId="phone"
                inputName="phone"
                isRequired={true}
                placeholder="123 45 67 89"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <CustomInput
                labelText="Fecha de Nacimiento"
                inputType="date"
                inputId="birth-date"
                inputName="birth-date"
                isRequired={true}
                placeholder="dd/mm/yyyy"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>

            <CustomInput
              labelText="Nombre de Usuario"
              inputType="text"
              inputId="username"
              inputName="username"
              isRequired={true}
              placeholder="Tu nombre de usuario..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <CustomInput
              labelText="Contraseña"
              inputType="password"
              inputId="password"
              inputName="password"
              isRequired={true}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              labelLink={{
                text: "¿Olvidaste tu contraseña?",
                href: "/recuperar",
                className: "forgot-password-link"
              }}
            />

            <button type="submit" disabled={isLoading}>Regístrate</button>
          </form>

          <p className="footer-text">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="register-link">Inicia sesión</Link>
          </p>
        </div>
      </div>
      <CustomFooter />
    </>
  )
}

export default Registro
