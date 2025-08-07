import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "ACCUEIL" },
    { href: "/apropos", label: "À PROPOS", hasDropdown: true },
    { href: "/activites", label: "NOS ACTIVITÉS" },
    { href: "/projets", label: "PROJETS", hasDropdown: true },
    { href: "/actualites", label: "ACTUALITÉS" },
    { href: "/jobs", label: "JOBS" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="logo-link">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 gradient-neon rounded-lg flex items-center justify-center">
                <i className="fas fa-atom text-dark-900 text-lg"></i>
              </div>
              <div>
                <div className="text-lg font-bold text-neon-blue text-glow">ALLA CHIHAB</div>
                <div className="text-xs text-gray-400">ENGINEERING</div>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href} data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className={`flex items-center font-medium transition-colors duration-300 cursor-pointer ${
                    isActive(item.href) 
                      ? "text-neon-blue text-glow" 
                      : "text-white hover:text-neon-blue"
                  }`}>
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fas fa-chevron-down ml-1 text-xs"></i>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-neon-blue transition-colors"
              data-testid="mobile-menu-button"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-blue mt-2 rounded-lg p-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`font-medium transition-colors duration-300 cursor-pointer ${
                    isActive(item.href) 
                      ? "text-neon-blue text-glow" 
                      : "text-white hover:text-neon-blue"
                  }`}>
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
