import './navbar.css';
import { FaHome, FaFolder, FaTools, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">OA</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home"     data-label="Home">      <FaHome />           </a></li>
        <li><a href="#projects" data-label="Projects">  <FaFolder />         </a></li>
        <li><a href="#skills"   data-label="Skills">    <FaTools />          </a></li>
        <li><a href="#about"    data-label="Education"> <FaGraduationCap />  </a></li>
        <li><a href="#contact"  data-label="Contact">   <FaEnvelope />       </a></li>
      </ul>
    </nav>
  );
}
