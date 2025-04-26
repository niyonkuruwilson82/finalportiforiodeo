import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>About Me</h1>
        <section className="about-content">
          <p>
            I&apos;m a professional web developer with expertise in Next.js, React, 
            and modern web technologies. With 5 years of experience, I&apos;ve helped
            numerous clients bring their digital visions to life.
          </p>
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              <li>Next.js/React</li>
              <li>TypeScript</li>
              <li>Responsive Design</li>
              <li>CSS/Sass</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
