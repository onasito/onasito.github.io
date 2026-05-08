import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaChartLine, FaKey, FaJava, } from 'react-icons/fa';
import {
  SiPython, SiScikitlearn, SiPandas, SiJavascript,
  SiReact, SiCss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiKotlin
} from 'react-icons/si';
import './Projects.css';

const techIcons = {
  'Python':      { icon: SiPython,      color: '#3776AB' },
  'scikit-learn':{ icon: SiScikitlearn, color: '#F7931E' },
  'Pandas':      { icon: SiPandas,      color: '#150458' },
  'JavaScript':  { icon: SiJavascript,  color: '#F7DF1E' },
  'Matplotlib':  { icon: FaChartLine,   color: '#11557C' },
  'React':       { icon: SiReact,       color: '#61DAFB' },
  'CSS':         { icon: SiCss,         color: '#1572B6' },
  'Vite':        { icon: SiVite,        color: '#646CFF' },
  'Node.js':     { icon: SiNodedotjs,   color: '#339933' },
  'Express':     { icon: SiExpress,     color: '#888888' },
  'MongoDB':     { icon: SiMongodb,     color: '#47A248' },
  'JWT':         { icon: FaKey,         color: '#FB015B' },
  'Java':        { icon: FaJava,        color: '#F7931E' },
  'Kotlin':      { icon: SiKotlin,      color: '#0095D5' },
};

const projects = [
  {
    number: '01',
    title: 'Premier League Predictor',
    image: '/images/premier-league.avif',
    description:
      'A full-stack web application that predicts Premier League match outcomes using Python machine learning models. Built with a Node.js backend and React frontend, it provides users with predictions and insights based on historical match data.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'JavaScript', 'Matplotlib', 'React', 'JWT', 'Node.js', 'Express'],
  },
  {
    number: '02',
    title: 'Kabob Express Website',
    image: '/images/kabob-express.png',
    description:
      'Full-stack restaurant ordering platform with PostgreSQL and JWT authentication, supporting secure user accounts, menu item management, and customer order tracking.',
    tech: ['React', 'JavaScript', 'CSS', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
  },
  {
    number: '03',
    title: 'Espresso Compiler',
    image: '/images/espresso.jpg',
    description:
      'Designed and implemented a multi-stage compiler in Java for the Espresso language, featuring lexical analysis, syntax parsing, AST construction, and static type checking.',
    tech: ['Java' ],
  },
  {
    number: '04',
    title: 'IngrediScan Android App',
    image: '/images/ingrediScan.png',
    description:
      'Created an Android application that uses CameraX for barcode scanning and integrates with the USDA FoodData Central API to display nutritional data for scanned items. Handled API integration and organized the returned data into usable information for the app interface.',
    tech: ['Kotlin'],
  }
];

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -324 : 324,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="projects-label">Selected Work</span>
        <h2 className="projects-title">Projects</h2>
      </div>
      <div className="projects-track-wrapper">
        <div className="projects-track" ref={scrollRef}>
          {projects.map((project) => (
            <article key={project.number} className="project-card">
              <div className="project-image">
                {project.image
                  ? <img src={project.image} alt={project.title} />
                  : <span className="project-image-placeholder">No image yet</span>
                }
              </div>
              <span className="project-number">{project.number}</span>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tag) => {
                  const tech = techIcons[tag];
                  const Icon = tech?.icon;
                  return (
                    <span key={tag} className="project-tag">
                      {Icon && <Icon style={{ color: tech.color, flexShrink: 0 }} />}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <div className="projects-controls">
          <button className="scroll-btn" onClick={() => scroll('left')} aria-label="Scroll left">
            <FaChevronLeft />
          </button>
          <button className="scroll-btn" onClick={() => scroll('right')} aria-label="Scroll right">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
