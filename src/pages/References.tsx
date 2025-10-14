import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Facebook } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';

const References: React.FC = () => {
  const { t } = useTranslation();

  // Placeholder images - replace with actual images
  const portfolio = [
    {
      id: 1,
      title: 'NDVI Térképezés - 200 hektár',
      category: 'Drónfelmérés',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Vadkár Felmérés',
      category: 'Drónfelmérés',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Promóciós Film',
      category: 'Videós Tartalom',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Területmérés és Térképezés',
      category: 'Drónfelmérés',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Légi Fotózás',
      category: 'Fotós Tartalom',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'Social Media Kampány',
      category: 'Videós Tartalom',
      image: 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=800&h=600&fit=crop',
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
              {t('references.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('references.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-accent-gold text-primary-dark text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Instagram className="text-accent-gold mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-serif font-bold text-primary-dark mb-4">
              {t('references.socialFeed')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Kövessen minket a közösségi médiában a legfrissebb projektekért
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/plant_saver_and_accounting/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Instagram size={20} />
                <span>Instagram</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564863446922"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Facebook size={20} />
                <span>Facebook</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Instagram Feed */}
          <InstagramFeed 
            accessToken={import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN}
            limit={8}
          />
        </div>
      </section>
    </div>
  );
};

export default References;

