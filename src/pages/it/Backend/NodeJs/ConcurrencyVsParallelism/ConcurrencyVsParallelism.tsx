import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";

const ConcurrencyVsParallelism: React.FC = () => {
    return (
        <div>
            <h1>Concorrenza e Parallelismo</h1>
            <p>Sostanzialmente le performance elevate che vengono attribuite al modo in cui è stato progettato per
                gestire l'I/O in modo non bloccante.
                Tutto il codice che scriviamo (non solo quindi quello relativo all'I/O) sarà governato dal famigerato
                <code>event loop</code> che si occuperà di decidere quale codice sarà eseguito prima e quale dopo,
                poiché a prima vista potrebbe sembrare tutto casuale, quando in realtà non è così visto che ci sono
                diverse variabili che influenzano queste decisioni.
            </p>
            <p><i>Piccola nota a margine per menzionare il fatto che è buona pratica comprendere prima bene il modello
                di esecuzione di NodeJS è condizione necessaria per avere una chiara visione di quello che succede al
                nostro codice JS durante l'esecuzione, che altrimenti potrebbe davvero sembrare casuale o quasi.</i>
            </p>
            <p>Diventa altrettanto importante comprendere come sia possibile sfruttare processi e thread aggiuntivi,
                ovvero come creare più istanze di NodeJS che possano lavorare in parallelo collaborando al
                funzionamento delle nostre applicazioni permettendone la scalabilità su una singola macchina.
            </p>
            <h2>Event Loop</h2>
            <p>Esistono delle situazioni in cui effettuare dei calcoli, come quello di determinare se un numero è primo
                o meno, che possono richiedere, a seconda della potenza di calcolo della propria macchina e dal numero
                da considerare, da pochi istanti a diverso secondi.
                Ecco allora che per evitare di bloccare l'esecuzione della nostra applicazione mentre la funzione per
                determinare se un numero è primo o meno è in esecuzione, ha senso provare a sfruttare il meccanismo
                delle callback.
                In questo specifico caso quindi, creiamo una funzione che riceve in input un numero ed un'altra funzione
                (callback) da chiamare al completamento della prima.
            </p>
            <JavascriptCode code={`
                // File isPrime.mjs
                export function isPrime(num) {
                    if (num < 2) return false;
                    for (let i = 2; i < num; i++) {
                        if (num % i === 0) return false;
                    }
                    return true;
                
                    
                // File callback-prime.js
                import { PRIME_BIG, isPrime } from './isPrime.mjs';
                
                function calcPrime(num, cb) {
                    const isNumPrime = isPrime(num);
                    cb(isNumPrime);
                }
                
                console.log('Avvio Script');
                
                calcPrime(PRIME_BIG, (result) => {
                    console.log(\`\${PRIME_BIG} è primo? \${result}\`);
                });
                
                console.log('Fine Script');
            `}/>
            <p>Stranamente forse rispetto a quanto ci si potrebbe aspettare, il risultato non sarà quello atteso.
                Infatti i due log di inizio e fine non sono mostrati subito per poi mostrare le
                informazioni sul numero primo, ma l'esecuzione del codice appare ancora sequenziale nonostante il
                nostro utilizzo del meccanismo delle callback.
            </p>
            <h3>Funzioni e Callback</h3>
            <p>In JS le funzioni sono considerate "cittadini di prima classe" (first-class citizens), il che significa
                che il linguaggio su di esse permette di effettuare la maggior parte delle operazioni più comuni, come
                ad esempio usarle come parametri di altre funzioni, restituirle come risultati di una funzione e
                assegnarle ad una variabile.
            </p>
            <JavascriptCode code={`
                function filter(array, callback) {
                    const toRet = [];
                    for (let i = 0; i < array.length; i++) {
                        if(callback(array[i])) {
                            toRet.push(array[i]);
                        }   
                    }
                    return toRet;
                }    
            `}/>
            <p>La cosa interessante è che con questa funzione possiamo filtrare un array in base ad un criterio che non
                è incluso nella funzione stessa, ma al contrario viene ricevuto dall'esterno sotto forma di funzione.
            </p>
            <JavascriptCode code={`
                const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const primeNumbers = filter(array, isPrime);
                console.log(Prime Numbers: \${primeNumbers});
            `}/>
            <p>Output:</p>
            <TerminalCode code={`Prime Numbers: [2, 3, 5, 7]`}/>
            <p>Un altro possibile utilizzo delle funzioni passate come parametro è quello pensato per l'implementazione
                del meccanismo delle callback, ovverosia quel meccanismo per cui la callback viene richiamata al
                concludersi della funzione principale (o prima se ci sono errori) passando il risultato come parametro.
                Anche in questo caso il tutto viene però eseguito in maniera sincrona e sequenziale, quindi rimane
                ancora aperto il quesito sul come fare eseguire le callback in modo asincrono.
            </p>
            <h3>SetTimeout e Task</h3>
            <p>Un mode semplice per far eseguire del codice i maniera asincrona è quello di racchiuderlo all'interno
                della funzione <code className={'documentation-link'}>setTimeout()</code> poiché questa permette di
                specificare un tempo di attesa prima di eseguire la callback al suo interno. (???)
            </p>
            <JavascriptCode code={`
                console.log('Inizio Script');
                function calcPrime(num, cb) {
                    setTimeout(() => {
                        console.log('Funzione Post Timeout');
                        cb(isNumPrime);
                    }, 1000);
                }
                console.log('Fine Script');
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                Inizio Script
                Fine Script
                Funzione Post Timeout
            `}/>
            <p>Adattando il tutto alla funzioni relative alla determinazione dei numeri primi, otteniamo:</p>
            <JavascriptCode code={`
                // File callback-prime-timeout.js
                import { PRIME_BIG, isPrime } from './isPrime.mjs';
                
                function calcPrime(num, cb) {
                    setTimeout(() => {
                        const isNumPrime = isPrime(num);
                        cb(isNumPrime);
                    }, 1000);
                }
                
                console.log('Avvio Script');
                
                calcPrime(PRIME_BIG, (result) => {
                    console.log(\`\${PRIME_BIG} è primo? \${result}\`);
                });
                
                console.log('Fine Script');
            `}/>
            <p>che avrà come risultato: </p>
            <TerminalCode code={`
                Avvio Script
                Fine Script
                982451653 è primo? true
            `}/>
            <p>E' stato possibile ottenere questo risultato grazie al fatto che la chiamata a <code>calcPrime()</code>
                termina velocemente senza produrre alcun risultato, infatti l'esecuzione di <code>isPrime()</code> e la
                chiamata alla callback vengono solo programmate ma non eseguite.
                E' infatti solo dopo un secondo che la callback passata a <code>setTimeout()</code> viene eseguita,
                e con essa viene eseguita anche la chiamata a <code>isPrime()</code>.
                Una volta completata anche <code>isPrime()</code> verrà eseguita anche la callback e stampato in console
                il log del risultato.
            </p>
            <p><i>Osserviamo inoltre come nota a margine che non è necessario usare <code>setTimeout()</code>
                all'interno di una funzione, ma possiamo invocarla dove e quando vogliamo passandole sempre una funzione
                come primo parametro ed il numero di millisecondi da attendere prima di eseguirla. (???)
            </i>
            </p>
            <p>Un aspetto poco noto ma estremamente importante di JS è la cd <code>run-to-completion</code> (esecuzione
                fino alla fine) il quale garantisce che una volta iniziata l'esecuzione del codice, questa non verrà
                mai interrotta fino al raggiungimento dell'ultima riga.
            </p>
            <p>Anche se questa cosa sembra incompatibile con quanto mostrato nel nostro esempio, in realtà non lo è
                poiché quello che viene garantita è l'esecuzione senza interruzioni del <code>Task</code> (o come da
                specifica ECMAScript, del <code>Job</code>) e non del codice in generale.
                Il Task è un concetto astratto del linguaggio che rappresenta del codice JS da valutare: succede infatti
                che quando lanciamo NodeJS chiedendogli di eseguire un file JS, il codice contenuto in esso viene
                convertito (racchiuso) in un Task, a sua volta passato all'unico componente che può eseguirlo, ovvero
                l'engine V8.
                Ecco che poi una volta dentro l'engine, il codice viene eseguito dall'inizio alla fine, senza
                interruzioni. Se una funzione impiega del tempo per essere completata, l'engine continua ad eseguirla,
                rimanendo eventualmente impegnato dall'elevato numero di calcoli necessari per concluderla.
            </p>
            <p>Quando l'engine incontra però una chiamata a <code>setTimeout()</code> le cose cambiano, infatti la
                funzione passata come parametri viene usata per la creazione di un nuovo Task da eseguire
                successivamente; in particolare una volta completato il Task corrente verrà passato il nuovo Task
                creato a V8 che lo eseguirà
                Questo spiega quindi perché la chiamata a <code>setTimeout()</code> viene completata subito senza che
                venga eseguito il codice in essa contenuto, che come abbiamo detto verrà eseguito successivamente come
                nuovo Task, rispettando quindi la "run-to-completion".
            </p>
            {/* <p>[IMG to fix] Esecuzione Codice e Trasformazione in Task</p> */}
            <p>Una volta appurato che V8 è responsabile dell'esecuzione dall'inizio alla fine (nel rispetto della
                run-to-completion) dei Task che gli vengono passati, resta da definire chi è responsabile di
                indicargli quali Task eseguire.
                La risposta è semplicissima: il componente responsabile di prendere queste decisioni è
                l'<code>event loop</code>.
            </p>
            <p>Da questo punto di vista la funzione <code>setTimeout()</code> può considerasi speciale, poiché infatti è
                in grado di interagire direttamente con l'<code>event loop</code> dal codice JS, infatti grazie ad essa
                è possibile sia creare un nuovo Task da eseguire in futuro, sia specificare quanto tempo aspettare prima
                di eseguirlo.
                Una rappresentazione di quanto appena detto potrebbe essere rappresentata come segue:
                <JavascriptCode code={`
                    while(tasksQueue.length > 0) {
                        nextTask = tasksQueue.pickNext();
                        execute(nextTask);
                    }
                `}/>
            </p>
            <p>Quanto appena accennato ci riporta ad una informazione che spesso si sente dire circa JS, ovvero che
                proprio questa caratteristica di eseguire un solo Task alla volta si traduce nella definizione di
                "JS è un linguaggio single-thread".
            </p>
            <p><i>Per quanto riguarda NodeJS, in esso abbiamo a disposizione diverse funzionalità che ci permettono di
                implementare meccanismi di esecuzione parallela su più thread.
                Inoltre è bene notare che V8 al suo interno utilizza thread aggiuntivi per eseguire attività accessorie
                all'esecuzione del codice JS, come ad esempio la garbage collection.</i>
            </p>
            <p>Per ciò che riguarda l'event loop va detto che esso non fa parte del linguaggio stesso ma fa comunque in
                modo che il codice da lui orchestrato rispetti lo standard; per tale motivo infatti noi con il codice
                possiamo solo definire la sequenza dei Tak da aggiungere, ma non possiamo in alcun modo alterare o
                sospendere l'esecuzione corrente, nè eseguire altro codice in parallelo dentro lo stesso interprete.
            </p>
            {/* <p>[IMG to fix] Rappresentazione Event Loop</p> */}
            <h3>Fasi dell'event loop: Timers, Poll e Check</h3>
            <p>Proviamo ora ad osservare questo codice:</p>
            <JavascriptCode code={`
                import fs from "fs";
                import { isPrime } from "./isPrime.mjs";
                
                console.log("Running the script...");
                
                fs.readFile("./number.txt", { encoding: "utf-8" }, (err, data) => {    
                    const numToCheck = Number.parseInt(data);    
                    console.log(\`Number to check: \${numToCheck}\`);
                    const primeRes = isPrime(numToCheck);
                    setTimeout(() => {        
                        console.log(\`[timeout] \${numToCheck} is prime? \${primeRes}\`);    
                    }, 0);    
                    setImmediate(() => {        
                        console.log(\`[immediate] \${numToCheck} is prime? \${primeRes}\`);    
                    });
                });”
            `}/>
            <p>In questo caso il codice si occupa di leggere un file da cui estrarre un numero e verificare che questo
                sia primo o meno. Provando ad eseguire il file noteremo che il risultato potrebbe presentare delle
                sorprese:
            </p>
            <TerminalCode code={`
                Running the script...
                Number to check: 982451653
                [immediate] 982451653 is prime? true
                [timeout] 982451653 is prime? true
            `}/>
            <p>Quello che in sostanza potrebbe sorprenderci è il fatto che che l'output emesso da
                <code>setImmediate()</code> è mostrato prima di quello emesso da <code>setTimeout()</code>, nonostante
                la chiamata a <code>setTimeout()</code> sia stata effettuata prima di quella a
                <code>setImmediate()</code> e con parametro <code>0</code> millisecondi.
                Dietro a questo comportamento ci sono tre esatte motivazioni:
                <ul>
                    <li>non esiste una sola coda di Task da eseguire, ma più di una;</li>
                    <li>ognuna di queste funzioni aggiunge i Task in una coda diversa;</li>
                    <li>il giro compiuto dall'<code>event loop</code> è diviso in varie fasi, alle quali corrispondono
                        diverse code di Task
                    </li>
                </ul>
            </p>
            <p>La funzione <code>setTimeout()</code> crea nuovi Task nella coda associata alla fase <code>Timers</code>.
                Succede quindi che ogni volta che noi invochiamo questa funzione un nuovo elemento viene aggiunto alla
                coda dei Task da eseguire alla fase <code>Timers</code>, assieme all'intervallo di tempo da attendere.
                Dopodiché quando l'event loop passa da quella fase, esegue tutti i Task presenti in cui il tempo di
                attesa è scaduto.
                <i>Anche la funzione <code>setInterval()</code> aggiunge Task alla coda <code>Timers</code> ed anche la
                    loro gestione avviene in maniera analoga a quanto appena descritto.</i>
            </p>
            <p>La funzione <code>setImmediate()</code> invece aggiunge i Task alla coda associata alla fase
                <code>Check</code>. Differentemente dagli elementi presenti nella coda <code>Timers</code>, questi non
                hanno un tempo di attesa associato da rispettare, quindi appena l'event loop passa da questa fase
                esegue subito tutti i Task presenti.
            </p>
            <p>{/* <p>[TO FIX] Attenzione a non confondere timers module con timers queue</p> */}</p>
            <p>Nel nostro codice osserviamo che entrambi le chiamate si trovano all'interno della callback passata a
                <code>readFile()</code>. Sappiamo che NodeJs delega le operazioni I/O a <code>libuv</code> quindi
                in questo caso al termine dell'operazione di lettura del file la funzione di callback viene aggiunta
                in una coda di Task della fase <code>poll</code>.
            </p>
            <p>La fase <code>poll</code> rappresenta il fulcro dell'event loop, infatti è proprio in questa fase che
                vengono eseguite tutte le callback relative alle operazioni I/O ed è sempre in questa fase che viene
                verificata la presenza di nuovi eventi di I/O (esempio nuove connessioni in entrata).
                In sostanza è proprio in questa fase che riceviamo e processiamo le informazioni dall'esterno
                (file, socket, ecc.)
            </p>
            <p>Il nostro codice che reagisce agli eventi di I/O, viene eseguito in questa fase, seguendo sempre la
                logica della coda di Task. Però a differenza di quanto succede con le funzioni timer, questi sono
                inseriti nella coda da NodeJs stesso quando l'operazione da noi richiesta è completata (viene cioè
                aggiunta alla coda la callback associata) oppure quando un certo evento si verifica (viene in questo
                caso aggiunta alla coda la funzione listener associata).
            </p>
            <p>In base a quanto appena descritto, vediamo quindi che nel nostro caso la funzione <code>readFile()</code>
                avviene nella fase poll e sempre in questa fase vengono create i due Task con
               <code>setTimeout()</code> e <code>setImmediate()</code>.
                E questo spiega il motivo per il quale viene eseguita prima la funzione passata (callback) a
                <code>setImmediate()</code> rispetto a quella passata a <code>setTimeout()</code>.
            </p>
            <p>Infatti succede che la fase di <code>check</code> che si occupa di eseguire le funzioni pianificate con
                la funzione <code>setImmediate()</code> viene eseguita subito dopo la fase <code>poll</code> mentre la
                fase <code>timers</code> viene eseguita prima di essa, quindi dovrà attendere nuovamente il successivo
                giro dell'event loop per essere eseguita, esattamente come mostrato in figura.
            </p>
            <p>{ /* <p>[TO FIX] Rappresentazione Fasi Timers, Poll e Check</p> */ }</p>
            <p>Quello che importante osservare è che le fasi dell'event loop seguono sempre lo stesso ordine e questo
                chiaramente influenza quale funzione programmata con i timer sarà eseguita prima e quale dopo.
                <p>{ /* <p>[TO FIX] Descrive la distribuzione dei Task nelle varie Queue delle 3 Fasi</p> */}</p>
            </p>

            <h3>Caratteristiche dei Timer</h3>
            <p>Sappiamo che per ogni fase dell'event loop ci sono code separate dei task (task queue) e che ogni volta
                che l'event loop passa su una di queste fasi esegue tutti i task presenti nella coda specifica.
            </p>
            <JavascriptCode code={`
                setTimeout(() => { console.log(\`[timeout] 1\`); }, 0);
                setImmediate(() => { console.log(\`[immediate] 1\`); });
                setTimeout(() => { console.log(\`[timeout] 2\`); }, 0);
                setImmediate(() => { console.log(\`[immediate] 2\`); });
                setTimeout(() => { console.log(\`[timeout] 3\`); }, 0);
                setImmediate(() => { console.log(\`[immediate] 3\`); });”
            `}/>
            <p>Nonostante <code>setTimeout()</code> abbia ricevuto come tempo di attesa zero millisecondi, se avviamo il
                codice vedremo che l'output sarà differente da come lo abbiamo scritto:</p>
            <TerminalCode code={`
                [immediate] 1
                [immediate] 2
                [immediate] 3
                [timeout] 1
                [timeout] 2
                [timeout] 3
            `}/>
            <p>Sappiamo che in questo caso quando l'event loop passa per la fase <code>check</code> esegue tutte le
                funzioni pianificate con <code>setImmediate()</code> e solo dopo passando per la fase
                <code>timers</code> esegue le funzioni pianificate con <code>setTimeout()</code>.
                Però sapendo che la fase <code>timers</code> è la prima che viene eseguita durante ogni giro
                dell'event loop, ci aspetteremmo che le funzioni pianificate con <code>setTimeout()</code> vengano
                eseguite prima di quelle pianificate con <code>setImmediate()</code>.
            </p>
            <p>La spiegazione di questo comportamento è dovuto proprio alla funzione <code>setTimeout()</code> che
                da documentazione stessa ci dice che se il tempo di attesa prima di eseguire la callback è maggiore di
                2147483647 o minore di 1 (caso nostro è infatti zero) il valore considerato sarà di default 1
                millisecondo.
                Ecco allora che se il nostro computer è abbastanza veloce da raggiungere la fase timer in meno di
                1 ms allora otterremo un output invertito rispetto al precedente (quindi prima i timeout e poi gli
                immediate task), viceversa passando per la fase timer non trova timer scaduti e quindi prosegue il giro
                sino alla fase check dove trova i task di <code>setImmediate()</code> da eseguire.
                Al giro successivo poi troverà i task timer scaduti e li eseguirà.
            </p>
            <p>Alla luce di quanto affermato possiamo quindi dire che in generale non si può fare affidamento sulla
                funzione <code>setTimeout()</code> per eseguire subito una funzione, ma è meglio usare
                <code>setImmediate()</code> dato che conosciamo con esattezza la fase nella quale verrà eseguita.
                Anche e soprattutto perchè <code>setTimeout()</code> non garantisce che la callback venga eseguita
                esattamente dopo il tempo specificato, ma a partire da quell'intervallo di tempo, proprio per il modo
                in cui funzionano i timer all'interno dell'event loop.
            </p>
            <p>Ad onore del vero anche <code>setImmediate()</code> presenta una particolarità a cui è bene prestare
                attenzione, ovvero l'ipotesi in cui una chiamata a <code>setImmediate()</code> venga effettuata
                proprio all'interno di un'altra funzione <code>setImmediate()</code>: in tal caso non sarà permesso alla
                funzione pianificata di essere eseguita nella stessa fase di <code>check</code>.
            </p>
            <p>Questo ci porta quindi ad una deduzione, ovvero che anche chiamando in modo ricorsivo
                <code>setImmediate()</code> non riusciremmo mai a bloccare l'event loop, perché ogni invocazione creerà
                un Task che sarà eseguito solo al giro successivo, sempre nella fase di check.
            </p>
            <JavascriptCode code={`
                // File scheduling-timers.mjs
                setTimeout(() => { console.log(\`[timeout 0]\`); }, 0);
                setImmediate(() => {    
                    console.log(\`[immediate 0]\`);    
                    setTimeout(() => {        
                        console.log(\`[timeout] scheduled from immediate 0\`);    
                    }, 0);    
                    setImmediate(() => {        
                        console.log(\`[immediate] scheduled from immediate 0\`);    
                    });    
                    let i = 0;    
                    while (i < 10000000) { // per dare 1ms di tempo a setTimeout...         
                        i++;    
                    }
                });”
            `}/>
            <p>Eseguendo il codice vedremo che l'output sarà:</p>
            <TerminalCode code={`
                [immediate 0]
                [timeout 0]
                [timeout] scheduled from immediate 0
                [immediate] scheduled from immediate 0
            `}/>
            <p>In sostanza viene eseguita per prima la funzione <code>setImmediate()</code> del livello principale.
                Successivamente nel giro successivo dell'event loop, vengono eseguite le due funzioni passate alle
                relative <code>setTimeout()</code>.
                Infine il codice contenuto nella <code>setImmediate()</code> viene eseguito sempre nel successivo giro
                dell'event loop, ma per ultimo, perché la fase di check si trova dopo quella di timers.
            </p>
            <p><i>Piccola nota a margine: il ciclo <code>while</code> all'interno della <code>setImmediate()</code>
                serve a dare del tempo alla chiamata <code>setTimeout()</code> di far passare il millisecondo di attesa
                di cui abbiamo parlato per far si che al primo passaggio dell'event loop nella fase di timers
                venga eseguita la funzione passata a <code>setTimeout()</code>.
                In caso contrario la parte finale dell'output potrebbe essere invertita rispetto a quanto mostrato.</i>
            </p>

            <h3>Libuv e Poll</h3>
            <p>Rispetto al passato, oggi i moderni sistemi operativi offrono chiamate di sistema (system calls)
                asincrone per buona parte delle operazioni di I/O (es. lettura dati da un socket) e le API di NodeJS
                le sfruttano internamente (attraverso libuv) per fornirci le stesse funzionalità nel nostro codice JS.
                NodeJS ci offre anche API asincrone per la lettura di file e per la risoluzione dei nomi di dominio
                (nonostante i sistemi operativi on offrano system calls asincrone non bloccanti per queste operazioni)
                grazie ad un gruppo di thread mantenuti in esecuzione in background da libuv (sempre all'interno del
                processo di NodeJS) a cui vengono delegate queste attività che viceversa sarebbero bloccanti.
            </p>
            <p>Molto molto difficilmente avremo a che fare direttamente con questi thread interni, ma è comunque bene
                sapere che molto delle operazioni più comuni che facciamo con NodeJS passano attraverso di loro, come
                ad esempio:
                <ul>
                    <li>tutte quelle esposte dalle API asincrone del modulo <code>fs</code> (fatta eccezione di quelle
                        per fare <code>watch</code>;</li>
                    <li>tutte quelle fornite dal modulo <code>zlib</code>;</li>
                    <li>alcune funzioni del modulo <code>crypto</code> (esempio <code>crypto.randomBytes()</code> e la
                        funzione <code>dns.lookup()</code>;</li>
                </ul>
            </p>
            <p>Libuv mantiene un poo di quattro thread all'interno di NodeJS per eseguire queste operazioni da cui ne
                consegue che qualora la nostra applicazione dovesse farne un uso intensivo, il loro numero potrebbe
                diventare un collo di bottiglia per le performance: qualora dovessero presentarsi situazioni del genere
                è possibile cambiare il numero di questi thread assegnando alla variabile d'ambiente
                <code>UV_THREADPOOL_SIZE</code> il nuovo numero di thread da utilizzare.
            </p>
            <p>{/* <p>[TO FIX] Rappresentazione Componenti interni Libuv</p> */}</p>
            <p>Indipendentemente dal tipo di operazione asincrona che eseguiamo con NodeJS, quando questa è completata
                (es. lettura di un file) o quando c'è un nuovo evento (es. nuova connessione TCP), la funzione associata
                (callback o listener) viene inserita nella coda di Task associata alla fase poll per essere eseguita.
                Dopodiché, come sappiamo, quando l'event loop raggiunge questa fase, esegue le funzioni che trova
                all'interno della coda ma, a differenza delle altre fasi, non è detto che le esegua tutte, infatti dopo
                averne processate un po', se raggiunge il suo limite interno, passa alla fase successiva lasciando la
                loro esecuzione per il giro successivo.
            </p>
            <p>Questo comportamento è dovuto al fatto che durante l'esecuzione della fase di <code>poll</code>
                potrebbero verificarsi altri eventi di I/O e quindi essere aggiunti nuovi elementi alla coda di Task;
                ecco allora che per evitare di bloccare l'event loop su questa fase, NodeJS stesso applica un limite
                numerico agli elementi di questa coda che possono essere processati ad ogni singolo giro.
            </p>
            <p>E' importante però sapere in merito che se la coda di funzioni da eseguire nella fase di poll è vuota,
                NodeJS può decidere di rimanere in attesa di nuovi elementi da eseguire senza dover per forza andare
                subito alla fase successiva (check).
                Se però sono presenti Task pianificati con <code>setImmediate()</code>, non aspetta e procede subito
                verso la fase di <code>check</code> per eseguirli.
                <i>In ogni caso, prima di lasciare la fasi di poll, NodeJS verifica se ci sono dei timer scaduti (quelli
                    creati con <code>setTimeout()</code> e <code>setInterval()</code>) e li segna come da eseguire non
                    appena completerà il giro e ripasserà per la fase di timers.</i>
                In sostanza questo ci porta ad osservare che anche se la fase di <code>timers</code> è separata dalla
                fase di <code>poll</code>, è comunque la fase di <code>poll</code> che decide quali Task devono essere
                eseugiti e quando.
            </p>
        </div>
    );
}

export default ConcurrencyVsParallelism;