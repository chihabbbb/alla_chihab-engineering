export default function MaisonSoins() {
  const healthcareProjects = [
    {
      name: "Hôpital de Luxembourg - Aile Sud",
      location: "Luxembourg-Ville",
      capacity: 320,
      systems: ["CVC hospitalière", "Filtration HEPA", "Surpression salles", "Urgence sanitaire"],
      description: "Extension hospitalière avec systèmes de ventilation médicale haute sécurité",
      surface: "28,000 m²",
      specialties: ["Chirurgie", "Réanimation", "Laboratoires"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2023"
    },
    {
      name: "Maison de Retraite Belval",
      location: "Esch-sur-Alzette",
      capacity: 150,
      systems: ["Ventilation adaptée", "Chauffage confort", "Détection chute", "Système d'appel"],
      description: "Établissement pour personnes âgées avec environnement technique adapté",
      surface: "12,500 m²",
      specialties: ["EHPAD", "Alzheimer", "Soins palliatifs"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2024"
    },
    {
      name: "Centre de Rééducation Kirchberg",
      location: "Luxembourg-Kirchberg",
      capacity: 80,
      systems: ["Piscine thérapeutique", "Salles techniques spécialisées", "Air traité médical", "Monitoring santé"],
      description: "Centre de rééducation avec équipements techniques médicaux spécialisés",
      surface: "8,500 m²",
      specialties: ["Kinésithérapie", "Hydrothérapie", "Rééducation"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      year: "2022"
    }
  ];

  const healthcareRequirements = [
    {
      name: "Hygiène & Asepsie",
      description: "Prévention des infections nosocomiales et contaminations",
      requirements: ["Filtration HEPA", "Surpression contrôlée", "Matériaux lisses", "Décontamination air"],
      icon: "fas fa-shield-virus",
      color: "neon-blue"
    },
    {
      name: "Confort Patient",
      description: "Environnement favorisant le bien-être et la guérison",
      requirements: ["Température stable", "Silence absolu", "Éclairage adapté", "Qualité air optimale"],
      icon: "fas fa-heart",
      color: "neon-green"
    },
    {
      name: "Sécurité Médicale",
      description: "Continuité des systèmes critiques pour la sécurité patients",
      requirements: ["Redondance N+1", "Alimentation secours", "Alarmes médicales", "Maintenance préventive"],
      icon: "fas fa-user-shield",
      color: "neon-purple"
    },
    {
      name: "Conformité Réglementaire",
      description: "Respect des normes hospitalières et sanitaires strictes",
      requirements: ["Normes HAS", "Certification ISO", "Validation microbiologique", "Documentation complète"],
      icon: "fas fa-clipboard-check",
      color: "neon-blue"
    }
  ];

  const hvacSystems = [
    {
      name: "CVC Hospitalière",
      applications: ["Blocs opératoires", "Réanimation", "Laboratoires", "Pharmacie"],
      features: ["Filtration HEPA H14", "Surpression graduelle", "Redondance totale", "Monitoring continu"],
      airChanges: "20-25 vol/h",
      color: "neon-blue"
    },
    {
      name: "Traitement Air Médical",
      applications: ["Salles d'examen", "Chambres patients", "Consultations", "Imagerie"],
      features: ["Filtration F7-F9", "Température précise", "Hygrométrie contrôlée", "Fonctionnement silencieux"],
      airChanges: "6-12 vol/h",
      color: "neon-green"
    },
    {
      name: "Ventilation Adaptée Seniors",
      applications: ["Chambres EHPAD", "Espaces communs", "Restaurants", "Activités"],
      features: ["Confort thermique", "Absence courants d'air", "Facilité réglage", "Maintenance simple"],
      airChanges: "4-8 vol/h",
      color: "neon-purple"
    }
  ];

  const specializedRooms = [
    {
      name: "Blocs Opératoires",
      description: "Environnement stérile pour interventions chirurgicales",
      requirements: ["ISO classe 5", "Surpression +15 Pa", "Température 18-26°C", "Hygrométrie 45-60%"],
      systems: ["Filtration HEPA H14", "Flux laminaire", "Redondance ventilateurs", "Secours électrique"]
    },
    {
      name: "Unités de Soins Intensifs",
      description: "Surveillance continue patients critiques",
      requirements: ["Surpression +10 Pa", "Renouvellement 8-12 vol/h", "Alarmes prioritaires", "Accès facilité"],
      systems: ["Ventilation médicale", "Gaz médicaux", "Monitoring avancé", "Éclairage thérapeutique"]
    },
    {
      name: "Laboratoires d'Analyses",
      description: "Espaces d'analyse avec contraintes de contamination",
      requirements: ["Confinement biologique", "Extraction sorbonnes", "Gradient de pression", "Décontamination"],
      systems: ["Ventilation sécurisée", "Sorbonnes biologiques", "Systèmes lavage", "Traitement déchets"]
    },
    {
      name: "Pharmacie Hospitalière",
      description: "Préparation et stockage médicaments",
      requirements: ["Zones propres", "Isolateurs", "Température contrôlée", "Traçabilité"],
      systems: ["Salles blanches", "Systèmes isolement", "Monitoring température", "Contrôle accès"]
    }
  ];

  const medicalGases = [
    {
      name: "Oxygène Médical",
      usage: "Ventilation assistée, urgences",
      distribution: "Réseau cuivre, prises murales",
      pressure: "3.5-4.0 bar",
      monitoring: "Alarmes pression, secours automatique"
    },
    {
      name: "Air Médical",
      usage: "Ventilation patients, outils pneumatiques",
      distribution: "Réseau cuivre étamé",
      pressure: "7-8 bar",
      monitoring: "Qualité air, point de rosée"
    },
    {
      name: "Aspiration Médicale",
      usage: "Drainage chirurgical, aspiration secrétions",
      distribution: "Réseau cuivre, pompes centralisées",
      pressure: "-400 à -600 mbar",
      monitoring: "Vide résiduel, alarmes"
    }
  ];

  const safetyMetrics = [
    {
      metric: "Disponibilité Systèmes",
      value: "99.9%",
      description: "Taux de fonctionnement annuel",
      standard: "> 99.5%",
      color: "neon-blue"
    },
    {
      metric: "Qualité Air",
      value: "ISO 5",
      description: "Classe de propreté blocs",
      standard: "ISO 5-7",
      color: "neon-green"
    },
    {
      metric: "Infections Nosocomiales",
      value: "-40%",
      description: "Réduction vs installations standard",
      standard: "< référence",
      color: "neon-purple"
    },
    {
      metric: "Satisfaction Patients",
      value: "91%",
      description: "Confort environnemental",
      standard: "> 85%",
      color: "neon-blue"
    }
  ];

  const emergencySystems = [
    {
      name: "Groupes Électrogènes",
      description: "Alimentation électrique de secours",
      features: ["Démarrage automatique < 15s", "Autonomie 72h minimum", "Maintenance préventive", "Tests mensuels"],
      icon: "fas fa-bolt",
      color: "neon-blue"
    },
    {
      name: "Systèmes Incendie",
      description: "Détection et extinction adaptées aux soins",
      features: ["Détection précoce", "Extinction FM200", "Compartimentage", "Évacuation assistée"],
      icon: "fas fa-fire-extinguisher",
      color: "neon-green"
    },
    {
      name: "Alarmes Médicales",
      description: "Surveillance des paramètres critiques",
      features: ["Appel malade", "Alarmes techniques", "Supervision centralisée", "Escalade automatique"],
      icon: "fas fa-bell",
      color: "neon-purple"
    }
  ];

  const regulations = [
    {
      name: "Normes Hospitalières",
      requirements: ["NF S 90-351", "ISO 14644", "HTM 03-01", "AFNOR FD S 90-351"],
      description: "Standards techniques pour établissements de santé"
    },
    {
      name: "Certifications Qualité",
      requirements: ["HAS Certification", "ISO 9001", "ISO 13485", "GMP"],
      description: "Assurance qualité et management des risques"
    },
    {
      name: "Sécurité Patients",
      requirements: ["Code de santé publique", "Pharmacovigilance", "Identitovigilance", "Hémovigilance"],
      description: "Réglementation sécurité et surveillance"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="maison-soins-title">
              <span className="text-neon-purple text-glow">ÉTABLISSEMENTS</span>
              <span className="text-white"> DE SOINS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="maison-soins-subtitle">
              Solutions techniques médicales pour hôpitaux, cliniques et établissements de soins
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
              <span className="text-neon-blue text-glow">médicaux</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations en établissements de soins</p>
          </div>
          
          <div className="space-y-8">
            {healthcareProjects.map((project, index) => (
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
                          <span className="text-sm opacity-80 mr-2">Capacité:</span>
                          <span className="text-lg font-bold text-neon-blue">{project.capacity} lits</span>
                        </div>
                        <div className="text-sm">{project.surface}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-purple mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Capacité</div>
                        <div className="text-lg font-semibold text-neon-blue">{project.capacity} lits</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Spécialités</div>
                        <div className="text-lg font-semibold text-neon-green">{project.specialties.length}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Spécialités :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.specialties.map((specialty, specialtyIndex) => (
                          <span key={specialtyIndex} className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
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

      {/* Healthcare Requirements */}
      <section className="py-20 bg-dark-800/50" data-testid="requirements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="requirements-title">
              <span className="text-white">Exigences</span> 
              <span className="text-neon-green text-glow">médicales</span>
            </h2>
            <p className="text-xl text-gray-300">Standards spécifiques aux établissements de soins</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {healthcareRequirements.map((requirement, index) => (
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
              <span className="text-neon-blue text-glow">médicaux</span>
            </h2>
            <p className="text-xl text-gray-300">Ventilation spécialisée pour environnements de soins</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hvacSystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`hvac-${index}`}>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Renouvellement</span>
                  <span className={`text-${system.color} text-sm font-semibold`}>{system.airChanges}</span>
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

      {/* Specialized Rooms */}
      <section className="py-20 bg-dark-800/50" data-testid="specialized-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="specialized-title">
              <span className="text-white">Espaces</span> 
              <span className="text-neon-purple text-glow">spécialisés</span>
            </h2>
            <p className="text-xl text-gray-300">Solutions pour environnements médicaux critiques</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specializedRooms.map((room, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`specialized-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{room.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{room.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Exigences :</h4>
                  <ul className="space-y-1">
                    {room.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <i className="fas fa-clipboard-check text-neon-blue mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Systèmes :</h4>
                  <ul className="space-y-1">
                    {room.systems.map((system, systemIndex) => (
                      <li key={systemIndex} className="flex items-center">
                        <i className="fas fa-check text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{system}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Gases */}
      <section className="py-20" data-testid="gases-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="gases-title">
              <span className="text-white">Gaz</span> 
              <span className="text-neon-green text-glow">médicaux</span>
            </h2>
            <p className="text-xl text-gray-300">Distribution et surveillance des fluides médicaux</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {medicalGases.map((gas, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`gas-${index}`}>
                <h3 className="text-xl font-semibold text-neon-green mb-4">{gas.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Usage</div>
                    <div className="text-white text-sm">{gas.usage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Distribution</div>
                    <div className="text-white text-sm">{gas.distribution}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Pression</div>
                    <div className="text-neon-green text-sm font-semibold">{gas.pressure}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Surveillance :</h4>
                  <p className="text-gray-400 text-xs">{gas.monitoring}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Systems */}
      <section className="py-20" data-testid="emergency-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="emergency-title">
              <span className="text-white">Systèmes de</span> 
              <span className="text-neon-blue text-glow">sécurité</span>
            </h2>
            <p className="text-xl text-gray-300">Protection et continuité de service en milieu médical</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {emergencySystems.map((system, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`emergency-${index}`}>
                <div className={`w-16 h-16 bg-${system.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${system.icon} text-2xl text-${system.color}`}></i>
                </div>
                <h3 className={`text-xl font-semibold text-${system.color} mb-4`}>{system.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{system.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Fonctionnalités :</h4>
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

      {/* Regulations */}
      <section className="py-20 bg-dark-800/50" data-testid="regulations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="regulations-title">
              <span className="text-white">Normes &</span> 
              <span className="text-neon-purple text-glow">certifications</span>
            </h2>
            <p className="text-xl text-gray-300">Conformité réglementaire médicale</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`regulation-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{regulation.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{regulation.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Standards :</h4>
                  <ul className="space-y-2">
                    {regulation.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center justify-center">
                        <i className="fas fa-check text-neon-purple mr-2 text-xs"></i>
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

      {/* Safety Metrics */}
      <section className="py-20" data-testid="metrics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="metrics-title">
              <span className="text-white">Indicateurs de</span> 
              <span className="text-neon-green text-glow">sécurité</span>
            </h2>
            <p className="text-xl text-gray-300">Performance de nos installations médicales</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {safetyMetrics.map((metric, index) => (
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
              <span className="text-white">Votre établissement</span> 
              <span className="text-neon-purple text-glow">de soins</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise spécialisée en équipements techniques médicaux avec focus sur la sécurité patients, l'hygiène et la continuité de service
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">20+</div>
                <div className="text-gray-400 text-sm">Établissements équipés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Disponibilité systèmes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">ISO 5</div>
                <div className="text-gray-400 text-sm">Qualité air blocs</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-healthcare-project">
                <i className="fas fa-hospital mr-2"></i>
                Projet médical
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-medical-audit">
                <i className="fas fa-stethoscope mr-2"></i>
                Audit médical
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}