import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/onasito',
    display: 'github.com/onasito',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/onasis-arrechavala-jr-1652bb324',
    display: 'Onasis Arrechavala Jr.',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <span className="contact-label">Get In Touch</span>
      <h2 className="contact-title">Contact</h2>
      <p className="contact-intro">
        Feel free to reach out whether it’s about a project, an opportunity, or simply to connect.
      </p>

      <a href="mailto:oarrechavala0@gmail.com" className="contact-email">
        <FaEnvelope className="contact-email-icon" />
        oarrechavala0@gmail.com
      </a>

      <div className="contact-links">
        {links.map(({ icon: Icon, label, href, display }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Icon className="contact-link-icon" />
            <div className="contact-link-text">
              <span className="contact-link-label">{label}</span>
              <span className="contact-link-display">{display}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
