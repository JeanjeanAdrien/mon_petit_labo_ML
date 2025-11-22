import React, { useState } from 'react';
import { COURSE_STRUCTURE } from './data/courseStructure';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentPlaceholder from './components/ContentPlaceholder';
import WhatIsIntelligence from './components/courses/WhatIsIntelligence';
import AITimelineLab from './components/courses/AITimelineLab';

export default function LearningPlatform() {
  const [activeSection, setActiveSection] = useState(COURSE_STRUCTURE[0].sections[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fonction pour trouver le module parent d'une section (pour l'affichage du fil d'ariane)
  const getParentModule = (sectionId) => {
    return COURSE_STRUCTURE.find(mod => mod.sections.some(s => s.id === sectionId));
  };

  const currentModule = getParentModule(activeSection.id);

  return (
    <div className="flex h-screen bg-white text-slate-800 font-sans overflow-hidden">

      {/* --- Sidebar (Navigation) --- */}
      <Sidebar
        courseStructure={COURSE_STRUCTURE}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

        {/* Top Header */}
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          currentModule={currentModule}
          activeSection={activeSection}
        />

        {/* Scrollable Content Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10 bg-slate-50/50">
          <div
            className="max-w-5xl mx-auto bg-white min-h-[80vh] rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-12">

            {/* Section Header */}
            <div className="mb-10 pb-6 border-b border-slate-100">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                {activeSection.title}
              </h1>
              <p className="text-lg text-slate-600">
                {/* Ici on pourrait mettre une description dynamique plus tard */}
                Module : {currentModule?.title}
              </p>
            </div>

            {/* ============================================
                ZONE DE CONTENU DYNAMIQUE
                C'est ici que la magie opèrera plus tard.
                ============================================
                */}

            <div className="animate-in fade-in duration-500">
              {/* LOGIQUE DE ROUTAGE INTERNE :
                    Switch basé sur l'ID de la section active pour afficher le bon composant
                    */}

              {activeSection.id === 'mod1-theory1' ? (
                <WhatIsIntelligence />
              ) : activeSection.id === 'mod1-lab1' ? (
                <AITimelineLab />
              ) : activeSection.id === 'ml-3' ? (
                // Exemple : Si c'est la section 'ml-3', on pourrait afficher ton composant précédent ici
                <ContentPlaceholder title={activeSection.title} type={activeSection.type} />
              ) : (
                <ContentPlaceholder title={activeSection.title} type={activeSection.type} />
              )}

            </div>

          </div>
        </div>

      </main>
    </div>
  );
}