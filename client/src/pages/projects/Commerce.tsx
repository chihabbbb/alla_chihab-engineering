export default function Commerce() {
  const commercialProjects = [
    {
      name: "Centre Commercial Cloche d'Or",
      location: "Luxembourg-Ville",
      surface: "45,000 m²",
      systems: ["CVC centralisée", "Récupération chaleur", "GTB intégrée", "Éclairage LED intelligent"],
      description: "Centre commercial moderne avec gestion énergétique optimisée et confort client",
      stores: 120,
      visitors: "2M/an",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Retail Park Belval",
      location: "Esch-sur-Alzette", 
      surface: "28,000 m²",
      systems: ["Systèmes multi-zones", "Free-cooling", "Ventilation double flux", "Monitoring IoT"],
      description: "Parc commercial avec approche durable et technologies intelligentes",
      stores: 85,
      visitors: "1.5M/an",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    },
    {
      name: "Galerie Commerciale Kirchberg",
      location: "Luxembourg-Kirchberg",
      surface: "32,000 m²",
      systems: ["HVAC haute efficacité", "Éclairage adaptatif", "Ventilation intelligente", "Récupération énergie"],
      description: "Galerie haut de gamme avec systèmes techniques sophistiqués",
      stores: 95,
      visitors: "1.8M/an",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    }
  ];

  const commercialChallenges = [
    {
      name: "Confort Client",
      description: "Assurer un environnement agréable pour favoriser l'expérience d'achat",
      requirements: ["Température uniforme", "Qualité d'air optimale", "Acoustique maîtrisée", "Éclairage adapté"],
      icon: "fas fa-users",
      color: "neon-blue"
    },
    {
      name: "Flexibilité d'Exploitation",
      description: "Adaptation aux variations d'affluence et horaires d'ouverture",
      requirements: ["Zonage modulaire", "Programmation horaire", "Gestion à distance", "Maintenance préventive"],
      icon: "fas fa-clock",
      color: "neon-green"
    },
    {
      name: "Efficacité Énergétique",
      description: "Optimisation des coûts d'exploitation pour la rentabilité",
      requirements: ["Récupération d'énergie", "Éclairage LED", "Régulation avancée", "Monitoring temps réel"],
      icon: "fas fa-leaf",
      color: "neon-purple"
    },
    {
      name: "Sécurité & Conformité",
      description: "Respect des normes et sécurité des personnes",
      requirements: ["Désenfumage", "Sprinklage", "Éclairage sécurité", "Contrôle d'accès"],
      icon: "fas fa-shield-alt",
      color: "neon-blue"
    }
  ];

  const hvacSolutions = [
    {
      name: "CVC Centralisée",
      applications: ["Grands centres commerciaux", "Galeries couvertes", "Hypermarchés"],
      features: ["Traitement d'air centralisé", "Distribution par gaines", "Récupération chaleur", "Filtration HEPA"],
      advantages: ["Efficacité énergétique", "Maintenance centralisée", "Contrôle global"],
      color: "neon-blue"
    },
    {
      name: "Systèmes Multi-Zones",
      applications: ["Centres multi-enseignes", "Retail parks", "Outlets"],
      features: ["Unités individuelles", "Contrôle par zone", "Facturation séparée", "Flexibilité totale"],
      advantages: ["Adaptabilité", "Coûts partagés", "Indépendance"],
      color: "neon-green"
    },
    {
      name: "Free-Cooling",
      applications: ["Magasins techniques", "Supermarchés", "Entrepôts commerciaux"],
      features: ["Refroidissement naturel", "Échangeurs air-air", "Bypass économique", "Régulation intelligente"],
      advantages: ["Économies importantes", "Écologique", "Maintenance réduite"],
      color: "neon-purple"
    }
  ];

  const lightingSolutions = [
    {
      name: "Éclairage LED Intelligent",
      description: "Systèmes d'éclairage adaptatifs pour espaces commerciaux",
      features: ["Variation automatique", "Détection présence", "Gestion centralisée", "Ambiances programmées"]
    },
    {
      name: "Éclairage de Mise en Valeur",
      description: "Solutions spécialisées pour la présentation des produits",
      features: ["Spots orientables", "IRC élevé", "Températures variables", "Gradation fine"]
    },
    {
      name: "Signalétique Lumineuse",
      description: "Éclairage de guidage et d'information des visiteurs", 
      features: ["Balisage LED", "Panneaux lumineux", "Signalisation sécurité", "Affichage dynamique"]
    }
  ];

  const energyManagement = [
    {
      metric: "Consommation Énergétique",
      value: "180 kWh/m²/an",
      description: "Moyenne optimisée centres commerciaux",
      benchmark: "< 200 kWh/m²/an",
      color: "neon-blue"
    },
    {
      metric: "Économies Réalisées",
      value: "25%",
      description: "Réduction vs solutions standard",
      benchmark: "> 20%",
      color: "neon-green"
    },
    {
      metric: "Satisfaction Clients",
      value: "92%",
      description: "Indice de confort des visiteurs",
      benchmark: "> 85%",
      color: "neon-purple"
    },
    {
      metric: "Disponibilité Systèmes",
      value: "99.2%",
      description: "Temps de fonctionnement optimal",
      benchmark: "> 98%",
      color: "neon-blue"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="commerce-title">
              <span className="text-neon-green text-glow">SECTEUR</span>
              <span className="text-white"> COMMERCIAL</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="commerce-subtitle">
              Solutions techniques pour centres commerciaux, retail et espaces de vente
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
              <span className="text-neon-blue text-glow">commerciaux</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations dans le secteur commercial</p>
          </div>
          
          <div className="space-y-8">
            {commercialProjects.map((project, index) => (
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
                          <span className="text-sm opacity-80 mr-2">Commerces:</span>
                          <span className="text-lg font-bold text-neon-blue">{project.stores}</span>
                        </div>
                        <div className="text-sm">{project.surface} • {project.visitors}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-green mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Surface</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.surface}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Visiteurs</div>
                        <div className="text-lg font-semibold text-neon-green">{project.visitors}</div>
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

      {/* Commercial Challenges */}
      <section className="py-20 bg-dark-800/50" data-testid="challenges-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="challenges-title">
              <span className="text-white">Défis</span> 
              <span className="text-neon-purple text-glow">techniques</span>
            </h2>
            <p className="text-xl text-gray-300">Enjeux spécifiques aux espaces commerciaux</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commercialChallenges.map((challenge, index) => (
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

      {/* HVAC Solutions */}
      <section className="py-20" data-testid="hvac-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="hvac-title">
              <span className="text-white">Solutions</span> 
              <span className="text-neon-blue text-glow">CVC</span>
            </h2>
            <p className="text-xl text-gray-300">Systèmes adaptés aux espaces commerciaux</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hvacSolutions.map((solution, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`hvac-${index}`}>
                <h3 className={`text-xl font-semibold text-${solution.color} mb-4`}>{solution.name}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                  <ul className="space-y-1">
                    {solution.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-400 text-xs">• {app}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
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
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Avantages :</h4>
                  <div className="flex flex-wrap gap-1">
                    {solution.advantages.map((advantage, advantageIndex) => (
                      <span key={advantageIndex} className={`bg-${solution.color}/20 text-${solution.color} px-2 py-1 rounded text-xs`}>
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

      {/* Lighting Solutions */}
      <section className="py-20 bg-dark-800/50" data-testid="lighting-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="lighting-title">
              <span className="text-white">Solutions</span> 
              <span className="text-neon-green text-glow">d'éclairage</span>
            </h2>
            <p className="text-xl text-gray-300">Éclairage intelligent pour espaces commerciaux</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {lightingSolutions.map((solution, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`lighting-${index}`}>
                <h3 className="text-xl font-semibold text-neon-green mb-4">{solution.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{solution.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <i className="fas fa-lightbulb text-neon-green mr-2 text-xs"></i>
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

      {/* Energy Management */}
      <section className="py-20" data-testid="energy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="energy-title">
              <span className="text-white">Gestion</span> 
              <span className="text-neon-purple text-glow">énergétique</span>
            </h2>
            <p className="text-xl text-gray-300">Performance énergétique de nos réalisations</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {energyManagement.map((metric, index) => (
                <div key={index} data-testid={`energy-metric-${index}`}>
                  <div className={`text-4xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm mb-2">{metric.description}</div>
                  <div className={`text-${metric.color} text-xs`}>Objectif: {metric.benchmark}</div>
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
              <span className="text-neon-green text-glow">commercial</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise reconnue en équipements techniques pour centres commerciaux et espaces de vente
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">50+</div>
                <div className="text-gray-400 text-sm">Centres équipés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">25%</div>
                <div className="text-gray-400 text-sm">Économies d'énergie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">92%</div>
                <div className="text-gray-400 text-sm">Satisfaction clients</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-commercial-project">
                <i className="fas fa-shopping-cart mr-2"></i>
                Projet commercial
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-energy-audit">
                <i className="fas fa-chart-line mr-2"></i>
                Audit énergétique
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}