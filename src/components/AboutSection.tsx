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
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-80 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-90 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-70 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-60 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 animate-pulse" style={{ animationDelay: '0.8s' }} />
                <div className="relative glass-card p-2 rounded-full">
                  <img src={avatarImage} alt="Sudarshan G" className="w-80 h-80 object-cover rounded-full" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="glass-card">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gradient-secondary">
                  Cybersecurity & AI Engineer
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate <span className="text-accent font-semibold">Cybersecurity & AI Engineer</span> with a background in Electronics and Communication Engineering, focused on building secure and intelligent systems.
                </p>
                
                <p>
                  During my experience at <span className="text-accent font-semibold">Deepcept AI</span>, I worked on machine learning models, Gen-AI applications, and Dockerized deployments. I also explored clustering algorithms and real-world AI problem solving.
                </p>
                
                <p>
                  My interests lie at the intersection of <span className="text-accent font-semibold">Cybersecurity, AI, and Network Analysis</span>. I actively work with tools like Wireshark, and I enjoy analyzing network traffic, detecting anomalies, and building intelligent security solutions.
                </p>
                
                <p>
                  I’m also an open-source contributor and continuously upskill through hands-on projects. I aim to create impactful solutions where security meets intelligence.
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
