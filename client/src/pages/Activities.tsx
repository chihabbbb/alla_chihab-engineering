export default function Activities() {
  const activities = [
    {
      id: 'equipement-technique',
      title: 'Équipement technique du bâtiment',
      icon: 'fas fa-tools',
      color: 'neon-blue',
      description: 'Conception et dimensionnement des installations de chauffage, ventilation, climatisation et plomberie.',
      services: [
        'Chauffage et production d\'eau chaude sanitaire',
        'Ventilation et traitement d\'air',
        'Climatisation et refroidissement',
        'Installations sanitaires et plomberie',
        'Réseaux de distribution'
      ]
    },
    {
      id: 'optimisation-energetique',
      title: 'Optimisation énergétique & solutions sur mesure',
      icon: 'fas fa-leaf',
      color: 'neon-green',
      description: 'Audit énergétique, amélioration de la performance et solutions durables personnalisées.',
      services: [
        'Audits énergétiques complets',
        'Calculs de performance thermique',
        'Solutions de récupération d\'énergie',
        'Systèmes de régulation intelligents',
        'Certifications énergétiques'
      ]
    },
    {
      id: 'energie-durable',
      title: 'Énergie et construction durable',
      icon: 'fas fa-solar-panel',
      color: 'neon-purple',
      description: 'Intégration d\'énergies renouvelables et conception de bâtiments durables.',
      services: [
        'Systèmes solaires thermiques et photovoltaïques',
        'Pompes à chaleur géothermiques',
        'Biomasse et biogaz',
        'Stockage d\'énergie',
        'Smart grids et micro-réseaux'
      ]
    },
    {
      id: 'pilotage-projets',
      title: 'Pilotage de projets',
      icon: 'fas fa-project-diagram',
      color: 'neon-blue',
      description: 'Gestion complète des projets de conception à la mise en service.',
      services: [
        'Direction de projet technique',
        'Coordination des équipes',
        'Planification et suivi',
        'Contrôle qualité',
        'Mise en service et formation'
      ]
    },
    {
      id: 'activites-complementaires',
      title: 'Activités complémentaires',
      icon: 'fas fa-cogs',
      color: 'neon-green',
      description: 'Services spécialisés et expertise technique avancée.',
      services: [
        'Études de faisabilité',
        'Assistance technique',
        'Formation et conseil',
        'Maintenance préventive',
        'Support technique'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="activities-title">
              <span className="text-neon-green text-glow">NOS</span>
              <span className="text-white"> ACTIVITÉS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="activities-subtitle">
              Expertise technique complète pour tous vos projets d'ingénierie du bâtiment
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20" data-testid="activities-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`glass rounded-2xl p-8 hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`activity-${activity.id}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-${activity.color}/20 rounded-2xl flex items-center justify-center mb-6`}>
                      <i className={`${activity.icon} text-2xl text-${activity.color}`}></i>
                    </div>
                    <h2 className={`text-3xl font-bold mb-4 text-${activity.color} text-glow`}>
                      {activity.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  
                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Services inclus :</h3>
                    <ul className="space-y-3">
                      {activity.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <i className={`fas fa-check-circle text-${activity.color} mr-3 mt-1 flex-shrink-0`}></i>
                          <span className="text-gray-300">{service}</span>
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

      {/* Technology Section */}
      <section className="py-20 bg-dark-800/50" data-testid="technology-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="technology-title">
              <span className="text-white">Technologies</span> 
              <span className="text-neon-purple text-glow">avancées</span>
            </h2>
            <p className="text-xl text-gray-300">Nous utilisons les dernières innovations technologiques</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="tech-bim">
              <div className="w-20 h-20 bg-neon-blue/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-cube text-3xl text-neon-blue"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-blue mb-4">Modélisation BIM</h3>
              <p className="text-gray-300">
                Building Information Modeling pour une conception précise et collaborative
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="tech-simulation">
              <div className="w-20 h-20 bg-neon-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-chart-line text-3xl text-neon-purple"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-purple mb-4">Simulation Thermique</h3>
              <p className="text-gray-300">
                Analyses précises des performances énergétiques et du confort thermique
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="tech-iot">
              <div className="w-20 h-20 bg-neon-green/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-wifi text-3xl text-neon-green"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-green mb-4">IoT & Smart Building</h3>
              <p className="text-gray-300">
                Systèmes connectés pour une gestion intelligente des bâtiments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
