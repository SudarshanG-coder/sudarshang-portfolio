import { useState, useEffect } from 'react';
import { Download, ArrowDown, Github, Linkedin } from 'lucide-react';
import codingImage from '@/assets/coding-monitor.jpg';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Sudarshan G";
  const subtitle = "AI | ML | Software Engineer";
  const tagline = "Turning ideas into intelligent solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={codingImage} 
          alt="Coding Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Heading with Typing Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6">
            <span className="text-gradient-primary">{text}</span>
            <span className="typing-cursor" />
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-body font-light mb-4 text-gradient-secondary animate-slide-up">
            {subtitle}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
            {tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <button className="glass-button glow-primary group">
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download Resume
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-button group"
            >
              Connect with Me
              <ArrowDown className="w-5 h-5 ml-3 group-hover:animate-bounce" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 animate-fade-in">
            <a 
              href="https://github.com/SudarshanG-coder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:glow-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sudarshan-g-AI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:glow-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="scroll-indicator">
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;