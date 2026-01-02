import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Développement Web & Mobile', level: 'Intermédiaire' },
    { name: 'Récupération de données', level: 'Expert' },
    { name: 'Design Graphique avec Canva', level: 'Intermédiaire' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            À propos de moi
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Passionné par l'innovation numérique
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="assets/img/profile-img2.png"
                      alt="Jaurès ZOGBA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white p-2 rounded-full">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Jaurès ZOGBA
                </h3>
                <p className="text-blue-600 font-semibold mb-6">
                  Développeur Web & Mobile
                </p>

                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <i className="bi bi-envelope text-blue-600"></i>
                    <span className="text-gray-700">jaureszogba@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <i className="bi bi-telephone text-blue-600"></i>
                    <span className="text-gray-700">+229 01 45 41 32 33</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <i className="bi bi-geo-alt text-blue-600"></i>
                    <span className="text-gray-700">Abomey-Calavi, Bénin</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-700">
                Passionné par la création d'interfaces modernes, intuitives et dynamiques, 
                je m'assure que chaque projet soit une véritable expérience utilisateur.
              </p>
              <p className="text-gray-700">
                En parallèle, je suis également spécialisé dans la récupération de données 
                perdues ou supprimées sur divers supports numériques, tels que les disques 
                durs, clés USB, cartes SD.
              </p>
              <p className="text-gray-700">
                Je réalise également des affiches et logos avec Canva, alliant créativité 
                et professionnalisme pour répondre à vos besoins visuels.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">
                Compétences principales
              </h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === 'Expert' ? '90%' : '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="https://drive.google.com/file/d/1QRV3NGwVuQCJgjT4LDW_DZqW8v4iUy7A/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <i className="bi bi-download"></i>
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;