import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Contact Me</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <div className="contact-info">
          <h2>Direct Contact</h2>
          <p>Email: contact@portfolio.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </main>
    </div>
  );
}