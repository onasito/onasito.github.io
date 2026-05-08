import './Education.css';

const courses = [
  {
    number: '01',
    title: 'Algorithms & Data Structures',
    description:
      'Explored the foundations of efficient computation, including sorting, searching, trees, graphs, and dynamic programming. Developed the analytical thinking needed to write scalable software.',
    topics: ['Complexity Analysis', 'Graph Algorithms', 'Dynamic Programming', 'Trees & Heaps'],
  },
  {
    number: '02',
    title: 'x86 Assembly',
    description:
      'Worked directly with machine-level instructions, registers, and memory management, developing a deeper understanding of how high-level code translates to hardware and improving low-level debugging skills.',
    topics: ['Registers & Memory', 'Stack Frames', 'Instruction Sets', 'Debugging at the Metal'],
  },
  {
    number: '03',
    title: 'Machine Learning',
    description:
      'Studied the mathematical foundations and practical techniques behind modern ML from supervised and unsupervised learning to model evaluation and optimization. The course that connected theory to real-world data problems.',
    topics: ['Supervised Learning', 'Neural Networks', 'Model Evaluation', 'Optimization'],
  },
];

export default function Education() {
  return (
    <section id="about" className="education-section">
      <span className="education-label">Academic Background</span>
      <h2 className="education-title">Education</h2>

      <div className="education-school">
        <div className="education-school-logo">
          <img src="/images/unlv.png" alt="UNLV logo" onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div className="education-school-info">
          <span className="education-school-name">University of Nevada, Las Vegas</span>
          <span className="education-school-degree">Bachelor of Science in Computer Science</span>
        </div>
      </div>

      <p className="education-intro">
        Courses that helped me understand both software development and the principles behind it.
      </p>
      <div className="education-cards">
        {courses.map((course) => (
          <div key={course.number} className="education-card">
            <span className="education-number">{course.number}</span>
            <h3 className="education-course-title">{course.title}</h3>
            <p className="education-description">{course.description}</p>
            <ul className="education-topics">
              {course.topics.map((topic) => (
                <li key={topic} className="education-topic">{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
