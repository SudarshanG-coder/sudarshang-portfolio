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
  return;
};
export default BlogSection;