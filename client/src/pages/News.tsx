export default function News() {
  const newsArticles = [
    {
      id: 'manutention-chiller',
      title: 'MANUTENTION CHILLER',
      category: 'Innovation',
      date: '15 Janvier 2024',
      excerpt: 'Dans le cadre de la décarbonisation des bâtiments anciens, nous développons des concepts innovants utilisant des machines frigorifiques pour assurer à la fois le refroidissement et le chauffage des installations de confort.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      readTime: '5 min',
      tags: ['Innovation', 'Durabilité', 'HVAC']
    },
    {
      id: 'smart-design',
      title: 'SMART DESIGN',
      category: 'Technologie',
      date: '10 Janvier 2024',
      excerpt: 'Dans un contexte où la performance énergétique, le confort thermique et la durabilité sont devenus des critères incontournables, notre conception est essentielle pour garantir un bâtiment performant, résilient et efficace sur le long terme.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      readTime: '7 min',
      tags: ['Design', 'Performance', 'Durabilité']
    },
    {
      id: 'orientation-client',
      title: 'ACE #ORIENTATIONCLIENT',
      category: 'Service Client',
      date: '05 Janvier 2024',
      excerpt: 'Alla Chihab Engineering accompagne ses clients lors de tests de performance de refroidissement des systèmes. Ces tests jouent un rôle crucial dans notre quête constante d\'excellence opérationnelle et de qualité de service.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      readTime: '4 min',
      tags: ['Service Client', 'Tests', 'Qualité']
    },
    {
      id: 'securite-sociale',
      title: 'CITÉ VUN DER SÉCURITÉ SOCIALE',
      category: 'Projet',
      date: '28 Décembre 2023',
      excerpt: 'Neuf Gabar op der Gare gouf presentéiert: A ACE Team ACE accompagnera https://www.rtl.lu/news/national/a/2026288.html. Les plus dans nos projets.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      readTime: '6 min',
      tags: ['Projet', 'Social', 'Luxembourg']
    },
    {
      id: 'energie-renouvelable',
      title: 'TRANSITION ÉNERGÉTIQUE',
      category: 'Environnement',
      date: '20 Décembre 2023',
      excerpt: 'Notre engagement vers une transition énergétique durable se concrétise par l\'intégration de solutions innovantes d\'énergies renouvelables dans tous nos projets.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      readTime: '8 min',
      tags: ['Énergie', 'Renouvelable', 'Transition']
    },
    {
      id: 'formation-equipe',
      title: 'FORMATION CONTINUE',
      category: 'Formation',
      date: '15 Décembre 2023',
      excerpt: 'L\'excellence technique passe par la formation continue de nos équipes. Découvrez notre programme de développement des compétences 2024.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      readTime: '5 min',
      tags: ['Formation', 'Équipe', 'Compétences']
    }
  ];

  const categories = ['Toutes', 'Innovation', 'Technologie', 'Service Client', 'Projet', 'Environnement', 'Formation'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="news-title">
              <span className="text-neon-green text-glow">ACTUALITÉS</span>
              <span className="text-white"> & INNOVATIONS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="news-subtitle">
              Restez informé de nos dernières réalisations, innovations et actualités techniques
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-dark-800/30" data-testid="news-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full glass hover:glass-blue transition-all duration-300 text-white font-medium"
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12" data-testid="featured-article">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="h-80 lg:h-auto bg-cover bg-center" style={{
                backgroundImage: `url(${newsArticles[0].image})`
              }}>
                <div className="h-full bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/90 to-transparent flex items-end">
                  <div className="p-6 lg:hidden">
                    <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-semibold">
                      Article à la une
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="hidden lg:block mb-4">
                  <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-semibold">
                    Article à la une
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-neon-blue text-glow mb-4" data-testid="featured-title">
                  {newsArticles[0].title}
                </h2>
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <span>{newsArticles[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{newsArticles[0].readTime} de lecture</span>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {newsArticles[0].tags.map((tag) => (
                    <span key={tag} className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-read-featured">
                  <i className="fas fa-book-open mr-2"></i>
                  Lire l'article complet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-dark-800/50" data-testid="news-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="recent-news-title">
              <span className="text-white">Dernières</span> 
              <span className="text-neon-purple text-glow">actualités</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <article key={article.id} className="glass rounded-2xl overflow-hidden hover-lift group" data-testid={`article-${article.id}`}>
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url(${article.image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white text-xs bg-dark-900/80 px-2 py-1 rounded">
                      {article.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <i className="fas fa-calendar mr-2"></i>
                    {article.date}
                  </div>
                  <h3 className="text-xl font-semibold text-neon-blue mb-3 group-hover:text-neon-blue/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-dark-700 text-gray-400 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full glass py-3 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-300" data-testid={`button-read-${article.id}`}>
                    <i className="fas fa-arrow-right mr-2"></i>
                    Lire la suite
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="newsletter-title">
              <span className="text-white">Restez</span> 
              <span className="text-neon-green text-glow">informé</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Recevez nos dernières actualités et innovations directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                data-testid="newsletter-email-input"
              />
              <button className="glass-blue px-6 py-3 rounded-lg font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 whitespace-nowrap" data-testid="newsletter-subscribe-button">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
