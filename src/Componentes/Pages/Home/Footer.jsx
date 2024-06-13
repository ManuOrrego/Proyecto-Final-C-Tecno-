import logo from "../../../assets/logodefinitivo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="bg-[#0033A0] h-32 w-full flex justify-center items-center">
        <h2 className="text-white font-lg font-bold text-[20px]">
          Solucion al instante - Tecnología a tu alcance.
        </h2>
      </div>
      <div className="bg-black w-full p-11 text-white flex justify-between items-start">
        <div className="flex flex-row items-center mt-3">
          <img src={logo} alt="LogoPc" className="w-32" />
          <h3 id="NameLogo" className="ml-4 font-semibold">
            C- TECNO <br />
            SOLUTIONS
          </h3>
        </div>
        <div className="mr-auto ml-40"> {/* Ajustar margen izquierdo */}
          <h6>
            Misión :  <br />
            "Proveer soluciones tecnológicas eficientes y <br />
             accesibles para la reserva de computadores y <br />
             salones de cómputo, optimizando el uso de <br /> 
             recursos y facilitando el acceso a espacios<br />
              digitales de alta calidad para nuestros usuarios." <br />
          </h6>
        </div>
        <div className="mr-auto ml-10"> {/* Ajustar margen izquierdo */}
          <h6>
            Visión : <br />
            "Ser la empresa líder en la gestión y reserva  <br />
            de espacios tecnológicos, reconocida por nuestra <br />
            innovación, confiabilidad y compromiso con la  <br />
            excelencia  en el servicio, contribuyendo al <br />
             desarrollo y éxito de nuestras comunidades  <br />
             educativas y profesionales."
          </h6>
        </div>
        <div className="flex flex-row space-x-4 mt-auto">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
