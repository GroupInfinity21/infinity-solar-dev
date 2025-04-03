import { motion } from "framer-motion"
import { Building2, Target, Trophy, Users2 } from "lucide-react"

export const Expiriencie = () =>{
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
            <h2 className="text-4xl font-bold text-[#123c6f] mb-4">Sobre Nós</h2>
            <p className=" text-base md:text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            O Grupo Viver Infinity é uma empresa especializada no desenvolvimento e gestão de multipropriedade, conhecidos pelas técnicas inovadoras e altas taxas de absorção com mais de 18 anos de mercado e mais de 100 milhões em VGV.
            </p>
            <br/>
            <p className=" text-base md:text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            A empresa está dividida em sete áreas: hotelaria e multipropriedade, agência de viagens, consultoria especializada, pós-vendas, saúde, franquia de perfumaria, eletropostos e energia solar. Cada uma dessas áreas estão ligadas entre si, completando o atendimento do grupo, desde a prospecção de novos clientes até o pós-venda.
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
              <h3 className="text-2xl font-semibold text-[#123c6f] mb-4">Nossa Equipe</h3>
              <p className="text-gray-600">
                Contamos com profissionais altamente qualificados e experientes no mercado 
                de energia solar e investimentos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <Target className="h-12 w-12 text-[#f35425] mb-6" />
              <h3 className="text-2xl font-semibold text-[#123c6f] mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Democratizar o acesso a investimentos em energia limpa, gerando valor 
                para nossos investidores e para o planeta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <Building2 className="h-12 w-12 text-[#f35425] mb-6" />
              <h3 className="text-2xl font-semibold text-[#123c6f] mb-4">Nossa Estrutura</h3>
              <p className="text-gray-600">
                Infraestrutura robusta e processos rigorosos para garantir a segurança 
                e rentabilidade dos investimentos.
              </p>
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
            <h3 className="text-3xl font-bold mb-4">Nossa Experiência</h3>
            <p className="text-xl mb-8">
              Com anos de experiência no mercado, já ajudamos centenas de investidores 
              a alcançarem seus objetivos financeiros através da energia solar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-[#f35425]">600+</p>
                <p className="text-sm mt-2">Colaboradores</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#f35425]">R$100M+</p>
                <p className="text-sm mt-2">VGV</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#f35425]">+8</p>
                <p className="text-sm mt-2">Empresas associadas</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#f35425]">18+</p>
                <p className="text-sm mt-2">Anos no Mercado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
}

export default Expiriencie;