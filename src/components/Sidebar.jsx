import React from 'react';
import { Cpu, X, FlaskConical } from 'lucide-react';

const Sidebar = ({ courseStructure, activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
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
                {courseStructure.map((module) => (
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
    );
};

export default Sidebar;
