import { useEffect, useRef } from 'react';
import '../styles/About.css';

const FACTS = [
  { label: 'Current role', value: 'Process Associate · Kriya Nexwealth' },
  { label: 'Certified', value: 'AWS Solutions Architect – Associate' },
  { label: 'Focus', value: 'Cloud, automation, reliability' },
  { label: 'Status', value: 'Open to DevOps opportunities' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        <div className="about__text">
          <h2 className="about__heading">
            Building things at the intersection of
            <span className="about__highlight"> code and cloud</span>.
          </h2>
          <p className="about__body">
            I'm Adarsh Kumar, a Junior DevOps Engineer with backend development
            experience in Java and Spring Boot, and hands-on exposure to AWS, Docker,
            and CI/CD practices. I like building things that don't just work, but hold
            up — from writing clean REST APIs to shipping them on infrastructure that's
            actually reliable.
          </p>
          <p className="about__body">
            Right now I work as a Process Associate at Kriya Nexwealth Pvt Ltd, while
            deepening my cloud and DevOps skills on the side — treating every personal
            project as a chance to practice the full workflow end to end: build,
            containerize, deploy, monitor.
          </p>
        </div>

        <div className="about__facts">
          {FACTS.map((fact, i) => (
            <div className="about__fact-card" key={fact.label} style={{ '--i': i }}>
              <p className="about__fact-label">{fact.label}</p>
              <p className="about__fact-value">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}