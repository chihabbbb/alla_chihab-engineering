export default function Industrie() {
  const industrialProjects = [
    {
      name: "Usine ArcelorMittal - Belval",
      location: "Esch-sur-Alzette",
      surface: "85,000 m²",
      systems: ["Fours industriels", "Récupération chaleur", "Ventilation process", "Supervision SCADA"],
      description: "Installation sidérurgique avec systèmes de récupération d'énergie haute température",
      production: "2.5M tonnes/an",
      temperature: "1600°C",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Centrale Électrique Twinerg",
      location: "Esch-sur-Alzette",
      surface: "12,000 m²",
      systems: ["Turbines cogénération", "Échangeurs haute performance", "Traitement fumées", "Monitoring continu"],
      description: "Centrale de cogénération biomasse avec récupération maximale d'énergie",
      production: "50 MW électrique",
      temperature: "540°C",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    },
    {
      name: "Usine Chimique Dupont",
      location: "Contern",
      surface: "28,000 m²",
      systems: ["Ventilation sécurisée", "Traitement air process", "Contrôle explosivité", "Récupération solvants"],
      description: "Installation chimique avec systèmes de sécurité avancés et récupération de matières",
      production: "45,000 t/an",
      temperature: "280°C",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    }
  ];

  const industrialChallenges = [
    {
      name: "Process Industriels",
      description: "Intégration avec les process de production spécifiques",
      requirements: ["Température élevée", "Atmosphères corrosives", "Continuité production", "Précision contrôle"],
      icon: "fas fa-cogs",
      color: "neon-blue"
    },
    {
      name: "Sécurité Industrielle",
      description: "Protection du personnel et des installations",
      requirements: ["Zones ATEX", "Détection gaz", "Ventilation sécurisée", "Arrêts d'urgence"],
      icon: "fas fa-hard-hat",
      color: "neon-green"
    },
    {
      name: "Efficacité Énergétique",
      description: "Optimisation des consommations énergétiques",
      requirements: ["Récupération chaleur", "Cogénération", "Variateurs fréquence", "Monitoring temps réel"],
      icon: "fas fa-bolt",
      color: "neon-purple"
    },
    {
      name: "Conformité Réglementaire",
      description: "Respect des normes environnementales strictes",
      requirements: ["Émissions contrôlées", "Traitement effluents", "Monitoring continu", "Rapports automatisés"],
      icon: "fas fa-balance-scale",
      color: "neon-blue"
    }
  ];

  const hvacSystems = [
    {
      name: "Ventilation Process",
      applications: ["Halls de production", "Zones chimiques", "Espaces confinés"],
      features: ["Débits élevés", "Résistance corrosion", "Filtration spécialisée", "Régulation précise"],
      capacity: "50,000 à 500,000 m³/h",
      color: "neon-blue"
    },
    {
      name: "Récupération Chaleur",
      applications: ["Fours industriels", "Process haute température", "Rejets thermiques"],
      features: ["Échangeurs haute performance", "Résistance thermique", "ORC/Kalina", "Stockage thermique"],
      capacity: "1 à 50 MW thermique",
      color: "neon-green"
    },
    {
      name: "Traitement d'Air Spécialisé",
      applications: ["Salles blanches", "Zones ATEX", "Process sensibles"],
      features: ["Filtration HEPA/ULPA", "Surpression contrôlée", "Anti-explosion", "Monitoring continu"],
      capacity: "Classe ISO 5 à 8",
      color: "neon-purple"
    }
  ];

  const safetySystems = [
    {
      name: "Zones ATEX",
      description: "Ventilation pour atmosphères explosives",
      features: ["Équipements certifiés", "Détection gaz", "Balayage sécurité", "Arrêts automatiques"]
    },
    {
      name: "Ventilation Sécurisée",
      description: "Systèmes de désenfumage et évacuation",
      features: ["Extracteurs haute température", "Commandes déportées", "Alimentation secours", "Maintenance facilitée"]
    },
    {
      name: "Contrôle Contamination",
      description: "Prévention de la dispersion de polluants",
      features: ["Confinement dynamique", "Gradients de pression", "Filtration absolue", "Monitoring particules"]
    }
  ];

  const energyRecovery = [
    {
      metric: "Récupération Chaleur",
      value: "75%",
      description: "Taux de récupération moyen",
      potential: "> 70%",
      color: "neon-blue"
    },
    {
      metric: "Économies Énergétiques",
      value: "35%",
      description: "Réduction consommation globale",
      potential: "> 30%",
      color: "neon-green"
    },
    {
      metric: "ROI Moyen",
      value: "3.5 ans",
      description: "Retour sur investissement",
      potential: "< 5 ans",
      color: "neon-purple"
    },
    {
      metric: "Disponibilité",
      value: "98.5%",
      description: "Taux de fonctionnement",
      potential: "> 95%",
      color: "neon-blue"
    }
  ];

  const industrialSectors = [
    {
      name: "Sidérurgie",
      description: "Production et transformation de l'acier",
      specificities: ["Températures extrêmes", "Atmosphères poussiéreuses", "Récupération chaleur", "Gaz process"],
      solutions: ["Échangeurs haute température", "Filtration industrielle", "Cogénération", "Traitement gaz"]
    },
    {
      name: "Chimie & Pétrochimie",
      description: "Transformation de matières chimiques",
      specificities: ["Atmosphères corrosives", "Zones ATEX", "Process continues", "Sécurité renforcée"],
      solutions: ["Matériaux résistants", "Ventilation anti-explosion", "Redondance systèmes", "Détection avancée"]
    },
    {
      name: "Agroalimentaire",
      description: "Transformation de produits alimentaires",
      specificities: ["Hygiène stricte", "Températures contrôlées", "Chaîne du froid", "Normes HACCP"],
      solutions: ["Matériaux alimentaires", "Décontamination", "Récupération énergie", "Monitoring qualité"]
    },
    {
      name: "Pharmaceutique",
      description: "Production de médicaments et substances actives",
      specificities: ["Salles blanches", "Confinement", "Validation", "GMP/BPF"],
      solutions: ["Filtration absolue", "Surpression contrôlée", "Qualification", "Documentation complète"]
    }
  ];

  const controlSystems = [
    {
      name: "SCADA Industriel",
      description: "Supervision centralisée des process industriels",
      features: ["Interface graphique", "Alarmes temps réel", "Historiques process", "Rapports automatiques"],
      icon: "fas fa-desktop",
      color: "neon-blue"
    },
    {
      name: "Automates Sécurisés",
      description: "Contrôle process avec fonctions de sécurité",
      features: ["SIL 2/3", "Redondance", "Diagnostics avancés", "Communications sécurisées"],
      icon: "fas fa-microchip",
      color: "neon-green"
    },
    {
      name: "Instrumentation Process",
      description: "Mesure et contrôle des paramètres critiques",
      features: ["Capteurs haute précision", "Transmetteurs 4-20mA", "Bus de terrain", "Étalonnage traçable"],
      icon: "fas fa-gauge-high",
      color: "neon-purple"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="industrie-title">
              <span className="text-neon-blue text-glow">SECTEUR</span>
              <span className="text-white"> INDUSTRIEL</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="industrie-subtitle">
              Solutions techniques haute performance pour process industriels et environnements exigeants
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
              <span className="text-neon-green text-glow">industriels</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations dans l'industrie</p>
          </div>
          
          <div className="space-y-8">
            {industrialProjects.map((project, index) => (
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
                          <span className="text-sm opacity-80 mr-2">Process:</span>
                          <span className="text-lg font-bold text-neon-green">{project.temperature}</span>
                        </div>
                        <div className="text-sm">{project.production}</div>
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
                        <div className="text-sm text-gray-400 mb-1">Production</div>
                        <div className="text-lg font-semibold text-neon-green">{project.production}</div>
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

      {/* Industrial Challenges */}
      <section className="py-20 bg-dark-800/50" data-testid="challenges-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="challenges-title">
              <span className="text-white">Défis</span> 
              <span className="text-neon-purple text-glow">industriels</span>
            </h2>
            <p className="text-xl text-gray-300">Enjeux techniques des environnements industriels</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industrialChallenges.map((challenge, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`challenge-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${challenge.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${challenge.icon} text-2xl text-${challenge.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${challenge.color}`}>{challenge.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{challenge.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Solutions techniques :</h4>
                  <ul className="space-y-2">
                    {challenge.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <i className={`fas fa-check text-${challenge.color} mr-3`}></i>
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
              <span className="text-neon-blue text-glow">industriels</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies adaptées aux process industriels</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hvacSystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`hvac-${index}`}>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Capacité</span>
                  <span className={`text-${system.color} text-sm font-semibold`}>{system.capacity}</span>
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

      {/* Industrial Sectors */}
      <section className="py-20 bg-dark-800/50" data-testid="sectors-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="sectors-title">
              <span className="text-white">Secteurs</span> 
              <span className="text-neon-green text-glow">d'activité</span>
            </h2>
            <p className="text-xl text-gray-300">Expertise sectorielle spécialisée</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industrialSectors.map((sector, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`sector-${index}`}>
                <h3 className="text-xl font-semibold text-neon-green mb-4">{sector.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{sector.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Spécificités :</h4>
                  <ul className="space-y-1">
                    {sector.specificities.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center">
                        <i className="fas fa-exclamation-triangle text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Solutions :</h4>
                  <ul className="space-y-1">
                    {sector.solutions.map((solution, solutionIndex) => (
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

      {/* Safety Systems */}
      <section className="py-20" data-testid="safety-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="safety-title">
              <span className="text-white">Systèmes de</span> 
              <span className="text-neon-purple text-glow">sécurité</span>
            </h2>
            <p className="text-xl text-gray-300">Protection adaptée aux risques industriels</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {safetySystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`safety-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{system.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{system.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <i className="fas fa-shield-alt text-neon-purple mr-2 text-xs"></i>
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

      {/* Control Systems */}
      <section className="py-20" data-testid="control-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="control-title">
              <span className="text-white">Systèmes de</span> 
              <span className="text-neon-blue text-glow">contrôle</span>
            </h2>
            <p className="text-xl text-gray-300">Automatisation et supervision industrielle</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {controlSystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`control-${index}`}>
                <div className={`w-16 h-16 bg-${system.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${system.icon} text-2xl text-${system.color}`}></i>
                </div>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{system.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Caractéristiques :</h4>
                  <ul className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
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

      {/* Energy Recovery */}
      <section className="py-20" data-testid="energy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="energy-title">
              <span className="text-white">Récupération</span> 
              <span className="text-neon-green text-glow">d'énergie</span>
            </h2>
            <p className="text-xl text-gray-300">Performance énergétique de nos installations</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {energyRecovery.map((metric, index) => (
                <div key={index} data-testid={`metric-${index}`}>
                  <div className={`text-4xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm mb-2">{metric.description}</div>
                  <div className={`text-${metric.color} text-xs`}>Objectif: {metric.potential}</div>
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
              <span className="text-neon-blue text-glow">industriel</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise spécialisée en équipements techniques industriels avec focus sur la sécurité, la performance et la récupération d'énergie
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">40+</div>
                <div className="text-gray-400 text-sm">Installations industrielles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">75%</div>
                <div className="text-gray-400 text-sm">Récupération chaleur</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">98.5%</div>
                <div className="text-gray-400 text-sm">Disponibilité</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-industrial-project">
                <i className="fas fa-industry mr-2"></i>
                Projet industriel
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-energy-audit">
                <i className="fas fa-bolt mr-2"></i>
                Audit énergétique
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}