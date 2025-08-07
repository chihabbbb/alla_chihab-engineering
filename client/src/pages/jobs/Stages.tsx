export default function Stages() {
  const internshipPrograms = [
    {
      name: "Stage Ingénieur - Bureau d'Études",
      duration: "3-6 mois",
      level: "Master 1/2 Ingénieur",
      department: "Conception technique",
      description: "Participation aux études techniques et conception de systèmes HVAC dans un environnement professionnel stimulant",
      missions: [
        "Calculs techniques et dimensionnement",
        "Utilisation logiciels CAO/calcul",
        "Participation réunions projet",
        "Rédaction notes techniques"
      ],
      skills: ["Thermique", "Mécanique fluides", "AutoCAD", "Excel"],
      supervisionLevel: "Encadrement senior",
      color: "neon-blue"
    },
    {
      name: "Stage Technicien - Commissioning",
      duration: "2-4 mois",
      level: "BTS/DUT Technique",
      department: "Mise en service",
      description: "Accompagnement des équipes terrain pour la mise en service et validation des installations techniques",
      missions: [
        "Tests et mesures sur site",
        "Réglages et optimisation",
        "Rédaction rapports d'essais",
        "Formation aux outils métier"
      ],
      skills: ["Mesures techniques", "Instrumentation", "Rigueur", "Mobilité"],
      supervisionLevel: "Encadrement chef d'équipe",
      color: "neon-green"
    },
    {
      name: "Stage Chef de Projet Junior",
      duration: "4-6 mois",
      level: "Master 2 / École Ingénieur",
      department: "Gestion de projet",
      description: "Initiation au management de projets techniques avec participation active à toutes les phases",
      missions: [
        "Suivi planning et budget",
        "Coordination avec entreprises",
        "Interface avec clients",
        "Reporting et communication"
      ],
      skills: ["Gestion projet", "Communication", "MS Project", "Relationnel"],
      supervisionLevel: "Encadrement chef de projet",
      color: "neon-purple"
    },
    {
      name: "Stage R&D - Innovation Énergétique",
      duration: "4-6 mois",
      level: "Master 2 / École Ingénieur",
      department: "Innovation & Développement",
      description: "Recherche appliquée sur les nouvelles technologies énergétiques et solutions durables",
      missions: [
        "Veille technologique avancée",
        "Tests et expérimentations",
        "Modélisation énergétique",
        "Rédaction études prospectives"
      ],
      skills: ["Recherche", "Innovation", "Analyse", "Rédaction"],
      supervisionLevel: "Encadrement directeur technique",
      color: "neon-blue"
    }
  ];

  const internshipBenefits = [
    {
      category: "Formation Professionnelle",
      benefits: [
        "Formation aux outils métier",
        "Participation formations techniques",
        "Mentoring par experts seniors",
        "Découverte métiers ingénierie"
      ],
      icon: "fas fa-graduation-cap",
      color: "neon-blue"
    },
    {
      category: "Expérience Pratique",
      benefits: [
        "Projets réels clients",
        "Responsabilités progressives",
        "Travail en équipe projet",
        "Contact terrain"
      ],
      icon: "fas fa-briefcase",
      color: "neon-green"
    },
    {
      category: "Développement Personnel",
      benefits: [
        "Autonomie et prise d'initiative",
        "Développement relationnel",
        "Présentation travaux",
        "Réseau professionnel"
      ],
      icon: "fas fa-user-graduate",
      color: "neon-purple"
    },
    {
      category: "Conditions Attractives",
      benefits: [
        "Gratification competitive",
        "Tickets restaurant",
        "Équipement informatique",
        "Possibilité embauche"
      ],
      icon: "fas fa-star",
      color: "neon-blue"
    }
  ];

  const applicationRequirements = [
    {
      name: "Cursus Technique",
      description: "Formation en ingénierie, thermique, mécanique ou énergétique",
      requirements: ["École d'ingénieur", "Master technique", "BTS/DUT spécialisé", "Formation équivalente"],
      icon: "fas fa-university",
      color: "neon-blue"
    },
    {
      name: "Compétences Techniques",
      description: "Bases solides en thermique, mécanique des fluides ou gestion de projet",
      requirements: ["Connaissances thermique", "Logiciels techniques", "Analyse technique", "Méthodes projet"],
      icon: "fas fa-cogs",
      color: "neon-green"
    },
    {
      name: "Qualités Personnelles",
      description: "Motivation, curiosité et capacité d'adaptation indispensables",
      requirements: ["Motivation forte", "Esprit d'équipe", "Curiosité technique", "Adaptabilité"],
      icon: "fas fa-heart",
      color: "neon-purple"
    },
    {
      name: "Disponibilités",
      description: "Périodes de stage compatibles avec nos besoins projets",
      requirements: ["Minimum 8 semaines", "Flexibilité dates", "Possible prolongation", "Convention obligatoire"],
      icon: "fas fa-calendar",
      color: "neon-blue"
    }
  ];

  const stagePlanning = [
    {
      period: "Accueil & Intégration",
      duration: "Semaine 1",
      activities: ["Présentation équipe et projets", "Formation sécurité", "Prise en main outils", "Définition objectifs"],
      icon: "fas fa-handshake"
    },
    {
      period: "Formation & Découverte",
      duration: "Semaines 2-3",
      activities: ["Formation techniques métier", "Observation phases projet", "Première missions simples", "Accompagnement terrain"],
      icon: "fas fa-book"
    },
    {
      period: "Participation Active",
      duration: "Semaines 4-8",
      activities: ["Missions projet en autonomie", "Participation réunions client", "Réalisation livrables", "Encadrement continu"],
      icon: "fas fa-rocket"
    },
    {
      period: "Montée en Responsabilité",
      duration: "Semaines 9+",
      activities: ["Responsabilité tâches complètes", "Interface clients/fournisseurs", "Formation nouveaux stagiaires", "Évaluation performance"],
      icon: "fas fa-star"
    }
  ];

  const successStories = [
    {
      name: "Marie L.",
      role: "Ancienne stagiaire, maintenant Ingénieure",
      story: "Mon stage de 6 mois en bureau d'études m'a permis de découvrir la richesse des métiers techniques. L'équipe m'a fait confiance rapidement et j'ai pu participer à des projets stimulants.",
      evolution: "Stage → CDI → Responsable d'études",
      year: "2022-2024"
    },
    {
      name: "Thomas K.",
      role: "Ancien stagiaire, maintenant Chef de projet",
      story: "Excellent stage en gestion de projet qui m'a donné une vision complète du métier. L'encadrement bienveillant et les défis proposés m'ont motivé à poursuivre dans cette voie.",
      evolution: "Stage → Assistant projet → Chef de projet",
      year: "2021-2024"
    },
    {
      name: "Sarah B.",
      role: "Ancienne stagiaire, maintenant en Thèse CIFRE",
      story: "Mon stage R&D a débouché sur une thèse CIFRE en partenariat avec l'université. Une belle opportunité de concilier recherche appliquée et innovation industrielle.",
      evolution: "Stage → Thèse CIFRE → Expert R&D",
      year: "2023-En cours"
    }
  ];

  const partnerSchools = [
    {
      name: "Université du Luxembourg",
      programs: ["Master Ingénierie", "Master Énergétique"],
      partnership: "Convention partenariat"
    },
    {
      name: "ENSEM Nancy",
      programs: ["École Nationale d'Électricité"],
      partnership: "Accueil régulier stagiaires"
    },
    {
      name: "INSA Lyon",
      programs: ["Génie Énergétique", "Génie Civil"],
      partnership: "Projets étudiants"
    },
    {
      name: "Mines ParisTech",
      programs: ["Énergétique", "Machines et Énergie"],
      partnership: "Stages recherche"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="stages-title">
              <span className="text-neon-purple text-glow">STAGES</span>
              <span className="text-white"> & APPRENTISSAGE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="stages-subtitle">
              Découvrez les métiers de l'ingénierie technique dans un environnement professionnel stimulant
            </p>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20" data-testid="programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="programs-title">
              <span className="text-white">Programmes de</span> 
              <span className="text-neon-blue text-glow">stages</span>
            </h2>
            <p className="text-xl text-gray-300">Nos offres adaptées à votre niveau d'études</p>
          </div>
          
          <div className="space-y-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`program-${index}`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className={`bg-${program.color}/20 text-${program.color} px-3 py-1 rounded-full text-sm font-semibold mr-4`}>
                        {program.duration}
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {program.level}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold text-${program.color} mb-2`}>{program.name}</h3>
                    <div className="text-gray-400 text-sm mb-4">{program.department}</div>
                    <p className="text-gray-300 leading-relaxed">{program.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Missions :</h4>
                    <ul className="space-y-2 mb-6">
                      {program.missions.map((mission, missionIndex) => (
                        <li key={missionIndex} className="flex items-start">
                          <i className={`fas fa-check text-${program.color} mr-2 mt-1 text-sm`}></i>
                          <span className="text-gray-400 text-sm">{mission}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-gray-400 text-sm">
                      <strong>Encadrement:</strong> {program.supervisionLevel}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Compétences développées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={`bg-${program.color}/20 text-${program.color} px-2 py-1 rounded text-sm`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Planning */}
      <section className="py-20 bg-dark-800/50" data-testid="planning-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="planning-title">
              <span className="text-white">Déroulement du</span> 
              <span className="text-neon-green text-glow">stage</span>
            </h2>
            <p className="text-xl text-gray-300">Votre parcours d'intégration et de montée en compétences</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stagePlanning.map((phase, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`phase-${index}`}>
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${phase.icon} text-2xl text-neon-green`}></i>
                </div>
                
                <h3 className="text-lg font-semibold text-neon-green mb-2">{phase.period}</h3>
                <div className="text-sm text-gray-400 mb-4">{phase.duration}</div>
                
                <ul className="space-y-1">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-gray-400 text-xs">• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20" data-testid="requirements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="requirements-title">
              <span className="text-white">Profil</span> 
              <span className="text-neon-purple text-glow">recherché</span>
            </h2>
            <p className="text-xl text-gray-300">Ce que nous attendons de nos stagiaires</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applicationRequirements.map((requirement, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`requirement-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${requirement.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${requirement.icon} text-2xl text-${requirement.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${requirement.color}`}>{requirement.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{requirement.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Critères :</h4>
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

      {/* Benefits */}
      <section className="py-20 bg-dark-800/50" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="benefits-title">
              <span className="text-white">Avantages du</span> 
              <span className="text-neon-blue text-glow">stage</span>
            </h2>
            <p className="text-xl text-gray-300">Ce que nous vous apportons</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipBenefits.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`benefit-${index}`}>
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

      {/* Success Stories */}
      <section className="py-20" data-testid="stories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="stories-title">
              <span className="text-white">Témoignages</span> 
              <span className="text-neon-green text-glow">stagiaires</span>
            </h2>
            <p className="text-xl text-gray-300">Parcours de nos anciens stagiaires</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`story-${index}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-neon-green mb-2">{story.name}</h3>
                  <div className="text-sm text-gray-400">{story.role}</div>
                  <div className="text-xs text-gray-500">{story.year}</div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed italic">"{story.story}"</p>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Évolution :</div>
                  <div className="text-neon-green text-sm font-semibold">{story.evolution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-20 bg-dark-800/50" data-testid="schools-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="schools-title">
              <span className="text-white">Écoles</span> 
              <span className="text-neon-purple text-glow">partenaires</span>
            </h2>
            <p className="text-xl text-gray-300">Nos collaborations avec les établissements d'enseignement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerSchools.map((school, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`school-${index}`}>
                <h3 className="text-lg font-semibold text-neon-purple mb-4">{school.name}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Formations :</h4>
                  <ul className="space-y-1">
                    {school.programs.map((program, programIndex) => (
                      <li key={programIndex} className="text-gray-400 text-xs">{program}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-xs text-neon-purple">{school.partnership}</div>
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
              <span className="text-white">Candidatez pour un</span> 
              <span className="text-neon-purple text-glow">stage</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez notre équipe pour une expérience enrichissante dans l'ingénierie technique !
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">15+</div>
                <div className="text-gray-400 text-sm">Stagiaires par an</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">75%</div>
                <div className="text-gray-400 text-sm">Taux d'embauche</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">4.8/5</div>
                <div className="text-gray-400 text-sm">Satisfaction stagiaires</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-apply-internship">
                <i className="fas fa-graduation-cap mr-2"></i>
                Candidater pour un stage
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-contact-schools">
                <i className="fas fa-university mr-2"></i>
                Contact écoles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}