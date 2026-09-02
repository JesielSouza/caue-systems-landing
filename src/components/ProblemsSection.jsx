import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    number: '01',
    title: 'Operação que depende de uma pessoa',
    desc: 'Quando o dono sai, tudo trava. Substituímos dependência humana em rotinas críticas por fluxos automatizados que executam sem precisar de ninguém.'
  },
  {
    number: '02',
    title: 'Oportunidade perdida por demora ou ausência',
    desc: 'Um lead que chega às 22h sem atenção já foi embora. Agentes que atendem, qualificam e encaminham a qualquer hora, sem custo de contratação.'
  },
  {
    number: '03',
    title: 'Gestão no improviso, sem visibilidade real',
    desc: 'Decisões com base em memória ou planilha desatualizada geram erros caros. Painéis operacionais que mostram o que está acontecendo agora.'
  },
  {
    number: '04',
    title: 'Prospecção manual que não escala',
    desc: 'Pipelines que extraem contatos, geram mensagens por IA para cada lead e disparam cadências de abordagem com rastreamento total.'
  },
  {
    number: '05',
    title: 'Ferramentas desconectadas que geram retrabalho',
    desc: 'Conectamos sistemas para que os dados fluam automaticamente: pedido vira nota, nota atualiza o recebível, pagamento encerra o ciclo.'
  }
];

export const ProblemsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Padrões que encontramos
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Os cinco problemas que resolvemos
          </h2>
        </div>

        {/* List */}
        <div className="divide-y divide-[#27322B] border-t border-[#27322B]">
          {problems.map((p, idx) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              <div className="md:col-span-1 text-[#6F857A] font-sora font-semibold text-sm">
                {p.number}
              </div>

              <div className="md:col-span-11 space-y-2">
                <h3 className="text-xl font-bold font-sora text-[#EAF2EC] group-hover:text-[#C68A2B] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[#8FA39A] font-light leading-relaxed max-w-3xl">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
