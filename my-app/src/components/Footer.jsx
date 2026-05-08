import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">Onasis Arrechavala</span>
      <span className="footer-copy">© {new Date().getFullYear()} — Built with React</span>
      <div className="footer-links">
        <a href="https://github.com/onasito" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/onasis-arrechavala-jr-1652bb324" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
