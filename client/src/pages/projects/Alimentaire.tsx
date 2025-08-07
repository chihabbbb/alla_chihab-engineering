export default function Alimentaire() {
  const foodIndustryProjects = [
    {
      name: "Laiterie Luxlait",
      location: "Colmar-Berg",
      surface: "8,500 m²",
      systems: ["Froid industriel", "Traitement d'air hygiénique", "Récupération de chaleur"],
      description: "Installation complète pour la production laitière avec zones à atmosphère contrôlée",
      challenges: ["Contraintes HACCP", "Températures différentielles", "Hygiène alimentaire"],
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Brasserie Artisanale Diekirch",
      location: "Diekirch",
      surface: "3,200 m²",
      systems: ["Refroidissement process", "Ventilation caves", "Récupération chaleur fermentation"],
      description: "Système intégré de refroidissement et contrôle d'atmosphère pour production de bière",
      challenges: ["Process spécifiques", "Récupération d'énergie", "Contrôle précis température"],
      image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Centre de Distribution Cactus",
      location: "Windhof",
      surface: "12,000 m²",
      systems: ["Froid négatif/positif", "Quais réfrigérés", "Système de dégivrage"],
      description: "Plateforme logistique avec zones de stockage multi-températures",
      challenges: ["Efficacité énergétique", "Flexibilité zones", "Maintenance préventive"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    }
  ];

  const technicalRequirements = [
    {
      name: "Respect des Normes HACCP",
      description: "Conception conforme aux exigences d'hygiène alimentaire",
      requirements: ["Séparation des flux", "Matériaux alimentaires", "Nettoyage facilité", "Traçabilité"],
      icon: "fas fa-shield-alt",
      color: "neon-blue"
    },
    {
      name: "Chaîne du Froid",
      description: "Maintien des températures critiques pour la conservation",
      requirements: ["Monitoring continu", "Alertes temps réel", "Redondance systèmes", "Enregistrement données"],
      icon: "fas fa-thermometer-half",
      color: "neon-green"
    },
    {
      name: "Efficacité Énergétique",
      description: "Optimisation des consommations des systèmes frigorifiques",
      requirements: ["Récupération chaleur", "Variateurs fréquence", "Isolation renforcée", "Régulation avancée"],
      icon: "fas fa-bolt",
      color: "neon-purple"
    },
    {
      name: "Fiabilité & Maintenance",
      description: "Disponibilité maximale et maintenance préventive",
      requirements: ["Système redondant", "Maintenance prédictive", "Pièces de rechange", "Formation exploitants"],
      icon: "fas fa-cogs",
      color: "neon-blue"
    }
  ];

  const refrigerationSystems = [
    {
      name: "Froid Industriel CO₂",
      applications: ["Supermarchés", "Entrepôts frigorifiques", "Production alimentaire"],
      advantages: ["Écologique", "Efficace", "Sécuritaire"],
      temperature: "-25°C à +5°C",
      efficiency: "COP 3.5-4.5",
      color: "neon-blue"
    },
    {
      name: "Système à Ammoniac",
      applications: ["Abattoirs", "Industrie laitière", "Surgélation"],
      advantages: ["Très efficace", "Économique", "Performances élevées"],
      temperature: "-40°C à +5°C",
      efficiency: "COP 4.0-5.5",
      color: "neon-green"
    },
    {
      name: "Refroidissement Hybride",
      applications: ["Process variables", "Zones multiples", "Flexibilité requise"],
      advantages: ["Adaptable", "Récupération énergie", "Contrôle précis"],
      temperature: "-30°C à +15°C",
      efficiency: "COP 3.0-4.0",
      color: "neon-purple"
    }
  ];

  const specializedSolutions = [
    {
      name: "Salles Blanches Alimentaires",
      description: "Espaces à atmosphère contrôlée pour produits sensibles",
      features: ["Filtration HEPA", "Pression positive", "Contrôle particules", "Monitoring continu"]
    },
    {
      name: "Tunnels de Surgélation",
      description: "Systèmes de refroidissement rapide pour conservation optimale",
      features: ["Surgélation IQF", "Débits d'air élevés", "Récupération chaleur", "Automatisation"]
    },
    {
      name: "Caves d'Affinage",
      description: "Contrôle précis température et hygrométrie pour maturation",
      features: ["Hygrométrie contrôlée", "Ventilation douce", "Isolation spéciale", "Monitoring 24/7"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="alimentaire-title">
              <span className="text-neon-blue text-glow">SECTEUR</span>
              <span className="text-white"> ALIMENTAIRE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="alimentaire-subtitle">
              Solutions techniques spécialisées pour l'industrie agroalimentaire et la chaîne du froid
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20" data-testid="featured-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="featured-projects-title">
              <span className="text-white">Projets</span> 
              <span className="text-neon-green text-glow">représentatifs</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations dans l'industrie alimentaire</p>
          </div>
          
          <div className="space-y-8">
            {foodIndustryProjects.map((project, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`project-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center relative" style={{backgroundImage: `url(${project.image})`}}>
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white">
                        <div className="text-lg font-semibold">{project.surface}</div>
                        <div className="text-sm opacity-80">{project.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-blue mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Systèmes installés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.systems.map((system, systemIndex) => (
                          <span key={systemIndex} className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Défis relevés :</h4>
                      <ul className="space-y-1">
                        {project.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-center">
                            <i className="fas fa-check text-neon-green mr-3"></i>
                            <span className="text-gray-400">{challenge}</span>
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

      {/* Technical Requirements */}
      <section className="py-20 bg-dark-800/50" data-testid="requirements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="requirements-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-purple text-glow">techniques</span>
            </h2>
            <p className="text-xl text-gray-300">Standards spécifiques au secteur alimentaire</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalRequirements.map((requirement, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`requirement-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${requirement.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${requirement.icon} text-2xl text-${requirement.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${requirement.color}`}>{requirement.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{requirement.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Exigences clés :</h4>
                  <ul className="space-y-2">
                    {requirement.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <i className={`fas fa-check text-${requirement.color} mr-3`}></i>
                        <span className="text-gray-400">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refrigeration Systems */}
      <section className="py-20" data-testid="refrigeration-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="refrigeration-title">
              <span className="text-white">Systèmes</span> 
              <span className="text-neon-blue text-glow">frigorifiques</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies de pointe pour la chaîne du froid</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {refrigerationSystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`refrigeration-${index}`}>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Température</span>
                    <span className="text-white text-sm">{system.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Efficacité</span>
                    <span className={`text-${system.color} text-sm font-semibold`}>{system.efficiency}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                  <ul className="space-y-1">
                    {system.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-400 text-xs">• {app}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Avantages :</h4>
                  <div className="flex flex-wrap gap-1">
                    {system.advantages.map((advantage, advantageIndex) => (
                      <span key={advantageIndex} className={`bg-${system.color}/20 text-${system.color} px-2 py-1 rounded text-xs`}>
                        {advantage}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-20 bg-dark-800/50" data-testid="specialized-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="specialized-title">
              <span className="text-white">Solutions</span> 
              <span className="text-neon-green text-glow">spécialisées</span>
            </h2>
            <p className="text-xl text-gray-300">Équipements sur mesure pour applications spécifiques</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specializedSolutions.map((solution, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`specialized-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{solution.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{solution.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Caractéristiques :</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <i className="fas fa-check text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
              <span className="text-white">Votre projet</span> 
              <span className="text-neon-blue text-glow">alimentaire</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise reconnue dans l'industrie agroalimentaire avec respect des normes HACCP et optimisation énergétique
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">15+</div>
                <div className="text-gray-400 text-sm">Projets alimentaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">100%</div>
                <div className="text-gray-400 text-sm">Conformité HACCP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">30%</div>
                <div className="text-gray-400 text-sm">Économies énergétiques</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-food-project">
                <i className="fas fa-utensils mr-2"></i>
                Projet alimentaire
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-technical-audit">
                <i className="fas fa-search mr-2"></i>
                Audit technique
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}