import React from 'react';
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";

const NodeJsBe: React.FC = () => {
    return (
        <div>
            <h1>NodeJS</h1>
            <p>Contenuti relativi a NodeJS.</p>
            <p>NodeJS nasce in un periodo in cui Js era considerato il linguaggio di programmazione per eccellenza
                nel campo dello sviluppo Web, per cio' che riguarda la creazione di interfacce utente dinamiche ed
                accattivanti.
                Tuttavia, il suo utilizzo era limitato alla parte client-side dell'applicazione, ovvero il browser.
                L'avvento di NodeJS ha quindi permesso di utilizzare Js anche lato server, permettendo la creazione
                di applicazioni Web complesse, scalabili, leggere e preformanti.
                Questo è possibile grazie al fatto che è divantato possibile sviluppare un'intera applicazione
                sfruttando la sua natura asincrona e non bloccante, che permette di gestire un numero elevato di
                richieste simultaneamente.
                Diventa quindi candidato ideale per la creazione di applicazioni real-time, come ad esempio chat, ed
                applicazione con architettura a microservizi.
            </p>
            <p>NodeJS viene sviluppato da Ryan Dahl nel 2009 e si basa sul motore V8 di Google Chrome, che permette
                di eseguire codice Js in modo molto veloce ed efficiente.
            </p>
            <p>E' importante sottolineare che NodeJS è un runtime, ovvero un ambiente di esecuzione per Js, e non un
                framework, librerie o linguaggio di programmazione.
                Laddove NodeJS ha un grande merito nei confronti di JS è che ha permesso a JS di liberarsi dalla
                dipendenza del browser, permettendo di poter essere utilizzato anche lato server.
                Al riguardo possiamo infatti osservare che se eseguissimo l'istruzione:
                <JavascriptCode code={`console.log("Sono Codice JS")`}/>
                avremmo come risultato sia nel browser che nel terminale quanto segue:
                <TerminalCode code={`Sono Codice JS`}/>
                Al contrario però se eseguissimo l'istruzione:
                <JavascriptCode code={`document.querySelectorAll("body > div")`}/>
                nel browser avremmo come risultato un <strong> array di elementi </strong> HTML,
                mentre nel terminale avremmo un errore: <strong> ReferenceError: document is not defined </strong>.
                O viceversa, se eseguissimo l'istruzione:
                <JavascriptCode code={`require('fs')`}/>
                nel browser avremmo un errore: <strong> ReferenceError: require is not defined </strong>,
                mentre in NodeJs avremmo la possibilità di caricare il modulo <strong> fs </strong>.
            </p>
            <h2> Differenze tra Browser e NodeJS </h2>
            <p>Le differenze principali tra Browser e NodeJS sono le seguenti: ...... </p>
            <p> Ci si potrebbe quindi chiedere come mai essendo JS un unico linguaggio, alcune istruzioni possono
                essere eseguite solo lato browser, altre solo lato server e altre ancora in entrambi i contesti.
                La risposta è che JS è un linguaggio molto flessibile, che si adatta a diversi contesti, e che
                l'ambiente di esecuzione (il cd host environment) in cui viene eseguito determina quali funzionalità
                sono disponibili.
            </p>
            <p>Il linguaggio JS è infatti uno solo, definito dalla specifica ECMAScript (definito dall'associazione
                ECMA International, attraverso il comitato tecnico TC39), mentre l'ambiente di esecuzione può variare.
                Le specifiche del limguaggio JS non contengono infatti informazioni sull'oggetto
                <strong> document </strong> o sull'istrzione <strong> require </strong>, che sono invece fornite
                dall'ambiente di esecuzione. E' in sostanza l'ambiente di esecuzione che fornisce le API disponibili
                per l'interazione con il sistema.
            </p>
            <p> [IMG to fix] BROWSER = JS + DOM API (document, windows, ... )</p>
            <p> [IMG to fix] NODEJS = JS + NODE API (fs, http, require, ... )</p>
            <p> Per comprendere meglio questo punto si prova a pensare al fatto che se andate al supermercato e chiedete
                al cassiere di fare un bonifico, vi risponderà che non è possibile, in quanto il suo ambiente di lavoro
                (il supermercato) non fornisce tale servizio. Allo stesso modo, se andate in banca e chiedete al
                cassiere di fare la spesa, vi risponderà che non è possibile, in quanto il suo ambiente di lavoro (la
                banca) non fornisce tale servizio.
                In sostanza, l'ambiente di esecuzione determina quali funzionalità sono disponibili e quindi quale
                espressioni hanno senso (fare la spesa al supermercato, fare un bonifico in banca) e quali no (fare un
                bonifico al supermercato, fare la spesa in banca).
            </p>
            <p>Un aspetto che sicuramente necessita di un chiarimento è quello che riguarda il concetto di
                <strong>runtime environment</strong>; abbiamo
                infatti osservato che l'environment è l'ambiente dove viene esegito il codice JS, ma allora per runtime
                environment cosa si intende?
                Da un punto di vista letterario dovremmo considerare il runtime environment come l'intero ambiente
                di esecuzione, quindi inclusivo di tutto quanto concerne l'hardware e software coinvolto (CPU, memoria,
                Sistema Operativo, stc), di fatto però in questa casistica per <strong>runtime environment</strong>
                si intende l'<strong>ambiente di esecuzione</strong> di JS offerto da NodeJS.
            </p>
            <p> Come abbiamo già visto NodeJs si basa sul Motore V8 di Google Chrome. E' possibile affermare questo
                perché in effetti NodeJS delega l'esecuzione del codice JS all'engine (appunto il motore V8) che si
                trova al suo interno.
                Il motore V8 è un motore di esecuzione open source sviluppato da Google per il browser Chrome (ad oggi
                è utilizzato anche da altri software) che permette di eseguire codice JS in modo molto veloce ed
                efficiente; di fatto il suo scopo è quindi quello di eseguire il codice JS che riceve in input.
                Ma non solo, durante questo processo infatti non solo compila ed esegue il codice JS, ma si occupa
                anche di allocare la memoria necessaria per gli oggetti e di liberare in modo automatico quella non
                più utilizzata (garbage collection).
            </p>
            <p>Come abbiamo appena detto, NodeJS utilizza quindi V8 al suo interno e comunica con esso attraverso il
                linguaggio C++, ovvero con il linguaggio con il quale è scritto il motore V8 stesso.
                NodeJS, definisce quindi come deve essere fatto l'ambiente in cui V8 esegue il codice JS, aggiungendo
                tutti gli oggetti e le funzioni caratteristiche di NodeJS stesso, come ad esempio l'istruzione
                <strong> require </strong> che abbiamo visto in precedenza.
                Questo ci fa quindi comprendere che potremmo vedere NodeJS come un'applicazione C++ contenente al suo
                interno il motore V8, verso il quale espone un'elevato numero di API, utilizzabile dai programmi JS che
                potranno essere eseguiti attraverso esso.
                <i>Banalmente, ma per nulla semplice, conoscendo il linguaggio C++, si potrebbe avere la possibilità
                    di realizzare NodeJS ex-novo, ovvero una applicazione C++ che contenga al suo interno il motore V8
                    e che sia in grado di eseguire del codice al suo interno.</i>
            </p>
            <p>[IMG to fix] File JS =&gt; NodeJS [C++] [ V8 esegue Js + API NodeJS (http, fs, etc) ]</p>
            <h2>NodeJS: eventi ed esecuzione non bloccante</h2>
            <p>Un'interessante osservazione per poter affrontare questo capitolo è quella di ricorrere alla descrizione
                che riportava la homepage di NodeJs ai suoi albori (2009):
                <strong>Evented I/O for V8 Javascript</strong>.
                [... TO FIX ...]
            </p>
            <h2>NodeJS: motivi della nascita</h2>
            <p>Prima di NodeJs, la maggior parte della applicazioni di rete usva i <strong>thread</strong> per
                gestire più connessioni da parte dei client: in sostanza ogni volta che il server web riceveva una
                richiesta da un client, creava un nuovo thread per eseguire il codice necessario a gestire la
                connessione.
                Il problema di questo approccio è che i thread possono gestire una sola richiesta alla volta, e
                fin quando non è conclusa la richiesta corrente, il thread rimane bloccato senza poterne gestire altre.
                In sostanza se abbiamo ad esempio che un thread impiega mediamente 2 secondi per servire una richiesta,
                con 10 richieste già ricevute dal server, sappiamo che l'undicesima dovrà attendere almeno 20 secondi
                per essere servita; va da sè che è molto probabile che il client non ricevendo risposta entro un
                tempo ragionevole, interrompa la connessione, generando un <strong>timeout error</strong> ed una
                conseguente esperienza utente negativa.
            </p>
            <p>
                Ecco allora che per risolvere questa problematica vengono creati più thread in modo da distribuire le
                richiesta tra essi e diminuire conseguentemente i tempi di attesa.
                Anche in questo caso si tratta comunque di una soluzione non efficientissima, in quanto se il numero di
                richieste (o connessioni) da gestire è molto elevato, il numero di thread necessari per gestirle
                in tempi ragionevoli potrebbe divenire troppo elevato da mettere in crisi le risorse del sistema
                disponibili, dato che comunque ogni thread occupa una parte delle risorse disponibili (alias CPU, RAM,
                etc).
            </p>
            <p>Thread e Thread poll [To Fix] </p>
            <p>Apache / Nginx [To Fix] </p>
            <p>NodeJs ha quindi introdotto un nuovo paradigma per la gestione delle richieste, basato su un'architettura
                <strong>event-driven</strong> e <strong>non-blocking</strong>
            </p>
            <p>Prima di proseguire è importante tenere a mente che solitamente le operazioni di I/O (Input/Output) sono
                le più lente in un'applicazione, in quanto richiedono l'accesso a risorse esterne al sistema (dischi,
                etc) ed è per questo che è facile diventino il collo di bottiglia delle performance.
                Ecco allora ad esempio che se durante l'invio di un risposta al client, il thread che la sta inviando
                passa ad occuparsi di un'altra richiesta, senza rimanere bloccato sulla precedente (dove
                magari il client è anche lento nel ricevere la risposta) otteniamo una situazione non bloccante
                (non-blocking).
                Dopodiché nel momento in cui l'invio della risposta è completato, verrà generata una notifica che
                permetterà al thread di tornare ad occuparsi (se necessario) di quella specifica richiesta.
                Questo ciclo di esecuzione (si fa qualcosa, si passa ad altro, si torna su operazione precedente al
                verificarsi di un evento) è quello che viene gestito attraverso un <strong>Event Loop</strong> ed il
                meccanismo delle <strong>Callback</strong>.
                Prima di Node altre librerie avevano messo a disposizione sistemi basati su eventi per lo sviluppo di
                applicazioni di rete con modelli di concorrenza efficienti (EventMachine per Ruby, Twisted per Python,
                etc), ma di fatto solo NodeJs ha messo un <strong>Event Loop</strong> al centro di tutte le sue
                funzionalità.
            </p>
            <p>Succede infatti che nel momento in cui avviamo NodeJs con in input un file Js, il codice in esso
                contenuto viene eseguito e viene avviato l'Event Loop.
                Sarà poi lui ad occuparsi di fare eseguire tutte le funzioni di callback presenti nel codice.
                Ed infine una volta che l'Event Loop vede che non ci sono più callback in attesa, NodeJs termina
                l'esecuzione.
            </p>
            <p>Leggermente diverso il discorso legato ad un server web, perché in qual caso ci sarà sempre una callback
                in attesa che è quella relativa all'evento di una nuova possibile connessione ricevuta.
                Ecco allora che in tal caso a meno di non terminare manualmente il server, NodeJs rimarrà costantemente
                in esecuzione, in attesa di nuove connessioni.
            </p>
            <p>Altro aspetto fondamentale da considerare è che non possiamo controllare l'esecuzione dell'event loop,
                tutto il codice infatti che scriviamo e che viene eseguito al suo interno deve sottostare alle sue
                regole ad ai suoi meccanismi.
            </p>
            <p>Il meccanismo delle callback viene sfruttato appieno per le operazioni I/O (che come abbiamo già visto
                sono le più lente) e quelle che richiedono tempo per essere completate.
                Tutte quelle supportate da NodeJs possono essere eseguite in modo <strong>asincrono</strong> e
                <strong>non bloccante</strong>, poiché delegate alla libreria
                <code className={'documentation-link'}>libuv</code>, la quale è usata al suo interno per fornire
                l'event loop e le operazioni di I/O non bloccanti.
                Di fatto poi è proprio questa libreria che rende NodeJS più di un semplice ambiente di esecuzione JS e
                ne permette le elevate prestazioni.
            </p>
            <p>[IMG to fix] Architettura interna di NodeJS</p>
            <p>Node JS utilizza un solo thread principale (single-thread) in cui viene eseguito tutto il codice.
                Nonostante questo, grazie alla sua architettura dove le operazioni I/O non bloccanti sono delegate
                ad altri thread (invisibili e non controllabili dall'applicazione) permette di soddisfare un numero
                elevato di richieste consumando un quantitativo limitato di risorse.
                L'uso di un solo thread non è pero da considerarsi nè un limite nè che non sia possibile sfruttare al
                massimo la potenza della CPU moderne poiché se necessario è possibile sfruttare meccanismi di
                distribuzione del carico di lavoro anche al di fuori del main thread. (to fix il collegamento)
            </p>
            <h2>NPM - Node Package Manager</h2>
            <p>Nel 2010, ad opera di Isaac Z. Schlueter, pochi mesi dopo il rilascio di NodeJs viene rilasciato anche
                <code className={'documentation-link'}>npm</code>, il package manager di NodeJs.
                Npm è un gestore di pacchetti che permette di installare, aggiornare e rimuovere pacchetti NodeJs,
                utilizzabili nelle nostre applicazioni.
                Npm è uno dei più grandi registry (in alcuni casi definiti anche repository) pubblici di moduli JS
                disponibili, un po' come lo sono PyPi per Python e
                Packagist per PHP.
                In sostanza grazie a NPM è possibile aggiungere librerie esterne (chiamate anche dipendenza) ai notri
                progetti, cosi da rendere più semplice e veloce lo sviluppo.
                Nel tempo è diventato uno strumento fondaentale per la comunità NodeJs, tanto che è stato integrato
                direttamente nell'installazione standard di NodeJs.
            </p>
            <p>History (to fix):</p>
            <ul>
                <li>2010: npm viene rilasciato</li>
                <li>2012: R.Dahl lascia la guida del progetto</li>
                <li>2014: prende vita il progetto io.js</li>
                <li>2015: Node Foundation</li>
                <li>2019: OpenJs Foundation</li>
            </ul>
            Ad oggi (15 anni dalla sua creazione) NodeJS può quindi ormai considerarsi una tecnologia stabile,
            supportata, ampiamente diffusa, con un vasto ecosistema ma sempre in continua evoluzione.
            <h2>Deno (to fix)</h2>
            <h2>Italiani in Node e progetto OpenSource (to fix)</h2>
            <h2>Installazione</h2>
            <p>Una cosa cui fare attenzione al momento dell'installazione di NodeJS è il tipo di versione disponibile,
                abbiamo infatti due versioni disponibili:
                <ul>
                    <li> LTS (Long Term Support): versione stabile, supportata a lungo termine, consigliata per la
                        produzione
                    </li>
                    <li> Current: versione più recente, con le ultime funzionalità, ma non supportata a lungo termine
                    </li>
                </ul>
                Il fatto di avere due versioni altro non è che un compromesso tra stabilità e velocità di evoluzione.
            </p>
            <p>Per installare NodeJs, seguire i seguenti passaggi:</p>
            <ol>
                <li>Andare sul sito <a href="https://nodejs.org/it/">https://nodejs.org/it/</a></li>
                <li>Scaricare la versione di NodeJs per il proprio sistema operativo</li>
                <li>Installare NodeJs</li>
                <li>Verificare l'installazione eseguendo il comando <code>node -v</code> e <code>npm -v</code></li>
            </ol>
            <h2>Ciclo di Vita dello Sviluppo di NodeJS (to fix)</h2>
            <p>Di base quello che bisogna ricordare è:
                <ul>
                    <li>Le versioni di NodeJS con numero dispari hanno una vita di circa 6/8 mesi</li>
                    <li>Le versioni di NodeJS con numero pari (LTS) hanno una vita di circa 36 mesi, ovvero un periodo
                        sufficientemente lungo anche per chi realizza applicazioni con un ciclo di vita molto lungo e ad
                        a cui si quindi richiesto un solo aggiornamento critico (passaggio da una versione LTS
                        ad un'altra) ogni due anni e mezzo
                    </li>
                </ul>
            </p>
            <h2>Piattaforme Supportate</h2>
            <p>NodeJs è disponibile su molti sistemi operativi ed architetture diverse e viene rilasciato in formato
                binario già compilato per la piattaforma di destinazione, ma non tutte le piattaforme sono
                supportate allo stesso modo, infatti esistono tre livelli di supporto:
                <ul>
                    <li>Tier1: è il supporto alle piattaforme più comuni e popolari; ad esse viene dedicata la
                        massima attenzione ed infatti i rilasci di nuove versioni vengono bloccati se ci sono errori
                        durante la compilazione del progetto.
                    </li>
                    <li>Tier2: è il supporto alle piattaforme con un numero più ristretto di utenti; in questo caso
                        è comunque garantita la massima attenzione, ma i loro rilasci potrebbero essere rimandati
                        in caso di problemi.
                    </li>
                    <li>Tier3: è il supporto alle piattaforme sperimentali le quali ovviamente ricevono meno
                        attenzione; non vengono in questo caso fornite versioni già compilate dell'applicazione ed
                        è pertanto necessario farlo da sè, tenendo presente che questa procedura potrebbe avere dei
                        problemi o non funzionare affatto.
                    </li>
                </ul>
                <h2>Lanciare Node (to fix)</h2>
                <p>Modalità Interattiva (REPL) (to fix)</p>
                <p>Esecuzione di uno script (to fix)</p>
                <h2>Template Literals</h2>
                <p>Template literals sono una nuova feature introdotta in ES6 che permette di scrivere stringhe in
                    modo più semplice e leggibile (rispetto all'uso di apici, doppi apici e caratteri di escape).
                    Sono delimitate da backticks (``) [Option+9][Alt+96] e possono contenere anche espressioni
                    interpolabili, ovvero espresse tra parentesi graffe ({}) e precedute dal simbolo del dollaro
                    ($). Quando incontrano un'espressione interpolabile, le template literals valutano l'espressione
                    e la sostituiscono con il risultato, che può essere una stringa, un numero, un booleano, un
                    oggetto, un array, una funzione, ecc.
                </p>
                <h3>Esempio:</h3>
                <JavascriptCode code={`
                        const author = "Jeff Atwood"
                        const atwood_quote = \`Qualsiasi applicazione che può essere scritta in JavaScript, 
                        prima o poi verrà scritta in JavaScript (\${author}).\`
                        console.log(atwood_quote)
                    `}/>
                <p>Output:</p>
                <TerminalCode code={`
                        Qualsiasi applicazione che può essere scritta in JavaScript, 
                        prima o poi verrà scritta in JavaScript (Jeff Atwood).
                    `}/>
                <h2>Tagged Templates (to fix)</h2>
                <h2>Accesso Casuale ad un Array</h2>
                <p>La tecnica più comunemente utilizzata per accedere casualmente ad un elemento di un array è
                    quella di generare un numero casuale tra 0 e la lunghezza dell'array meno uno e utilizzarlo
                    come indice per accedere all'elemento corrispondente.
                    A tale scopo utilizziamo quindi la funzioni
                    <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random'}>
                        <code className={'documentation-link'}> Math.random() </code>
                    </a> che restituisce un numero tra 0 e 1 (escluso) come ad esempio 0.123456789 e
                    <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor'}>
                        <code className={'documentation-link'}> Math.floor() </code>
                    </a> che estrae la parte intera del numero generato (doveroso in quando gli indici degli array
                    come sappiamo sono rappresentati da numeri interi.
                </p>
                <JavascriptCode code={`
                        const colors = ["red", "green", "blue", "yellow", "purple"]
                        const randomIndex = Math.floor(Math.random() * colors.length)
                        const random_color = colors[randomIndex]
                        console.log(random_color)
                    `}/>
                <p>Output (for example):</p>
                <TerminalCode code={`green`}/>
                <p>Osserviamo al riguardo che le funzioni <code>Math.random()</code> e <code>Math.floor()</code>
                    non fanno parte delle API di NodeJS, ma sono parte delle API di JS, quindi fornite direttamente
                    dal motore V8 nell'ambiente di esecuzione; è per tale motivo che infatti non dobbiamo importare
                    alcun modulo per poterle utilizzare.
                </p>
                <p>Un'altra importante osservazione da fare riguarda la casualità dei valori restituiti, che in
                    realtà non lo sono veramente, infatti sono valori che si basano su uno stato interno e per tale
                    motivo è più corretto definirli come pseudo-casuali.
                    Qualora volessimo ottenere valori veramente casuali (come quelli richiesti per applicazioni
                    crittografiche e di sicurezza) potremmo far affidamento alla funzione
                    <a href={'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues'}>
                        <code className={'documentation-link'}> crypto.getRandomValues() </code>
                    </a> fornita dal modulo crypto di NodeJs.
                </p>
                <h2>Dati e JSON</h2>
                <p>Capita a volte di dover manipolare dati in formato JSON in modo da mantenerli divisi dal codice.
                    Quando ci troviamo a fare ciò dobbiamo però considerare che le specifiche del formato
                    <a href={'https://www.json.org/'}>
                        <code className={'documentation-link'}> JSON </code>
                    </a>(JavaScript Object Notation) non permettono nè di
                    avere stringhe multilinea nè di usare i template literals. Per tale motivo è bene quindi
                    ricordare che vanno usati le sequenze di escape per i caratteri speciali e \n per gli a capo.
                </p>
                <h3>Serializzazione e Deserializzazione</h3>
                <p>La serializzazione è il processo di conversione di un oggetto in una stringa, mentre la
                    deserializzazione è il processo inverso, ovvero la conversione di una stringa in un oggetto.
                    In JS possiamo utilizzare i metodi <code>JSON.stringify()</code> e <code>JSON.parse()</code>
                    per effettuare queste operazioni.
                </p>
                <p>Va osservato a questo punto che sino ad un certo punto ha senso gestire i dati in formato JSON
                    ma oltre un certo limite, meglio sfruttare i file di testo o i database.
                    Sappiamo che la funzione <code className={'documentation-link'}>rquire()</code> in questo caso
                    non può fare al caso nostro, poiché fatta per caricare moduli JS e non file normali (i file
                    JSON rappresentano solo un'eccezione alla regola).
                    Per tale motivo necessitiamo quindi di appoggiarci alle API di NodeJs per interagire con il
                    file system.
                </p>
                <h2>Node e File System</h2>
                <p>NodeJS fornisce molte API (tutte risiedenti nel modulo
                    <code className={'documentation-link'}>fs </code> per interagire con il file system, tra cui:
                    <ul>
                        <li>fs.readFile()</li>
                        <li>fs.writeFile()</li>
                        <li>fs.appendFile()</li>
                        <li>fs.unlink()</li>
                        <li>fs.rename()</li>
                        <li>fs.mkdir()</li>
                        <li>fs.readdir()</li>
                    </ul>
                    e molte altre.
                </p>
                <h3>Leggere il Contenuto di un File</h3>
                <p>In NodeJS caricare l'intero contenuto di un file in memoria e stamparlo a video è un'operazione
                    veloce e poco complessa.
                    Per farlo possiamo utilizzare la funzione <code>fs.readFile()</code> che accetta come parametri:
                    <ul>
                        <li>il path (relativo a partire dalla directory dove viene lanciato Node o assoluto)
                            del file da leggere
                        </li>
                        <li>le opzioni di decodifica del file (di default utf8); possiamo anche passare un oggetto
                            del tipo <code>{'{encoding: "utf8", flag: "r"}'}</code>
                        </li>
                        <li>una funzione di callback (da eseguire a lettura completata) che accetta a sua volta
                            due oggetti come parametri (il cui nome è comunque arbitrario):
                            <ul>
                                <li>un oggetto errore (se presente)</li>
                                <li>un oggetto data con i dati letti dal file</li>
                            </ul>
                            Per ciò che riguarda la callback è importante osservare che è uno dei meccanismi
                            standard che possono essere utilizzati con NodeJs per gestire l'asincronicità delle
                            operazioni.
                        </li>
                    </ul>
                </p>
                <JavascriptCode code={`
                        const fs = require('fs')  // Import modulo fs ed assegnazione contenuto alla variabile fs
                        const file = 'file.txt'
                        fs.readFile(file, 'utf8', (err, data) => {
                            if (err) {
                                console.error("Errore nella lettura del file \$\{file\}: \$\{err\}")
                                return
                            }
                            console.log(data)
                        })
                    `}/>
                <p>Output:</p>
                <TerminalCode code={`Contenuto del file.txt`}/>
                <p>Tutto bene ma è doverosa una piccola annotazione a livello di performance, infatti la funzione
                    <code className={'documentation-link'}>fs.readFile()</code> legge l'intero contenuto del file
                    e solo dopo esegue la funzione di callback passandogli il contenuto del file.
                    Ecco allora che sporge spontaneo il dubbio circa il fatto che la lettura di un file molto grande
                    possa effettivamente impattare sulle performance di NodeJs.
                    Ed in effetti, se il file ha dimensione pari o superiore a 512 kb verrà letto realmente in una
                    sola operazione, viceversa NodeJS leggerà 512 kb alla volta evitando di saturare i thread
                    (libuv) che si occupano della effettiva lettura dal disco così da garantire prestazioni eque
                    alle altri parti di un'applicazione.
                    Va da se quindi, come conseguenza negativa, che seppur noi abbiamo l'illusione che venga fatto
                    tutto in una sola operazione in realtà la lettura e caricamento del file in memoria avverrà
                    in più fasi e conseguentemente questo richiederà più tempo.
                    Ecco allora che quando si ha la necessità di leggere l'intero contenuto di un file il più
                    velocemente possibile, è meglio utilizzare la funzione <code>fs.read()</code> che permette
                    di specificare manualmente quanti byte di un file leggere durante una singola operazione.
                </p>
                <h3>Solo file di Testo</h3>
                <p>Un'altra annotazione importante da fare è che la funzione <code>fs.readFile()</code> è in grado
                    di leggere solo file di testo, se si tenta di leggere un file binario (come ad esempio
                    un'immagine) il risultato sarà un buffer di byte (in console potremmo anche trovarci una
                    sequenza di caratteri e simboli incomprensibili).
                </p>
                <h3>Elenco File in un Directory</h3>
                <p>Per elencare i file in una directory possiamo utilizzare la funzione <code>fs.readdir()</code>,
                    fornita dal modulo fs e che accetta i seguenti parametri:
                    <ul>
                        <li>il path della directory da leggere</li>
                        <li>una funzione di callback (da eseguire a lettura completata) che accetta a sua volta
                            due oggetti come parametri (il cui nome è comunque arbitrario):
                            <ul>
                                <li>un oggetto errore (se presente)</li>
                                <li>un array con i nomi dei file presenti nella directory</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <JavascriptCode code={`
                        const fs = require('fs');
                        const directory= './data';
                        fs.readdir(directory, (err, files) => {
                            if (err) {
                                console.error("Errore nella lettura della directory \$\{directory\}: \$\{err\}")
                                return
                            }
                            console.log(files)
                        })
                    `}/>
                <p>Output:</p>
                <TerminalCode code={`[ 'file1.txt', 'file2.txt', 'file3.txt' ]`}/>
                <p>Ci si potrebbe chiedere a questo punto il motivo per il quale durante la fase di controllo
                    dell'errore non si sia utilizzato il metodo <code>throw</code> per generare un'eccezione.
                    Ebbene la risposta è che sollevando l'eccezione NodeJs terminerebbe comunque l'esecuzione dello
                    script, ma ci informerebbe dell'errore in modo decisamente meno chiaro e pulito.
                    Avremo in sostanza un qualcosa del genere:
                    <TerminalCode code={`
                            '[Error: ENOENT: no such file or directory, scandir \'./data\'] {\n'
                            '  errno: -2,\n' 
                            '  code: \'ENOENT\',\n' 
                            '  syscall: \'scandir\',\n' 
                            '  path: \'./data\'\n'
                        `}/>
                    Per evitare questo dovremmo teoricamente aggiungere un blocco <code>try...catch</code> attorno
                    alla funzione di callback, ma questo renderebbe il codice più complesso, duplicato e
                    sicuramente meno leggibile.
                </p>
                <p>Sappiamo che la funzione <code>fs.readFile()</code> legge l'intero contenuto di un file di testo,
                    ma nella conversione in stringa ha problemi con file non di testo.
                    Se volessimo allora ottenere solo l'elenco dei file di testo (e non degli altri e/o di altre
                    directory) presenti in una directory possiamo utilizzare la funzione
                    <code>fs.readdir()</code> la quale attraverso l'opzione <code>withFileTypes: true</code> ci
                    permette di ottenere un array di oggetti di tipo <code>Dirent</code> che rappresentano
                    i file e le directory presenti nella directory.
                    QUesti oggetti hanno diverse proprietà e metodo interessanti, tra cui:
                    <ul>
                        <li>name: il nome del file o della directory</li>
                        <li>isFile(): ritorna true se l'oggetto è un file</li>
                        <li>isDirectory(): ritorna true se l'oggetto è una directory</li>
                    </ul>
                    <h3>Esempio:</h3>
                    <JavascriptCode code={`
                            const fs = require('fs');
                            const directory = './data';
                            fs.readdir(directory, {withFileTypes: true}, (err, files) => {
                                if (err) {
                                    console.error("Errore nella lettura della directory \$\{directory\}: \$\{err\}")
                                    process.exitCode = 1;
                                    return
                                }
                                const textFiles = files
                                .filter(file => file.isFile() && file.name.endsWith('.txt'))
                                .map(file => file.name);
                            })
                        `}/>
                </p>
            </p>
            <h2>Codici di Uscita</h2>
            <p>Quando un sistema operativo esegue un processo (script, programma, etc) ne legge anche il suo
                exit code (o codice di uscita) che è un valore numerico positivo che permette al processo di comunicare
                al sistema operativo se è terminato correttamente o viceversa ha incontrato un errore; in particolare:
                <ul>
                    <li>0: indica che il processo è terminato correttamente</li>
                    <li>1-255: indica che il processo ha incontrato un errore</li>
                </ul>
                Negli ambienti POSIX (Linux, Mac, WSL, etc) per visualizzare il codice di uscita di un processo appena
                terminato possiamo utilizzare la variabile standard della console <code>$?</code> poiché è in essa
                che viene memorizzato questo valore.
                <h3>Esempio:</h3>
                <TerminalCode code={`
                    $ ls
                    file1.txt file2.txt file3.txt
                    
                    $ echo $?
                    0
                    
                    $ ls file4.txt
                    ls: cannot access 'file4.txt': No such file or directory
                    
                    $ echo $?
                    2
                `}/>
                <p>In definitiva quello che possiamo osservare è che ogni codice ha un suo significato specifico
                    definito dall'applicazione dhe lo restituisce. Esisto però alcuni codici che sono standardizzati:
                    <ul>
                        <li>0: successo</li>
                        <li>1: errore generico</li>
                        <li>2: errore di sintassi</li>
                        <li>126: permesso negato</li>
                        <li>127: comando non trovato</li>
                        <li>128: errore di uscita</li>
                        <li>130: terminazione forzata</li>
                        <li>255: errore sconosciuto</li>
                    </ul>
                </p>
                <h3>Esempio:</h3>
                <JavascriptCode code={`
                    const fs = require('fs');
                    const file = 'file.txt';
                    fs.readFile(file, 'utf8', (err, data) => {
                        if (err) {
                            console.error("Errore nella lettura del file \$\{file\}: \$\{err\}")
                            process.exit(1)
                        }
                        console.log(data)
                        process.exit(0)
                    }
                `}/>
                <p>Osserviamo in questo codice la presenza dell'oggetto <code>process</code> che è un oggetto globale
                    fornito da NodeJs, contenente la variabile <code>exidCode</code> che permette di interagire con il
                    processo in esecuzione.
                    A differenza per esempio dell'oggetto Math, process non fa parte dello standard JS ma è un modulo
                    di NodeJS esposto globalmente e per questo sempre disponibile.
                    In particolare la funzione <code>process.exit()</code> permette di terminare immediatamente il
                    processo in esecuzione e restituire il codice di uscita presente in <code>process.exitCode</code>
                    (viene restituito l'ultimo valore assegnato).
                    Se il programma termina senza aver assegnato un valore a <code>process.exitCode</code> il valore
                    di default sarà 0, viceversa se il programma termina con un errore il valore di default sarà 1.
                    E' comunque possibile passare anche un valore alla funzione <code>process.exit()</code> per
                    specificare il codice di uscita desiderato anziché utilizzare il valore di default o comunque quello
                    presente in <code>process.exitCode</code>.
                </p>
            </p>
            <h2>Console.error()</h2>
            <p>La funzione <code>console.error()</code> è una funzione di console che permette di stampare un messaggio
                di errore in rosso su stderr (standard error), ovvero un canale di output dedicato agli errori,
                e non su stdout (standard output).
                Solitamente il canale stderr corrisponde alla console ma in alcuni casi può anche essere diverso.
                Per esempio se stiamo eseguendo un programma da terminale possiamo indirizzare stdout e stderr in due
                destinazioni differenti:
                <ul>
                    <li>stdout: console</li>
                    <li>stderr: file di log</li>
                </ul>
            </p>
            <h2>Parametri in Console</h2>
            <p>Quando si esegue uno script JS da terminale (o riga di comando, CLI - Command Line Interface)
                è possibile passare dei parametri al programma, i quali saranno disponibili come stringhe all'interno
                dello script attraverso l'array <code>process.argv</code>.
                <h3>Esempio:</h3>
                <TerminalCode code={`
                    $ node script.js arg1 arg2 arg3
                `}/>
                <JavascriptCode code={`
                    console.log(process.argv)
                `}/>
                <p>Output:</p>
                <TerminalCode code={`
                    [
                        '/usr/bin/node',
                        '/path/to/script.js',
                        'arg1',
                        'arg2',
                        'arg3'
                    ]
                `}/>
                <JavascriptCode code={`
                    console.log(process.argv[0])  // '/usr/bin/node'
                    console.log(process.argv[1])  // '/path/to/script.js'
                    console.log(process.argv[2])  // 'arg1'
                    console.log(process.argv.slice(2))  // ['arg1', 'arg2', 'arg3']
                `}/>
                <p>L'array ha quindi le seguenti caratteristiche:
                    <ul>
                        <li>il primo elemento è il percorso del programma NodeJs</li>
                        <li>il secondo elemento è il percorso dello script in esecuzione</li>
                        <li>gli elementi successivi sono i parametri passati allo script</li>
                    </ul>
                </p>
            </p>
            <h2>FS Promises</h2>
            <p>In NodeJS una funzione asincrona accetta una funzione di callback a cui passare il risultato e
                continuare l'esecuzione. Quando però la sequenza di operazioni diventa troppo lunga e complessa
                l'uso delle callback può diventare complicato e portare a situazioni di <code>callback hell</code>
                (o <code>pyramid of doom</code>).
                <h3>Esempio:</h3>
                <TerminalCode code={`
                    step1((result) => {
                        step2((result) => {
                            step3((result) => {
                                step4((result) => {
                                    // ...
                                })
                            })
                        })
                    }
                `}/>
            </p>
            <p>Una delle prime soluzioni che vengono in mente per risolvere questo problem è quello di riscrivere
                tutte le funzioni asincrone in sequenza senza annidamento, sbagliando, poiché infatti l'ordine di
                esecuzione delle operazioni non sarebbe più garantito. Potremmo infatti trovarci in una situazione
                in cui la funzione step4() venga eseguita prima della funzione step1() e così via.
            </p>
            <p>La vera soluzione risiede nelle API che Node espone nel modulo fs ma in versione Promise, ovvero il
                modulo <code>fs.promises</code>.
                Si tratta infatti di funzioni che hanno lo stesso nome delle precedenti ma con la differenza che
                restituiscono una Promise invece di accettare una callback.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fs = require('fs').promises;
                cont directory = process.argv[2];
                fs.readdir(directory, {withFileTypes: true})
                    .then(files => {
                        const textFiles = files
                            .filter(file => file.isFile() && file.name.endsWith('.txt'))
                            .map(file => file.name);
                        const randomIndex = Math.floor(Math.random() * textFiles.length);
                        const randomFile = textFiles[randomIndex];
                        return fs.readFile(randomFile, 'utf8').
                            .then(data => { console.log(data) })
                    })
                    // Punto in cui vengono intercettati e gestiti gli eventuali errori
                    .catch(err => {
                        console.error("Errore nella lettura della directory \$\{directory\}: \$\{err\}")
                        process.exitCode = 1;
                        return;
                    })
            `}/>
            <p>Il codice in questo caso sembra molto più chiaro e comprensibile poiché lo visualizziamo nello stesso
                modo lineare con cui lo rappresentiamo nella nostra mente, ovvero:
                <ul>
                    <li>leggere i file presenti nella directory</li>
                    <li>filtrare i file di testo</li>
                    <li>selezionare un file pseudo-casualmente</li>
                    <li>leggere e stampare il contenuto del file</li>
                    <li>se riscontriamo un errore stamparlo a video, tramite l'oggetto error e la sua proprietà
                        message che ne descrive il problema.
                    </li>
                </ul>
            </p>
            <p>Osserviamo infine che NodeJs fornisce anche delle API per accedere al file system in modo sincrono,
                scrivendo quindi del codice sequenziale, ma il problema è che il loro utilizzo è sconsigliato poiché
                bloccano il main thread, quindi l'event loop e di conseguenza qualsiasi altra istruzione JS.
            </p>
            <h2>Async/Await</h2>
            <p>Le Promise sono un'ottima soluzione per gestire le operazioni asincrone in modo più pulito e leggibile,
                ma possono comunque portare a situazioni di promise hell quando si hanno molte operazioni asincrone
                annidate.
                Per risolvere questo problema NodeJs ha introdotto le parole chiave <code>async</code> e
                <code>await</code> che permettono di scrivere codice asincrono avendo l'illusione che sia sincrono.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // File async-await.mjs
                // ES Module
                import fs from 'fs/promises';
                const directory = process.argv[2];
                try {
                    const files = await fs.readdir(directory, {withFileTypes: true});
                    const textFiles = files
                        .filter(file => file.isFile() && file.name.endsWith('.txt'))
                        .map(file => file.name);
                    const randomIndex = Math.floor(Math.random() * textFiles.length);
                    const randomFile = textFiles[randomIndex];
                    const data = await fs.readFile(randomFile, 'utf8');
                    console.log(data);
                } catch (err) {
                    console.error("Errore nella lettura della directory \$\{directory\}: \$\{err.message\}");
                    process.exitCode = 1;
                }
            `}/>
            <p>Osserviamo in questo caso che abbiamo volutamente utilizzato un file con estensione <code>.mjs</code>
                proprio per segnalare a NodeJs che si tratta di un modulo ES (ECMAScript) e non di un modulo CommonJS.
                Abbiamo fatto ciò poiché questo tipo di moduli permette l'uso delle parole chiave <code>await</code>
                al livello più alto del codice senza doverle utilizzare all'interno di una funzione asincrona (keyword
                <code>async</code>).
            </p>
            <h2>ES Module vs CommonJS</h2>
            <p>NodeJs supporta due tipi di moduli: ES Module e CommonJS.
                I moduli ES sono il nuovo standard per l'importazione e l'esportazione di moduli in JS, introdotto
                con ES6 (ECMAScript 2015) e supportato da tutti i browser moderni. Si usa la parola chiave
                <code>import</code> per importare moduli e <code>export</code> per esportarli.
                I moduli CommonJS sono il sistema di moduli utilizzato da NodeJs sin dalla sua nascita e che permette
                di importare e esportare moduli utilizzando le parole chiave
                <code>require()</code> e <code>module.exports</code>.
                <h3>Esempio:</h3>
                <JavascriptCode code={`
                    // ES Module
                    import fs from 'fs/promises';
                    
                    export default function sum(a, b) {
                        return a + b;
                    }
                    
                    
                    // CommonJS
                    const fs = require('fs').promises;
                    
                    const sum = () => {
                        return a + b;
                    }
                    
                    module.exports = sum;
                `}/>
            </p>
            <h2>Summary: Callback, Promise, and Async/Await</h2>
            <p>E' importante ricordare che alla base di tutto ci sono sempre le callback.
                Sopra di esse è stato costruito il meccanismo delle Promise per migliorarne la leggibilità.
                Ed infine sopra le Promise è stato costruito il meccanismo di async/await per poter usare le Promise
                in maniera ancora più semplice e leggibile.
            </p>
            <h2>Server HTTP</h2>
            <p>In NodeJS è possibile creare un http server utilizzando il modulo <code>http</code> che permette di
                creare un server HTTP (sfruttando il <code className={'documentation-link'}>protocollo HTTP</code>)
                che ascolta le richieste HTTP e restituisce le risposte.
                Va detto che solitamente non si utilizza il modulo <code>http</code> direttamente, ma si fa uso di
                librerie e framework più avanzati come ad esempio
                <code className={'documentation-link'}>Express</code> e
                <code className={'documentation-link'}>Fastify</code>.
                Naturalmente con questi framework si opera a livelli di astrazione più elevati ma è facile comprendere
                come questi di fatto dietro le quinte, ad un livello più basso, utilizzino proprio le API esposte da
                NodeJS.
            </p>
            <h2>Creazione Server</h2>
            <JavascriptCode code={`
                // File server.js
                const http = require('http');
                
                const server = http.createServer((req, res) => {
                    res.end('Benvenuto nel mio server!');
                });
                
                server.listen(3000, () => {
                    console.log('Server in ascolto sulla porta 3000...');
                });
            `}/>
            <TerminalCode code={`
                $ node server.js
                Server in ascolto sulla porta 3000...
            `}/>
            <p>Abbiamo creato un server HTTP che risponde a tutte le richieste con il messaggio
                <code>Benvenuto nel mio server!</code> e che ascolta sulla porta 3000.
                Per testare il server possiamo aprire il browser e digitare
                <code>http://localhost:3000</code> nella barra degli indirizzi.
            </p>
            <p>Una cosa importante che dobbiamo notare è che il server non è un normale programma che viene eseguito
                e termina immediatamente, il suo compito è ricevere richieste dai client (naturalmente anche rispondere)
                e quindi per poterlo fare deve rimanere in esecuzione.
            </p>
            <p>Per quanto riguarda il codice scritto per la creazione del server possiamo notare che:
                <ul>
                    <li>la funzione <code>http.createServer()</code> quando invocata restituisce un'istanza di
                        <code>http.Server</code> che rappresenta il server stesso in grado di ricevere richieste ed
                        inviare risposte.
                    </li>
                    <li>la gestione del flusso di request/response è delegata alla funzione passata come parametro a
                        <code>http.createServer()</code>, la quale viene invocata ogni volta che il server riceve una
                        richiesta.
                    </li>
                    <li>alla funzione <code>http.createServer()</code> vengono passati due parametri (oggetti):
                        <ul>
                            <li>req: rappresenta l'oggetto della richiesta HTTP in entrata ed è un'istanza della classe
                                <code>http.IncomingMessage</code>
                            </li>
                            <li>res: rappresenta l'oggetto della risposta HTTP che sarà inviata dal server al client
                                ed è un'istanza della classe <code>http.ServerResponse</code>
                            </li>
                        </ul>
                    </li>
                    <li>la funzione <code>end()</code> disponibile nell'oggetto <code>res</code> permette di inviare
                        del testo come risposta al client.
                    </li>
                    <li>la funzione <code>listen()</code> disponibile nell'oggetto <code>server</code> permette di
                        far partire il server e farlo ascoltare su una porta specifica (passata come parametro),
                        che nel nostro caso è la porta 3000. Inoltre accetta un secondo parametro che è una funzione
                        di callback che viene invocata una sola volta quando il server si è messo in ascolto sulla porta
                        con successo.
                    </li>
                </ul>
                <i>Se per puro caso dovesse capitare che il programma termina subito con un
                    errore <code>EADDRINUSE</code>
                    (Address already in use) significa che la porta 3000 è già in uso e quindi dobbiamo cambiare porta
                    oppure terminare il processo che la sta utilizzando. Nel caso in cui volessimo cambiare la porta, ne
                    possiamo scegliere una a piacimento ricordando però che per poter utilizzare porte con numero
                    inferiore a 1024 è necessario avere i permessi di amministratore.
                    Lo stesso identico errore capita anche quando avviamo la stessa applicazione da due terminali
                    diversi
                    (avremo in tal caso l'errore sul secondo terminale).
                </i>
            </p>
            <p>[IMG] Inspector e Status Code Restituito dal Server (to fix)</p>
            <p>Una cosa interessante da osservare (ad esempio all'interno dell'inspector del browser) è che lo status
                code restituito da nostro server è stato 200, indicante cioè una risposta positiva da parte del server,
                nonostante noi non avessimo indicato nulla all'interno di res.send() che quindi ha restituito una
                risposta vuota.
                Questo accade perché è NodeJS stesso che si occupa di inviare una risposta di default con status code
                200 se durante l'esecuzione della funzione che gestisce la richiesta HTTP non si verificano errori.
                L'unica regola da rispettare è quella di chiamare la funzione res.end() per indicare a NodeJs che la
                gestione della richiesta è terminata e quindi la risposta può essere inviata al client, altrimenti
                la richiesta rimarrebbe in sospeso fino al raggiungimento del timeout del client che ha effettuato
                la richiesta.
                Tale timeout potrebbe essere anche di diversi minuti, ma se il client non ha un tempo limite da
                rispettare questa potrebbe rimanere in sospeso per un tempo indefinito e l'unico modo per terminarla,
                se non lo fa il client, è terminare il server.
                Per quanto riguarda lo status code se lo volessimo scegliere in modo esplicito possiamo farlo
                impostando la proprietà <code>statusCode</code> dell'oggetto <code>res</code>.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const http = require('http');
                
                const host = '127.0.0.1';
                const port = 3000;
                
                const server = http.createServer((req, res) => {
                    res.statusCode = 404;
                    res.end('Pagina non trovata');
                });
                
                server.listen(port, host, () => {
                    console.log('Server in ascolto su http://\$host:\$port');
                });
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                $ node server.js
                Server in ascolto su http://127.0.0.1:3000
                
                $ curl http://127.0.0.1:3000
                Pagina non trovata
            `}/>
            <p> Osserviamo in questo caso che che la funzione listen() accetta anche il parametro host, che è
                l'indirizzo
                IP del server su cui il server deve ascoltare. Se non specificato, di default il server si metterà in
                ascolto sull'host 0.0.0.0 (o :: se IPv6) accettando così richieste da tutte le interfacce di rete attive
                sulla macchina.
                In questo nostro caso scegliendo come host 127.0.0.1 stiamo dicendo al server di ascoltare solo le
                richieste provenienti da client locali i quali sono gli unici a poter accedere attraverso l'interfaccia
                di rete di loopback come definito dallo standard IANA (Internet Assigned Numbers Authority).
            </p>
            <h2>JSON Response</h2>
            <p>Il protocollo HTTP non prescrive un formato specifico per il contenuto (la/e risorsa/e) che viene
                scambiato tra client e server, seppur HTML, XML, JSON e testo semplice siano i formati più comuni.
                In particolare il formato JSON è molto utilizzato per scambiare dati strutturati tra client e server.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // ...
                
                const server = http.createServer((req, res) => {
                    res.statusCode = 200;
                    res.end('{"message": "Benvenuto nel mio server!"}');
                });
                
                // ...
            `}/>
            <p>Questa è una prima possibile soluzione, ma è sicuramente consigliato affidarsi alla funzione
                <code className={'documentation-link'}>JSON.stringify()</code> che permette di convertire un oggetto JS
                in un JSON.
            </p>
            <JavascriptCode code={`
                // ...
                
                const server = http.createServer((req, res) => {
                    res.statusCode = 200;
                    res.end(JSON.stringify({message: 'Benvenuto nel mio server!'}));
                });
                
                // ...
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                $ curl http://127.0.0.1:3000
                {"message": "Benvenuto nel mio server!"}
            `}/>
            <p>Se ci fermassimo qui dal punto di vista HTTP sempre del testo stiamo restituendo.
                Ecco allora che dobbiamo far uso degli header.
                Si tratta di campi inviati prima del contenuto sia nelle richieste che nelle risposte HTTP, in formato
                testuale secondo la struttura <code>&lt;nome-header&gt;: &lt;valore&gt;</code>.
                Il loro nome è case-insensitive, ovvero non fa differenza se scritti in maiuscolo o minuscolo e ogni
                richiesta (o risposta) può contenerne un numero variabile.
                Il loro scopo è appunto quello di aggiungere maggiori informazioni riguardo ciò che si sta comunicando
                all'altra parte.
                Alcuni header hanno un significato standard (https://www.iana.org/assignments/http-fields/) tra cui
                troviamo uno dei più conosciuto che è <code>Content-Type</code> normalmente utilizzato per specificare
                il tipo di contenuto che si sta inviando. Si tratta di un header molto importante che merita di essere
                gestito con la dovuta attenzione poiché un valore non coerente con il contenuto inviato potrebbe
                portare il browser a non accettarne il contenuto o comunque a visualizzarlo in modo errato.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // ...
                
                const server = http.createServer((req, res) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({message: 'Benvenuto nel mio server!'}));
                });
                
                // ...
            `}/>
            <p>Così facendo stiamo dicendo al client che il contenuto che stiamo inviando è di tipo JSON per cui lui
                potrà interpretarlo di conseguenza.
            </p>
            <p><i>Al riguardo va anche detto che per semplificarci la vita alcuni header sono inviati automaticamente
                da NodeJS, come ad esempio <code>Content-Length</code> che indica la lunghezza (in byte) del contenuto
                inviato nel body della response (che nel nostro caso è la stringa che rappresenta in JSON).</i>
            </p>
            <h3>Media Type</h3>
            <p>I tipi con cui descrivere il tipo di contenuto di un messaggio sono conosciuti come
                <a href={'https://www.iana.org/assignments/media-types/'}>
                    <code>media type</code>
                </a>
                e definiti in un RFC (Request for Comments), condiviso da HTTP ed altri
                protocolli.
                I media type sono composti da due parti:
                <ul>
                    <li>type: indica il tipo generale del contenuto, la categoria comune comune a tutti i subtype</li>
                    <li>subtype: indica il tipo specifico del contenuto</li>
                </ul>
                Alcuni esempi di media type sono:
                <ul>
                    <li>text/html</li>
                    <li>application/json</li>
                    <li>image/jpeg</li>
                    <li>audio/mpeg</li>
                    <li>video/mp4</li>
                </ul>
                C'è poi il tipo <code>*/*</code> che indica che il contenuto può essere di qualsiasi tipo.
                Mentre il tipo <code>type/*</code> indica qualunque subtype del tipo specificato; quindi ad esempio:
                <code>text/*</code> indica qualsiasi subtype di tipo text, ovvero text/plain, text/html, etc.
            </p>
            <h2>Negoziare Formato Response</h2>
            <p>Il protocollo HTTP prevede la possibilità di negoziare il formato della response tra client e server.
                Il client che effettua la richiesta può infatti inviare l'header <code>Accept</code> specificando quali
                sono i tipi di contenuto che è in grado di accettare in risposta.
            </p>
            <h3>Esempio:</h3>
            <TerminalCode code={`
                $ curl http://127.0.0.1:3000
                {"message": "Benvenuto nel mio server!"}
            `}/>
            <p>A questo punto se oltre al messaggio volessimo visualizzare anche tutti gli header scambiati:</p>
            <TerminalCode code={`
                $ curl -v http://127.0.0.1:3000
                // Log generati da Curl in relazione alla connessione tra le due parti
                *   Trying 127.0.0.1:3000...
                *   Connected to 127.0.0.1:3000
                // Richiesta comprensiva di metodo, protocollo ed headers
                >   GET / HTTP/1.1
                >   Host: 127.0.0.1:3000
                >   User-Agent: curl/7.68.0
                // Disponibilità client accettare qualsiasi contenuto in response (default curl)
                >   Accept: */*      
                >    
                <   // Risposta Server
                <   HTTP/1.1 200 OK
                <   Content-Type: application/json
                <   Date: Sun, 29 Aug 2021 20:00:00 GMT
                <   // ...
                // Log generati da Curl in relazione alla disconnessione tra le due parti
                *  Connection #0 to host 127.0.0.1:3000 left intact
                // Corpo della response
                {"message": "Benvenuto nel mio server!"}
            `}/>
            <p><i>In questo caso degno di notazione è curl, ovvero un client multi-protocollo open-source (MIT)
                del 1998 che permette da riga di comando di gestire e modificare dati da inviare ad un server e di
                visualizzare altresì i dati ricevuti dal server stesso.</i>
            </p>
            <p>Sempre tramite curl possiamo a questo punto modificare l'header <code>Accept</code> per negoziare il
                formato della response, attraverso l'opzione <code>-H</code> (o <code>--header</code>).
            </p>
            <h3>Esempio:</h3>
            <TerminalCode code={`
                $ curl -H "Accept: application/json" http://127.0.0.1:3000
                {"message": "Benvenuto nel mio server!"}
            `}/>
            <p>In questo momento in realtà nulla cambierebbe poiché il server da noi precedentemente creato non legge
                gli header ricevuti dal client. Bisogna quindi saper che NodeJs inserisce tutti gli header ricevuti
                con la richiesta all'interno dell'oggetto <code>req.headers</code>, il quale ha una proprietà
                corrispondente ad ogni header ricevuto, con il nome sempre in minuscolo.
                Pertanto nel caso della proprietà <code>Accept</code> possiamo accedere al suo valore accedendo a
                <code>req.headers.accept</code>.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // ...
                
                const server = http.createServer((req, res) => {
                    const acceptJson = req.headers.accept === 'application/json';
                    const acceptText = req.headers.accept === 'text/plain';
                    if(acceptJson) {        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({message: 'Benvenuto nel mio server!'}));
                    } else if(acceptText) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Benvenuto nel mio server!');
                    } else {
                        res.statusCode = 406;
                        res.end('Not Acceptable');
                    }
                });
                
                // ...
            `}/>
            <p>Il codice appena descritto sostanzialmente:
                <ul>
                    <li>se il client richiede un contenuto di tipo JSON allora il server restituirà un JSON</li>
                    <li>se il client richiede un contenuto di tipo text allora il server restituirà un testo</li>
                    <li>in tutti gli altri casi il server restituirà un errore 406 (Not Acceptable)</li>
                </ul>
            </p>
            <TerminalCode code={`
                $ curl -v -H "Accept: text/plain" http://127.0.0.1:3000
                *  Trying 127.0.0.1:3000...
                *  Connected to 127.0.0.1 (127.0.0.1) port 3000 (#0)
                >  GET / HTTP/1.1
                > ...
                >  Accept: text/plain
                >
                <  HTTP/1.1 200 OK
                <  Content-Type: text/plain
                <  ...
                Benvenuto nel mio server!
            `}/>
            <p>Analogamente possiamo provare a vedere come risponderebbe il server qualora chiedessimo un contenuto
                in un formato non consentito:
            </p>
            <TerminalCode code={`
                $ $ curl -v -H "Accept: video/mp4" http://127.0.0.1:3000
                * ...
                > GET / HTTP/1.1
                > ...
                > Accept: video/mp4
                >
                < HTTP/1.1 406 Not Acceptable
                ...
            `}/>
            <p>Teoricamente funziona tutto, ma in realtà non è esattamente così, poiché se non inviamo esattamente
                il tipo di contenuto che il server si aspetta, il server restituirà un errore 406 (Not Acceptable).
            </p>
            <h3>Esempio:</h3>
            <TerminalCode code={`
                $ curl -v -H "Accept: */*" http://127.0.0.1:3000
                * ...
                > GET / HTTP/1.1
                > Accept: */*
                > ...
                < HTTP/1.1 406 Not Acceptable
                ...
            `}/>
            <p>Succede questo perché non abbiamo istruito il server a gestire queste casistiche. Proviamo quindi
            ad aggiornare l'implementazione precedente:
            </p>
            <JavascriptCode code={`
                // ...
                
                const server = http.createServer((req, res) => {
                    const acceptJson = req.headers.accept === 'application/json';
                    const acceptText = req.headers.accept === 'text/plain';
                    const acceptAnyType = req.headers.accept === '*/*';
                    const acceptAnyText = req.headers.accept === 'text/*';
                });
                if(acceptJson) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({message: 'Benvenuto nel mio server!'}));
                } else if(acceptText || acceptAnyText || acceptAnyType) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Benvenuto nel mio server!');
                } else {
                    res.statusCode = 406;
                    res.end('Not Acceptable');
                }
            `}/>
            <p>Anche in questo sembrerebbe tutto corretto, ma tra curl e browser abbiamo delle differenze:</p>
            <TerminalCode code={`
                $ curl -v -H "Accept: */*" http://127.0.0.1:3000
                * ...
                > GET / HTTP/1.1
                > Accept: */*
                > ...
                < Benvenuto nel mio server!
                
                $ curl -v -H "Accept: text/*" http://127.0.0.1:3000
                * ...
                > GET / HTTP/1.1
                > Accept: text/*
                > ...
                < Benvenuto nel mio server!
                
                $ curl -v -H "Accept: text/plain" http://127.0.0.1:3000
                * ...
                > GET / HTTP/1.1
                > Accept: text/plain
                > ...
                < Benvenuto nel mio server!
                
                $ curl -v -H "Accept: application/json" http://127.0.0.1:3000
                * ...
                > GET / HTTP/1.1
                > Accept: application/json
                > ...
                < {"message": "Benvenuto nel mio server!"}
            `}/>
            <p>Il server risponde correttamente a tutte le richieste fatte con curl, ma se proviamo ad aprire il
                browser e digitare <code>http://127.0.0.1:3000</code> vedremo che il server restituisce un errore 406.
                Questo accade perché il browser invia all'interno di <code>Accept</code> tutti i tipi principali che
                supporta separati da una virgola.
                Inoltre è anche osservabile il fatto che in alcuni tipi sono presenti punti e virgola seguiti dalla
                stringa <code>q=numero</code>, dove il numero è un valore compreso tra 0 e 1 (default) ne indica il
                grado di preferenza da parte del client. Sulla base di tale numero quindi il server sceglierà quello
                più idonei compatibilmente con quelli che lui è impostato a poter servire.
                Sapendo questo, ecco allora che è bene conformarsi allo standard HTTP dividendo la sequenza di
                possibili valori presenti nell'header dividendoli anche dai loro eventuali parametri (sfruttando la
                funzione <code>split()</code> della classe <code>String</code>).
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // ...
                
                const server = http.createServer((req, res) => {
                    // 'text/plain, application/json;q=0.9, ...'
                    const acceptList = req.headers.accept.split(',');  
                    // ['text/plain', 'application/json;q=0,9', ...]
                    const acceptTypes = acceptList.map(type => type.split(';')[0]);  
                    // ['text/plain', 'application/json', ...]               
                    
                    const acceptJson = acceptTypes.includes('application/json');
                    const acceptText = acceptTypes.includes('text/plain');
                    const acceptAnyType = acceptTypes.includes('*/*');
                    const acceptAnyText = acceptTypes.includes('text/*');
                    if(acceptJson) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({message: 'Benvenuto nel mio server!'}));
                    } else if(acceptText || acceptAnyText || acceptAnyType) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Benvenuto nel mio server!');
                    } else {
                        res.statusCode = 406;
                        res.end('Not Acceptable');
                    }
                });
                
                // ...
            `}/>
            <p>Per il momento questo codice non prende in considerazione i parametri di preferenza (per esempio q),
                ma è bene comunque sapere che tenerne conto è richiesto dalla standard HTTP.
                Nonostante questo, se ora provassimo ad aprire il browser e digitare <code> http://127.0.0.1:3000</code>
                questa volta il risultato sarebbe corretto.
            </p>
            <p>
                <i>Piccola nota a margine: come abbiamo visto effettuare il parsing dell'header <code>Accept</code> è
                tutt'altro che banale, per questo motivo è consigliato utilizzare librerie come ad esempio
                <a href={'https://github.com/jshttp/accepts'}>
                    <code className={'documentation-link'}>accepts</code>
                </a>.
                </i>
                <p>Refactoring (to fix)</p>
            </p>
            <h2>Routing</h2>
            <p>Sino a questo momento abbiamo sempre dialogato con il server richiedendo la risorsa presente
                all'indirizzo base (root) del server stesso. E' però possibile richiedere risorse anche su path
                differenti, come ad esempio <code>http://127.0.0.1/athletes</code>.
                Senza un meccanismo di routing il server risponderebbe sempre con le stesse informazioni dello URL base.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // routing.js
                const reservationRooms = {
                    // Messaggio da mostrare nella root
                    message: "Benvenuto nella sezione atleti",
                    // Elenco degli atleti da mostrare sul path /athletes
                    athletes: [
                        {name: 'Usain Bolt', country: 'Giamaica'},
                        {name: 'Michael Phelps', country: 'Stati Uniti'},
                        {name: 'Simone Biles', country: 'Stati Uniti'}
                    ]
                };
               
                const routes = {
                    '/': {
                        (to fix)
                    },
                    '/athletes': (req, res) => {
                        (to fix))
                    }
                };
            `}/>
            <p>L'oggetto routes ha una struttura che ricalca esattamente quella degli URL da gestire, ovverosia le due
                proprietà presenti corrispondono a due path che vogliamo gestire.
            </p>
            <JavascriptCode code={`
                // routing.js
                // ...
                const server = http.createServer((req, res) => {
                    // Controllo se esiste un path ("/athletes") o siamo nella root ("/")
                    const route = routes[req.url];
                    if(!route) {
                        res.statusCode = 404;
                        res.end('Not Found');
                        return;
                    }
                    
                    const accepts = getAcceptedTypes(req);
                    if(accepts.json) {
                        resJson(res, route.getJson());
                    } else if(accepts.textPlain || accepts.text || accepts.any) {
                        resText(res, route.getText());
                    } else {
                        res.statusCode = 406;
                        res.end('Not Acceptable');
                    }
                })
           `}/>
            Possiamo ora provare da terminale la correttezza del nostro codice:
            <TerminalCode code={`
                $ node routing.js
                
                $ curl -v H "Accept: text/plain" http://127.0.0.1:3000/athletes
                * ...
                > GET /athletes HTTP/1.1
                > Accept: text/plain
                > ...
                < HTTP/1.1 200 OK
                < Content-Type: text/plain
                < ...
                Usain Bolt - Giamaica
                Michael Phelps - Stati Uniti
                Simone Biles - Stati Uniti
                
                $ curl -v http://127.0.0.1:3000/athletesxyz
                * ...
                > GET /athletesxyz HTTP/1.1
                > ...
                < HTTP/1.1 404 Not Found
            `}/>

        </div>
    );
};

export default NodeJsBe;