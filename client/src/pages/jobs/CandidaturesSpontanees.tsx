export default function CandidaturesSpontanees() {
  const applicationProcess = [
    {
      step: 1,
      title: "Envoi candidature",
      description: "CV + lettre de motivation personnalisée",
      duration: "Immédiat",
      icon: "fas fa-paper-plane",
      details: ["CV actualisé", "Lettre personnalisée", "Portfolio projets", "Recommandations"]
    },
    {
      step: 2,
      title: "Analyse profil",
      description: "Étude de votre candidature par nos RH",
      duration: "72h",
      icon: "fas fa-search",
      details: ["Compétences techniques", "Expérience pertinente", "Motivation", "Adéquation culturelle"]
    },
    {
      step: 3,
      title: "Premier contact",
      description: "Entretien téléphonique de présentation",
      duration: "30 min",
      icon: "fas fa-phone",
      details: ["Présentation mutuelle", "Objectifs carrière", "Disponibilités", "Questions ouvertes"]
    },
    {
      step: 4,
      title: "Intégration dans notre vivier",
      description: "Référencement pour opportunités futures",
      duration: "Permanent",
      icon: "fas fa-database",
      details: ["Base de données talents", "Alertes postes", "Veille compétences", "Suivi régulier"]
    }
  ];

  const profilesWanted = [
    {
      category: "Ingénieurs Techniques",
      profiles: [
        "Ingénieur HVAC/CVC",
        "Ingénieur énergétique", 
        "Ingénieur process industriels",
        "Ingénieur thermique"
      ],
      experience: "2-15 ans",
      skills: ["Calculs techniques", "Logiciels CAO", "Normes techniques", "Gestion projet"],
      icon: "fas fa-drafting-compass",
      color: "neon-blue"
    },
    {
      category: "Techniciens Spécialisés",
      profiles: [
        "Technicien maintenance",
        "Technicien commissioning",
        "Technicien automatismes",
        "Technicien mesures"
      ],
      experience: "3-10 ans",
      skills: ["Diagnostic technique", "Instrumentation", "Automates", "Sécurité"],
      icon: "fas fa-tools",
      color: "neon-green"
    },
    {
      category: "Chefs de Projet",
      profiles: [
        "Chef de projet technique",
        "Chef de projet travaux",
        "Coordinateur BIM",
        "Responsable commissioning"
      ],
      experience: "5-12 ans",
      skills: ["Management équipe", "Planning projet", "Relation client", "Coordination"],
      icon: "fas fa-project-diagram",
      color: "neon-purple"
    },
    {
      category: "Profils Support",
      profiles: [
        "Dessinateur CAO",
        "Technico-commercial",
        "Assistant projet",
        "Chargé d'affaires junior"
      ],
      experience: "1-8 ans",
      skills: ["Outils techniques", "Relation client", "Organisation", "Communication"],
      icon: "fas fa-user-tie",
      color: "neon-blue"
    }
  ];

  const companyAdvantages = [
    {
      category: "Développement Professionnel",
      advantages: [
        "Formation technique continue",
        "Certifications professionnelles", 
        "Participation conférences",
        "Évolution de carrière rapide"
      ],
      icon: "fas fa-graduation-cap",
      color: "neon-blue"
    },
    {
      category: "Projets Stimulants",
      advantages: [
        "Projets techniques innovants",
        "Technologies de pointe",
        "Clients prestigieux",
        "Défis techniques variés"
      ],
      icon: "fas fa-rocket",
      color: "neon-green"
    },
    {
      category: "Environnement de Travail",
      advantages: [
        "Équipe experte et bienveillante",
        "Matériel et logiciels performants",
        "Espaces de travail modernes",
        "Ambiance collaborative"
      ],
      icon: "fas fa-users",
      color: "neon-purple"
    },
    {
      category: "Équilibre Vie Pro/Perso",
      advantages: [
        "Télétravail hybride possible",
        "Horaires flexibles",
        "Congés supplémentaires",
        "Activités team building"
      ],
      icon: "fas fa-balance-scale",
      color: "neon-blue"
    }
  ];

  const applicationTips = [
    {
      title: "Personnalisez votre candidature",
      description: "Adaptez votre CV et lettre aux métiers de l'ingénierie technique",
      tips: ["Mettez en avant vos projets techniques", "Mentionnez les logiciels maîtrisés", "Précisez vos certifications", "Quantifiez vos réalisations"]
    },
    {
      title: "Montrez votre expertise",
      description: "Démontrez vos compétences techniques et votre passion",
      tips: ["Portfolio de projets réalisés", "Veille technologique", "Formations suivies", "Participation communautés techniques"]
    },
    {
      title: "Exprimez votre motivation",
      description: "Expliquez pourquoi vous souhaitez rejoindre notre équipe",
      tips: ["Connaissance de nos projets", "Adéquation avec nos valeurs", "Projection dans le poste", "Objectifs de carrière"]
    }
  ];

  const jobAlerts = [
    {
      name: "Alerte Ingénieur HVAC",
      description: "Postes ingénieur en chauffage, ventilation, climatisation",
      frequency: "Hebdomadaire",
      criteria: ["Niveau confirmé/senior", "Région Luxembourg", "CDI prioritaire"]
    },
    {
      name: "Alerte Chef de Projet",
      description: "Opportunités management de projets techniques",
      frequency: "Bi-mensuelle", 
      criteria: ["5+ ans expérience", "Gestion équipe", "Secteur technique"]
    },
    {
      name: "Alerte Profils Junior",
      description: "Postes pour jeunes diplômés et débutants",
      frequency: "Mensuelle",
      criteria: ["0-3 ans expérience", "Formation ingénieur", "Motivation"]
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="candidatures-spontanees-title">
              <span className="text-neon-green text-glow">CANDIDATURES</span>
              <span className="text-white"> SPONTANÉES</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="candidatures-spontanees-subtitle">
              Rejoignez notre équipe d'experts ! Nous recherchons en permanence des talents passionnés par l'ingénierie technique
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="process-title">
              <span className="text-white">Processus de</span> 
              <span className="text-neon-blue text-glow">candidature</span>
            </h2>
            <p className="text-xl text-gray-300">Comment nous traitons vos candidatures spontanées</p>
          </div>
          
          <div className="space-y-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`process-step-${index}`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mr-6">
                      <i className={`${step.icon} text-2xl text-neon-blue`}></i>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-neon-blue mb-2">{step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <div className="text-sm text-gray-400">{step.duration}</div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Détails :</h4>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <i className="fas fa-check text-neon-green mr-2 text-sm"></i>
                          <span className="text-gray-400 text-sm">{detail}</span>
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

      {/* Profiles Wanted */}
      <section className="py-20 bg-dark-800/50" data-testid="profiles-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="profiles-title">
              <span className="text-white">Profils</span> 
              <span className="text-neon-purple text-glow">recherchés</span>
            </h2>
            <p className="text-xl text-gray-300">Talents que nous recherchons en permanence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {profilesWanted.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`profile-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${category.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${category.icon} text-2xl text-${category.color}`}></i>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-${category.color}`}>{category.category}</h3>
                    <div className="text-sm text-gray-400">Expérience: {category.experience}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Postes types :</h4>
                  <ul className="space-y-1">
                    {category.profiles.map((profile, profileIndex) => (
                      <li key={profileIndex} className="flex items-center">
                        <i className={`fas fa-circle text-${category.color} mr-3 text-xs`}></i>
                        <span className="text-gray-400">{profile}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Compétences clés :</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`bg-${category.color}/20 text-${category.color} px-2 py-1 rounded text-sm`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className="py-20" data-testid="advantages-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="advantages-title">
              <span className="text-white">Pourquoi nous</span> 
              <span className="text-neon-green text-glow">rejoindre ?</span>
            </h2>
            <p className="text-xl text-gray-300">Les avantages de travailler chez Alla Chihab Engineering</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyAdvantages.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`advantage-${index}`}>
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-xl text-${category.color}`}></i>
                </div>
                
                <h3 className={`text-lg font-semibold text-${category.color} mb-4`}>{category.category}</h3>
                
                <ul className="space-y-2">
                  {category.advantages.map((advantage, advantageIndex) => (
                    <li key={advantageIndex} className="flex items-start">
                      <i className={`fas fa-check text-${category.color} mr-2 mt-1 text-xs`}></i>
                      <span className="text-gray-400 text-sm">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20 bg-dark-800/50" data-testid="tips-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="tips-title">
              <span className="text-white">Conseils pour</span> 
              <span className="text-neon-blue text-glow">candidater</span>
            </h2>
            <p className="text-xl text-gray-300">Optimisez vos chances de succès</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {applicationTips.map((tip, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`tip-${index}`}>
                <h3 className="text-xl font-semibold text-neon-blue mb-4">{tip.title}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{tip.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Points clés :</h4>
                  <ul className="space-y-2">
                    {tip.tips.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center justify-center">
                        <i className="fas fa-lightbulb text-neon-blue mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Alerts */}
      <section className="py-20" data-testid="alerts-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="alerts-title">
              <span className="text-white">Alertes</span> 
              <span className="text-neon-purple text-glow">emploi</span>
            </h2>
            <p className="text-xl text-gray-300">Restez informé des nouvelles opportunités</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {jobAlerts.map((alert, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`alert-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{alert.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{alert.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-1">Fréquence</div>
                  <div className="text-neon-purple font-semibold">{alert.frequency}</div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Critères :</h4>
                  <ul className="space-y-1">
                    {alert.criteria.map((criterion, criterionIndex) => (
                      <li key={criterionIndex} className="flex items-center justify-center">
                        <i className="fas fa-filter text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{criterion}</span>
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
              <span className="text-white">Prêt à nous</span> 
              <span className="text-neon-green text-glow">rejoindre ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Envoyez-nous votre candidature ! Nous sommes toujours à la recherche de nouveaux talents passionnés par l'ingénierie technique
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">48h</div>
                <div className="text-gray-400 text-sm">Délai de réponse moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">25+</div>
                <div className="text-gray-400 text-sm">Experts dans l'équipe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">95%</div>
                <div className="text-gray-400 text-sm">Satisfaction collaborateurs</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-send-application">
                <i className="fas fa-paper-plane mr-2"></i>
                Envoyer ma candidature
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-job-alerts">
                <i className="fas fa-bell mr-2"></i>
                M'abonner aux alertes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}