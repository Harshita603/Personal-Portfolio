const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-primary mb-4">Harshita Sharma</h3>
            <p className="text-muted-foreground">
              Frontend Developer passionate about creating beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                📧 Harshita22076@gmail.com
              </li>
              <li className="text-muted-foreground">
                📱 7986122076
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
          <p>© 2024 Harshita Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
