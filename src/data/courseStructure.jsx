import React from 'react';
import {
    BookOpen,
    Brain,
    Layers,
    Database,
    MessageSquare,
    Eye,
    Scale
} from 'lucide-react';

export const COURSE_STRUCTURE = [
    {
        id: 'module-1',
        title: 'Module 1 : Les Fondations',
        icon: <BookOpen className="w-5 h-5" />,
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
        icon: <Database className="w-5 h-5" />,
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
        icon: <Brain className="w-5 h-5" />,
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
        icon: <Layers className="w-5 h-5" />,
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
        icon: <Eye className="w-5 h-5" />,
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
        icon: <MessageSquare className="w-5 h-5" />,
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
        icon: <Scale className="w-5 h-5" />,
        sections: [
            { id: 'mod7-lab1', title: "Labo : Les Biais de l'IA", type: 'lab' },
            { id: 'mod7-theory1', title: "L'IA Explicable", type: 'theory' },
            { id: 'mod7-theory2', title: "L'avenir du travail", type: 'theory' }
        ]
    }
];
