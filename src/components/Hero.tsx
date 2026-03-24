import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-navy">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-40" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqHyr_Pc6Rp_b5Fj-D-YPiwFDN2h1jj9P0ItKU0KYZ3sb-1YoxUo8cwsdn-sWovUlU0C1EYg-WoHVufy5fhL1pdzkzd-pwNtUV76bJY5mGBWqiM5LX-CBa7eNsMKsegXc0PAhjRQm05Isb5uQTQDgsOqPngfqowi9ka5w4YdkBSDoc2ZopaLL420jFQzvT7VZjQhpV41W_C5Xfi_X_mEohmC4QtnFQ9eD2kA1N7n_g71FwFO_7qoZL8vfSmo_6tvrt62s47qIFcrM"
          alt="Industrial electrical panel"
          referrerPolicy="no-referrer"
        />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#FF6B00 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
        ></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Disponibilidade 24h para Emergências
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            PROBLEMAS ELÉTRICOS EM SUA INDÚSTRIA? <span className="text-primary">RESOLVEMOS AGORA.</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl">
            Especialistas em manutenção preditiva e performance técnica. Garantimos a continuidade operacional da sua planta com engenharia elétrica de alta precisão e conformidade total com as normas NR-10 e NR-35.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5519997869520"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-orange-500 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-600/20 active:scale-95 group"
            >
              Orçamento via WhatsApp
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
