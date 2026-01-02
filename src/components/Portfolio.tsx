import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const portfolioItems: PortfolioItem[] = [
    { id: 1, title: 'AlloJaures', category: 'logos', imageUrl: 'assets/img/Canva/logo1.jpg' },
    { id: 4, title: 'Carte de Visite face 1', category: 'cartes', imageUrl: "assets/img/Canva/carte_face1.png" },
    { id: 5, title: 'Sparow Parfun', category: 'logos', imageUrl: 'assets/img/Canva/logo5.jpg' },
    { id: 6, title: "Evenement COP30-1 'Ciaivertes.bj'", category: 'affiches', imageUrl: 'assets/img/Canva/affiche7.jpg' },
    { id: 6, title: "Evenement COP30-2 'Ciaivertes.bj'", category: 'affiches', imageUrl: 'assets/img/Canva/affiche8.jpg' },
    { id: 6, title: 'Anif ', category: 'affiches', imageUrl: 'assets/img/Canva/affiche9.jpg' },
    { id: 6, title: 'Machine de riz, etc', category: 'affiches', imageUrl: 'assets/img/Canva/affiche10.jpg' },
    { id: 6, title: "Guide d'utilisation charbon propre 'Ciaiverts.bj'", category: 'affiches', imageUrl: 'assets/img/Canva/affiche11.jpg' },
    { id: 6, title: 'Selos', category: 'affiches', imageUrl: 'assets/img/Canva/affiche2.jpg' },
    { id: 6, title: 'Agicultures Services', category: 'affiches', imageUrl: 'assets/img/Canva/affiche3.jpg' },
    { id: 6, title: '✨ Réveillon 2025 ✨1', category: 'affiches', imageUrl: 'assets/img/Canva/affiche4.jpg' },
    { id: 6, title: '✨ Réveillon 2025 ✨2', category: 'affiches', imageUrl: 'assets/img/Canva/affiche5.jpg' },
    { id: 6, title: '✨ Réveillon 2025 ✨3', category: 'affiches', imageUrl: 'assets/img/Canva/affiche6.jpg' },
    { id: 6, title: 'Cosmetique Boutiques', category: 'logos', imageUrl: 'assets/img/Canva/logo8.jpg' },
    { id: 8, title: "Ciaivertes : 'Ciaivertes.bj'", category: 'web', imageUrl: "assets/img/Canva/site1.png" },
    { id: 9, title: 'MessanAgro', category: 'logos', imageUrl: 'assets/img/Canva/logo2.jpg' },
    { id: 10, title: 'Rosaline', category: 'logos', imageUrl: 'assets/img/Canva/logo3.jpg' },
    { id: 11, title: 'Marie-Flaubert', category: 'logos', imageUrl: 'assets/img/Canva/logo4.jpg' },
    { id: 12, title: 'SellBook', category: 'logos', imageUrl: 'assets/img/Canva/Logo6.jpg' },
    { id: 13, title: 'Blaise Arius ZOGBA', category: 'logos', imageUrl: 'assets/img/Canva/logo7.jpg' },
    { id: 14, title: 'Bâche Événementielle', category: 'baches', imageUrl: "assets/img/Canva/bache1.jpg" },
    { id: 15, title: 'Carte de Visite face 2', category: 'cartes', imageUrl: "assets/img/Canva/carte_face2.png" },


  ];

  const filters = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'logos', label: 'Logos' },
    { id: 'affiches', label: 'Affiches' },
    { id: 'baches', label: 'Bâches' },
    { id: 'cartes', label: 'Cartes de visite' },
    { id: 'web', label: 'Site Web & App Mobile' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-red">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations en design graphique et développement web
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg "
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />


                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {filters.find(f => f.id === item.category)?.label}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;