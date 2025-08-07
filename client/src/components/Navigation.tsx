import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import SearchModal from "@/components/SearchModal";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { href: "/", label: "ACCUEIL" },
    { 
      href: "/apropos", 
      label: "À PROPOS", 
      hasDropdown: true,
      subItems: [
        { href: "/apropos/histoire", label: "Notre histoire" },
        { href: "/apropos/equipe", label: "Notre équipe" },
        { href: "/apropos/bureaux", label: "Nos bureaux" },
        { href: "/apropos/outils", label: "Nos outils" },
        { href: "/apropos/plateforme", label: "Plateforme d'échange" }
      ]
    },
    { 
      href: "/activites", 
      label: "NOS ACTIVITÉS",
      hasDropdown: true,
      subItems: [
        { href: "/activites/equipement-technique", label: "Équipement technique du bâtiment" },
        { href: "/activites/optimisation-energetique", label: "Optimisation énergétique" },
        { href: "/activites/energie-durable", label: "Énergie et construction durable" },
        { href: "/activites/pilotage-projets", label: "Pilotage de projets" },
        { href: "/activites/complementaires", label: "Activités complémentaires" }
      ]
    },
    { 
      href: "/projets", 
      label: "PROJETS", 
      hasDropdown: true,
      subItems: [
        { href: "/projets/alimentaire", label: "Alimentaire" },
        { href: "/projets/centrales-energie", label: "Centrales d'Énergie" },
        { href: "/projets/commerce", label: "Commerce" },
        { href: "/projets/datacenter", label: "Datacenter & Télécommunications" },
        { href: "/projets/education", label: "Éducation" },
        { href: "/projets/administration", label: "Immeuble administratif" },
        { href: "/projets/industrie", label: "Industrie" },
        { href: "/projets/logement", label: "Logement" },
        { href: "/projets/soins", label: "Maison de soins" }
      ]
    },
    { href: "/actualites", label: "ACTUALITÉS" },
    { 
      href: "/jobs", 
      label: "JOBS",
      hasDropdown: true,
      subItems: [
        { href: "/jobs/postes-ouverts", label: "Postes ouverts" },
        { href: "/jobs/candidatures", label: "Candidatures spontanées" },
        { href: "/jobs/stages", label: "Stages" }
      ]
    },
    { 
      href: "/contact", 
      label: "CONTACT",
      hasDropdown: true,
      subItems: [
        { href: "/contact", label: "Nos coordonnées" },
        { href: "/contact/bureaux", label: "Guidage vers nos bureaux" },
        { href: "/contact/transport", label: "Venir en bus" }
      ]
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  };

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  // Handle Escape key to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [searchOpen]);

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
              <div 
                key={item.href} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
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
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.subItems && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 glass-blue rounded-lg shadow-xl z-50 py-2"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href} onClick={closeDropdown}>
                        <div className="px-4 py-2 text-white hover:text-neon-blue hover:bg-white/10 transition-colors duration-200 cursor-pointer text-sm">
                          {subItem.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Search Icon */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-neon-blue transition-colors duration-300" 
              data-testid="search-button"
              title="Rechercher dans le site"
            >
              <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'} text-lg`}></i>
            </button>
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

        {/* Search Modal */}
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-blue mt-2 rounded-lg p-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link 
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
                      {item.hasDropdown && (
                        <i className="fas fa-chevron-down ml-1 text-xs"></i>
                      )}
                    </div>
                  </Link>
                  
                  {/* Mobile Submenus */}
                  {item.hasDropdown && item.subItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link 
                          key={subItem.href} 
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-gray-300 hover:text-neon-blue transition-colors duration-200 cursor-pointer text-sm py-1">
                            • {subItem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
