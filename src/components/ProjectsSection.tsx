import { Github, ExternalLink, Brain, Cpu, Zap, Eye, Shield } from 'lucide-react';
import laptopImage from '@/assets/laptop-coding.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ISO 27001 Trainee – Information Security",
      description:
        "Supporting implementation of ISO/IEC 27001 ISMS, assisting certification preparation for Sri Sathya Sai Sarla Memorial Hospital, coordinating security awareness training, maintaining compliance documentation, and supporting risk assessment & internal audits.",
      tags: ["ISO 27001", "ISMS", "Cybersecurity", "Compliance", "Risk Assessment"],
      icon: <Shield className="w-8 h-8" />,
      github: "#",
      gradient: "from-green-400 to-blue-500",
      badge: "Cybersecurity",
      location: "Bengaluru, India",
      duration: "Dec 2025 – Present"
    },
    {
      title: "YOLO11 Custom Training",
      description:
        "Advanced computer vision project implementing YOLO11 object detection with custom dataset training for real-time recognition.",
      tags: ["YOLO11", "Computer Vision", "Deep Learning", "PyTorch"],
      icon: <Eye className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder/YOLO11-Custom-Training.git",
      gradient: "from-accent to-primary",
      badge: "AI/ML"
    },
    {
      title: "Fake News Classification Using NLP",
      description:
        "ML project detecting fake news using NLP techniques like TF-IDF & Logistic Regression with evaluation metrics.",
      tags: ["Python", "NLP", "Scikit-learn", "ML"],
      icon: <Brain className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder/Fake_News_Classification_Using_NLP",
      gradient: "from-primary to-accent",
      badge: "AI/ML"
    },
    {
      title: "IoT LPG Monitoring System",
      description:
        "Real-time LPG gas leakage detection with GSM alerts. Recognized in KSCST Project Exhibition.",
      tags: ["IoT", "Arduino", "GSM"],
      icon: <Cpu className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder/IOT-LPG-Monitoring-Systems",
      gradient: "from-secondary to-primary",
      award: "KSCST Recognition"
    },
    {
      title: "Wireless Power Transfer Prototype",
      description:
        "Inductive coupling-based wireless charger demonstrating efficient power transmission.",
      tags: ["Electronics", "Wireless"],
      icon: <Zap className="w-8 h-8" />,
      github: "https://github.com/SudarshanG-coder/Wireless-Power-Transfer-Prototype",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={laptopImage}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4">
            AI, Cybersecurity & IoT Experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4`}>
                {project.icon}
              </div>

              {/* Badge */}
              {project.badge && (
                <span className="text-xs px-3 py-1 bg-primary/20 rounded-full">
                  {project.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold mt-3 mb-2">
                {project.title}
              </h3>

              {/* Location & Duration */}
              {project.location && (
                <p className="text-sm text-muted-foreground">
                  📍 {project.location}
                </p>
              )}
              {project.duration && (
                <p className="text-sm text-muted-foreground mb-2">
                  ⏳ {project.duration}
                </p>
              )}

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 border rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm flex items-center gap-1 hover:text-primary"
                >
                  <Github size={16} /> Code
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm flex items-center gap-1 hover:text-primary"
                >
                  <ExternalLink size={16} /> View
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/SudarshanG-coder"
            target="_blank"
            className="glass-button"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
