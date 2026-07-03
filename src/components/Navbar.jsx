import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const LINKS = [
  { href: '#about', label: 'About', ids: ['hero', 'about'] },
  { href: '#skills', label: 'Skills', ids: ['skills'] },
  { href: '#projects', label: 'Projects', ids: ['projects'] },
  { href: '#experience', label: 'Experience', ids: ['experience'] },
  { href: '#education', label: 'Education', ids: ['education'] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const allIds = LINKS.flatMap((l) => l.ids);
    const sections = allIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#root" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="navbar__brand-dot" />
          portfolio
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={link.ids.includes(active) ? 'is-active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ '--i': LINKS.length }} className="navbar__github-item">
            <a
              href="https://github.com/Adarsh10050"
              target="_blank"
              rel="noreferrer"
              className="navbar__github"
              onClick={handleLinkClick}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6
                  0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.66-4.04-1.66-.55-1.43-1.34-1.82-1.34-1.82
                  -1.09-.77.08-.75.08-.75 1.21.09 1.84 1.28 1.84 1.28 1.07 1.87 2.8 1.33 3.49 1.02
                  .11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.14 0-1.36.47-2.46 1.24-3.33
                  -.12-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 0 1 6.01 0c2.29-1.6
                  3.3-1.27 3.3-1.27.66 1.7.24 2.95.12 3.26.77.87 1.24 1.97 1.24 3.33
                  0 4.77-2.8 5.82-5.48 6.13.43.38.81 1.13.81 2.28 0 1.64-.02 2.97-.02 3.38
                  0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </li>
        </ul>

        <button
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}