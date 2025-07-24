import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "gsudarshan925@gmail.com",
      href: "mailto:gsudarshan925@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8147553319",
      href: "tel:+918147553319"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Karnataka, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/SudarshanG-coder",
      gradient: "from-primary to-accent"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/sudarshan-g-AI",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to collaborate on innovative AI solutions? Let's discuss your next project!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="glass-card">
              <h3 className="text-2xl font-heading font-bold mb-6 text-gradient-secondary">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-button glow-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gradient-secondary">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center">
                      <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card">
                <h3 className="text-xl font-heading font-bold mb-6 text-gradient-secondary">
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 glass rounded-lg hover:glow-primary transition-all duration-300 hover:scale-105 group"
                    >
                      <div className={`p-2 bg-gradient-to-r ${social.gradient} rounded-lg mr-3 group-hover:animate-float`}>
                        {social.icon}
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Note */}
              <div className="glass-card bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="text-center">
                  <h4 className="text-lg font-heading font-bold mb-3 text-gradient-primary">
                    Let's Build Something Amazing Together!
                  </h4>
                  <p className="text-muted-foreground">
                    Whether it's AI, ML, IoT, or any innovative tech project, I'm always excited to collaborate and create impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;