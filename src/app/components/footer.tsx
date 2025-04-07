import { Mail, MapPinned, Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export const Footer = () => {

  const openWpp = () =>{
    const wpp = 'https://api.whatsapp.com/send/?phone=5583998072443&text=Ol%C3%A1%2C+quero+saber+mais%21&type=phone_number&app_absent=0'
    window.open(wpp, "_blank")
  }

  const openInsta = () =>{
    const wpp = 'https://www.instagram.com/infinitysolarshare/'
    window.open(wpp, "_blank")
  }

  const openFace = () =>{
    const wpp = 'https://www.facebook.com/people/Infinity-Solar-Share/61571839387380/'
    window.open(wpp, "_blank")
  }
    return (
        <footer className="bg-[#333] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className='flex flex-col items-center'>
              <h3 className="text-xl font-bold mb-4">Infinity Solar Share</h3>
              <p className="text-gray-300 text-justify">
              A Infinity Solar Share é uma empresa especializada em soluções de energia solar compartilhada, oferecendo aos investidores a oportunidade de participar de projetos solares sustentáveis e rentáveis. 
              </p>
            </div>
            <div className='flex flex-col items-center'>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <div className='flex flex-col w-full sm:items-center justify-around h-[120px]'>

                  <div className='flex items-center  justify-between w-[220px]'>
                    <div>
                      <Phone/>
                    </div>
                    <div>+55 (83) 99807 - 2443</div>
                  </div>

                  <div className='flex items-center justify-between w-[220px]'>
                    <div className='mr-3'>
                      <Mail/>
                    </div>
                    <div>Contato@infinitysolarshare.com.br</div>
                  </div>

                  <div className='flex items-center justify-between w-[220px]'>
                    <div className='mr-3'>
                      <MapPinned />
                    </div>
                    <div className='w-full text-xs'>Av. Pres. Epitácio Pessoa, 3663 - Miramar, João Pessoa - PB</div>
                  </div>

                </div>
            </div>
            <div className='flex flex-col justify-start items-center'>
              <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <FaFacebook onClick={openFace} size={28} className="text-blue-600 hover:text-blue-800 transition duration-300"/>
                <FaWhatsapp onClick={openWpp}  size={30} className="text-green-500 hover:text-green-700 transition duration-300" />
                <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 transition duration-300" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} CNPJ: 52.444.363/00001-10 © 2025 Infinity Solar Share. Todos os direitos reservados. Desenvolvido por Matheus Duarte</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;