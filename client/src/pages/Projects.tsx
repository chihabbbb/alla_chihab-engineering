export default function Projects() {
  const projectCategories = [
    {
      id: 'alimentaire',
      title: 'Alimentaire',
      icon: 'fas fa-utensils',
      color: 'neon-blue',
      count: 15
    },
    {
      id: 'centrales-energie',
      title: 'Centrales d\'Énergie',
      icon: 'fas fa-bolt',
      color: 'neon-green',
      count: 8
    },
    {
      id: 'commerce',
      title: 'Commerce',
      icon: 'fas fa-shopping-bag',
      color: 'neon-purple',
      count: 25
    },
    {
      id: 'datacenter',
      title: 'Datacenter & Télécommunications',
      icon: 'fas fa-server',
      color: 'neon-blue',
      count: 12
    },
    {
      id: 'education',
      title: 'Éducation',
      icon: 'fas fa-graduation-cap',
      color: 'neon-green',
      count: 20
    },
    {
      id: 'administration',
      title: 'Immeuble administratif',
      icon: 'fas fa-building',
      color: 'neon-purple',
      count: 30
    },
    {
      id: 'industrie',
      title: 'Industrie',
      icon: 'fas fa-industry',
      color: 'neon-blue',
      count: 18
    },
    {
      id: 'logement',
      title: 'Logement',
      icon: 'fas fa-home',
      color: 'neon-green',
      count: 40
    },
    {
      id: 'soins',
      title: 'Maison de soins',
      icon: 'fas fa-heartbeat',
      color: 'neon-purple',
      count: 10
    }
  ];

  const featuredProjects = [
    {
      id: 'skypark',
      title: 'Skypark Business Center',
      category: 'administration',
      location: 'Luxembourg',
      year: '2024',
      description: 'Centre d\'affaires moderne avec équipements techniques de pointe et système de climatisation intelligent.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      features: ['Système HVAC intelligent', 'Certification BREEAM Excellent', 'Éclairage LED adaptatif']
    },
    {
      id: 'wooden-building',
      title: 'Immeuble administratif en bois',
      category: 'administration',
      location: 'Leudelange',
      year: '2024',
      description: 'Construction durable en bois avec chauffage géothermique et ventilation naturelle assistée.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      features: ['Chauffage géothermique', 'Construction bois certifié', 'Récupération eau de pluie']
    },
    {
      id: 'well-22',
      title: 'Well 22 - Howald',
      category: 'administration',
      location: 'Howald',
      year: '2023',
      description: 'Bureau moderne connecté avec système de gestion technique centralisée et optimisation énergétique.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      features: ['GTB centralisée', 'Panneaux solaires', 'Système de refroidissement free-cooling']
    },
    {
      id: 'cnis',
      title: 'CNIS - Centre National d\'Intervention',
      category: 'administration',
      location: 'Luxembourg',
      year: '2023',
      description: 'Centre d\'intervention et de secours avec systèmes techniques redondants et alimentation de secours.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      features: ['Systèmes redondants', 'Générateurs de secours', 'Ventilation surpression']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="projects-title">
              <span className="text-neon-purple text-glow">NOS</span>
              <span className="text-white"> PROJETS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="projects-subtitle">
              Découvrez nos réalisations exceptionnelles dans tous les secteurs d'activité
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20" data-testid="project-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="categories-title">
              <span className="text-white">Domaines</span> 
              <span className="text-neon-blue text-glow">d'expertise</span>
            </h2>
            <p className="text-xl text-gray-300">Plus de 500 projets réalisés dans 9 secteurs d'activité</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projectCategories.map((category) => (
              <div key={category.id} className="glass rounded-2xl p-6 hover-lift group cursor-pointer" data-testid={`category-${category.id}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${category.color}/20 rounded-xl flex items-center justify-center group-hover:bg-${category.color}/30 transition-colors duration-300`}>
                    <i className={`${category.icon} text-xl text-${category.color}`}></i>
                  </div>
                  <div className={`text-sm font-semibold text-${category.color} bg-${category.color}/10 px-3 py-1 rounded-full`}>
                    {category.count} projets
                  </div>
                </div>
                <h3 className={`text-lg font-semibold text-${category.color} mb-2`}>{category.title}</h3>
                <p className="text-gray-400 text-sm">
                  Expertise technique spécialisée et solutions sur mesure
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark-800/50" data-testid="featured-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="featured-title">
              <span className="text-white">Projets</span> 
              <span className="text-neon-green text-glow">remarquables</span>
            </h2>
            <p className="text-xl text-gray-300">Nos réalisations les plus innovantes</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass rounded-2xl overflow-hidden hover-lift group" data-testid={`project-${project.id}`}>
                <div className="h-64 bg-cover bg-center relative" style={{backgroundImage: `url(${project.image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white text-sm">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {project.location}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neon-blue mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-neon-green">Caractéristiques principales :</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-check text-neon-green mr-2 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full glass-blue py-3 rounded-lg font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300" data-testid={`button-view-${project.id}`}>
                    <i className="fas fa-eye mr-2"></i>
                    Voir le projet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20" data-testid="project-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-neon-blue mb-2" data-testid="stat-total-projects">500+</div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2" data-testid="stat-surface">2M+</div>
                <div className="text-gray-400">m² équipés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-green mb-2" data-testid="stat-energy-savings">30%</div>
                <div className="text-gray-400">Économies d'énergie moyennes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-blue mb-2" data-testid="stat-satisfaction">98%</div>
                <div className="text-gray-400">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
