import { Github, ExternalLink, Brain, Cpu, Zap } from 'lucide-react';
import laptopImage from '@/assets/laptop-coding.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ML Algorithm Visualization Tool",
      description: "A comprehensive Python + Qt based visualization tool for machine learning algorithms using Scikit-Learn. Features interactive plots, real-time parameter tuning, and algorithm comparison capabilities.",
      tags: ["Python", "Qt", "Scikit-Learn", "Data Visualization"],
      icon: <Brain className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder",
      gradient: "from-primary to-accent"
    },
    {
      title: "IoT LPG Monitoring System",
      description: "Real-time LPG gas leakage and level alert system with GSM module integration. Recognized in KSCST Project Exhibition for innovative safety solutions.",
      tags: ["IoT", "Arduino", "GSM", "Safety Systems"],
      icon: <Cpu className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder",
      gradient: "from-secondary to-primary",
      award: "KSCST Exhibition Recognition"
    },
    {
      title: "Wireless Power Transfer Prototype",
      description: "Innovative inductive coupling-based wireless charger for mobile devices. Demonstrates efficient power transmission through electromagnetic fields.",
      tags: ["Electronics", "Wireless Technology", "Circuit Design"],
      icon: <Zap className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={laptopImage} 
          alt="Laptop Coding Background" 
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative solutions combining AI, IoT, and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group glass-card hover:glow-primary transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Icon with Gradient */}
              <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-float`}>
                {project.icon}
              </div>

              {/* Award Badge */}
              {project.award && (
                <div className="mb-4">
                  <span className="px-3 py-1 bg-gradient-secondary text-xs font-semibold rounded-full">
                    🏆 {project.award}
                  </span>
                </div>
              )}

              {/* Project Title */}
              <h3 className="text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 glass text-xs font-medium rounded-full text-primary border border-primary/20 hover:glow-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-button text-center group/btn"
                >
                  <Github className="w-4 h-4 mr-2 inline group-hover/btn:animate-spin" />
                  GitHub
                </a>
                <button className="glass p-3 rounded-lg hover:glow-accent transition-all duration-300 hover:scale-110">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="flex justify-center mt-12 animate-fade-in">
          <div className="glass-card p-8 text-center max-w-md">
            <h3 className="text-xl font-heading font-bold mb-4 text-gradient-primary">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover additional projects and contributions on my GitHub profile
            </p>
            <a 
              href="https://github.com/SudarshanG-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button glow-secondary group w-full"
            >
              <Github className="w-5 h-5 mr-3 group-hover:animate-spin" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;