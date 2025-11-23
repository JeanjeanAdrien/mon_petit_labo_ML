import React, { useState } from 'react';
import { Database, Cpu, BrainCircuit, ChefHat, Utensils, Flame, ArrowRight, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const TheThreePillars = () => {
    const [activePillar, setActivePillar] = useState(null);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showQuizResult, setShowQuizResult] = useState(false);

    const pillars = [
        {
            id: 'data',
            title: 'La Donnée',
            subtitle: 'Le Carburant / Les Ingrédients',
            icon: <Database className="w-8 h-8 text-blue-500" />,
            color: 'blue',
            analogy: 'Les Ingrédients 🍅',
            description: "C'est la matière première. Sans données (images, textes, chiffres), la machine n'a rien à étudier. C'est comme vouloir cuisiner sans ingrédients : impossible !",
            details: "Plus on a de données de qualité, plus l'apprentissage est précis. C'est l'expérience accumulée par la machine."
        },
        {
            id: 'algo',
            title: "L'Algorithme",
            subtitle: 'Le Moteur / La Recette',
            icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
            color: 'purple',
            analogy: 'La Recette 📜',
            description: "C'est la méthode mathématique qui permet d'apprendre. Ce n'est pas un code figé, mais une structure qui s'adapte pour trouver des liens entre les données.",
            details: "Il existe plein d'algorithmes différents (Réseaux de neurones, Arbres de décision...) selon le problème à résoudre."
        },
        {
            id: 'compute',
            title: 'La Puissance',
            subtitle: "L'Énergie / Le Cuisinier",
            icon: <Cpu className="w-8 h-8 text-orange-500" />,
            color: 'orange',
            analogy: 'Le Cuisinier & Le Four 👨‍🍳',
            description: "C'est la capacité de calcul (processeurs, cartes graphiques) nécessaire pour traiter les données et faire tourner l'algorithme.",
            details: "Aujourd'hui, on utilise des GPU (cartes graphiques) ultra-puissantes pour entraîner des modèles géants comme ChatGPT."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Si j'ai une super recette (algorithme) et un four puissant (calcul), mais pas d'ingrédients (données), que se passe-t-il ?",
            options: [
                { id: 'a', text: "Je fais un excellent plat" },
                { id: 'b', text: "Je ne peux rien cuisiner", correct: true },
                { id: 'c', text: "La machine invente les ingrédients" }
            ]
        },
        {
            id: 2,
            question: "Quel composant joue le rôle du 'Cerveau' mathématique ?",
            options: [
                { id: 'a', text: "La Donnée" },
                { id: 'b', text: "La Puissance de Calcul" },
                { id: 'c', text: "L'Algorithme", correct: true }
            ]
        },
        {
            id: 3,
            question: "Pourquoi a-t-on besoin de beaucoup de puissance de calcul aujourd'hui ?",
            options: [
                { id: 'a', text: "Pour traiter des quantités massives de données", correct: true },
                { id: 'b', text: "Pour afficher de belles images" },
                { id: 'c', text: "Pour stocker les fichiers" }
            ]
        }
    ];

    const handleAnswer = (questionId, optionId) => {
        setQuizAnswers({ ...quizAnswers, [questionId]: optionId });
    };

    const checkQuiz = () => {
        setShowQuizResult(true);
    };

    const getScore = () => {
        let score = 0;
        quizQuestions.forEach(q => {
            const selected = q.options.find(o => o.id === quizAnswers[q.id]);
            if (selected && selected.correct) score++;
        });
        return score;
    };

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                        <Database className="w-8 h-8 text-emerald-400" />
                    </div>
                    Les 3 Piliers de l'Apprentissage
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                    Pour qu'une Intelligence Artificielle fonctionne, il ne suffit pas de code.
                    Il faut réunir trois ingrédients indispensables. Sans l'un d'eux, la magie n'opère pas !
                </p>
            </div>

            {/* Analogie Cuisine */}
            <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <ChefHat className="w-6 h-6 text-amber-500" />
                    L'Analogie de la Cuisine
                </h2>
                <p className="text-slate-600 mb-8 text-lg">
                    Imagine que tu veux préparer un plat gastronomique. De quoi as-tu absolument besoin ?
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className={`
                                relative overflow-hidden rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg
                                ${activePillar === pillar.id
                                    ? `border-${pillar.color}-500 bg-${pillar.color}-50 ring-2 ring-${pillar.color}-200`
                                    : 'border-slate-100 hover:border-slate-300 bg-slate-50'
                                }
                            `}
                            onClick={() => setActivePillar(pillar.id)}
                        >
                            <div className={`
                                w-12 h-12 rounded-full flex items-center justify-center mb-4
                                ${activePillar === pillar.id ? `bg-${pillar.color}-500 text-white` : `bg-white text-${pillar.color}-500 shadow-sm`}
                            `}>
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                            <p className={`text-sm font-medium text-${pillar.color}-600 mb-3`}>{pillar.analogy}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {pillar.description}
                            </p>

                            {activePillar === pillar.id && (
                                <div className="mt-4 pt-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2">
                                    <p className="text-sm text-slate-700 italic">
                                        💡 {pillar.details}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center text-slate-500 text-sm">
                    👆 Clique sur les cartes pour voir les détails
                </div>
            </section>

            {/* L'Interaction */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi les 3 sont liés ?</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <p className="text-slate-700"><strong>Pas de Données :</strong> L'algo n'a rien à apprendre. C'est un cuisinier sans ingrédients.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <p className="text-slate-700"><strong>Pas d'Algorithme :</strong> Les données restent brutes. C'est avoir des ingrédients mais pas de recette.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <p className="text-slate-700"><strong>Pas de Puissance :</strong> Le calcul prendrait des siècles. C'est vouloir cuire un bœuf bourguignon avec une bougie.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0 bg-white rounded-full opacity-50 animate-pulse"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-blue-100 p-3 rounded-full shadow-sm">
                                <Database className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="absolute bottom-0 left-0 -mb-2 bg-purple-100 p-3 rounded-full shadow-sm">
                                <BrainCircuit className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="absolute bottom-0 right-0 -mb-2 bg-orange-100 p-3 rounded-full shadow-sm">
                                <Cpu className="w-6 h-6 text-orange-500" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-2xl font-bold text-slate-800">IA</span>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full mt-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quiz Rapide */}
            <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-emerald-500" />
                    Quiz Rapide
                </h2>

                <div className="space-y-6">
                    {quizQuestions.map((q) => (
                        <div key={q.id} className="space-y-3">
                            <p className="font-medium text-slate-800">{q.id}. {q.question}</p>
                            <div className="grid md:grid-cols-3 gap-3">
                                {q.options.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => !showQuizResult && handleAnswer(q.id, opt.id)}
                                        className={`
                                            p-3 rounded-lg text-sm text-left transition-all border
                                            ${quizAnswers[q.id] === opt.id
                                                ? 'bg-indigo-50 border-indigo-300 text-indigo-700 ring-1 ring-indigo-300'
                                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600'
                                            }
                                            ${showQuizResult && opt.correct ? 'bg-emerald-100 border-emerald-300 text-emerald-800 ring-1 ring-emerald-300' : ''}
                                            ${showQuizResult && quizAnswers[q.id] === opt.id && !opt.correct ? 'bg-red-100 border-red-300 text-red-800' : ''}
                                        `}
                                        disabled={showQuizResult}
                                    >
                                        {opt.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {!showQuizResult ? (
                    <button
                        onClick={checkQuiz}
                        disabled={Object.keys(quizAnswers).length < 3}
                        className="mt-8 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Vérifier mes réponses
                    </button>
                ) : (
                    <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center animate-in fade-in slide-in-from-bottom-4">
                        <p className="text-2xl font-bold text-emerald-800 mb-2">
                            Score : {getScore()} / 3
                        </p>
                        <p className="text-emerald-600">
                            {getScore() === 3 ? "Parfait ! Tu as tout compris. 🎓" : "Presque ! Relis bien les explications."}
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default TheThreePillars;
