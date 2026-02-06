function Login() {
  return (
    <>
      <header>
        <a href="/inicio">← Volver al Inicio</a> 
      </header>
      <div className="login-container">
        <img src="src\assets\logo.png" alt="Logo de Deportes" className="logo" />
        <h2>Iniciar Sesión</h2>
        <h3>Inicia sesión para acceder a todos nuestros servicios.</h3>
        <form>
          <label htmlFor="email">Correo Electrónico:</label> <br/>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Contraseña: <a href="/recuperar-contrasena" className="forgot-password-link">¿Olvidaste tu contraseña?</a></label> <br/>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Iniciar Sesión</button>
        </form>

        <p>¿No tienes una cuenta? <a href="/registro" className="register-link">Regístrate aquí</a></p>
      </div>
    </>
  )
}

export default Login
