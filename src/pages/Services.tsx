import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Plane,
  Activity,
  BarChart3,
  AlertCircle,
  Ruler,
  Calculator,
  FileText,
  DollarSign,
  Building2,
  Video,
  Camera,
  Share2,
} from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const droneServices = [
    {
      icon: Activity,
      title: t('services.drone.ndvi'),
      description: t('services.drone.ndviDesc'),
    },
    {
      icon: BarChart3,
      title: t('services.drone.yield'),
      description: t('services.drone.yieldDesc'),
    },
    {
      icon: AlertCircle,
      title: t('services.drone.damage'),
      description: t('services.drone.damageDesc'),
    },
    {
      icon: Ruler,
      title: t('services.drone.area'),
      description: t('services.drone.areaDesc'),
    },
  ];

  const accountingServices = [
    {
      icon: DollarSign,
      title: t('services.accounting.tax'),
      description: t('services.accounting.taxDesc'),
    },
    {
      icon: FileText,
      title: t('services.accounting.payroll'),
      description: t('services.accounting.payrollDesc'),
    },
    {
      icon: Building2,
      title: t('services.accounting.business'),
      description: t('services.accounting.businessDesc'),
    },
  ];

  const mediaServices = [
    {
      icon: Camera,
      title: t('services.media.dronePhoto'),
      description: t('services.media.dronePhotoDesc'),
    },
    {
      icon: Video,
      title: t('services.media.promo'),
      description: t('services.media.promoDesc'),
    },
    {
      icon: Share2,
      title: t('services.media.social'),
      description: t('services.media.socialDesc'),
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
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Drone Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Plane className="text-accent-gold mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-serif font-bold text-primary-dark mb-4">
              {t('services.drone.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.drone.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {droneServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <service.icon className="text-blue-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting Services */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Calculator className="text-accent-gold mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-serif font-bold text-primary-dark mb-4">
              {t('services.accounting.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.accounting.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {accountingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow"
              >
                <service.icon className="text-amber-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Video className="text-accent-gold mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-serif font-bold text-primary-dark mb-4">
              {t('services.media.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.media.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mediaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow"
              >
                <service.icon className="text-purple-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

