import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Certificações', href: '#certificacoes' },
    { name: 'Clientes', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="text-primary w-8 h-8" fill="currentColor" />
          <span className="text-lg md:text-xl font-extrabold tracking-tighter text-white uppercase font-headline">
            Dario Eletricidade Industrial
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            className="bg-primary hover:bg-orange-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 active:scale-95 text-sm uppercase tracking-tight shadow-lg shadow-orange-600/20"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-deep-navy border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white text-lg font-semibold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-center"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
