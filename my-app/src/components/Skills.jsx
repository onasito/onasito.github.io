import './Skills.css';
import {
  SiCplusplus, SiPython, SiJavascript, SiNodedotjs,
  SiDotnet, SiReact, SiScikitlearn, SiPandas,
  SiExpress, SiMongodb, SiGit, SiKotlin
} from 'react-icons/si';
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa';

const skills = [
  {
    level: 'Advanced',
    items: [
      { name: 'C++',        icon: SiCplusplus },
      { name: 'Python',     icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL',        icon: FaDatabase },
      { name: 'Java',       icon: FaJava },
      { name: 'Node.js',    icon: SiNodedotjs },
    ],
  },
  {
    level: 'Intermediate',
    items: [
      { name: 'C#',      icon: SiDotnet },
      { name: 'ASP.NET', icon: SiDotnet },
      { name: 'Kotlin',   icon: SiKotlin },
    ],
  },
  {
    level: 'Frameworks & Tools',
    items: [
      { name: 'React',       icon: SiReact },
      { name: 'AWS',         icon: FaAws },
      { name: 'scikit-learn',icon: SiScikitlearn },
      { name: 'Pandas',      icon: SiPandas },
      { name: 'Express',     icon: SiExpress },
      { name: 'PostgreSQL',     icon: FaDatabase },
      { name: 'Git',         icon: SiGit },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <span className="skills-label">What I Work With</span>
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-groups">
        {skills.map((group) => (
          <div key={group.level} className="skills-group">
            <span className="skills-group-label">{group.level}</span>
            <div className="skills-badges">
              {group.items.map(({ name, icon: Icon }) => (
                <span key={name} className="skills-badge">
                  <Icon className="skills-badge-icon" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
