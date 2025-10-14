import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  serviceType: string;
  budget: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would integrate with your backend or email service
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary-dark mb-8">
                {t('contact.info.title')}
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-gold/10 p-3 rounded-lg">
                    <MapPin className="text-accent-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Cím</h3>
                    <p className="text-gray-600">{t('contact.info.address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-gold/10 p-3 rounded-lg">
                    <Phone className="text-accent-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Telefon</h3>
                    <a
                      href={`tel:${t('contact.info.phone')}`}
                      className="text-gray-600 hover:text-accent-gold transition-colors"
                    >
                      {t('contact.info.phone')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-gold/10 p-3 rounded-lg">
                    <Mail className="text-accent-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">E-mail</h3>
                    <a
                      href={`mailto:${t('contact.info.email')}`}
                      className="text-gray-600 hover:text-accent-gold transition-colors"
                    >
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map - Mosonmagyaróvár */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43036.67883419625!2d17.230976999999997!3d47.8681469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b881634aedb0d%3A0x400c4290c1e1790!2sMosonmagyar%C3%B3v%C3%A1r%2C%209200!5e0!3m2!1shu!2shu!4v1710000000000!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mosonmagyaróvár térkép"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">
                  {t('contact.form.title')}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.serviceType')} *
                    </label>
                    <select
                      {...register('serviceType', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    >
                      <option value="">{t('contact.form.selectService')}</option>
                      <option value="drone">{t('contact.form.droneSurvey')}</option>
                      <option value="accounting">{t('contact.form.accounting')}</option>
                      <option value="video">{t('contact.form.videoContent')}</option>
                    </select>
                    {errors.serviceType && (
                      <span className="text-red-500 text-sm">Kérjük válasszon szolgáltatást</span>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    >
                      <option value="">{t('contact.form.selectBudget')}</option>
                      <option value="under100">{t('contact.form.under100')}</option>
                      <option value="100to300">{t('contact.form.100to300')}</option>
                      <option value="300to500">{t('contact.form.300to500')}</option>
                      <option value="above500">{t('contact.form.above500')}</option>
                    </select>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.companyName')} *
                    </label>
                    <input
                      type="text"
                      {...register('companyName', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                    {errors.companyName && (
                      <span className="text-red-500 text-sm">Kötelező mező</span>
                    )}
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.contactName')} *
                    </label>
                    <input
                      type="text"
                      {...register('contactName', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                    {errors.contactName && (
                      <span className="text-red-500 text-sm">Kötelező mező</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">Érvényes email cím szükséges</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">Kötelező mező</span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gold hover:bg-accent-lightGold text-primary-dark font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>{t('contact.form.sending')}</span>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>{t('contact.form.submit')}</span>
                      </>
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      {t('contact.form.success')}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {t('contact.form.error')}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

