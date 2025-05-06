'use client'

import { motion } from "framer-motion"
import { Building2, Target, Trophy, Users2 } from "lucide-react"
import { useTranslation } from 'next-i18next'; 
import '../../../i18n'

export default function Expirencie (){
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
    <div className="max-w-[1200px] mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#123c6f] mb-4">{t("experience_title")}</h2>
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto text-justify">
          {t("experience_paragraph1")}
        </p>
        <br />
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto text-justify">
          {t("experience_paragraph2")}
        </p>
      </motion.div>
  
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
        >
          <Users2 className="h-12 w-12 text-[#f35425] mb-6" />
          <h3 className="text-2xl font-semibold text-[#123c6f] mb-4">{t("team_title")}</h3>
          <p className="text-gray-600">{t("team_description")}</p>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
        >
          <Target className="h-12 w-12 text-[#f35425] mb-6" />
          <h3 className="text-2xl font-semibold text-[#123c6f] mb-4">{t("mission_title")}</h3>
          <p className="text-gray-600">{t("mission_description")}</p>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
        >
          <Building2 className="h-12 w-12 text-[#f35425] mb-6" />
          <h3 className="text-2xl font-semibold text-[#123c6f] mb-4">{t("structure_title")}</h3>
          <p className="text-gray-600">{t("structure_description")}</p>
        </motion.div>
      </div>
  
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 bg-[#123c6f] rounded-2xl p-12 text-white text-center"
      >
        <Trophy className="h-16 w-16 text-[#f35425] mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">{t("experience_section_title")}</h3>
        <p className="text-xl mb-8">{t("experience_section_description")}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-[#f35425]">600+</p>
            <p className="text-sm mt-2">{t("metric_employees")}</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-[#f35425]">R$100M+</p>
            <p className="text-sm mt-2">{t("metric_vgv")}</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-[#f35425]">+8</p>
            <p className="text-sm mt-2">{t("metric_companies")}</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-[#f35425]">18+</p>
            <p className="text-sm mt-2">{t("metric_years")}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  
  )
}
