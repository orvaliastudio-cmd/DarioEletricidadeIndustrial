import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ricardo Mendes',
      role: 'Gerente de Operações - Logística Br',
      text: '"O atendimento do Dario é impecável. Em uma emergência de painel no turno da noite, eles chegaram rápido e resolveram o problema que outras empresas não conseguiram. Parceiros essenciais."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlYLSVFlVz60qj3hQv-zcjTKb6wP7o_OxjY2xtJ_gYjD3te_80RXiTgwso3Y3ZYiIprM4djYhGwEoXSRl0ATWEJY1MJ4xkKVewNCxdlZXOW17MzsL42CXqeoGH5hFPNC2ec5UqG15aYGAbySAp_qyhCAG8F9PJ6KRHdWk_cJeAisYo5Nc1FVNWqdTSlGXSqIApYCQFoTzaJ805qhpFMkGqc05FH9TAnsUxEmE7mfKdsBTvW8D4cVWvHpL6pGLjZBDIWvEIX9biPc4',
    },
    {
      name: 'Sandra Oliveira',
      role: 'Diretora Técnica - Indústria Têxtil',
      text: '"Adequamos toda nossa planta às normas NR-10 e NR-35 com a assessoria do Dario. Profissionalismo raro no mercado, com documentação clara e execução limpa."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWT9asQ58CC-CQTSjbPsQNHrMxf0z6cxEhWql6R_yNWX8wXsBIj0PDS7fvUBZ8daCHPQGHr2_NIfTz_eXI4wwTQOmL96OzmysqvKWnU7BXPGKKdVlERO5taTgKPBZCGWYSutC5qR7wQV2vDRfSp2TheJ8y-ysvSNxslF5bSp8Trn3pDZt8BaMikz7c0bfM-5riVaIc8hqMUI63BLSktqnSnwjeSPTpoMPWQ8I2i5uXw7erdfQdS5JNu929RpS_zgd9kfq91gpzFrs',
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold mb-4">Confiança de quem decide</h2>
          <p className="text-on-surface-variant">Líderes industriais que escolheram a precisão do Dario.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote className="w-16 h-16" />
              </div>
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-on-surface-variant mb-8 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{t.name}</h4>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
