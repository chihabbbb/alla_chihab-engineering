import { useEffect } from "react";
import { Link } from "wouter";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.glass, .hover-lift').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-800/80 to-dark-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-dark-900/50"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
              <span className="text-neon-blue text-glow">L'INGÉNIEUR</span>
              <span className="text-white"> CONSEIL :</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-gray-200" data-testid="hero-subtitle">
              ENTRE SAVOIR ET SAVOIR-ÊTRE
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
              L'ingénierie appliquée au service du bâtiment. Innovation, audace, maîtrise... 
              Pour Alla Chihab Engineering, c'est à la fois un credo technique et un mode de pensée.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/projets">
                <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border hover-lift" data-testid="button-discover-projects">
                  <i className="fas fa-rocket mr-2"></i>
                  DÉCOUVRIR NOS PROJETS
                </button>
              </Link>
              <Link href="/contact">
                <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 hover-lift" data-testid="button-contact-experts">
                  <i className="fas fa-phone mr-2"></i>
                  CONTACTEZ NOS EXPERTS
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 relative" data-testid="core-pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Industrial Image */}
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380')"
          }}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4" data-testid="pillars-title">
                <span className="text-neon-green text-glow">LES SOLUTIONS DURABLES</span>
              </h2>
              <p className="text-xl text-gray-300" data-testid="pillars-subtitle">AU CENTRE DE NOS PROJETS</p>
              <div className="w-32 h-1 gradient-neon mx-auto mt-8 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Compétences */}
              <div className="glass rounded-2xl p-8 hover-lift group" data-testid="pillar-competences">
                <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-blue/30 transition-colors duration-300">
                  <i className="fas fa-user-graduate text-2xl text-neon-blue"></i>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-neon-blue">COMPÉTENCES</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Les références de ACE et la fidélité de ses clients illustrent les compétences de notre bureau. 
                  Notre ligne de conduite : Accompagner les clients avec un travail de qualité.
                </p>
              </div>
              
              {/* Innovations */}
              <div className="glass rounded-2xl p-8 hover-lift group" data-testid="pillar-innovations">
                <div className="w-16 h-16 bg-neon-purple/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-purple/30 transition-colors duration-300">
                  <i className="fas fa-lightbulb text-2xl text-neon-purple"></i>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-neon-purple">INNOVATIONS</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  À l'écoute des évolutions technologiques, ACE est depuis toujours pionnier dans la mise en œuvre 
                  de solutions techniques innovantes et durables.
                </p>
              </div>
              
              {/* Indépendance */}
              <div className="glass rounded-2xl p-8 hover-lift group" data-testid="pillar-independence">
                <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-green/30 transition-colors duration-300">
                  <i className="fas fa-shield-alt text-2xl text-neon-green"></i>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-neon-green">INDÉPENDANCE</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Conserver l'indépendance du bureau est nécessaire pour garantir une identité et une neutralité 
                  absolue dans la proposition de solutions et analyses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-dark-800/50" data-testid="recent-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="projects-title">
              <span className="text-white">Nos projets</span> 
              <span className="text-neon-purple text-glow">récents</span>
            </h2>
            <p className="text-xl text-gray-300" data-testid="projects-subtitle">Découvrez nos réalisations innovantes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1 */}
            <div className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="project-skypark">
              <div className="h-48 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent group-hover:from-neon-blue/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-neon-blue">Skypark Business Center</h3>
                <p className="text-gray-400 text-sm">Centre d'affaires moderne avec équipements techniques avancés</p>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="project-wooden-building">
              <div className="h-48 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent group-hover:from-neon-green/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-neon-green">Immeuble administratif en bois</h3>
                <p className="text-gray-400 text-sm">Leudelange - Construction durable et écologique</p>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="project-howald">
              <div className="h-48 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent group-hover:from-neon-purple/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-neon-purple">Immeuble administratif</h3>
                <p className="text-gray-400 text-sm">Howald - Well 22, bureau moderne et connecté</p>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="project-cnis">
              <div className="h-48 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent group-hover:from-neon-blue/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-neon-blue">CNIS</h3>
                <p className="text-gray-400 text-sm">Centre National d'Intervention et de Secours</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projets">
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-view-all-projects">
                <i className="fas fa-eye mr-2"></i>
                VOIR TOUS LES PROJETS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* News/Actualités Section */}
      <section className="py-20" data-testid="news-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="news-title">
              <span className="text-white">Dernières</span> 
              <span className="text-neon-green text-glow">actualités</span>
            </h2>
            <p className="text-xl text-gray-300" data-testid="news-subtitle">Restez informé de nos innovations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News Article 1 */}
            <article className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="news-chiller">
              <div className="h-40 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-semibold">15 Janvier 2024</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-neon-blue">MANUTENTION CHILLER</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Dans le cadre de la décarbonisation des bâtiments anciens, nous développons des concepts 
                  innovants utilisant des machines frigorifiques...
                </p>
                <Link href="/actualites/manutention-chiller">
                  <span className="text-neon-blue text-sm font-semibold hover:text-neon-blue/80 transition-colors cursor-pointer" data-testid="link-read-more-chiller">
                    Lire plus <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </Link>
              </div>
            </article>
            
            {/* News Article 2 */}
            <article className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="news-smart-design">
              <div className="h-40 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-xs font-semibold">10 Janvier 2024</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-neon-purple">SMART DESIGN</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Dans un contexte où la performance énergétique, le confort thermique et la durabilité 
                  sont devenus des critères incontournables...
                </p>
                <Link href="/actualites/smart-design">
                  <span className="text-neon-purple text-sm font-semibold hover:text-neon-purple/80 transition-colors cursor-pointer" data-testid="link-read-more-smart-design">
                    Lire plus <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </Link>
              </div>
            </article>
            
            {/* News Article 3 */}
            <article className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="news-orientation-client">
              <div className="h-40 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-xs font-semibold">05 Janvier 2024</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-neon-green">ACE #ORIENTATIONCLIENT</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Alla Chihab Engineering accompagne ses clients lors de tests de performance de 
                  refroidissement des systèmes. Ces tests jouent un rôle crucial...
                </p>
                <Link href="/actualites/orientation-client">
                  <span className="text-neon-green text-sm font-semibold hover:text-neon-green/80 transition-colors cursor-pointer" data-testid="link-read-more-orientation">
                    Lire plus <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </Link>
              </div>
            </article>
            
            {/* News Article 4 */}
            <article className="glass rounded-2xl overflow-hidden hover-lift group" data-testid="news-securite-sociale">
              <div className="h-40 bg-cover bg-center relative" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-semibold">28 Décembre 2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-neon-blue">CITÉ VUN DER SÉCURITÉ SOCIALE</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Neuf Gabar op der Gare gouf presentéiert: A ACE Team ACE accompagnera le projet dans 
                  sa prochaine phase de développement...
                </p>
                <Link href="/actualites/securite-sociale">
                  <span className="text-neon-blue text-sm font-semibold hover:text-neon-blue/80 transition-colors cursor-pointer" data-testid="link-read-more-securite">
                    Lire plus <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </Link>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/actualites">
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-green/20 transition-all duration-300 neon-border" data-testid="button-view-all-news">
                <i className="fas fa-newspaper mr-2"></i>
                VOIR TOUTES LES ACTUALITÉS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-dark-800/50" data-testid="contact-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="cta-title">
            <span className="text-white">Pour tout renseignement,</span> 
            <span className="text-neon-purple text-glow">contactez-nous...</span>
          </h2>
          
          <Link href="/contact">
            <button className="glass-blue px-12 py-6 rounded-2xl font-semibold text-white hover:bg-neon-blue/30 transition-all duration-300 neon-border text-lg hover-lift" data-testid="button-contact-cta">
              <i className="fas fa-phone mr-3"></i>
              CONTACTEZ NOS EXPERTS
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
