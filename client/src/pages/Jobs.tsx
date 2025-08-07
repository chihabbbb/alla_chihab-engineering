export default function Jobs() {
  const openPositions = [
    {
      id: 'ingenieur-hvac',
      title: 'Ingénieur HVAC Senior',
      department: 'Équipe Technique',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Senior',
      description: 'Conception et dimensionnement des systèmes de chauffage, ventilation et climatisation pour projets complexes.',
      requirements: [
        'Master en génie mécanique ou équivalent',
        '5+ années d\'expérience en HVAC',
        'Maîtrise des logiciels de calcul thermique',
        'Connaissance des normes européennes',
        'Français et anglais courants'
      ],
      benefits: ['Salaire compétitif', 'Formation continue', 'Projets innovants', 'Télétravail possible']
    },
    {
      id: 'chef-projet',
      title: 'Chef de Projet Technique',
      department: 'Gestion de Projet',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Confirmé',
      description: 'Pilotage de projets d\'ingénierie du bâtiment de la conception à la mise en service.',
      requirements: [
        'Formation ingénieur ou équivalent',
        '3+ années en gestion de projet',
        'Expérience en coordination d\'équipes',
        'Maîtrise des outils de planification',
        'Excellentes compétences relationnelles'
      ],
      benefits: ['Responsabilités variées', 'Équipe dynamique', 'Projets prestigieux', 'Évolution de carrière']
    },
    {
      id: 'ingenieur-energie',
      title: 'Ingénieur Énergies Renouvelables',
      department: 'Innovation',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Junior/Confirmé',
      description: 'Développement de solutions énergétiques durables et intégration d\'énergies renouvelables.',
      requirements: [
        'Master en énergies renouvelables',
        '2+ années d\'expérience',
        'Connaissance des technologies vertes',
        'Esprit d\'innovation',
        'Passion pour la durabilité'
      ],
      benefits: ['Projets d\'avenir', 'Technologies de pointe', 'Impact environnemental', 'Formation spécialisée']
    },
    {
      id: 'technicien-bim',
      title: 'Technicien BIM',
      department: 'Conception',
      location: 'Luxembourg',
      type: 'CDI',
      level: 'Confirmé',
      description: 'Modélisation 3D et coordination BIM pour les projets d\'ingénierie technique.',
      requirements: [
        'Formation en dessin technique/BIM',
        'Maîtrise Revit, AutoCAD',
        'Expérience en modélisation 3D',
        'Rigueur et précision',
        'Travail en équipe'
      ],
      benefits: ['Outils dernière génération', 'Projets variés', 'Formation BIM', 'Environnement collaboratif']
    }
  ];

  const internshipPrograms = [
    {
      title: 'Stage Ingénieur HVAC',
      duration: '3-6 mois',
      description: 'Participation à la conception de systèmes techniques sous supervision.',
      color: 'neon-blue'
    },
    {
      title: 'Stage Gestion de Projet',
      duration: '4-6 mois',
      description: 'Assistance au pilotage de projets et coordination d\'équipes.',
      color: 'neon-purple'
    },
    {
      title: 'Stage Énergies Renouvelables',
      duration: '3-4 mois',
      description: 'Recherche et développement de solutions énergétiques innovantes.',
      color: 'neon-green'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="jobs-title">
              <span className="text-neon-purple text-glow">CARRIÈRES</span>
              <span className="text-white"> & EMPLOIS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="jobs-subtitle">
              Rejoignez une équipe passionnée et contribuez à façonner l'avenir de l'ingénierie durable
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20" data-testid="company-culture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="culture-title">
              <span className="text-white">Pourquoi nous</span> 
              <span className="text-neon-blue text-glow">rejoindre ?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="culture-innovation">
              <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-lightbulb text-2xl text-neon-blue"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-blue mb-4">Innovation Constante</h3>
              <p className="text-gray-300">
                Travaillez sur des projets à la pointe de la technologie avec les derniers outils et méthodes.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="culture-growth">
              <div className="w-16 h-16 bg-neon-purple/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-rocket text-2xl text-neon-purple"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-purple mb-4">Évolution Professionnelle</h3>
              <p className="text-gray-300">
                Développez vos compétences avec nos programmes de formation continue et opportunités d'évolution.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="culture-impact">
              <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-leaf text-2xl text-neon-green"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-green mb-4">Impact Durable</h3>
              <p className="text-gray-300">
                Contribuez à des projets qui façonnent un avenir plus durable et respectueux de l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-dark-800/50" data-testid="open-positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="positions-title">
              <span className="text-white">Postes</span> 
              <span className="text-neon-green text-glow">ouverts</span>
            </h2>
            <p className="text-xl text-gray-300">Découvrez nos opportunités actuelles</p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="glass rounded-2xl p-8 hover-lift" data-testid={`position-${position.id}`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-neon-blue">{position.title}</h3>
                      <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                      <span className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-sm">
                        {position.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <i className="fas fa-building mr-2"></i>
                      {position.department}
                      <span className="mx-2">•</span>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {position.location}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-neon-green mb-3">Exigences :</h4>
                        <ul className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fas fa-check text-neon-green mr-2 mt-1 text-sm"></i>
                              <span className="text-gray-400 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-purple mb-3">Avantages :</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fas fa-star text-neon-purple mr-2 mt-1 text-sm"></i>
                              <span className="text-gray-400 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border mb-4" data-testid={`apply-${position.id}`}>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Postuler
                    </button>
                    <button className="glass px-6 py-3 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-300" data-testid={`details-${position.id}`}>
                      <i className="fas fa-info-circle mr-2"></i>
                      Plus de détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20" data-testid="internships-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="internships-title">
              <span className="text-white">Stages &</span> 
              <span className="text-neon-purple text-glow">formations</span>
            </h2>
            <p className="text-xl text-gray-300">Commencez votre carrière avec nous</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`internship-${index}`}>
                <div className={`w-12 h-12 bg-${program.color}/20 rounded-xl flex items-center justify-center mb-6`}>
                  <i className="fas fa-graduation-cap text-xl text-neon-blue"></i>
                </div>
                <h3 className={`text-xl font-semibold text-${program.color} mb-3`}>{program.title}</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <i className="fas fa-clock mr-2"></i>
                  Durée: {program.duration}
                </div>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <button className="w-full glass py-3 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-300" data-testid={`apply-internship-${index}`}>
                  <i className="fas fa-user-plus mr-2"></i>
                  Candidater
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="py-20 bg-dark-800/50" data-testid="spontaneous-application">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="spontaneous-title">
              <span className="text-white">Candidature</span> 
              <span className="text-neon-green text-glow">spontanée</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature spontanée !
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-spontaneous-application">
                <i className="fas fa-upload mr-2"></i>
                Envoyer mon CV
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-contact-hr">
                <i className="fas fa-comments mr-2"></i>
                Contacter RH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="benefits-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-blue text-glow">avantages</span>
            </h2>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="benefit-salary">
                <i className="fas fa-euro-sign text-3xl text-neon-blue mb-4"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Salaire Compétitif</h3>
                <p className="text-gray-400 text-sm">Rémunération attractive selon expérience</p>
              </div>
              
              <div className="text-center" data-testid="benefit-flexibility">
                <i className="fas fa-home text-3xl text-neon-purple mb-4"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Télétravail</h3>
                <p className="text-gray-400 text-sm">Flexibilité de travail hybride</p>
              </div>
              
              <div className="text-center" data-testid="benefit-training">
                <i className="fas fa-book text-3xl text-neon-green mb-4"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Formation Continue</h3>
                <p className="text-gray-400 text-sm">Développement professionnel constant</p>
              </div>
              
              <div className="text-center" data-testid="benefit-health">
                <i className="fas fa-heartbeat text-3xl text-neon-blue mb-4"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Assurance Santé</h3>
                <p className="text-gray-400 text-sm">Couverture santé complète</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
