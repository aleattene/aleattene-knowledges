import React from "react"
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";

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
            <h3>Moduli CommonJS</h3>
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
            <p>Esiste poi una possibilità legata all'ipotesi in cui abbiamo la necessità che l'oggetto restituito da
                <code>require()</code> sia un oggetto specifico (per esempio una classe), oppure vogliamo esporre da
                un nostro modulo solo una funzione accessibile direttamente senza dover usare la destrutturazione;
                in questi casi è possibile aggiungere in nostro specifico oggetto direttamente alla proprietà
                <code>module.exports</code>:
            </p>
            <JavascriptCode code={`
                // File: modules/debug/index.js
                function debugFactory(tag) {
                    const enabled = process.env.DEBUG;
                    
                    function debug(message) {
                        if (!enabled) {
                            return;
                        }
                        console.log(\`[\${tag}] \${message}\`);
                    }
                    return debug;
                }
                
                module.exports = debugFactory;
            `}/>
            <p>Così facendo abbiamo definito un modulo (chiamato debug) che esporta una funzione di logging che ci
                permette di stampare messaggi nel terminale (se la variabile d'ambiente <code>DEBUG</code> è presente,
                aggiungendo in automatico, un prefisso scelto da noi.
                Nello specifico osserviamo che il modulo non esporta direttamente la funzione per stampare il log,
                ma piuttosto quella per crearla.
            </p>
            <JavascriptCode code={`
                // File: debug.js
                const debugFactory = require('./modules/debug');
                const debug = debugFactory('DEBUG');
                                
                debug(\`Script Avviato in data: \${new Date().toISOString()}\`);
                setTimeout(() => {
                    // ...
                    debug(\`Script Terminato in data: \${new Date().toISOString()}\`);
                }, 1000);
            `}/>
            <p>Osserviamo in questo caso che l'import ci restituisce la funzione generatrice, ovvero la funzione
                <code>debugFactory</code> definita nel modulo, la quale poi invochiamo passandole il tag che vogliamo
                mostrare su ogni riga, al fine di ottenere la vera funzione di logging.
                Se eseguissimo il file senza impostare la variabile d'ambiente <code>DEBUG</code> non verrebbe stampato
                alcun messaggio (come normalmente avviene in ambienti di produzione), mentre se la aggiungessimo (???)
                verrebbero stampati i messaggi con il relativo tag di prefisso.
            </p>
            <TerminalCode code={`
                $ DEBUG=true node debug.js
                [DEBUG] Script Avviato in data: 2024-08-12T16:30:00.000Z
                [DEBUG] Script Terminato in data: 2024-08-12T16:33:00.000Z
            `}/>
            <p>Tutto questo ci porta pian piano nella condizione di scrivere via via moduli che saranno la base per la
                costruzione di modulo sempre più complessi. Si tratta di un meccanismo nel quale ogni nuovo modulo potrà
                contenere solo il codice relativo a ciò che vuole offrire: questo ci permettere di conseguenza di
                recuperare tutte le funzioni accessorie da altri moduli senza doverle riscrivere.
            </p>
            <p>[TO FIX] Approfondimento modulo open</p>
            <h3>Prefisso Node</h3>
            <p>Negli ultimi anni NodeJS ha aggiunto un meccanismo per specificare che un modulo che vogliamo caricare è
                uno di quelli core; per usarlo basta aggiungere il prefisso <code>node:</code> prima del nome/path.
                Esempio:
            </p>
            <JavascriptCode code={`
                // Modulo core di NodeJS
                const fs = require('node:fs');
                const http = require('node:http');
            `}/>
            <p>Lo scopo del prefisso è quello di creare un <code>namespace</code> dedicato per i moduli interni di
                NodeJS codì da poterli distinguere da quelli custom ed evitare così eventuali conflitti tra nomi.
                Tuttavia ad oggi è comunque possibile importare i moduli core di NodeJS sia con il prefisso che senza,
                ovviamente come la documentazione prescrive sarebbe meglio comunque utilizzarlo (anche considerando
                gli indizi, ad esempio del modulo <code>test</code>, su quella che sarà la probabile direzione futura
                di NodeJS). Infatti, l'unico caso ad oggi in cui l'uso del prefisso è necessario riguarda proprio il
                modulo <code>test</code> di NodeJS in quanto può essere utilizzato solamente con il prefisso:
            </p>
            <JavascriptCode code={`
                const { test } = require('node:test');
            `}/>
            <p>Qualora invece provassimo ad utilizzare il prefisso con un modulo custom (quindi non core di NodeJS)
                otterremmo un errore di tipo <code>ERR_UNKNOWN_BUILTIN_MODULE</code>.
            </p>

            <h3>Wrapper</h3>
            <p>Quando un modulo viene caricato attraverso la funzione <code>require()</code>, il codice contenuto nel
                file che lo definisce viene eseguito all'interno di una funzione wrapper, che fornisce alcuni degli
                oggetti sempre disponibili:
            </p>
            <JavascriptCode code={`
                function(exports, require, module, __filename, __dirname) {
                    // Codice del modulo che si sta caricando
                };
            `}/>
            <p>Quando esportiamo le funzionalità di un modulo usando oggetti quali ad esempio <code>exports</code> o
                <code>module</code>, lo facciamo usando code JS che sarà poi eseguito in modo normale.
                Se quegli oggetti non dovessero esistere al momento dell'esecuzione del codice, l'interprete JS
                produrrebbe un errore, interrompendo l'esecuzione del programma.
                Invece grazie a questo meccanismo, i moduli possono accedervi ed usarli.
                Inoltre, l'uso di questa funzione permette a NodeJS di isolare ogni modulo da tutti gli altri, rendendo
                accessibile dall'esterno solo quello che è stato esportato.
                Se così non fosse, non potremmo avere funzioni o variabili con nomi uguali in file diversi.
            </p>
            <p>Tra gli altri oggetti messi a disposizione dei moduli attraverso il wrapper troviamo le stringhe:
                <ul>
                    <li><code>__filename</code> che contiene il path completo del modulo</li>
                    <li><code>__dirname</code> che contiene il path della cartella contenente il modulo</li>
                </ul>
            </p>
            <p>Infine abbiamo la presenza di <code>require</code> che è la funzione che già conosciamo e che utilizziamo
                per importare i moduli.
                Il fatto che questa funzione sia tra gli elementi passati dal wrapper ai moduli ci porta alla
                conclusione che anche quelli che definiamo script o file principali, per NodeJS sono sempre moduli; ecco
                allora che quando si afferma che per CommonJS ogni file è un modulo, si intende esattamente questo.
            </p>
            <p><i>Aspetto da non tralasciare è quello relativo all'osservazione di come è definita la funzione wrapper,
                ovvero non è definita come funzione asincrona, ed è proprio questo il motivo per cui non è possibile
                utilizzare <code>await</code> nel livello più alto del codice dei moduli CommonJS.</i>
            </p>
            <h3>Cache</h3>
            <p>Tutti i moduli importati tramite <code>require()</code> vengono salvati in una cache interna di NodeJS
                dopo il primo caricamento. Questo ci dice in sostanza che il codice contenuto nei moduli viene eseguito
                una volta sola e gli oggetti esportati con <code>exports</code> o <code>module</code> sono sempre gli
                stessi, indipendentemente dal file in cui importiamo il modulo.
            </p>
            <p>Per meglio comprendere creiamo un modulo contenente una variabile contatore e che espone tre funzioni
                all'esterno, per incrementarla, decrementarla e restituire il valore corrente:
            </p>
            <JavascriptCode code={`
                // File modules/counter-condiviso.js
                let counter = 0;
                exports.increment = () => ++counter;
                exports.decrement = () => --counter;
                exports.value = () => counter;
            `}/>
            <p>Creiamo poi un file che importa due volte il modulo e ne utilizza le funzioni:</p>
            <JavascriptCode code={`
                // File: counter-use.js
                const counter1 = require('./modules/counter-condiviso');
                const counter2 = require('./modules/counter-condiviso');
                
                counter1.increment();
                counter2.increment();
                
                console.log(counter1.value()); // 2
            `}/>
            <p>Il risultato ottenuto conferma il meccanismo di caching descritto precedentemente.
                Qualora si voglia rendere il modulo unico per ogni sua importazione, bisogna restituire una funzione
                che, una volta eseguita, genera una versione personalizzata del modulo (in questo caso solo una
                funzione). (???)
            </p>
            <h2>Moduli EcmaScript</h2>
            <p>Sappiamo che NodeJS ha supportato sin dalla sua nascita i moduli CommonJS, ma questi non erano l'unica
                soluzione disponibile nell'ecosistema JS, infatti nella applicazioni JS per browser era molto usato il
                sistema RequireJS basato sul concetto di AMD (Asynchronous Module Definition).
                Nel 2015 però, il TC39 ha rilasciato ES2015/ES6 e tra le tante novità introdotte figurarono i moduli JS,
                ovvero gli EcmaScript Modules (ES/ESM).
                Con questo rilascio il problema dei moduli viene quindi risolto per tutto l'eccosistema JS grazie
                appunto alla creazione di uno standard.
                Nel 2017 gli sviluppatori di NodeJS hanno iniziato a discutere sul come includere il nuovo sistema di
                moduli facendolo comunque convivere con quello già esistente, per poi giungere infine al 2019 quando
                i moduli ES vengono rilasciati come stabili ed attivati in modo predefinito sulle nuove versione di
                NodeJS.
            </p>
            <h3>Import e Export</h3>
            <p>Vediamo subito un esempio:</p>
            <JavascriptCode code={`
                // File: modules/read-file-lines.mjs
                // Import di una funzione con sintassi ESM
                import { readFile } from 'node:fs/promises';
                
                const encoding = 'utf-8';
                const separator = '\\n';
                
                async function readFileLines(filePath, sep = separator, enc = encoding) {
                    const fileContent = await readFile(filePath, { encoding: enc });
                    const lines = fileContent.split(sep);
                    return lines;
                }
                
                // Export di funzioni e costanti con sintassi ESM
                export { readFileLines, separator, encoding };
            `}/>
            <p>Osserviamo in questo caso che quello che verrà esportato attraverso la keyword <code>export</code> sarà
                proprio ciò che verrà ricevuto da chi importerà il modulo ed userà il nome da noi indicato per estrarre
                gli elementi da utilizzare:
            </p>
            <JavascriptCode code={`
                // File: read-file-lines.mjs
                // Import di funzioni e costanti con sintassi ESM (estensione inclusa nel nome del file)
                import { readFileLines, encoding } from './modules/read-file-lines.mjs';
                
                const file = process.argv[2];
                const lines = await readFileLines(file);
                console.log(\`Il file \${file} (\${encding}) contiene \${lines.length} righe.\`);
            `}/>
            <p><i>Aspetto importante di questo piccolo script è la presenza (sempre necessaria) dell'estensione nel
            path completo del file da importare, in quanto in caso contrario riceveremmo l'errore
            <code>ERR_MODULE_NOT_FOUND</code>.</i></p>
            <TerminalCode code={`
                $ node read-file-lines.mjs file.txt
                Il file file.txt (utf-8) contiene 10 righe.
            `}/>
            <h3>Export default</h3>
            <p>E' una parola chiave messa a disposizione dal linguaggio quando un modulo vuole esportare un'elemento
                principale</p>
            <JavascriptCode code={`
                // File modules/print-lines-numbers.mjs
                function print(lines = [], countFrom = 0) {
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        console.log(\`\${countFrom + i}. \${line}\`);
                    }
                }
                
                export default print;
            `}/>
            <p>La riga finale del nostro script, grazie all'utilizzo della keyword <code>export default</code>, ci
                permette di esportare la funzione <code>print</code> come funzione principale del modulo, senza dover
                poi usare il suo nome per importarla.
                Questo tipo di esportazione viene chiamato <code>default export</code>, differentemente da quello che
                abbiamo visto sino ad ora chiamato <code>named export</code>.
            </p>
            <JavascriptCode code={`
                // File: numbered-echo.mjs
                // import di un named export
                import { readFileLines } from './modules/read-file-lines.mjs';
                
                // import di un default export (name di import a nostra scelta)
                import printLines from './modules/print-lines-numbers.mjs';
                
                const file = process.argv[2];
                const lines = await readFileLines(file);
                printLines(lines);
            `}/>
            <p>Lanciano il file si ottiene (per esempio) quanto segue:</p>
            <TerminalCode code={`
                $ node numbered-echo.mjs file.txt
                0. Prima riga
                1. Seconda riga
                2. Terza riga
            `}/>
            <p>Una osservazione interessante potrebbe essere quella legata al fatto che anche nei moduli in cui vengono
                esportati più elementi con nome (named export) è sempre possibile esportare uno di default (default
                export) e viceversa.
            </p>
            <JavascriptCode code={`
                // ...
                export { readFileLines, separator, encoding };
                export default readFileLines;
            `}/>
            <p>Analogamente poi anche per quanto riguarda l'importazione sarà possibile effettuarla in entrambi i modi,
                anche su riga singola, come ad esempio:
            </p>
            <JavascriptCode code={`
                import readFileLines, { separator, encoding } from './modules/read-file-lines.mjs';
            `}/>

            <h3>Import con Alias (As)</h3>
            <p>Per comprendere meglio questo meccanismo creiamo due moduli:
                <ul>
                    <li>un primo modulo per leggere le righe di un file di testo</li>
                    <li>un secondo modulo per stampare le righe numerate nel terminale</li>
                </ul>
            </p>
            <JavascriptCode code={`
            // File modules/read-number-lines.mjs
            import * as readline from 'node:readline/promises';
            import { stdin as input, stdout as output } from 'node:process';
            
            export default async function (prompt = "Insert a number: ") {
                const rl = readline.createInterface({ input, output });
                const answer = await rl.question(prompt);
                rl.close();
                return parseInt(answer);
            }
            `}/>
            <p>In questo primo modulo possiamo subito osservare l'uso dell'alias <code>as</code> già nella prima riga,
                dove in sostanza siamo in grado di importare dentro l'oggetto <code>readlines</code> tutte le proprietà
                del modulo <code>readline/promises</code>.
            </p>
            <p>Da questo possiamo quindi comprendere che nei casi in cui un modulo abbia diversi named export, possiamo
                importarli tutti insieme in un unico oggetto, evitando così di doverli importare uno ad uno.
            </p>
            <p>Nella seconda riga di codice invece abbiamo direttamente rinominato i singoli elementi importati, nello
                nello specifico dal modulo <code>process</code> di NodeJS abbiamo importato le proprietà
                <code>stdin</code> e <code>stdout</code> rinominandole rispettivamente in <code>input</code> e
                <code>output</code> (per comodità successiva all'interno del codice).
            </p>
            <p>Terzo elemento importante è quello che riguarda l'export di una funzione (senza nome) di default, che è
                possibile effettuare direttamente all'interno della dichiarazione della funzione stessa, sulla stessa
                riga.
                Di fatto questa funzione sfrutta il modulo core di NodeJS <code>readline</code> per leggere da uno
                stream <code>Readable</code> una riga alla volta.
            </p>
            <p>Abbiamo poi la funzione <code>createInterface</code> che ci permette di creare un'istanza della classe
                <code>readline.Interface</code> la quale richiede a sua volta di essere collegata ad uno stream
                <code>Readable</code> per:
                <ul>
                    <li>leggere l'input (in questo caso <code>stdin</code>)</li>
                    <li>scrivere l'output (in questo caso <code>stdout</code>)</li>
                </ul>
            </p>
            <p>C'è poi anche il metodo <code>question</code> (esposto dagli oggetti Interface) che ci permette di
                mostrare il prompt all'utente e di attendere la risposta con al seguito il tasto Invio, senza il quale
                l'esecuzione del programma rimarrebbe sospesa.
                <i>In merito ricordiamo infatti che senza chiusura dell'interfaccia NodeJs non potrebbe mai terminare
                    la sua esecuzione; questo perché essendo <code>readline.Interface</code> un
                    <code>EventEmitter</code>, senza una chiusura esplicita rimarrebbe in ascolto per nuovi eventi
                    indefinitamente.</i>
            </p>
            <p>In sostanza poi una volta letto il valore inserito dall'utente, è possibile chiudere l'interfaccia,
                effettuare il parsing del valore e restituirlo al chiamante della funzione.
            </p>
            <p>[To Fix] Eventuale approfondimenti su OpenLinks.mjs</p>
            <p>Affrontando l'alias <code>as</code> diventa quindi più facile comprendere in primis che l'operazione di
                import non è una normale operazione destrutturante delle proprietà di un oggetto e poi anche che la
                possibilità di rinominare gli oggetti importati ci permette di migliorare la leggibilità del codice
                e di evitare conflitti tra nomi.
            </p>
            <p>Ma non solo, in realtà è bene sapere che è possibile rinominare gli elementi anche durante
                l'esportazione, sempre usando una sintassi simile:
                <JavascriptCode code={`
                    export { myFunction as moduleFunction, myVariable as moduleVariable };
                `}/>
            </p>

            <h2>Moduli CJS da ESM</h2>
            <p>E' possibile importare moduli CommonJS in moduli EcmaScript, ad esempio con la seguente sintassi:</p>
            <JavascriptCode code={`
                import somma from './modules/somma.js';
            `}/>
            <p>che di fatto è una scorciatoia del più prolisso:</p>
            <JavascriptCode code={`
                import { default as somma } from './modules/somma.js';
            `}/>
            <p>In entrambi i casi otteniamo comunque lo stesso modulo, ma quello che è importante osservare è che
                qualsiasi modulo importato da ESM richiede sempre il path completo del file, compresa l'estensione.
                In caso contrario si otterrebbe l'errore: <code>ERR_UNSUPPORTED_DIR_IMPORT</code>.
            </p>
            <p>L'uso del percorso completo al fine è necessaria anche quando il modulo presenta un file
                <code>package.json</code> con la proprietà <code>main</code> (esempio "main": "index.js") poiché questa
                è usata solo da CommonJS. IN caso contrario si otterrebbe l'errore:
                <code>ERR_MODULE_NOT_FOUND</code>.
            </p>
            <p>Un'altra situazione classica che ci si può trovare ad affrontare è quella in cui si utilizza la
                keyword <code>import</code> in un file con estensione <code>.js</code>; in tal caso riceveremmo un
                warning ed un errore:
            </p>
            <TerminalCode code={`
                Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
                ...
                SyntaxError: Cannot use import statement outside a module
            `}/>
            <p>Si ottiene questo errore poiché <code>import</code> è una keyword disponibile solo nei moduli ES, ma
                se NodeJS incontra un file con estensione <code>.js</code> tenta di caricarlo come CommonJS e quindi
                viene a generarsi l'errore.
            </p>
            <p>Se volessimo (o dovessimo) utilizzare l'estensione <code>.js</code> per i nostri moduli ES, dobbiamo
                necessariamente disporre di un file <code>package.json</code> con la proprietà
                <code>type</code> impostata a <code>module</code>: in questo modo diciamo a NodeJS che nonostante il
                file abbia estensione <code>.js</code>, si tratta di un modulo ES.
            </p>
            <p>Concludiamo osservando le principali differenze tra i moduli CJS e ES:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo di Moduli</th>
                            <th>CommonJS</th>
                            <th>EcmaScript Modules</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estensione File</td>
                            <td>.js</td>
                            <td>.mjs</td>
                        </tr>
                        <tr>
                            <td>Caricamento Moduli</td>
                            <td>Sincrono</td>
                            <td>Asincrono</td>
                        </tr>
                        <tr>
                            <td>Top-level await</td>
                            <td>Non Supportato</td>
                            <td>Supportato</td>
                        </tr>
                        <tr>
                            <td>Sintassi esportazione</td>
                            <td>exports / module.exports</td>
                            <td>export / export default</td>
                        </tr>
                        <tr>
                            <td>Sintassi importazione</td>
                            <td>require(...)</td>
                            <td>import ... from ...</td>
                        </tr>
                        <tr>
                            <td>Caching dei Moduli</td>
                            <td>Si</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>Variabili Path Modulo</td>
                            <td>__filename, __dirname</td>
                            <td>import.meta.filename, import.meta.dirname(beta)</td>
                        </tr>
                        <tr>
                            <td>Supporto per altri Moduli</td>
                            <td>No</td>
                            <td>CJS</td>
                        </tr>
                        <tr>
                            <td>Risoluzione Path Moduli</td>
                            <td>Basata su convenzioni</td>
                            <td>Esatta</td>
                        </tr>
                        <tr>
                            <td>Caricamento file JSON</td>
                            <td>Supportato</td>
                            <td>import data from './data.json' with &#123;  type: 'json' &#125;  (sperimentale)</td>
                        </tr>
                    </tbody>
                </table>

            <h2>Moduli, Progetti e Package</h2>
            <p>Parlando di NodeJS è ormai normale prassi parlare di file JS e quindi di moduli CJS o ES. L'utilità di
                parlare di moduli (ognuno con le proprie funzionalità e responsabilità) è legata al fatto di poterli
                assemblare ed integrate tra loro per andare poi a creare progetti sempre più complessi.
                Parlando di moduli, questi possono essere:
                <ul>
                    <li>moduli core di NodeJS (esempio <code>fs</code>, <code>http</code>, ecc.)</li>
                    <li>moduli custom (creati da noi)</li>
                    <li>moduli di terze parti</li>
                </ul>
            </p>
            <p>Se per i primi due tipi di moduli è abbastanza chiaro come si possano creare, esportare ed importare,
                per quanto riguarda i moduli di terze parti questi sono forniti sotto forma di package (o pacchetti),
                ovvero una cartella contenente un file <code>package.json</code> ed uno o più file JS.
            </p>
            <p>La loro gestione è delegata ai cd package manager come ad esempio <code>npm</code> o <code>yarn</code>,
                i quali scaricano appunto questi package e li installano localmente, così da renderli disponibili per
                le nostre applicazioni.
                Naturalmente questo creare una dipendenza di funzionamento tra la nostra applicazione e il package ed
                è proprio per questo motivo che i package esterni vengono anche chiamati <code>dipendenze</code>.
            </p>

            <p>[TO FIX] Dipendenze</p>
            <h3>NPM (Node Package Manager)</h3>
            <p>Per conoscere la versione di <code>npm</code> installata sul proprio sistema è possibile utilizzare il
                comando <code>npm -v</code>:
            </p>
            <TerminalCode code={`
                $ npm -v
                9.3.0
            `}/>
            <p>E' importante osservare che seppur <code>npm</code> viene distribuito ed installato contestualmente a
                NodeJS, le loro versioni non coincidono poiché sono comunque due progetti separati sviluppati da team
                diversi.
            </p>
            <p>[To FIX] Package.json</p>

            <h2>Node Modules</h2>
            <p>Quando installiamo una dipendenza questa non viene solo aggiunta al file <code>package.json</code> ma
                viene anche scaricata all'interno di una cartella <code>node_modules</code> presente nella root del
                progetto. Se non fosse già presente, <code>npm</code> la creerebbe in automatico durante la sua
                esecuzione.
            </p>
            <p>All'interno della directory <code>node_modules</code> troviamo una cartella per ogni dipendenza
                (package) installata più altre cartelle relative alle dipendenze transitive (ovvero dipendenze delle
                dipendenze).
            </p>
            <p>Durante l'installazione di una dipendenza con il comando <code>npm install</code>, npm verifica se
                all'interno del file <code>package.json</code> è presente la sezione <code>dependencies</code> ed in
                caso affermativo scarica dal registry tutte le dipendenze elencate più ovviamente quelle transitive.
            </p>
            <JavascriptCode code={`
                // File package.json
                {
                    "name": "my-app",
                    "version": "1.0.0",
                    "dependencies": {
                        "express": "^4.17.1",
                        "pdf-lib": "^1.16.0"
                    }
                }
            `}/>
            <p>Se volessimo visualizzare tutte le dipendenze installate (dirette e transitive) nel nostro progetto
                possiamo utilizzare il comando <code>npm ls -all</code>
            </p>
            <p>Importante osservazione da fare è quella relativa al fatto che le dipendenze vengono installate solo
                localmente, ovvero all'interno della cartella <code>node_modules</code> del progetto, ma non vengono
                salvate nei sistemi di gestione/versionamento del codice (come ad esempio <code>git</code>): non a caso
                la cartella <code>node_modules</code> è spesso e volentieri come prima voce nel file
                <code>.gitignore</code>.
            </p>
            <p>Il motivo per cui si adotta questo comportamento è legato al fatto che a partire del file
                <code>package.json</code> è sempre possibile ricostruire l'intero albero delle dipendenze (con la
                relativa versione specificata nel file package.json stesso) tramite il comando <code>npm install</code>,
                e quindi sarebbe inutile e controproducente salvare tutti i file delle dipendenze all'interno di un
                repository.
            </p>
            <p>la versione delle dipendenze che installiamo dipende dal comando che lanciamo.
                Quando installiamo una dipendenza con npm, questo cercherà nel registry la versione più recente
                disponibile (con tag <code>latest</code> nel registry) e la scaricherà/installerà.
                Il numero di versione aggiunto nel package.json sarà del tipo:
                <JavascriptCode code={`
                    "dependencies": {
                        "express": "^4.17.1"
                    }
                `}/>
                <p>che starà a significare "qualsiasi versione uguale o superiore alla 4.17.1 ma inferiore alla 5.0.0".
                </p>
                <p>Questo numero di versione è chiamato
                    <a href={"https://github.com/npm/node-semver#versions"}
                       target={"_blank"} rel={"noreferrer"}>
                            <code>semver</code>
                    </a>
                    (Semantic Versioning) e si compone di tre parti:
                    <ul>
                        <li>numero di versione</li>
                        <li>numero di patch</li>
                        <li>numero di build</li>
                    </ul>
                </p>
            </p>
            <p>Come best practice il modo migliore per tenere sotto controllo le dipendenze è quello di usare versioni
                esatte, ovvero specificare la versione esatta della dipendenza che si vuole installare:
            </p>
            <TerminalCode code={`
                $ npm install express@4.17.1
                
                $ npm install -save-exact express
            `}/>
            <p>il cui risultato sarà qualcosa del tipo:</p>
            <JavascriptCode code={`
                "dependencies": {
                    "express": "4.17.1"
                }
            `}/>

        </div>
    );
};

export default ModulesDependencies;