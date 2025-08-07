import { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface SearchResult {
  title: string;
  href: string;
  section: string;
  excerpt: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Données de recherche (contenu des pages)
  const searchData: SearchResult[] = [
    // Pages À propos
    {
      title: "Notre Histoire",
      href: "/apropos/histoire",
      section: "À propos",
      excerpt: "Fondé en 1981 au Luxembourg, Alla Chihab Engineering est un bureau d'ingénierie conseil spécialisé dans l'équipement technique du bâtiment et l'optimisation énergétique."
    },
    {
      title: "Notre Équipe",
      href: "/apropos/equipe",
      section: "À propos",
      excerpt: "Une équipe de 42 experts passionnés : ingénieurs, techniciens et gestionnaires de projets unis par l'excellence technique."
    },
    {
      title: "Nos Bureaux",
      href: "/apropos/bureaux",
      section: "À propos",
      excerpt: "3 bureaux stratégiquement situés au Luxembourg avec des espaces modernes équipés des dernières technologies."
    },
    {
      title: "Nos Outils",
      href: "/apropos/outils",
      section: "À propos",
      excerpt: "Logiciels de calcul et conception (AutoCAD, Revit, PHPP) et équipements de mesure haute précision."
    },
    {
      title: "Plateforme d'Échange",
      href: "/apropos/plateforme",
      section: "À propos",
      excerpt: "Espace collaboratif sécurisé pour le partage de documents et le suivi de projets en temps réel."
    },

    // Pages Activités
    {
      title: "Équipement Technique du Bâtiment",
      href: "/activites/equipement-technique",
      section: "Activités",
      excerpt: "Conception et installation de systèmes HVAC, plomberie, électricité et sécurité pour tous types de bâtiments."
    },
    {
      title: "Optimisation Énergétique",
      href: "/activites/optimisation-energetique",
      section: "Activités",
      excerpt: "Audits énergétiques, solutions d'efficacité et réduction des consommations pour un bâtiment durable."
    },
    {
      title: "Énergie et Construction Durable",
      href: "/activites/energie-durable",
      section: "Activités",
      excerpt: "Intégration d'énergies renouvelables, bâtiments passifs et solutions écologiques innovantes."
    },
    {
      title: "Pilotage de Projets",
      href: "/activites/pilotage-projets",
      section: "Activités",
      excerpt: "Gestion complète de projets techniques : planification, coordination et suivi jusqu'à la livraison."
    },
    {
      title: "Activités Complémentaires",
      href: "/activites/complementaires",
      section: "Activités",
      excerpt: "Formations techniques, audits spécialisés et conseils en réglementation énergétique."
    },

    // Pages Projets
    {
      title: "Projets Alimentaire",
      href: "/projets/alimentaire",
      section: "Projets",
      excerpt: "Installations techniques pour l'industrie agroalimentaire : chambres froides, systèmes de ventilation et process."
    },
    {
      title: "Centrales d'Énergie",
      href: "/projets/centrales-energie",
      section: "Projets",
      excerpt: "Conception et maintenance de centrales de production d'énergie renouvelable et systèmes de cogénération."
    },
    {
      title: "Projets Commerce",
      href: "/projets/commerce",
      section: "Projets",
      excerpt: "Équipements techniques pour centres commerciaux, magasins et espaces de vente : climatisation, éclairage, sécurité."
    },
    {
      title: "Datacenter & Télécommunications",
      href: "/projets/datacenter",
      section: "Projets",
      excerpt: "Infrastructures critiques pour datacenters : refroidissement, alimentation de secours et câblage haute densité."
    },
    {
      title: "Projets Éducation",
      href: "/projets/education",
      section: "Projets",
      excerpt: "Équipements pour établissements scolaires et universitaires : ventilation, chauffage et systèmes pédagogiques."
    },
    {
      title: "Immeubles Administratifs",
      href: "/projets/administration",
      section: "Projets",
      excerpt: "Solutions techniques pour bureaux et administrations : confort thermique, éclairage et gestion technique centralisée."
    },
    {
      title: "Projets Industrie",
      href: "/projets/industrie",
      section: "Projets",
      excerpt: "Installations industrielles complexes : process techniques, ventilation industrielle et utilités."
    },
    {
      title: "Projets Logement",
      href: "/projets/logement",
      section: "Projets",
      excerpt: "Équipements résidentiels : chauffage, ventilation, plomberie et domotique pour le confort des habitants."
    },
    {
      title: "Maisons de Soins",
      href: "/projets/soins",
      section: "Projets",
      excerpt: "Installations techniques spécialisées pour établissements de santé : ventilation médicale, fluides médicaux."
    },

    // Pages Jobs
    {
      title: "Postes Ouverts",
      href: "/jobs/postes-ouverts",
      section: "Emploi",
      excerpt: "Opportunités d'emploi chez Alla Chihab Engineering : ingénieurs, techniciens et chefs de projet."
    },
    {
      title: "Candidatures Spontanées",
      href: "/jobs/candidatures",
      section: "Emploi",
      excerpt: "Rejoignez notre équipe ! Envoyez-nous votre candidature spontanée pour des opportunités futures."
    },
    {
      title: "Stages",
      href: "/jobs/stages",
      section: "Emploi",
      excerpt: "Programmes de stages pour étudiants en ingénierie : expérience pratique et encadrement professionnel."
    },

    // Pages Contact
    {
      title: "Nos Coordonnées",
      href: "/contact",
      section: "Contact",
      excerpt: "Contactez Alla Chihab Engineering : téléphone, email et adresses de nos bureaux au Luxembourg."
    },
    {
      title: "Guidage vers nos Bureaux",
      href: "/contact/bureaux",
      section: "Contact",
      excerpt: "Informations détaillées pour nous rendre visite : adresses, plans d'accès et horaires d'ouverture."
    },
    {
      title: "Transport",
      href: "/contact/transport",
      section: "Contact",
      excerpt: "Options de transport pour nous rejoindre : transports en commun, voiture et solutions durables."
    },

    // Page Actualités
    {
      title: "Actualités",
      href: "/actualites",
      section: "Actualités",
      excerpt: "Dernières nouvelles d'Alla Chihab Engineering : projets réalisés, innovations et événements du secteur."
    }
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulation d'un délai de recherche
    const timeoutId = setTimeout(() => {
      const filteredResults = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filteredResults.slice(0, 10)); // Limiter à 10 résultats
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Search Modal */}
      <div className="relative w-full max-w-2xl mx-4">
        <div className="glass-blue rounded-2xl overflow-hidden shadow-2xl">
          {/* Search Input */}
          <div className="p-6 border-b border-white/10">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher dans le site..."
                className="w-full bg-transparent text-white placeholder-gray-400 text-lg outline-none"
                autoFocus
                data-testid="search-input"
              />
              <i className="fas fa-search absolute right-0 top-1/2 transform -translate-y-1/2 text-neon-blue"></i>
            </div>
          </div>
          
          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {!query.trim() && (
              <div className="p-6 text-center text-gray-400">
                <i className="fas fa-search text-3xl mb-4 text-neon-blue"></i>
                <p>Tapez quelque chose pour commencer la recherche</p>
              </div>
            )}
            
            {query.trim() && isSearching && (
              <div className="p-6 text-center text-gray-400">
                <i className="fas fa-spinner fa-spin text-2xl mb-4 text-neon-blue"></i>
                <p>Recherche en cours...</p>
              </div>
            )}
            
            {query.trim() && !isSearching && results.length === 0 && (
              <div className="p-6 text-center text-gray-400">
                <i className="fas fa-search-minus text-3xl mb-4 text-neon-purple"></i>
                <p>Aucun résultat trouvé pour "{query}"</p>
                <p className="text-sm mt-2">Essayez d'autres mots-clés</p>
              </div>
            )}
            
            {results.length > 0 && (
              <div className="p-2">
                {results.map((result, index) => (
                  <Link key={index} href={result.href} onClick={handleResultClick}>
                    <div className="p-4 hover:bg-white/5 rounded-xl transition-colors duration-200 cursor-pointer" data-testid={`search-result-${index}`}>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="fas fa-file-alt text-neon-blue text-sm"></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-white font-semibold">{result.title}</h3>
                            <span className="text-neon-green text-xs px-2 py-1 bg-neon-green/10 rounded">
                              {result.section}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {result.excerpt}
                          </p>
                        </div>
                        <div className="text-gray-500 text-xs flex-shrink-0">
                          <i className="fas fa-external-link-alt"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-white/10 text-center">
            <div className="text-xs text-gray-500">
              Appuyez sur <kbd className="px-2 py-1 bg-white/10 rounded text-white">Échap</kbd> pour fermer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}