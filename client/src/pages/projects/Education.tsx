export default function Education() {
  const educationProjects = [
    {
      name: "Université du Luxembourg - Belval",
      location: "Esch-sur-Alzette",
      surface: "68,000 m²",
      systems: ["CVC haute performance", "Laboratoires ventilation", "Amphithéâtres acoustique", "GTB avancée"],
      description: "Campus universitaire moderne avec systèmes techniques haute technologie",
      students: 6800,
      buildings: 12,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Lycée Technique Josy Barthel",
      location: "Mamer",
      surface: "18,500 m²",
      systems: ["Ventilation double flux", "Chauffage basse température", "Éclairage intelligent", "Récupération énergie"],
      description: "Établissement scolaire avec focus sur l'efficacité énergétique et le confort",
      students: 1200,
      buildings: 4,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    },
    {
      name: "École Primaire Strassen",
      location: "Strassen",
      surface: "4,200 m²",
      systems: ["Géothermie", "VMC hygroréglable", "Plancher chauffant", "Monitoring qualité air"],
      description: "École primaire écologique avec systèmes durables et environnement sain",
      students: 380,
      buildings: 2,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    }
  ];

  const educationalRequirements = [
    {
      name: "Qualité de l'Air Intérieur",
      description: "Environnement sain pour favoriser la concentration et l'apprentissage",
      requirements: ["Renouvellement d'air optimal", "Filtration haute efficacité", "Contrôle CO₂", "Hygrométrie maîtrisée"],
      icon: "fas fa-lungs",
      color: "neon-blue"
    },
    {
      name: "Confort Thermique",
      description: "Température et ambiance adaptées aux activités pédagogiques",
      requirements: ["Régulation fine", "Zonage adapté", "Absence de courants d'air", "Inertie thermique"],
      icon: "fas fa-thermometer-half",
      color: "neon-green"
    },
    {
      name: "Acoustique Optimisée",
      description: "Maîtrise du bruit pour conditions d'apprentissage optimales",
      requirements: ["Isolation phonique", "Absorption acoustique", "Ventilation silencieuse", "Réverbération contrôlée"],
      icon: "fas fa-volume-down",
      color: "neon-purple"
    },
    {
      name: "Efficacité Énergétique",
      description: "Optimisation des coûts et exemplarité environnementale",
      requirements: ["Récupération de chaleur", "Éclairage LED", "Programmation horaire", "Énergies renouvelables"],
      icon: "fas fa-leaf",
      color: "neon-blue"
    }
  ];

  const hvacSystems = [
    {
      name: "Ventilation Double Flux",
      applications: ["Salles de classe", "Amphithéâtres", "Bibliothèques"],
      features: ["Récupération chaleur", "Filtration HEPA", "Régulation CO₂", "Fonctionnement silencieux"],
      efficiency: "Récupération 85%",
      color: "neon-blue"
    },
    {
      name: "CVC Laboratoires",
      applications: ["Laboratoires recherche", "Salles de chimie", "Espaces techniques"],
      features: ["Extraction spécialisée", "Surpression/dépression", "Sorbonnes ventilées", "Sécurité renforcée"],
      efficiency: "Débit variable",
      color: "neon-green"
    },
    {
      name: "Géothermie",
      applications: ["Chauffage principal", "Climatisation", "Eau chaude sanitaire"],
      features: ["Pompes à chaleur", "Sondes géothermiques", "Plancher chauffant", "Stockage thermique"],
      efficiency: "COP 4.5",
      color: "neon-purple"
    }
  ];

  const smartSolutions = [
    {
      name: "GTB Éducative",
      description: "Gestion technique optimisée pour établissements scolaires",
      features: ["Programmation horaire scolaire", "Supervision centralisée", "Alertes maintenance", "Reporting énergétique"]
    },
    {
      name: "Éclairage Adaptatif",
      description: "Systèmes d'éclairage intelligents pour salles de classe",
      features: ["Variation selon lumière naturelle", "Scénarios pédagogiques", "Économies automatiques", "Confort visuel"]
    },
    {
      name: "Monitoring Qualité Air",
      description: "Surveillance continue de l'environnement intérieur",
      features: ["Capteurs CO₂ temps réel", "Mesure particules fines", "Alertes automatiques", "Historiques données"]
    }
  ];

  const sustainability = [
    {
      metric: "Consommation Énergétique",
      value: "85 kWh/m²/an",
      description: "Établissements scolaires optimisés",
      benchmark: "< 100 kWh/m²/an",
      color: "neon-blue"
    },
    {
      metric: "Qualité Air",
      value: "850 ppm",
      description: "CO₂ moyen dans les classes",
      benchmark: "< 1000 ppm",
      color: "neon-green"
    },
    {
      metric: "Confort Acoustique",
      value: "35 dB",
      description: "Niveau sonore ambiant",
      benchmark: "< 40 dB",
      color: "neon-purple"
    },
    {
      metric: "Satisfaction Usagers",
      value: "89%",
      description: "Enseignants et étudiants satisfaits",
      benchmark: "> 80%",
      color: "neon-blue"
    }
  ];

  const specializedSpaces = [
    {
      name: "Amphithéâtres",
      description: "Grands espaces avec exigences acoustiques spécifiques",
      challenges: ["Ventilation silencieuse", "Acoustique optimisée", "Éclairage graduel", "Densité élevée"],
      solutions: ["Pulsion par le sol", "Panneaux acoustiques", "LED dimmables", "Zones de confort"]
    },
    {
      name: "Laboratoires",
      description: "Espaces techniques avec contraintes de sécurité",
      challenges: ["Extraction chimique", "Contrôle contamination", "Sécurité utilisateurs", "Flexibilité"],
      solutions: ["Sorbonnes ventilées", "Surpression contrôlée", "Détection gaz", "Réseaux modulaires"]
    },
    {
      name: "Bibliothèques",
      description: "Espaces calmes nécessitant concentration",
      challenges: ["Silence absolu", "Confort prolongé", "Éclairage lecture", "Flexibilité espaces"],
      solutions: ["Ventilation ultra-silencieuse", "Régulation fine", "Éclairage adaptatif", "Zonage modulaire"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="education-title">
              <span className="text-neon-blue text-glow">SECTEUR</span>
              <span className="text-white"> ÉDUCATIF</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="education-subtitle">
              Solutions techniques spécialisées pour établissements d'enseignement et de recherche
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
              <span className="text-neon-green text-glow">éducatifs</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations dans l'enseignement</p>
          </div>
          
          <div className="space-y-8">
            {educationProjects.map((project, index) => (
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
                      <div className="text-white space-y-1">
                        <div className="flex items-center">
                          <span className="text-sm opacity-80 mr-2">Étudiants:</span>
                          <span className="text-lg font-bold text-neon-green">{project.students.toLocaleString()}</span>
                        </div>
                        <div className="text-sm">{project.surface} • {project.buildings} bâtiments</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-blue mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Surface</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.surface}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Étudiants</div>
                        <div className="text-lg font-semibold text-neon-green">{project.students.toLocaleString()}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Systèmes installés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.systems.map((system, systemIndex) => (
                          <span key={systemIndex} className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
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

      {/* Educational Requirements */}
      <section className="py-20 bg-dark-800/50" data-testid="requirements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="requirements-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-purple text-glow">pédagogiques</span>
            </h2>
            <p className="text-xl text-gray-300">Standards spécifiques aux environnements éducatifs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {educationalRequirements.map((requirement, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`requirement-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${requirement.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${requirement.icon} text-2xl text-${requirement.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${requirement.color}`}>{requirement.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{requirement.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Solutions techniques :</h4>
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

      {/* HVAC Systems */}
      <section className="py-20" data-testid="hvac-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="hvac-title">
              <span className="text-white">Systèmes</span> 
              <span className="text-neon-blue text-glow">CVC</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies adaptées aux espaces éducatifs</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hvacSystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`hvac-${index}`}>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Efficacité</span>
                  <span className={`text-${system.color} text-sm font-semibold`}>{system.efficiency}</span>
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
                  <h4 className="text-sm font-semibold text-white mb-2">Caractéristiques :</h4>
                  <ul className="space-y-1">
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <i className={`fas fa-check text-${system.color} mr-2 text-xs`}></i>
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

      {/* Specialized Spaces */}
      <section className="py-20 bg-dark-800/50" data-testid="specialized-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="specialized-title">
              <span className="text-white">Espaces</span> 
              <span className="text-neon-green text-glow">spécialisés</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions techniques pour espaces spécifiques</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specializedSpaces.map((space, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`specialized-${index}`}>
                <h3 className="text-xl font-semibold text-neon-green mb-4">{space.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{space.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Défis :</h4>
                  <ul className="space-y-1">
                    {space.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center">
                        <i className="fas fa-exclamation-triangle text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Solutions :</h4>
                  <ul className="space-y-1">
                    {space.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center">
                        <i className="fas fa-check text-neon-green mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Solutions */}
      <section className="py-20" data-testid="smart-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="smart-title">
              <span className="text-white">Solutions</span> 
              <span className="text-neon-purple text-glow">intelligentes</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies connectées pour l'éducation moderne</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {smartSolutions.map((solution, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`smart-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{solution.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{solution.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <i className="fas fa-microchip text-neon-purple mr-2 text-xs"></i>
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

      {/* Sustainability Metrics */}
      <section className="py-20" data-testid="sustainability-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="sustainability-title">
              <span className="text-white">Performance</span> 
              <span className="text-neon-blue text-glow">environnementale</span>
            </h2>
            <p className="text-xl text-gray-300">Indicateurs de qualité de nos réalisations</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {sustainability.map((metric, index) => (
                <div key={index} data-testid={`metric-${index}`}>
                  <div className={`text-4xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm mb-2">{metric.description}</div>
                  <div className={`text-${metric.color} text-xs`}>Standard: {metric.benchmark}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
              <span className="text-white">Votre projet</span> 
              <span className="text-neon-blue text-glow">éducatif</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise spécialisée en équipements techniques pour établissements d'enseignement avec focus sur la qualité de l'environnement d'apprentissage
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">35+</div>
                <div className="text-gray-400 text-sm">Établissements équipés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">89%</div>
                <div className="text-gray-400 text-sm">Satisfaction usagers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">850ppm</div>
                <div className="text-gray-400 text-sm">CO₂ moyen classes</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-education-project">
                <i className="fas fa-graduation-cap mr-2"></i>
                Projet éducatif
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-air-quality-audit">
                <i className="fas fa-wind mr-2"></i>
                Audit qualité air
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}