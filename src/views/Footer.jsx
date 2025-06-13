import { FaGithub, FaReact, FaUniversity } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <FaUniversity className="me-2" />
        Proyecto académico | Hecho con <FaReact className="text-info" /> React
      </p>
      <p>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="me-1" />
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;