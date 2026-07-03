import { motion } from 'framer-motion';
import {
  Car, Calculator, UserRound, CalendarDays, Dices, Contact, Cloud,
} from 'lucide-react';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import '../styles/Projects.css';

const PROJECTS = [
  {
    title: 'Wedding Booking REST API', // confirm final title
    description:
      'Scalable REST APIs for booking, authentication, and user management. Optimized MySQL schema and queries for faster, consistent booking operations, and deployed on AWS EC2 with S3 for static storage.',
    tech: ['Spring Boot', 'MySQL', 'AWS EC2', 'AWS S3'],
    icon: Cloud,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984767/Screenshot_2026-07-02_150242_tfxvom.png',
    demoUrl: 'https://drive.google.com/file/d/1eVqoKcVTlcHTAdxwMjEMnbeuWup35q1C/view',
  },
  {
    title: 'The_Event_Master', // confirm final title
    description:
      'A modern event website built with React and Vite, designed to showcase event details, schedules, galleries, and memorable moments through a fast, elegant, and responsive experience.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'AWS S3', 'Git', 'GitHub', 'Vercel'],
    icon: UserRound,
    image: 'https://res.cloudinary.com/dd0bw31fi/image/upload/v1783056184/Screenshot_2026-07-03_105257_ticutm.png',
    liveUrl: 'https://the-event-master.vercel.app/',
  },
  {
    title: 'Wheelwise — Car & Bike Rental Platform',
    date: 'Jul 2024 – Nov 2024',
    description:
      'An online vehicle rental platform where users can browse listings, book cars or bikes, and manage rentals through a secure, seamless checkout flow.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: Car,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984285/Screenshot_2026-07-02_144726_zvbazc.png',
    demoUrl: 'https://drive.google.com/file/d/1Rlz_QfbCxseO-AwcQnzjyRHTscVIDUVu/view',
  },
  {
    title: 'Personal Portfolio — Aniket Kimonam', // confirm final title
    description:
      'A personal portfolio site built with React and Vite, focused on a fast, minimal browsing experience.',
    tech: ['React', 'Vite'],
    icon: UserRound,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984285/Screenshot_2026-07-02_144758_xov6ts.png',
    liveUrl: 'https://aniketkimonam.vercel.app/',
  },
  {
    title: 'MathSolver Templates',
    date: 'Sep 2025',
    description:
      'A Spring Boot + Thymeleaf app that solves mathematical problems and returns clear, step-by-step solutions through a simple interface.',
    tech: ['Spring Boot', 'Java', 'Thymeleaf', 'HTML', 'CSS', 'JavaScript'],
    icon: Calculator,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984284/Screenshot_2026-07-02_144821_hhtbyx.png',
  },
  {
    title: 'EventCrew', // confirm final title
    description:
      'An event management platform built with React and Vite for organizing and coordinating events.',
    tech: ['React', 'Vite'],
    icon: CalendarDays,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984285/Screenshot_2026-07-02_144840_kouweq.png',
    liveUrl: 'https://event-crew-omega.vercel.app/',
  },
  {
    title: 'Memorix — Smart Contact Management System',
    date: 'Sep 2025 – Oct 2025',
    description:
      'A secure contact management system for storing names, numbers, photos, and notes, with authentication and authorization built in via Spring Security.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Spring Security'],
    icon: Contact,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984285/Screenshot_2026-07-02_145042_xjfxqa.png',
    demoUrl: 'https://drive.google.com/file/d/1Ud7cdJeSsyDQjNyxgS3QWfecgrklylT8/view',
  },
  {
    title: 'Number Guessing Game',
    date: 'Mar 2024',
    description:
      'An interactive Java console game where players guess a randomly generated number, with instant feedback on each attempt.',
    tech: ['Java'],
    icon: Dices,
    image: 'https://res.cloudinary.com/dwie7kkgv/image/upload/f_auto,q_auto/v1782984285/Screenshot_2026-07-02_145130_buwork.png',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <ScrollReveal>
          <p className="projects__eyebrow">Projects</p>
          <h2 className="projects__heading">Things I've built</h2>
          <p className="projects__subheading">
            A mix of full-stack apps, APIs, and frontend builds across Java, Spring Boot, and React.
          </p>
        </ScrollReveal>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}