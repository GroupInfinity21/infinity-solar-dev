'use client'

import { Mail, MapPinned, Phone } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import '../../../i18n'

export default function Footer() {
  const { t } = useTranslation()

  const openWpp = () => {
    const wpp =
      'https://api.whatsapp.com/send/?phone=5583998072443&text=Ol%C3%A1%2C+quero+saber+mais%21&type=phone_number&app_absent=0'
    window.open(wpp, '_blank')
  }

  const openInsta = () => {
    const insta = 'https://www.instagram.com/infinitysolarshare/'
    window.open(insta, '_blank')
  }

  const openFace = () => {
    const face = 'https://www.facebook.com/people/Infinity-Solar-Share/61571839387380/'
    window.open(face, '_blank')
  }

  return (
    <footer className="bg-[#333] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">{t('footer.company_name')}</h3>
            <p className="text-gray-300 text-justify">{t('footer.company_description')}</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">{t('footer.contact_title')}</h3>
            <div className="flex flex-col w-full sm:items-center justify-around h-[120px]">
              <div className="flex items-center justify-between w-[220px]">
                <div>
                  <Phone />
                </div>
                <div>{t('footer.phone')}</div>
              </div>
              <div className="flex items-center justify-between w-[220px]">
                <div className="mr-3">
                  <Mail />
                </div>
                <div>{t('footer.email')}</div>
              </div>
              <div className="flex items-center justify-between w-[220px]">
                <div className="mr-3">
                  <MapPinned />
                </div>
                <div className="w-full text-xs">{t('footer.address')}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center">
            <h3 className="text-xl font-bold mb-4">{t('footer.follow_us')}</h3>
            <div className="flex space-x-4">
              <FaFacebook
                onClick={openFace}
                size={28}
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              />
              <FaWhatsapp
                onClick={openWpp}
                size={30}
                className="text-green-500 hover:text-green-700 transition duration-300"
              />
              <FaInstagram
                onClick={openInsta}
                size={30}
                className="text-pink-500 hover:text-pink-700 transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
