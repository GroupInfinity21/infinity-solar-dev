'use client'

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import React from 'react';
import { useTranslation } from 'next-i18next'
import '../../../i18n'

export default function Faq  () {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = t('faqs', { returnObjects: true, defaultValue: [] }) as Array<{
    question: string
    answer: string
  }>

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
          <h2 className="mt-5 text-4xl font-bold text-[#123c6f] mb-4 md:mt-0">
            {t("faq_title")}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-[#123c6f]">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-[#f35425]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#f35425]" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

