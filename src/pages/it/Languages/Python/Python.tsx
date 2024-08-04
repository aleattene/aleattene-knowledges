import React from 'react';
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";
import PythonCode from "../../../../components/Code/PythonCode/PythonCode.tsx";

const Python: React.FC = () => {
    return (
        <div>
            <h1>Python</h1>
            <p>Python è un linguaggio di programmazione ad alto livello, impiegato oggi in diversi ambiti,
                come lo sviluppo web, la data science, le applicazioni desktop e molto altro.
            </p>
            <h3>Installazione:</h3>
            <p>Per installare Python, è sufficiente recarsi sul sito ufficiale
                <a href={"https://www.python.org/downloads/"}>
                    <code className={'documentation-link'}> python.org </code>
                </a>
                e scaricare il pacchetto di installazione per il proprio sistema operativo.
                <i>Si raccomanda la massima attenzione con il sistema operativo Windows nel ricordarsi di spuntare la
                    casella "Add Python 3.x to PATH" durante la fase di installazione.</i>
                Dopodiché per verificare la corretta installazione, aprire il terminale e digitare:
            </p>
            <TerminalCode code={`
                $ python --version
                3.10.0 (per esempio)
            `}/>
            <p>Per quanto riguarda gli IDE (Integrated Development Environment) come strumenti di sviluppo i due più
                gettonati/diffusi sono sicuramente:
            </p>
            <ul>
                <li>
                    <a href={"https://www.jetbrains.com/pycharm/"}>
                       <code className={'documentation-link'}> PyCharm </code>
                    </a>
                </li>
                <li>
                    <a href={"https://code.visualstudio.com/"}>
                        <code className={'documentation-link'}> Visual Studio Code </code>
                    </a>
                </li>
            </ul>
            <h3>Virtual Environment</h3>
            <p>Quando sia avvia un progetto Python, per evitare di installare dipendenze globalmente sul sistema e
                quindi "sporcare" la propria macchina, è buona pratica creare un ambiente virtuale:
            </p>
            <TerminalCode code={`
                $ python -m venv nome_ambiente_virtuale
            `}/>
            <p>Una volta creato è altrettanto buona norma attivarlo:</p>
            <TerminalCode code={`
                // Mac or inux
                $ source nome_ambiente_virtuale/bin/activate
                
                // Windows
                $ nome_ambiente_virtuale\Scripts\activate
            `}/>
            <p>Se tutto è andato a buon fine, il nome dell'ambiente virtuale dovrebbe comparire tra parentesi tonde
                all'inizio della riga di comando:
            </p>
            <TerminalCode code={`
                (nome_ambiente_virtuale) $
            `}/>
            <p>Qualora si voglia disattivarlo, basta digitare:</p>
            <TerminalCode code={`
                $ deactivate
            `}/>
            <h3>Input Utente</h3>
            <p>Per acquisire dati in input dall'utente, si può utilizzare la funzione <code>input()</code> (che
                ricordiamo di default restituisce una stringa):
            </p>
            <PythonCode code={`
                # File main.py
                # Acquisizione di un messaggio dall'utente
                messaggio = input("Inserisci un messaggio: ")
                
                # Stampa del messaggio inserito dall'utente
                print(messaggio)
            `}/>
            <h3>Commenti</h3>
            <p>Per inserire commenti nel codice Python, si può utilizzare il simbolo <code>#</code>:</p>
            <PythonCode code={`
                # Commento Singola Riga
                # Questo è un commento
                # Tutto ciò che segue il simbolo # è ignorato dall'interprete Python
                
                # Commento Multi-riga e docstring (double quote) 
                """ Questo è un commento
                    su più righe
                """
                
                # Commento Multi-riga e docstring (single quote)
                ''' Questo è un commento
                    su più righe
                '''
            `}/>
            <h3>Indentazione</h3>
            <p>Python è un linguaggio che si basa sull'indentazione per definire i blocchi di codice, per cui un suo
                corretto utilizzo è fondamentale per evitare errori di sintassi e/o funzionamenti anomali del codice.
                Si può indentare con:
            </p>
            <ul>
                <li>1 tabulazione</li>
                <li>4 spazi</li>
            </ul>
        </div>
    );
};

export default Python;


