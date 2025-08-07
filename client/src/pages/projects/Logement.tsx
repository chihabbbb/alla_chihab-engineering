export default function Logement() {
  const housingProjects = [
    {
      name: "Résidence Les Jardins de Belval",
      location: "Esch-sur-Alzette",
      units: 180,
      systems: ["Géothermie collective", "VMC double flux", "Chauffage basse température", "Domotique intégrée"],
      description: "Résidence moderne avec systèmes énergétiques performants et confort optimal",
      surface: "12,500 m²",
      certification: "Passivhaus",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Complexe Résidentiel Kirchberg",
      location: "Luxembourg-Kirchberg",
      units: 95,
      systems: ["Pompes à chaleur air-eau", "Ventilation hygroréglable", "Planchers chauffants", "GTB résidentielle"],
      description: "Habitat haut de gamme avec technologies intelligentes et efficacité énergétique",
      surface: "8,200 m²",
      certification: "A+ énergétique",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    },
    {
      name: "Résidence Senior Luxembourg",
      location: "Luxembourg-Ville",
      units: 65,
      systems: ["Cogénération micro", "Récupération chaleur", "Contrôle qualité air", "Systèmes accessibles"],
      description: "Logements adaptés seniors avec équipements techniques facilitant l'autonomie",
      surface: "5,800 m²",
      certification: "BREEAM Excellent",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    }
  ];

  const housingRequirements = [
    {
      name: "Confort Thermique",
      description: "Température et ambiance agréables tout au long de l'année",
      requirements: ["Régulation individuelle", "Inertie thermique", "Absence courants d'air", "Zones de confort"],
      icon: "fas fa-thermometer-half",
      color: "neon-blue"
    },
    {
      name: "Qualité de l'Air",
      description: "Environnement intérieur sain et renouvelé",
      requirements: ["Renouvellement optimal", "Filtration efficace", "Contrôle humidité", "Élimination polluants"],
      icon: "fas fa-wind",
      color: "neon-green"
    },
    {
      name: "Efficacité Énergétique",
      description: "Optimisation des coûts d'exploitation pour les résidents",
      requirements: ["Isolation performante", "Énergies renouvelables", "Récupération chaleur", "Régulation avancée"],
      icon: "fas fa-leaf",
      color: "neon-purple"
    },
    {
      name: "Acoustique & Bien-être",
      description: "Environnement calme et propice au repos",
      requirements: ["Isolation phonique", "Équipements silencieux", "Vibrations maîtrisées", "Espaces de vie"],
      icon: "fas fa-volume-off",
      color: "neon-blue"
    }
  ];

  const hvacSolutions = [
    {
      name: "Géothermie Collective",
      applications: ["Résidences neuves", "Rénovations importantes", "Copropriétés"],
      features: ["Sondes géothermiques", "Pompes à chaleur", "Réseau basse température", "Stockage thermique"],
      efficiency: "COP 4.5",
      color: "neon-blue"
    },
    {
      name: "Ventilation Double Flux",
      applications: ["Appartements", "Maisons individuelles", "Résidences passives"],
      features: ["Récupération chaleur 90%", "Filtration pollen", "Débit hygroréglable", "Fonctionnement silencieux"],
      efficiency: "Récupération 90%",
      color: "neon-green"
    },
    {
      name: "Chauffage Individuel",
      applications: ["Rénovations", "Logements existants", "Solutions modulaires"],
      features: ["Pompes à chaleur individuelles", "Régulation pièce par pièce", "Programmation horaire", "Interface simple"],
      efficiency: "SCOP 4.2",
      color: "neon-purple"
    }
  ];

  const smartHome = [
    {
      name: "Domotique Résidentielle",
      description: "Systèmes intelligents pour le confort des résidents",
      features: ["Régulation automatique", "Contrôle à distance", "Scénarios personnalisés", "Interface intuitive"]
    },
    {
      name: "Monitoring Énergétique",
      description: "Suivi des consommations en temps réel",
      features: ["Compteurs intelligents", "Analyse consommations", "Alertes économies", "Rapports personnalisés"]
    },
    {
      name: "Maintenance Prédictive",
      description: "Anticipation des besoins de maintenance",
      features: ["Capteurs IoT", "Diagnostics automatiques", "Planification préventive", "Service réactif"]
    }
  ];

  const sustainability = [
    {
      metric: "Consommation Énergétique",
      value: "35 kWh/m²/an",
      description: "Chauffage logements optimisés",
      standard: "< 50 kWh/m²/an",
      color: "neon-blue"
    },
    {
      metric: "Énergies Renouvelables",
      value: "80%",
      description: "Part d'énergies propres",
      standard: "> 70%",
      color: "neon-green"
    },
    {
      metric: "Satisfaction Résidents",
      value: "94%",
      description: "Taux de satisfaction confort",
      standard: "> 85%",
      color: "neon-purple"
    },
    {
      metric: "Réduction CO₂",
      value: "65%",
      description: "Diminution vs chauffage fossile",
      standard: "> 50%",
      color: "neon-blue"
    }
  ];

  const housingTypes = [
    {
      name: "Résidences Neuves",
      description: "Nouveaux développements résidentiels",
      specificities: ["Standards énergétiques élevés", "Technologies modernes", "Conception optimisée", "Certifications"],
      solutions: ["Géothermie collective", "VMC double flux", "Domotique intégrée", "Monitoring énergétique"]
    },
    {
      name: "Rénovations Énergétiques",
      description: "Amélioration de l'habitat existant",
      specificities: ["Contraintes bâti existant", "Optimisation étapes", "Coûts maîtrisés", "Aides publiques"],
      solutions: ["Pompes à chaleur adaptées", "Ventilation ajoutée", "Isolation renforcée", "Régulation moderne"]
    },
    {
      name: "Logements Sociaux",
      description: "Habitat abordable et performant",
      specificities: ["Coûts d'exploitation réduits", "Simplicité d'usage", "Maintenance aisée", "Durabilité"],
      solutions: ["Solutions robustes", "Interface simplifiée", "Maintenance centralisée", "Économies garanties"]
    },
    {
      name: "Résidences Seniors",
      description: "Habitat adapté aux personnes âgées",
      specificities: ["Accessibilité universelle", "Sécurité renforcée", "Confort optimal", "Services intégrés"],
      solutions: ["Commandes simplifiées", "Détection présence", "Alerte santé", "Assistance technique"]
    }
  ];

  const regulations = [
    {
      name: "Réglementation Énergétique",
      requirements: ["RT 2020", "BBC Effinergie", "Label E+C-", "BEPOS"],
      icon: "fas fa-leaf",
      color: "neon-blue"
    },
    {
      name: "Normes de Construction",
      requirements: ["NF Habitat", "Qualitel", "Cerqual", "Label Passivhaus"],
      icon: "fas fa-building",
      color: "neon-green"
    },
    {
      name: "Accessibilité PMR",
      requirements: ["Loi handicap 2005", "Normes PMR", "Espaces adaptés", "Équipements accessibles"],
      icon: "fas fa-universal-access",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="logement-title">
              <span className="text-neon-green text-glow">SECTEUR</span>
              <span className="text-white"> RÉSIDENTIEL</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="logement-subtitle">
              Solutions techniques pour logements collectifs et habitat résidentiel performant
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
              <span className="text-neon-blue text-glow">résidentiels</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations en habitat collectif</p>
          </div>
          
          <div className="space-y-8">
            {housingProjects.map((project, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`project-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center relative" style={{backgroundImage: `url(${project.image})`}}>
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white space-y-1">
                        <div className="flex items-center">
                          <span className="text-sm opacity-80 mr-2">Logements:</span>
                          <span className="text-lg font-bold text-neon-blue">{project.units}</span>
                        </div>
                        <div className="text-sm">{project.surface} • {project.certification}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-green mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Logements</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.units}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Certification</div>
                        <div className="text-lg font-semibold text-neon-green">{project.certification}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Systèmes installés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.systems.map((system, systemIndex) => (
                          <span key={systemIndex} className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">
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

      {/* Housing Requirements */}
      <section className="py-20 bg-dark-800/50" data-testid="requirements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="requirements-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-purple text-glow">résidentielles</span>
            </h2>
            <p className="text-xl text-gray-300">Standards spécifiques à l'habitat collectif</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {housingRequirements.map((requirement, index) => (
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

      {/* HVAC Solutions */}
      <section className="py-20" data-testid="hvac-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="hvac-title">
              <span className="text-white">Solutions</span> 
              <span className="text-neon-blue text-glow">CVC</span>
            </h2>
            <p className="text-xl text-gray-300">Systèmes adaptés à l'habitat collectif</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hvacSolutions.map((solution, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`hvac-${index}`}>
                <h3 className={`text-xl font-semibold text-${solution.color} mb-4`}>{solution.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Efficacité</span>
                  <span className={`text-${solution.color} text-sm font-semibold`}>{solution.efficiency}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                  <ul className="space-y-1">
                    {solution.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-400 text-xs">• {app}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Caractéristiques :</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <i className={`fas fa-check text-${solution.color} mr-2 text-xs`}></i>
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

      {/* Housing Types */}
      <section className="py-20 bg-dark-800/50" data-testid="types-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="types-title">
              <span className="text-white">Types de</span> 
              <span className="text-neon-green text-glow">logements</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions adaptées à chaque type d'habitat</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {housingTypes.map((type, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`type-${index}`}>
                <h3 className="text-xl font-semibold text-neon-green mb-4">{type.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Spécificités :</h4>
                  <ul className="space-y-1">
                    {type.specificities.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center">
                        <i className="fas fa-info-circle text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Solutions :</h4>
                  <ul className="space-y-1">
                    {type.solutions.map((solution, solutionIndex) => (
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

      {/* Smart Home */}
      <section className="py-20" data-testid="smart-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="smart-title">
              <span className="text-white">Habitat</span> 
              <span className="text-neon-purple text-glow">intelligent</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies connectées pour le confort moderne</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {smartHome.map((solution, index) => (
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

      {/* Regulations */}
      <section className="py-20" data-testid="regulations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="regulations-title">
              <span className="text-white">Normes &</span> 
              <span className="text-neon-blue text-glow">certifications</span>
            </h2>
            <p className="text-xl text-gray-300">Conformité réglementaire et labels qualité</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`regulation-${index}`}>
                <div className={`w-16 h-16 bg-${regulation.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${regulation.icon} text-2xl text-${regulation.color}`}></i>
                </div>
                <h3 className={`text-xl font-semibold text-${regulation.color} mb-4`}>{regulation.name}</h3>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Standards :</h4>
                  <ul className="space-y-2">
                    {regulation.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center justify-center">
                        <i className={`fas fa-check text-${regulation.color} mr-2 text-xs`}></i>
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

      {/* Sustainability */}
      <section className="py-20" data-testid="sustainability-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="sustainability-title">
              <span className="text-white">Performance</span> 
              <span className="text-neon-green text-glow">énergétique</span>
            </h2>
            <p className="text-xl text-gray-300">Résultats de nos réalisations résidentielles</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {sustainability.map((metric, index) => (
                <div key={index} data-testid={`metric-${index}`}>
                  <div className={`text-4xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm mb-2">{metric.description}</div>
                  <div className={`text-${metric.color} text-xs`}>Standard: {metric.standard}</div>
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
              <span className="text-neon-green text-glow">résidentiel</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise spécialisée en équipements techniques résidentiels avec focus sur le confort, la performance énergétique et l'habitat intelligent
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">750+</div>
                <div className="text-gray-400 text-sm">Logements équipés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">35</div>
                <div className="text-gray-400 text-sm">kWh/m²/an chauffage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">94%</div>
                <div className="text-gray-400 text-sm">Satisfaction résidents</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-residential-project">
                <i className="fas fa-home mr-2"></i>
                Projet résidentiel
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-energy-renovation">
                <i className="fas fa-tools mr-2"></i>
                Rénovation énergétique
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}