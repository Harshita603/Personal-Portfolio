import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Instagram, Download } from 'lucide-react';
import profileImg from '@/assets/Gemini_Generated_Image_wgj9fewgj9fewgj9.png';


const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Hi, I'm Harshita Sharma", "Web Developer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins">
              <span className="text-gradient">{text}</span>
              <span className="text-primary animate-pulse">|</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg">
            Passionate about building engaging and visually stunning websites with clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">

            <Button 
              asChild
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg transition-all duration-300"
            >
              <a href="/Harshita.resume.pdf" download="Harshita_Sharma_Resume.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full dotted-border p-4 purple-glow">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Harshita Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-50"
      >
        <a 
          href="www.linkedin.com/in/harshita-sharma-1701112aa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:shadow-glow-strong transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/Harshita603" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:shadow-glow-strong transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/harsyita07/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:shadow-glow-strong transition-all duration-300"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
