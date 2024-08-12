import React from "react"
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const ModulesDependencies: React.FC = () => {
    return (
        <div>
            <h1>Moduli e Dipendenze</h1>
            <p>Un'attività spesso sottovalutata nella realizzazione di un'applicazione web è la suddivisione del
                progetto in più moduli/file. Questo infatti permette di mantenere il codice più pulito, organizzato e
                di più facile manutenzione e refactoring futuro.
                Qualora non organizzassimo il progetto in moduli, il codice diventerebbe presto di migliaia di righe
                e sarebbe molto confusionario e più difficile da gestire.
                Al computer (interpreti e compilatori) effettivamente poco importa che il codice si trovi tutto in un
                unico file piuttosto che in più file; la suddivisione però diventa fondamentale per l'organizzazione
                mentale degli sviluppatori (in qualità di essere umani).
                La suddivisione in moduli permette quindi allo sviluppatore di concentrarsi di volta in volta su una
                parte del progetto, per poi assemblare il tutto alla fine sino ad ottenere un'applicazione completa
                ed eventualmente anche complessa, pur mantenendo il codice ordinato grazie alla limitazione della
                complessità ottenuta appunto attraverso la separazione delle funzionalità e delle responsabilità.
            </p>
            <h2>File e Moduli</h2>
            <p>E' importante comprendere che il file è un concetto legato al sistema operativo ed al file
                system, mentre per NodeJS se un file contiene codice che deve essere eseguito (o caricato per poi
                essere usato) allora è un modulo.
                Ogni modulo (che siano offerti da NodeJS o Custom scritti da noi) è un file JavaScript contenente un
                gruppo di funzioni e oggetti legati ad una funzionalità e responsabilità specifica, poi esposti
                all'esterno del modulo per essere utilizzati.
            </p>
            <p>Di fatto le operazioni fondamentali di base che vengono effettuate con un modulo sono:
                <ul>
                    <li>Esportare funzioni, constanti e variabili da un modulo</li>
                    <li>Importare funzioni, constanti e variabili da un altro modulo</li>
                </ul>
            </p>
            <p>NodeJS fornisce il supporto per la divisione del codice in più file attraverso il meccanismo dei
                moduli; in particolare supporta due tipologie di gestione dei moduli:
                <ul>
                    <li>CommonJS (CJS), che è il sistema presente sin dagli albori del progetto NodeJS</li>
                    <li>ECMAScript (ESM), che è il sistema introdotto più recentemente</li>
                </ul>
            </p>
            <h3>Modulo CommonJS</h3>
            <p>Fin dalle prime versioni, NodeJS ha sposato ed implementato la specifica CommonJS per la gestione dei
                moduli; in particolare ogni volta che usiamo la funzione <code>require()</code> NodeJS carica un modulo
                usando proprio questo meccanismo.
            </p>
            <p>Definire un modulo CommonJS è molto semplice: basta:
                <ul>
                    <li>Creare un file JavaScript</li>
                    <li>Definire al suo interno le funzioni, variabili e costanti che si vogliono esportare</li>
                    <li>Esportare queste funzioni, variabili e costanti che vogliamo utilizzare all'esterno</li>
                    <li>Importare il modulo in un altro file tramite la keyword <code>require()</code></li>
                </ul>
            </p>
            <JavascriptCode code={`
                // File: modules/somma.js
                function somma(a, b) {
                    return a + b;
                }
                
                exports.somma = somma;
            `}/>
            <p>L'oggetto <code>exports</code> è un oggetto speciale messo a disposizione da NodeJS disponibile in tutti
                i moduli CommonJS: se vogliamo che una funzione, variabile o costante siano accessibili dall'esterno
                dobbiamo assegnarle ad una proprietà di <code>exports</code>.
                I nomi delle sue proprietà corrispondono a quelli con cui sarà poi possibile importare gli elementi al
                di fuori del modulo, anche se va detto che le proprietà non devono per forza avere lo stesso nome
                dell'oggetto esportato.
                Nel nostro caso ad esempio abbiamo esportato la funzione <code>somma</code> usando una proprietà di
                <code>exports</code> con lo stesso nome e quindi anche all'esterno avrà questo nome.
            </p>
            <JavascriptCode code={`
                // File: check-somma.js
                const { somma } = require('./modules/somma');
                
                console.log(somma(3, 5)); // 8
            `}/>
            <p>In questo caso attraverso il meccanismo dell'assegnazione destrutturante abbiamo estratto la proprietà
                con il nome <code>somma</code> dall'oggetto restituito da <code>require()</code>, ottenendo
                conseguentemente la funzione.
                La chiamata a require ci restituisce infatti un oggetto contenente tutte le proprietà assegnate a
                <code>exports</code> nel codice del modulo richiesto (nel nostro caso solo <code>somma</code>).
            </p>
            <p>A questo punto ci si potrebbe chiedere come mai il path passato alla funzione <code>require()</code>
                non contenga anche l'estensione del file (in questo caso <code>.js</code>).
                In merito a ciò è bene sapere che il sistemi dei moduli CommonJS quando si trova a dover caricare un
                modulo con <code>require()</code>, usa il path ricevuto per cercare il file in varie posizioni;
                dopodiché, se non lo trova, non si ferma, ma prova a cercare il file aggiungendo le varie estensioni
                dei file che conosce, come <code>.js</code>, <code>.json</code> e <code>.node</code> (estensione
                binaria di NodeJS).
                Se anche così non riesce viene fatto un ultimo tentativo cercando una cartella con lo stesso nome del
                path con all'interno un file del nome standard (???).
            </p>
            <JavascriptCode code={`
                // File modules/math-operations/index.js
                function somma(a, b) {
                    return a + b;
                }
                
                function sottrazione(a, b) {
                    return a - b;
                }
                
                exports.somma = somma;
                exports.difference = sottrazione;
            `}/>
            <p>In questo caso la funzione <code>somma</code> è stata esportata mantenendo lo stesso nome anche
                nell'oggetto <code>exports</code>, mentre la funzione <code>sottrazione</code> è stata esportata
                all'interno della proprietà <code>difference</code>, che rappresenterà poi di fatto il suo nome
                pubblico.
            </p>
            <JavascriptCode code={`
                // File: doMathOperations.js
                const { difference, somma } = require('./modules/math-operations');
                
                console.log(somma(3, 5)); // 8
                console.log(difference(3, 5)); // -2
            `}/>
            <p>[TO FIX] Inspect Function (???)</p>
            <p>Come avevamo in precedenza descritto possiamo osservare che la funzione originale sottrazione è stata
                importata attraverso la proprietà difference, proprio a conferma del fatto che il nostro codice non ha
                idea che all'interno del modulo math-operations il nome originale della funzione sia sottrazione, ma per
                lui conta solo il nome che è stato associato nell'oggetto <code>exports</code>.
            </p>
            <p>Inoltre sempre a conferma di quanto precedentemente detto, possiamo notare che file da cui sono state
                recuperate le funzioni è <code>./modules/math-operations/index.js</code> nonostante noi avessimo passato
                alla funzione <code>require()</code> solo <code>./modules/math-operations</code>.
                Naturalmente questo è dovuto al fatto che NodeJS:
                <ul>
                    <li>In prima istanza ha cercato il file <code>./modules/math-operations</code> ma non l'ha
                        trovato
                    </li>
                    <li>Ha cercato quindi files del tipo <code>./modules/math-operations.js</code>,
                        <code>./modules/math-operations.json</code> e <code>./modules/math-operations.node</code> ma
                        non li ha trovati
                    </li>
                    <li>Come ultima spiaggia ha cercato la cartella <code>./modules/math-operations</code> che ha
                        trovato e quindi di conseguenza ha cercato un file con nome standard (come ad esempio
                        <code>index.js</code>), avendolo trovato è riuscito a caricare correttamente senza problemi
                        il nostro modulo.
                    </li>
                </ul>
            </p>
        </div>
    );
};

export default ModulesDependencies;