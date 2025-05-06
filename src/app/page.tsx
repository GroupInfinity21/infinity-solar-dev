'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import emailjs from 'emailjs-com'
import { useTranslation } from 'next-i18next'
import '../../i18n'

import Footer from '@/app/components/Footer'
import Faq from '@/app/components/Faq'
import HowWork from '@/app/components/HowWork'
import Expirencie from '@/app/components/Expirencie'
import Mapa from '@/app/components/Map'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import Invest from '@/app/components/Invest'

export default function Home() {
  const { t } = useTranslation()
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(t('form_error'))
      return
    }

    emailjs
      .send('service_fu2ktnd', 'template_c842hrl', formData, '5y6YB_L_SIPQakRdC')
      .then(() => toast.success(t('form_success')))
      .catch((error) => toast.error(t('form_error'), error))

    setFormData({
      name: '',
      email: '',
      phone: '',
    })

    router.push('/tanks')
  }

  return (
    <>
      <main className="min-h-screen">
        <LanguageSwitcher />
        <section className="relative h-[145vh] md:h-screen">
          <div className="absolute inset-0 bg-[url('/solar-panels.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative h-[270px] md:h-full max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white flex flex-col items-center justify-start md:justify-center h-full w-full mb-30 md:w-1/2 md:mb-[7pc]"
            >
              <div className="w-full flex justify-center items-start pt-0 md:pt-4">
                <Image
                  src={'/infinity.png'}
                  width={300}
                  height={50}
                  alt={'logo infinity solar'}
                  style={{
                    height: '150px',
                    width: '150px',
                    boxSizing: 'border-box',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="text-base sm:text-xl md:text-3xl font-extrabold mb-0 md:mb-3 md:leading-8 text-center md:text-left">
                {t('hero_title')}
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-3 font-medium text-center mt-2 md:mt-0 md:text-justify text-gray-100">
                {t('hero_subtitle')}
              </p>

              <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-visible md:overflow-hidden shadow-xl mb-3 md:mb-0">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qY4MWXjpKIw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div className="flex flex-col md:w-[500px] mt-60 md:mt-0">
              <div className="flex justify-center items-center">
                <a
                  href="https://www.infinitysolarshare.online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="button-primary text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                  >
                    {t('represatative_button')}
                  </button>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white w-[100%] md:w-full sm:max-w-xl mt-[38px] md:mt-[30px] p-4 md:p-6 rounded-2xl shadow-xl "
              >
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                  {t('quota_info')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-1 md:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form_name_label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-style"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form_email_label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-style"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form_phone_label')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-style"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <button onClick={handleSubmit} type="submit" className="button-primary w-full">
                    {t('form_submit_button')}
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">{t('estimated_return')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Expirencie />
        <Invest />
        <HowWork />
        <Faq />
        <Mapa />
        <Footer />
      </main>
    </>
  )
}
