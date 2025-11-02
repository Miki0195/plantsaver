import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Zap,
  Award,
  Shield,
  Cpu,
  MapPin,
} from 'lucide-react';

const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      title: t('whyUs.precision.title'),
      description: t('whyUs.precision.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: t('whyUs.speed.title'),
      description: t('whyUs.speed.description'),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Award,
      title: t('whyUs.expertise.title'),
      description: t('whyUs.expertise.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: t('whyUs.reliability.title'),
      description: t('whyUs.reliability.description'),
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Cpu,
      title: t('whyUs.technology.title'),
      description: t('whyUs.technology.description'),
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: MapPin,
      title: t('whyUs.local.title'),
      description: t('whyUs.local.description'),
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              {t('whyUs.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  <div
                    className={`bg-gradient-to-br ${benefit.color} p-8 flex items-center justify-center`}
                  >
                    <benefit.icon
                      className="text-white transform group-hover:scale-110 transition-transform"
                      size={56}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              { number: '50+', label: 'Hektár felmérve' },
              { number: '30+', label: 'Elégedett ügyfél' },
              { number: '2+', label: 'Év tapasztalat' },
              { number: '100K+', label: 'Generált megtekintés' },
              { number: '24/7', label: 'Elérhetőség' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-serif font-bold text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

