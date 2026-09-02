import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B] text-xs text-[#6F857A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand Mark & Name */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path d="M0 0H48V48H0Z" fill="#C68A2B" opacity="0.5" />
            <path d="M48 14L14 48H48Z" fill="#0F1411" />
          </svg>
          <span className="font-sora font-bold text-sm tracking-[-0.02em] text-[#6F857A]">
            CAUÊ<span className="font-normal tracking-[0.1em] text-[#C68A2B] ml-1.5">SYSTEMS</span>
          </span>
        </div>

        {/* Location & Slogan */}
        <p className="text-[#6F857A]">
          Manaus, Amazonas, Brasil / Sistemas, automações e ferramentas digitais
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 text-[#C68A2B] font-sora font-semibold text-xs">
          <a href="mailto:cauesystems@gmail.com" className="hover:underline">cauesystems@gmail.com</a>
          <a href="https://www.linkedin.com/in/jesiel-souza-71b837155" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/JesielSouza" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-[#6F857A]">
          2025 / 2026 Cauê Systems / Jesiel Da Costa Souza
        </p>

      </div>
    </footer>
  );
};
