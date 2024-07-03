import React from 'react';
import {sections} from "../../../components/Sidebar/Sidebar.tsx";


const DataStructures: React.FC = () => {
    return (
        <div>
            <h1>Strutture Dati</h1>
            <p>Le strutture dati sono una parte fondamentale della scienza della computazione e della programmazione.</p>
            <p>Una conoscenza approfondita di queste è spesso necessaria per posizioni tecniche di livello intermedio o avanzato.
                Alcune fondamentali sono:</p>
            <ul>
                { sections.datastructures.map((dataStructure, index) => {
                    return <li key={index}>{dataStructure}</li>
                })}
            </ul>
        </div>
    );
};

export default DataStructures;