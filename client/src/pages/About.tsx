export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="about-title">
              <span className="text-neon-blue text-glow">À PROPOS</span>
              <span className="text-white"> D'ALLA CHIHAB</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="about-subtitle">
              Fondé en 1981, notre bureau d'ingénierie conseille et accompagne nos clients 
              dans les domaines de l'équipement technique du bâtiment.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-dark-800/50" data-testid="company-history">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-neon-green text-glow" data-testid="history-title">Notre Histoire</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Depuis 1981, Alla Chihab Engineering s'est imposé comme un acteur de référence 
                  dans le conseil en ingénierie technique du bâtiment. Notre parcours témoigne 
                  d'une évolution constante et d'une adaptation permanente aux défis technologiques.
                </p>
                <p>
                  Fondée sur les principes d'innovation, d'excellence technique et d'indépendance, 
                  notre société a su développer une expertise reconnue dans l'optimisation énergétique 
                  et les solutions durables.
                </p>
                <p>
                  Aujourd'hui, nous accompagnons nos clients dans leurs projets les plus ambitieux, 
                  en proposant des solutions techniques innovantes et respectueuses de l'environnement.
                </p>
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-blue mb-2" data-testid="stat-experience">43+</div>
                  <div className="text-gray-400">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-purple mb-2" data-testid="stat-projects">500+</div>
                  <div className="text-gray-400">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-green mb-2" data-testid="stat-clients">200+</div>
                  <div className="text-gray-400">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-blue mb-2" data-testid="stat-team">25+</div>
                  <div className="text-gray-400">Experts qualifiés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20" data-testid="our-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="team-title">
              <span className="text-white">Notre</span> 
              <span className="text-neon-purple text-glow">équipe</span>
            </h2>
            <p className="text-xl text-gray-300">Des experts passionnés à votre service</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="team-member-director">
              <div className="w-24 h-24 bg-gradient-neon rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-user-tie text-3xl text-dark-900"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-blue mb-2">Direction Générale</h3>
              <p className="text-gray-400 mb-4">Leadership & Vision Stratégique</p>
              <p className="text-gray-300 text-sm">
                Pilotage des orientations stratégiques et développement des partenariats clés.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="team-member-engineers">
              <div className="w-24 h-24 bg-gradient-neon rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-hard-hat text-3xl text-dark-900"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-purple mb-2">Équipe Technique</h3>
              <p className="text-gray-400 mb-4">Ingénieurs & Spécialistes</p>
              <p className="text-gray-300 text-sm">
                Conception, calcul et supervision des installations techniques innovantes.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center hover-lift" data-testid="team-member-project-managers">
              <div className="w-24 h-24 bg-gradient-neon rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-project-diagram text-3xl text-dark-900"></i>
              </div>
              <h3 className="text-xl font-semibold text-neon-green mb-2">Chefs de Projet</h3>
              <p className="text-gray-400 mb-4">Gestion & Coordination</p>
              <p className="text-gray-300 text-sm">
                Pilotage des projets de la conception à la mise en service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-dark-800/50" data-testid="our-offices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="offices-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-green text-glow">bureaux</span>
            </h2>
            <p className="text-xl text-gray-300">Proximité et expertise locale</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-neon-blue mb-6">Siège Social - Luxembourg</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-neon-blue mr-3"></i>
                    <span className="text-gray-300">123 Avenue de la Liberté, L-1930 Luxembourg</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-neon-purple mr-3"></i>
                    <span className="text-gray-300">+352 26 12 34 56</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-neon-green mr-3"></i>
                    <span className="text-gray-300">info@allachihab.lu</span>
                  </div>
                </div>
              </div>
              <div className="bg-dark-700/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-neon-purple mb-4">Horaires d'ouverture</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
