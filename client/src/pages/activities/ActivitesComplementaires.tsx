export default function ActivitesComplementaires() {
  const complementaryServices = [
    {
      name: "Études de Faisabilité",
      description: "Analyse préliminaire et évaluation de la viabilité technique et économique",
      scope: ["Analyse de site", "Contraintes techniques", "Coûts estimatifs", "Planning prévisionnel"],
      duration: "2-4 semaines",
      deliverable: "Rapport de faisabilité",
      icon: "fas fa-search",
      color: "neon-blue"
    },
    {
      name: "Assistance Technique",
      description: "Support d'expertise pour validation et optimisation de solutions",
      scope: ["Revue technique", "Validation calculs", "Optimisation", "Recommandations"],
      duration: "1-3 semaines",
      deliverable: "Note technique",
      icon: "fas fa-tools",
      color: "neon-green"
    },
    {
      name: "Formation & Conseil",
      description: "Transfert de compétences et accompagnement technique",
      scope: ["Formation équipes", "Procédures", "Bonnes pratiques", "Veille technologique"],
      duration: "Variable",
      deliverable: "Support formation",
      icon: "fas fa-chalkboard-teacher",
      color: "neon-purple"
    },
    {
      name: "Maintenance Préventive",
      description: "Planification et optimisation de la maintenance des installations",
      scope: ["Plan de maintenance", "Procédures", "Formation exploitants", "Suivi performance"],
      duration: "Continue",
      deliverable: "Plan de maintenance",
      icon: "fas fa-cogs",
      color: "neon-blue"
    },
    {
      name: "Support Technique",
      description: "Assistance technique continue et résolution de problèmes",
      scope: ["Hotline technique", "Dépannage", "Diagnostics", "Solutions correctives"],
      duration: "Continue",
      deliverable: "Support 24/7",
      icon: "fas fa-headset",
      color: "neon-green"
    },
    {
      name: "Commissioning",
      description: "Mise en service et validation des performances des installations",
      scope: ["Tests fonctionnels", "Réglages fins", "Validation performances", "Formation"],
      duration: "2-6 semaines",
      deliverable: "Procès-verbal",
      icon: "fas fa-play-circle",
      color: "neon-purple"
    }
  ];

  const trainingPrograms = [
    {
      name: "Formation HVAC Avancée",
      target: "Ingénieurs et techniciens",
      duration: "3 jours",
      content: ["Technologies modernes", "Calculs avancés", "Optimisation", "Cas pratiques"],
      certification: "Certificat ACE",
      color: "neon-blue"
    },
    {
      name: "Gestion Énergétique",
      target: "Facility managers",
      duration: "2 jours",
      content: ["Audit énergétique", "Optimisation", "Monitoring", "ROI"],
      certification: "Certificat spécialisé",
      color: "neon-green"
    },
    {
      name: "BIM pour l'Ingénierie",
      target: "Équipes techniques",
      duration: "5 jours",
      content: ["Modélisation 3D", "Coordination", "Clash detection", "Workflows"],
      certification: "Autodesk Partner",
      color: "neon-purple"
    },
    {
      name: "Réglementation Énergétique",
      target: "Bureaux d'études",
      duration: "1 jour",
      content: ["Normes EN", "Réglementation", "Conformité", "Évolutions"],
      certification: "Attestation",
      color: "neon-blue"
    }
  ];

  const consultingAreas = [
    {
      name: "Stratégie Énergétique",
      description: "Définition de stratégies long terme pour l'optimisation énergétique",
      benefits: ["Réduction coûts", "Conformité réglementaire", "Image environnementale"],
      icon: "fas fa-lightbulb",
      color: "neon-blue"
    },
    {
      name: "Due Diligence Technique",
      description: "Audit technique complet pour acquisitions ou refinancements",
      benefits: ["Évaluation risques", "Valorisation actifs", "Plan d'investissement"],
      icon: "fas fa-search-dollar",
      color: "neon-green"
    },
    {
      name: "Innovation & R&D",
      description: "Accompagnement dans l'innovation et le développement de solutions",
      benefits: ["Avantage concurrentiel", "Économies futures", "Technologies de pointe"],
      icon: "fas fa-rocket",
      color: "neon-purple"
    },
    {
      name: "Expertise Judiciaire",
      description: "Support d'expertise pour contentieux techniques et assurances",
      benefits: ["Expertise reconnue", "Rapports détaillés", "Médiation technique"],
      icon: "fas fa-gavel",
      color: "neon-blue"
    }
  ];

  const partnerships = [
    {
      name: "Fabricants d'Équipements",
      description: "Partenariats avec les leaders technologiques",
      partners: ["Carrier", "Daikin", "Siemens", "Schneider Electric"],
      benefits: ["Technologies de pointe", "Support technique", "Formation"],
      icon: "fas fa-industry",
      color: "neon-blue"
    },
    {
      name: "Laboratoires de Recherche",
      description: "Collaboration avec centres de recherche",
      partners: ["Université du Luxembourg", "LIST", "CRP Henri Tudor", "CSTB"],
      benefits: ["Innovation", "Veille technologique", "Projets R&D"],
      icon: "fas fa-flask",
      color: "neon-green"
    },
    {
      name: "Organismes de Certification",
      description: "Accréditations et certifications officielles",
      partners: ["BREEAM", "Passivhaus Institut", "DGNB", "LEED"],
      benefits: ["Certifications", "Formations", "Veille réglementaire"],
      icon: "fas fa-certificate",
      color: "neon-purple"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="activites-complementaires-title">
              <span className="text-neon-green text-glow">ACTIVITÉS</span>
              <span className="text-white"> COMPLÉMENTAIRES</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="activites-complementaires-subtitle">
              Services spécialisés et expertise technique pour accompagner tous vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-20" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="services-title">
              <span className="text-white">Services</span> 
              <span className="text-neon-blue text-glow">spécialisés</span>
            </h2>
            <p className="text-xl text-gray-300">Expertise technique sur mesure pour vos besoins spécifiques</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complementaryServices.map((service, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`service-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${service.color}/20 rounded-xl flex items-center justify-center`}>
                    <i className={`${service.icon} text-xl text-${service.color}`}></i>
                  </div>
                  <span className="text-gray-400 text-xs">{service.duration}</span>
                </div>
                
                <h3 className={`text-lg font-semibold text-${service.color} mb-3`}>{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Périmètre :</h4>
                  <ul className="space-y-1">
                    {service.scope.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <i className={`fas fa-check text-${service.color} mr-2 text-xs`}></i>
                        <span className="text-gray-400 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Livrable:</span>
                  <span className={`text-${service.color} font-semibold`}>{service.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-dark-800/50" data-testid="training-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="training-title">
              <span className="text-white">Formation &</span> 
              <span className="text-neon-purple text-glow">développement</span>
            </h2>
            <p className="text-xl text-gray-300">Programmes de formation technique adaptés à vos équipes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`training-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold text-${program.color}`}>{program.name}</h3>
                  <span className={`bg-${program.color}/20 text-${program.color} px-2 py-1 rounded text-xs`}>
                    {program.duration}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <i className="fas fa-users mr-2"></i>
                  <span>{program.target}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Programme :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <i className={`fas fa-check text-${program.color} mr-2 text-xs`}></i>
                        <span className="text-gray-400 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Certification:</span>
                  <span className={`text-${program.color} text-sm font-semibold`}>{program.certification}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20" data-testid="consulting-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="consulting-title">
              <span className="text-white">Conseil</span> 
              <span className="text-neon-green text-glow">stratégique</span>
            </h2>
            <p className="text-xl text-gray-300">Accompagnement stratégique et expertise de haut niveau</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`consulting-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${area.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${area.icon} text-2xl text-${area.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${area.color}`}>{area.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Bénéfices :</h4>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <i className={`fas fa-check text-${area.color} mr-3`}></i>
                        <span className="text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-dark-800/50" data-testid="partnerships-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="partnerships-title">
              <span className="text-white">Partenariats</span> 
              <span className="text-neon-blue text-glow">stratégiques</span>
            </h2>
            <p className="text-xl text-gray-300">Réseau de partenaires pour une expertise étendue</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`partnership-${index}`}>
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-${partnership.color}/20 rounded-2xl flex items-center justify-center`}>
                    <i className={`${partnership.icon} text-2xl text-${partnership.color}`}></i>
                  </div>
                </div>
                
                <h3 className={`text-xl font-semibold text-${partnership.color} text-center mb-4`}>{partnership.name}</h3>
                <p className="text-gray-300 text-sm text-center mb-6">{partnership.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 text-center">Partenaires :</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {partnership.partners.map((partner, partnerIndex) => (
                      <span key={partnerIndex} className={`bg-${partnership.color}/20 text-${partnership.color} px-2 py-1 rounded text-xs`}>
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 text-center">Avantages :</h4>
                  <ul className="space-y-1">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center">
                        <i className={`fas fa-check text-${partnership.color} mr-2 text-xs`}></i>
                        <span className="text-gray-400 text-xs">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
              <span className="text-white">Services</span> 
              <span className="text-neon-green text-glow">sur mesure</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Besoin d'une expertise spécifique ? Nos services complémentaires s'adaptent à vos besoins uniques
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-custom-service">
                <i className="fas fa-handshake mr-2"></i>
                Service sur mesure
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-training-catalog">
                <i className="fas fa-book mr-2"></i>
                Catalogue formations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}