import React from 'react';
import { FlaskConical, PenTool } from 'lucide-react';

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

export default ContentPlaceholder;
