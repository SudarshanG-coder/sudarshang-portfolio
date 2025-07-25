import { Brain, Database, Code, Container, GitBranch, Eye, BarChart3, Cpu } from 'lucide-react';
import circuitBoardImage from '@/assets/circuit-board.jpg';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Keras", level: 90 },
        { name: "Scikit-Learn", level: 92 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 88 },
        { name: "Matplotlib", level: 85 },
        { name: "Data Mining", level: 82 }
      ]
    },
    {
      title: "Computer Vision",
      icon: <Eye className="w-6 h-6" />,
      skills: [
        { name: "OpenCV", level: 85 },
        { name: "Image Processing", level: 80 },
        { name: "Object Detection", level: 78 },
        { name: "Feature Extraction", level: 82 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Container className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 70 },
        { name: "VS Code", level: 73 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      title: "Hardware & IoT",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Arduino", level: 85 },
        { name: "Raspberry Pi", level: 74 },
        { name: "Circuit Design", level: 78 },
        { name: "Sensors", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={circuitBoardImage} 
          alt="Circuit Board Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Constantly evolving skillset focused on cutting-edge AI and software development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card hover:glow-primary transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-heading font-bold mb-8 text-gradient-secondary">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'Docker', 'Git', 'OpenCV', 
              'Scikit-Learn', 'NumPy', 'Pandas', 'VS Code', 'Linux', 'Arduino'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:glow-accent transition-all duration-300 hover:scale-105 float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;