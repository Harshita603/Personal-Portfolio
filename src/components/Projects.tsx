
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import portfolio from "@/assets/Screenshot 2025-11-18 130349.png";
import water from "@/assets/Screenshot 2025-11-18 162411.png";

interface Project {
  title: string;
  tech: string[];
  image: string;
  live?: string; // optional
}

const projects: Project[] = [
  {
    title: 'AK Water Solution',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: water,
    live: 'https://akwatersolutions.com/',
  },


  {
    title: 'Portfolio Website',
    tech: ['React', 'Redux', 'CSS', 'Firebase'],
    image: portfolio,
    live: 'https://your-portfolio-demo.com',
  },
  {
    title: 'Social Media Dashboard',
    tech: ['React', 'Chart.js', 'API', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
   
  },
    {
    title: 'Weather Dashboard',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
    
  },

];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-center mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-primary/20 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-poppins mb-3">{project.title}</h3>

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LIVE BUTTON — Only show if link exists */}
                  {project.live && (
                    <div className="flex gap-3 mt-4">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                        size="sm"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
