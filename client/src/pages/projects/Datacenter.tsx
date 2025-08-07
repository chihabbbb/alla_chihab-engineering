export default function Datacenter() {
  const datacenterProjects = [
    {
      name: "Luxembourg Data Center",
      location: "Luxembourg-Ville",
      capacity: "5 MW",
      systems: ["Free-cooling", "Système redondant N+1", "Monitoring IoT", "PUE optimisé"],
      description: "Datacenter Tier III avec refroidissement haute efficacité et redondance totale",
      pue: "1.25",
      cooling: "Free-cooling + DX",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    },
    {
      name: "Edge Computing Facility",
      location: "Esch-sur-Alzette",
      capacity: "1.5 MW",
      systems: ["Refroidissement liquide", "IA prédictive", "Stockage énergie", "Récupération chaleur"],
      description: "Facility edge computing avec technologies de refroidissement avancées",
      pue: "1.15",
      cooling: "Liquid cooling",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Hyperscale Data Center",
      location: "Bettembourg",
      capacity: "20 MW",
      systems: ["Refroidissement adiabatique", "Système modulaire", "Green energy", "Gestion thermique"],
      description: "Centre de données hyperscale avec architecture modulaire et énergies renouvelables",
      pue: "1.20",
      cooling: "Adiabatic + Air",
      image: "https://images.unsplash.com/photo-1551882798-c1e5b45b9c14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    }
  ];

  const coolingTechnologies = [
    {
      name: "Free-Cooling",
      description: "Utilisation de l'air extérieur pour le refroidissement naturel",
      efficiency: "PUE 1.1-1.3",
      advantages: ["Très économique", "Écologique", "Maintenance réduite"],
      applications: ["Climats tempérés", "Charges modérées", "Datacenters Tier I-II"],
      icon: "fas fa-wind",
      color: "neon-blue"
    },
    {
      name: "Refroidissement Liquide",
      description: "Système de refroidissement direct par liquide caloporteur",
      efficiency: "PUE 1.05-1.15",
      advantages: ["Ultra efficace", "Haute densité", "Précision thermique"],
      applications: ["HPC", "IA/ML", "Densités élevées"],
      icon: "fas fa-tint",
      color: "neon-green"
    },
    {
      name: "Immersion Cooling",
      description: "Immersion complète des serveurs dans fluide diélectrique",
      efficiency: "PUE 1.02-1.08",
      advantages: ["Efficacité maximale", "Silence total", "Récupération chaleur"],
      applications: ["Calcul intensif", "Crypto mining", "R&D"],
      icon: "fas fa-swimming-pool",
      color: "neon-purple"
    },
    {
      name: "Refroidissement Hybride",
      description: "Combinaison intelligente de plusieurs technologies",
      efficiency: "PUE 1.15-1.25",
      advantages: ["Flexibilité", "Optimisation auto", "Redondance"],
      applications: ["Charges variables", "Évolutivité", "Tier III-IV"],
      icon: "fas fa-cogs",
      color: "neon-blue"
    }
  ];

  const infraRequirements = [
    {
      category: "Alimentation Électrique",
      requirements: [
        "Redondance N+1 minimum",
        "UPS autonomie 15 minutes",
        "Groupes électrogènes secours",
        "Monitoring temps réel"
      ],
      icon: "fas fa-bolt",
      color: "neon-blue"
    },
    {
      category: "Systèmes de Refroidissement",
      requirements: [
        "Redondance N+1",
        "Contrôle température ±2°C",
        "Hygrométrie 45-55%",
        "Alertes automatiques"
      ],
      icon: "fas fa-snowflake",
      color: "neon-green"
    },
    {
      category: "Sécurité & Accès",
      requirements: [
        "Contrôle accès biométrique",
        "Surveillance 24/7",
        "Détection incendie FM200",
        "Zones de sécurité multiples"
      ],
      icon: "fas fa-shield-alt",
      color: "neon-purple"
    },
    {
      category: "Monitoring & Gestion",
      requirements: [
        "DCIM intégré",
        "IoT sensors",
        "Prédictif maintenance",
        "Rapports automatisés"
      ],
      icon: "fas fa-chart-line",
      color: "neon-blue"
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "PUE",
      value: "1.15",
      description: "Power Usage Effectiveness moyen",
      target: "< 1.2",
      color: "neon-blue"
    },
    {
      metric: "WUE",
      value: "0.3",
      description: "Water Usage Effectiveness",
      target: "< 0.5",
      color: "neon-green"
    },
    {
      metric: "CUE",
      value: "0.05",
      description: "Carbon Usage Effectiveness",
      target: "< 0.1",
      color: "neon-purple"
    },
    {
      metric: "Efficacité Énergétique",
      value: "95%",
      description: "Utilisation énergies renouvelables",
      target: "> 90%",
      color: "neon-blue"
    }
  ];

  const tierStandards = [
    {
      tier: "Tier I",
      availability: "99.671%",
      downtime: "28.8 h/an",
      redundancy: "N",
      description: "Infrastructure basique",
      features: ["Pas de redondance", "Maintenance avec arrêt", "Single path"]
    },
    {
      tier: "Tier II",
      availability: "99.741%",
      downtime: "22.7 h/an",
      redundancy: "N+1",
      description: "Infrastructure redondante",
      features: ["Composants redondants", "Maintenance limitée", "Single path"]
    },
    {
      tier: "Tier III",
      availability: "99.982%",
      downtime: "1.6 h/an",
      redundancy: "N+1",
      description: "Infrastructure concurrente",
      features: ["Maintenance sans arrêt", "Paths multiples", "Un seul actif"]
    },
    {
      tier: "Tier IV",
      availability: "99.995%",
      downtime: "0.4 h/an",
      redundancy: "2N",
      description: "Infrastructure tolérante",
      features: ["Tolérance aux pannes", "Paths multiples", "Tous actifs"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="datacenter-title">
              <span className="text-neon-green text-glow">DATACENTERS</span>
              <span className="text-white"> & TÉLÉCOMMUNICATIONS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="datacenter-subtitle">
              Infrastructures critiques haute disponibilité avec technologies de refroidissement avancées
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
              <span className="text-neon-blue text-glow">datacenters</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations en infrastructures critiques</p>
          </div>
          
          <div className="space-y-8">
            {datacenterProjects.map((project, index) => (
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
                          <span className="text-sm opacity-80 mr-2">PUE:</span>
                          <span className="text-lg font-bold text-neon-blue">{project.pue}</span>
                        </div>
                        <div className="text-sm">{project.capacity} • {project.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-green mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Capacité</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.capacity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Refroidissement</div>
                        <div className="text-lg font-semibold text-neon-green">{project.cooling}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies clés :</h4>
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

      {/* Cooling Technologies */}
      <section className="py-20 bg-dark-800/50" data-testid="cooling-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="cooling-title">
              <span className="text-white">Technologies de</span> 
              <span className="text-neon-purple text-glow">refroidissement</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions avancées pour l'efficacité énergétique maximale</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coolingTechnologies.map((tech, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`cooling-tech-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${tech.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${tech.icon} text-2xl text-${tech.color}`}></i>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold text-${tech.color}`}>{tech.name}</h3>
                    <div className="text-sm text-gray-400">{tech.efficiency}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Avantages :</h4>
                    <ul className="space-y-1">
                      {tech.advantages.map((advantage, advantageIndex) => (
                        <li key={advantageIndex} className="text-gray-400 text-xs">• {advantage}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Applications :</h4>
                    <ul className="space-y-1">
                      {tech.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-gray-400 text-xs">• {app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Requirements */}
      <section className="py-20" data-testid="infrastructure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="infrastructure-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-blue text-glow">d'infrastructure</span>
            </h2>
            <p className="text-xl text-gray-300">Standards critiques pour datacenters de mission critique</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infraRequirements.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`infra-${index}`}>
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-xl text-${category.color}`}></i>
                </div>
                
                <h3 className={`text-lg font-semibold text-${category.color} mb-4`}>{category.category}</h3>
                
                <ul className="space-y-2">
                  {category.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <i className={`fas fa-check text-${category.color} mr-2 mt-1 text-xs`}></i>
                      <span className="text-gray-400 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Standards */}
      <section className="py-20 bg-dark-800/50" data-testid="tier-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="tier-title">
              <span className="text-white">Standards</span> 
              <span className="text-neon-green text-glow">Tier</span>
            </h2>
            <p className="text-xl text-gray-300">Classifications de disponibilité et redondance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tierStandards.map((tier, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`tier-${index}`}>
                <div className="text-3xl font-bold text-neon-blue mb-2">{tier.tier}</div>
                <div className="text-lg font-semibold text-white mb-3">{tier.description}</div>
                
                <div className="space-y-2 mb-6">
                  <div>
                    <div className="text-neon-green font-semibold">{tier.availability}</div>
                    <div className="text-gray-400 text-xs">Disponibilité</div>
                  </div>
                  <div>
                    <div className="text-neon-purple font-semibold">{tier.downtime}</div>
                    <div className="text-gray-400 text-xs">Arrêt max/an</div>
                  </div>
                  <div>
                    <div className="text-neon-blue font-semibold">{tier.redundancy}</div>
                    <div className="text-gray-400 text-xs">Redondance</div>
                  </div>
                </div>
                
                <ul className="space-y-1 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-xs">• {feature}</li>
                  ))}
                </ul>
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
              <span className="text-white">Métriques de</span> 
              <span className="text-neon-purple text-glow">durabilité</span>
            </h2>
            <p className="text-xl text-gray-300">Indicateurs de performance environnementale</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {sustainabilityMetrics.map((metric, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-dark-800/50" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
              <span className="text-white">Votre</span> 
              <span className="text-neon-green text-glow">datacenter</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Conception et réalisation d'infrastructures critiques haute disponibilité avec les meilleures performances énergétiques
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-datacenter-project">
                <i className="fas fa-server mr-2"></i>
                Projet datacenter
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-tier-assessment">
                <i className="fas fa-chart-line mr-2"></i>
                Évaluation Tier
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}