import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../types';

const Resume: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Développement du site web de CIAI Vertes",
      period: "Août 2025",
      company: "Site vitrine 'ciaivertes.bj'",
      description: [
        "Conception et mise en ligne du site vitrine de l'organisation",
        "Présentation des services liés aux énergies renouvelables",
        "Optimisation pour une navigation fluide et meilleure visibilité"
      ],
      lien: "https://ciaivertes.bj "
    },
    {
      title: "Développement de la Plateforme EduConnect",
      period: "Juillet 2024",
      company: "Connexion des écoles",
      description: [
        "Système de publication d'actualités pour écoles",
        "Calendrier interactif pour événements scolaires",
        "Système d'authentification sécurisé"
      ],
      lien: undefined
    },
    {
      title: "Développement de YUM VIBE'S FOOD",
      period: "Juillet 2024",
      company: "Application de restauration",
      description: [
        "Plateforme de commande en ligne",
        "Système de gestion de livraison",
        "Interface utilisateur intuitive"
      ],
      lien: undefined
    }
  ];

  const educations = [
    {
      degree: "Baccalauréat",
      year: "2023",
      institution: "Cp Ste Bakhita, Calavi"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Parcours Professionnel
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expériences et formations qui ont façonné mon expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar with contact and skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                  <img
                    src="assets/img/profile-img2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Informations de contact
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { icon: 'bi-geo-alt', text: 'IITA Calavi, Bénin' },
                  { icon: 'bi-envelope', text: 'jaureszogba@gmail.com' },
                  { icon: 'bi-phone', text: '+229 0145413233 / 0166471512' },
                  { icon: 'bi-linkedin', text: 'linkedin.com/in/jaur%C3%A8s-zogba-6a47282a3/' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className={`bi ${item.icon} text-blue-600`}></i>
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Centres d'intérêt</h4>
                <div className="flex flex-wrap gap-2">
                  {['Bricolage', ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <i className="bi bi-briefcase text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Expériences Professionnelles
                </h3>
              </div>

              <div className="space-y-6 relative before:absolute before:left-7 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-6 top-0 w-3 h-3 bg-blue-500 rounded-full z-10"></div>
                    <div className="bg-blue-50 rounded-xl p-5">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">
                          {exp.title}
                        </h4>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        <i className="bi bi-building mr-2"></i>
                        {exp.company}
                      </p>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <i className="bi bi-check-circle text-green-500 mr-2 mt-1"></i>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <i className="bi bi-mortarboard text-2xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Formation
                </h3>
              </div>

              <div className="space-y-6">
                {educations.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-green-50 rounded-xl p-5"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-gray-900">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <i className="bi bi-building mr-2"></i>
                      {edu.institution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;