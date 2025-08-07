export default function EquipementTechnique() {
  const services = [
    {
      name: "Chauffage",
      description: "Conception et dimensionnement des systèmes de chauffage modernes et efficaces",
      technologies: ["Chaudières condensation", "Pompes à chaleur", "Chauffage urbain", "Géothermie"],
      icon: "fas fa-fire",
      color: "neon-blue"
    },
    {
      name: "Ventilation",
      description: "Systèmes de ventilation et traitement d'air pour un confort optimal",
      technologies: ["VMC double flux", "Traitement d'air", "Récupération de chaleur", "Filtration avancée"],
      icon: "fas fa-wind",
      color: "neon-green"
    },
    {
      name: "Climatisation",
      description: "Solutions de refroidissement adaptées à tous types de bâtiments",
      technologies: ["VRV/VRF", "Free-cooling", "Systèmes hybrides", "Régulation intelligente"],
      icon: "fas fa-snowflake",
      color: "neon-purple"
    },
    {
      name: "Plomberie",
      description: "Réseaux de distribution d'eau sanitaire et d'évacuation",
      technologies: ["Réseaux bouclés", "Récupération eau de pluie", "Traitement d'eau", "Robinetterie intelligente"],
      icon: "fas fa-tint",
      color: "neon-blue"
    }
  ];

  const projects = [
    {
      name: "Centre Commercial Kirchberg",
      type: "Commerce",
      surface: "15,000 m²",
      systems: ["Climatisation VRF", "Ventilation centralisée", "Récupération de chaleur"],
      description: "Système HVAC intégré pour centre commercial avec récupération d'énergie.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Hôpital Regional",
      type: "Santé",
      surface: "25,000 m²",
      systems: ["Traitement d'air médicalisé", "Pression différentielle", "Filtration HEPA"],
      description: "Installation médicalisée avec normes strictes de qualité d'air.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Tour de Bureaux Infinity",
      type: "Tertiaire",
      surface: "20,000 m²",
      systems: ["Chauffage urbain", "Climatisation à eau glacée", "BMS intégré"],
      description: "Tour de bureaux avec système de gestion technique centralisée.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const standards = [
    {
      name: "EN 12831",
      description: "Calcul des charges thermiques",
      scope: "Dimensionnement chauffage",
      color: "neon-blue"
    },
    {
      name: "EN 13779",
      description: "Ventilation des bâtiments non résidentiels",
      scope: "Systèmes de ventilation",
      color: "neon-green"
    },
    {
      name: "EN 15251",
      description: "Critères d'ambiance intérieure",
      scope: "Confort et qualité d'air",
      color: "neon-purple"
    },
    {
      name: "Règlement Grand-ducal",
      description: "Performance énergétique Luxembourg",
      scope: "Conformité locale",
      color: "neon-blue"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="equipement-title">
              <span className="text-neon-blue text-glow">ÉQUIPEMENT TECHNIQUE</span>
              <span className="text-white"> DU BÂTIMENT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="equipement-subtitle">
              Conception, dimensionnement et optimisation des installations HVAC pour tous types de bâtiments
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="services-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-green text-glow">expertises</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions complètes pour l'équipement technique</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`service-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${service.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${service.icon} text-2xl text-${service.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${service.color}`}>{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies maîtrisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`bg-${service.color}/20 text-${service.color} px-3 py-1 rounded-full text-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20 bg-dark-800/50" data-testid="projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="projects-title">
              <span className="text-white">Projets</span> 
              <span className="text-neon-purple text-glow">représentatifs</span>
            </h2>
            <p className="text-xl text-gray-300">Exemples de nos réalisations en équipement technique</p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`project-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center" style={{backgroundImage: `url(${project.image})`}}>
                    <div className="h-full bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-neon-blue">{project.name}</h3>
                      <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
                        {project.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <i className="fas fa-ruler-combined mr-2"></i>
                      <span>{project.surface}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Systèmes installés :</h4>
                      <ul className="space-y-2">
                        {project.systems.map((system, systemIndex) => (
                          <li key={systemIndex} className="flex items-center">
                            <i className="fas fa-check text-neon-green mr-3"></i>
                            <span className="text-gray-400">{system}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Regulations */}
      <section className="py-20" data-testid="standards-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="standards-title">
              <span className="text-white">Normes &</span> 
              <span className="text-neon-blue text-glow">réglementations</span>
            </h2>
            <p className="text-xl text-gray-300">Conformité aux standards européens et luxembourgeois</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`standard-${index}`}>
                <div className={`w-12 h-12 bg-${standard.color}/20 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <i className="fas fa-certificate text-xl text-white"></i>
                </div>
                <h3 className={`text-lg font-semibold text-${standard.color} mb-2`}>{standard.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                <p className="text-gray-400 text-xs">{standard.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800/50" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
              <span className="text-white">Votre projet</span> 
              <span className="text-neon-green text-glow">HVAC</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Confiez-nous la conception de vos installations techniques pour un confort optimal et des performances énergétiques maximales
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-quote">
                <i className="fas fa-calculator mr-2"></i>
                Demander un devis
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-consultation">
                <i className="fas fa-comments mr-2"></i>
                Consultation technique
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}