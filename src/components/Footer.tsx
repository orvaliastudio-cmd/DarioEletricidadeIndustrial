import { Zap, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-primary w-6 h-6" fill="currentColor" />
            <span className="text-lg font-bold text-white font-headline">Dario Eletricidade Industrial</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Expertise técnica e compromisso com a segurança em cada projeto. Sua indústria em boas mãos.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-300 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Serviços Especializados</h4>
          <ul className="space-y-3 text-sm">
            {['Manutenção Preventiva', 'Montagem de Painéis', 'Laudos NR-10', 'Projetos Elétricos'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contato Direto</h4>
          <p className="text-orange-500 font-semibold mb-2 text-lg">19 9.9786-9520</p>
          <p className="mb-4">Limeira - Piracicaba - Campinas & Região</p>
          <p className="text-xs uppercase tracking-widest opacity-50">Disponível para chamados críticos 24/7</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/5 text-center text-xs tracking-wide">
        © 2024 Dario Eletricidade Industrial. Todos os direitos reservados.
      </div>
    </footer>
  );
}
