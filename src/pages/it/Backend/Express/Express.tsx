import React from 'react';
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const Express: React.FC = () => {
    return (
        <div>
            <h1>Express</h1>
            <p>Sappiamo che l'ecosistema di librerie e framework per NodeJs è vastissimo, ma tra questi sicuramente
                colui che per anni ha rappresentato il principale vettore di diffusione di NodeJs è sicuramente
                <code className={"inline-code"}>Express</code>.
            </p>
            <p>Le API di NodeJs è ormai noto siano decisamente flessibili ed allo stesso tempo potenti, basandosi su
                questo, Express non ha fatto altro che aggiungere una strato di astrazione ulteriore per permettere
                a noi sviluppatori di creare applicazioni web (o API) in maniera più semplice e veloce con ancora
                meno righe di codice di quanto non fosse già possibile fare con il solo NodeJs.
                Sostanzialmente quindi Express non fa altro che prendere ed arricchire le funzionalità di NodeJs in modo
                da semplificare le operazioni più comuni nello sviluppo di Web Application (o semplici API), quali ad
                esempio:
            </p>
            <ul>
                <li>Routing della richiesta</li>
                <li>Render di una pagina HTML</li>
                <li>Cattura dei parametri della richiesta</li>
                <li>e molto altro...</li>
            </ul>
            <p>E' sicuramente vero che ad oggi esistono alternative più moderne e dalle prestazioni superiori, ma
                nonostante questo, Express rimane una conoscenza imprescindibile per chiunque voglia lavorare con
                NodeJs, anche perché il numero di applicazioni esistenti realizzate con questo framework è talmente
                elevato che è molto probabile prima o poi ci si trovi a dover lavorare su un progetto che lo utilizza.
            </p>
            <p>E' possibile creare un'applicazione Express partendo dalla creazione di una directory di lavoro
                (esempio my-project).
                Dopodiché da terminale (posizionati nella directory my-project lanciamo il comando di inizializzazione
                di un progetto NodeJs:
            </p>
            <TerminalCode code={`npm init`}/>
            <p>Con questo comando npm creerà il file <code>package.json</code> all'interno della directory my-project
                ed inserirà al suo interno le informazioni predefinite di base del progetto:
            </p>
            <ul>
                <li>name</li>
                <li>version</li>
                <li>description</li>
                <li>etc...</li>
            </ul>
            <TerminalCode code={`npm init`}/>
            <p>Una volta creato il file <code>package.json</code> possiamo installare Express come dipendenza del
                nostro progetto con il comando:
            </p>
            <TerminalCode code={`npm install express`}/>
            <p>La dipendenza verrà quindi aggiunta sia al file <code>package.json</code> che alla directory
                <code>node_modules</code> locale del nostro progetto.
                A questo punto con pochi semplici righe possiamo già creare il nostro basilare web server:
            </p>
            <JavascriptCode code={`
                // File index.mjs 
                import express from 'express';  // importiamo il modulo express
                const app = express();          // creiamo un'istanza di express (istanza del server HTTP)
                const port = 3000;
                
                // Routing (la funzione di handler viene chiamata quando si effettua una richiesta GET (o HEAD) a "/")
                app.get('/', (req, res) => {
                    res.send('Hello World!');
                });
                
                // Avvio del server
                app.listen(port, () => {
                    console.log(\`Server in ascolto su http://localhost:\${port}\`);
                });
            `}/>
            <p>Per avviare il server possiamo utilizzare il comando:</p>
            <TerminalCode code={`node index.mjs`}/>
            <p>Se tutto è andato a buon fine, aprendo il browser e navigando all'indirizzo
                <code>http://localhost:3000</code> dovremmo visualizzare la scritta <code>Hello World!</code>.
                o in alternativa possiamo utilizzare il comando:
            </p>
            <TerminalCode code={`curl http://localhost:3000`}/>
            <p>ed ottenere come output lo stesso risultato:</p>
            <TerminalCode code={`Hello World!`}/>
            <p>Di quanto sino ad ora realizzato è interessante notare come Express abbia reso molto semplice la
                creazione di un server HTTP ed il routing delle richieste. In particolare è bene tenere a mente che
                ogni volta che usiamo il metodo <code>app.get()</code> stiamo definendo una nuova route (un nuovo
                endpoint) per le richieste in entrata e l'insieme di tutte le route (endpoint) definisce di fatto la
                struttura del nostro router.
            </p>
            <p>Anche per quel che riguarda gli oggetti <code>req</code> e <code>res</code> (passati alla funzione
                handler)è importante sottolineare come siano versioni arricchite (di nuovi metodi e proprietà) dei due
                oggetti analoghi forniti dal modulo http (di NodeJS), tra cui spicca sicuramente l'aggiunta del metodo
                <code>send()</code> attraverso cui è possibile inviare una risposta HTTP al client similmente a come
                era possibile fare con il metodo <code>res.write()</code>.
                La principale differenza tra i due è che <code>send()</code> non si occupa di inviare solo il contenuto
                ma si occupa per esempio anche di inviare l'header <code>Content-Type</code> e
                <code>Content-Length</code> sulla base dello stesso contenuto inviato.
                Proviamo quindi ad aggiornare il nostro server aggiungendo un nuovo endpoint '/about':
            </p>
            <JavascriptCode code={`
                // File index.mjs 
                // ...
                
                // Routing
                app.get('/', (req, res) => {
                    res.send('Hello World!');
                });
                
                app.get('/about', (req, res) => {
                    res.send(\`
                        [TO FIX -> Show HTML Code]
                    \`);  
                });
            `}/>
            <p>Se ora proviamo a navigare all'indirizzo <code>http://localhost:3000/about</code> dovremmo visualizzare
                il contenuto HTML inserito nel metodo <code>send()</code>.
            </p>
            <p>E' bene osservare che solo i path a cui sono stati associati degli handler producono una risposta.
                Visitando infatti qualsiasi altro path (es. <code>http://localhost:3000/qualcosa</code>) otterremo
                una risposta con status code 404 (Not Found).
            </p>
            <p>Da segnalare poi, che il meccanismo che associa una richiesta in arrivo con un path non prende in
                considerazione la differenze tra maiuscole e minuscole, quindi ad esempio i path <code>/about</code>
                e <code>/About</code> sono considerati equivalenti (meccanismo case-insensitive, modificabile tramite
                opportune impostazioni di Express stesso). (???)
            </p>
            <h2>File Statici</h2>
            <p>La maggior parte delle applicazioni web moderne per funzionare necessità di file statici (fogli di stile,
                immagini, script JS, favicon, ecc...)
                Ricordiamo che in un server web creato con il modulo <code>http</code> di NodeJS per servire file
                statici è necessario leggere a mano i file dal disco e inviare il contenuto al client.
                Con Express invece è possibile servire file statici in maniera molto più semplice grazie ad un
                meccanismo automatico che ci viene messo a disposizione dal framework. Nello specifico va creata una
                directory <code>public</code> all'interno della quale andranno inseriti tutti i file statici.
                Una volta che poi vogliamo servire questi file basterà utilizzare il metodo
                <code>express.static()</code> come mostrato di seguito:
            </p>
            <JavascriptCode code={`
                // File index.mjs 
                // ...
                const port = 3000;
                
                // Servire file statici
                app.use('/static', express.static('public'));
                
                // Routing
                app.get('/', (req, res) => {
                    res.send(\`
                        // HTML code here
                        \<\img src="/static/image.jpg" alt="Image">
                    \`);
                });               
            `}/>
            <p>A questo punto aprendo il browser e navigando all'indirizzo
                <code>http://localhost:3000/</code> dovremmo visualizzare l'immagine <code>image.jpg</code> presente
                nella directory <code>public</code>.
            </p>
            <p>Nel codice è presente una novità che riguarda l'utilizzo di un nuovo metodo <code>app.use()</code>.
                Questo metodo altro non è che la versione più generica di <code>app.get()</code> infatti quest'ultimo
                collega al path specificato solo le richieste di tipo GET, mentre <code>app.use()</code> collega al
                path specificato tutte le richieste HTTP (GET, POST, PUT, DELETE, ecc...). Questo ci dice quindi che
                tutte le richieste che iniziano con <code>/static</code> verranno inoltrate alla funzione associata.
            </p>
            <p>Abbiamo poi una seconda novità che riguarda la funzione <code>express.static()</code> che è una funzione
                che riceve in input un path relativo al disco (in questo caso <code>public</code>) e restituisce una
                funzione handler in grado di effettuare una mappatura tra il path contenuto nella richiesta HTTP e il
                path relativo alla cartella indicata in fase di setup (nel nostro caso <code>public</code>).
                Quindi se ad esempio la richiesta HTTP è <code>http://localhost:3000/static/image.jpg</code> la
                funzione handler restituirà il contenuto del file <code>public/image.jpg</code>.
            </p>
            <p>Ma è anche possibile servire file statici senza dover specificare un path specifico, basta infatti
                omettere il primo parametro di <code>app.use()</code>:
            </p>
            <JavascriptCode code={`
                // File index.mjs 
                // ...
              
                // Servire file statici
                app.use(express.static('public')); 
            `}/>
            <p>In tal caso ogni path ricevuto dal client verrà cercato dentro la directory <code>public</code> senza
                dover usare sempre il prefisso <code>/static</code>. Quindi ad esempio se ricevessimo una richiesta
                GET <code>http://localhost:3000/image.jpg</code> la funzione handler restituirebbe il contenuto del
                file <code>public/image.jpg</code>.
            </p>
            <p><i>Una cosa importante da ricordare in merito al servire file statici da parte di Express è che al fine
                di
                garantire le massime performance, Express utilizza il meccanismo degli
                <code className={'documentation-link'}> stream </code>
                per la lettura e l'invio al client dei file statici.</i>
            </p>
            <p>[TO FIX - Template Engine]</p>
            <h2>Routing</h2>
            <p>Normalmente le applicazioni web sono composte da più pagine, ognuna delle quali rappresenta un diverso
                endpoint. Per gestire queste pagine in maniera efficiente e ordinata, Express mette a disposizione un
                sistema di routing che permette di definire un endpoint per ogni pagina:
            </p>
            <JavascriptCode code={`
                // File index.mjs 
                // ...
                
                // Routing
                app.get('/', (req, res) => {
                    res.render('homepage', {
                        title: 'Homepage',
                        message: 'Benvenuto nella homepage!'
                    });
                
                app.get('/athletes/:matricola', (req, res) => { 
                    res.render('athlete', {
                        title: 'Athlete',
                        message: \`Benvenuto nella pagina dell\'atleta con matricola \${req.params.matricola}\`
                    });
                });
            `}/>
            <p>Nel codice sopra riportato abbiamo definito due endpoint: il primo per la homepage e il secondo per la
                pagina di un atleta. Entrambi gli endpoint utilizzano il metodo <code>app.get()</code> per definire
                l'endpoint e la funzione handler che verrà eseguita quando verrà effettuata una richiesta GET a quel
                particolare endpoint.
                Nel secondo caso potranno essere catturati più di un path, infatti ogni richiesta
                ricevuta con un path compattibile con il pattern <code>/athletes/:matricola</code> (come ad esempio
                <code>/athletes/123</code> o <code>/athletes/456</code>) verrà inoltrata alla funzione handler dedicata.
            </p>
            <p><i> Per dettagli più approfonditi sul routing si rimanda alla
                <a href="https://expressjs.com/it/guide/routing.html" target="_blank" rel="noopener noreferrer">
                    <code className={'documentation-link'}> documentazione </code>
                </a>
                ufficiale di Express, dove vengono effettivamente mostrati tutti i possibili usi dei parametri
                (route params) nella definizione degli URL e di come rendere dinamiche le parti di cui non ci interessa
                il valore (route path).
                In merito a ciò è anche utile fare una distinzione tra i parametri della query string e i parametri
                della route, poiché i primi non influenzano il meccanismo di routing e non possono essere usati per
                la definizione di regole di routing.</i>
            </p>
            <p>[TO FIX] Handler Multipli</p>
            <p>[TO FIX] Contenuto Dinamico</p>
            <p>[TO FIX] Pagine non Trovate</p>
            <p>[TO FIX] Gestione Errori</p>
            <p>[TO FIX] Express e Limiti</p>

            <h2>Creazione API</h2>
            <p>Express chiaramente non si limita alla creazione di applicazioni basate su pagine web, ma ci permette
                anche di creare API basate su HTTP.
                Per iniziare la creazione di un'applicazione in grado di comunicare attraverso delle API JSON, possiamo
                partire con:
                <ul>
                    <li>la creazione di una directory di lavoro (es. my-api)</li>
                    <li>l'inizializzazione di un progetto NodeJs con il comando <code>npm init -y</code></li>
                    <li>l'installazione di Express ed eventuali dipendenze con il comando
                        <code>npm install express</code></li>
                </ul>
            </p>
            <p> Prima ancora di definire il codice, è sempre buona norma definire la struttura delle API che si
                intendono creare, così da valutarne la correttezza ed avere una visione di insieme.
                <i>Strumento utile: Swagger (???)</i>
            </p>
            <TerminalCode code={`
                POST /sources
                { url: http://localhost:3000/api/v1/athletes }
                
                GET /sources
                [ url: http://localhost:3000/api/v1/athletes , url: http://localhost:3000/api/v1/athletes2 ]
                
                GET /api/v1/athletes/
                [ 
                    { id: 1, name: 'Mario Rossi', age: 30 },
                    { id: 2, name: 'Luca Bianchi', age: 25 }
                ]
            `}/>
            <p>Una volta definita la struttura delle API possiamo passare alla loro implementazione:</p>
            <JavascriptCode code={`
                // File app.mjs 
                import express from 'express';
                // ... (???)
                const app = express();
                const port = 3000;
                
                // ... (???)
                
                // Aggiunge speciale tipo di handler (middleware) in cui passano tutte le richieste ricevute dal server
                app.use(express.json());
                
                // API
                app.post('/sources', (req, res) => {
                    const { url } = req.body;
                    sources.push(url);
                    res.json(sources);
                });
                
                app.get('/sources', (req, res) => {
                    res.json(sources);
                });
                
                app.get('/api/v1/athletes', (req, res) => {
                    // ... (???)
                });
                
                // Web Server
                app.listen(port, () => {
                    console.log(\`Web Server in ascolto su http://localhost:\${port}\`);
                });
            `}/>
            <p>Abbiamo visto che la riga <code>app.use(express.json())</code> è una riga speciale che aggiunge un
                particolare tipo di handler (middleware) in cui passano tutte le richieste ricevute dal server.
                Questo middleware (fornito da Express stesso) si occupa di parsare il corpo della richiesta
                (request body) in formato JSON e di restituircelo come un normale oggetto JS che possiamo reperire
                nella richiesta con la proprietà <code>req.body</code>.
                Questo ci permette di accedere ai dati inviati dal client in formato JSON in maniera molto semplice.
            </p>
            <p>[TO FIX] Approfondimenti eventuali</p>
            <h2>Middleware</h2>
            <p>Esempio:</p>
            <JavascriptCode code={`
                // File app.mjs 
                import express from 'express';
                // ... (???)
                
                app.use((req, res, next) => {
                    console.log(\`Richiesta ricevuta: \${req.method} \${req.path}\`) \${req.statusCode}\`);
                    next();
                });
   
                app.use(express.json());
                //..
            `}/>
            <p>Questo middleware intercetta tutte le richieste in entrata e stampa in console (terminale) le
                informazioni relative ad esse (metodo, path, statusCode).
            </p>
            <p>Di fatto un middleware è una funzione che accetta i tre parametri standard di Express:
                <ul>
                    <li>req: l'oggetto request della richiesta HTTP</li>
                    <li>res: l'oggetto response della risposta HTTP</li>
                    <li>next: una funzione che rappresenta il successivo (eventuale) middleware nella catena</li>
                </ul>
                Esso può essere aggiunto al server in due modi:
                <ul>
                    <li>tramite il più generico metodo <code>app.use()</code></li>
                    <li>tramite il metodo <code>app.METHOD()</code> (dove METHOD è il metodo HTTP della richiesta)</li>
                </ul>
                Chiaramente il modo in cui viene aggiunto determina anche se dovrà essere eseguito sempre o solo alcune
                volte:
                <ul>
                    <li>aggiunto con <code>app.use()</code> verrà eseguito per ogni richiesta ricevuta</li>
                    <li>aggiunto con <code>app.METHOD()</code> verrà eseguito solo per le richieste del tipo METHOD</li>
                </ul>
            </p>
            <p>Tra tutte le azioni che è possibile eseguire all'interno di un middleware, ce se sono due che sono più
                importanti delle altre e che si escludono a vicenda, ovvero la scelta di terminare la richiesta o farla
                continuare. Nel caso precedente abbiamo visto come farla continuare, ovvero chiamando la funzione
                <code>next()</code>, di seguito vediamo come terminarla inviando una risposta al client:
            </p>
            <JavascriptCode code={`               
                app.use((req, res, next) => {
                    if(!isAuth(req)) {
                        res.status(401).send('Non autorizzato');
                    else {
                        next();
                    }
                });
            `}/>
            <p><i>E' importante ricordare sempre che qualora nessuna delle due azioni venga eseguita le richieste
                rimarrebbero bloccate finendo successivamente in timeout.</i>
            </p>
            <p>Relativamente ai middleware è importante sottolineare che maggiore sarà il tempo richiesto affinché
                svolga le azioni di cui è responsabile, maggiore sarà il tempo di risposta del server al client.
                Per fare un esempio, una responsabilità solitamente delegata ai middleware è quella relativa alla
                modifica degli oggetto che rappresentano la richiesta e la risposta, come ad esempio l'aggiunta di
                proprietà o metodi. Il middleware express.json() rientra proprio in questa categoria, infatti si
                occupa di parsare (leggere ed interpretare) il corpo della richiesta in formato JSON e di restituircelo
                aggiungendolo all'oggetto request la proprietà <code>body</code>.
            </p>
            <p>[To fix] Middleware di logging e compressione response</p>
            <h2>Logging</h2>
            <p>In una qualsiasi applicazione web reale è di fondamentale importanza effettuare il log delle attività
                che vengono svolte durante l'esecuzione della richiesta, con diversi livelli di importanza (che può
                anche variare nel tempo).
                Vero che possiamo mandare i log verso lo standard output (console.log), ma è anche vero che in un
                ambiente di produzione è decisamente più idoneo affidare la responsabilità del logging a package
                dedicati, come ad esempio <code> pino </code> (logger in formato JSON ad altre prestazioni).
            </p>
            <h3>Esempio:</h3>
            <TerminalCode code={`npm install pino-http`}/>
            <JavascriptCode code={`
                // File app.mjs 
                import express from 'express';
                import pino from 'pino-http';
                // ... 
              
                app.use(pino());
                
                app.post('/sources', (req, res) => {
                    const { url } = req.body;
                    sources.push(url);
                    req.log.info(\`URL aggiunto: \${url}\`);
                    res.json(sources);
                }
                
                // ...  
            `}/>
            <p>L'aggiunta del middleware stamperà per noi il log di tutte le richieste, allegando le informazioni
                utili a visualizzare i dettagli della nostra richiesta.
                Oltre a questo l'oggetto <code>req</code> verrà arricchito di una nuova proprietà <code>log</code>
                contenente il logger attraverso il quale possiamo usare tutti i metodi forniti da pino divisi per
                livello (in ordine: trace, debug, info, warn, error e fatal):
            </p>
            <JavascriptCode code={`
                {   
                    'level': 30,
                    ....
                    'req': {
                        'method': 'POST',
                        'url': '/sources',
                        'body': { 'url': 'http://localhost:3000/api/v1/athletes' }
                    }
                    'msg': 'URL aggiunto: http://localhost:3000/api/v1/athletes'
                }
                { 
                    'level': 30,
                    ....
                    'req': {
                        'method': 'GET',
                        'url': '/sources'
                        ...
                    }
                    'msg': 'Request completed'
                }
            `}/>
            <p>Le impostazioni di default di pino permettono solo la stampa dei log di livello info e superiori; per
                cambiare il livello minimo da stampare è sufficiente passare la proprietà <code>useLevel</code> alla
                funzione che installa il logger:
            </p>
            <JavascriptCode code={`
                app.use(pino({ useLevel: 'debug' }));
            `}/>
            <p>Ancora meglio sarebbe passare il valore di questa proprietà tramite variabile d'ambiente in modo da
                gestire il livello di logging secondo necessità e senza dover modificare il codice:
            </p>
            <TerminalCode code={`
                // file .env
                DEBUG=app
                
                // file app.mjs
                app.use(pino({ useLevel: process.env.DEBUG }));
            `}/>
            <p>Aggiungiamo infine una menzione particolare tra i vari parametri configurabili alla scelta del
                <code>transport</code>, ovvero dove i log devono essere scritti (in un file, in un database, ecc...),
                poiché è alla base delle performance elevate di pino stesso.
            </p>
    </div>
    );
};

export default Express;