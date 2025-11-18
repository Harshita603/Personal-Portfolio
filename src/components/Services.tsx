import { motion } from 'framer-motion';
import { Code, Palette, Wrench, Server } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Build responsive, fast, and interactive websites using HTML, CSS, and JavaScript. Deliver high-performing websites that work seamlessly across all devices to ensure a smooth user experience.',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Craft clean, modern UI/UX designs that are user-friendly and visually appealing. Focus on intuitive layouts, beautiful color palettes, and branding that connects with your audience.',
  },
  {
    icon: Server,
    title: 'Frontend Technologies',
    description: 'Specializing in JavaScript, CSS, and frameworks like React to build dynamic web apps. Implement scalable frontend architectures and ensure fast load times with optimized coding practices.',
  },
  {
    icon: Wrench,
    title: 'Web Maintenance',
    description: 'Providing ongoing maintenance, bug fixes, and performance monitoring for your website. Ensure your site stays updated, secure, and aligned with the latest web standards and trends.',
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-center mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-2xl border border-primary/20 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow-strong transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
