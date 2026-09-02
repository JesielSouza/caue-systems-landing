import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const Navbar = ({ onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: 'Demonstração', href: '#demonstracao' },
    { name: 'Performance', href: '#performance' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Simulador', href: '#simulador' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0F1411]/92 backdrop-blur-xl border-b border-[#27322B] py-3.5 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C68A2B] via-[#E0A040] to-[#C68A2B] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Cauê Systems Brand Mark & Wordmark */}
          <a
            href="#"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-3 group"
          >
            <motion.svg
              whileHover={{ rotate: 90, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-8 h-8 rounded-sm shadow-md shrink-0"
              viewBox="0 0 48 48"
            >
              <path d="M0 0H48V48H0Z" fill="#C68A2B" />
              <path d="M48 14L14 48H48Z" fill="#0F1411" />
            </motion.svg>

            <span className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-[#EAF2EC] font-bold text-lg sm:text-xl tracking-[-0.02em] font-sora">
                Cauê
              </span>
              <span className="text-[#C68A2B] font-normal text-xs sm:text-sm tracking-[0.14em] uppercase font-sora">
                Systems
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sounds.playClick()}
                className="text-xs uppercase font-medium tracking-wider text-[#8FA39A] hover:text-[#C68A2B] transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Tactical Sound Switch */}
            <button
              onClick={handleToggleAudio}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isMuted
                  ? 'bg-[#1A221D] text-[#8FA39A] border-[#27322B] hover:text-[#EAF2EC]'
                  : 'bg-[#1A221D] text-[#C68A2B] border-[#C68A2B]/40 shadow-sm hover:text-[#E0A040]'
              }`}
              title={isMuted ? "Ativar Áudio Tático" : "Mutar Áudio Tático"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                sounds.playClick();
                onOpenEstimator();
              }}
              className="btn-primary text-xs !py-2.5 !px-5 cursor-pointer"
            >
              Pedir Orçamento 48h
            </motion.button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={handleToggleAudio}
              className="p-2 rounded-xl bg-[#1A221D] border border-[#27322B] text-[#8FA39A] hover:text-[#C68A2B]"
              title="Alternar Áudio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C68A2B]" />}
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-[#1A221D] border border-[#27322B] text-[#EAF2EC]"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C68A2B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-[#27322B] bg-[#0F1411]/98 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sounds.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-[#EAF2EC] hover:text-[#C68A2B] transition-colors py-1 uppercase tracking-wider font-sora"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#27322B]">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setMobileMenuOpen(false);
                    onOpenEstimator();
                  }}
                  className="btn-primary w-full text-center"
                >
                  Pedir Orçamento 48h →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
