import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// TikTok Icon Component
const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 20, 
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-accent-gold mb-4">
              Plant Saver & Accounting
            </h3>
            <p className="text-gray-300 text-sm mb-4">X FrameByKornel</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61564863446922"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/plant_saver_and_accounting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@_plantsaver_?_r=1&_t=ZN-914Nr8BTbzq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-accent-gold mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('services.drone.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('services.accounting.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('services.media.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('services.webdev.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-accent-gold mb-4">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/why-us"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('nav.whyUs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/references"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('nav.references')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-accent-gold mb-4">
              {t('contact.info.title')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-accent-gold flex-shrink-0" />
                <a
                  href={`tel:${t('contact.info.phone')}`}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('contact.info.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-accent-gold flex-shrink-0" />
                <a
                  href={`mailto:${t('contact.info.email')}`}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  {t('contact.info.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Plant Saver & Accounting Kft. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-accent-gold text-sm transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-accent-gold text-sm transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

