import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-white py-16 flex flex-row flex-wrap items-stretch justify-around">
      <div className="flex flex-col justify-start text-customLightGreen">
        <h1 className="text-customLightGreen font-extrabold text-lg sm:text-xl">
          IFSP EVENTOS
        </h1>
        <p className="w-56 text-customLightGreen font-semibold max-w-24 sm:max-w-max text-[11px] sm:text-[13px] mt-2">
          Proporcionando experiências únicas para você
        </p>
      </div>

      <div className="hidden md:flex flex-col justify-start text-xl text-customLightGreen">
        <h1 className="text-customLightGreen font-bold text-xl mb-2">Sobre</h1>
        <a
          href="https://cbt.ifsp.edu.br/index.php/historia-do-campus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customLightGreen font-semibold text-[13px] mt-2 cursor-pointer"
        >
          Nossa história
        </a>
        <a
          href="https://cbt.ifsp.edu.br/index.php/missao-institucional"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customLightGreen font-semibold text-[13px] mt-2 cursor-pointer"
        >
          Motivação
        </a>
        <a
          href="#eventos"
          className="text-customLightGreen font-semibold text-[13px] mt-2 cursor-pointer"
        >
          Eventos
        </a>
      </div>

      <div className="flex flex-col justify-start text-xl text-customLightGreen text-left">
        <h1 className="text-customLightGreen font-bold text-xl mb-2">
          Redes sociais
        </h1>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2">
          <a
            href="https://www.instagram.com/ifspcubatao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-customLightGreen font-semibold text-[13px] cursor-pointer"
          >
            <FaInstagram />
            <h1 className="ml-2">Instagram</h1>
          </a>
        </div>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2">
          <a
            href="https://www.facebook.com/ifspcubatao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-customLightGreen font-semibold text-[13px] cursor-pointer"
          >
            <FaFacebook />
            <h1 className="ml-2">Facebook</h1>
          </a>
        </div>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2">
          <a
            href="https://github.com/ifspcbt-devspace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-customLightGreen font-semibold text-[13px] cursor-pointer"
          >
            <FaGithub />
            <h1 className="ml-2">GitHub</h1>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
