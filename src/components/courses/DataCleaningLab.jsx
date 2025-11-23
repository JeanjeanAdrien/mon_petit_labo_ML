import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Trash2, Wand2, Search, Award, TrendingUp, Info, Sparkles } from 'lucide-react';

// Dataset initial avec problèmes variés
const generateInitialDataset = () => [
    { id: 1, nom: 'DUPONT Jean', email: 'jean.dupont@email.com', age: 32, ville: 'Paris', salaire: 45000, dateInscription: '2023-01-15' },
    { id: 2, nom: 'Martin Sophie', email: 'sophie.martin@email', age: null, ville: 'Lyon', salaire: 52000, dateInscription: '2023-02-20' },
    { id: 3, nom: 'BERNARD Paul', email: 'paul.bernard@email.com', age: 28, ville: 'Marseille', salaire: -5000, dateInscription: '15/03/2023' },
    { id: 4, nom: 'Dubois Marie', email: 'marie.dubois@email.com', age: 250, ville: 'Toulouse', salaire: 48000, dateInscription: '2023-04-10' },
    { id: 5, nom: 'DUPONT Jean', email: 'jean.dupont@email.com', age: 32, ville: 'Paris', salaire: 45000, dateInscription: '2023-01-15' }, // Doublon
    { id: 6, nom: 'Lambert Thomas', email: 'thomas.lambert@email.com', age: 35, ville: null, salaire: 51000, dateInscription: '2023-05-22' },
    { id: 7, nom: 'rousseau claire', email: 'claire.rousseau@email.com', age: 29, ville: 'Nice', salaire: 47000, dateInscription: '2023-06-01' },
    { id: 8, nom: 'Moreau Lucas', email: 'lucas.moreau@invalid', age: 41, ville: 'Nantes', salaire: 55000, dateInscription: '2023-07-12' },
    { id: 9, nom: 'PETIT Emma', email: 'emma.petit@email.com', age: null, ville: 'Strasbourg', salaire: 49000, dateInscription: '01-08-2023' },
    { id: 10, nom: 'Simon Antoine', email: 'antoine.simon@email.com', age: 38, ville: 'Bordeaux', salaire: null, dateInscription: '2023-09-15' },
    { id: 11, nom: 'Laurent Camille', email: 'camille.laurent@email.com', age: -5, ville: 'Lille', salaire: 46000, dateInscription: '2023-10-20' },
    { id: 12, nom: 'DUPONT Jean', email: 'jean.dupont@email.com', age: 32, ville: 'Paris', salaire: 45000, dateInscription: '2023-01-15' }, // Doublon
    { id: 13, nom: 'Garcia Léa', email: 'lea.garcia@', age: 27, ville: 'Montpellier', salaire: 44000, dateInscription: '2023-11-05' },
    { id: 14, nom: 'roux maxime', email: 'maxime.roux@email.com', age: 33, ville: 'Rennes', salaire: 53000, dateInscription: '2023-12-01' },
];

const DataCleaningLab = () => {
    const [dataset, setDataset] = useState(generateInitialDataset());
    const [detectedProblems, setDetectedProblems] = useState({});
    const [problemsDetected, setProblemsDetected] = useState(false);
    const [stats, setStats] = useState({ total: 0, fixed: 0 });
    const [badges, setBadges] = useState([]);
    const [showSuccess, setShowSuccess] = useState('');

    // Détection des problèmes
    const detectProblems = () => {
        const problems = {};
        let totalProblems = 0;

        dataset.forEach((row, index) => {
            problems[index] = {
                nom: [],
                email: [],
                age: [],
                ville: [],
                salaire: [],
                dateInscription: [],
                isDuplicate: false
            };

            // Vérifier les valeurs manquantes
            Object.keys(row).forEach(key => {
                if (key !== 'id' && (row[key] === null || row[key] === undefined || row[key] === '')) {
                    problems[index][key].push('missing');
                    totalProblems++;
                }
            });

            // Vérifier le format du nom (incohérence majuscules)
            if (row.nom && (row.nom === row.nom.toUpperCase() || row.nom === row.nom.toLowerCase())) {
                problems[index].nom.push('inconsistent');
                totalProblems++;
            }

            // Vérifier le format de l'email
            if (row.email && !row.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                problems[index].email.push('invalid_format');
                totalProblems++;
            }

            // Vérifier les valeurs aberrantes d'âge
            if (row.age && (row.age < 0 || row.age > 120)) {
                problems[index].age.push('outlier');
                totalProblems++;
            }

            // Vérifier les valeurs aberrantes de salaire
            if (row.salaire && row.salaire < 0) {
                problems[index].salaire.push('outlier');
                totalProblems++;
            }

            // Vérifier le format de date
            if (row.dateInscription && !row.dateInscription.match(/^\d{4}-\d{2}-\d{2}$/)) {
                problems[index].dateInscription.push('invalid_format');
                totalProblems++;
            }

            // Vérifier les doublons
            const duplicates = dataset.filter((r, i) =>
                i !== index &&
                r.nom === row.nom &&
                r.email === row.email
            );
            if (duplicates.length > 0) {
                problems[index].isDuplicate = true;
                totalProblems++;
            }
        });

        setDetectedProblems(problems);
        setProblemsDetected(true);
        setStats({ ...stats, total: totalProblems });
        showSuccessMessage('🔍 Problèmes détectés ! Commence à nettoyer les données.');
    };

    // Supprimer les doublons
    const removeDuplicates = () => {
        const seen = new Set();
        const cleaned = dataset.filter(row => {
            const key = `${row.nom}-${row.email}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });

        const removed = dataset.length - cleaned.length;
        setDataset(cleaned);
        setStats(prev => ({ ...prev, fixed: prev.fixed + removed }));
        showSuccessMessage(`✅ ${removed} doublon(s) supprimé(s) !`);

        if (!badges.includes('duplicate_hunter')) {
            setBadges([...badges, 'duplicate_hunter']);
        }
    };

    // Remplir les valeurs manquantes avec des valeurs par défaut intelligentes
    const fillMissingValues = () => {
        let filled = 0;
        const updated = dataset.map(row => {
            const newRow = { ...row };

            if (!newRow.age) {
                newRow.age = 30; // Âge moyen par défaut
                filled++;
            }
            if (!newRow.ville) {
                newRow.ville = 'Non spécifié';
                filled++;
            }
            if (!newRow.salaire) {
                newRow.salaire = 48000; // Salaire médian par défaut
                filled++;
            }

            return newRow;
        });

        setDataset(updated);
        setStats(prev => ({ ...prev, fixed: prev.fixed + filled }));
        showSuccessMessage(`✅ ${filled} valeur(s) manquante(s) remplie(s) !`);

        if (!badges.includes('gap_filler')) {
            setBadges([...badges, 'gap_filler']);
        }
    };

    // Corriger les valeurs aberrantes
    const fixOutliers = () => {
        let fixed = 0;
        const updated = dataset.map(row => {
            const newRow = { ...row };

            if (newRow.age && newRow.age > 120) {
                newRow.age = 30; // Remplacer par l'âge moyen
                fixed++;
            }
            if (newRow.age && newRow.age < 0) {
                newRow.age = Math.abs(newRow.age);
                fixed++;
            }
            if (newRow.salaire && newRow.salaire < 0) {
                newRow.salaire = Math.abs(newRow.salaire);
                fixed++;
            }

            return newRow;
        });

        setDataset(updated);
        setStats(prev => ({ ...prev, fixed: prev.fixed + fixed }));
        showSuccessMessage(`✅ ${fixed} valeur(s) aberrante(s) corrigée(s) !`);

        if (!badges.includes('outlier_slayer')) {
            setBadges([...badges, 'outlier_slayer']);
        }
    };

    // Normaliser les formats
    const normalizeFormats = () => {
        let normalized = 0;
        const updated = dataset.map(row => {
            const newRow = { ...row };

            // Normaliser le nom (Première lettre majuscule)
            if (newRow.nom) {
                const words = newRow.nom.toLowerCase().split(' ');
                newRow.nom = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                normalized++;
            }

            // Corriger les emails incomplets
            if (newRow.email && !newRow.email.includes('.')) {
                newRow.email = newRow.email + '.com';
                normalized++;
            }

            // Normaliser les dates au format YYYY-MM-DD
            if (newRow.dateInscription && !newRow.dateInscription.match(/^\d{4}-\d{2}-\d{2}$/)) {
                // Essayer de convertir différents formats
                const parts = newRow.dateInscription.split(/[-/]/);
                if (parts.length === 3) {
                    if (parts[0].length === 4) {
                        // Déjà au bon format ou presque
                        newRow.dateInscription = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
                    } else {
                        // Format DD-MM-YYYY ou DD/MM/YYYY
                        newRow.dateInscription = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
                    }
                    normalized++;
                }
            }

            return newRow;
        });

        setDataset(updated);
        setStats(prev => ({ ...prev, fixed: prev.fixed + normalized }));
        showSuccessMessage(`✅ ${normalized} format(s) normalisé(s) !`);

        if (!badges.includes('format_master')) {
            setBadges([...badges, 'format_master']);
        }
    };

    // Afficher un message de succès temporaire
    const showSuccessMessage = (message) => {
        setShowSuccess(message);
        setTimeout(() => setShowSuccess(''), 3000);
    };

    // Calculer le score de qualité
    const calculateQualityScore = () => {
        if (stats.total === 0) return 0;
        return Math.round((stats.fixed / stats.total) * 100);
    };

    const qualityScore = calculateQualityScore();

    // Définir les couleurs du problème
    const getProblemColor = (problems) => {
        if (!problemsDetected || !problems) return '';
        if (problems.includes('missing')) return 'bg-red-100 border-red-300 text-red-900';
        if (problems.includes('outlier')) return 'bg-orange-100 border-orange-300 text-orange-900';
        if (problems.includes('invalid_format')) return 'bg-yellow-100 border-yellow-300 text-yellow-900';
        if (problems.includes('inconsistent')) return 'bg-purple-100 border-purple-300 text-purple-900';
        return '';
    };

    const badgeInfo = {
        duplicate_hunter: { icon: '🎯', title: 'Chasseur de Doublons', desc: 'A supprimé les doublons' },
        gap_filler: { icon: '🔧', title: 'Remplisseur Expert', desc: 'A rempli les valeurs manquantes' },
        outlier_slayer: { icon: '⚔️', title: 'Tueur d\'Aberrations', desc: 'A corrigé les valeurs aberrantes' },
        format_master: { icon: '✨', title: 'Maître des Formats', desc: 'A normalisé les formats' }
    };

    return (
        <div className="space-y-6">
            {/* Introduction */}
            <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Wand2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">🧪 Labo : Nettoyer un jeu de données</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Bienvenue dans ton premier laboratoire de Data Science ! Tu as devant toi un jeu de données
                            contenant des informations sur des clients... mais attention, il est <strong>plein d'erreurs</strong> !
                            Ta mission : le nettoyer pour le rendre exploitable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Statistiques et Score */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Problèmes détectés</span>
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Problèmes résolus</span>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-3xl font-bold text-emerald-600">{stats.fixed}</p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Score de qualité</span>
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-blue-600">{qualityScore}%</p>
                        {qualityScore >= 95 && <span className="text-sm text-emerald-600 font-semibold">🎉 Excellent !</span>}
                    </div>
                </div>
            </div>

            {/* Message de succès */}
            {showSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center gap-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <p className="text-emerald-800 font-medium">{showSuccess}</p>
                </div>
            )}

            {/* Outils de nettoyage */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-indigo-500" />
                    Outils de Nettoyage
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <button
                        onClick={detectProblems}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all shadow-sm hover:shadow-md"
                    >
                        <Search className="w-4 h-4" />
                        Détecter les problèmes
                    </button>

                    <button
                        onClick={removeDuplicates}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Trash2 className="w-4 h-4" />
                        Supprimer doublons
                    </button>

                    <button
                        onClick={fillMissingValues}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Wand2 className="w-4 h-4" />
                        Remplir valeurs manquantes
                    </button>

                    <button
                        onClick={fixOutliers}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        Corriger aberrations
                    </button>

                    <button
                        onClick={normalizeFormats}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Sparkles className="w-4 h-4" />
                        Normaliser formats
                    </button>
                </div>
            </div>

            {/* Légende des couleurs */}
            {problemsDetected && (
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        Légende des couleurs
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                            <span className="text-slate-700">Valeur manquante</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded"></div>
                            <span className="text-slate-700">Valeur aberrante</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
                            <span className="text-slate-700">Format invalide</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-100 border border-purple-300 rounded"></div>
                            <span className="text-slate-700">Incohérence</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Tableau de données */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ID</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Nom</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Email</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Âge</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Ville</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Salaire</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {dataset.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`hover:bg-slate-50 transition-colors ${detectedProblems[index]?.isDuplicate ? 'bg-purple-50' : ''}`}
                                >
                                    <td className="px-4 py-3 text-sm text-slate-900">{row.id}</td>
                                    <td className={`px-4 py-3 text-sm border ${getProblemColor(detectedProblems[index]?.nom)}`}>
                                        {row.nom || <span className="text-slate-400 italic">vide</span>}
                                    </td>
                                    <td className={`px-4 py-3 text-sm border ${getProblemColor(detectedProblems[index]?.email)}`}>
                                        {row.email || <span className="text-slate-400 italic">vide</span>}
                                    </td>
                                    <td className={`px-4 py-3 text-sm border ${getProblemColor(detectedProblems[index]?.age)}`}>
                                        {row.age ?? <span className="text-slate-400 italic">vide</span>}
                                    </td>
                                    <td className={`px-4 py-3 text-sm border ${getProblemColor(detectedProblems[index]?.ville)}`}>
                                        {row.ville || <span className="text-slate-400 italic">vide</span>}
                                    </td>
                                    <td className={`px-4 py-3 text-sm border ${getProblemColor(detectedProblems[index]?.salaire)}`}>
                                        {row.salaire !== null && row.salaire !== undefined
                                            ? `${row.salaire}€`
                                            : <span className="text-slate-400 italic">vide</span>
                                        }
                                    </td>
                                    <td className={`px-4 py-3 text-sm border ${getProblemColor(detectedProblems[index]?.dateInscription)}`}>
                                        {row.dateInscription || <span className="text-slate-400 italic">vide</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Badges */}
            {badges.length > 0 && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-600" />
                        Badges débloqués
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {badges.map(badge => (
                            <div key={badge} className="bg-white rounded-lg p-4 border border-yellow-200 flex items-center gap-3 animate-in fade-in duration-300">
                                <span className="text-3xl">{badgeInfo[badge].icon}</span>
                                <div>
                                    <h4 className="font-semibold text-slate-900">{badgeInfo[badge].title}</h4>
                                    <p className="text-sm text-slate-600">{badgeInfo[badge].desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Rapport final */}
            {qualityScore >= 95 && (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <Award className="w-6 h-6" />
                        🎉 Félicitations !
                    </h3>
                    <p className="text-lg mb-4">
                        Tu as atteint un score de qualité de <strong>{qualityScore}%</strong> !
                        Ton dataset est maintenant propre et prêt à être utilisé pour du Machine Learning.
                    </p>
                    <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-sm font-semibold mb-2">📊 Résumé :</p>
                        <ul className="text-sm space-y-1">
                            <li>• {stats.total} problèmes détectés au total</li>
                            <li>• {stats.fixed} problèmes corrigés</li>
                            <li>• {badges.length} badge(s) débloqué(s)</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Prochaine étape */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🚀 Prochaine étape</h3>
                <p className="text-slate-700">
                    Maintenant que tu maîtrises le nettoyage de données, nous allons découvrir les <strong>3 Piliers de l'Apprentissage Automatique</strong>.
                    Tu es prêt(e) pour la suite de l'aventure ?
                </p>
            </div>
        </div>
    );
};

export default DataCleaningLab;
