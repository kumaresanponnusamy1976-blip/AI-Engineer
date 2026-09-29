/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { defaultProfile } from './data/portfolioData';
import { StudentProfile } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('btech_portfolio_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return defaultProfile;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveProfile = (updated: StudentProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('btech_portfolio_profile', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827]">
      {/* Sticky Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero profile={profile} />

        {/* 2. About Me Section */}
        <About profile={profile} />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Hackathons & Ideathons Section */}
        <Hackathons />

        {/* 6. Education Section */}
        <Education profile={profile} />

        {/* 7. Currently Learning Section */}
        <LearningJourney profile={profile} />

        {/* 8. Future Goals Section */}
        <Goals profile={profile} />

        {/* 9. Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* Minimal Footer */}
      <Footer profile={profile} />

      {/* Profile Personalization Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      {/* Floating Personalize Pill */}
      <button
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-md rounded-lg transition-all"
        title="Customize details (Name, College, Social URLs)"
        aria-label="Customize portfolio fields"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
        <span className="hidden sm:inline">Customize Info</span>
      </button>
    </div>
  );
}
