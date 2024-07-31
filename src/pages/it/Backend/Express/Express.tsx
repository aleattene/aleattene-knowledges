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
        </div>
    );
};

export default Express;