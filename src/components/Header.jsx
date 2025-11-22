import React from 'react';
import { Menu, ChevronRight, FlaskConical, BookOpen } from 'lucide-react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen, currentModule, activeSection }) => {
    return (
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
    );
};

export default Header;
