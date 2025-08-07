export default function Administration() {
  const administrationProjects = [
    {
      name: "Ministère de l'Économie",
      location: "Luxembourg-Ville",
      surface: "32,000 m²",
      systems: ["CVC haute sécurité", "Redondance N+1", "GTB centralisée", "Contrôle d'accès intégré"],
      description: "Bâtiment ministériel avec exigences de sécurité et continuité de service",
      employees: 850,
      floors: 12,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Hôtel de Ville Esch-sur-Alzette",
      location: "Esch-sur-Alzette",
      surface: "8,500 m²",
      systems: ["Géothermie", "Ventilation adaptative", "Éclairage intelligent", "Monitoring énergétique"],
      description: "Rénovation administrative avec focus sur l'efficacité énergétique",
      employees: 180,
      floors: 4,
      image: "https://images.unsplash.com/photo-1503228580702-02e6e4b6eebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    },
    {
      name: "Centre Administratif Kirchberg",
      location: "Luxembourg-Kirchberg",
      surface: "45,000 m²",
      systems: ["Trigénération", "Free-cooling", "Récupération chaleur", "Smart building"],
      description: "Campus administratif moderne avec technologies intelligentes",
      employees: 1200,
      floors: 8,
      image: "https://images.unsplash.com/photo-1488792221650-0fb715746ac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    }
  ];

  const administrativeRequirements = [
    {
      name: "Continuité de Service",
      description: "Fonctionnement permanent des services publics essentiels",
      requirements: ["Redondance systèmes", "Maintenance sans arrêt", "Sauvegarde données", "Plans de reprise"],
      icon: "fas fa-clock",
      color: "neon-blue"
    },
    {
      name: "Sécurité Renforcée",
      description: "Protection des personnes et des informations sensibles",
      requirements: ["Contrôle d'accès", "Surveillance 24/7", "Détection intrusion", "Zones sécurisées"],
      icon: "fas fa-shield-alt",
      color: "neon-green"
    },
    {
      name: "Efficacité Opérationnelle",
      description: "Optimisation des coûts et ressources publiques",
      requirements: ["Gestion énergétique", "Maintenance prédictive", "Automatisation", "Reporting détaillé"],
      icon: "fas fa-chart-line",
      color: "neon-purple"
    },
    {
      name: "Accessibilité Universelle",
      description: "Accès facilité pour tous les citoyens",
      requirements: ["Normes PMR", "Signalétique adaptée", "Systèmes inclusifs", "Ergonomie universelle"],
      icon: "fas fa-universal-access",
      color: "neon-blue"
    }
  ];

  const securitySystems = [
    {
      name: "Contrôle d'Accès Intégré",
      applications: ["Entrées principales", "Zones sensibles", "Parkings", "Archives"],
      features: ["Badges RFID", "Biométrie", "Traçabilité", "Gestion horaire"],
      level: "Très haute sécurité",
      color: "neon-blue"
    },
    {
      name: "Surveillance Vidéo",
      applications: ["Périmètre extérieur", "Halls publics", "Couloirs", "Zones critiques"],
      features: ["Caméras IP", "Analyse intelligente", "Stockage sécurisé", "Supervision 24/7"],
      level: "Surveillance active",
      color: "neon-green"
    },
    {
      name: "Détection Intrusion",
      applications: ["Bureaux fermés", "Salles serveurs", "Coffres-forts", "Archives"],
      features: ["Détecteurs volumétriques", "Contacts d'ouverture", "Alarmes silencieuses", "Télésurveillance"],
      level: "Protection périmétrique",
      color: "neon-purple"
    }
  ];

  const buildingManagement = [
    {
      name: "GTB Centralisée",
      description: "Gestion technique intelligente des bâtiments administratifs",
      features: ["Supervision centralisée", "Programmation horaire", "Alertes automatiques", "Historiques complets"]
    },
    {
      name: "Maintenance Prédictive",
      description: "Optimisation de la maintenance par analyse des données",
      features: ["Capteurs IoT", "Analyse tendances", "Planification automatique", "Réduction pannes"]
    },
    {
      name: "Gestion Énergétique",
      description: "Monitoring et optimisation des consommations",
      features: ["Comptage intelligent", "Analyses détaillées", "Optimisation automatique", "Reporting réglementaire"]
    }
  ];

  const sustainability = [
    {
      metric: "Consommation Énergétique",
      value: "95 kWh/m²/an",
      description: "Bâtiments administratifs optimisés",
      benchmark: "< 120 kWh/m²/an",
      color: "neon-blue"
    },
    {
      metric: "Disponibilité Systèmes",
      value: "99.8%",
      description: "Taux de fonctionnement annuel",
      benchmark: "> 99%",
      color: "neon-green"
    },
    {
      metric: "Réduction CO₂",
      value: "40%",
      description: "Diminution vs situation initiale",
      benchmark: "> 30%",
      color: "neon-purple"
    },
    {
      metric: "Satisfaction Usagers",
      value: "87%",
      description: "Agents et visiteurs satisfaits",
      benchmark: "> 80%",
      color: "neon-blue"
    }
  ];

  const specializedAreas = [
    {
      name: "Salles du Conseil",
      description: "Espaces de réunion avec exigences techniques spécifiques",
      challenges: ["Acoustique parfaite", "Confidentialité", "Équipements AV", "Confort optimal"],
      solutions: ["Isolation renforcée", "Ventilation silencieuse", "Intégration multimédia", "Régulation fine"]
    },
    {
      name: "Centres de Données",
      description: "Infrastructure critique pour services numériques",
      challenges: ["Redondance totale", "Sécurité maximale", "Refroidissement précis", "Monitoring continu"],
      solutions: ["Architecture N+1", "Contrôles multiples", "Climatisation précision", "Supervision 24/7"]
    },
    {
      name: "Archives",
      description: "Conservation optimale des documents officiels",
      challenges: ["Conservation longue durée", "Conditions stables", "Sécurité incendie", "Traçabilité"],
      solutions: ["Hygrothermie contrôlée", "Filtration HEPA", "Extinction gaz", "Gestion documentaire"]
    }
  ];

  const compliance = [
    {
      name: "Normes de Sécurité",
      requirements: ["EN 50132 (Vidéosurveillance)", "EN 50133 (Contrôle d'accès)", "IEC 62676 (Surveillance)", "ISO 27001 (Sécurité info)"],
      icon: "fas fa-shield-alt",
      color: "neon-blue"
    },
    {
      name: "Accessibilité",
      requirements: ["Loi du 12 septembre 2003", "Normes PMR", "Signalétique tactile", "Équipements adaptatifs"],
      icon: "fas fa-universal-access",
      color: "neon-green"
    },
    {
      name: "Efficacité Énergétique",
      requirements: ["Directive EPBD", "Audit énergétique", "Certificat énergétique", "Monitoring obligatoire"],
      icon: "fas fa-leaf",
      color: "neon-purple"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="administration-title">
              <span className="text-neon-purple text-glow">SECTEUR</span>
              <span className="text-white"> ADMINISTRATIF</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="administration-subtitle">
              Solutions techniques pour administrations publiques et bâtiments institutionnels
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
              <span className="text-neon-blue text-glow">administratifs</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations pour le secteur public</p>
          </div>
          
          <div className="space-y-8">
            {administrationProjects.map((project, index) => (
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
                          <span className="text-sm opacity-80 mr-2">Agents:</span>
                          <span className="text-lg font-bold text-neon-blue">{project.employees}</span>
                        </div>
                        <div className="text-sm">{project.surface} • {project.floors} étages</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-purple mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Surface</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.surface}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Agents</div>
                        <div className="text-lg font-semibold text-neon-green">{project.employees}</div>
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

      {/* Administrative Requirements */}
      <section className="py-20 bg-dark-800/50" data-testid="requirements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="requirements-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-green text-glow">administratives</span>
            </h2>
            <p className="text-xl text-gray-300">Standards spécifiques aux bâtiments publics</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {administrativeRequirements.map((requirement, index) => (
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

      {/* Security Systems */}
      <section className="py-20" data-testid="security-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="security-title">
              <span className="text-white">Systèmes de</span> 
              <span className="text-neon-blue text-glow">sécurité</span>
            </h2>
            <p className="text-xl text-gray-300">Protection intégrée pour bâtiments publics</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {securitySystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`security-${index}`}>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Niveau</span>
                  <span className={`text-${system.color} text-sm font-semibold`}>{system.level}</span>
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
                  <h4 className="text-sm font-semibold text-white mb-2">Fonctionnalités :</h4>
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

      {/* Specialized Areas */}
      <section className="py-20 bg-dark-800/50" data-testid="specialized-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="specialized-title">
              <span className="text-white">Espaces</span> 
              <span className="text-neon-green text-glow">spécialisés</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions pour zones à contraintes spécifiques</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specializedAreas.map((area, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`specialized-${index}`}>
                <h3 className="text-xl font-semibold text-neon-green mb-4">{area.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Défis :</h4>
                  <ul className="space-y-1">
                    {area.challenges.map((challenge, challengeIndex) => (
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
                    {area.solutions.map((solution, solutionIndex) => (
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

      {/* Building Management */}
      <section className="py-20" data-testid="management-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="management-title">
              <span className="text-white">Gestion</span> 
              <span className="text-neon-purple text-glow">technique</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions intelligentes de gestion des bâtiments</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {buildingManagement.map((solution, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`management-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{solution.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{solution.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <i className="fas fa-cog text-neon-purple mr-2 text-xs"></i>
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

      {/* Compliance */}
      <section className="py-20" data-testid="compliance-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="compliance-title">
              <span className="text-white">Conformité</span> 
              <span className="text-neon-blue text-glow">réglementaire</span>
            </h2>
            <p className="text-xl text-gray-300">Respect des normes et réglementations</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`compliance-${index}`}>
                <div className={`w-16 h-16 bg-${item.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${item.icon} text-2xl text-${item.color}`}></i>
                </div>
                <h3 className={`text-xl font-semibold text-${item.color} mb-4`}>{item.name}</h3>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Normes applicables :</h4>
                  <ul className="space-y-2">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center justify-center">
                        <i className={`fas fa-check text-${item.color} mr-2 text-xs`}></i>
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

      {/* Sustainability Metrics */}
      <section className="py-20" data-testid="sustainability-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="sustainability-title">
              <span className="text-white">Performance</span> 
              <span className="text-neon-green text-glow">opérationnelle</span>
            </h2>
            <p className="text-xl text-gray-300">Indicateurs de nos réalisations publiques</p>
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
              <span className="text-neon-purple text-glow">administratif</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise spécialisée en équipements techniques pour administrations avec focus sur la sécurité et la continuité de service
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">25+</div>
                <div className="text-gray-400 text-sm">Bâtiments publics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">99.8%</div>
                <div className="text-gray-400 text-sm">Disponibilité systèmes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">40%</div>
                <div className="text-gray-400 text-sm">Réduction CO₂</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-admin-project">
                <i className="fas fa-building mr-2"></i>
                Projet administratif
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-security-audit">
                <i className="fas fa-shield-alt mr-2"></i>
                Audit sécurité
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}