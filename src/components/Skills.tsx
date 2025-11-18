import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: 'HTML', percentage: 99 },
  { name: 'CSS', percentage: 95 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'Git', percentage: 70 },
  { name: 'React', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'Express.js', percentage: 75 },
  { name: 'MongoDB', percentage: 70 },
];

const SkillMeter = ({ skill, index }: { skill: Skill; index: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.percentage);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [skill.percentage, index]);

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-32 h-32">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.5))' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">{progress}%</span>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold font-poppins">{skill.name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-center mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {skills.map((skill, index) => (
              <SkillMeter key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
