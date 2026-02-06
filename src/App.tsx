import { CustomImage } from "./shared/CustomImage"
import { CustomInput } from "./shared/CustomInput"
import { CustomSubtitle } from "./shared/CustomSubtitle"
import { CustomTitle } from "./shared/CustomTitle"

function Login() {
  return (
    <>
      <header>
        <a href="/inicio">← Volver al Inicio</a> 
      </header>
      <div className="login-container">
        <CustomImage src="src/assets/logo.png" alt="Logo de Deportes" className="logo"/>
        <CustomTitle text="Iniciar Sesión"/>
        <CustomSubtitle text="Inicia sesión para acceder a todos nuestros servicios."/>
        <form>
          <CustomInput labelText="Correo Electrónico:" 
            inputType="email" 
            inputId="email" 
            inputName="email" 
            isRequired={true} 
            placeholder="ejemplo@correo.com"/> 
          
          <CustomInput labelText="Contraseña:"
            inputType="password" 
            inputId="password" 
            inputName="password" 
            isRequired={true} 
            placeholder="Ingresa tu contraseña..."/>
          
          <button type="submit">Iniciar Sesión</button>
        </form>

        <p>¿No tienes una cuenta? <a href="/registro" className="register-link">Regístrate aquí</a></p>
      </div>
    </>
  )
}

export default Login
