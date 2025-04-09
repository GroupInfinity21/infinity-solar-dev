'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Footer from './components/footer';
import { Faq } from './components/faq';
import HowWork from './components/HowWork'
import Expiriencie from './components/Expirencie';
import { Invest } from './components/invest';
import emailjs from "emailjs-com";
import Mapa from './components/Map';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',


  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_fu2ktnd",  
      "template_c842hrl", 
      formData,
      "5y6YB_L_SIPQakRdC"
    )
    .then(() => console.log("E-mail enviado com sucesso!"))
    .catch((error) => console.error("Erro ao enviar e-mail:", error));

    setFormData(
     {
      name: '',
      email: '',
      phone: ''
     }
    )

    router.push('/tanks')
  };


  return (
    <main className="min-h-screen">
      <section className="relative h-[135vh] md:h-screen">
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
                  style={{ height: '150px', width: '150px', boxSizing: 'border-box', objectFit: 'contain' }}
                />
              </div>
                  <p className="text-base sm:text-xl md:text-3xl font-extrabold mb-0 md:mb-3 md:leading-8 text-center md:text-left">
                    Comece a investir no mercado de energia solar e tenha rendimentos de até 2,5% ao mês.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg mb-3 font-medium text-center mt-2 md:mt-0 md:text-justify text-gray-100">
                    Participe da Indústria que mais cresce na Economia Brasileira. Com a Infinity Solar Share você pode ser sócio no mercado de energia solar e obter retornos de até 2,5% ao mês.
                  </p>

                  <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-visible md:overflow-hidden shadow-xl mb-3 md:mb-0">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/My_P2OFtXNg"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                  </div>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white w-[100%] md:w-full sm:max-w-xl mt-[248px] md:mt-[30px] p-4 md:p-6 rounded-2xl shadow-xl "
              >
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                  Cotas a partir de R$5.500.
                </h2>
                <form onSubmit={handleSubmit} className="space-y-1 md:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
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
                      E-mail
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
                       Número com DDD
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
                    Quero investir agora
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Retorno estimado de até 2,5% ao mês
                </p>
              </motion.div>
        </div>

      </section>

      <Expiriencie/>
      <Invest/>
      <HowWork/>
      <Faq/>
      {/* <Mapa/> */}
      {/* <PageThanks/> */}
      <Footer/>
      
    </main>
  );
}