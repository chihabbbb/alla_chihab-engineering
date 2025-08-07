export default function Equipe() {
  const teamMembers = [
    {
      name: "Alla Chihab",
      position: "Directeur Général & Fondateur",
      expertise: "Vision stratégique, Innovation technologique",
      description: "Ingénieur diplômé avec plus de 40 ans d'expérience dans l'ingénierie du bâtiment. Pionnier des solutions durables au Luxembourg.",
      color: "neon-blue"
    },
    {
      name: "Marie Dubois",
      position: "Directrice Technique",
      expertise: "HVAC, Optimisation énergétique",
      description: "Spécialiste en systèmes HVAC avec 15 ans d'expérience. Experte en performance énergétique et certification BREEAM.",
      color: "neon-purple"
    },
    {
      name: "Jean-Luc Martin",
      position: "Chef de Projet Senior",
      expertise: "Gestion de projet, Coordination",
      description: "Gestionnaire de projet expérimenté, spécialisé dans les projets complexes et la coordination multi-disciplinaire.",
      color: "neon-green"
    },
    {
      name: "Sophie Weber",
      position: "Ingénieure Énergies Renouvelables",
      expertise: "Solaire, Géothermie, Stockage",
      description: "Docteure en énergies renouvelables, experte en conception de systèmes solaires et géothermiques innovants.",
      color: "neon-blue"
    },
    {
      name: "Thomas Schneider",
      position: "Spécialiste BIM",
      expertise: "Modélisation 3D, Coordination BIM",
      description: "Expert en Building Information Modeling avec certification Autodesk. Responsable de la transformation digitale.",
      color: "neon-purple"
    },
    {
      name: "Lisa Chen",
      position: "Ingénieure Smart Building",
      expertise: "IoT, Automatisation, Intelligence artificielle",
      description: "Spécialiste en bâtiments intelligents et systèmes IoT. Pionnière de l'intégration IA dans nos projets.",
      color: "neon-green"
    }
  ];

  const departments = [
    {
      name: "Direction Générale",
      members: 2,
      description: "Leadership stratégique et développement",
      icon: "fas fa-user-tie",
      color: "neon-blue"
    },
    {
      name: "Équipe Technique",
      members: 12,
      description: "Ingénieurs et spécialistes HVAC",
      icon: "fas fa-hard-hat",
      color: "neon-purple"
    },
    {
      name: "Gestion de Projet",
      members: 6,
      description: "Chefs de projet et coordinateurs",
      icon: "fas fa-project-diagram",
      color: "neon-green"
    },
    {
      name: "Innovation & R&D",
      members: 3,
      description: "Recherche et nouvelles technologies",
      icon: "fas fa-flask",
      color: "neon-blue"
    },
    {
      name: "Support Administratif",
      members: 2,
      description: "Administration et support",
      icon: "fas fa-users",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="equipe-title">
              <span className="text-neon-purple text-glow">NOTRE</span>
              <span className="text-white"> ÉQUIPE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="equipe-subtitle">
              Des experts passionnés unis par l'excellence technique et l'innovation
            </p>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-20" data-testid="leadership-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="leadership-title">
              <span className="text-white">Équipe</span> 
              <span className="text-neon-blue text-glow">dirigeante</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center hover-lift" data-testid={`team-member-${index}`}>
                <div className={`w-24 h-24 bg-${member.color}/20 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <i className="fas fa-user text-3xl text-white"></i>
                </div>
                <h3 className={`text-xl font-semibold text-${member.color} mb-2`}>{member.name}</h3>
                <p className="text-white font-medium mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm mb-4">{member.expertise}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-dark-800/50" data-testid="departments-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="departments-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-green text-glow">départements</span>
            </h2>
            <p className="text-xl text-gray-300">Une organisation structurée pour une efficacité maximale</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`department-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${dept.color}/20 rounded-xl flex items-center justify-center`}>
                    <i className={`${dept.icon} text-xl text-${dept.color}`}></i>
                  </div>
                  <div className={`text-sm font-semibold text-${dept.color} bg-${dept.color}/10 px-3 py-1 rounded-full`}>
                    {dept.members} membres
                  </div>
                </div>
                <h3 className={`text-lg font-semibold text-${dept.color} mb-2`}>{dept.name}</h3>
                <p className="text-gray-400 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="values-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-purple text-glow">valeurs</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="value-excellence">
              <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-star text-2xl text-neon-blue"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-blue mb-4">Excellence Technique</h3>
              <p className="text-gray-300">
                Recherche constante de la perfection dans chaque projet et chaque solution proposée.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="value-collaboration">
              <div className="w-16 h-16 bg-neon-purple/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-handshake text-2xl text-neon-purple"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-purple mb-4">Collaboration</h3>
              <p className="text-gray-300">
                Travail d'équipe et partenariat étroit avec nos clients pour des résultats optimaux.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="value-innovation">
              <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-lightbulb text-2xl text-neon-green"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-green mb-4">Innovation</h3>
              <p className="text-gray-300">
                Adoption proactive des nouvelles technologies pour rester à la pointe du secteur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}