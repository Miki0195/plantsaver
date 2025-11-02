import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Radio,
  Calculator,
  Video,
  ChevronDown,
  Building2,
  Factory,
  Landmark,
  Store,
  TreePine,
  Truck,
  Globe,
  Award,
  Monitor,
} from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Radio,
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
    {
      icon: Monitor,
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const brandLogos = [
    { icon: Building2, name: 'Brand 1' },
    { icon: Factory, name: 'Brand 2' },
    { icon: Landmark, name: 'Brand 3' },
    { icon: Store, name: 'Brand 4' },
    { icon: TreePine, name: 'Brand 5' },
    { icon: Truck, name: 'Brand 6' },
    { icon: Globe, name: 'Brand 7' },
    { icon: Award, name: 'Brand 8' },
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
            {/* <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-12">
              {t('hero.title')}
            </h1> */}
            
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-7xl mx-auto px-4 md:px-0">
              {[
                {
                  title: 'Fotós-videós tartalmak készítése',
                  image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
                  gradient: 'from-purple-500/80 to-pink-500/80'
                },
                {
                  title: 'Weblap készítés',
                  image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
                  gradient: 'from-blue-500/80 to-cyan-500/80'
                },
                {
                  title: 'Mezőgazdasági felmérések',
                  image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
                  gradient: 'from-green-500/80 to-emerald-500/80'
                },
                {
                  title: 'Könyvelés',
                  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
                  gradient: 'from-amber-500/80 to-orange-500/80'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group relative h-48 sm:h-56 md:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center leading-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-accent-gold hover:bg-accent-lightGold text-primary-dark font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {t('hero.cta')}
              </Link>
            </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Brand Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary-blue overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Partnereink
            </h2>
            <p className="text-xl text-gray-300">Akikkel már együtt dolgoztunk</p>
          </motion.div>

          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * brandLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless infinite scroll */}
              {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % brandLogos.length) * 0.05 }}
                  className="flex-shrink-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-accent-gold group"
                  style={{ width: '200px', height: '150px' }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <brand.icon 
                      className="text-primary-dark group-hover:text-accent-gold transition-colors duration-300" 
                      size={64} 
                      strokeWidth={1.5} 
                    />
                    <p className="mt-4 text-sm font-semibold text-gray-600 group-hover:text-primary-dark transition-colors">
                      {brand.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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

