import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const Invest = () =>{
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
            <h2 className="text-4xl font-bold text-[#123c6f] mb-4">Como Investir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse nosso sistema exclusivo para sócios cotistas e acompanhe o rendimento investido.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
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
                  <h3 className="text-xl font-semibold text-[#123c6f] mb-2">Preencha seus dados</h3>
                  <p className="text-gray-600">
                    Utilize o formulário no topo da página para nos informar seus dados de contato.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-[#f35425] flex-shrink-0" />
              </motion.div>

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
                  <h3 className="text-xl font-semibold text-[#123c6f] mb-2">Aguarde nosso contato</h3>
                  <p className="text-gray-600">
                    Nossa equipe especializada entrará em contato para apresentar as melhores opções de investimento.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-[#f35425] flex-shrink-0" />
              </motion.div>

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
                  <h3 className="text-xl font-semibold text-[#123c6f] mb-2">Finalize seu investimento</h3>
                  <p className="text-gray-600">
                    Assine o contrato digitalmente e realize o pagamento de forma segura para começar a investir.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-[#f35425] flex-shrink-0" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    )
}