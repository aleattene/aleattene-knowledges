import React from 'react';
import './StreamNode.css';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const StreamNode: React.FC = () => {
    return (
        <div>
            <h2>Stream</h2>
            <p>Gli stream sono uno dei meccanismi più potenti di NodeJS ma per reputazione anche uno dei più complessi
                da comprendere ed utilizzare. Provando a risolvere questa situazione iniziamo con il dire che gli
                gli stream sono un'interfaccia astratta per lavorare con i dati, con un'idea alla base che è quella di
                trattare i dati non come unico grande blocco ma come un flusso.
                Questa dinamica è presente nella nostra quotidianità per esempio negli streaming video, nel momento in
                cui schiacciamo play si avvia il video, ma il download del video non è completo sin dall'inizio ma
                avviene mentre noi procediamo con la visione.
                Abbiamo visto che due vantaggi legati all'utilizzo degli stream sono la possibilità di servire dati in
                chunk evitando cos' di saturare la memoria e permettere al server di continuare ad avere performance
                elevate anche in presenza di richieste pesanti.
                Ma ne esiste un terzo, che è quello legato alla presenza di un'interfaccia standard e quindi la
                possibilità di combinare più stream creando flussi di elaborazione dati in mdo più semplice ed
                efficiente.
            </p>
            <p>Il modulo
                <a href={'https://nodejs.org/api/stream.html'}>
                    <code className={'documentation-link'}>stream</code>
                </a> di NodeJs contiene le specifiche delle quattro interfacce fornite dagli stream stessi:
                <ul>
                    <li>Readable</li>
                    <li>Writable</li>
                    <li>Duplex</li>
                    <li>Transform</li>
                </ul>
            </p>
            <h3>Readable</h3>
            <p>Questo tipo di stream rappresenta un'astrazione in cui c'è una sorgente che produce dati che possono
                essere letti attraverso lo stream.
                La classe che definisce questo tipo di stream è la <code>Readable</code>, esposta dal modulo
                <code>stream</code> di NodeJs.
                Una concreta implementazione l'abbiamo già vista con la funzione <code>fs.createReadStream()</code> la
                quale restituisce un oggetto <code>fs.ReadStream</code> che è un'istanza della classe
                <code>ReadStream</code> che estende la classe <code>Readable</code>.
                Un'altra classe che implementa l'interfaccia <code>Readable</code> è la classe
                <code>Socket</code> del modulo <code>net</code> di NodeJs. Esempio:
                <JavascriptCode code={`
                    // File stream-tcp-logger
                    import net from 'net';
                    
                    const server = net.createServer();
                    
                    server.listen(5050, 'localhost');
                    
                    server.on('connection', (socket) => {
                        socket.on('data', (chunk) => {
                            console.log(\`Received data event with \${chunk.length} bytes\`);
                        });
                    }); 
                `}/>
            </p>
            <p>Nell'esempio sopra (ma anche in fase di lettura file) l'aver utilizzato l'evento <code>data</code> non
                è una casualità, poiché è proprio grazie a questo evento che possiamo riceveredati dallo stream; in
                particolare solo nel momento in cui viene aggiunto un listener su di esso che è possibile cominciare a
                leggere i dati dalla sorgente.
                Per comprendere meglio questo aspetto vale la pene fare un esempio in cui proviamo a leggere dati da un
                file con un <code>ReadStream</code> ed un listener collegato all'evento <code>data</code> avente un
                ritardo di qualche secondo:
            </p>
            <JavascriptCode code={`
                // File stream-file-reader-paused
                import fs from 'fs/promises';
                
                const fh = await fs.open('file.txt');
                const fileStream = fh.createReadStream();
                
                console.log('Lettura strema attiva:, filestream.readableFlowing);
                console.log("In attesa (3 secondi) di aggiungere il listener...");
                
                setTimeout(() => {    
                    console.log(\`Lettura stream attiva:? \${fileStream.readableFlowing}\`);
                    fileStream.on("data", (chunk) => console.log(chunk));    
                    console.log(\`Lettura stream attiva:? \${fileStream.readableFlowing}\`);
                }, 3000);               
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                (???)
                Lettura stream attiva: false (null) (???)
                In attesa (3 secondi) di aggiungere il listener...
                Lettura stream attiva: true
                <\Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
                ...
                Lettura stream attiva: false (null) (???)
            `}/>
            <p>Come osservabile, l'uso della funzione <code>setTimeout</code> fa si che l'applicazione rimanga sospesa
                per qualche secondo prima di stampare il buffer contenente il file letto.
                Viceversa se togliessimo il <code>setTimeout</code> il buffer comparirebbe subito, ovvero non appena
                l'applicazione viene avviata poiché l'aggiunta del listener all'evento <code>data</code> sarebbe
                immediata.
            </p>
            <p>Di per se solo questo comportamento non ci fornirebbe indicazioni specifiche sullo stato dello stream,
                infatti abbiamo creato proprio questo stream derivato da <code>Readable</code> che però non sta ancora
                leggendo dati dato che si trova nello stato <code>paused</code> (in pausa).
                Ecco invece che quando lo stream è in fase di lettura dati ed invio al listener collegato, il suo stato
                interno non è più <code>paused</code> ma <code>flowing</code> (score).
                Per questo motivo, per capire se uno stream è in fase di lettura dati o meno, abbiamo utilizzato la
                proprietà <code>readableFlowing</code> disponibile in ogni oggetto <code>Readable</code>; nello
                specifico:
                <ul>
                    <li>Se <code>readableFlowing</code> è <code>null/false (???) </code> significa che lo stream è in
                        pausa (paused)
                    </li>
                    <li>Se <code>readableFlowing</code> è <code>true</code> significa che lo stream è in fase di lettura
                        dati dalla fonte (flowing)
                    </li>
                </ul>
            </p>
            <p><i>Seppur molto improbabile il suo utilizzo è bene sapere che volendo è anche possibile utilizzare
                il metodo <code>isPaused()</code>, disponibile in ogni oggetto <code>Readable</code>, per verificare
               se uno stream si trova in stato paused o flowing.</i>
            </p>
            <p>Durante la lettura dei dati con una classe derivata da <code>Readable</code> questi possono trovarsi in
                tre posti differenti:
                <ul>
                    <li>sul disco (sorgente)</li>
                    <li>in memoria (stream)</li>
                    <li>applicazione (Buffer/Listener)</li>
                </ul>
            </p>
            <p>Per essere più dettagliati immaginiamo di leggere un file, inizialmente i dati si trovano sul disco (1),
                che rappresenta la sorgente da cui vengono letti.
                Lo stream <code>Readable</code> leggerà quindi i dati in modo sequenziale e ne porterà un po' alla volta
                in un buffer interno che si trova in memoria (2).
                Quando ci sono abbastanza dati in questo buffer viene emesso l'evento <code>data</code> e così i dati
                possono raggiungere la nostra applicazione (3) attraverso l'oggetto <code>Buffer</code> passato come
                argomento/parametro al listener.
            </p>
            <p>[TO FIX] Img Readable Stream</p>

            <h3>Writable</h3>
            <p>Partiamo facendo un semplice esempio in cui proviamo a scrivere una stringa in un file:</p>
            <JavascriptCode code={`
                // File file-writer.mjs
                import fs from 'fs/promises';
                const fileName = 'file.txt';
                
                // Apro il file in modalità append (a) - aggiunta contenuto in coda al file mantenendo testo esistente
                const logFh = await fs.open(fileName, 'a');   
                
                // Scrittura della stringa nel file
                async function log(data) {
                    await logFh.write(data);
                }
                
                export { log }; 
            `}/>
            <p>Per utilizzare la funzione <code>log</code> possiamo fare:</p>
            <JavascriptCode code={`
                // File main.mjs
                // ...
                import { log } from './file-writer';
                
                server.on('request', (req, res) => {
                    // ...
                    log(req.url);
                   // ...
                });
            `}/>
            <p>Quello che succederà in sostanza è che ogni volta che verrà effettuata una richiesta al server, verrà
                scritta nel file <code>file.txt</code> l'url della richiesta effettuata.
            </p>
            <p>Questo metodo di scrittura è sicuramente funzionante e non presenta particolari problemi sino a quando
                il server non si trova a ricevere tante richieste parallele e quindi a dover scrivere dati con frequenza
                elevata.
            </p>
            <p>Possiamo infatti osservare che ogni volta che la funzione <code>log</code> viene invocata l'esecuzione
                del server si blocca fino a quando la scrittura del file non è completata, dato che la chiamata
                <code>await logFh.write(data)</code> viene completata solo dopo che i dati hanno raggiunto il disco.
            </p>
            <p>Una possibile soluzione che potrebbe venire in mente riguarda la rimozione dell'<code>await</code>,
                lasciando che il codice asincrono venga eseguito senza attenderne il completamento, ma ciò è
                sconsigliato poiché potrebbe portare alla corruzione del contenuto del file in quando ci sarebbero
                scritture concorrenti dei log.
            </p>
            <p>Ecco allora che in questa situazione diventa utile l'utilizzo di uno stream di tipo <code>Writable</code>
                sfruttando di fatto un meccanismo simile a quello visto per gli stream di tipo <code>Readable</code>,
                ma opposto.
            </p>
            <p>[TO FIX] Img Writable Stream</p>
            <p>Anche in questo caso viene sfruttato un buffer interno allo stream dove vengono accumulati i dati
                ricevuti dall'applicazione e che sono in attesa di essere scritti sul disco.
            </p>
            <p>Per scrivere dati in un file utilizzando uno stream di tipo <code>Writable</code> è possibile utilizzare
                la funzione <code>createWriteStream()</code> disponibile in ogni oggetto <code>fileHandle</code>.
                Una volta ottenuto poi lo stream è possibile scrivere al suo interno utilizzando il metodo
                <code>write()</code> (funzione sincrona), passando come argomento i dati da scrivere.
            </p>
            <JavascriptCode code={`
                // File logger.mjs
                import fs from 'fs/promises';
                const fileName = 'file.txt';
                
                // Apro il file in modalità append (a) - aggiunta contenuto in coda al file mantenendo testo esistente
                const logFh = await fs.open(fileName, 'a');   
                const logStream = logFh.createWriteStream();
                
                const log = function(data) {
                    console.log('Writing data...');
                    logStream.write(data);
                };
                
                export { log };
            `}/>
            <p>Nel momento in cui desideriamo approfondire il funzionamento di uno stream di tipo <code>Writable</code>
                non possiamo non menzionare l'oggetto <code>ServerResponse</code> con la quale inviamo i dati di
                risposta al client (e che solitamente rappresentiamo con la variabile <code>res</code>).
                In merito, sapendo che HTTP usa una connessione TCP per comunicare con il client, non saremo quindi
                sorpresi nel sapere che anche gli oggetti <code>Socket</code> sono stream di tipo <code>Writable</code>.
            </p>
            <p>Osserviamo quindi questo interessante esempio:</p>
            <JavascriptCode code={`
                // ... 
                server.on("connection", function (sock) {    
                    sock.on("data", function (data) {        
                        sock.write("ECHO: " + data);    
                    });
                });”
            `}/>
            <p>La parte interessante di queste poche righe di codice riguarda il fatto che l'oggetto
                <code>Socket</code> non ci permette solo di effettuare scritture su di esso, ma anche di ricevere dati
                attraverso l'evento <code>data</code>: di fatto questo ci introduce verso la terza classe di stream
                (oltre a <code>Readable</code> e <code>Writable</code>) che è la classe <code>Duplex</code>.
            </p>
            <p>[TO FIX] Eventuale approfondimento console.log e console.error</p>

            <h3>Duplex</h3>
            <p>La terza classe di Stream è rappresentata da quelli di tipo <code>Duplex</code> con in quali è possibile
                sia scrivere che leggere dati.
                Questi stream (proprio come la classe <code>Socket</code>) implementano sia l'interfaccia
                <code>Readable</code> (lettura dati attraverso l'evento <code>data</code>) che <code>Writable</code>
                (scrittura dati attraverso il metodo <code>write()</code>).
                Ecco allora che per poter essere uno stream di tipo <code>Duplex</code> è necessario che l'oggetto
                da esso rappresentato sia, contestualmente, una sorgente ed una destinazione.
            </p>
            <p>[TO FIX] Img Duplex Stream</p>
            <p>Una importante osservazione da fare in merito a questo stream è che seppur i due stream siano
                rappresentati da un unico oggetto, essi sono comunque indipendenti l'uno dall'altro.
                Questo ci dice quindi che ciò che scriviamo all'interno dello stream di tipo <code>Duplex</code> non
                ha un impatto diretto su ciò che leggiamo da esso, contrariamente a quanto per esempio avviene con lo
                stream di tipo <code>Transform</code>.
            </p>

            <h3>Transform</h3>
            <p>E' l'ultimo tipo di stream supportato da NodeJs ed è un particolare tipo di stream <code>Duplex</code>
                in cui i due stream sono in relazione tra loro in modo tale che ciò che scriviamo al suo interno è
                collegato a ciò che leggiamo da esso.
                Il suo nome deriva proprio dal fatto che <strong>trasforma</strong> ciò che riceve in ingresso in
                qualcos'altro in uscita.
            </p>
            <p>[TO FIX] Img Transform Stream</p>
            <p>Alcuni esempi di stream di tipo <code>Transform</code> sono quelli forniti dal modulo <code>zlib</code>
                in NodeJS, come ad esempio <code>zlib.createGzip()</code> e <code>zlib.createGunzip()</code>.
                Ognuno di questi stream (di tipo transform) permette di scrivere al suo interno i dati che vogliamo
                comprimere (o decomprimere) con la funzione write() dell’interfaccia Writable.
                Dall’altra parte, attraverso l’interfaccia Readable, possiamo invece ricevere i dati compressi
                (o decompressi) attraverso l’evento data.
            </p>
            <p>Tra i due menzionati, usando ad esempio lo stream Gzip, diventa possibile aggiungere il supporto alla
                compressione dati da inviare da parte del nostro server al client. E' possibile fare cià seguendo
                i seguenti step:
            </p>
            <ul>
                <li>leggere i dati dallo stream Readable del file</li>
                <li>scriverli nello stream Writable di Gzip</li>
                <li>leggere i dati emessi dallo stream Readable di Gzip</li>
                <li>scriverli nello stream Writable dell’oggetto ServerResponse</li>
            </ul>
            <JavascriptCode code={`
                // File transform-gzip-server.mjs
                //...
                
                // Importazione della funzione createGzip per la creazione dello stream di compressione (transform type)
                import { createGzip } from "zlib";
                
                server.on("request", async (req, res) => {    
                    //...    
                    // Settaggio dell'header Content-Encoding per indicare la compressione Gzip al client che riceve
                    res.setHeader("Content-Encoding", "gzip");    
                    const fileStream = fh.createReadStream(); 
                    // Creazione dello stream di compressione Gzip (transform type)   
                    const gzipTransform = createGzip();    
                    // Travaso dei dati dallo stream sorgente a quello di destinazione
                    fileStream.pipe(gzipTransform).pipe(res);    
                    fileStream.on("error", (e) => {        
                        console.error(e);        
                        res.statusCode = 500;        
                        res.end();    
                    });
                });
            `}/>

        </div>
    );
}

export default StreamNode;
