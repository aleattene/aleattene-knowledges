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
                Npm è uno dei più grandi registry (in alcuni casi definiti anche repository) pubblici di moduli JS disponibili, un po' come lo sono PyPi per Python e
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
                        </a> e
                        <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor'}>
                        <code className={'documentation-link'}> Math.floor() </code>
                        </a>.
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
                </p>
            </p>
        </div>
    );
};

export default NodeJsBe;