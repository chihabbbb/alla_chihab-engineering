export default function PostesOuverts() {
  const openPositions = [
    {
      id: 'senior-hvac-engineer',
      title: 'Ingénieur HVAC Senior',
      department: 'Équipe Technique',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Senior (5+ ans)',
      salary: '65,000 - 85,000 €',
      description: 'Nous recherchons un ingénieur HVAC expérimenté pour rejoindre notre équipe technique et prendre en charge la conception de systèmes complexes.',
      missions: [
        'Conception et dimensionnement des installations HVAC',
        'Calculs thermiques et simulations énergétiques',
        'Coordination avec les équipes de projet',
        'Support technique et expertise client',
        'Veille technologique et innovation'
      ],
      requirements: [
        'Master en génie mécanique ou équivalent',
        '5+ années d\'expérience en ingénierie HVAC',
        'Maîtrise des logiciels de calcul (HAP, IES)',
        'Connaissance des normes EN et réglementations',
        'Français et anglais courants'
      ],
      benefits: [
        'Salaire compétitif avec prime annuelle',
        'Formation continue et certifications',
        'Projets innovants et stimulants',
        'Télétravail hybride (2j/semaine)',
        'Assurance santé premium'
      ],
      skills: ['HVAC', 'Thermique', 'Simulation', 'Calculs', 'Normes EN'],
      color: 'neon-blue'
    },
    {
      id: 'project-manager',
      title: 'Chef de Projet Technique',
      department: 'Gestion de Projet',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Confirmé (3+ ans)',
      salary: '55,000 - 70,000 €',
      description: 'Pilotage de projets d\'ingénierie du bâtiment de la conception à la mise en service avec coordination des équipes multidisciplinaires.',
      missions: [
        'Pilotage de projets techniques complexes',
        'Coordination des équipes et intervenants',
        'Suivi planning, budget et qualité',
        'Interface client et reporting',
        'Gestion des risques projet'
      ],
      requirements: [
        'Formation ingénieur ou équivalent',
        '3+ années en gestion de projet technique',
        'Expérience coordination multi-métiers',
        'Maîtrise MS Project ou équivalent',
        'Excellentes compétences relationnelles'
      ],
      benefits: [
        'Responsabilités variées et évolutives',
        'Équipe dynamique et collaborative',
        'Projets prestigieux et innovants',
        'Plan de carrière personnalisé',
        'Formation management et leadership'
      ],
      skills: ['Gestion projet', 'Coordination', 'Planning', 'Budget', 'Relation client'],
      color: 'neon-green'
    },
    {
      id: 'energy-engineer',
      title: 'Ingénieur Énergies Renouvelables',
      department: 'Innovation & Développement',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Junior/Confirmé (2+ ans)',
      salary: '45,000 - 65,000 €',
      description: 'Développement de solutions énergétiques durables et accompagnement des clients dans leur transition énergétique.',
      missions: [
        'Conception systèmes énergies renouvelables',
        'Études de faisabilité et optimisation',
        'Audits énergétiques et recommandations',
        'Veille technologique et innovation',
        'Support technique commercial'
      ],
      requirements: [
        'Master en énergies renouvelables/efficacité énergétique',
        '2+ années d\'expérience dans le domaine',
        'Connaissance technologies solaire, géothermie',
        'Esprit d\'innovation et créativité',
        'Passion pour la durabilité'
      ],
      benefits: [
        'Projets d\'avenir et impact environnemental',
        'Technologies de pointe et innovation',
        'Formation spécialisée continue',
        'Participation projets R&D',
        'Reconnaissance expertise'
      ],
      skills: ['Énergies renouvelables', 'Audit énergétique', 'Solaire', 'Géothermie', 'Innovation'],
      color: 'neon-purple'
    },
    {
      id: 'bim-specialist',
      title: 'Spécialiste BIM & Modélisation 3D',
      department: 'Conception & Innovation',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Confirmé (3+ ans)',
      salary: '50,000 - 65,000 €',
      description: 'Modélisation 3D et coordination BIM pour les projets d\'ingénierie technique avec les dernières technologies.',
      missions: [
        'Modélisation 3D des installations techniques',
        'Coordination BIM et détection de conflits',
        'Développement de standards et workflows',
        'Formation des équipes aux outils BIM',
        'Veille technologique et optimisation'
      ],
      requirements: [
        'Formation en dessin technique ou BIM',
        'Maîtrise avancée Revit MEP, AutoCAD 3D',
        '3+ années expérience modélisation 3D',
        'Connaissance coordination multidisciplinaire',
        'Rigueur et sens du détail'
      ],
      benefits: [
        'Outils et technologies dernière génération',
        'Projets techniques variés et stimulants',
        'Formation continue BIM et innovations',
        'Environnement collaboratif et moderne',
        'Reconnaissance expertise technique'
      ],
      skills: ['BIM', 'Revit', 'AutoCAD', 'Modélisation 3D', 'Coordination'],
      color: 'neon-blue'
    },
    {
      id: 'junior-engineer',
      title: 'Ingénieur Junior - Équipements Techniques',
      department: 'Équipe Technique',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Junior (0-2 ans)',
      salary: '40,000 - 50,000 €',
      description: 'Première expérience en bureau d\'études avec accompagnement personnalisé pour développer votre expertise technique.',
      missions: [
        'Participation aux études et calculs techniques',
        'Assistance conception sous supervision',
        'Réalisation de plans et schémas',
        'Suivi de chantier et mise en service',
        'Formation continue et montée en compétences'
      ],
      requirements: [
        'Master ingénieur génie mécanique/thermique',
        'Stage ou première expérience appréciée',
        'Bases en thermique et mécanique des fluides',
        'Motivation et volonté d\'apprendre',
        'Esprit d\'équipe et curiosité technique'
      ],
      benefits: [
        'Accompagnement et mentoring',
        'Formation technique approfondie',
        'Évolution rapide et responsabilités',
        'Projets diversifiés et formateurs',
        'Intégration équipe expérimentée'
      ],
      skills: ['Thermique', 'Mécanique fluides', 'Bases HVAC', 'Motivation', 'Apprentissage'],
      color: 'neon-green'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Candidature en ligne',
      description: 'Envoi CV + lettre de motivation',
      duration: '24h response',
      icon: 'fas fa-paper-plane'
    },
    {
      step: 2,
      title: 'Entretien RH',
      description: 'Présentation mutuelle et échange',
      duration: '45 minutes',
      icon: 'fas fa-comments'
    },
    {
      step: 3,
      title: 'Entretien technique',
      description: 'Évaluation compétences avec équipe',
      duration: '1h30',
      icon: 'fas fa-cogs'
    },
    {
      step: 4,
      title: 'Proposition & intégration',
      description: 'Offre détaillée et onboarding',
      duration: '1 semaine',
      icon: 'fas fa-handshake'
    }
  ];

  const companyBenefits = [
    {
      category: 'Développement professionnel',
      benefits: [
        'Plan de formation personnalisé',
        'Certifications professionnelles',
        'Conférences et séminaires',
        'Veille technologique'
      ],
      icon: 'fas fa-graduation-cap',
      color: 'neon-blue'
    },
    {
      category: 'Équilibre vie professionnelle',
      benefits: [
        'Télétravail hybride flexible',
        'Horaires adaptables',
        'Congés supplémentaires',
        'Espaces de détente'
      ],
      icon: 'fas fa-balance-scale',
      color: 'neon-green'
    },
    {
      category: 'Avantages sociaux',
      benefits: [
        'Assurance santé premium',
        'Tickets restaurant',
        'Transport public pris en charge',
        'Activités team building'
      ],
      icon: 'fas fa-heart',
      color: 'neon-purple'
    },
    {
      category: 'Innovation & projets',
      benefits: [
        'Projets techniques de pointe',
        'Participation innovation',
        'Clients prestigieux',
        'Technologies avancées'
      ],
      icon: 'fas fa-rocket',
      color: 'neon-blue'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="postes-ouverts-title">
              <span className="text-neon-blue text-glow">POSTES</span>
              <span className="text-white"> OUVERTS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="postes-ouverts-subtitle">
              Rejoignez notre équipe d'experts et participez à des projets techniques innovants
            </p>
            <div className="mt-8">
              <span className="bg-neon-blue/20 text-neon-blue px-4 py-2 rounded-full font-semibold">
                {openPositions.length} postes disponibles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20" data-testid="positions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={position.id} className="glass rounded-2xl p-8 hover-lift" data-testid={`position-${index}`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <h3 className={`text-2xl font-bold text-${position.color}`}>{position.title}</h3>
                      <span className={`bg-${position.color}/20 text-${position.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                        {position.type}
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {position.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <i className="fas fa-building mr-2"></i>
                      {position.department}
                      <span className="mx-2">•</span>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {position.location}
                      <span className="mx-2">•</span>
                      <i className="fas fa-euro-sign mr-2"></i>
                      {position.salary}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Missions principales :</h4>
                        <ul className="space-y-1">
                          {position.missions.slice(0, 3).map((mission, missionIndex) => (
                            <li key={missionIndex} className="flex items-start">
                              <i className={`fas fa-check text-${position.color} mr-2 mt-1 text-sm`}></i>
                              <span className="text-gray-400 text-sm">{mission}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Profil recherché :</h4>
                        <ul className="space-y-1">
                          {position.requirements.slice(0, 3).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <i className="fas fa-star text-neon-purple mr-2 mt-1 text-sm"></i>
                              <span className="text-gray-400 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Compétences clés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={`bg-${position.color}/20 text-${position.color} px-2 py-1 rounded text-sm`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Avantages :</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <i className="fas fa-gift text-neon-green mr-2 mt-1 text-sm"></i>
                            <span className="text-gray-400 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <button className={`w-full glass-blue px-6 py-4 rounded-xl font-semibold text-white hover:bg-${position.color}/20 transition-all duration-300 neon-border`} data-testid={`apply-${position.id}`}>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Postuler maintenant
                      </button>
                      <button className="w-full glass px-6 py-3 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-300" data-testid={`details-${position.id}`}>
                        <i className="fas fa-info-circle mr-2"></i>
                        Voir le détail complet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-dark-800/50" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="process-title">
              <span className="text-white">Processus de</span> 
              <span className="text-neon-green text-glow">recrutement</span>
            </h2>
            <p className="text-xl text-gray-300">Un processus transparent et efficace</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`process-step-${index}`}>
                <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${step.icon} text-2xl text-neon-blue`}></i>
                </div>
                
                <div className="text-3xl font-bold text-neon-blue mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                <div className="text-neon-green text-xs font-semibold">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-20" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="benefits-title">
              <span className="text-white">Pourquoi nous</span> 
              <span className="text-neon-purple text-glow">rejoindre ?</span>
            </h2>
            <p className="text-xl text-gray-300">Avantages et environnement de travail</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`benefit-category-${index}`}>
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-xl text-${category.color}`}></i>
                </div>
                
                <h3 className={`text-lg font-semibold text-${category.color} mb-4`}>{category.category}</h3>
                
                <ul className="space-y-2">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <i className={`fas fa-check text-${category.color} mr-2 mt-1 text-xs`}></i>
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800/50" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="cta-title">
              <span className="text-white">Prêt à nous</span> 
              <span className="text-neon-blue text-glow">rejoindre ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Développez votre carrière dans un environnement technique stimulant avec des projets innovants
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-apply-now">
                <i className="fas fa-paper-plane mr-2"></i>
                Postuler maintenant
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-job-alerts">
                <i className="fas fa-bell mr-2"></i>
                Alertes emploi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}