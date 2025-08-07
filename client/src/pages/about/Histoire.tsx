export default function Histoire() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="histoire-title">
              <span className="text-neon-blue text-glow">NOTRE</span>
              <span className="text-white"> HISTOIRE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="histoire-subtitle">
              Plus de 40 ans d'excellence technique et d'innovation au service du bâtiment
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" data-testid="timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* 1981 - Fondation */}
            <div className="glass rounded-2xl p-8 hover-lift" data-testid="timeline-1981">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold text-neon-blue mb-4">1981</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Fondation d'Alla Chihab Engineering</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Création du bureau d'ingénierie conseil avec une vision claire : apporter une expertise technique 
                    de qualité dans le domaine de l'équipement technique du bâtiment. Dès ses débuts, l'entreprise 
                    se distingue par son approche innovante et sa rigueur technique.
                  </p>
                </div>
                <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                  <i className="fas fa-seedling text-2xl text-neon-blue"></i>
                </div>
              </div>
            </div>

            {/* 1990s - Expansion */}
            <div className="glass rounded-2xl p-8 hover-lift" data-testid="timeline-1990s">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="w-16 h-16 bg-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                    <i className="fas fa-expand-arrows-alt text-2xl text-neon-purple"></i>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-4xl font-bold text-neon-purple mb-4">1990s</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Expansion et diversification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Élargissement de l'équipe et diversification des services. Introduction de nouvelles technologies 
                    et développement de l'expertise en optimisation énergétique. Premiers projets d'envergure dans 
                    le secteur tertiaire et industriel.
                  </p>
                </div>
              </div>
            </div>

            {/* 2000s - Innovation */}
            <div className="glass rounded-2xl p-8 hover-lift" data-testid="timeline-2000s">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold text-neon-green mb-4">2000s</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Ère de l'innovation technologique</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Adoption des technologies de pointe : modélisation 3D, simulation thermique dynamique, 
                    et premières approches de développement durable. Certification de l'équipe et 
                    investissement massif dans la formation continue.
                  </p>
                </div>
                <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                  <i className="fas fa-lightbulb text-2xl text-neon-green"></i>
                </div>
              </div>
            </div>

            {/* 2010s - Développement durable */}
            <div className="glass rounded-2xl p-8 hover-lift" data-testid="timeline-2010s">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                    <i className="fas fa-leaf text-2xl text-neon-blue"></i>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-4xl font-bold text-neon-blue mb-4">2010s</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Pionnier du développement durable</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Leadership dans les solutions d'énergies renouvelables et les bâtiments à haute performance 
                    énergétique. Développement de l'expertise en géothermie, solaire et récupération d'énergie. 
                    Participation à des projets de référence au Luxembourg.
                  </p>
                </div>
              </div>
            </div>

            {/* 2020s - Transformation digitale */}
            <div className="glass rounded-2xl p-8 hover-lift" data-testid="timeline-2020s">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold text-neon-purple mb-4">2020s</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Transformation digitale et IA</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intégration de l'intelligence artificielle dans nos processus de conception. Développement 
                    de solutions IoT pour les bâtiments intelligents. Leadership dans la transition vers les 
                    énergies propres et la neutralité carbone.
                  </p>
                </div>
                <div className="w-16 h-16 bg-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                  <i className="fas fa-robot text-2xl text-neon-purple"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-dark-800/50" data-testid="achievements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="achievements-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-green text-glow">réalisations</span>
            </h2>
            <p className="text-xl text-gray-300">43 années d'excellence et d'innovation</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-neon-blue mb-2" data-testid="stat-projects">500+</div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2" data-testid="stat-clients">200+</div>
                <div className="text-gray-400">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-green mb-2" data-testid="stat-awards">15+</div>
                <div className="text-gray-400">Prix et distinctions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-blue mb-2" data-testid="stat-team">25+</div>
                <div className="text-gray-400">Experts qualifiés</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}