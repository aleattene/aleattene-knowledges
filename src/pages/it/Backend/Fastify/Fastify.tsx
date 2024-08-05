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
                <i>In caso di problemi Fastify restituirà un errore dedicato.</i>
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

            </div>
    );
};

export default Backend;