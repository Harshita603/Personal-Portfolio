import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start relative">
            {/* Zigzag dotted line - visible only on larger screens */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M 0 0 L 20 50 L -20 100 L 20 150 L -20 200 L 20 250 L -20 300 L 20 350 L -20 400 L 20 450 L 0 500"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm Harshita, a frontend developer passionate about building engaging and visually stunning websites. 
                With a solid understanding of HTML, CSS, and JavaScript, I specialize in creating responsive designs 
                that work seamlessly across all devices. I'm driven by the desire to make the web a better place, 
                one line of code at a time. I believe in writing clean, maintainable code that not only meets the 
                needs of the user but also ensures scalability and performance.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-bold font-poppins text-primary mb-4">What I Do</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                What I do is more than just coding—I bring ideas to life through design and functionality. 
                Whether it's creating beautiful interfaces, implementing smooth animations, or ensuring the best 
                user experience, I'm committed to delivering projects that make an impact. I enjoy collaborating 
                with clients to understand their vision and turn it into a website that stands out. Constantly 
                learning new techniques and tools, I strive to stay ahead in the ever-evolving world of frontend development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
