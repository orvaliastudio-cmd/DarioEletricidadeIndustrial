import { BarChart3, Settings, Cpu, Zap, LayoutGrid, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Manutenção Preditiva e Preventiva',
      desc: 'Antecipamos falhas com análise termográfica e testes de isolamento para evitar paradas não programadas.',
    },
    {
      icon: Settings,
      title: 'Comandos Elétricos',
      desc: 'Projetos e manutenção de sistemas de comando complexos para controle total de sua linha de produção.',
    },
    {
      icon: Cpu,
      title: 'Automações Industriais',
      desc: 'Integração de CLPs e sensores para otimizar processos e reduzir custos operacionais com tecnologia de ponta.',
    },
    {
      icon: Zap,
      title: 'Instalações (NR-10 & NR-35)',
      desc: 'Execução de infraestrutura elétrica em baixa e média tensão com rigorosa segurança normativa.',
    },
    {
      icon: LayoutGrid,
      title: 'Montagem de Painéis',
      desc: 'Montagem técnica de QGBTs e painéis de automação seguindo os mais altos padrões de organização e segurança.',
    },
    {
      icon: Wrench,
      title: 'Reparo de Falhas em Máquinas',
      desc: 'Diagnóstico rápido e reparo especializado em motores, inversores e sistemas eletromecânicos industriais.',
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
            Engenharia Elétrica de <span className="text-primary">Elite</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Soluções completas para infraestrutura industrial, do projeto à manutenção crítica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-deep-navy/5 border-b-2 border-transparent hover:border-primary"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 block" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
