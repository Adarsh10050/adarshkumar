import { motion } from 'framer-motion';
import {
  Atom, Layers, Code2, Cloud, Database, TerminalSquare,
} from 'lucide-react';
import SkillCard from './SkillCard';
import ScrollReveal from './ScrollReveal';
import '../styles/SkillCard.css';

const CATEGORIES = [
  {
    title: 'Frontend',
    icon: Atom,
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Layers,
    skills: ['Spring Boot', 'Spring Security', 'REST APIs'],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'JavaScript'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'Docker', 'Jenkins', 'CI/CD'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL'],
  },
  {
    title: 'Tools & Others',
    icon: TerminalSquare,
    skills: ['Git', 'GitHub', 'Linux', 'Postman', 'VS Code', 'IntelliJ'],
  },
];

const groupVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <ScrollReveal>
          <p className="skills__eyebrow">Skills</p>
          <h2 className="skills__heading">What I work with</h2>
          <p className="skills__subheading">
            Technologies and tools I use across frontend, backend, and infrastructure.
          </p>
        </ScrollReveal>

        <div className="skills__groups">
          {CATEGORIES.map((category) => (
            <motion.div
              className="skills__group"
              key={category.title}
              variants={groupVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="skills__group-header">
                <span className="skills__group-icon">
                  <category.icon strokeWidth={1.6} />
                </span>
                <h3 className="skills__group-title">{category.title}</h3>
                <span className="skills__group-count">{category.skills.length}</span>
              </div>

              <div className="skills__list">
                {category.skills.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}