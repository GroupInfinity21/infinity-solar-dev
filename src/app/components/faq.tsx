import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react";

export const Faq = () =>{

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
          question: 'Como adquirir cotas de investimento da Infinity Solar Share?',
          answer: 'Para adquirir cotas de investimento da Infinity Solar Share, você deve preencher seus dados no formulário no começo do site. Em breve um de nossos consultores irá entrar em contato.'
        },
        {
          question: 'Qual é o valor inicial para investir em cotas da Infinity Solar Share?',
          answer: 'O valor inicial de investimento é de R$ 5.500 por cota, podendo o investidor ter mais cotas de igual valor.'
        },
        {
          question: 'Quais são os benefícios de investir por meio das cotas da Infinity Solar Share?',
          answer: 'Os benefícios incluem potencial de retorno sobre o investimento acima da média do mercado, diversificação de portfólio, participação no agronegócio com a expertise da Infinity Solar Share na gestão desses investimentos.'
        },
        {
          question: 'Como a Infinity Solar Share gerencia os investimentos?',
          answer: 'A Infinity Solar Share possui estratégias e práticas de gestão de riscos para proteger os interesses dos investidores. Isso pode incluir a diversificação de investimentos em diferentes áreas geográficas, o uso de contratos futuros para minimizar a exposição a flutuações de preços e a seleçao de fornecedores e compradores nas mais rigidas regras de compliance.'
        }
      ];
    
    return(
        <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px]  mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mt-5 text-4xl font-bold text-[#123c6f] mb-4 md:mt-0">Tire todas as suas dúvidas</h2>

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