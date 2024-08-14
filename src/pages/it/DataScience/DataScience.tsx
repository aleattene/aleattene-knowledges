import React from 'react';

const DataScience: React.FC = () => {
    return (
        <div>
            <h1>Data Science</h1>
            <h2>Road Map</h2>
            <h3>Python Base</h3>
            <ul>
                <li>Tipi di Dato (stringhe, interi, float, etc)</li>
                <li>Variabili</li>
                <li>Flussi di Controllo (if/else, cicli)</li>
                <li>Funzioni</li>
                <li>Moduli e Pacchetti</li>
                <li>Inpunt e Output</li>
            </ul>
            <h3>Matematica</h3>
            <ul>
                <li>Algebra Lineare (vettori, matrici, moltiplcazione matriciale)</li>
                <li>Calcolo (derivate, integrali)</li>
                <li>Probabilità e Statistica</li>
                <li>Ottimizzazione</li>
            </ul>
            <h3>Strutture Dati</h3>
            <ul>
                <li>Liste, tuple e dizionari</li>
                <li>Set e Frozen Set</li>
                <li>Linked Lists</li>
                <li>Alberi (binari, AVL, ricerca binaria)</li>
                <li>Grafi (diretti e indiretti, matrici adiacenti, liste adiacenti)</li>
            </ul>
            <h3>Librerie</h3>
            <ul>
                <li>Numpy (per calcoli numerici e manipolazione di array)</li>
                <li>Pandas (per analisi dati e loro manipolazione)</li>
                <li>Matplotlib (per la visualizzazione di dati)</li>
                <li>Scikit-learn (per il machine learning)</li>
                <li>Tensorflow (per il deep learning)</li>
            </ul>
            <h3>Pre Elaborazione Dati</h3>
            <ul>
                <li>Gestione dei valori mancanti</li>
                <li>Ridimensionamento e normalizzazione Dati</li>
                <li>Codifica dati in categorie</li>
                <li>Selezione ed ingegnerizzazione delle feature</li>
            </ul>

            <h3>Algoritmi di Machine Learning</h3>
            <ul>
                <li>Regressione Lineare</li>
                <li>Regressione Logistica</li>
                <li>Alberi di Decisione</li>
                <li>Random Forest</li>
                <li>Support Vector Machine</li>
                <li>Native Bayes</li>
                <li>K-nearest Neighbors</li>
                <li>Clustering (k-means, hierarchical clustering)</li>
                <li>Dimensionality Reduction (PCA)</li>
            </ul>
            <h3>Valutazione del Modello</h3>
            <ul>
                <li>Accuratezza, Precisione, Recall, F1 Score</li>
                <li>Matrice di Confusione</li>
                <li>Validazione Incrociata</li>
                <li>Varianza e Bias</li>
            </ul>
            <h3>Deep Learning</h3>
            <ul>
                <li>Reti Neurali (NNs)</li>
                <li>Convolutional Neural Networks (CNNs)</li>
                <li>Recurrent Neural Networks (RNNs)</li>
                <li>Generative Adversarial Networks (GANs)</li>
            </ul>
        </div>
    );
};

export default DataScience;