'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTranslation } from 'next-i18next'; 
import '../../i18n';

export default function Invest () {

  const { t } = useTranslation();
    return(
      <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#123c6f] mb-4">{t('how_to_invest_title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('how_to_invest_description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[#123c6f]/5 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#123c6f]">1</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#123c6f] mb-2">{t('step1_title')}</h3>
                <p className="text-gray-600">{t('step1_description')}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-[#f35425] flex-shrink-0" />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[#123c6f]/5 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#123c6f]">2</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#123c6f] mb-2">{t('step2_title')}</h3>
                <p className="text-gray-600">{t('step2_description')}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-[#f35425] flex-shrink-0" />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[#123c6f]/5 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#123c6f]">3</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#123c6f] mb-2">{t('step3_title')}</h3>
                <p className="text-gray-600">{t('step3_description')}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-[#f35425] flex-shrink-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    )
}

