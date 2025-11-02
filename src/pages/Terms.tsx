import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Scale } from 'lucide-react';

const Terms: React.FC = () => {
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
            <Scale className="mx-auto text-accent-gold mb-6" size={64} />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Általános Szerződési Feltételek
            </h1>
            <p className="text-xl text-gray-300">
              Szolgáltatásaink igénybevételének feltételei
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
                <FileText className="mx-auto text-primary-blue mb-3" size={40} />
                <h3 className="font-semibold text-primary-dark">Egyértelmű</h3>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
                <h3 className="font-semibold text-primary-dark">Átlátható</h3>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
                <Scale className="mx-auto text-accent-gold mb-3" size={40} />
                <h3 className="font-semibold text-primary-dark">Jogszerű</h3>
              </div>
            </div>

            {/* Placeholder Content - User will replace this */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
                <p className="text-amber-800 font-semibold mb-2">
                  📄 Itt töltheted fel az ÁSZF dokumentumot
                </p>
                <p className="text-amber-700 text-sm">
                  Ez egy placeholder tartalom. Cseréld le a saját Általános Szerződési Feltételekkel.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center">
                <FileText className="mr-3 text-accent-gold" size={28} />
                1. Általános rendelkezések
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg az általános információkat a szerződési feltételekről...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center">
                <CheckCircle className="mr-3 text-accent-gold" size={28} />
                2. A szolgáltató adatai
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg a cég teljes adatait...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                3. Szolgáltatások köre
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt sorold fel a nyújtott szolgáltatásokat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                4. Szerződés létrejötte
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le, hogyan jön létre a szerződés...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                5. Árak és fizetési feltételek
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg az árazási információkat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                6. Teljesítés feltételei
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le a teljesítés menetét...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                7. Felelősség
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg a felelősségi szabályokat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                8. Szavatosság és jótállás
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le a szavatossági és jótállási feltételeket...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                9. Elállási jog
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg az elállási jogra vonatkozó információkat...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                10. Jogviták rendezése
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt írd le a jogviták rendezésének módját...]
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                11. Vegyes rendelkezések
              </h2>
              <p className="text-gray-700 mb-6">
                [Itt add meg az egyéb fontos információkat...]
              </p>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Hatályos: [Dátum]
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

