import React from 'react';
import SqlCode from "../../../../components/Code/SqlCode/SqlCode.tsx";

const Sql: React.FC = () => {
    return (
        <div>
            <h1>SQL</h1>
            <h3>Introduzione</h3>
            <p>SQL (Structured Query Language) è un linguaggio standardizzato per la gestione di basi di dati
                relazionali. Permette di creare, modificare e gestire i dati all'interno di un database.
                Importanti concetti da conoscere sono:</p>
            <ul>
                <li>Primary Key: chiave primaria, identifica univocamente una riga all'interno di una tabella.
                    Può essere su campo singolo (esempio matricola) o su campo multiplo (esempio nome, cognome).
                </li>
                <li>Vincoli Intra-relazionali: vincoli interni alla relazione (o tabella):</li>
                <ul>
                    <li>Unique: campo che non può avere valori duplicati.</li>
                    <li>Not Null: campo che non può avere valori nulli.</li>
                    <li>Null: campo che può avere valori nulli.</li>
                </ul>
                <li>Vincoli Inter-relazionali: vincoli (che creano un legame univoco)tra relazioni (o tabelle):</li>
                <li>Foreign Key: chiave esterna, campo che fa riferimento ad una chiave primaria di un'altra
                    tabella.
                </li>
                <li>Vincolo di integrità referenziale: garantisce che i valori di una chiave esterna esistano
                    come valori di una chiave primaria in un'altra tabella ed evita che non vi sia integrità
                    referenziale tra questi valori.
                </li>
                <SqlCode code={`
                    // Creazione Tabella con Vincoli
                    CREATE TABLE Alunni (
                    matricola INT(3) PRIMARY KEY,
                    cognome CHAR(20) NOT NULL,
                    nome CHAR(20) UNIQUE,
                    classe CHAR(1),
                    // Vincolo di integrità referenziale tra Alunni e Classi
                    FOREIGN KEY (classe) REFERENCES Classi (classe)
                `}/>
            </ul>

        </div>
    );
};

export default Sql;