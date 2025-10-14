import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Plane,
  Calculator,
  Video,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,
} from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Plane,
      title: t('services.drone.title'),
      description: t('services.drone.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calculator,
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Video,
      title: t('services.media.title'),
      description: t('services.media.description'),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('whyUs.precision.title'),
      description: t('whyUs.precision.description'),
    },
    {
      icon: Zap,
      title: t('whyUs.speed.title'),
      description: t('whyUs.speed.description'),
    },
    {
      icon: Shield,
      title: t('whyUs.reliability.title'),
      description: t('whyUs.reliability.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-dark">
          <div className="absolute inset-0 bg-black/40" />
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent-gold hover:bg-accent-lightGold text-primary-dark font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-white animate-bounce" size={32} />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link to="/services">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    <div
                      className={`bg-gradient-to-br ${service.color} p-8 flex items-center justify-center`}
                    >
                      <service.icon className="text-white" size={64} strokeWidth={1.5} />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-primary-dark mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              {t('whyUs.title')}
            </h2>
            <p className="text-xl text-gray-300">{t('whyUs.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-accent-gold/20 hover:border-accent-gold/50 transition-all"
              >
                <benefit.icon className="text-accent-gold mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-gold">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-6">
              {t('hero.cta')}
            </h2>
            <p className="text-xl text-primary-dark/80 mb-8 max-w-2xl mx-auto">
              Precíziós technológia és szakértelem - egy helyen
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-dark hover:bg-primary-blue text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {t('nav.contact')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

