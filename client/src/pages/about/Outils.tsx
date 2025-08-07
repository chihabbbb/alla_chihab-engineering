export default function Outils() {
  const softwareTools = [
    {
      name: "Autodesk Revit",
      category: "Modélisation BIM",
      description: "Logiciel de référence pour la modélisation 3D des installations techniques",
      features: ["Modélisation 3D", "Coordination MEP", "Documentation automatique", "Détection de conflits"],
      icon: "fas fa-cube",
      color: "neon-blue"
    },
    {
      name: "AutoCAD MEP",
      category: "Conception 2D/3D",
      description: "Outil de conception détaillée pour les systèmes mécaniques, électriques et plomberie",
      features: ["Plans techniques", "Schémas unifilaires", "Calculs de charge", "Bibliothèques spécialisées"],
      icon: "fas fa-drafting-compass",
      color: "neon-purple"
    },
    {
      name: "IES Virtual Environment",
      category: "Simulation thermique",
      description: "Logiciel avancé de simulation énergétique et d'analyse thermique dynamique",
      features: ["Simulation thermique", "Analyse énergétique", "Optimisation HVAC", "Certification énergétique"],
      icon: "fas fa-thermometer-half",
      color: "neon-green"
    },
    {
      name: "Carrier HAP",
      category: "Calcul de charge",
      description: "Logiciel de calcul de charges thermiques et de dimensionnement HVAC",
      features: ["Calcul de charges", "Dimensionnement équipements", "Sélection matériels", "Analyses économiques"],
      icon: "fas fa-calculator",
      color: "neon-blue"
    },
    {
      name: "DesignBuilder",
      category: "Performance énergétique",
      description: "Interface graphique pour EnergyPlus, simulation complète du bâtiment",
      features: ["Modélisation énergétique", "Analyse de confort", "Optimisation design", "Conformité réglementaire"],
      icon: "fas fa-building",
      color: "neon-purple"
    },
    {
      name: "Navisworks",
      category: "Coordination BIM",
      description: "Coordination 3D, détection de conflits et revue de projets",
      features: ["Coordination 3D", "Détection conflits", "Simulation 4D", "Revue collaborative"],
      icon: "fas fa-project-diagram",
      color: "neon-green"
    }
  ];

  const hardwareTools = [
    {
      name: "Stations de travail HP Z-Series",
      specs: "Intel Xeon, 64GB RAM, NVIDIA Quadro",
      description: "Stations haute performance pour modélisation BIM et calculs complexes",
      color: "neon-blue"
    },
    {
      name: "Serveur de calcul Dell PowerEdge",
      specs: "Multi-processeurs, 256GB RAM",
      description: "Serveur dédié aux simulations thermiques et calculs intensifs",
      color: "neon-purple"
    },
    {
      name: "Équipements de mesure Testo",
      specs: "Analyseurs de combustion, thermomètres IR",
      description: "Instruments de mesure pour audits et commissioning",
      color: "neon-green"
    },
    {
      name: "Drones d'inspection",
      specs: "Caméras thermiques, capteurs multiples",
      description: "Inspection et relevés thermographiques aériens",
      color: "neon-blue"
    }
  ];

  const certifications = [
    {
      name: "Autodesk Certified Professional",
      description: "Certification officielle Revit et AutoCAD",
      icon: "fas fa-certificate",
      color: "neon-blue"
    },
    {
      name: "BREEAM Assessor",
      description: "Évaluateur accrédité pour certification BREEAM",
      icon: "fas fa-leaf",
      color: "neon-green"
    },
    {
      name: "Passivhaus Designer",
      description: "Concepteur certifié bâtiments passifs",
      icon: "fas fa-home",
      color: "neon-purple"
    },
    {
      name: "ISO 50001 Lead Auditor",
      description: "Auditeur principal management énergétique",
      icon: "fas fa-clipboard-check",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="outils-title">
              <span className="text-neon-blue text-glow">NOS</span>
              <span className="text-white"> OUTILS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="outils-subtitle">
              Technologies de pointe et équipements professionnels pour une expertise de haut niveau
            </p>
          </div>
        </div>
      </section>

      {/* Software Tools */}
      <section className="py-20" data-testid="software-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="software-title">
              <span className="text-white">Logiciels</span> 
              <span className="text-neon-purple text-glow">spécialisés</span>
            </h2>
            <p className="text-xl text-gray-300">Suite logicielle complète pour tous nos métiers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTools.map((tool, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`software-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${tool.color}/20 rounded-xl flex items-center justify-center`}>
                    <i className={`${tool.icon} text-xl text-${tool.color}`}></i>
                  </div>
                  <span className={`text-xs font-semibold text-${tool.color} bg-${tool.color}/10 px-2 py-1 rounded-full`}>
                    {tool.category}
                  </span>
                </div>
                
                <h3 className={`text-lg font-semibold text-${tool.color} mb-2`}>{tool.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{tool.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Fonctionnalités :</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-xs">
                        <i className={`fas fa-check text-${tool.color} mr-2`}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-20 bg-dark-800/50" data-testid="hardware-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="hardware-title">
              <span className="text-white">Équipements</span> 
              <span className="text-neon-green text-glow">techniques</span>
            </h2>
            <p className="text-xl text-gray-300">Matériel professionnel haute performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {hardwareTools.map((hardware, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`hardware-${index}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold text-${hardware.color} mb-2`}>{hardware.name}</h3>
                    <p className="text-gray-400 text-sm font-medium mb-3">{hardware.specs}</p>
                  </div>
                  <div className={`w-12 h-12 bg-${hardware.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <i className="fas fa-desktop text-xl text-white"></i>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{hardware.description}</p>
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
              <span className="text-white">Certifications &</span> 
              <span className="text-neon-blue text-glow">accréditations</span>
            </h2>
            <p className="text-xl text-gray-300">Reconnaissance officielle de notre expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`certification-${index}`}>
                <div className={`w-16 h-16 bg-${cert.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${cert.icon} text-2xl text-${cert.color}`}></i>
                </div>
                <h3 className={`text-lg font-semibold text-${cert.color} mb-3`}>{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Investment */}
      <section className="py-20 bg-dark-800/50" data-testid="investment-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="investment-title">
              <span className="text-white">Investissement</span> 
              <span className="text-neon-purple text-glow">technologique</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nous investissons continuellement dans les dernières technologies pour maintenir notre avantage concurrentiel
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2" data-testid="stat-investment">200K€+</div>
                <div className="text-gray-400 text-sm">Investissement annuel en outils</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2" data-testid="stat-licenses">50+</div>
                <div className="text-gray-400 text-sm">Licences logicielles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2" data-testid="stat-training">100h</div>
                <div className="text-gray-400 text-sm">Formation continue/an</div>
              </div>
            </div>
            <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-demo">
              <i className="fas fa-play mr-2"></i>
              Demander une démonstration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}