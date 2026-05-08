import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import './Hero.css';

const roles = ['Junior Software Engineer', 'Data Scientist', 'Tech Enthusiast', 'Lifelong Learner'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('in');

      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setPhase('out');
      }, 320);

      setTimeout(() => {
        setPhase('idle');
      }, 640);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <span className="hero-label">Portfolio</span>
      <h1 className="hero-name">Onasis<span className="hero-dot">.</span></h1>
      <div className="hero-role-wrapper">
        <span className="hero-role">
          {roles[roleIndex]}
          <span className={`hero-highlight ${phase}`} />
        </span>
      </div>
      <p className="hero-bio">Turning a lifelong passion for sports into a career focused on analytics, machine learning, and software development. I enjoy building data-driven applications that transform raw information into meaningful insights.</p>
      <div className="hero-cta">
        <a href="/OnasisCSResume.pdf" download className="btn btn-primary">
          <FaDownload />
          Résumé
        </a>
        <a href="#contact" className="btn btn-secondary">Contact</a>
      </div>
    </section>
  );
}
