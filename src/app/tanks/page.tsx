'use client'

import { MessageCircle } from "lucide-react";
import Image from "next/image";


declare global {
    interface Window {
      fbq: (...args: any[]) => void
    }
}

export const pageTanks = () =>{
   
    
      const fbq = (...args: any[]) => {
        if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
          window.fbq(...args)
        }
     }
      
    const openWpp = () =>{
        const wpp = 'https://api.whatsapp.com/send/?phone=5583998072443&text=Ol%C3%A1%2C+quero+saber+mais%21&type=phone_number&app_absent=0'
        window.open(wpp, "_blank")

        if (typeof window !== 'undefined' && 'fbq' in window) {
            fbq('trackCustom', 'contact')
          }        
    }

    return(
        <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8">
          
          <div className="flex justify-center mb-8">
            <div className="w-48 h-16 rounded flex items-center justify-center">
              <span className="text-white font-ethnocentric text-xl">
                <Image
                 src={'/INFINITY SOLAR.png'}
                 width={300}
                 height={50}
                 alt={'logo infinity solar'}
                 style={{ height: '150px', width: '150px', boxSizing: 'border-box', objectFit: 'contain' }}
                />
              </span>
            </div>
          </div>
  
          <div className="space-y-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Obrigado pelo seu cadastro!
            </h1>
            
            <div className="space-y-4 text-custom">
              <p className="text-gray-700">
                Devido à alta demanda de detalhes, um consultor entrará em contato assim que possível.
              </p>
              
              <p className="text-gray-700">
                Mas se você já quiser adiantar e largar na frente dos vários cadastros que recebemos diariamente, 
                criamos um canal exclusivo de atendimento rápido.
              </p>
            </div>
  
            <div className="pt-6" onClick={openWpp}>
              <a
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <MessageCircle  size={24} />
                Falar com nossa equipe agora
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
