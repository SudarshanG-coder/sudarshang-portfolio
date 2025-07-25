const avatarImage = '/lovable-uploads/c51766b8-0b24-437b-9273-105cbabb051d.png';
const AboutSection = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow-pulse" />
                <div className="relative glass-card p-2 rounded-full">
                  <img src={avatarImage} alt="Sudarshan G" className="w-80 h-80 object-cover rounded-full" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="glass-card">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gradient-secondary">
                  AI Enthusiast & Software Engineer
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate AI and Software Engineering Intern at Deepcept AI, with a B.E. in Electronics and Communication Engineering. My journey in technology is driven by an insatiable curiosity to transform complex data into intelligent, scalable solutions.
                  </p>
                  
                  <p>
                    With hands-on experience at <span className="text-accent font-semibold">Deepcept AI</span>, I've developed 
                    ML models, Dockerized AI applications, and worked extensively with Gen-AI and clustering projects. 
                    I believe in the power of collaboration and continuous learning to push the boundaries of what's possible.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me exploring the latest trends in artificial intelligence, 
                    contributing to open-source projects, or sharing knowledge through technical blogs. 
                    I'm always excited to take on new challenges and contribute to innovative solutions.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8.6</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">6+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>

                {/* Qualities */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Fast Learner', 'Team Player', 'Problem Solver', 'Innovation Focused'].map(quality => <span key={quality} className="px-4 py-2 glass rounded-full text-sm font-medium text-primary border border-primary/20 hover:glow-primary transition-all duration-300">
                      {quality}
                    </span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;