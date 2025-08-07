export default function Bureaux() {
  const offices = [
    {
      name: "Siège Social - Luxembourg Ville",
      address: "123 Avenue de la Liberté",
      city: "L-1930 Luxembourg",
      phone: "+352 26 12 34 56",
      email: "info@allachihab.lu",
      description: "Notre siège social abrite la direction générale, les équipes de conception et le département innovation. Équipé des dernières technologies BIM et de salles de réunion modernes.",
      services: ["Direction Générale", "Conception HVAC", "Innovation & R&D", "Administration"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "neon-blue"
    },
    {
      name: "Bureau Technique - Esch-sur-Alzette",
      address: "45 Rue de l'Industrie",
      city: "L-4070 Esch-sur-Alzette",
      phone: "+352 54 12 34 56",
      email: "technique@allachihab.lu",
      description: "Centre technique spécialisé dans les projets industriels et les solutions énergétiques avancées. Laboratoire de tests et centre de formation continue.",
      services: ["Projets Industriels", "Tests & Validations", "Formation", "Support Technique"],
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "neon-green"
    },
    {
      name: "Antenne Nord - Ettelbruck",
      address: "12 Place de la Gare",
      city: "L-9044 Ettelbruck",
      phone: "+352 81 12 34 56",
      email: "nord@allachihab.lu",
      description: "Antenne dédiée aux projets résidentiels et aux petites installations. Proximité avec les clients du nord du Luxembourg.",
      services: ["Projets Résidentiels", "Conseil Local", "Maintenance", "Urgences"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "neon-purple"
    }
  ];

  const facilities = [
    {
      name: "Laboratoire de Tests",
      description: "Équipements de pointe pour tester les performances des systèmes HVAC",
      icon: "fas fa-flask",
      color: "neon-blue"
    },
    {
      name: "Centre BIM",
      description: "Stations de travail haute performance pour la modélisation 3D",
      icon: "fas fa-cube",
      color: "neon-purple"
    },
    {
      name: "Salle de Formation",
      description: "Espaces dédiés à la formation continue et aux séminaires",
      icon: "fas fa-chalkboard-teacher",
      color: "neon-green"
    },
    {
      name: "Showroom Technologique",
      description: "Exposition des dernières innovations en équipement technique",
      icon: "fas fa-tv",
      color: "neon-blue"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="bureaux-title">
              <span className="text-neon-green text-glow">NOS</span>
              <span className="text-white"> BUREAUX</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="bureaux-subtitle">
              Trois implantations stratégiques pour une couverture optimale du Luxembourg
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20" data-testid="offices-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {offices.map((office, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`office-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center" style={{backgroundImage: `url(${office.image})`}}>
                    <div className="h-full bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold text-${office.color} text-glow mb-4`}>{office.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <i className={`fas fa-map-marker-alt text-${office.color} mr-3 mt-1`}></i>
                        <div>
                          <div className="text-gray-300">{office.address}</div>
                          <div className="text-gray-300">{office.city}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <i className={`fas fa-phone text-${office.color} mr-3`}></i>
                        <span className="text-gray-300">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <i className={`fas fa-envelope text-${office.color} mr-3`}></i>
                        <span className="text-gray-300">{office.email}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{office.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Services disponibles :</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.services.map((service, serviceIndex) => (
                          <span key={serviceIndex} className={`bg-${office.color}/20 text-${office.color} px-3 py-1 rounded-full text-sm`}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-dark-800/50" data-testid="facilities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="facilities-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-blue text-glow">équipements</span>
            </h2>
            <p className="text-xl text-gray-300">Des installations de pointe au service de l'excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`facility-${index}`}>
                <div className={`w-16 h-16 bg-${facility.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${facility.icon} text-2xl text-${facility.color}`}></i>
                </div>
                <h3 className={`text-lg font-semibold text-${facility.color} mb-3`}>{facility.name}</h3>
                <p className="text-gray-400 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20" data-testid="contact-info-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="contact-title">
              <span className="text-white">Visitez nos</span> 
              <span className="text-neon-purple text-glow">bureaux</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nos équipes vous accueillent sur rendez-vous dans l'un de nos trois bureaux
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-schedule-visit">
                <i className="fas fa-calendar mr-2"></i>
                Planifier une visite
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-contact-offices">
                <i className="fas fa-phone mr-2"></i>
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}