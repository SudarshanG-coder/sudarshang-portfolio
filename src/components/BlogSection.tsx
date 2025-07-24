import { Clock, ArrowRight, Brain, Shield, Database } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: "My Journey into Machine Learning",
      excerpt: "From electronics engineering to AI development - exploring the fascinating world of machine learning algorithms and their real-world applications.",
      readTime: "5 min read",
      tags: ["Machine Learning", "Career", "AI"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-primary to-accent",
      date: "Dec 2024"
    },
    {
      title: "Lessons Learned from IoT-Based Safety Systems",
      excerpt: "Building the LPG monitoring system taught me valuable lessons about hardware-software integration and the importance of reliable safety mechanisms.",
      readTime: "7 min read", 
      tags: ["IoT", "Safety", "Hardware"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-secondary to-primary",
      date: "Nov 2024"
    },
    {
      title: "Why I Love Working with Data",
      excerpt: "Data tells stories that numbers alone cannot. Discovering patterns, extracting insights, and turning raw information into actionable intelligence.",
      readTime: "4 min read",
      tags: ["Data Science", "Analytics", "Insights"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-accent to-secondary",
      date: "Oct 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient-primary">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights, experiences, and learnings from my journey in AI and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div 
              key={blog.title}
              className="group glass-card hover:glow-secondary transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Blog Icon with Gradient */}
              <div className={`w-14 h-14 bg-gradient-to-r ${blog.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-float`}>
                {blog.icon}
              </div>

              {/* Date */}
              <div className="text-xs text-muted-foreground mb-3 font-medium">
                {blog.date}
              </div>

              {/* Blog Title */}
              <h3 className="text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {blog.title}
              </h3>

              {/* Blog Excerpt */}
              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 glass text-xs font-medium rounded-full text-accent border border-accent/20 hover:glow-accent transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More & Read Time */}
              <div className="flex items-center justify-between">
                <button className="flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors duration-300 group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="flex items-center text-muted-foreground text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {blog.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="glass-button glow-primary group">
            <Brain className="w-5 h-5 mr-3 group-hover:animate-spin" />
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;