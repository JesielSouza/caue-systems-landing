import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowcaseTestDrive } from './components/ShowcaseTestDrive';
import { PerformanceComparison } from './components/PerformanceComparison';
import { RoiCalculator } from './components/RoiCalculator';
import { PackagesSection } from './components/PackagesSection';
import { StepsSection } from './components/StepsSection';
import { FounderTrustSection } from './components/FounderTrustSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedPlan, setSelectedPlan] = useState('vitrine-48h');

  const scrollToEstimator = (planId) => {
    if (planId) {
      setSelectedPlan(planId);
    }
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1411] text-[#EAF2EC] selection:bg-[#C68A2B] selection:text-[#0F1411] relative font-sans">
      {/* Magnetic Interactive Custom Cursor */}
      <CustomCursor />

      {/* Official Top Fixed Navbar with Scroll Progress */}
      <Navbar onOpenEstimator={() => scrollToEstimator()} />

      {/* High-Conversion Sections */}
      <main>
        {/* 1. Hero with live load speedometer */}
        <Hero onOpenEstimator={() => scrollToEstimator('vitrine-48h')} />

        {/* 2. Interactive Niche Showcase Test-Drive with Drag */}
        <ShowcaseTestDrive onOpenEstimator={() => scrollToEstimator('vitrine-48h')} />

        {/* 3. Factual Benchmark (Speed & Retention) */}
        <div id="performance">
          <PerformanceComparison onOpenEstimator={() => scrollToEstimator('vitrine-48h')} />
        </div>

        {/* 4. Interactive ROI & Revenue Recovery Calculator */}
        <RoiCalculator onOpenEstimator={() => scrollToEstimator('vitrine-48h')} />

        {/* 5. The 3 Transparent Service Packages with Direct State Link */}
        <PackagesSection onSelectPlan={scrollToEstimator} />

        {/* 6. How It Works (3 Steps) */}
        <StepsSection />

        {/* 7. Direct Founder Authority & Trust (Jesiel Souza) */}
        <FounderTrustSection />

        {/* 8. Interactive Briefing Simulator */}
        <ProjectEstimator currentPlan={selectedPlan} onPlanChange={setSelectedPlan} />

        {/* 9. Laser-focused FAQ */}
        <FaqSection />

        {/* 10. Final High-Impact CTA */}
        <CtaSection />
      </main>

      {/* Official Footer & Floating WhatsApp Trigger */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
