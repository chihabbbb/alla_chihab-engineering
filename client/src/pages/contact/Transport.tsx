export default function Transport() {
  const transportOptions = [
    {
      name: "Transports en Commun",
      description: "Réseau efficace et écologique pour rejoindre nos bureaux",
      icon: "fas fa-bus",
      color: "neon-blue",
      advantages: ["Respectueux environnement", "Économique", "Évite le stress circulation", "Horaires réguliers"],
      details: [
        "Bus urbains toutes les 15-20 minutes",
        "Tram jusqu'à Luxembourg-Ville",
        "Train CFL pour Esch-sur-Alzette", 
        "Pass mobilité journée/mensuel"
      ]
    },
    {
      name: "Véhicule Personnel",
      description: "Accès direct avec parkings gratuits sécurisés",
      icon: "fas fa-car",
      color: "neon-green",
      advantages: ["Flexibilité horaires", "Parking gratuit", "Confort personnel", "Idéal rendez-vous"],
      details: [
        "Places visiteurs réservées",
        "Sécurité 24/7",
        "Bornes recharge électrique",
        "Accès facile autoroutes"
      ]
    },
    {
      name: "Mobilité Douce",
      description: "Vélo et modes de transport actifs encouragés",
      icon: "fas fa-bicycle",
      color: "neon-purple",
      advantages: ["Santé et bien-être", "Zéro émission", "Stationnement aisé", "Économique"],
      details: [
        "Pistes cyclables sécurisées",
        "Abris vélo couverts",
        "Douches et vestiaires",
        "Kit réparation disponible"
      ]
    }
  ];

  const officeAccess = [
    {
      office: "Siège Luxembourg",
      address: "15 Avenue John F. Kennedy, L-1855 Luxembourg",
      publicTransport: {
        bus: ["Ligne 16: Arrêt Kennedy (50m)", "Ligne 28: Arrêt Bourbon (100m)"],
        tram: ["T1: Station Bourbon (200m)"],
        train: ["Gare Centrale (1.2km)", "Navette bus 30"]
      },
      carAccess: {
        highways: ["A1 sortie Kirchberg", "A7 sortie Centre"],
        parking: "20 places gratuites",
        electricCharging: "4 bornes recharge rapide"
      },
      bikeAccess: {
        paths: ["PC1 piste cyclable principale", "Vel'oh stations proximité"],
        parking: "Abri vélo sécurisé 15 places",
        facilities: "Douches, vestiaires, kit réparation"
      }
    },
    {
      office: "Bureau Esch-sur-Alzette", 
      address: "42 Boulevard du Jazz, L-4370 Esch-sur-Alzette",
      publicTransport: {
        bus: ["Ligne 1: Arrêt Belval-Université", "Ligne 3: Arrêt Jazz"],
        tram: [],
        train: ["Gare Belval-Université (300m)", "Ligne Luxembourg-Bettembourg"]
      },
      carAccess: {
        highways: ["A4 sortie Belval", "A13 sortie Esch-Centre"],
        parking: "15 places gratuites",
        electricCharging: "2 bornes recharge"
      },
      bikeAccess: {
        paths: ["Piste cyclable Belval", "Connexion réseau national"],
        parking: "Abri vélo 10 places",
        facilities: "Vestiaires disponibles"
      }
    },
    {
      office: "Antenne Differdange",
      address: "128 Avenue de la Liberté, L-4602 Differdange", 
      publicTransport: {
        bus: ["Ligne 15: Arrêt Liberté", "Ligne 18: Arrêt Centre"],
        tram: [],
        train: ["Gare Differdange (800m)", "Ligne Pétange-Luxembourg"]
      },
      carAccess: {
        highways: ["A4 sortie Differdange", "N31 depuis Pétange"],
        parking: "8 places gratuites",
        electricCharging: "1 borne recharge"
      },
      bikeAccess: {
        paths: ["Piste cyclable communale", "Connexion PC2"],
        parking: "Abri vélo 6 places",
        facilities: "Accès vestiaires"
      }
    }
  ];

  const travelTips = [
    {
      category: "Planification",
      tips: [
        "Consultez les horaires transports en commun",
        "Préférez les heures creuses (9h-16h)",
        "Applications mobiles: mobiliteit.lu, CFL mobile",
        "Vérifiez la météo pour vélo/marche"
      ],
      icon: "fas fa-clock",
      color: "neon-blue"
    },
    {
      category: "Économies",
      tips: [
        "Pass mobiliteit pour tous transports publics",
        "Covoiturage avec d'autres visiteurs",
        "Parking gratuit dans nos bureaux",
        "Remboursement frais transport selon RDV"
      ],
      icon: "fas fa-euro-sign",
      color: "neon-green"
    },
    {
      category: "Confort",
      tips: [
        "Arrivée 10 minutes avant RDV",
        "Accueil personnalisé à l'entrée",
        "Café/thé offerts en attendant",
        "Support itinéraire si besoin"
      ],
      icon: "fas fa-coffee",
      color: "neon-purple"
    }
  ];

  const sustainableMobility = [
    {
      name: "Objectif Carbone Neutre",
      description: "Notre engagement pour réduire l'empreinte transport",
      initiatives: [
        "Incitation transports publics",
        "Bornes recharge véhicules électriques", 
        "Télétravail et visioconférence",
        "Compensation carbone déplacements"
      ],
      impact: "Réduction 40% émissions transport"
    },
    {
      name: "Mobilité des Collaborateurs",
      description: "Faciliter les déplacements durables de nos équipes",
      initiatives: [
        "Prime transport public",
        "Vélos de fonction électriques",
        "Covoiturage encouragé",
        "Horaires flexibles"
      ],
      impact: "85% collaborateurs en mobilité douce"
    },
    {
      name: "Innovations Transport",
      description: "Test de nouvelles solutions de mobilité",
      initiatives: [
        "Partenariat vélos partagés",
        "App covoiturage interne",
        "Véhicules électriques société",
        "Stations mobilité multimodale"
      ],
      impact: "Solutions pilotes déployées"
    }
  ];

  const emergencyTransport = [
    {
      situation: "Grève Transports Publics",
      solutions: ["Service navette exceptionnelle", "Covoiturage organisé", "Visioconférence privilégiée", "Report RDV si nécessaire"],
      contact: "+352 26 12 34 56"
    },
    {
      situation: "Conditions Météo Difficiles",
      solutions: ["Info trafic temps réel", "Conseils itinéraires alternatifs", "Report sécurisé RDV", "Assistance dépannage"],
      contact: "info@allachihab.lu"
    },
    {
      situation: "Problème Véhicule/Accident",
      solutions: ["Assistance dépannage", "Transport alternatif organisé", "Flexibilité horaires RDV", "Support administratif"],
      contact: "urgence@allachihab.lu"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="transport-title">
              <span className="text-neon-green text-glow">TRANSPORT</span>
              <span className="text-white"> & ACCÈS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="transport-subtitle">
              Toutes les informations pour nous rejoindre facilement et de manière durable
            </p>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-20" data-testid="options-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="options-title">
              <span className="text-white">Modes de</span> 
              <span className="text-neon-blue text-glow">transport</span>
            </h2>
            <p className="text-xl text-gray-300">Choisissez la solution qui vous convient</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`option-${index}`}>
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-${option.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${option.icon} text-3xl text-${option.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${option.color}`}>{option.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-center">{option.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Avantages :</h4>
                  <ul className="space-y-2">
                    {option.advantages.map((advantage, advantageIndex) => (
                      <li key={advantageIndex} className="flex items-center">
                        <i className={`fas fa-check text-${option.color} mr-3`}></i>
                        <span className="text-gray-400 text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Détails pratiques :</h4>
                  <ul className="space-y-1">
                    {option.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <i className={`fas fa-info-circle text-${option.color} mr-2 mt-1 text-xs`}></i>
                        <span className="text-gray-400 text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Access Details */}
      <section className="py-20 bg-dark-800/50" data-testid="access-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="access-title">
              <span className="text-white">Accès détaillé</span> 
              <span className="text-neon-purple text-glow">par bureau</span>
            </h2>
            <p className="text-xl text-gray-300">Informations spécifiques pour chaque implantation</p>
          </div>
          
          <div className="space-y-8">
            {officeAccess.map((office, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`office-access-${index}`}>
                <h3 className="text-2xl font-bold text-neon-purple mb-4">{office.office}</h3>
                <div className="text-gray-400 text-sm mb-6">{office.address}</div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Public Transport */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <i className="fas fa-bus text-neon-blue mr-2"></i>
                      Transports Publics
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Bus :</h5>
                        <ul className="space-y-1">
                          {office.publicTransport.bus.map((bus, busIndex) => (
                            <li key={busIndex} className="text-gray-400 text-xs">• {bus}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {office.publicTransport.tram.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Tram :</h5>
                          <ul className="space-y-1">
                            {office.publicTransport.tram.map((tram, tramIndex) => (
                              <li key={tramIndex} className="text-gray-400 text-xs">• {tram}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Train :</h5>
                        <ul className="space-y-1">
                          {office.publicTransport.train.map((train, trainIndex) => (
                            <li key={trainIndex} className="text-gray-400 text-xs">• {train}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Car Access */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <i className="fas fa-car text-neon-green mr-2"></i>
                      Accès Voiture
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Autoroutes :</h5>
                        <ul className="space-y-1">
                          {office.carAccess.highways.map((highway, highwayIndex) => (
                            <li key={highwayIndex} className="text-gray-400 text-xs">• {highway}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-1">Parking :</h5>
                        <div className="text-gray-400 text-xs">{office.carAccess.parking}</div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-1">Recharge électrique :</h5>
                        <div className="text-gray-400 text-xs">{office.carAccess.electricCharging}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bike Access */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <i className="fas fa-bicycle text-neon-purple mr-2"></i>
                      Accès Vélo
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Pistes cyclables :</h5>
                        <ul className="space-y-1">
                          {office.bikeAccess.paths.map((path, pathIndex) => (
                            <li key={pathIndex} className="text-gray-400 text-xs">• {path}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-1">Stationnement :</h5>
                        <div className="text-gray-400 text-xs">{office.bikeAccess.parking}</div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-1">Services :</h5>
                        <div className="text-gray-400 text-xs">{office.bikeAccess.facilities}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20" data-testid="tips-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="tips-title">
              <span className="text-white">Conseils</span> 
              <span className="text-neon-green text-glow">pratiques</span>
            </h2>
            <p className="text-xl text-gray-300">Optimisez votre déplacement</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {travelTips.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`tip-category-${index}`}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${category.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${category.icon} text-2xl text-${category.color}`}></i>
                  </div>
                  <h3 className={`text-xl font-semibold text-${category.color}`}>{category.category}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <i className={`fas fa-check text-${category.color} mr-2 mt-1 text-xs`}></i>
                      <span className="text-gray-400 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Mobility */}
      <section className="py-20 bg-dark-800/50" data-testid="sustainability-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="sustainability-title">
              <span className="text-white">Mobilité</span> 
              <span className="text-neon-blue text-glow">durable</span>
            </h2>
            <p className="text-xl text-gray-300">Notre engagement pour un transport responsable</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sustainableMobility.map((initiative, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`sustainability-${index}`}>
                <h3 className="text-xl font-semibold text-neon-blue mb-4">{initiative.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{initiative.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Initiatives :</h4>
                  <ul className="space-y-2">
                    {initiative.initiatives.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-center justify-center">
                        <i className="fas fa-leaf text-neon-green mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Impact :</div>
                  <div className="text-neon-blue font-semibold">{initiative.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Transport */}
      <section className="py-20" data-testid="emergency-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="emergency-title">
              <span className="text-white">Solutions</span> 
              <span className="text-neon-purple text-glow">d'urgence</span>
            </h2>
            <p className="text-xl text-gray-300">En cas de difficultés de transport</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {emergencyTransport.map((emergency, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`emergency-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{emergency.situation}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Solutions :</h4>
                  <ul className="space-y-2">
                    {emergency.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center justify-center">
                        <i className="fas fa-hand-holding-heart text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Contact :</div>
                  <div className="text-neon-purple font-semibold text-sm">{emergency.contact}</div>
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
              <span className="text-white">Planifiez votre</span> 
              <span className="text-neon-green text-glow">visite</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Besoin d'aide pour organiser votre déplacement ? Notre équipe vous accompagne
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">3</div>
                <div className="text-gray-400 text-sm">Bureaux accessibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">43</div>
                <div className="text-gray-400 text-sm">Places parking gratuites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">7</div>
                <div className="text-gray-400 text-sm">Bornes recharge électrique</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-plan-journey">
                <i className="fas fa-route mr-2"></i>
                Planifier mon trajet
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-transport-info">
                <i className="fas fa-info-circle mr-2"></i>
                Infos transport temps réel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}