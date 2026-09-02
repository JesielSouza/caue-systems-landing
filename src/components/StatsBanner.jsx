import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ShieldCheck, Gauge } from 'lucide-react';
import { companyData } from '../data/companyData';

export const StatsBanner = () => {
  const icons = [Clock, Gauge, ShieldCheck, Zap];

  return (
    <section className="relative py-12 bg-brand-surface/40 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {companyData.metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-4xl font-extrabold text-gradient-gold font-mono">
                    {metric.value}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    {metric.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
