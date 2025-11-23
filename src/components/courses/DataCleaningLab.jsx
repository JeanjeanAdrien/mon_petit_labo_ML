import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle2, Trash2, Wand2, Search, Award, TrendingUp, Info, Sparkles, RotateCcw, Edit2, X } from 'lucide-react';

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
    const [history, setHistory] = useState([generateInitialDataset()]); // Historique pour Undo
    const [detectedProblems, setDetectedProblems] = useState({});
    const [problemsDetected, setProblemsDetected] = useState(false);
    const [stats, setStats] = useState({ total: 0, fixed: 0 });
    const [badges, setBadges] = useState([]);
    const [showSuccess, setShowSuccess] = useState('');
    const [editingCell, setEditingCell] = useState(null); // { rowIndex, key, value }
    const [hoveredProblem, setHoveredProblem] = useState(null); // { rowIndex, key, type }

    // Sauvegarder l'état dans l'historique
    const saveToHistory = (newDataset) => {
        const newHistory = [...history, newDataset];
        // Limiter l'historique à 10 étapes pour éviter de consommer trop de mémoire
        if (newHistory.length > 10) newHistory.shift();
        setHistory(newHistory);
        setDataset(newDataset);
    };

    // Annuler la dernière action
    const undo = () => {
        if (history.length > 1) {
            const previousDataset = history[history.length - 2];
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setDataset(previousDataset);
            // Recalculer les problèmes après undo
            if (problemsDetected) {
                // Petit hack : on attend que le state soit mis à jour pour redétecter
                setTimeout(() => detectProblems(previousDataset), 0);
            }
            showSuccessMessage('Action annulée ↩️');
        }
    };

    // Détection des problèmes (accepte un dataset optionnel pour le recalcul)
    const detectProblems = (currentDataset = dataset) => {
        const problems = {};
        let totalProblems = 0;

        currentDataset.forEach((row, index) => {
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
            const duplicates = currentDataset.filter((r, i) =>
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

        // Calculer les problèmes corrigés par rapport au total initial (estimé à ~25 pour ce dataset)
        // C'est une simplification, idéalement on garderait le compte initial
        const initialProblemsCount = 25;
        setStats({ total: totalProblems, fixed: Math.max(0, initialProblemsCount - totalProblems) });

        if (currentDataset === dataset) { // Afficher le message seulement si déclenché par l'utilisateur
            showSuccessMessage('🔍 Problèmes détectés ! Survole les cases rouges pour comprendre.');
        }
    };

    // Effet pour redétecter les problèmes quand le dataset change (si la détection est active)
    useEffect(() => {
        if (problemsDetected) {
            detectProblems(dataset);
        }
    }, [dataset]); // eslint-disable-line react-hooks/exhaustive-deps

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
        if (removed > 0) {
            saveToHistory(cleaned);
            showSuccessMessage(`✅ ${removed} doublon(s) supprimé(s) !`);
            if (!badges.includes('duplicate_hunter')) setBadges([...badges, 'duplicate_hunter']);
        } else {
            showSuccessMessage('Aucun doublon trouvé !');
        }
    };

    // Remplir les valeurs manquantes
    const fillMissingValues = () => {
        let filled = 0;
        const updated = dataset.map(row => {
            const newRow = { ...row };
            if (!newRow.age) { newRow.age = 30; filled++; }
            if (!newRow.ville) { newRow.ville = 'Non spécifié'; filled++; }
            if (!newRow.salaire) { newRow.salaire = 48000; filled++; }
            return newRow;
        });

        if (filled > 0) {
            saveToHistory(updated);
            showSuccessMessage(`✅ ${filled} valeur(s) manquante(s) remplie(s) !`);
            if (!badges.includes('gap_filler')) setBadges([...badges, 'gap_filler']);
        } else {
            showSuccessMessage('Aucune valeur manquante !');
        }
    };

    // Corriger les valeurs aberrantes
    const fixOutliers = () => {
        let fixed = 0;
        const updated = dataset.map(row => {
            const newRow = { ...row };
            if (newRow.age && newRow.age > 120) { newRow.age = 30; fixed++; }
            if (newRow.age && newRow.age < 0) { newRow.age = Math.abs(newRow.age); fixed++; }
            if (newRow.salaire && newRow.salaire < 0) { newRow.salaire = Math.abs(newRow.salaire); fixed++; }
            return newRow;
        });

        if (fixed > 0) {
            saveToHistory(updated);
            showSuccessMessage(`✅ ${fixed} valeur(s) aberrante(s) corrigée(s) !`);
            if (!badges.includes('outlier_slayer')) setBadges([...badges, 'outlier_slayer']);
        } else {
            showSuccessMessage('Aucune valeur aberrante !');
        }
    };

    // Normaliser les formats
    const normalizeFormats = () => {
        let normalized = 0;
        const updated = dataset.map(row => {
            const newRow = { ...row };
            if (newRow.nom) {
                const words = newRow.nom.toLowerCase().split(' ');
                const newNom = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                if (newNom !== newRow.nom) { newRow.nom = newNom; normalized++; }
            }
            if (newRow.email && !newRow.email.includes('.')) {
                newRow.email = newRow.email + '.com';
                normalized++;
            }
            if (newRow.dateInscription && !newRow.dateInscription.match(/^\d{4}-\d{2}-\d{2}$/)) {
                const parts = newRow.dateInscription.split(/[-/]/);
                if (parts.length === 3) {
                    if (parts[0].length === 4) {
                        newRow.dateInscription = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
                    } else {
                        newRow.dateInscription = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
                    }
                    normalized++;
                }
            }
            return newRow;
        });

        if (normalized > 0) {
            saveToHistory(updated);
            showSuccessMessage(`✅ ${normalized} format(s) normalisé(s) !`);
            if (!badges.includes('format_master')) setBadges([...badges, 'format_master']);
        } else {
            showSuccessMessage('Formats déjà corrects !');
        }
    };

    // Édition manuelle
    const handleCellClick = (rowIndex, key, value) => {
        setEditingCell({ rowIndex, key, value });
    };

    const handleCellChange = (e) => {
        setEditingCell({ ...editingCell, value: e.target.value });
    };

    const handleCellSave = () => {
        const updated = [...dataset];
        // Conversion de type si nécessaire
        let val = editingCell.value;
        if (editingCell.key === 'age' || editingCell.key === 'salaire') {
            val = val === '' ? null : Number(val);
        }

        updated[editingCell.rowIndex] = {
            ...updated[editingCell.rowIndex],
            [editingCell.key]: val
        };
        saveToHistory(updated);
        setEditingCell(null);
        showSuccessMessage('Modification manuelle enregistrée ✍️');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleCellSave();
        if (e.key === 'Escape') setEditingCell(null);
    };

    // Afficher un message de succès temporaire
    const showSuccessMessage = (message) => {
        setShowSuccess(message);
        setTimeout(() => setShowSuccess(''), 3000);
    };

    // Calculer le score de qualité
    const calculateQualityScore = () => {
        // Estimation simple : 100 - (nombre de problèmes * 4)
        // On s'assure que le score est entre 0 et 100
        const score = Math.max(0, 100 - (stats.total * 4));
        return score;
    };

    const qualityScore = calculateQualityScore();

    // Définir les couleurs du problème
    const getProblemColor = (problems) => {
        if (!problemsDetected || !problems || problems.length === 0) return '';
        if (problems.includes('missing')) return 'bg-red-100 border-red-300 text-red-900';
        if (problems.includes('outlier')) return 'bg-orange-100 border-orange-300 text-orange-900';
        if (problems.includes('invalid_format')) return 'bg-yellow-100 border-yellow-300 text-yellow-900';
        if (problems.includes('inconsistent')) return 'bg-purple-100 border-purple-300 text-purple-900';
        return '';
    };

    // Obtenir le message du tooltip
    const getTooltipMessage = (problems) => {
        if (!problems || problems.length === 0) return null;
        if (problems.includes('missing')) return "Valeur manquante : l'IA ne peut pas apprendre sur du vide !";
        if (problems.includes('outlier')) return "Valeur aberrante : semble impossible ou extrême.";
        if (problems.includes('invalid_format')) return "Format invalide : l'ordinateur ne pourra pas lire ça.";
        if (problems.includes('inconsistent')) return "Incohérence : majuscules/minuscules mélangées.";
        return null;
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
            <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 relative overflow-hidden">
                <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Wand2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">🧪 Labo : Nettoyer un jeu de données</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Bienvenue dans ton premier laboratoire de Data Science ! Ce jeu de données est <strong>plein d'erreurs</strong>.
                            Utilise les outils magiques ou modifie les cases manuellement (clic) pour le nettoyer.
                            <br />
                            <span className="text-sm text-emerald-700 font-semibold mt-1 inline-block">
                                Astuce : Survole les cases rouges pour comprendre l'erreur !
                            </span>
                        </p>
                    </div>
                </div>
                {/* Décoration de fond */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 blur-xl"></div>
            </section>

            {/* Statistiques et Score */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Problèmes restants</span>
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Problèmes résolus</span>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-3xl font-bold text-emerald-600">{stats.fixed}</p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">Score de qualité</span>
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${qualityScore >= 90 ? 'bg-emerald-500' : qualityScore >= 50 ? 'bg-blue-500' : 'bg-orange-500'}`}
                                style={{ width: `${qualityScore}%` }}
                            ></div>
                        </div>
                        <span className="text-xl font-bold text-slate-700">{qualityScore}%</span>
                    </div>
                </div>
            </div>

            {/* Message de succès */}
            {showSuccess && (
                <div className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <p className="font-medium">{showSuccess}</p>
                </div>
            )}

            {/* Outils de nettoyage */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Wand2 className="w-5 h-5 text-indigo-500" />
                        Outils de Nettoyage
                    </h3>

                    {/* Bouton Undo */}
                    <button
                        onClick={undo}
                        disabled={history.length <= 1}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Annuler la dernière action"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Annuler
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <button
                        onClick={() => detectProblems()}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all shadow-sm hover:shadow-md active:scale-95"
                    >
                        <Search className="w-4 h-4" />
                        Détecter les problèmes
                    </button>

                    <button
                        onClick={removeDuplicates}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                        <Trash2 className="w-4 h-4" />
                        Supprimer doublons
                    </button>

                    <button
                        onClick={fillMissingValues}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                        <Wand2 className="w-4 h-4" />
                        Remplir valeurs manquantes
                    </button>

                    <button
                        onClick={fixOutliers}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        Corriger aberrations
                    </button>

                    <button
                        onClick={normalizeFormats}
                        disabled={!problemsDetected}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                        <Sparkles className="w-4 h-4" />
                        Normaliser formats
                    </button>
                </div>
            </div>

            {/* Légende des couleurs */}
            {problemsDetected && (
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 animate-in fade-in slide-in-from-top-2">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        Légende (Survole les cases pour voir l'aide)
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
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden relative">
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
                                    className={`group hover:bg-slate-50 transition-colors ${detectedProblems[index]?.isDuplicate ? 'bg-purple-50' : ''}`}
                                >
                                    <td className="px-4 py-3 text-sm text-slate-500">{row.id}</td>

                                    {['nom', 'email', 'age', 'ville', 'salaire', 'dateInscription'].map((key) => {
                                        const problems = detectedProblems[index]?.[key];
                                        const hasProblem = problems && problems.length > 0;
                                        const isEditing = editingCell?.rowIndex === index && editingCell?.key === key;

                                        return (
                                            <td
                                                key={key}
                                                className={`px-4 py-3 text-sm border-b border-r border-slate-100 relative cursor-pointer transition-colors
                                                    ${getProblemColor(problems)}
                                                    ${!isEditing && 'hover:bg-slate-100'}
                                                `}
                                                onClick={() => !isEditing && handleCellClick(index, key, row[key])}
                                                onMouseEnter={() => hasProblem && setHoveredProblem({ rowIndex: index, key, type: problems })}
                                                onMouseLeave={() => setHoveredProblem(null)}
                                            >
                                                {isEditing ? (
                                                    <div className="flex items-center gap-1 absolute inset-0 bg-white p-1 z-20 shadow-md">
                                                        <input
                                                            autoFocus
                                                            type={key === 'age' || key === 'salaire' ? 'number' : 'text'}
                                                            className="w-full h-full px-2 py-1 text-sm border border-blue-400 rounded outline-none"
                                                            value={editingCell.value ?? ''}
                                                            onChange={handleCellChange}
                                                            onKeyDown={handleKeyDown}
                                                            onBlur={handleCellSave}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-between gap-2 min-h-[20px]">
                                                        <span className={row[key] === null || row[key] === undefined || row[key] === '' ? 'text-slate-400 italic' : ''}>
                                                            {key === 'salaire' && row[key] !== null ? `${row[key]}€` : (row[key] ?? 'vide')}
                                                        </span>
                                                        {hasProblem && (
                                                            <AlertTriangle className="w-3 h-3 text-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        )}
                                                    </div>
                                                )}

                                                {/* Tooltip */}
                                                {hoveredProblem?.rowIndex === index && hoveredProblem?.key === key && (
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-xs p-2 rounded shadow-lg z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-200">
                                                        {getTooltipMessage(problems)}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                                                    </div>
                                                )}
                                            </td>
                                        );
                                    })}
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
                            <div key={badge} className="bg-white rounded-lg p-4 border border-yellow-200 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-500">
                                <span className="text-3xl animate-bounce">{badgeInfo[badge].icon}</span>
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
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <Award className="w-6 h-6" />
                        🎉 Félicitations !
                    </h3>
                    <p className="text-lg mb-4">
                        Tu as atteint un score de qualité de <strong>{qualityScore}%</strong> !
                        Ton dataset est maintenant propre et prêt à être utilisé pour du Machine Learning.
                    </p>
                    <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
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
