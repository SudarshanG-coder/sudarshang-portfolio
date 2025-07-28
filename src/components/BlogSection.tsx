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
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article 
              key={blog.title}
              className="glass-card hover:glow-primary transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-4 bg-gradient-to-br ${blog.gradient} rounded-t-xl`}>
                <div className="flex items-center justify-between text-background">
                  {blog.icon}
                  <span className="text-sm font-medium">{blog.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {blog.readTime}
                  </div>
                  
                  <button className="flex items-center text-primary hover:text-accent transition-colors group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 glass text-xs font-medium rounded-full text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;