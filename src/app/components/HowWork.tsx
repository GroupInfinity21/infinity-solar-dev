'use client'

import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next';
import '../../../i18n';

export default function HowWork () {

  const { t } = useTranslation();

    return (
      <section className="py-10 bg-white md:py-16">
      <div className="max-w-[1200px] h-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#123c6f] mb-4">
            {t("how_it_works_title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("how_it_works_description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
              alt="Solar Panel Installation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-[400px]"
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#f35425] h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-[#123c6f] mb-2 mt-2">
                {t("implantation_phase_title")}
              </h3>
              <p className="text-gray-600 text-xs md:text-custom">
                {t("implantation_phase_description")}
              </p>

              <h3 className="text-xl font-semibold text-[#123c6f] mb-2 mt-2">
                {t("operation_title")}
              </h3>
              <p className="text-gray-600 text-xs md:text-custom">
                {t("operation_description")}
              </p>

              <h3 className="text-xl font-semibold text-[#123c6f] mb-2 mt-2">
                {t("receiving_title")}
              </h3>
              <p className="text-gray-600 text-xs md:text-custom">
                {t("receiving_description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    )
}
