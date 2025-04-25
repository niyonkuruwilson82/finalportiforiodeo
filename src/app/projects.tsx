import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with Next.js and Node.js",
    technologies: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website for a graphic designer",
    technologies: ["React", "CSS Modules"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for team collaboration",
    technologies: ["TypeScript", "Firebase"]
  }
];

export default function Projects() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}