export default function Plateforme() {
  const platformFeatures = [
    {
      name: "Espace Client Sécurisé",
      description: "Accès personnalisé aux documents de projet, plans et rapports en temps réel",
      icon: "fas fa-shield-alt",
      color: "neon-blue",
      features: ["Documents de projet", "Plans techniques", "Rapports d'avancement", "Facturations"]
    },
    {
      name: "Collaboration BIM",
      description: "Partage et révision collaborative des modèles 3D avec tous les intervenants",
      icon: "fas fa-cube",
      color: "neon-purple",
      features: ["Modèles 3D partagés", "Commentaires intégrés", "Historique des versions", "Coordination MEP"]
    },
    {
      name: "Suivi de Projet",
      description: "Tableau de bord en temps réel pour suivre l'avancement et les jalons",
      icon: "fas fa-chart-line",
      color: "neon-green",
      features: ["Tableau de bord", "Jalons projet", "Notifications", "Planification"]
    },
    {
      name: "Base de Connaissances",
      description: "Bibliothèque technique avec guides, normes et bonnes pratiques",
      icon: "fas fa-book",
      color: "neon-blue",
      features: ["Guides techniques", "Normes à jour", "Bonnes pratiques", "Formations en ligne"]
    }
  ];

  const tools = [
    {
      name: "Autodesk BIM 360",
      description: "Plateforme de collaboration cloud pour projets BIM",
      usage: "Partage de modèles, coordination, révisions",
      color: "neon-blue"
    },
    {
      name: "Microsoft Teams",
      description: "Communication et collaboration d'équipe intégrée",
      usage: "Réunions virtuelles, chat, partage de fichiers",
      color: "neon-purple"
    },
    {
      name: "SharePoint Online",
      description: "Gestion documentaire et espaces de travail collaboratifs",
      usage: "Documents projet, workflows, versions",
      color: "neon-green"
    },
    {
      name: "Power BI",
      description: "Tableaux de bord et analyses en temps réel",
      usage: "KPIs projet, reporting automatisé",
      color: "neon-blue"
    }
  ];

  const benefits = [
    {
      title: "Transparence Totale",
      description: "Visibilité complète sur l'avancement de votre projet en temps réel",
      icon: "fas fa-eye",
      color: "neon-blue"
    },
    {
      title: "Collaboration Efficace",
      description: "Travail d'équipe optimisé avec tous les intervenants du projet",
      icon: "fas fa-users",
      color: "neon-purple"
    },
    {
      title: "Gain de Temps",
      description: "Réduction des délais grâce à la communication digitale",
      icon: "fas fa-clock",
      color: "neon-green"
    },
    {
      title: "Qualité Améliorée",
      description: "Détection précoce des conflits et amélioration continue",
      icon: "fas fa-star",
      color: "neon-blue"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="plateforme-title">
              <span className="text-neon-purple text-glow">PLATEFORME</span>
              <span className="text-white"> D'ÉCHANGE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="plateforme-subtitle">
              Solutions digitales avancées pour une collaboration optimale et un suivi de projet en temps réel
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="features-title">
              <span className="text-white">Fonctionnalités</span> 
              <span className="text-neon-blue text-glow">avancées</span>
            </h2>
            <p className="text-xl text-gray-300">Des outils digitaux au service de vos projets</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`feature-${index}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center`}>
                    <i className={`${feature.icon} text-2xl text-${feature.color}`}></i>
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold text-${feature.color} mb-4`}>{feature.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités incluses :</h4>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <i className={`fas fa-check text-${feature.color} mr-3`}></i>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Integration */}
      <section className="py-20 bg-dark-800/50" data-testid="tools-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="tools-title">
              <span className="text-white">Outils</span> 
              <span className="text-neon-green text-glow">intégrés</span>
            </h2>
            <p className="text-xl text-gray-300">Écosystème technologique complet</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`tool-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold text-${tool.color}`}>{tool.name}</h3>
                  <div className={`w-12 h-12 bg-${tool.color}/20 rounded-xl flex items-center justify-center`}>
                    <i className="fas fa-cog text-xl text-white"></i>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{tool.description}</p>
                <div className="flex items-center">
                  <i className={`fas fa-arrow-right text-${tool.color} mr-2`}></i>
                  <span className="text-gray-400 text-sm">{tool.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="benefits-title">
              <span className="text-white">Avantages</span> 
              <span className="text-neon-purple text-glow">clients</span>
            </h2>
            <p className="text-xl text-gray-300">Pourquoi choisir notre plateforme d'échange</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`benefit-${index}`}>
                <div className={`w-16 h-16 bg-${benefit.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${benefit.icon} text-2xl text-${benefit.color}`}></i>
                </div>
                <h3 className={`text-lg font-semibold text-${benefit.color} mb-3`}>{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Request */}
      <section className="py-20 bg-dark-800/50" data-testid="access-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="access-title">
              <span className="text-white">Accéder à la</span> 
              <span className="text-neon-blue text-glow">plateforme</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nos clients bénéficient d'un accès privilégié à notre plateforme d'échange collaborative
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Accès disponible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green mb-2">SSL</div>
                <div className="text-gray-400 text-sm">Sécurité renforcée</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple mb-2">Cloud</div>
                <div className="text-gray-400 text-sm">Sauvegarde automatique</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-request-access">
                <i className="fas fa-key mr-2"></i>
                Demander un accès
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-demo-platform">
                <i className="fas fa-play mr-2"></i>
                Voir la démonstration
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}