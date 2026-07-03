import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import '../styles/Education.css';

const EDUCATION = [
  {
    institution: 'Chandigarh University',
    degree: 'Master of Computer Applications (MCA) — Cloud Computing (Distance Learning)',
    date: 'Sep 2025 – Jul 2027',
    current: true,
    grade: '',
    description:
      'Currently in the first year of MCA with a specialization in Cloud Computing. Coursework includes Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.',
    icon: GraduationCap,
  },
  {
    institution: 'Chandigarh University',
    degree: 'Bachelor of Computer Applications (BCA)',
    date: 'Sep 2022 – Jul 2025',
    grade: '7.90 CGPA',
    description:
      "Completed BCA with coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    icon: GraduationCap,
  },
  {
    institution: 'B.R.B. College, Samastipur',
    degree: 'ISC (XII), Science with Mathematics',
    date: 'Apr 2019 – Apr 2021',
    grade: '72.2%',
    description: 'Completed class 12 with Science and Mathematics.',
    icon: School,
  },
  {
    institution: 'H.N. High School, Barheta, Kalyanpur, Samastipur, Bihar',
    degree: 'Class X',
    date: 'Apr 2018 – Apr 2019',
    grade: '80.2%',
    description: 'Completed school education with a focus on Science.',
    icon: School,
  },
];

const itemVariant = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="education__inner">
        <ScrollReveal>
          <p className="education__eyebrow">Education</p>
          <h2 className="education__heading">Academic background</h2>
          <p className="education__subheading">
            My journey from school through to a Master's in Cloud Computing.
          </p>
        </ScrollReveal>

        <div className="education__timeline">
          {EDUCATION.map((item) => (
            <motion.div
              className="education__item"
              key={`${item.institution}-${item.degree}`}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="education__marker">
                <span className={`education__dot ${item.current ? 'education__dot--current' : ''}`} />
              </div>

              <div className="education__card">
                <div className="education__card-top">
                  <span className="education__icon">
                    <item.icon strokeWidth={1.6} />
                  </span>

                  <div className="education__card-header">
                    <h3 className="education__institution">{item.institution}</h3>
                    <p className="education__degree">{item.degree}</p>
                    <span className="education__date">
                      {item.date}
                      {item.current && <span className="education__badge">Ongoing</span>}
                    </span>
                  </div>
                </div>

                {item.grade && (
                  <p className="education__grade">
                    <span>Grade:</span> {item.grade}
                  </p>
                )}

                <p className="education__description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}