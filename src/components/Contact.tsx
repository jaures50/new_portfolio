import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configurez EmailJS avec vos credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Localisation',
      details: ['Abomey-Calavi', 'IITA Camara Laye, Bénin']
    },
    {
      icon: 'bi-telephone',
      title: 'Téléphone',
      details: ['+229 01 45 41 32 33', '+229 01 69 69 81 22']
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      details: ['jaureszogba@gmail.com']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Contactez-moi
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discutons de votre projet et trouvons ensemble la meilleure solution
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`bi ${info.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-300">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-700"
            ><div className="space-y-4">
                {/* Carte Téléphone */}
                <a
                  href="tel:+2290145413233"
                  className="group relative flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl hover:from-blue-600/20 hover:to-blue-800/20 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
                >
                  {/* Icône */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>

                  {/* Texte */}
                  <div className="flex-1">
                    <div className="text-sm text-blue-400 font-medium">Téléphone ( Auto ) </div>
                    <div className="text-white text-lg font-semibold group-hover:text-blue-200 transition-colors">
                      +229 01 45 41 32 33
                    </div>
                  </div>

                  {/* Badge d'action */}
                  <span className="text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Appeler →
                  </span>
                </a>

                {/* Carte Email */}
                <a
                  href="mailto:jaureszogba@gmail.com"
                  className="group relative flex items-center gap-4 p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                >
                  {/* Icône */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Texte */}
                  <div className="flex-1">
                    <div className="text-sm text-purple-400 font-medium">Email</div>
                    <div className="text-white text-lg font-semibold group-hover:text-purple-200 transition-colors truncate">
                      jaureszogba@gmail.com
                    </div>
                  </div>

                  {/* Badge d'action */}
                  <span className="text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Écrire →
                  </span>
                </a>
              </div>

            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Votre Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Votre Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sujet du message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-500 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <i className="bi bi-check-circle text-green-400"></i>
                    <span>Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/30 border border-red-500 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <i className="bi bi-exclamation-triangle text-red-400"></i>
                    <span>Une erreur est survenue. Veuillez réessayer ou me contacter directement.</span>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  'Envoyer le message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;