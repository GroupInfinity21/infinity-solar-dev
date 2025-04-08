import { motion } from "framer-motion"

export const HowWork = () =>{
    return (
        <section className="py-10 bg-white md:py-16">
        <div className="max-w-[1200px] sm: h-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#123c6f] mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda como funciona o processo de investimento em energia solar
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
                className="w-full h-full
                 object-cover"
              />

              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                alt="Solar Panel Installation"
                className="w-full h-[400px] object-cover"
              />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-[400px]"
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#f35425] h-full sm: mb-3 sm: h-[220px] flex flex-col justify-center">
                <h3 className="text-xl  font-semibold text-[#123c6f] mb-2 mt-2">Fase de Implantação:</h3>
                <p className="text-gray-600 text-xs md:text-custom">
                A Infinity Solar Share é proprietária das Usinas e durante a fase de implantação cada sócio recebe um rendimento mensal 2% pelo período inicial de 12 meses.
                </p>

               
                <h3 className="text-xl font-semibold text-[#123c6f] mb-2 mt-2">Operação:</h3>
                <p className="text-gray-600 text-xs md:text-custom">
                O investimento funciona por meio de usinas solares fotovoltaicas, que geram energia e a vendem para consumidores através de contratos de longo prazo. O investidor aporta capital na implantação da usina e recebe uma parte da receita gerada pela venda da energia.
                </p>
              
              
                <h3 className="text-xl font-semibold text-[#123c6f] mb-2 mt-2 ">Recebimento:</h3>
                <p className="text-gray-600 text-xs md:text-custom">
                Após a confirmação do seu primeiro aporte, seu dinheiro já começa a render no dia seguinte, durante todo o restante dos dias até fechar o mês. O pagamento é feito todo dia 05 de cada mês.
                </p>
              
              </div>
              
            </motion.div>
          </div>

        </div>
      </section>
    )
}

export default HowWork;