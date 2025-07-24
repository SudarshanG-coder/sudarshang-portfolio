import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/SudarshanG-coder",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/sudarshan-g-AI", 
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:gsudarshan925@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-12 glass border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="font-heading text-2xl font-bold text-gradient-primary mb-3">
                Sudarshan G
              </div>
              <p className="text-muted-foreground text-sm">
                AI Enthusiast & Software Engineer
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Connect
              </h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:glow-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-primary mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Sudarshan G. All rights reserved.
            </div>
            
            <div className="flex items-center text-muted-foreground text-sm">
              Built with 
              <Heart className="w-4 h-4 mx-2 text-primary animate-pulse" />
              using AI & React
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
    </footer>
  );
};

export default Footer;