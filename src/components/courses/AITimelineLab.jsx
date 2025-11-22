import React, { useState } from 'react';
import {
    Brain,
    Trophy,
    Zap,
    Snowflake,
    Sparkles,
    TrendingUp,
    Rocket,
    Eye,
    MessageSquare,
    Image as ImageIcon
} from 'lucide-react';

const AITimelineLab = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const timelineEvents = [
        {
            year: '1943',
            title: 'Neurones Artificiels',
            description: 'McCulloch & Pitts créent le premier modèle mathématique d\'un neurone artificiel.',
            details: 'Warren McCulloch et Walter Pitts publient "A Logical Calculus of Ideas Immanent in Nervous Activity", posant les bases théoriques des réseaux de neurones.',
            category: 'theory',
            icon: <Brain className="w-5 h-5" />,
            color: 'blue'
        },
        {
            year: '1950',
            title: 'Test de Turing',
            description: 'Alan Turing propose un test pour mesurer l\'intelligence d\'une machine.',
            details: 'Dans son article "Computing Machinery and Intelligence", Turing pose la question "Can machines think?" et propose son célèbre test d\'imitation.',
            category: 'theory',
            icon: <Brain className="w-5 h-5" />,
            color: 'blue'
        },
        {
            year: '1956',
            title: 'Naissance de l\'IA',
            description: 'La conférence de Dartmouth marque la création officielle du domaine de l\'IA.',
            details: 'John McCarthy, Marvin Minsky et d\'autres chercheurs se réunissent à Dartmouth. Le terme "Intelligence Artificielle" est utilisé pour la première fois.',
            category: 'milestone',
            icon: <Rocket className="w-5 h-5" />,
            color: 'purple'
        },
        {
            year: '1957',
            title: 'Le Perceptron',
            description: 'Frank Rosenblatt invente le Perceptron, premier algorithme d\'apprentissage supervisé.',
            details: 'Le Perceptron peut apprendre à classifier des patterns simples. C\'est l\'ancêtre des réseaux de neurones modernes.',
            category: 'breakthrough',
            icon: <Zap className="w-5 h-5" />,
            color: 'yellow'
        },
        {
            year: '1965-1973',
            title: 'Premier Hiver de l\'IA',
            description: 'Réduction du financement après des promesses non tenues.',
            details: 'Les limitations des Perceptrons et l\'échec à créer une IA générale mènent à une perte de confiance et de financement dans le domaine.',
            category: 'setback',
            icon: <Snowflake className="w-5 h-5" />,
            color: 'slate'
        },
        {
            year: '1980s',
            title: 'Systèmes Experts',
            description: 'Les systèmes experts connaissent un succès commercial.',
            details: 'Des systèmes comme MYCIN (médecine) et XCON (configuration informatique) démontrent la valeur pratique de l\'IA dans des domaines spécialisés.',
            category: 'commercial',
            icon: <TrendingUp className="w-5 h-5" />,
            color: 'green'
        },
        {
            year: '1987-1993',
            title: 'Deuxième Hiver de l\'IA',
            description: 'Effondrement du marché des systèmes experts.',
            details: 'Les limitations des systèmes experts (coûts de maintenance, fragilité) et l\'arrivée des PC causent un nouvel "hiver" pour l\'IA.',
            category: 'setback',
            icon: <Snowflake className="w-5 h-5" />,
            color: 'slate'
        },
        {
            year: '1997',
            title: 'Deep Blue vs Kasparov',
            description: 'Le superordinateur d\'IBM bat le champion du monde d\'échecs.',
            details: 'Deep Blue devient le premier ordinateur à vaincre un champion du monde d\'échecs en titre, marquant un tournant symbolique.',
            category: 'milestone',
            icon: <Trophy className="w-5 h-5" />,
            color: 'purple'
        },
        {
            year: '2011',
            title: 'IBM Watson à Jeopardy',
            description: 'Watson bat les champions humains au jeu télévisé Jeopardy.',
            details: 'Watson démontre sa capacité à comprendre le langage naturel et à répondre à des questions complexes, ouvrant la voie au NLP moderne.',
            category: 'milestone',
            icon: <Trophy className="w-5 h-5" />,
            color: 'purple'
        },
        {
            year: '2012',
            title: 'AlexNet & Deep Learning',
            description: 'AlexNet remporte ImageNet avec une marge spectaculaire grâce aux réseaux profonds.',
            details: 'Cette victoire marque le début de la révolution du Deep Learning. Les GPU et les grandes quantités de données rendent enfin les réseaux profonds efficaces.',
            category: 'breakthrough',
            icon: <Zap className="w-5 h-5" />,
            color: 'yellow'
        },
        {
            year: '2016',
            title: 'AlphaGo vs Lee Sedol',
            description: 'AlphaGo bat le champion du monde de jeu de Go.',
            details: 'Le Go était considéré comme trop complexe pour les ordinateurs (10^170 positions possibles). AlphaGo utilise le Deep Learning et le reinforcement learning.',
            category: 'milestone',
            icon: <Trophy className="w-5 h-5" />,
            color: 'purple'
        },
        {
            year: '2017',
            title: 'Architecture Transformer',
            description: 'L\'article "Attention is All You Need" révolutionne le NLP.',
            details: 'Google introduit le mécanisme d\'attention et l\'architecture Transformer, qui deviendra la base de tous les grands modèles de langage modernes.',
            category: 'breakthrough',
            icon: <Zap className="w-5 h-5" />,
            color: 'yellow'
        },
        {
            year: '2018-2020',
            title: 'Ère des LLM',
            description: 'Émergence des grands modèles de langage (GPT-2, GPT-3, BERT).',
            details: 'OpenAI lance GPT-2 puis GPT-3 (175 milliards de paramètres). Ces modèles démontrent des capacités impressionnantes en génération de texte.',
            category: 'breakthrough',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'yellow'
        },
        {
            year: '2022',
            title: 'Explosion de l\'IA Générative',
            description: 'ChatGPT, Stable Diffusion, Midjourney rendent l\'IA accessible au grand public.',
            details: 'ChatGPT atteint 100 millions d\'utilisateurs en 2 mois. Les modèles de diffusion permettent de générer des images réalistes à partir de texte.',
            category: 'commercial',
            icon: <Sparkles className="w-5 h-5" />,
            color: 'green'
        },
        {
            year: '2023',
            title: 'IA Multimodale',
            description: 'GPT-4 combine texte et vision. Les modèles deviennent multimodaux.',
            details: 'GPT-4V peut analyser des images. Les modèles commencent à combiner plusieurs modalités (texte, image, audio, vidéo).',
            category: 'breakthrough',
            icon: <Eye className="w-5 h-5" />,
            color: 'yellow'
        },
        {
            year: '2024-2025',
            title: 'Agents Autonomes',
            description: 'L\'IA évolue vers des agents capables de planifier et d\'agir de manière autonome.',
            details: 'Les agents IA peuvent maintenant utiliser des outils, naviguer sur le web, écrire du code et exécuter des tâches complexes avec peu de supervision.',
            category: 'breakthrough',
            icon: <Rocket className="w-5 h-5" />,
            color: 'yellow'
        }
    ];

    const getCategoryStyle = (category) => {
        const styles = {
            theory: 'bg-blue-100 text-blue-700 border-blue-200',
            breakthrough: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            milestone: 'bg-purple-100 text-purple-700 border-purple-200',
            commercial: 'bg-green-100 text-green-700 border-green-200',
            setback: 'bg-slate-100 text-slate-600 border-slate-200'
        };
        return styles[category] || styles.theory;
    };

    const getCategoryLabel = (category) => {
        const labels = {
            theory: 'Théorie',
            breakthrough: 'Percée',
            milestone: 'Jalon',
            commercial: 'Commercial',
            setback: 'Recul'
        };
        return labels[category] || 'Événement';
    };

    const getColorStyles = (color) => {
        const colors = {
            blue: 'bg-blue-500 hover:bg-blue-600 ring-blue-200',
            purple: 'bg-purple-500 hover:bg-purple-600 ring-purple-200',
            yellow: 'bg-yellow-500 hover:bg-yellow-600 ring-yellow-200',
            green: 'bg-green-500 hover:bg-green-600 ring-green-200',
            slate: 'bg-slate-400 hover:bg-slate-500 ring-slate-200'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Voyage dans le Temps de l'IA</h2>
                        <p className="text-slate-700 leading-relaxed">
                            De la théorie à la pratique, des hivers glacials aux percées spectaculaires...
                            Explorez les moments qui ont façonné l'Intelligence Artificielle moderne.
                            <strong> Survolez les événements</strong> pour en savoir plus !
                        </p>
                    </div>
                </div>
            </section>

            {/* Legend */}
            <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                    💡 Théorie
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                    ⚡ Percée
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                    🏆 Jalon
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-200">
                    💼 Commercial
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    ❄️ Recul
                </span>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Central vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-300"></div>

                {/* Events */}
                <div className="space-y-0">
                    {timelineEvents.map((event, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={index} className="relative">
                                {/* Connector dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div
                                        className={`w-12 h-12 rounded-full ${getColorStyles(event.color)} 
                      text-white flex items-center justify-center cursor-pointer 
                      transition-all duration-300 ring-4 ring-white shadow-lg
                      hover:scale-110 hover:shadow-xl`}
                                        onMouseEnter={() => setSelectedEvent(index)}
                                        onMouseLeave={() => setSelectedEvent(null)}
                                    >
                                        {event.icon}
                                    </div>
                                </div>

                                {/* Event card */}
                                <div className={`grid grid-cols-2 gap-8 py-4 ${isLeft ? '' : ''}`}>
                                    {/* Left side */}
                                    <div className={`${isLeft ? 'text-right' : 'opacity-0 pointer-events-none'}`}>
                                        {isLeft && (
                                            <div
                                                className={`inline-block max-w-md cursor-pointer transition-all duration-300
                          ${selectedEvent === index ? 'scale-105' : 'scale-100'}`}
                                                onMouseEnter={() => setSelectedEvent(index)}
                                                onMouseLeave={() => setSelectedEvent(null)}
                                            >
                                                <div className={`bg-white rounded-xl p-5 shadow-md border-2 transition-all duration-300
                          ${selectedEvent === index ? 'border-indigo-400 shadow-lg' : 'border-slate-200'}`}
                                                >
                                                    <div className="flex items-center justify-end gap-2 mb-2">
                                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getCategoryStyle(event.category)}`}>
                                                            {getCategoryLabel(event.category)}
                                                        </span>
                                                        <span className="text-2xl font-bold text-slate-900">{event.year}</span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h3>
                                                    <p className="text-sm text-slate-600 mb-2">{event.description}</p>
                                                    {selectedEvent === index && (
                                                        <div className="mt-3 pt-3 border-t border-slate-200 animate-in fade-in duration-300">
                                                            <p className="text-sm text-slate-700 italic">{event.details}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right side */}
                                    <div className={`${!isLeft ? 'text-left' : 'opacity-0 pointer-events-none'}`}>
                                        {!isLeft && (
                                            <div
                                                className={`inline-block max-w-md cursor-pointer transition-all duration-300
                          ${selectedEvent === index ? 'scale-105' : 'scale-100'}`}
                                                onMouseEnter={() => setSelectedEvent(index)}
                                                onMouseLeave={() => setSelectedEvent(null)}
                                            >
                                                <div className={`bg-white rounded-xl p-5 shadow-md border-2 transition-all duration-300
                          ${selectedEvent === index ? 'border-indigo-400 shadow-lg' : 'border-slate-200'}`}
                                                >
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-2xl font-bold text-slate-900">{event.year}</span>
                                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getCategoryStyle(event.category)}`}>
                                                            {getCategoryLabel(event.category)}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h3>
                                                    <p className="text-sm text-slate-600 mb-2">{event.description}</p>
                                                    {selectedEvent === index && (
                                                        <div className="mt-3 pt-3 border-t border-slate-200 animate-in fade-in duration-300">
                                                            <p className="text-sm text-slate-700 italic">{event.details}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Conclusion */}
            <section className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Et ce n'est que le début...
                </h3>
                <p className="leading-relaxed mb-3">
                    Nous vivons actuellement l'une des périodes les plus excitantes de l'histoire de l'IA.
                    Les progrès s'accélèrent chaque mois, et nous sommes témoins de l'émergence de capacités
                    que nous pensions impossibles il y a seulement quelques années.
                </p>
                <p className="text-purple-100 text-sm">
                    💡 <strong>À retenir :</strong> L'IA a connu des hauts et des bas, mais chaque "hiver"
                    a été suivi d'un renouveau encore plus puissant. La persévérance et l'innovation
                    ont toujours fini par triompher !
                </p>
            </section>

            {/* Next Step */}
            <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🚀 Prochaine étape</h3>
                <p className="text-slate-700">
                    Maintenant que vous connaissez l'histoire de l'IA, découvrons ce qui la fait fonctionner :
                    <strong> la data</strong>, le carburant de l'intelligence artificielle !
                </p>
            </section>
        </div>
    );
};

export default AITimelineLab;
