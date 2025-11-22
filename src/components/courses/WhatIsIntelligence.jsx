import React from 'react';
import { Brain, Lightbulb, Sparkles, Users, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const WhatIsIntelligence = () => {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section className="prose prose-slate max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-3">Bienvenue dans l'univers de l'Intelligence Artificielle !</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-0">
                                Avant de plonger dans les algorithmes et le code, posons-nous une question fondamentale :
                                <strong> qu'est-ce que l'intelligence ?</strong> Cette question, apparemment simple, a fasciné
                                philosophes, scientifiques et chercheurs pendant des siècles. Aujourd'hui, nous allons explorer
                                ce concept et comprendre comment nous avons appris à le recréer artificiellement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Définition de l'Intelligence */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Qu'est-ce que l'Intelligence ?
                </h3>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <p className="text-slate-700 mb-4 leading-relaxed">
                        L'intelligence peut être définie comme la <strong>capacité à apprendre, comprendre, raisonner et s'adapter</strong>
                        à de nouvelles situations. Chez les humains, elle se manifeste par :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Apprentissage</h4>
                                <p className="text-sm text-slate-600">Acquérir des connaissances par l'expérience</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Raisonnement</h4>
                                <p className="text-sm text-slate-600">Utiliser la logique pour résoudre des problèmes</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Adaptation</h4>
                                <p className="text-sm text-slate-600">S'ajuster à de nouvelles situations</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Créativité</h4>
                                <p className="text-sm text-slate-600">Générer des idées nouvelles et originales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intelligence Artificielle */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-indigo-500" />
                    Et l'Intelligence Artificielle ?
                </h3>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <p className="text-slate-700 mb-4 leading-relaxed">
                        L'<strong>Intelligence Artificielle (IA)</strong> est le domaine de l'informatique qui vise à créer des
                        systèmes capables de reproduire certaines capacités de l'intelligence humaine. Plutôt que de programmer
                        explicitement chaque action, nous créons des systèmes qui peuvent :
                    </p>
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 font-bold">→</span>
                            <span><strong>Apprendre</strong> à partir de données (sans être explicitement programmés)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 font-bold">→</span>
                            <span><strong>Reconnaître des patterns</strong> complexes dans les informations</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 font-bold">→</span>
                            <span><strong>Prendre des décisions</strong> basées sur leurs apprentissages</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 font-bold">→</span>
                            <span><strong>S'améliorer</strong> avec le temps et l'expérience</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Histoire Rapide */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Un peu d'histoire...</h3>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="divide-y divide-slate-100">
                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    1950
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">Le Test de Turing</h4>
                                    <p className="text-sm text-slate-600">
                                        Alan Turing propose un test pour déterminer si une machine peut "penser" :
                                        si un humain ne peut pas distinguer les réponses de la machine de celles d'un humain,
                                        alors la machine est considérée comme intelligente.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    1956
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">Naissance officielle de l'IA</h4>
                                    <p className="text-sm text-slate-600">
                                        Lors de la conférence de Dartmouth, le terme "Intelligence Artificielle" est utilisé
                                        pour la première fois. Les chercheurs sont optimistes : ils pensent créer une machine
                                        aussi intelligente qu'un humain en quelques décennies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    2012
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">L'ère du Deep Learning</h4>
                                    <p className="text-sm text-slate-600">
                                        AlexNet remporte le concours ImageNet avec une marge spectaculaire grâce aux réseaux de neurones profonds.
                                        C'est le début de la révolution moderne de l'IA que nous vivons aujourd'hui.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    2020+
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">L'explosion de l'IA Générative</h4>
                                    <p className="text-sm text-slate-600">
                                        GPT-3, DALL-E, ChatGPT, Midjourney... Les modèles d'IA deviennent capables de générer du texte,
                                        des images et du code de manière impressionnante. L'IA devient accessible au grand public.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types d'Intelligence Artificielle */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-500" />
                    Les 3 Niveaux d'Intelligence Artificielle
                </h3>
                <div className="grid gap-4">
                    {/* ANI */}
                    <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                1
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    ANI - Intelligence Artificielle Étroite (Narrow AI)
                                </h4>
                                <p className="text-slate-700 mb-3">
                                    <strong>C'est où nous sommes aujourd'hui.</strong> Les IA étroites excellent dans une tâche spécifique
                                    mais ne peuvent pas faire autre chose.
                                </p>
                                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-2">Exemples :</p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• AlphaGo : champion du jeu de Go (mais ne peut pas jouer aux échecs)</li>
                                        <li>• Siri/Alexa : assistants vocaux (mais ne conduisent pas de voiture)</li>
                                        <li>• GPT-4 : génère du texte (mais ne peut pas voir des images... enfin, maintenant si !)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AGI */}
                    <div className="bg-white rounded-xl p-6 border-2 border-yellow-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                2
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    AGI - Intelligence Artificielle Générale (General AI)
                                </h4>
                                <p className="text-slate-700 mb-3">
                                    <strong>L'objectif à long terme.</strong> Une IA qui peut comprendre, apprendre et appliquer
                                    son intelligence à n'importe quelle tâche intellectuelle comme un humain.
                                </p>
                                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-2">Caractéristiques :</p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Apprend de nouvelles tâches sans reprogrammation</li>
                                        <li>• Transfère ses connaissances d'un domaine à un autre</li>
                                        <li>• Comprend le contexte et le sens (pas juste des patterns)</li>
                                        <li className="text-orange-600 font-semibold">⚠️ N'existe pas encore (mais on y travaille !)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ASI */}
                    <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                3
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    ASI - Super Intelligence Artificielle
                                </h4>
                                <p className="text-slate-700 mb-3">
                                    <strong>Le domaine de la science-fiction (pour l'instant).</strong> Une IA qui surpasse
                                    l'intelligence humaine dans tous les domaines.
                                </p>
                                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-2">Concept théorique :</p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Dépasse les capacités humaines en créativité, résolution de problèmes, intelligence sociale</li>
                                        <li>• Pourrait résoudre les plus grands défis de l'humanité</li>
                                        <li>• Soulève d'importantes questions éthiques et de sécurité</li>
                                        <li className="text-red-600 font-semibold">⚠️ Purement hypothétique à ce jour</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exemples Concrets */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    L'IA dans ton quotidien
                </h3>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                    <p className="text-slate-700 mb-4">
                        Tu utilises probablement de l'IA tous les jours sans même t'en rendre compte !
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-slate-900 mb-1">📱 Smartphone</h5>
                            <p className="text-sm text-slate-600">Reconnaissance faciale, assistant vocal, correction automatique</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-slate-900 mb-1">🎵 Streaming</h5>
                            <p className="text-sm text-slate-600">Recommandations Netflix, Spotify qui connaît tes goûts musicaux</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-slate-900 mb-1">📧 Email</h5>
                            <p className="text-sm text-slate-600">Filtres anti-spam, suggestions de réponses automatiques</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-slate-900 mb-1">🚗 Navigation</h5>
                            <p className="text-sm text-slate-600">Google Maps optimise ton trajet en temps réel</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-slate-900 mb-1">🛍️ E-commerce</h5>
                            <p className="text-sm text-slate-600">Recommandations de produits personnalisées</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-slate-900 mb-1">📸 Photos</h5>
                            <p className="text-sm text-slate-600">Détection automatique de visages, amélioration d'images</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Points Clés à Retenir */}
            <section>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6" />
                        Points Clés à Retenir
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">💡</span>
                            <span className="leading-relaxed">
                                L'intelligence est la capacité à <strong>apprendre, raisonner et s'adapter</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">🤖</span>
                            <span className="leading-relaxed">
                                L'IA reproduit certaines capacités de l'intelligence humaine via des algorithmes
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">📊</span>
                            <span className="leading-relaxed">
                                Les IA actuelles sont <strong>étroites</strong> (ANI) : excellentes sur une tâche spécifique
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">🎯</span>
                            <span className="leading-relaxed">
                                L'AGI (intelligence générale) est l'objectif à long terme, l'ASI reste théorique
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">🌍</span>
                            <span className="leading-relaxed">
                                L'IA est déjà partout dans notre quotidien, souvent invisible
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Prochaine Étape */}
            <section>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">🚀 Prochaine étape</h3>
                    <p className="text-slate-700">
                        Maintenant que tu comprends ce qu'est l'intelligence et l'IA, nous allons explorer visuellement
                        l'histoire fascinante de l'Intelligence Artificielle avec une <strong>frise chronologique interactive</strong>.
                        Prêt(e) à voyager dans le temps ?
                    </p>
                </div>
            </section>
        </div>
    );
};

export default WhatIsIntelligence;
