import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#skills',
    label: 'Skills'
  }, {
    href: '#projects',
    label: 'Projects'
  }, {
    href: '#experience',
    label: 'Experience'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-heading text-xl font-bold text-gradient-primary">
            Sudarshan G
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 mx-[45px]">
              {navItems.map(item => <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium">
                  {item.label}
                </a>)}
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary transition-colors duration-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden glass backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => <a key={item.href} href={item.href} className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>)}
            <button className="w-full text-left px-3 py-2 glass-button text-sm font-medium">
              <Download className="w-4 h-4 mr-2 inline" />
              Resume
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;