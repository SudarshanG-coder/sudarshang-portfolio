import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import colorfulCodeImage from '@/assets/colorful-code.jpg';

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
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append('access_key', '0568c99d-679d-468b-a15a-84d90c90bc8f');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
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
      href: "mailto:gsudarshan925@gmail.com?subject=Opportunity%20for%20Sudarshan%20G"
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
      value: "Bengaluru, Karnataka, India",
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={colorfulCodeImage} 
          alt="Colorful Code Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Contact Me
          </h2>
          <p className="text-lg text-accent font-semibold mt-2">
            Cybersecurity & AI Engineer | Open to Opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in AI, Cybersecurity, or innovative tech solutions? I'm open to internships, full-time roles, and collaborations. Let’s build something impactful.
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
                    placeholder="Tell me about your project or opportunity..."
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

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-8">
              
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
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a href={info.href} className="text-foreground hover:text-primary font-medium">
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
                      className="flex items-center justify-center p-4 glass rounded-lg hover:scale-105"
                    >
                      {social.icon}
                      <span className="ml-2">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card bg-gradient-to-r from-primary/10 to-accent/10 text-center">
                <h4 className="text-lg font-heading font-bold mb-3 text-gradient-primary">
                  Securing Systems. Building Intelligence.
                </h4>
                <p className="text-accent font-medium mb-2">
                  Cybersecurity | AI | ISMS | ISO 27001
                </p>
                <p className="text-muted-foreground">
                  Let’s collaborate on impactful and secure solutions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
