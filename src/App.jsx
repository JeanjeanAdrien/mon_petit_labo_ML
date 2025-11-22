import React, { useState } from 'react';
import {
  BookOpen,
  Code,
  Brain,
  Layers,
  Database,
  Cpu,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  FlaskConical,
  PenTool,
  Eye,
  Scale
} from 'lucide-react';

// --- Configuration du Programme (Le Squelette) ---
// C'est ici que tu définiras la structure de ton cours.
// Pour l'instant, j'ai mis des titres standards pour ML et DL.
const COURSE_STRUCTURE = [
  {
    id: 'module-1',
    title: 'Module 1 : Les Fondations',
    icon:
      <BookOpen className="w-5 h-5" />,
    sections: [
      { id: 'mod1-theory1', title: "Qu'est-ce que l'Intelligence ?", type: 'theory' },
      { id: 'mod1-lab1', title: "Visuel : Frise chronologique de l'IA", type: 'lab' },
      { id: 'mod1-theory2', title: "La Data : Le carburant", type: 'theory' },
      { id: 'mod1-lab2', title: "Labo : Nettoyer un jeu de données", type: 'lab' },
      { id: 'mod1-theory3', title: "Les 3 Piliers de l'Apprentissage", type: 'theory' }
    ]
  },
  {
    id: 'module-2',
    title: 'Module 2 : Machine Learning Classique',
    icon:
      <Database className="w-5 h-5" />,
    sections: [
      { id: 'mod2-theory1', title: "La Régression Linéaire", type: 'theory' },
      { id: 'mod2-lab1', title: "Labo : Tracer une ligne", type: 'lab' },
      { id: 'mod2-theory2', title: "La Classification", type: 'theory' },
      { id: 'mod2-lab2', title: "Labo : Le Petit Laboratoire ML", type: 'lab' },
      { id: 'mod2-theory3', title: "K-Nearest Neighbors (KNN)", type: 'theory' },
      { id: 'mod2-lab3', title: "Labo : Voisins les plus proches", type: 'lab' },
      { id: 'mod2-theory4', title: "Arbres de Décision & Forêts", type: 'theory' },
      { id: 'mod2-lab4', title: "Visuel : Arbre interactif", type: 'lab' }
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3 : ML Non-Supervisé',
    icon:
      <Brain className="w-5 h-5" />,
    sections: [
      { id: 'mod3-theory1', title: "Clustering (K-Means)", type: 'theory' },
      { id: 'mod3-lab1', title: "Labo : Tribus de points", type: 'lab' },
      { id: 'mod3-theory2', title: "Réduction de Dimension (PCA)", type: 'theory' },
      { id: 'mod3-lab2', title: "Visuel : Objet 3D vers 2D", type: 'lab' }
    ]
  },
  {
    id: 'module-4',
    title: 'Module 4 : Deep Learning',
    icon:
      <Layers className="w-5 h-5" />,
    sections: [
      { id: 'mod4-theory1', title: "L'Anatomie d'un Neurone", type: 'theory' },
      { id: 'mod4-lab1', title: "Labo : Jouer avec les poids", type: 'lab' },
      { id: 'mod4-theory2', title: "Le Réseau Dense (MLP)", type: 'theory' },
      { id: 'mod4-lab2', title: "Visuel : Flux d'information", type: 'lab' },
      { id: 'mod4-theory3', title: "La Descente de Gradient", type: 'theory' },
      { id: 'mod4-lab3', title: "Labo : Montagne 3D", type: 'lab' }
    ]
  },
  {
    id: 'module-5',
    title: 'Module 5 : Vision par Ordinateur',
    icon:
      <Eye className="w-5 h-5" />,
    sections: [
      { id: 'mod5-lab1', title: "Labo : Les Pixels sont des Nombres", type: 'lab' },
      { id: 'mod5-theory1', title: "La Convolution (Le Filtre)", type: 'theory' },
      { id: 'mod5-lab2', title: "Labo : Filtres Webcam", type: 'lab' },
      { id: 'mod5-theory2', title: "Le Pooling (La compression)", type: 'theory' }
    ]
  },
  {
    id: 'module-6',
    title: 'Module 6 : NLP & IA Générative',
    icon:
      <MessageSquare className="w-5 h-5" />,
    sections: [
      { id: 'mod6-theory1', title: "Tokenization & Embeddings", type: 'theory' },
      { id: 'mod6-lab1', title: "Labo : Explorateur de mots 3D", type: 'lab' },
      { id: 'mod6-theory2', title: "L'Architecture Transformer", type: 'theory' },
      { id: 'mod6-theory3', title: "Les LLM (Large Language Models)", type: 'theory' },
      { id: 'mod6-lab2', title: "Labo : Générateur mot par mot", type: 'lab' },
      { id: 'mod6-theory4', title: "Diffusion (Génération d'Images)", type: 'theory' }
    ]
  },
  {
    id: 'module-7',
    title: 'Module 7 : Éthique et Futur',
    icon:
      <Scale className="w-5 h-5" />,
    sections: [
      { id: 'mod7-lab1', title: "Labo : Les Biais de l'IA", type: 'lab' },
      { id: 'mod7-theory1', title: "L'IA Explicable", type: 'theory' },
      { id: 'mod7-theory2', title: "L'avenir du travail", type: 'theory' }
    ]
  }
];

// --- Composant : Placeholder (Zone à remplir par toi) ---
const ContentPlaceholder = ({ title, type }) => (
  <div
    className="border-2 border-dashed border-slate-300 rounded-xl p-12 flex flex-col items-center justify-center text-center bg-slate-50 min-h-[400px]">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${type === 'lab'
      ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
      {type === 'lab' ?
        <FlaskConical className="w-8 h-8" /> :
        <PenTool className="w-8 h-8" />}
    </div>
    <h3 className="text-xl font-bold text-slate-700 mb-2">Zone de Contenu : {title}</h3>
    <p className="text-slate-500 max-w-md">
      Cette section est en attente de construction.
      <br />
      {type === 'lab'
        ? "C'est ici que tu intégreras tes démos interactives React (comme le Perceptron)."
        : "C'est ici que tu rédigeras tes explications théoriques, formules et schémas."}
    </p>
    <button
      className="mt-6 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
      + Ajouter le code pour "{title}"
    </button>
  </div>
);

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
      <aside className={` fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-300 transform transition-transform
        duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative
        lg:translate-x-0 `}>
        {/* Logo Area */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-white text-xl">
            <Cpu className="w-8 h-8 text-indigo-500" />
            <span>AI MasterClass</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {COURSE_STRUCTURE.map((module) => (
            <div key={module.id} className="mb-6">
              <div
                className="px-6 mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                {module.icon}
                {module.title}
              </div>
              <ul>
                {module.sections.map((section) => (
                  <li key={section.id}>
                    <button onClick={() => {
                      setActiveSection(section);
                      setMobileMenuOpen(false); // Fermer menu sur mobile après clic
                    }}
                      className={`w-full text-left px-6 py-2 text-sm border-l-4 transition-all flex items-center
                            justify-between group
                            ${activeSection.id === section.id
                          ? 'border-indigo-500 bg-slate-800 text-white'
                          : 'border-transparent hover:bg-slate-800/50 hover:text-white'
                        }`}
                    >
                      <span>{section.title}</span>
                      {section.type === 'lab' && (
                        <FlaskConical className={`w-3 h-3 ${activeSection.id === section.id ? 'text-indigo-400'
                          : 'text-slate-600 group-hover:text-slate-500'}`} />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* User Profile / Bottom Sidebar */}
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          Plateforme d'apprentissage v1.0
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

        {/* Top Header */}
        <header
          className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
              <Menu className="w-6 h-6 text-slate-600" />
            </button>

            {/* Fil d'ariane (Breadcrumbs) */}
            <div className="flex items-center text-sm text-slate-500">
              <span className="hidden md:inline">{currentModule?.title}</span>
              <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
              <span className="font-semibold text-slate-800 truncate max-w-[200px] md:max-w-none">
                {activeSection.title}
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-2
                ${activeSection.type === 'lab' ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
              : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
            {activeSection.type === 'lab'
              ? <>
                <FlaskConical className="w-3 h-3" /> LABORATOIRE INTERACTIF
              </>
              : <>
                <BookOpen className="w-3 h-3" /> THÉORIE & CONCEPTS
              </>
            }
          </div>
        </header>

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
                    Pour l'instant, on affiche le Placeholder.
                    Plus tard, tu feras un switch(activeSection.id) pour afficher tes vrais composants.
                    */}

              {activeSection.id === 'ml-3' ? (
                // Exemple : Si c'est la section 'ml-3', on pourrait afficher ton composant précédent ici
                //
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