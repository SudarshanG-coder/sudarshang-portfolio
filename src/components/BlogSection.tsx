import React from 'react';
import { Clock, ArrowRight, Brain, Shield, Database } from 'lucide-react';

const BlogSection = () => {
  const blogs = [{
    title: "My Journey into Machine Learning",
    excerpt: "From electronics engineering to AI development - exploring the fascinating world of machine learning algorithms and their real-world applications.",
    readTime: "5 min read",
    tags: ["Machine Learning", "Career", "AI"],
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-primary to-accent",
    date: "Dec 2024"
  }, {
    title: "Lessons Learned from IoT-Based Safety Systems",
    excerpt: "Building the LPG monitoring system taught me valuable lessons about hardware-software integration and the importance of reliable safety mechanisms.",
    readTime: "7 min read",
    tags: ["IoT", "Safety", "Hardware"],
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-secondary to-primary",
    date: "Nov 2024"
  }, {
    title: "Why I Love Working with Data",
    excerpt: "Data tells stories that numbers alone cannot. Discovering patterns, extracting insights, and turning raw information into actionable intelligence.",
    readTime: "4 min read",
    tags: ["Data Science", "Analytics", "Insights"],
    icon: <Database className="w-6 h-6" />,
    gradient: "from-accent to-secondary",
    date: "Oct 2024"
  }];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Insights from my journey in AI, IoT, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.title}
              className="group glass-card hover:glow-primary transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${blog.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:animate-float`}>
                {blog.icon}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 glass text-xs font-medium rounded-full text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="glass-button w-full group/btn">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;