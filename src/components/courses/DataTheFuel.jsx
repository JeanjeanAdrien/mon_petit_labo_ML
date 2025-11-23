import React from 'react';
import { Database, Droplet, TrendingUp, AlertTriangle, CheckCircle2, Zap, Filter, Target } from 'lucide-react';

const DataTheFuel = () => {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <section className="prose prose-slate max-w-none">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                            <Database className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-3">La Data : Le carburant de l'IA</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-0">
                                Si l'Intelligence Artificielle était une voiture, <strong>les données seraient l'essence</strong> qui
                                la fait rouler. Sans données, même l'algorithme le plus sophistiqué ne peut rien faire. Comprendre
                                les données est donc la première étape essentielle pour maîtriser le Machine Learning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pourquoi les données ? */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Droplet className="w-6 h-6 text-cyan-500" />
                    Pourquoi les données sont-elles si importantes ?
                </h3>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <p className="text-slate-700 mb-4 leading-relaxed">
                        L'Intelligence Artificielle moderne repose sur un principe fondamental : <strong>apprendre à partir d'exemples</strong>.
                        Plutôt que de programmer explicitement chaque règle, nous montrons à la machine des milliers (voire des millions)
                        d'exemples, et elle apprend à reconnaître des patterns.
                    </p>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-5 border border-cyan-100">
                        <p className="text-slate-800 font-semibold mb-2">🧠 Analogie humaine :</p>
                        <p className="text-slate-700 text-sm leading-relaxed">
                            Comment as-tu appris à reconnaître un chat ? Personne ne t'a donné une formule mathématique.
                            Tu as vu des centaines de chats (en vrai, en photo, en dessin) et ton cerveau a appris
                            à identifier les caractéristiques communes : les oreilles pointues, les moustaches, la forme
                            du visage, etc. C'est exactement comme ça que fonctionne le Machine Learning !
                        </p>
                    </div>
                </div>
            </section>

            {/* L'équation du ML */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-indigo-500" />
                    L'équation magique du Machine Learning
                </h3>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <div className="text-center mb-6">
                        <div className="inline-block bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-200">
                            <p className="text-3xl font-bold text-slate-900 mb-2">
                                Données + Algorithme = Modèle Intelligent
                            </p>
                            <p className="text-sm text-slate-600">La formule de base du ML</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
                            <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-3">
                                1
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2">📊 Les Données</h4>
                            <p className="text-sm text-slate-600">
                                Les exemples d'apprentissage. Plus il y en a (et plus ils sont de qualité), mieux c'est.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
                            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mb-3">
                                2
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2">⚙️ L'Algorithme</h4>
                            <p className="text-sm text-slate-600">
                                La "recette" mathématique qui va analyser les données et trouver des patterns.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
                            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mb-3">
                                3
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2">🎯 Le Modèle</h4>
                            <p className="text-sm text-slate-600">
                                Le résultat : un système capable de faire des prédictions sur de nouvelles données !
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types de données */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Filter className="w-6 h-6 text-emerald-500" />
                    Les différents types de données
                </h3>
                <div className="space-y-4">
                    {/* Données structurées */}
                    <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 text-2xl">
                                📊
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    Données Structurées
                                </h4>
                                <p className="text-slate-700 mb-3">
                                    Des données bien organisées en <strong>tableaux</strong> avec des lignes et des colonnes,
                                    comme un fichier Excel ou une base de données.
                                </p>
                                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-2">Exemples :</p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Prix d'une maison → surface (m²), nombre de chambres, localisation, prix</li>
                                        <li>• Transactions bancaires → date, montant, catégorie, solde</li>
                                        <li>• Données météo → température, humidité, pression, précipitations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Données non structurées */}
                    <div className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-2xl">
                                🎨
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    Données Non Structurées
                                </h4>
                                <p className="text-slate-700 mb-3">
                                    Des données complexes qui n'ont pas de format tabulaire évident.
                                    Elles représentent la <strong>majorité des données dans le monde</strong> !
                                </p>
                                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                                    <p className="text-sm font-semibold text-slate-900 mb-2">Exemples :</p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• 📸 Images et photos</li>
                                        <li>• 📝 Texte et documents</li>
                                        <li>• 🎵 Audio et musique</li>
                                        <li>• 🎬 Vidéos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualité des données */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-500" />
                    La qualité avant la quantité
                </h3>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5">
                        <p className="text-lg font-semibold">
                            ⚠️ Règle d'or : "Garbage In, Garbage Out"
                        </p>
                        <p className="text-sm text-blue-100 mt-1">
                            Si tu nourris ton modèle avec des données de mauvaise qualité, il produira des résultats médiocres.
                        </p>
                    </div>
                    <div className="p-6">
                        <p className="text-slate-700 mb-4">
                            En Machine Learning, on dit souvent que <strong>80% du travail consiste à préparer les données</strong>,
                            et seulement 20% à construire le modèle. Voici les problèmes les plus courants :
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-1">Données manquantes</h5>
                                    <p className="text-sm text-slate-600">
                                        Des valeurs absentes dans ton dataset (cellules vides).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-1">Données bruitées</h5>
                                    <p className="text-sm text-slate-600">
                                        Des erreurs, des valeurs aberrantes (outliers), des mesures incorrectes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-1">Données biaisées</h5>
                                    <p className="text-sm text-slate-600">
                                        Un dataset non représentatif de la réalité (ex : 90% d'hommes dans un dataset de CV).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-1">Données dupliquées</h5>
                                    <p className="text-sm text-slate-600">
                                        Des lignes identiques répétées, qui faussent l'apprentissage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Le cycle de vie des données */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    Le cycle de vie des données en ML
                </h3>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="divide-y divide-slate-100">
                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">📥 Collecte</h4>
                                    <p className="text-sm text-slate-600">
                                        Rassembler les données depuis diverses sources (bases de données, APIs, capteurs, web scraping...).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">🧹 Nettoyage</h4>
                                    <p className="text-sm text-slate-600">
                                        Supprimer les doublons, corriger les erreurs, gérer les valeurs manquantes.
                                        C'est souvent l'étape la plus longue !
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">🔧 Transformation</h4>
                                    <p className="text-sm text-slate-600">
                                        Normaliser les valeurs, créer de nouvelles features, encoder les variables catégorielles...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                                    4
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">✂️ Division</h4>
                                    <p className="text-sm text-slate-600">
                                        Séparer les données en ensembles d'entraînement (train) et de test pour évaluer le modèle.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                                    5
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 mb-1">🎯 Entraînement</h4>
                                    <p className="text-sm text-slate-600">
                                        Utiliser les données pour entraîner le modèle ML et lui permettre d'apprendre.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exemple concret */}
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">💡 Exemple concret</h3>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">
                        Prédire le prix d'une maison 🏠
                    </h4>
                    <div className="space-y-3 text-slate-700">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong>Données nécessaires :</strong> Surface (m²), nombre de chambres, localisation,
                                année de construction, proximité des transports...
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong>Quantité :</strong> Idéalement des milliers d'exemples de ventes passées
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong>Qualité :</strong> Données fiables, à jour, sans erreurs de saisie
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong>Résultat :</strong> Un modèle capable d'estimer le prix d'une nouvelle maison
                                en fonction de ses caractéristiques !
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Points clés */}
            <section>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Database className="w-6 h-6" />
                        Points Clés à Retenir
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">⛽</span>
                            <span className="leading-relaxed">
                                Les données sont le <strong>carburant</strong> essentiel de toute IA
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">📊</span>
                            <span className="leading-relaxed">
                                Il existe des données <strong>structurées</strong> (tableaux) et <strong>non structurées</strong> (images, texte...)
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">✨</span>
                            <span className="leading-relaxed">
                                La <strong>qualité</strong> des données est plus importante que la quantité
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">🧹</span>
                            <span className="leading-relaxed">
                                Le nettoyage et la préparation des données représentent <strong>80% du travail</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">⚠️</span>
                            <span className="leading-relaxed">
                                "Garbage In, Garbage Out" : de mauvaises données = de mauvais résultats
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Prochaine étape */}
            <section>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">🚀 Prochaine étape</h3>
                    <p className="text-slate-700">
                        Maintenant que tu comprends l'importance des données, il est temps de mettre la main à la pâte !
                        Dans le prochain labo, tu vas <strong>nettoyer un vrai jeu de données</strong> et découvrir concrètement
                        les défis du traitement des données. Enfile ta blouse de data scientist ! 🧪
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DataTheFuel;
