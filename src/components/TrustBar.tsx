import { ShieldCheck, ArrowUpCircle, Clock, HardHat } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: 'NR-10 Certificada' },
    { icon: ArrowUpCircle, label: 'NR-35 Altura' },
    { icon: Clock, label: 'Atendimento 24h' },
    { icon: HardHat, label: 'Qualidade Expert' },
  ];

  return (
    <section id="certificacoes" className="bg-surface-container-low py-12 border-y border-on-surface/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <item.icon className="text-primary w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
