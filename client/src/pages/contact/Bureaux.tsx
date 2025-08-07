export default function Bureaux() {
  const offices = [
    {
      name: "Siège Social Luxembourg",
      address: "15 Avenue John F. Kennedy",
      city: "L-1855 Luxembourg",
      phone: "+352 26 12 34 56",
      email: "luxembourg@allachihab.lu",
      description: "Notre siège social accueille les équipes direction, bureau d'études principal et développement commercial",
      services: ["Direction générale", "Bureau d'études", "Commercial", "Ressources humaines"],
      area: "850 m²",
      employees: 25,
      parking: "20 places",
      publicTransport: ["Bus 16, 28", "Tram T1"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      coordinates: { lat: 49.6116, lng: 6.1319 },
      isHeadquarters: true
    },
    {
      name: "Bureau Technique Esch-sur-Alzette",
      address: "42 Boulevard du Jazz",
      city: "L-4370 Esch-sur-Alzette",
      phone: "+352 26 12 34 57",
      email: "esch@allachihab.lu",
      description: "Bureau spécialisé dans les projets industriels et les installations techniques complexes",
      services: ["Projets industriels", "Commissioning", "Maintenance", "Support technique"],
      area: "420 m²",
      employees: 12,
      parking: "15 places",
      publicTransport: ["Bus 1, 3, 7", "Train CFL"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      coordinates: { lat: 49.4961, lng: 5.9769 },
      isHeadquarters: false
    },
    {
      name: "Antenne Differdange",
      address: "128 Avenue de la Liberté",
      city: "L-4602 Differdange",
      phone: "+352 26 12 34 58",
      email: "differdange@allachihab.lu",
      description: "Antenne locale pour le suivi des projets dans la région Sud-Ouest du Luxembourg",
      services: ["Suivi projets locaux", "Interventions rapides", "Relation clients"],
      area: "180 m²",
      employees: 5,
      parking: "8 places",
      publicTransport: ["Bus 15, 18"],
      image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      coordinates: { lat: 49.5244, lng: 5.8908 },
      isHeadquarters: false
    }
  ];

  const facilities = [
    {
      name: "Espaces de Travail",
      description: "Bureaux modernes équipés des dernières technologies",
      features: ["Open space collaboratif", "Salles de réunion", "Espaces de concentration", "Bureaux fermés directeurs"],
      icon: "fas fa-desktop",
      color: "neon-blue"
    },
    {
      name: "Équipements Techniques",
      description: "Matériel professionnel pour la conception et l'analyse",
      features: ["Stations CAO haute performance", "Logiciels techniques spécialisés", "Équipements de mesure", "Imprimantes grand format"],
      icon: "fas fa-tools",
      color: "neon-green"
    },
    {
      name: "Espaces Communs",
      description: "Zones de détente et de convivialité pour l'équipe",
      features: ["Salle de pause moderne", "Cuisine équipée", "Terrasse extérieure", "Espace détente"],
      icon: "fas fa-coffee",
      color: "neon-purple"
    },
    {
      name: "Infrastructure IT",
      description: "Réseau informatique performant et sécurisé",
      features: ["Fibre optique dédiée", "Wifi haut débit", "Serveurs locaux", "Sauvegarde cloud"],
      icon: "fas fa-wifi",
      color: "neon-blue"
    }
  ];

  const visitingHours = [
    {
      day: "Lundi - Vendredi",
      hours: "8h00 - 18h00",
      type: "Horaires bureau",
      note: "Rendez-vous recommandé"
    },
    {
      day: "Samedi",
      hours: "9h00 - 12h00",
      type: "Sur rendez-vous",
      note: "Urgences uniquement"
    },
    {
      day: "Dimanche",
      hours: "Fermé",
      type: "Repos hebdomadaire",
      note: "Astreinte technique"
    }
  ];

  const contactMethods = [
    {
      name: "Visite sur Rendez-vous",
      description: "Rencontrez nos équipes dans nos bureaux",
      process: ["Prise de RDV par téléphone/email", "Confirmation date/heure", "Accueil personnalisé", "Présentation équipe/projets"],
      icon: "fas fa-handshake",
      color: "neon-blue"
    },
    {
      name: "Présentation Projets",
      description: "Découvrez nos réalisations et savoir-faire",
      process: ["Demande de présentation", "Préparation sur mesure", "Session présentation", "Discussion opportunités"],
      icon: "fas fa-presentation",
      color: "neon-green"
    },
    {
      name: "Visite Technique",
      description: "Visite de nos installations et laboratoires",
      process: ["Réservation visite technique", "Briefing sécurité", "Tour des installations", "Démonstrations équipements"],
      icon: "fas fa-hard-hat",
      color: "neon-purple"
    }
  ];

  const accessibility = [
    {
      feature: "Accès PMR",
      description: "Tous nos bureaux sont accessibles aux personnes à mobilité réduite",
      details: ["Rampes d'accès", "Ascenseurs adaptés", "Toilettes PMR", "Places parking réservées"]
    },
    {
      feature: "Transport Public",
      description: "Excellente desserte par les transports en commun",
      details: ["Arrêts bus à proximité", "Stations tram/train", "Lignes régulières", "Horaires étendus"]
    },
    {
      feature: "Parking",
      description: "Stationnement gratuit pour nos visiteurs",
      details: ["Places visiteurs réservées", "Bornes recharge électrique", "Sécurité 24/7", "Proche des entrées"]
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
              <span className="text-neon-blue text-glow">NOS</span>
              <span className="text-white"> BUREAUX</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="bureaux-subtitle">
              Découvrez nos implantations au Luxembourg, conçues pour l'excellence technique et l'accueil de nos clients
            </p>
          </div>
        </div>
      </section>

      {/* Offices List */}
      <section className="py-20" data-testid="offices-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="offices-title">
              <span className="text-white">Nos</span> 
              <span className="text-neon-green text-glow">implantations</span>
            </h2>
            <p className="text-xl text-gray-300">3 bureaux stratégiquement situés au Luxembourg</p>
          </div>
          
          <div className="space-y-8">
            {offices.map((office, index) => (
              <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`office-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-cover bg-center relative" style={{backgroundImage: `url(${office.image})`}}>
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-900/80 to-transparent"></div>
                    {office.isHeadquarters && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm font-semibold">
                          Siège Social
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white space-y-1">
                        <div className="text-lg font-bold">{office.employees} collaborateurs</div>
                        <div className="text-sm">{office.area} • {office.parking}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neon-blue mb-2">{office.name}</h3>
                    <div className="text-gray-400 mb-4">
                      <div>{office.address}</div>
                      <div>{office.city}</div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{office.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Contact :</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center">
                            <i className="fas fa-phone text-neon-green mr-2"></i>
                            <span className="text-gray-400">{office.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-envelope text-neon-green mr-2"></i>
                            <span className="text-gray-400">{office.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Transport :</h4>
                        <div className="space-y-1">
                          {office.publicTransport.map((transport, transportIndex) => (
                            <div key={transportIndex} className="flex items-center">
                              <i className="fas fa-bus text-neon-purple mr-2"></i>
                              <span className="text-gray-400 text-sm">{transport}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Services :</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.services.map((service, serviceIndex) => (
                          <span key={serviceIndex} className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
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
              <span className="text-neon-purple text-glow">équipements</span>
            </h2>
            <p className="text-xl text-gray-300">Des bureaux modernes pour la performance technique</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift" data-testid={`facility-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${facility.color}/20 rounded-2xl flex items-center justify-center mr-6`}>
                    <i className={`${facility.icon} text-2xl text-${facility.color}`}></i>
                  </div>
                  <h3 className={`text-2xl font-bold text-${facility.color}`}>{facility.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{facility.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Équipements :</h4>
                  <ul className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <i className={`fas fa-check text-${facility.color} mr-3`}></i>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Hours */}
      <section className="py-20" data-testid="hours-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="hours-title">
              <span className="text-white">Horaires de</span> 
              <span className="text-neon-green text-glow">visite</span>
            </h2>
            <p className="text-xl text-gray-300">Quand nous rencontrer</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {visitingHours.map((schedule, index) => (
                <div key={index} className="text-center" data-testid={`schedule-${index}`}>
                  <h3 className="text-xl font-semibold text-neon-green mb-4">{schedule.day}</h3>
                  <div className="text-2xl font-bold text-white mb-2">{schedule.hours}</div>
                  <div className="text-gray-400 text-sm mb-2">{schedule.type}</div>
                  <div className="text-gray-500 text-xs">{schedule.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-dark-800/50" data-testid="contact-methods-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="contact-methods-title">
              <span className="text-white">Modalités de</span> 
              <span className="text-neon-blue text-glow">visite</span>
            </h2>
            <p className="text-xl text-gray-300">Comment organiser votre venue</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`contact-method-${index}`}>
                <div className={`w-16 h-16 bg-${method.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${method.icon} text-2xl text-${method.color}`}></i>
                </div>
                
                <h3 className={`text-xl font-semibold text-${method.color} mb-4`}>{method.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{method.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Processus :</h4>
                  <ol className="space-y-2">
                    {method.process.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center justify-center">
                        <span className={`w-5 h-5 bg-${method.color}/20 text-${method.color} rounded-full text-xs flex items-center justify-center mr-2`}>
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-400 text-xs">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-20" data-testid="accessibility-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="accessibility-title">
              <span className="text-white">Accessibilité &</span> 
              <span className="text-neon-purple text-glow">services</span>
            </h2>
            <p className="text-xl text-gray-300">Accueil adapté à tous nos visiteurs</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {accessibility.map((item, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`accessibility-${index}`}>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">{item.feature}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{item.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Détails :</h4>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center">
                        <i className="fas fa-check text-neon-purple mr-2 text-xs"></i>
                        <span className="text-gray-400 text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <span className="text-white">Venez nous</span> 
              <span className="text-neon-blue text-glow">rencontrer</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez nos bureaux, rencontrez nos équipes et discutons de vos projets techniques
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">3</div>
                <div className="text-gray-400 text-sm">Bureaux au Luxembourg</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">42</div>
                <div className="text-gray-400 text-sm">Collaborateurs experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">1,450m²</div>
                <div className="text-gray-400 text-sm">Espaces de travail</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border" data-testid="button-schedule-visit">
                <i className="fas fa-calendar mr-2"></i>
                Programmer une visite
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300" data-testid="button-get-directions">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Itinéraires
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}