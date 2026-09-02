import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';

export const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappClean}?text=${encodeURIComponent('Olá Jesiel! Estava olhando o site da Cauê Systems e gostaria de tirar uma dúvida sobre um projeto.')}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 p-3.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/30"
      >
        {/* Glowing aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-md group-hover:bg-emerald-500/50 transition-all animate-pulse" />
        
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>

        <span className="relative hidden sm:inline-block font-sans font-semibold">
          Falar com Jesiel
        </span>

        {/* Online green indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-gold border-2 border-brand-void"></span>
        </span>
      </a>
    </motion.div>
  );
};
