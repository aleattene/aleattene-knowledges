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
                
                # Acquisizione di un numero intero dall'utente
                numero = int(input("Inserisci un numero: "))
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
            <h3>Boolean </h3>
            <p>Il tipo booleano in Python è rappresentato da due valori: <code>True</code> e <code>False</code>.
                E' un tipo di dato molto utilizzato per costruire condizioni all'interno dei costrutti condizionali,
                cicli, etc.
            </p>
            <p>Conversion Examples:</p>
            <PythonCode code={`
                // False values (7)
                bool(0)         # False
                bool(None)      # False
                bool("")        # False
                bool(())        # False
                bool([])        # False
                bool({})        # False
                bool(False)     # False
                // Other values are True
                bool(1)         # True
                ...
            `}/>
            <h3>Operatori Aritmetici</h3>
            <p>Python supporta i seguenti operatori aritmetici:</p>
            <ul>
                <li><code>+</code> (addizione)</li>
                <li><code>-</code> (sottrazione)</li>
                <li><code>*</code> (moltiplicazione)</li>
                <li><code>/</code> (divisione)</li>
                <li><code>//</code> (divisione intera)</li>
                <li><code>%</code> (resto/modulo)</li>
                <li><code>**</code> (esponente) (esiste anche la funzione <code>pow(base, esponente)</code>)</li>
            </ul>
            <p>Per ciò che riguarda la precedenza di questi operatori si può fare riferimento alle comuni precedenze
                note in matematica.
            </p>
            <h3>Operatori di Assegnamento</h3>
            <p>Python supporta i seguenti operatori di assegnamento:</p>
            <ul>
                <li><code>=</code> (assegnamento)
                    <PythonCode code={`x = 2`}/>
                </li>
                <li><code>+=</code> (assegnamento con somma)
                    <PythonCode code={`x += 2   # equivale a x = x + 2 `}/>
                </li>
                <li><code>-=</code> (assegnamento con sottrazione)
                    <PythonCode code={`x -= 2   # equivale a x = x - 2 `}/>
                </li>
                <li><code>*=</code> (assegnamento con moltiplicazione)
                    <PythonCode code={`x *= 2   # equivale a x = x * 2 `}/>
                </li>
                <li><code>/=</code> (assegnamento con divisione)
                    <PythonCode code={`x /= 2   # equivale a x = x / 2 `}/>
                </li>
                <li><code>//=</code> (assegnamento con divisione intera)
                    <PythonCode code={`x //= 2   # equivale a x = x // 2 `}/>
                </li>
                <li><code>%=</code> (assegnamento con resto/modulo)
                    <PythonCode code={`x %= 2   # equivale a x = x % 2 `}/>
                </li>
                <li><code>**=</code> (assegnamento con esponente)
                    <PythonCode code={`x **= 2   # equivale a x = x ** 2`}/>
                </li>
            </ul>
            <h3>Python ed Interazione con i DB</h3>
            <p>[TO FIX] Img python program -&gt; API -&gt; DBMS</p>
            <TerminalCode code={`
                Python Program ------>  API  -----> DBMS
                
                Python Program ----> psycopg2 ----> PostgreSQL
                
                Python Program ----> MySQL Connector / Python ----> MySQL
                
                Python Program ----> pyodbc ----> MS SQL Server
                
                Python Program ----> PyMongo ----> MongoDB
            `}/>
            <h2>Dunder (Special) Methods</h2>
            <p>I metodi dunder (double underscore) sono metodi speciali in Python che vengono invocati in modo
                automatico in determinate circostanze. (???)
            </p>

            <h3>Inizializzazione a Rappresentazione</h3>
            <p><code>__init</code> : imposta un nuovo oggetto con dei valori iniziali.</p>
            <p><code>__str__</code> : restituisce una rappresentazione stringa leggibile di un oggetto.</p>
            <p><code>__repr__</code> : restituisce una stringa dettagliata che mostra come ricreare un oggetto.</p>

            <h3>Manipolazione di Collezioni</h3>
            <p><code>__len__</code> : restituisce la lunghezza di una collezione (numero di elementi).</p>
            <p><code>__getitem__</code> : restituisce un elemento di una collezione sulla base dell'indice.</p>
            <p><code>__setitem__</code> : imposta (o modifica) un elemento di una collezione sulla base dell'indice.
            </p>
            <p><code>__delitem__</code> : elimina un elemento da una collezione sulla base dell'indice.</p>
            <p><code>__iter__</code> : restituisce un iteratore (quindi oggetto iterabile tramite un ciclo) da una
                collezione.
            </p>
            <p><code>__next__</code> : restituisce il prossimo elemento di un iteratore (oggetto usato in un loop).</p>
            <p><code>__contains__</code> : verifica se un qualcosa è presente in una collezione.</p>

            <h3>Operatori di Comparazione</h3>
            <p><code>__eq__</code> : verifica se due oggetti sono uguali, usando <code>==</code>.</p>
            <p><code>__ne__</code> : verifica se due oggetti sono diversi, usando <code>!=</code>.</p>
            <p><code>__lt__</code> : verifica se un oggetto è minore di un altro, usando <code>&lt;</code>.</p>
            <p><code>__le__</code> : verifica se un oggetto è minore o uguale a un altro, usando <code>&lt;=</code>.</p>
            <p><code>__gt__</code> : verifica se un oggetto è maggiore di un altro, usando <code>&gt;</code>.</p>
            <p><code>__ge__</code> : verifica se un oggetto è maggiore o uguale a un altro, usando <code>&gt;=</code>.
            </p>

            <h3>Operatori Aritmetici</h3>
            <p><code>__add__</code> : definisce la somma tra oggetti usando <code>+</code>.</p>
            <p><code>__sub__</code> : definisce la sottrazione tra oggetti usando <code>-</code>.</p>
            <p><code>__mul__</code> : definisce la moltiplicazione tra oggetti usando <code>*</code>.</p>
            <p><code>__truediv__</code> : definisce la divisione tra oggetti usando <code>/</code>.</p>
            <p><code>__floordiv__</code> : definisce la divisione intera tra oggetti usando <code>//</code>.</p>
            <p><code>__mod__</code> : definisce il resto tra oggetti usando <code>%</code>.</p>
            <p><code>__pow__</code> : definisce l'esponente tra oggetti usando <code>**</code>.</p>

            <h3>Altri Operatori</h3>
            <p><code>__call__</code> : permette di far comportare l'oggetto come una funzione.</p>
            <p><code>__enter__</code> : imposta qualcosa (come una risorsa) per essere utilizzata con l'istruzione
                <code>with</code>.
            </p>
            <p><code>__exit__</code> : pulisce (???) la risorsa quando ha finito di usare un'istruzione with</p>
            <p><code>__hash__</code> : restituisce il valore numerico univoci di un oggetto usato in tabelle di
                hash.
            </p>
            <p><code>__bool__</code> : controllo se un oggetto è considerato vero o falso.</p>


            <h2>Strutture Dati</h2>
            <p>Le strutture Dati altro non sono che dei contenitori che permettono di memorizzare più di un valore
                all'interno di una variabile. In python abbiamo:
            </p>
            <ul>
                <li><a href={"/it/languages/python/lists"}>
                    <code className={'documentation-link'}>Liste</code>
                </a> (mutabili): insieme di valori omogenei o eterogenei, indicizzati per posizione
                </li>
                <li><a href={"/it/languages/python/tuples"}>
                    <code className={'documentation-link'}>Tuple</code>
                </a> (immutabili)
                </li>
                <li><a href={"/it/languages/python/dictionaries"}>
                    <code className={'documentation-link'}>Dizionari</code>
                </a> : insieme di coppie chiave:valore
                </li>
                <li><a href={"/it/languages/python/sets"}>
                    <code className={'documentation-link'}>Insiemi</code>
                </a> (set): insiemi con elementi univoci non ripetibili
                </li>
            </ul>
        </div>
    );
};

export default Python;


