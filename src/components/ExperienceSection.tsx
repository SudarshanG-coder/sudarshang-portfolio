import { Building, Calendar, MapPin, Brain, Container, Users, Code2 } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: "Deepcept AI",
    role: "AI & ML Development Intern",
    duration: "2025-Present",
    location: "Remote",
    description: "Focused on developing cutting-edge machine learning models and implementing scalable AI solutions.",
    achievements: [
      "Developed and optimized ML models for real-world applications",
      "Dockerized AI applications for seamless deployment and scalability",
      "Worked extensively with Gen-AI technologies and clustering algorithms",
      "Collaborated with cross-functional teams on innovative AI projects",
      "Implemented best practices for model versioning and deployment"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "Gen-AI", "Clustering", "MLOps"]
  };

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
          {/* Experience */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-heading font-bold mb-8 text-gradient-secondary flex items-center">
              <Building className="w-6 h-6 mr-3" />
              Professional Experience
            </h3>

            <div className="glass-card hover:glow-primary transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                    {experience.role}
                  </h4>
                  <div className="text-primary font-semibold mb-2">
                    {experience.company}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm gap-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Brain className="w-6 h-6" />
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-6">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Code2 className="w-4 h-4 mr-2" />
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
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
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-heading font-bold mb-8 text-gradient-secondary flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              Education Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.institution} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      item.status === 'current' 
                        ? 'bg-gradient-primary animate-glow-pulse' 
                        : 'bg-gradient-secondary'
                    }`}>
                      <div className="w-3 h-3 bg-background rounded-full" />
                    </div>

                    {/* Content */}
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