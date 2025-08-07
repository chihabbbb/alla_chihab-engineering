export default function OptimisationEnergetique() {
  const services = [
    {
      name: "Audit Énergétique",
      description: "Analyse complète des performances énergétiques de votre bâtiment",
      process: ["État des lieux", "Mesures in-situ", "Modélisation", "Rapport détaillé"],
      icon: "fas fa-search",
      color: "neon-blue"
    },
    {
      name: "Simulation Thermique",
      description: "Modélisation dynamique pour optimiser les consommations",
      process: ["Modèle 3D", "Scénarios d'usage", "Calculs dynamiques", "Optimisation"],
      icon: "fas fa-chart-area",
      color: "neon-green"
    },
    {
      name: "Récupération d'Énergie",
      description: "Solutions innovantes de récupération et valorisation énergétique",
      process: ["Potentiel identifié", "Solutions techniques", "Étude économique", "Mise en œuvre"],
      icon: "fas fa-recycle",
      color: "neon-purple"
    },
    {
      name: "Régulation Intelligente",
      description: "Systèmes de contrôle automatisés pour l'optimisation continue",
      process: ["Stratégie de contrôle", "Algorithmes", "Interface utilisateur", "Monitoring"],
      icon: "fas fa-brain",
      color: "neon-blue"
    }
  ];

  const technologies = [
    {
      name: "Pompes à Chaleur Haute Efficacité",
      description: "COP > 4.5, technologies inverter et réfrigérants écologiques",
      efficiency: "400% à 500%",
      applications: ["Chauffage", "ECS", "Rafraîchissement"],
      color: "neon-blue"
    },
    {
      name: "Récupération de Chaleur",
      description: "Échangeurs rotatifs, plaques et pompes à chaleur sur air extrait",
      efficiency: "70% à 90%",
      applications: ["Ventilation", "Eaux usées", "Process industriels"],
      color: "neon-green"
    },
    {
      name: "Free-Cooling",
      description: "Rafraîchissement naturel par air extérieur et géothermie",
      efficiency: "80% à 95%",
      applications: ["Datacenters", "Industrie", "Tertiaire"],
      color: "neon-purple"
    },
    {
      name: "Cogénération",
      description: "Production simultanée d'électricité et de chaleur",
      efficiency: "85% à 95%",
      applications: ["Hôpitaux", "Industries", "Quartiers"],
      color: "neon-blue"
    }
  ];

  const certifications = [
    {
      name: "Passivhaus",
      description: "Standard de performance énergétique très haute",
      criteria: "< 15 kWh/m²/an",
      icon: "fas fa-home",
      color: "neon-green"
    },
    {
      name: "BREEAM",
      description: "Certification environnementale britannique",
      criteria: "Excellent à Outstanding",
      icon: "fas fa-leaf",
      color: "neon-blue"
    },
    {
      name: "DGNB",
      description: "Système allemand de certification durable",
      criteria: "Or à Platine",
      icon: "fas fa-award",
      color: "neon-purple"
    },
    {
      name: "LEED",
      description: "Leadership in Energy and Environmental Design",
      criteria: "Gold à Platinum",
      icon: "fas fa-star",
      color: "neon-green"
    }
  ];

  const results = [
    {
      building: "Centre Commercial Cloche d'Or",
      type: "Commerce",
      surface: "45,000 m²",
      savings: "35%",
      measures: ["Free-cooling", "Récupération chaleur", "LED intelligents"],
      before: "180 kWh/m²/an",
      after: "117 kWh/m²/an"
    },
    {
      building: "Hôpital Centre",
      type: "Santé",
      surface: "28,000 m²",
      savings: "28%",
      measures: ["Cogénération", "Récupération eaux grises", "Régulation avancée"],
      before: "220 kWh/m²/an",
      after: "158 kWh/m²/an"
    },
    {
      building: "Tour de Bureaux European Quarter",
      type: "Bureaux",
      surface: "32,000 m²",
      savings: "42%",
      measures: ["Géothermie", "Façade active", "Building Management System"],
      before: "165 kWh/m²/an",
      after: "96 kWh/m²/an"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="optimisation-title">
              <span className="text-neon-green text-glow">OPTIMISATION</span>
              <span className="text-white"> ÉNERGÉTIQUE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="optimisation-subtitle">
              Solutions sur mesure pour réduire vos consommations et améliorer les performances énergétiques
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
              <span className="text-neon-blue text-glow">services</span>
            </h2>
            <p className="text-xl text-gray-300">Méthodologie complète d'optimisation énergétique</p>
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
                  <h4 className="text-lg font-semibold text-white mb-3">Processus :</h4>
                  <div className="space-y-2">
                    {service.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <div className={`w-6 h-6 bg-${service.color}/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <span className={`text-${service.color} text-xs font-bold`}>{stepIndex + 1}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-dark-800/50" data-testid="technologies-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="technologies-title">
              <span className="text-white">Technologies</span> 
              <span className="text-neon-purple text-glow">performantes</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions techniques de pointe pour l'efficacité énergétique</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`technology-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold text-${tech.color}`}>{tech.name}</h3>
                  <div className={`bg-${tech.color}/20 text-${tech.color} px-3 py-1 rounded-full text-sm font-bold`}>
                    {tech.efficiency}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{tech.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-dark-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20" data-testid="certifications-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="certifications-title">
              <span className="text-white">Certifications</span> 
              <span className="text-neon-blue text-glow">environnementales</span>
            </h2>
            <p className="text-xl text-gray-300">Accompagnement vers les plus hauts standards</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`certification-${index}`}>
                <div className={`w-16 h-16 bg-${cert.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${cert.icon} text-2xl text-${cert.color}`}></i>
                </div>
                <h3 className={`text-lg font-semibold text-${cert.color} mb-3`}>{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <p className={`text-${cert.color} text-sm font-semibold`}>{cert.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-dark-800/50" data-testid="results-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="results-title">
              <span className="text-white">Résultats</span> 
              <span className="text-neon-green text-glow">obtenus</span>
            </h2>
            <p className="text-xl text-gray-300">Performances réelles de nos optimisations</p>
          </div>
          
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`result-${index}`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-neon-blue mb-2">{result.building}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded text-sm mr-3">
                        {result.type}
                      </span>
                      <span>{result.surface}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {result.measures.map((measure, measureIndex) => (
                        <span key={measureIndex} className="bg-dark-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {measure}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-neon-green mb-2">{result.savings}</div>
                    <div className="text-gray-400">d'économies</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-neon-purple mb-1">{result.before}</div>
                      <div className="text-gray-400 text-sm">Avant</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-neon-green mb-1">{result.after}</div>
                      <div className="text-gray-400 text-sm">Après</div>
                    </div>
                  </div>
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
              <span className="text-white">Optimisez vos</span> 
              <span className="text-neon-green text-glow">performances</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Réduisez vos factures énergétiques de 30 à 50% avec nos solutions d'optimisation sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-audit">
                <i className="fas fa-search mr-2"></i>
                Audit énergétique gratuit
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-simulation">
                <i className="fas fa-calculator mr-2"></i>
                Simulation personnalisée
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}