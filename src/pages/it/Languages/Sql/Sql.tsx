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
            <h3>Creazione Tabella</h3>
            <p>Si vogliono memorizzare i dati relativi ai concerti eseguiti da diverse orchestre in varie sale.</p>
            <SqlCode code={`
                // Creazione Tabella Orchestre
                CREATE TABLE Orchestre (
                id_orchestra INTEGER NOT NULL,
                nome_orchestra CHAR(20) NOT NULL,
                nome_direttore CHAR(20) NOT NULL,
                num_elementi INTEGER,
                PRIMARY KEY (id_orchestra, nome_direttore))
                    
                // Creazione Tabella Sale
                CREATE TABLE Sale (
                id_sala INTEGER NOT NULL PRIMARY KEY,
                nome_sala CHAR(20) NOT NULL,
                citta CHAR(20),
                provincia CHAR(2),
                capienza INTEGER )
                
                // Creazione Tabella Concerti
                CREATE TABLE Concerti (
                id_concerto INTEGER NOT NULL UNIQUE,
                data DATE NOT NULL,
                id_orchestra INTEGER NOT NULL,
                direttore CHAR(20) NOT NULL,
                id_sala INTEGER NOT NULL,
                prezzo_biglietto NUMERIC,
                PRIMARY KEY (data, id_orchestra),
                UNIQUE (data,direttore),
                INDEX (id_orchestra, direttore),
                FOREIGN KEY (id_orchestra, direttore) REFERENCES Orchestre (id_orchestra, nome_direttore))
                
                // TO FIX -> Show Table Image
            `}/>
            <h3>Modifica di una Tabella</h3>
            <p>Aggiungere alla tabella Mansioni il campo data_mansione.</p>
            <SqlCode code={`
                // Aggiunta Colonna
                ALTER TABLE Mansioni 
                ADD COLUMN data_mansione DATE
            `}/>
            <p>Eliminare il campo data_mansione dalla tabella Mansioni.</p>
            <SqlCode code={`
                // Rimozione Colonna
                ALTER TABLE Mansioni 
                DROP COLUMN data_mansione
            `}/>
            <p>Far divenire la colonna data_mansione della tabella Mansioni la chiave primaria.</p>
            <SqlCode code={`
                // Modifica Colonna
                ALTER TABLE Mansioni 
                ADD PRIMARY KEY (data_mansione)
            `}/>
            <p>Rinominare la tabella Mansioni in MansioniPersonale.</p>
            <SqlCode code={`
                // Rinomina Tabella
                ALTER TABLE Mansioni 
                RENAME TO MansioniPersonale
            `}/>
            <p>Eliminare la tabella MansioniPersonale.</p>
            <SqlCode code={`
                // Elimina Tabella
                DROP TABLE MansioniPersonale
            `}/>
            <p>Aggiungere una chiave secondaria alla tabella Voti (integrità referenziale).</p>
            <SqlCode code={`
                // Aggiunta Chiave Esterna
                ALTER TABLE Voti 
                ADD FOREIGN KEY (matricola) REFERENCES Alunni (matricola) ON DELETE CASCADE ON UPDATE CASCADE
            `}/>
            <p>Eliminare la chiave esterna dalla tabella Voti.</p>
            <SqlCode code={`
                // Elimina Chiave Esterna
                ALTER TABLE Voti 
                DROP FOREIGN KEY matricola
            `}/>
            <h2>Inserimento Nuove Righe in una Tabella</h2>
            <p>Sintassi:</p>
            <SqlCode code={`
                // Sintassi Generale
                INSERT INTO nome_tabella (lista campi; se non specificata, vengono considerati tutti i campi) 
                VALUES (lista valori, che devono coincidere numericamente e di tipo con la lista campi)
            `}/>
            <p>Inserire un nuovo record nella tabella Alunni.</p>
            <SqlCode code={`
                // Inserimento Nuova Riga (campi specifici)
                INSERT INTO Alunni (matricola, cognome, nome, classe)
                VALUES (1, 'Rossi', 'Mario', '4A')
                
                // Inserimento Nuova Riga (tutti i campi)
                INSERT INTO Alunni
                VALUES (2, 'Verdi', 'Anna', '3B')
            `}/>
            <h2>Sostituzione Righe in una Tabella</h2>
            <p>Sintassi:</p>
            <SqlCode code={`
                // Sintassi Generale
                REPLACE INTO nome_tabella (lista campi; se non specificata, vengono considerati tutti i campi) 
                VALUES (lista valori, che devono coincidere numericamente e di tipo con la lista campi)
            `}/>
            <p>Modificare il cognome dell'alunno con matricola 1.</p>
            <SqlCode code={`
                // Sostituzione Riga
                REPLACE INTO Alunni (matricola, cognome, nome, classe)
                VALUES (1, 'Bianchi', 'Mario', '4A')
                
                // Sostituzione Riga (tutti i campi)
                REPLACE INTO Alunni
                VALUES (2, 'Verdi', 'Anna', '3B')
            `}/>
            <h2>Eliminazione Righe da una Tabella</h2>
            <p>Sintassi:</p>
            <SqlCode code={`
                // Sintassi Generale
                DELETE FROM nome_tabella
                WHERE condizione      // facoltativa
                LIMIT numero righe    // facoltativa
            `}/>
            <p>Eliminare l'alunno con matricola 2.</p>
            <SqlCode code={`
                // Eliminazione Riga
                DELETE FROM Alunni
                WHERE matricola = 2     
                
                // Eliminazione Tutte le Righe (massimo 5)
                DELETE FROM Alunni
                LIMIT 5
            `}/>
            <h2>Aggiornamento Righe in una Tabella</h2>
            <p>Sintassi:</p>
            <SqlCode code={`
                // Sintassi Generale
                UPDATE nome_tabella
                SET campo1 = valore1, campo2 = valore2, ...
                WHERE condizione    // facoltativa
            `}/>
            <p>Modificare la classe dell'alunno con matricola 1.</p>
            <SqlCode code={`
                // Aggiornamento Riga
                UPDATE Alunni
                SET classe = '5A'
                WHERE matricola = 1
            `}/>
        </div>
    );  
};

export default Sql;