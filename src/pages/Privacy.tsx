import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Shield className="mx-auto text-accent-gold mb-6" size={64} />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Adatvédelmi Nyilatkozat
            </h1>
            <p className="text-xl text-gray-300">
              Az Ön adatainak védelme kiemelten fontos számunkra
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Icons Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Lock className="mx-auto text-primary-blue mb-3" size={40} />
                <h3 className="font-semibold text-primary-dark">Biztonságos</h3>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Eye className="mx-auto text-green-600 mb-3" size={40} />
                <h3 className="font-semibold text-primary-dark">Átlátható</h3>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
                <FileText className="mx-auto text-accent-gold mb-3" size={40} />
                <h3 className="font-semibold text-primary-dark">GDPR Megfelelő</h3>
              </div>
            </div>

            {/* Placeholder Content - User will replace this */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <p className="text-blue-800 font-semibold mb-2">
                  📄 Itt töltheted fel az adatvédelmi dokumentumot
                </p>
                <p className="text-blue-700 text-sm">
                  Ez egy placeholder tartalom. Cseréld le a saját adatvédelmi nyilatkozatoddal.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center">
                <Shield className="mr-3 text-accent-gold" size={28} />
                1. Bevezetés
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg a bevezető szöveget az adatvédelemről...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center">
                <FileText className="mr-3 text-accent-gold" size={28} />
                2. Adatkezelő adatai
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg a cég adatait, elérhetőségeket...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center">
                <Lock className="mr-3 text-accent-gold" size={28} />
                3. Kezelt adatok köre
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt sorold fel, milyen adatokat kezeltek...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center">
                <Eye className="mr-3 text-accent-gold" size={28} />
                4. Az adatkezelés célja
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le, miért kezeled az adatokat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                5. Az adatkezelés jogalapja
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg a jogi alapokat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                6. Az adatkezelés időtartama
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le, meddig őrzöd az adatokat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                7. Az érintettek jogai
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt sorold fel a felhasználók jogait...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                8. Adatbiztonság
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le a biztonsági intézkedéseket...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                9. Cookie-k használata
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt adj információt a cookie-król...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                10. Kapcsolat
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg az elérhetőségeket adatvédelmi kérdésekkel kapcsolatban...]
              </p>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Utoljára frissítve: [Dátum]
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

