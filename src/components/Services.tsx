import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Création de Logos & Affiches',
      icon: 'bi-palette',
      description: 'Design graphique avec Canva pour votre identité visuelle',
      highlights: ['Logos ', 'Affiches attractives']
    },
    {
      title: 'Développement Web & Mobile',
      icon: 'bi-code-slash',
      description: 'Applications modernes et sites web ',
      highlights: ['Sites vitrines', 'Applications React', 'Apps Flutter', 'Bases de données']
    },
    {
      title: 'Récupération de Données',
      icon: 'bi-hdd',
      description: 'Récupération de fichiers perdus sur supports numériques',
      highlights: ['Disques durs', 'Clés USB', 'Cartes SD']
    },
    {
      title: 'Montage Vidéo ',
      icon: 'bi-camera-video',
      description: 'Création de contenus vidéo avec canva',
      highlights: ['Montage vidéo']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions innovantes pour propulser votre présence numérique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <i className={`bi ${service.icon} text-3xl text-blue-600 group-hover:text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="bi bi-arrow-up-right text-white"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour discuter de vos besoins et obtenir une solution sur mesure
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <span>Démarrer un projet</span>
              <i className="bi bi-arrow-right"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;