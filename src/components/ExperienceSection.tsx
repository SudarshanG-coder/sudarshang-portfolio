import { Building, Calendar, MapPin, Brain, Users, Code2, ShieldCheck } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Information Security",
      role: "ISO 27001 Trainee",
      duration: "Dec 2025 – Present",
      location: "Chickballapur, India",
      description: "Actively contributing to ISO/IEC 27001 Information Security Management System (ISMS) implementation and compliance activities.",
      achievements: [
        "Supporting implementation of ISO/IEC 27001 ISMS framework",
        "Assisting certification preparation for Sri Sathya Sai Sarla Memorial Hospital",
        "Coordinating Information Security Awareness Training programs",
        "Maintaining training attendance records and ISMS compliance documentation",
        "Supporting risk assessment documentation and internal audit preparation"
      ],
      technologies: ["ISO 27001", "ISMS", "Risk Assessment", "Compliance", "Internal Audit"],
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      company: "Deepcept AI",
      role: "AI & ML Development Intern",
      duration: "Jan 2025 – Dec 2025",
      location: "Remote",
      description: "Focused on developing cutting-edge machine learning models and implementing scalable AI solutions.",
      achievements: [
        "Developed and optimized ML models for real-world applications",
        "Dockerized AI applications for seamless deployment and scalability",
        "Worked extensively with Gen-AI technologies and clustering algorithms",
        "Collaborated with cross-functional teams on innovative AI projects",
        "Implemented best practices for model versioning and deployment"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "Gen-AI", "Clustering", "MLOps"],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const timeline = [
    {
      institution: "SJC Institute of Technology",
      degree: "B.E. in Electronics and Communication Engineering",
      duration: "2021-2024",
      score: "CGPA: 8.6",
      status: "current"
    },
    {
      institution: "BGS PU College",
      degree: "Pre-University Course",
      duration: "2019 - 2021",
      score: "70%",
      status: "completed"
    },
    {
      institution: "Panchagiri High School",
      degree: "High School",
      duration: "2018 - 2019",
      score: "71%",
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Experience Section */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-heading font-bold mb-8 text-gradient-secondary flex items-center">
              <Building className="w-6 h-6 mr-3" />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card hover:glow-primary transition-all duration-500">
                  
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                        {exp.role}
                      </h4>
                      <div className="text-primary font-semibold mb-2">
                        {exp.company}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      {exp.icon}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <Code2 className="w-4 h-4 mr-2" />
                      Technologies / Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 glass text-xs font-medium rounded-full text-accent border border-accent/20 hover:glow-accent transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-heading font-bold mb-8 text-gradient-secondary flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              Education Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      item.status === 'current' 
                        ? 'bg-gradient-primary animate-glow-pulse' 
                        : 'bg-gradient-secondary'
                    }`}>
                      <div className="w-3 h-3 bg-background rounded-full" />
                    </div>

                    <div className="ml-6 glass-card flex-1 hover:glow-secondary transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-heading font-bold text-foreground">
                          {item.institution}
                        </h4>
                        {item.status === 'current' && (
                          <span className="px-2 py-1 bg-gradient-primary text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold mb-2">
                        {item.degree}
                      </p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{item.duration}</span>
                        <span className="font-semibold text-accent">{item.score}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
