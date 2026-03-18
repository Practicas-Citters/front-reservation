import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { CustomHeader } from '../shared/CustomHeader'
import CustomFooter from '../shared/CustomFooter'

import "../styles/CompanyInfo.css"

export const CompanyInfo = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneCode, setPhoneCode] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyCode, setCompanyCode] = useState("")
    const [companyStatus, setCompanyStatus] = useState("")
    const [companyCountry, setCompanyCountry] = useState("")
    const [companyCity, setCompanyCity] = useState("")
    const [contactReason, setContactReason] = useState("")
    const [message, setMessage] = useState("")

    const mergePhone = () => {
        return phoneCode + " " + phone;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        
        if(fullName !== "" &&
            email !== "" &&
            phoneCode !== "" &&
            phone !== "" &&
            role !== "" &&
            companyName !== "" &&
            companyCode !== "" &&
            companyStatus !== "" &&
            companyCountry !== "" &&
            companyCity !== "" &&
            contactReason !== "" &&
            message !== "")
        {
            toast.success("Formulario enviado correctamente!");
            // QUITAR ESTO CUANDO SE IMPLEMENTE EL BACKEND
            console.log(fullName);
            console.log(email);
            console.log(mergePhone());
            console.log(role);
            console.log(companyName);
            console.log(companyCode);
            console.log(companyStatus);
            console.log(companyCountry);
            console.log(companyCity);
            console.log(contactReason);
            console.log(message);
            form.reset();
            // IMPLEMENTAR AQUÍ LA LLAMADA AL BACKEND
            
        }
        else
        {
            toast.error("Ha ocurrido un error. Por favor, inténtelo nuevamente.");
        }
    }

  return (
    <div>
        <CustomHeader/>
        <div className="company-info">
            <h1 className="company-info-title">Información Para Empresas</h1>
            <h2>En esta sección encontrarás toda la información necesaria sobre nuestro servicio.</h2>

            <div className="company-info-content">
                <div className="company-info-content-item">
                    <div className="company-info-what-is-desportes">
                    <div className="company-info-content-item-text">
                        <h2 className="company-info-subtitle">¿Qué es Desportes?</h2>
                        <p className="company-info-text">Desportes es una plataforma que permite a las empresas gestionar sus 
                        reservas de espacios deportivos de manera online. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus sed ante laoreet, placerat elit in, tristique diam. 
                        Nulla ultrices imperdiet quam id eleifend. Donec mollis dignissim porttitor. 
                        Nunc rutrum lectus et tortor gravida, in euismod neque tempor. 
                        Suspendisse eu tempor risus. Cras id egestas turpis. 
                        Sed augue justo, volutpat quis blandit id, suscipit a nisl. 
                        Sed et ligula dolor. Pellentesque faucibus accumsan auctor. 
                        Vestibulum sit amet gravida mi. 
                        Proin tortor magna, pretium quis gravida eget, posuere vitae nisi. 
                        Nulla mattis magna eget dolor bibendum, at accumsan nisi imperdiet. 
                        Aenean ac lacus lorem. Praesent in consectetur enim, interdum finibus lacus.</p>
                    </div>
                    <div className="company-info-content-item-image">
                        <img src="../public/placeholder-image.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="company-info-why-choose-us">
                    <div className="company-info-content-item-text">
                        <h2 className="company-info-subtitle">¿Por qué elegirnos?</h2>
                    </div>
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

                <div className="company-info-content-item">
                    <div className="company-info-content-item-text">
                        <h2 className="company-info-subtitle">¿Qué beneficios ofrece Desportes?</h2>
                    </div>
                    <div className="company-info-benefits">
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h1>Eficiencia</h1>
                            <img src="../public/icons/logo-efficiency-benefits.png" alt="eficiencia"></img>
                            <h3>Análisis a tiempo real de tus pistas que te permite incrementar los cupos,
                                reducir cancelaciones y maximizar la eficiencia de tus pistas.</h3>
                        </div>
                        <div className="benefit-card">
                            <h1>Lealtad</h1>
                            <img src="../public/icons/logo-loyalty-benefits-gray.png" alt="lealtad"></img>
                            <h3>Los usuarios amarán lo simple que es conseguir una reserva, 
                                lo cual te permitirá centrarte en su experiencia.</h3>
                        </div>
                        <div className="benefit-card">
                            <h1>Crecimiento</h1>
                            <img src="../public/icons/logo-growth-benefits.png" alt="crecimiento"></img>
                            <h3>Usar nuestra plataforma permitirá que tu negocio crezca 
                                de manera exponencial.</h3>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="company-info-content-item">
                    <div className="user-review-card-grid">
                        <div className="user-review-card">
                            <div className="user-review-card-header">
                                <img src="src/assets/user-default-icon.png" alt="Usuario 1" />
                                <div className="user-review-card-header-info">
                                    <h2>Pedro Pruebas</h2>
                                    <h3 className="user-review-rating"> ★ ★ ★ ★  ☆</h3>
                                </div>
                            </div>
                            <div className="user-review-card-body">
                                <p className="user-review-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam est vitae semper vehicula. Aliquam quis nibh molestie mauris pretium pulvinar sit amet id quam. Mauris tempus, magna id cursus cursus, ipsum tortor scelerisque risus, ut laoreet diam mi quis velit. Quisque posuere turpis eget hendrerit sagittis. Curabitur posuere lectus odio, quis porttitor elit euismod id. Cras non luctus urna, ac tristique turpis. Vivamus iaculis mauris dolor, non semper felis volutpat in. Vestibulum vel lectus nulla. Nullam odio ligula, pretium quis turpis vel, porta scelerisque nunc. Sed eleifend, sapien at cursus ultricies, augue diam aliquam risus, ut consectetur est purus eu mi.</p>
                            </div>
                        </div>
                        <div className="user-review-card">
                            <div className="user-review-card-header">
                                <img src="src/assets/user-default-icon.png" alt="Usuario 1" />
                                <div className="user-review-card-header-info">
                                    <h2>Lucía Martínez</h2>
                                    <h3 className="user-review-rating">★ ★ ★ ★ ★</h3>
                                </div>
                            </div>
                            <div className="user-review-card-body">
                                <p className="user-review-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam est vitae semper vehicula. Aliquam quis nibh molestie mauris pretium pulvinar sit amet id quam. Mauris tempus, magna id cursus cursus, ipsum tortor scelerisque risus, ut laoreet diam mi quis velit. Quisque posuere turpis eget hendrerit sagittis. Curabitur posuere lectus odio, quis porttitor elit euismod id. Cras non luctus urna, ac tristique turpis. Vivamus iaculis mauris dolor, non semper felis volutpat in.</p>
                            </div>
                        </div>
                        <div className="user-review-card">
                            <div className="user-review-card-header">
                                <img src="src/assets/user-default-icon.png" alt="Usuario 1" />
                                <div className="user-review-card-header-info">
                                    <h2>Alex García</h2>
                                    <h3 className="user-review-rating">★ ★ ★ ★ ★</h3>
                                </div>
                            </div>
                            <div className="user-review-card-body">
                                <p className="user-review-message">Curabitur facilisis nisi ante, sed accumsan dui vestibulum ac. Morbi dignissim semper felis in consequat. Donec lobortis nec magna eget facilisis. Aenean eu risus ac augue tempus eleifend ut et velit. Sed id libero sollicitudin, lacinia neque eleifend, consectetur justo. Aenean sodales luctus odio, sed ullamcorper orci viverra vitae. Donec sit amet consectetur orci, at interdum justo. Vestibulum vehicula libero lectus, nec convallis ligula tempor vitae. Praesent venenatis porttitor ex nec ullamcorper. Etiam viverra aliquam rhoncus. Phasellus sed augue lacus. Fusce sapien ipsum, ultricies pulvinar tempus vitae, ultrices sit amet massa. Ut iaculis lorem nisi, sed gravida lectus tristique sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company-info-content-item">
                    <h2 className="company-info-subtitle">Contacta Con Nuestros Expertos</h2>
                    <p className="company-info-text">Si tienes alguna duda, no dudes en contactarnos usando el formulario de abajo.</p>
                    <div className="contact-us-form">
                        <form onSubmit={handleSubmit}>
                            <div className="company-info-form-row">
                                <div className="company-info-form-item">
                                    <label htmlFor="name" className="form-label">Nombre Completo:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Inserta tu nombre aquí..." 
                                    onChange={(e) => setFullName(e.target.value)} required />
                                </div>
                                <div className="company-info-form-item">
                                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Inserta tu email aquí..." 
                                    onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="company-info-form-row">
                                <div className="company-info-form-item">
                                    <label htmlFor="phone" className="form-label">Teléfono:</label>
                                    <div className="phone-container">
                                        <select className="form-select" id="phone-country" name="phone-country" 
                                        defaultValue="" onChange={(e) => setPhoneCode(e.target.value)} required>
                                            <option value="" disabled>Elige un país...</option>
                                            <option value="+93">Afganistán (+93)</option>
                                            <option value="+355">Albania (+355)</option>
                                            <option value="+49">Alemania (+49)</option>
                                            <option value="+376">Andorra (+376)</option>
                                            <option value="+966">Arabia Saudita (+966)</option>
                                            <option value="+213">Argelia (+213)</option>
                                            <option value="+54">Argentina (+54)</option>
                                            <option value="+374">Armenia (+374)</option>
                                            <option value="+61">Australia (+61)</option>
                                            <option value="+43">Austria (+43)</option>
                                            <option value="+994">Azerbaiyán (+994)</option>
                                            <option value="+973">Baréin (+973)</option>
                                            <option value="+32">Bélgica (+32)</option>
                                            <option value="+375">Bielorrusia (+375)</option>
                                            <option value="+591">Bolivia (+591)</option>
                                            <option value="+387">Bosnia y Herzegovina (+387)</option>
                                            <option value="+55">Brasil (+55)</option>
                                            <option value="+359">Bulgaria (+359)</option>
                                            <option value="+226">Burkina Faso (+226)</option>
                                            <option value="+238">Cabo Verde (+238)</option>
                                            <option value="+237">Camerún (+237)</option>
                                            <option value="+1">Canadá (+1)</option>
                                            <option value="+235">Chad (+235)</option>
                                            <option value="+56">Chile (+56)</option>
                                            <option value="+86">China (+86)</option>
                                            <option value="+357">Chipre (+357)</option>
                                            <option value="+379">Ciudad del Vaticano (+379)</option>
                                            <option value="+57">Colombia (+57)</option>
                                            <option value="+242">Congo (+242)</option>
                                            <option value="+82">Corea del Sur (+82)</option>
                                            <option value="+385">Croacia (+385)</option>
                                            <option value="+45">Dinamarca (+45)</option>
                                            <option value="+593">Ecuador (+593)</option>
                                            <option value="+20">Egipto (+20)</option>
                                            <option value="+971">Emiratos Árabes Unidos (+971)</option>
                                            <option value="+421">Eslovaquia (+421)</option>
                                            <option value="+386">Eslovenia (+386)</option>
                                            <option value="+34">España (+34)</option>
                                            <option value="+1">Estados Unidos (+1)</option>
                                            <option value="+372">Estonia (+372)</option>
                                            <option value="+358">Finlandia (+358)</option>
                                            <option value="+33">Francia (+33)</option>
                                            <option value="+241">Gabón (+241)</option>
                                            <option value="+220">Gambia (+220)</option>
                                            <option value="+995">Georgia (+995)</option>
                                            <option value="+30">Grecia (+30)</option>
                                            <option value="+240">Guinea Ecuatorial (+240)</option>
                                            <option value="+245">Guinea-Bissau (+245)</option>
                                            <option value="+36">Hungría (+36)</option>
                                            <option value="+91">India (+91)</option>
                                            <option value="+964">Irak (+964)</option>
                                            <option value="+98">Irán (+98)</option>
                                            <option value="+353">Irlanda (+353)</option>
                                            <option value="+354">Islandia (+354)</option>
                                            <option value="+39">Italia (+39)</option>
                                            <option value="+81">Japón (+81)</option>
                                            <option value="+962">Jordania (+962)</option>
                                            <option value="+7">Kazajistán (+7)</option>
                                            <option value="+996">Kirguistán (+996)</option>
                                            <option value="+383">Kosovo (+383)</option>
                                            <option value="+965">Kuwait (+965)</option>
                                            <option value="+371">Letonia (+371)</option>
                                            <option value="+961">Líbano (+961)</option>
                                            <option value="+218">Libia (+218)</option>
                                            <option value="+423">Liechtenstein (+423)</option>
                                            <option value="+370">Lituania (+370)</option>
                                            <option value="+352">Luxemburgo (+352)</option>
                                            <option value="+389">Macedonia del Norte (+389)</option>
                                            <option value="+223">Mali (+223)</option>
                                            <option value="+356">Malta (+356)</option>
                                            <option value="+212">Marruecos (+212)</option>
                                            <option value="+222">Mauritania (+222)</option>
                                            <option value="+52">México (+52)</option>
                                            <option value="+373">Moldavia (+373)</option>
                                            <option value="+377">Mónaco (+377)</option>
                                            <option value="+382">Montenegro (+382)</option>
                                            <option value="+227">Níger (+227)</option>
                                            <option value="+47">Noruega (+47)</option>
                                            <option value="+64">Nueva Zelanda (+64)</option>
                                            <option value="+968">Omán (+968)</option>
                                            <option value="+31">Países Bajos (+31)</option>
                                            <option value="+92">Pakistán (+92)</option>
                                            <option value="+970">Palestina (+970)</option>
                                            <option value="+595">Paraguay (+595)</option>
                                            <option value="+51">Perú (+51)</option>
                                            <option value="+48">Polonia (+48)</option>
                                            <option value="+351">Portugal (+351)</option>
                                            <option value="+974">Qatar (+974)</option>
                                            <option value="+44">Reino Unido (+44)</option>
                                            <option value="+236">República Centroafricana (+236)</option>
                                            <option value="+420">República Checa (+420)</option>
                                            <option value="+40">Rumania (+40)</option>
                                            <option value="+7">Rusia (+7)</option>
                                            <option value="+378">San Marino (+378)</option>
                                            <option value="+221">Senegal (+221)</option>
                                            <option value="+381">Serbia (+381)</option>
                                            <option value="+963">Siria (+963)</option>
                                            <option value="+249">Sudán (+249)</option>
                                            <option value="+46">Suecia (+46)</option>
                                            <option value="+41">Suiza (+41)</option>
                                            <option value="+992">Tayikistán (+992)</option>
                                            <option value="+216">Túnez (+216)</option>
                                            <option value="+90">Turquía (+90)</option>
                                            <option value="+993">Turkmenistán (+993)</option>
                                            <option value="+380">Ucrania (+380)</option>
                                            <option value="+598">Uruguay (+598)</option>
                                            <option value="+998">Uzbekistán (+998)</option>
                                            <option value="+58">Venezuela (+58)</option>
                                            <option value="+967">Yemen (+967)</option>
                                        </select>
                                        <input type="tel" className="form-control" id="phone" 
                                        pattern="[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}" onChange={(e) => setPhone(e.target.value)} placeholder="123 45 67 89" required/>
                                    </div>
                                </div>
                                <div className="company-info-form-item">
                                    <label htmlFor="role" className="form-label">Rol:</label>
                                    <select className="form-select" id="role" name="role" defaultValue="" onChange={(e) => setRole(e.target.value)} required>
                                        <option value="" disabled>Selecciona un rol...</option>
                                        <option value="admin">Administrador/a</option>
                                        <option value="manager">Manager</option>
                                        <option value="secretario">Secretario/a</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="contador">Contador/a</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="company-info-form">
                                    <div className="company-info-form-row">
                                        <div className="company-info-form-item">
                                            <label htmlFor="empresa-nombre" className="form-label">Nombre de la Empresa:</label>
                                            <input type="text" className="form-control" id="empresa-nombre" name="empresa-nombre" 
                                            placeholder="Inserta el nombre de tu empresa aquí..." onChange={(e) => setCompanyName(e.target.value)} required />
                                        </div>
                                        <div className="company-info-form-item">
                                            <label htmlFor="empresa-cif" className="form-label">NIF de la Empresa:</label>
                                            <input type="text" className="form-control" id="empresa-cif" name="empresa-cif" 
                                            placeholder="A12345678" onChange={(e) => setCompanyCode(e.target.value)}
                                            pattern="[A-Z]{1}[0-9]{8}" required />
                                        </div>
                                        <div className="company-info-form-item">
                                            <label htmlFor="empresa-estado" className="form-label">Estado de la Empresa:</label>
                                            <select className="form-select" id="empresa-estado" name="empresa-estado" 
                                            defaultValue="" onChange={(e) => setCompanyStatus(e.target.value)} required>
                                                <option value="" disabled>Selecciona un estado...</option>
                                                <option value="activo">La empresa ya está usando este servicio.</option>
                                                <option value="proximamente">La empresa quiere implementar este servicio en los próximos 2 meses.</option>
                                                <option value="futuro">La empresa quiere implementar este servicio dentro de más de 2 meses.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="company-info-form-row">
                                        <div className="company-info-form-item">
                                            <label htmlFor="empresa-pais" className="form-label">País:</label>
                                            <select className="form-select" id="empresa-pais" name="empresa-pais" 
                                            defaultValue="" onChange={(e) => setCompanyCountry(e.target.value)} required>
                                                <option value="" disabled>Selecciona un país...</option>
                                                <option value="AF">Afganistán</option>
                                                <option value="AL">Albania</option>
                                                <option value="DE">Alemania</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguila</option>
                                                <option value="AQ">Antártida</option>
                                                <option value="AG">Antigua y Barbuda</option>
                                                <option value="DZ">Argelia</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaiyán</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BD">Bangladés</option>
                                                <option value="BH">Baréin</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BE">Bélgica</option>
                                                <option value="BZ">Belice</option>
                                                <option value="BJ">Benín</option>
                                                <option value="BM">Bermudas</option>
                                                <option value="BY">Bielorrusia</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BA">Bosnia y Herzegovina</option>
                                                <option value="BW">Botsuana</option>
                                                <option value="BR">Brasil</option>
                                                <option value="BN">Brunéi</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="BT">Bután</option>
                                                <option value="CV">Cabo Verde</option>
                                                <option value="KH">Camboya</option>
                                                <option value="CM">Camerún</option>
                                                <option value="CA">Canadá</option>
                                                <option value="TD">Chad</option>
                                                <option value="CZ">Chequia</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CY">Chipre</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoras</option>
                                                <option value="CD">Congo (República Democrática)</option>
                                                <option value="CG">Congo (República)</option>
                                                <option value="CI">Costa de Marfil</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="HR">Croacia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="DK">Dinamarca</option>
                                                <option value="DJ">Yibuti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egipto</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="ES">España</option>
                                                <option value="US">Estados Unidos</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Etiopía</option>
                                                <option value="FI">Finlandia</option>
                                                <option value="FJ">Fiyi</option>
                                                <option value="FR">Francia</option>
                                                <option value="GA">Gabón</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GD">Granada</option>
                                                <option value="GR">Grecia</option>
                                                <option value="GL">Groenlandia</option>
                                                <option value="GP">Guadalupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GQ">Guinea Ecuatorial</option>
                                                <option value="GW">Guinea-Bisáu</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haití</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungría</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Irán</option>
                                                <option value="IQ">Irak</option>
                                                <option value="IE">Irlanda</option>
                                                <option value="BV">Isla Bouvet</option>
                                                <option value="CX">Isla de Navidad</option>
                                                <option value="IS">Islandia</option>
                                                <option value="KY">Islas Caimán</option>
                                                <option value="CC">Islas Cocos</option>
                                                <option value="CK">Islas Cook</option>
                                                <option value="FO">Islas Feroe</option>
                                                <option value="FK">Islas Malvinas</option>
                                                <option value="MH">Islas Marshall</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italia</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japón</option>
                                                <option value="JO">Jordania</option>
                                                <option value="KZ">Kazajistán</option>
                                                <option value="KE">Kenia</option>
                                                <option value="KG">Kirguistán</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="LA">Laos</option>
                                                <option value="LS">Lesoto</option>
                                                <option value="LV">Letonia</option>
                                                <option value="LB">Líbano</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libia</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lituania</option>
                                                <option value="LU">Luxemburgo</option>
                                                <option value="MO">Macao</option>
                                                <option value="MK">Macedonia del Norte</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malasia</option>
                                                <option value="MV">Maldivas</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MX">México</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Perú</option>
                                                <option value="PT">Portugal</option>
                                                <option value="UK">Reino Unido</option>
                                                <option value="CF">República Centroafricana</option>
                                                <option value="DO">República Dominicana</option>
                                                <option value="AS">Samoa Americana</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="VE">Venezuela</option>
                                            </select>
                                        </div>
                                        <div className="company-info-form-item">
                                            <label htmlFor="empresa-ciudad">Ciudad:</label>
                                            <input type="text" className="form-control" id="empresa-ciudad" name="empresa-ciudad" 
                                            placeholder="Inserta la ciudad de tu empresa aquí..." 
                                            onChange={(e) => setCompanyCity(e.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reason" className="form-label">Motivo de Contacto:</label>
                                <select className="form-select" id="reason" name="reason" defaultValue="" onChange={(e) => setContactReason(e.target.value)} required>
                                    <option value="" disabled>Selecciona un motivo...</option>
                                    <option value="ayuda-reserva">Necesito ayuda con una de mis reservas.</option>
                                    <option value="pregunta-servicio">Tengo una pregunta sobre el servicio.</option>
                                    <option value="sugerencia">Quiero hacer una sugerencia.</option>
                                    <option value="queja">Quiero hacer una queja.</option>
                                    <option value="otro">Otro.</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows={7} placeholder="Escribe tu mensaje aquí..." 
                                onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <CustomFooter/>
    </div>
  )
}
