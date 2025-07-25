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
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient-primary mb-4">
            Latest Blogs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and experiences from my journey in AI and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${blog.gradient} flex items-center justify-center mb-4 text-white`}>
                {blog.icon}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;