export default function EnergieDurable() {
  const energySources = [
    {
      name: "Énergie Solaire",
      types: ["Photovoltaïque", "Thermique", "Hybride PVT"],
      description: "Solutions solaires complètes pour production d'électricité et de chaleur",
      efficiency: "15-22%",
      lifespan: "25-30 ans",
      icon: "fas fa-sun",
      color: "neon-blue"
    },
    {
      name: "Géothermie",
      types: ["Pompes à chaleur", "Géothermie profonde", "Stockage intersaisonnier"],
      description: "Exploitation de l'énergie terrestre pour chauffage et rafraîchissement",
      efficiency: "300-500%",
      lifespan: "20-25 ans",
      icon: "fas fa-mountain",
      color: "neon-green"
    },
    {
      name: "Biomasse",
      types: ["Granulés", "Plaquettes", "Biogaz"],
      description: "Valorisation énergétique des déchets organiques et résidus forestiers",
      efficiency: "80-95%",
      lifespan: "15-20 ans",
      icon: "fas fa-seedling",
      color: "neon-purple"
    },
    {
      name: "Éolien",
      types: ["Micro-éolien", "Petit éolien", "Éolien urbain"],
      description: "Production d'électricité par force du vent en milieu urbain et rural",
      efficiency: "25-45%",
      lifespan: "20-25 ans",
      icon: "fas fa-wind",
      color: "neon-blue"
    }
  ];

  const sustainableProjects = [
    {
      name: "Écoquartier Belval",
      type: "Résidentiel",
      technologies: ["Géothermie collective", "Panneaux solaires", "Smart grid"],
      performance: "Bâtiments passifs",
      co2Reduction: "75%",
      description: "Quartier durable avec réseau de chaleur géothermique et production solaire",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Centre de Données Green",
      type: "Datacenter",
      technologies: ["Free-cooling", "Cogénération", "Récupération chaleur"],
      performance: "PUE < 1.2",
      co2Reduction: "60%",
      description: "Datacenter haute efficacité avec valorisation de la chaleur fatale",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Campus Universitaire Zero Carbone",
      type: "Éducation",
      technologies: ["Solaire thermique", "Biomasse", "Stockage batteries"],
      performance: "BREEAM Outstanding",
      co2Reduction: "100%",
      description: "Campus autonome énergétiquement avec mix énergétique renouvelable",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const storageEconomies = [
    {
      name: "Batteries Lithium-Ion",
      capacity: "50-500 kWh",
      applications: ["Autoconsommation", "Secours", "Écrêtement"],
      efficiency: "90-95%",
      cycle: "6000-8000",
      color: "neon-blue"
    },
    {
      name: "Stockage Thermique",
      capacity: "100-5000 kWh",
      applications: ["Saisonnier", "Inertie", "Déphasage"],
      efficiency: "80-90%",
      cycle: "Illimité",
      color: "neon-green"
    },
    {
      name: "Hydrogène Vert",
      capacity: "1-50 MWh",
      applications: ["Longue durée", "Transport", "Industrie"],
      efficiency: "60-80%",
      cycle: "10000+",
      color: "neon-purple"
    }
  ];

  const regulations = [
    {
      name: "Directive UE 2018/2001",
      description: "Énergies renouvelables",
      target: "32% en 2030",
      scope: "Union Européenne"
    },
    {
      name: "Plan National Énergie-Climat",
      description: "PNEC Luxembourg",
      target: "25% EnR en 2030",
      scope: "Luxembourg"
    },
    {
      name: "Règlement Grand-ducal",
      description: "Performance énergétique",
      target: "AAA obligatoire 2025",
      scope: "Bâtiments neufs"
    },
    {
      name: "Green Deal Européen",
      description: "Neutralité carbone",
      target: "2050",
      scope: "Union Européenne"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="energie-durable-title">
              <span className="text-neon-green text-glow">ÉNERGIE</span>
              <span className="text-white"> & CONSTRUCTION DURABLE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="energie-durable-subtitle">
              Solutions énergétiques renouvelables et conception durable pour un avenir neutre en carbone
            </p>
          </div>
        </div>
      </section>

      {/* Energy Sources */}
      <section className="py-20" data-testid="energy-sources-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="energy-sources-title">
              <span className="text-white">Énergies</span> 
              <span className="text-neon-blue text-glow">renouvelables</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies propres pour un mix énergétique durable</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {energySources.map((source, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`energy-source-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${source.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${source.icon} text-2xl text-${source.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${source.color}`}>{source.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{source.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Efficacité</div>
                    <div className={`text-lg font-semibold text-${source.color}`}>{source.efficiency}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Durée de vie</div>
                    <div className={`text-lg font-semibold text-${source.color}`}>{source.lifespan}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {source.types.map((type, typeIndex) => (
                      <span key={typeIndex} className={`bg-${source.color}/20 text-${source.color} px-3 py-1 rounded-full text-sm`}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Projects */}
      <section className="py-20 bg-dark-800/50" data-testid="sustainable-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="sustainable-projects-title">
              <span className="text-white">Projets</span> 
              <span className="text-neon-purple text-glow">durables</span>
            </h2>
            <p className="text-xl text-gray-300">Réalisations exemplaires en construction durable</p>
          </div>
          
          <div className="space-y-8">
            {sustainableProjects.map((project, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`sustainable-project-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center" style={{backgroundImage: `url(${project.image})`}}>
                    <div className="h-full bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <div className="text-3xl font-bold text-neon-green mb-2">{project.co2Reduction}</div>
                        <div className="text-sm">Réduction CO₂</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-neon-green">{project.name}</h3>
                      <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">
                        {project.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <i className="fas fa-award mr-2"></i>
                      <span>{project.performance}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies intégrées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">
                            {tech}
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

      {/* Storage & Smart Grids */}
      <section className="py-20" data-testid="storage-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="storage-title">
              <span className="text-white">Stockage &</span> 
              <span className="text-neon-blue text-glow">réseaux intelligents</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions de stockage et gestion intelligente de l'énergie</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {storageEconomies.map((storage, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`storage-${index}`}>
                <h3 className={`text-xl font-semibold text-${storage.color} mb-4`}>{storage.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Capacité</span>
                    <span className="text-white text-sm">{storage.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Efficacité</span>
                    <span className={`text-${storage.color} text-sm font-semibold`}>{storage.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Cycles</span>
                    <span className="text-white text-sm">{storage.cycle}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                  <div className="space-y-1">
                    {storage.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center">
                        <i className={`fas fa-check text-${storage.color} mr-2 text-xs`}></i>
                        <span className="text-gray-400 text-xs">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-20 bg-dark-800/50" data-testid="regulations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="regulations-title">
              <span className="text-white">Réglementation &</span> 
              <span className="text-neon-green text-glow">objectifs</span>
            </h2>
            <p className="text-xl text-gray-300">Cadre réglementaire et objectifs de transition énergétique</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((regulation, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`regulation-${index}`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neon-blue">{regulation.name}</h3>
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-gavel text-neon-blue"></i>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{regulation.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-neon-green font-semibold">{regulation.target}</div>
                    <div className="text-gray-400 text-xs">{regulation.scope}</div>
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
              <span className="text-white">Transition</span> 
              <span className="text-neon-green text-glow">énergétique</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Accompagnement complet vers la neutralité carbone et l'autonomie énergétique
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
                <div className="text-gray-400 text-sm">Énergies renouvelables</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">0</div>
                <div className="text-gray-400 text-sm">Émission CO₂</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">25</div>
                <div className="text-gray-400 text-sm">Ans d'expérience</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-energy-study">
                <i className="fas fa-leaf mr-2"></i>
                Étude énergétique
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-sustainability-consulting">
                <i className="fas fa-handshake mr-2"></i>
                Conseil en durabilité
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}