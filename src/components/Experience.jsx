import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import '../styles/Experience.css';

const EXPERIENCE = [
  {
    role: 'Process Associate',
    company: 'Kriya Next Wealth Pvt. Ltd.',
    location: 'Bangalore',
    date: 'Mar 2026 – Present',
    current: true,
    description:
      'Managing and processing large volumes of client and financial data using cloud-based tools and platforms, ensuring accuracy, consistency, and timely turnaround across daily operations.',
    skills: ['Cloud-Based Tools', 'Data Processing', 'Quality Assurance (QA)', 'MS Excel', 'Process Management'],
  },
  {
    role: 'AI Data Trainer',
    company: 'OLA Krutrim',
    date: 'Mar 2025 – Nov 2025',
    description:
      "Collaborating with the AI/ML team to annotate, label, and curate large datasets (text, images, audio) for training generative and conversational AI models.",
    skills: ['Data Annotation & Labeling', 'Quality Assurance (QA)', 'Annotation Tools', 'Communication & Team Collaboration', 'Problem-Solving'],
  },
  {
    role: 'Web Development — Minor Project',
    company: 'Chandigarh University',
    date: 'Jul 2024 – Nov 2024',
    description:
      'Developed QuickRide, a website that allows users to rent vehicles easily, with a smooth, dynamic booking experience.',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    role: 'Java Programmer',
    company: 'CodSoft',
    date: 'Feb 2024 – Mar 2024',
    description:
      'Wrote Java code to implement an ATM interface and a random number guessing game, focusing on functional logic and interactive user experience.',
    skills: ['Java', 'IntelliJ Idea'],
  },
];

const itemVariant = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <ScrollReveal>
          <p className="experience__eyebrow">Experience</p>
          <h2 className="experience__heading">Where I've worked</h2>
          <p className="experience__subheading">
            Internships and roles where I've built real products and learned by shipping.
          </p>
        </ScrollReveal>

        <div className="experience__timeline">
          {EXPERIENCE.map((item) => (
            <motion.div
              className="experience__item"
              key={`${item.company}-${item.date}`}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="experience__marker">
                <span className={`experience__dot ${item.current ? 'experience__dot--current' : ''}`} />
              </div>

              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{item.role}</h3>
                    <p className="experience__company">
                      {item.company}
                      {item.location && <span className="experience__location"> · {item.location}</span>}
                    </p>
                  </div>
                  <span className="experience__date">
                    {item.date}
                    {item.current && <span className="experience__badge">Current</span>}
                  </span>
                </div>

                <p className="experience__description">{item.description}</p>

                {item.skills.length > 0 && (
                  <div className="experience__skills">
                    {item.skills.map((skill) => (
                      <span key={skill} className="experience__skill">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}