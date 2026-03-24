import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-8">
              Pronto para <span className="text-primary">Elevar</span> seu Padrão Elétrico?
            </h2>
            <p className="text-on-surface-variant text-lg mb-12">
              Não arrisque sua produção com amadores. Contrate especialistas que entendem o ritmo da indústria.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant uppercase font-bold tracking-widest">Ligue agora</p>
                  <p className="text-2xl font-bold text-on-surface">19 9.9786-9520</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant uppercase font-bold tracking-widest">E-mail Técnico</p>
                  <p className="text-xl font-bold text-on-surface">contato@darioeletricidade.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-surface-container-high p-8 md:p-12 rounded-2xl shadow-xl shadow-deep-navy/5">
              <h3 className="text-2xl font-bold mb-8">Solicite seu Orçamento Gratuito</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Tipo de Serviço</label>
                  <select className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-lg font-medium">
                    <option>Manutenção Preventiva</option>
                    <option>Montagem de Painéis</option>
                    <option>Automação Industrial</option>
                    <option>Laudos e Certificações</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Nome da Empresa</label>
                  <input 
                    type="text" 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-lg font-medium" 
                    placeholder="Ex: Indústria Metalúrgica Ltda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-lg font-medium" 
                    placeholder="(19) 00000-0000"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-orange-600 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-orange-600/20 active:scale-95 uppercase tracking-wide"
                >
                  Enviar Solicitação Agora
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
