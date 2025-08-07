import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gray-800 py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-neon rounded-xl flex items-center justify-center">
                <i className="fas fa-atom text-dark-900 text-xl"></i>
              </div>
              <div>
                <div className="text-xl font-bold text-neon-blue text-glow">ALLA CHIHAB</div>
                <div className="text-sm text-gray-400">ENGINEERING</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Fondé en 1981, notre bureau d'ingénierie conseille et accompagne nos clients dans les domaines suivants.
            </p>
          </div>
          
          {/* À PROPOS */}
          <div>
            <h3 className="text-lg font-semibold text-neon-blue mb-4">À PROPOS</h3>
            <ul className="space-y-2">
              <li><Link href="/apropos/histoire" data-testid="footer-link-histoire"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Notre histoire</span></Link></li>
              <li><Link href="/apropos/equipe" data-testid="footer-link-equipe"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Notre équipe</span></Link></li>
              <li><Link href="/apropos/bureaux" data-testid="footer-link-bureaux"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Nos bureaux</span></Link></li>
              <li><Link href="/apropos/outils" data-testid="footer-link-outils"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Nos outils</span></Link></li>
              <li><Link href="/apropos/plateforme" data-testid="footer-link-plateforme"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Plateforme d'échange</span></Link></li>
            </ul>
          </div>
          
          {/* NOS ACTIVITÉS */}
          <div>
            <h3 className="text-lg font-semibold text-neon-purple mb-4">NOS ACTIVITÉS</h3>
            <ul className="space-y-2">
              <li><Link href="/activites/equipement-technique" data-testid="footer-link-equipement"><span className="text-gray-400 hover:text-neon-purple transition-colors text-sm cursor-pointer">Équipement technique du bâtiment</span></Link></li>
              <li><Link href="/activites/optimisation-energetique" data-testid="footer-link-optimisation"><span className="text-gray-400 hover:text-neon-purple transition-colors text-sm cursor-pointer">Optimisation énergétique</span></Link></li>
              <li><Link href="/activites/energie-durable" data-testid="footer-link-energie"><span className="text-gray-400 hover:text-neon-purple transition-colors text-sm cursor-pointer">Énergie et construction durable</span></Link></li>
              <li><Link href="/activites/pilotage-projets" data-testid="footer-link-pilotage"><span className="text-gray-400 hover:text-neon-purple transition-colors text-sm cursor-pointer">Pilotage de projets</span></Link></li>
              <li><Link href="/activites/complementaires" data-testid="footer-link-complementaires"><span className="text-gray-400 hover:text-neon-purple transition-colors text-sm cursor-pointer">Activités complémentaires</span></Link></li>
            </ul>
          </div>
          
          {/* NOS PROJETS */}
          <div>
            <h3 className="text-lg font-semibold text-neon-green mb-4">NOS PROJETS</h3>
            <ul className="space-y-2">
              <li><Link href="/projets/alimentaire" data-testid="footer-link-alimentaire"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Alimentaire</span></Link></li>
              <li><Link href="/projets/centrales-energie" data-testid="footer-link-centrales"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Centrales d'Énergie</span></Link></li>
              <li><Link href="/projets/commerce" data-testid="footer-link-commerce"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Commerce</span></Link></li>
              <li><Link href="/projets/datacenter" data-testid="footer-link-datacenter"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Datacenter & Télécommunications</span></Link></li>
              <li><Link href="/projets/education" data-testid="footer-link-education"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Éducation</span></Link></li>
              <li><Link href="/projets/industrie" data-testid="footer-link-industrie"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Industrie</span></Link></li>
              <li><Link href="/projets/logement" data-testid="footer-link-logement"><span className="text-gray-400 hover:text-neon-green transition-colors text-sm cursor-pointer">Logement</span></Link></li>
            </ul>
          </div>
          
          {/* JOBS & CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-neon-blue mb-4">JOBS & CONTACT</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/jobs/postes-ouverts" data-testid="footer-link-postes"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Postes ouverts</span></Link></li>
              <li><Link href="/jobs/candidatures" data-testid="footer-link-candidatures"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Candidatures spontanées</span></Link></li>
              <li><Link href="/jobs/stages" data-testid="footer-link-stages"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Stages</span></Link></li>
              <li><Link href="/contact" data-testid="footer-link-coordonnees"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Nos coordonnées</span></Link></li>
              <li><Link href="/contact/transport" data-testid="footer-link-transport"><span className="text-gray-400 hover:text-neon-blue transition-colors text-sm cursor-pointer">Venir en bus</span></Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Alla Chihab Engineering. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors" data-testid="social-linkedin">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors" data-testid="social-twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors" data-testid="social-facebook">
              <i className="fab fa-facebook text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
