export default function CentralesEnergie() {
  const energyProjects = [
    {
      name: "Centrale de Cogénération Luxenergie",
      location: "Esch-sur-Alzette",
      capacity: "12 MW électrique / 18 MW thermique",
      systems: ["Turbines à gaz", "Récupération chaleur", "Réseau de chaleur urbain", "Monitoring avancé"],
      description: "Installation de cogénération haute efficacité pour alimentation urbaine et industrielle",
      efficiency: "87%",
      fuel: "Gaz naturel + Biogaz",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Parc Solaire Photovoltaïque",
      location: "Differdange",
      capacity: "5 MW photovoltaïque",
      systems: ["Panneaux bifaciaux", "Onduleurs centralisés", "Système de tracking", "Stockage batterie"],
      description: "Installation solaire avec système de stockage pour autoconsommation industrielle",
      efficiency: "22%",
      fuel: "Solaire + Stockage",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    },
    {
      name: "Centrale Géothermique Profonde",
      location: "Luxembourg-Nord",
      capacity: "3 MW thermique",
      systems: ["Forages profonds", "Pompes à chaleur", "Échangeurs géothermiques", "Réseau distribution"],
      description: "Exploitation géothermie profonde pour chauffage urbain écologique",
      efficiency: "350%",
      fuel: "Géothermie",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    }
  ];

  const energyTechnologies = [
    {
      name: "Cogénération",
      description: "Production simultanée d'électricité et de chaleur",
      efficiency: "80-90%",
      applications: ["Industrie", "Chauffage urbain", "Hôpitaux", "Piscines"],
      advantages: ["Très haute efficacité", "Réduction CO₂", "Autonomie énergétique"],
      icon: "fas fa-cogs",
      color: "neon-blue"
    },
    {
      name: "Photovoltaïque",
      description: "Conversion directe du rayonnement solaire en électricité",
      efficiency: "18-25%",
      applications: ["Toitures", "Ombrières", "Centrales au sol", "Agrivoltaïsme"],
      advantages: ["Énergie propre", "Maintenance faible", "Modulaire"],
      icon: "fas fa-sun",
      color: "neon-green"
    },
    {
      name: "Géothermie",
      description: "Exploitation de la chaleur terrestre naturelle",
      efficiency: "300-500%",
      applications: ["Chauffage", "Climatisation", "Eau chaude", "Process industriels"],
      advantages: ["Renouvelable", "Stable 24/7", "Longue durée de vie"],
      icon: "fas fa-fire",
      color: "neon-purple"
    },
    {
      name: "Biomasse",
      description: "Valorisation énergétique de matières organiques",
      efficiency: "70-85%",
      applications: ["Chaufferies", "Méthanisation", "Biocarburants", "Cogénération"],
      advantages: ["Déchets valorisés", "Carbone neutre", "Stockable"],
      icon: "fas fa-leaf",
      color: "neon-blue"
    }
  ];

  const systemComponents = [
    {
      category: "Production",
      components: [
        "Turbines à gaz/vapeur",
        "Générateurs électriques", 
        "Panneaux photovoltaïques",
        "Systèmes géothermiques"
      ],
      icon: "fas fa-industry",
      color: "neon-blue"
    },
    {
      category: "Conversion",
      components: [
        "Onduleurs et convertisseurs",
        "Transformateurs",
        "Échangeurs thermiques",
        "Pompes à chaleur"
      ],
      icon: "fas fa-exchange-alt",
      color: "neon-green"
    },
    {
      category: "Stockage",
      components: [
        "Batteries lithium-ion",
        "Stockage thermique",
        "Volants d'inertie",
        "Power-to-Gas"
      ],
      icon: "fas fa-battery-full",
      color: "neon-purple"
    },
    {
      category: "Distribution",
      components: [
        "Réseaux électriques HTA/BT",
        "Réseaux de chaleur",
        "Systèmes de supervision",
        "Comptage intelligent"
      ],
      icon: "fas fa-project-diagram",
      color: "neon-blue"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Rendement Global",
      value: "85%",
      description: "Efficacité énergétique moyenne",
      target: "> 80%",
      color: "neon-blue"
    },
    {
      metric: "Disponibilité",
      value: "96%",
      description: "Taux de fonctionnement annuel",
      target: "> 95%",
      color: "neon-green"
    },
    {
      metric: "Réduction CO₂",
      value: "60%",
      description: "Diminution émissions vs fossile",
      target: "> 50%",
      color: "neon-purple"
    },
    {
      metric: "ROI Énergétique",
      value: "12%",
      description: "Retour sur investissement",
      target: "> 10%",
      color: "neon-blue"
    }
  ];

  const regulatoryRequirements = [
    {
      name: "Autorisation de Production",
      description: "Permis administratifs pour installations énergétiques",
      requirements: ["Étude d'impact", "Dossier technique", "Garanties financières", "Raccordement réseau"]
    },
    {
      name: "Conformité Technique",
      description: "Respect des normes de sécurité et performance",
      requirements: ["Certification équipements", "Tests de performance", "Contrôles périodiques", "Maintenance préventive"]
    },
    {
      name: "Intégration Réseau",
      description: "Coordination avec gestionnaires de réseaux",
      requirements: ["Convention raccordement", "Protection électrique", "Comptage bidirectionnel", "Télécommunication"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="centrales-energie-title">
              <span className="text-neon-purple text-glow">CENTRALES</span>
              <span className="text-white"> D'ÉNERGIE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="centrales-energie-subtitle">
              Conception et réalisation d'installations énergétiques haute performance et durables
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
              <span className="text-neon-green text-glow">énergétiques</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations en production d'énergie</p>
          </div>
          
          <div className="space-y-8">
            {energyProjects.map((project, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`project-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center relative" style={{backgroundImage: `url(${project.image})`}}>
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white space-y-1">
                        <div className="flex items-center">
                          <span className="text-sm opacity-80 mr-2">Rendement:</span>
                          <span className="text-lg font-bold text-neon-green">{project.efficiency}</span>
                        </div>
                        <div className="text-sm">{project.capacity}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-purple mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Capacité</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.capacity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Combustible</div>
                        <div className="text-lg font-semibold text-neon-green">{project.fuel}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Systèmes installés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.systems.map((system, systemIndex) => (
                          <span key={systemIndex} className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-sm">
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Technologies */}
      <section className="py-20 bg-dark-800/50" data-testid="technologies-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="technologies-title">
              <span className="text-white">Technologies</span> 
              <span className="text-neon-blue text-glow">énergétiques</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions avancées pour la production d'énergie</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {energyTechnologies.map((tech, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`technology-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${tech.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${tech.icon} text-2xl text-${tech.color}`}></i>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold text-${tech.color}`}>{tech.name}</h3>
                    <div className="text-sm text-gray-400">Rendement: {tech.efficiency}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                    <ul className="space-y-1">
                      {tech.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-gray-400 text-xs">• {app}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Avantages :</h4>
                    <ul className="space-y-1">
                      {tech.advantages.map((advantage, advantageIndex) => (
                        <li key={advantageIndex} className="text-gray-400 text-xs">• {advantage}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20" data-testid="components-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="components-title">
              <span className="text-white">Composants</span> 
              <span className="text-neon-green text-glow">système</span>
            </h2>
            <p className="text-xl text-gray-300">Éléments clés des installations énergétiques</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemComponents.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`component-${index}`}>
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-xl text-${category.color}`}></i>
                </div>
                
                <h3 className={`text-lg font-semibold text-${category.color} mb-4`}>{category.category}</h3>
                
                <ul className="space-y-2">
                  {category.components.map((component, componentIndex) => (
                    <li key={componentIndex} className="flex items-start">
                      <i className={`fas fa-check text-${category.color} mr-2 mt-1 text-xs`}></i>
                      <span className="text-gray-400 text-sm">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-dark-800/50" data-testid="performance-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="performance-title">
              <span className="text-white">Métriques de</span> 
              <span className="text-neon-purple text-glow">performance</span>
            </h2>
            <p className="text-xl text-gray-300">Indicateurs clés de nos installations</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {performanceMetrics.map((metric, index) => (
                <div key={index} data-testid={`metric-${index}`}>
                  <div className={`text-4xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm mb-2">{metric.description}</div>
                  <div className={`text-${metric.color} text-xs`}>Objectif: {metric.target}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Requirements */}
      <section className="py-20" data-testid="regulatory-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="regulatory-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-blue text-glow">réglementaires</span>
            </h2>
            <p className="text-xl text-gray-300">Conformité et autorisations nécessaires</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {regulatoryRequirements.map((requirement, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`regulatory-${index}`}>
                <h3 className="text-xl font-semibold text-neon-blue mb-4">{requirement.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{requirement.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Exigences :</h4>
                  <ul className="space-y-2">
                    {requirement.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center justify-center">
                        <i className="fas fa-check text-neon-blue mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{req}</span>
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
              <span className="text-white">Votre</span> 
              <span className="text-neon-purple text-glow">centrale énergétique</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Conception sur mesure d'installations énergétiques performantes avec accompagnement réglementaire complet
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">25+</div>
                <div className="text-gray-400 text-sm">Installations réalisées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">85%</div>
                <div className="text-gray-400 text-sm">Rendement moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">50MW</div>
                <div className="text-gray-400 text-sm">Capacité installée</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-energy-project">
                <i className="fas fa-bolt mr-2"></i>
                Projet énergétique
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-feasibility-study">
                <i className="fas fa-search mr-2"></i>
                Étude de faisabilité
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}