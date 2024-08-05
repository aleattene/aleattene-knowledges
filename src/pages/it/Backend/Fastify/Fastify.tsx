import React from 'react';
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const Backend: React.FC = () => {
    return (
        <div>
            <h1>Fastify</h1>
            <p>Come è ben risaputo, Express con la sua semplicità rappresenta il framework più popolare per Node.js
                e rende qualsiasi altra scelta alternativa piuttosto difficile. Tuttavia, Fastify rispetto ad altri suoi
                predecessori (Restify, Koa, Hapi) sembra aver trovato una sua dimensione.
            </p>
            <p>Si tratta di un framework open source dalle elevate performance, dotato di ottima estensibilità, con
                impostazioni di default estremamente razionali e che via via si sta affermando come scelta ottimale per
                chi vuole ottenere il massimo da un framework per NodeJS.
            </p>
            <p>Una cosa interessante da osservare è che nonostante il suo funzionamento sembri simile a quello di
                Express, in realtà ciò che succede al suo interno è molto diverso, infatti il suo codice segue il
                funzionamento di NodeJS cercando di sfruttarlo al meglio con conseguenti vantaggi anche per le nostre
                applicazioni.
            </p>
            <p>Viene rilasciato nella sua prima versione nell'ottobre del 2016 per mano di Thomas della Vedova e Matteo
                Collina, per poi via via evolversi sino alla versione corrente (2024) che è la 4.
            </p>
            <h3>Esempio Progetto Hello World</h3>
            <p> Per prima cosa creiamo una directory di progetto, lo inizializziamo ed installiamo Fastify:</p>
            <TerminalCode code={`
                // Creazione directory di progetto
                mkdir hello-world
                cd hello-world
                
                // Inizializzazione del progetto
                npm init -y
                
                // Installazione Fastify
                npm install fastify
            `}/>
            <p> Creiamo a questo punto il nostro server Fastify:</p>
            <JavascriptCode code={`
                // File index.js
                import fastify from 'fastify';
                // Creazione istanza Fastify (similmente a Express con app) con legger di default attivato
                const fastify = Fastify( { logger: true } );
                
                // Creiamo una route con lo SHORTHAND METHOD
                fastify.get('/', async (request, reply) => {
                    request.log.info('Logger attivato');
                    return { hello: 'world' };
                
                // Avviamo il server
                try {
                    await fastify.listen({ port: 3000 });
                } catch (err) {
                    fastify.log.error(err);
                    process.exit(1); 
                }
            `}/>
            <p>Osserviamo che la definizione delle route è all'apparenza molto simile a quella di Express, in realtà ci
                sono due sostanziali differenze:
            </p>
            <ol>
                <li>è possibile usare funzioni asincrone senza dover aggiunger un wrapper intorno all'handler</li>
                <li>è possibile restituire direttamente un oggetto senza dover invocare alcuna funzione (res.send(),
                    res.write(), ecc.)
                </li>
            </ol>
            <p>Per avviare il server e verificare il funzionamento del nostro progetto:</p>
            <TerminalCode code={`
                $ node index.js
                $ curl http://localhost:3000
                > GET / HTTP/1.1
                > Host: localhost:3000
                ...
                < HTTP/1.1 200 OK
                < Content-Type: application/json; charset=utf-8
                < Content-Length: 17
                ...
                {"hello":"world"}
            `}/>
            <p>[TO FIX] Logging</p>
            <h2>Routing</h2>
            <p>Con Fastify è possibile definire le route in modo molto simile ad Express (come osservabile nel
                precedente codice) ma esiste anche una seconda possibilità (cambia dal punto di vista sintattico e di
                leggibilità del codice, ma non di funzionamento) utilizzare il metodo <code>route()</code>:
            </p>
            <JavascriptCode code={`
                // File index.js
                // ...
                
                // Creiamo una route con il metodo route()
                fastify.route({
                    method: 'GET',
                    url: '/',
                    handler: async (request, reply) => {
                        request.log.info('Logger attivato');
                        return { hello: 'world' };
                    }
                });
                
                // ...
            `}/>
            <p>Entrambi i metodi sono validi e la scelta dipende sostanzialmente dal numero di
                <a href={"https://www.fastify.io/docs/latest/Routes"}>
                    <code className={'documentation-link'}>opzioni</code>
                </a>
                (Fastify ne supporta 27) da passare alla route: se sono meno di tre conviene usare lo shorthand method,
                altrimenti più indicato il metodo route().
                Ad ogni modo, qualora preferissimo usare sempre lo shorthand method, per ottimizzare la soluzione
                conviene creare un oggetto con tutte le varie opzioni e passarlo parametro della funzione, come ad
                esempio:
            </p>
            <JavascriptCode code={`
                // File index.js
                // ...
                
                const options = { ... };
                
                app.get('/', options, async (request, reply) => { ... });
                
                // ...
            `}/>
            <h2>Parametri nella URL</h2>
            <p>Al pari di framework come Express, anche Fastify permette di definire dei path con parametri che possono
                essere catturati e utilizzati all'interno dell'oggetto <code>request</code> alla proprietà
                <code>params</code>:
            </p>
            <JavascriptCode code={`
                // File index.js
                // ...
                
                // Catturiamo il parametro name e lo restituiamo
                fastify.get('/hello/:name', async (request, reply) => {
                    return { hello: request.params.name };
                });
                
                // Catturiamo tutti i parametri e li restituiamo
                fastify.get('/any/*', async (request, reply) => {
                    return { params: request.params};
                }
                
                // ...
            `}/>
            <p>Per testare il funzionamento:</p>
            <TerminalCode code={`
                $ curl http://localhost:3000/hello/alessandro
                {"hello":"alessandro"}
                
                $ curl http://localhost:3000/any/alessandro/attene
                {"params":{"*":["alessandro/attene"]}}
            `}/>
            <p>Dal risultato che abbiamo ottenuto possiamo osservare come la regola dell'asterisco fa si che si venga
                comunque a creare una proprietà <code>*</code> all'interno dell'oggetto <code>request.params</code>
                all'interno della quale troviamo a sua volta la parte del path catturato dall'asterisco stesso.
            </p>
            <h2>Request</h2>
            <p>Per quel che riguarda l'oggetto
                <a href={"https://fastify.dev/docs/latest/Reference/Request/"}>
                    <code>request</code>
                </a>
                bisogna far attenzione al fatto che non è quello generato dal server HTTP di NodeJS (oggetto di tipo
                <code>http.IncomingMessage</code> reperibile in <code> request.raw </code> ma è creato da Fastify a
                partire da esso. Infatti oltre ai campi standard (come ad esempio <code>request.headers</code>,
                <code>request.method</code>, ecc.) ne aggiunge altri pronti all'uso come ad esempio
                <code>request.query</code>, <code>request.id</code>, etc.
            </p>
            <JavascriptCode code={`
                // File request.mjs
                // ...
                
                // Restituiamo gli headers della richiesta
                fastify.get('headers', (request, reply) => {
                    return { headers: request.headers };
                });
                
                // Restituiamo tutte le coppie (chiave, valore) dei parametri ricevute nella query della URL
                fastify.get('query', (request, reply) => {
                    return { query: request.query };
                });       
            `}/>
            <p>Per testare il funzionamento:</p>
            <TerminalCode code={`
                $ curl http://localhost:3000/headers
                {"headers":{"host":"localhost:3000","user-agent":"curl/8.0.1","accept":"*/*"}}
                
                $ curl http://localhost:3000/query?name=alessandro&surname=attene
                {"query":{"name":"alessandro","surname":"attene"}}
            `}/>
            <p>Aspetto interessante anche per quanto riguarda i dati inviati nel body della richiesta: Fastify infatti
                li legge, li interpreta (sulla base dell'header <code>Content-Type</code> della richiesta) e li rende
                disponibili all'interno dell'oggetto <code>request.body</code> in modo automatico.
                <i>In caso di problemi, dovuti alla non presenza dell'header <code>Content-Type</code> o alla presenza
                    di un valore non supportato, Fastify restituirà un errore 415 (Unsupported Media Type).
                </i>
            </p>
            <JavascriptCode code={`
                // File request.mjs
                // ...
                
                // Restituiamo il body della richiesta
                fastify.post('body', async function handles(request, reply) => {
                    return { body: request.body };
                });              
            `}/>
            <p>Per testare il funzionamento:</p>
            <TerminalCode code={`
                $ curl -X POST http://localhost:3000/body -d '{"name": "alessandro", "surname": "attene"}'
                {"body":{"name":"alessandro","surname":"attene"}}
            `}/>
            <p>Fastify supporta di default i tipi di body più comuni ovvero JSON e testo. Per questi tipi di contenuto
                non è richiesta alcuna configurazione aggiuntiva. Per quei pochi casi in cui si voglia gestire un tipo
                di contenuto differente, Fastify mette a disposizione il metodo
                <a href={"https://fastify.dev/docs/latest/Reference/ContentTypeParser/"}>
                    <code>addContentTypeParser()</code>
                </a>
                con il quale è possibile associare a uno o più <code>Content-Type</code> un funzione di parsing
                personalizzata.
                Fatta questa configurazione sarà poi Fastify ad inserire il valore ottenuto dal parser
                nel campo <code>request.body</code>.
            </p>
            <h2>Reply</h2>
            <p>Sappiamo che è possibile definire degli handler asincroni per le route, restituendo i dati usando la
                keyword <code>return</code>. Tuttavia con Fastify è possibile creare degli handler usando normali
                funzioni o usando all'interno di esse il meccanismo delle callback.
                Quindi quando necessario (o comunque quando lo preferiamo) possiamo restituire i dati ed inviare la
                risposta al client usando il metodo <code>reply.send()</code>:
            </p>
            <JavascriptCode code={`
                // File reply-send.mjs
                // ...
                
                // Return sincrono dei dati
                fastify.get('/return', function handler(request, reply) {
                    return 'return'; 
                });
                
                // Return asincrono dei dati
                fastify.get('return-async', async function handler(request, reply) {
                    return 'return-async';
                });
                
                // Reply Send sincrono dei dati
                fastify.get('/reply-send', function handler(request, reply) {
                    reply.send('reply-send');
                });
                
                // Reply Send asincrono dei dati
                fastify.get('/reply-send-async', async function handler(request, reply) {
                    reply.send('reply-send-async');
                });
                
                // Return Promise dei dati
                fastify.get('/return-promise', function handler(request, reply) {
                    return Promise.resolve('return-promise');
                });
        
                // ...
            `}/>
            <p>Utilizzare l'oggetto
                <a href={"https://fastify.dev/docs/latest/Reference/Reply/"}>
                    <code>reply</code>
                </a>
                è molto utile quando si vuole gestire lo stato HTTP e gli header da inviare al client. Ad esempio:
            </p>
            <JavascriptCode code={`
                // File reply.mjs
                // ...
                
                fastify.get('/reply', function handler(request, reply) {
                    reply
                        .code(201)
                        .header('Content-Type', 'application/json', 'charset=utf-8')
                        .send({ name: 'alessandro' });
                });
                
                // ...
            `}/>
            <p>E' importante anche in questo caso tenere a mente che tutti metodi per la modifica della risposta da
                inviare al client si trovano nell'oggetto <code>reply</code> che analogamente a quando visto per la
                request non è l'oggetto originale di tipo <code>http.ServerResponse</code> (accessibile in
                <code>reply.raw</code>) ma è un oggetto creato da Fastify a partire da esso.
            </p>
            <h2>Errori</h2>
            <p>La miglior cosa da fare per comprendere come gestire gli
                <a href={"https://fastify.dev/docs/latest/Reference/Errors/"}>
                    <code className={'documentation-link'}>errori</code>
                </a>
                con Fastify è partire da un esempio:</p>
            <JavascriptCode code={`
                // File errors.mjs
                // ...
                
                // Route senza gestione manuale degli errori
                fastify.get('/no-error', function handler(request, reply) {
                    return 'OK';
                });
                
                // Route con errore (tramite throw)
                fastify.get('/throw-error', function handler(request, reply) {
                    throw new Error('Something went wrong');
                });
                
                // Route con errore (da Promise rejected)
                fastify.get('/promise-rejected', function handler(request, reply) {
                    return Promise.reject(new Error('Promise rejected'));
                });
                
                // Route con errore (await error)
                fastify.get('/await-error', async function handler(request, reply) {
                    await Promise.reject(new Error('Await error'));
                });
                                
                // ...
            `}/>
            <p>Verifichiamo il funzionamento:</p>
            <TerminalCode code={`
                // Response con esito positivo
                $ curl http://localhost:3000/no-error
                OK
                
                // Response con errori gestiti solo da Fastify
                $ curl http://localhost:3000/invalid-route
                {"message":"Route GET:/invalid-route not found","error":"Not Found","statusCode":404}
                
                
                $ curl -X POST -d '{"name":"alessandro"}' http://localhost:3000
                {"statusCode": 415, code: "FST_ERR_CTP_INVALID_MEDIA_TYPE", "error": "Unsupported Media Type",
                "message": "Unsupported Media Type: application/x-www-form-urlencoded"}
               
                
                // Response con errori gestito manualmente (message) e da Fastify
                $ curl http://localhost:3000/throw-error
                {"statusCode":500,"error":"Internal Server Error","message":"Something went wrong"}
                
                $ curl http://localhost:3000/promise-rejected
                {"statusCode":500,"error":"Internal Server Error","message":"Promise rejected"}
                
                $ curl http://localhost:3000/await-error
                {"statusCode":500,"error":"Internal Server Error","message":"Await error"}
            `}/>
            <p>Nonostante Fastify si comporti molto bene nella gestione automatica degli errori è sempre possibile
                personalizzarne la gestione definendo un error handler. Questo non ha bisogno di essere scritto dopo la
                definizione delle varie route poiché viene aggiunto attraverso un metodo dedicato (???) disponibile
                nell'istanza del server di Fastify.
            </p>
            <p>Vediamo quindi un esempio di un handler grazie al quale tutti gli errori che verranno generati dal server
                restituiranno al client uno stato 500 con un messaggio di errore personalizzato:
            </p>
            <JavascriptCode code={`
                // File errors.mjs
                // ...
                
                fastify.setErrorHandler(function (error, request, reply) {
                    reply
                        .status(500)
                        .send({ error: error.message });
                });
                
                // ...
            `}/>
            <p>Ecco quindi che sfruttando le proprietà associate agli errori e quelle eventualmente aggiunte negli
                oggetti <code>request</code> e <code>reply</code> dall'handler che ha gestito la richiesta (tranne in
                caso di 404) diventa relativamente semplice inviare risposte diverse per errori diversi.
            </p>
            <p>Esistono poi degli errori che non hanno bisogno di una richiesta per potersi verificare, in particolare
                ad esempio quelli che riguardano la configurazione di Fastify. Infatti, de ad esempio Fastify si accorge
                che c'è un problema o qualcosa di potenzialmente pericoloso (come potrebbe essere la definizione di
                due route duplicate), genera un errore informandoci della situazione ed interrompe l'esecuzione.
            </p>
            <TerminalCode code={`
                FastifyError [Error]: Method 'GET' already declared for route '/duplicated'
                    at Object.addNewRoute
                    // ...
                    statusCode: 500,
            `}/>
            <p>[TO FIX] Migrazione App from Express to Fastify</p>
            <p>[TO FIX] Decoratori </p>
            <h2>Validazione</h2>
            <p>Fastify contiene al suo interno un meccanismo di validazione delle request e delle response molto
                interessante. Infatti, grazie all'integrazione di JSON Schema, è possibile definire uno schema per ogni
                route che verrà usato per validare i dati inviati e ricevuti.
            </p>
            <JavascriptCode code={`
                // File validation.mjs
                // ...
                
                // Definizione dello schema (oggetto JS) per la route POST /trainer
                const postTrainerSchema = {
                    body: {
                        type: 'object',
                        required: ['name', 'surname'],
                        properties: {
                            name: { type: 'string' },
                            surname: { type: 'string' }
                        }
                    }
                };
                
                // Definizione della route POST /trainer con lo schema
                fastify.post('/trainer', { schema: postTrainerSchema }, async function handler(request, reply) {
                    // ...
                });
            `}/>
            <p>In questo modo con l'oggetto <code>schema.body</code> abbiamo indicato a Fastify quale deve essere la
                struttura che ci aspettiamo per il body di quella richiesta in entrata.In caso questa non venga
                rispettata, Fastify restituirà un errore 400 (Bad Request).
            </p>
            <TerminalCode code={`
                $ curl -X POST -d '{"name": "alessandro"} -H "Content-Type: application/json" 
                    http://localhost:3000/trainer
                {"statusCode":400,"code":"FST_ERR_VALIDATION","error":"Bad Request",
                    "message":"body should have required property 'surname'"}
            `}/>
            <p> A livello di schema, è importante tenere a mente che è possibile aggiungere anche altre proprietà
                (oltre a <code>body</code>) come ad esempio <code>querystring</code> (per validare la query),
                <code>params</code> (per validare i paramtri dell'URL) e <code>headers</code> (per validare gli header);
                l'importante è che ogni proprietà sia rappresentata da un oggetto che segua la
                struttura definita da
                <a href={"https://json-schema.org/"}>
                    <code>JSON Schema</code>
                </a>.
            </p>
            <JavascriptCode code={`
                const schema = {
                    body: { /* JSON Schema */ },
                    querystring: { /* JSON Schema */ },
                    params: { /* JSON Schema */ },
                    headers: { /* JSON Schema */ }
            `}/>
            <p>Il tutto (interpretazione di ogni schema e relativa applicazione) all'interno di Fastify è delegato al
                validato di JSON Schema <a href={"https://ajv.js.org/"}><code>Ajv</code></a>.
            </p>






        </div>
    );
};

export default Backend;