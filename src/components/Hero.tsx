import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState<string>('');
  const roles: string[] = ['Développeur Web ', 'Développeur Mobile ', 'Récupérateur de Données '];
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentRole = roles[currentRoleIndex];
      if (typedText.length < currentRole.length) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [typedText, currentRoleIndex]);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Jaurès
              <span className="text-blue-400">_ZOGBA</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-light mb-6 h-12"
            >
              <span className="text-blue-300">{typedText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl"
            >
              Passionné par la création d'interfaces modernes, intuitives et dynamiques, 
              je m'assure que chaque projet soit une véritable expérience utilisateur.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Mes projets
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Contact
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6"
            >
             {/*  {['dribbble', 'behance', 'github', 'linkedin'].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className={`bi bi-${icon} text-2xl`}></i>
                </motion.a>
              ))} */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-5 border-blue-400/30 rounded-full w-2xl h-2xl mx-auto"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-5 border-purple-400/20 rounded-full w-2xl h-2xl"
              />
              
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-white/60 hover:text-white">
            <i className="bi bi-chevron-down text-3xl"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;