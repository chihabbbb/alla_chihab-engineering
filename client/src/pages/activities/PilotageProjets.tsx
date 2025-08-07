export default function PilotageProjets() {
  const projectPhases = [
    {
      name: "Définition & Programmation",
      duration: "2-4 semaines",
      description: "Analyse des besoins, définition du programme et objectifs projet",
      deliverables: ["Cahier des charges", "Planning prévisionnel", "Budget estimatif", "Équipe projet"],
      icon: "fas fa-clipboard-list",
      color: "neon-blue"
    },
    {
      name: "Conception & Études",
      duration: "6-12 semaines",
      description: "Études techniques détaillées et conception des installations",
      deliverables: ["Plans techniques", "Notes de calcul", "Spécifications", "Dossier de consultation"],
      icon: "fas fa-drafting-compass",
      color: "neon-green"
    },
    {
      name: "Consultation & Marchés",
      duration: "4-6 semaines",
      description: "Consultation des entreprises et négociation des marchés",
      deliverables: ["Dossier DCE", "Analyse des offres", "Négociation", "Attribution marchés"],
      icon: "fas fa-handshake",
      color: "neon-purple"
    },
    {
      name: "Exécution & Suivi",
      duration: "12-52 semaines",
      description: "Coordination des travaux et suivi de la réalisation",
      deliverables: ["Planning d'exécution", "Coordination chantier", "Contrôle qualité", "Réception travaux"],
      icon: "fas fa-hard-hat",
      color: "neon-blue"
    },
    {
      name: "Mise en Service",
      duration: "2-4 semaines",
      description: "Tests, commissioning et formation des exploitants",
      deliverables: ["Tests de performance", "Réglages", "Formation", "Dossier d'exploitation"],
      icon: "fas fa-play-circle",
      color: "neon-green"
    }
  ];

  const managementTools = [
    {
      name: "Microsoft Project",
      description: "Planification et suivi détaillé des projets",
      features: ["Diagrammes de Gantt", "Allocation ressources", "Suivi avancement", "Rapports automatisés"],
      usage: "Planning et coordination",
      color: "neon-blue"
    },
    {
      name: "Primavera P6",
      description: "Gestion de projets complexes multi-disciplinaires",
      features: ["Projets multiples", "Ressources partagées", "Analyse des risques", "Scénarios"],
      usage: "Grands projets",
      color: "neon-purple"
    },
    {
      name: "BIM 360 Field",
      description: "Gestion sur site et collaboration mobile",
      features: ["Check-lists mobiles", "Photos géolocalisées", "Rapports temps réel", "Synchronisation cloud"],
      usage: "Suivi chantier",
      color: "neon-green"
    },
    {
      name: "Tableau de Bord Personnalisé",
      description: "Indicateurs clés de performance projet",
      features: ["KPIs temps réel", "Alertes automatiques", "Analyse prédictive", "Reporting client"],
      usage: "Pilotage stratégique",
      color: "neon-blue"
    }
  ];

  const projectTypes = [
    {
      name: "Projets Tertiaires",
      description: "Bureaux, commerces, hôtels",
      complexity: "Moyenne à élevée",
      team: "3-8 personnes",
      duration: "6-18 mois",
      examples: ["Tours de bureaux", "Centres commerciaux", "Hôtels"],
      challenges: ["Contraintes d'exploitation", "Performances énergétiques", "Coordination multi-lots"],
      color: "neon-blue"
    },
    {
      name: "Projets Industriels",
      description: "Usines, datacenters, entrepôts",
      complexity: "Élevée",
      team: "5-12 personnes",
      duration: "12-36 mois",
      examples: ["Datacenters", "Usines agroalimentaires", "Centres logistiques"],
      challenges: ["Process spécifiques", "Continuité production", "Normes sectorielles"],
      color: "neon-purple"
    },
    {
      name: "Projets Institutionnels",
      description: "Hôpitaux, écoles, administrations",
      complexity: "Très élevée",
      team: "4-10 personnes",
      duration: "18-48 mois",
      examples: ["Hôpitaux", "Universités", "Bâtiments publics"],
      challenges: ["Réglementations strictes", "Exploitation continue", "Financement public"],
      color: "neon-green"
    }
  ];

  const successMetrics = [
    {
      metric: "Respect des Délais",
      value: "95%",
      description: "Projets livrés dans les temps",
      icon: "fas fa-clock",
      color: "neon-blue"
    },
    {
      metric: "Maîtrise des Coûts",
      value: "98%",
      description: "Projets dans le budget",
      icon: "fas fa-euro-sign",
      color: "neon-green"
    },
    {
      metric: "Satisfaction Client",
      value: "97%",
      description: "Clients satisfaits ou très satisfaits",
      icon: "fas fa-star",
      color: "neon-purple"
    },
    {
      metric: "Performance Technique",
      value: "100%",
      description: "Objectifs de performance atteints",
      icon: "fas fa-chart-line",
      color: "neon-blue"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="pilotage-title">
              <span className="text-neon-purple text-glow">PILOTAGE</span>
              <span className="text-white"> DE PROJETS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="pilotage-subtitle">
              Gestion complète et coordination experte de vos projets d'ingénierie technique
            </p>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-20" data-testid="phases-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="phases-title">
              <span className="text-white">Phases</span> 
              <span className="text-neon-blue text-glow">projet</span>
            </h2>
            <p className="text-xl text-gray-300">Méthodologie éprouvée pour une gestion optimale</p>
          </div>
          
          <div className="space-y-8">
            {projectPhases.map((phase, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`phase-${index}`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-${phase.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                      <i className={`${phase.icon} text-2xl text-${phase.color}`}></i>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold text-${phase.color} mb-2`}>{phase.name}</h3>
                      <div className="flex items-center text-gray-400">
                        <i className="fas fa-clock mr-2"></i>
                        <span className="text-sm">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Livrables :</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center">
                          <i className={`fas fa-check text-${phase.color} mr-2 text-sm`}></i>
                          <span className="text-gray-400 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Tools */}
      <section className="py-20 bg-dark-800/50" data-testid="tools-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="tools-title">
              <span className="text-white">Outils de</span> 
              <span className="text-neon-green text-glow">gestion</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies avancées pour un pilotage efficace</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {managementTools.map((tool, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`tool-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold text-${tool.color}`}>{tool.name}</h3>
                  <div className="text-gray-400 text-sm">{tool.usage}</div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{tool.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <i className={`fas fa-check text-${tool.color} mr-2 text-sm`}></i>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20" data-testid="project-types-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="project-types-title">
              <span className="text-white">Types de</span> 
              <span className="text-neon-purple text-glow">projets</span>
            </h2>
            <p className="text-xl text-gray-300">Expertise adaptée à chaque secteur d'activité</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`project-type-${index}`}>
                <h3 className={`text-2xl font-bold text-${type.color} mb-4`}>{type.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Complexité</span>
                    <span className="text-white text-sm">{type.complexity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Équipe</span>
                    <span className={`text-${type.color} text-sm font-semibold`}>{type.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Durée</span>
                    <span className="text-white text-sm">{type.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Exemples :</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className={`bg-${type.color}/20 text-${type.color} px-2 py-1 rounded text-xs`}>
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Défis spécifiques :</h4>
                  <ul className="space-y-1">
                    {type.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <i className={`fas fa-exclamation-triangle text-${type.color} mr-2 mt-1 text-xs`}></i>
                        <span className="text-gray-400 text-xs">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-dark-800/50" data-testid="metrics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="metrics-title">
              <span className="text-white">Indicateurs de</span> 
              <span className="text-neon-blue text-glow">performance</span>
            </h2>
            <p className="text-xl text-gray-300">Résultats mesurables de notre expertise en pilotage</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {successMetrics.map((metric, index) => (
                <div key={index} data-testid={`metric-${index}`}>
                  <div className={`w-16 h-16 bg-${metric.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <i className={`${metric.icon} text-2xl text-${metric.color}`}></i>
                  </div>
                  <div className={`text-4xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
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
              <span className="text-white">Confiez-nous votre</span> 
              <span className="text-neon-purple text-glow">projet</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Expertise reconnue en pilotage de projets techniques complexes avec garantie de résultats
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-project-quote">
                <i className="fas fa-project-diagram mr-2"></i>
                Demander un pilotage
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-methodology">
                <i className="fas fa-book mr-2"></i>
                Notre méthodologie
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}