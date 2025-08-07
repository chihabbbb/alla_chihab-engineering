import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: 'Siège Social',
      address: '123 Avenue de la Liberté',
      city: 'L-1930 Luxembourg',
      phone: '+352 26 12 34 56',
      email: 'info@allachihab.lu',
      color: 'neon-blue'
    }
  ];

  const officeHours = [
    { day: 'Lundi - Vendredi', hours: '8h00 - 18h00' },
    { day: 'Samedi', hours: '9h00 - 12h00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ];

  const transportOptions = [
    {
      type: 'Bus',
      lines: ['Ligne 18', 'Ligne 29', 'Ligne 4'],
      stop: 'Arrêt Liberté',
      icon: 'fas fa-bus',
      color: 'neon-green'
    },
    {
      type: 'Tram',
      lines: ['Ligne T1'],
      stop: 'Station Centre',
      icon: 'fas fa-train',
      color: 'neon-purple'
    },
    {
      type: 'Parking',
      lines: ['P+R Bouillon', 'Parking Knuedler'],
      stop: '5 min à pied',
      icon: 'fas fa-car',
      color: 'neon-blue'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="contact-title">
              <span className="text-neon-blue text-glow">CONTACTEZ</span>
              <span className="text-white"> NOS EXPERTS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-subtitle">
              Une question sur vos projets ? Notre équipe d'experts est à votre disposition
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-neon-green text-glow mb-8" data-testid="form-title">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                      placeholder="Votre nom complet"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                      placeholder="votre@email.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Nom de votre entreprise"
                    data-testid="input-company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors"
                    data-testid="select-subject"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="projet">Nouveau projet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="consultation">Consultation technique</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                    data-testid="textarea-message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full glass-blue px-8 py-4 rounded-xl font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 neon-border"
                  data-testid="button-submit-form"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="glass rounded-2xl p-8" data-testid="office-info">
                <h3 className="text-2xl font-bold text-neon-blue text-glow mb-6">Nos coordonnées</h3>
                
                {contactInfo.map((office, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">{office.title}</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <i className="fas fa-map-marker-alt text-neon-blue mr-3 mt-1"></i>
                        <div>
                          <div className="text-gray-300">{office.address}</div>
                          <div className="text-gray-300">{office.city}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-phone text-neon-purple mr-3"></i>
                        <a href={`tel:${office.phone}`} className="text-gray-300 hover:text-neon-purple transition-colors" data-testid="link-phone">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-neon-green mr-3"></i>
                        <a href={`mailto:${office.email}`} className="text-gray-300 hover:text-neon-green transition-colors" data-testid="link-email">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="glass rounded-2xl p-8" data-testid="office-hours">
                <h3 className="text-2xl font-bold text-neon-purple text-glow mb-6">Horaires d'ouverture</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="glass rounded-2xl p-8" data-testid="quick-contact">
                <h3 className="text-2xl font-bold text-neon-green text-glow mb-6">Contact rapide</h3>
                <div className="flex flex-col space-y-4">
                  <button className="glass-blue px-6 py-3 rounded-lg font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300 flex items-center justify-center" data-testid="button-call-now">
                    <i className="fas fa-phone mr-2"></i>
                    Appelez maintenant
                  </button>
                  <button className="glass px-6 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center" data-testid="button-schedule-meeting">
                    <i className="fas fa-calendar mr-2"></i>
                    Planifier un RDV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-dark-800/50" data-testid="transportation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="transportation-title">
              <span className="text-white">Comment nous</span> 
              <span className="text-neon-green text-glow">rejoindre</span>
            </h2>
            <p className="text-xl text-gray-300">Plusieurs options pour venir nous rencontrer</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((transport, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center hover-lift" data-testid={`transport-${transport.type.toLowerCase()}`}>
                <div className={`w-16 h-16 bg-${transport.color}/20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`${transport.icon} text-2xl text-${transport.color}`}></i>
                </div>
                <h3 className={`text-xl font-semibold text-${transport.color} mb-4`}>{transport.type}</h3>
                <div className="space-y-2 mb-4">
                  {transport.lines.map((line, lineIndex) => (
                    <div key={lineIndex} className="text-gray-300 text-sm">
                      {line}
                    </div>
                  ))}
                </div>
                <div className="text-gray-400 text-sm">
                  <i className="fas fa-map-pin mr-2"></i>
                  {transport.stop}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" data-testid="map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="map-title">
              <span className="text-white">Notre</span> 
              <span className="text-neon-blue text-glow">localisation</span>
            </h2>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="bg-dark-700/50 rounded-xl h-96 flex items-center justify-center" data-testid="map-placeholder">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-neon-blue mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-2">Carte interactive</h3>
                <p className="text-gray-400">123 Avenue de la Liberté, L-1930 Luxembourg</p>
                <button className="mt-4 glass-blue px-6 py-3 rounded-lg font-semibold text-white hover:bg-neon-blue/20 transition-all duration-300" data-testid="button-open-maps">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Ouvrir dans Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
