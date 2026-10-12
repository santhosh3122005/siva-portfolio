/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';

import {
  initialProfile,
  initialSkillCategories,
  initialProjects,
  initialEducation,
  initialCertifications,
} from './data/portfolioData';
import { ProfileInfo, SkillCategory } from './types/portfolio';

const STORAGE_KEYS = {
  PROFILE: 'siva_portfolio_profile_v1',
  SKILLS: 'siva_portfolio_skills_v1',
  PDF_URL: 'siva_portfolio_custom_pdf_url',
  PDF_NAME: 'siva_portfolio_custom_pdf_name',
};

export default function App() {
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        delete parsed.avatarUrl;
        delete parsed.github;
        return { ...initialProfile, ...parsed };
      }
      return initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : initialSkillCategories;
    } catch {
      return initialSkillCategories;
    }
  });

  const [customPdfUrl, setCustomPdfUrl] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.PDF_URL) || '';
  });

  const [customPdfName, setCustomPdfName] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.PDF_NAME) || '';
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);

  // Persistence handlers
  const handleSaveProfile = (updatedProfile: ProfileInfo) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updatedProfile));
    } catch (err) {
      console.warn('Could not save to localStorage', err);
    }
  };

  const handleSaveSkills = (updatedSkills: SkillCategory[]) => {
    setSkillCategories(updatedSkills);
    try {
      localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updatedSkills));
    } catch (err) {
      console.warn('Could not save to localStorage', err);
    }
  };

  const handleUploadCustomPdf = (fileUrl: string, fileName: string) => {
    setCustomPdfUrl(fileUrl);
    setCustomPdfName(fileName);
    try {
      localStorage.setItem(STORAGE_KEYS.PDF_URL, fileUrl);
      localStorage.setItem(STORAGE_KEYS.PDF_NAME, fileName);
    } catch (err) {
      console.warn('Could not save PDF URL to localStorage', err);
    }
  };

  const handleResetDefaults = () => {
    setProfile(initialProfile);
    setSkillCategories(initialSkillCategories);
    setCustomPdfUrl('');
    setCustomPdfName('');
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.SKILLS);
    localStorage.removeItem(STORAGE_KEYS.PDF_URL);
    localStorage.removeItem(STORAGE_KEYS.PDF_NAME);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCustomize={() => setIsCustomizeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <About profile={profile} />

        <Skills
          categories={skillCategories}
          onOpenCustomize={() => setIsCustomizeModalOpen(true)}
        />

        <Projects
          projects={initialProjects}
          onOpenCustomize={() => setIsCustomizeModalOpen(true)}
        />

        <Education
          education={initialEducation}
          onOpenCustomize={() => setIsCustomizeModalOpen(true)}
        />

        <Certifications
          certifications={initialCertifications}
          onOpenCustomize={() => setIsCustomizeModalOpen(true)}
        />

        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Resume Viewer / Exporter Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        skillCategories={skillCategories}
        projects={initialProjects}
        education={initialEducation}
        onUploadCustomPdf={handleUploadCustomPdf}
        customPdfUrl={customPdfUrl}
        customPdfName={customPdfName}
      />

      {/* Profile & Skills Customizer Modal */}
      <EditProfileModal
        isOpen={isCustomizeModalOpen}
        onClose={() => setIsCustomizeModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        skillCategories={skillCategories}
        onSaveSkills={handleSaveSkills}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
