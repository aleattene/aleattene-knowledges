import React from 'react';
import JavascriptCode from "../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../components/Code/TerminalCode/TerminalCode.tsx";

const Frontend: React.FC = () => {
    return (
        <div>
            <h1>Frontend</h1>
            <h2>Web Breakpoints</h2>
            <ul>
                <li>Mobile: &lt;= 480px [TO FIX img]</li>
                <li>Mobile Landscape: &lt;= 768px [TO FIX img]</li>
                <li>Tablet: &lt;= 834px [TO FIX img]</li>
                <li>Tablet Landscape: &lt;= 1024px [TO FIX img]</li>
                <li>Laptop: &lt;= 1440px [TO FIX img]</li>
                <li>Desktop: &lt;= 1440px [TO FIX img]</li>
            </ul>

            <h2>Fetch</h2>
            <p>La funzione fetch() è una funzione nativa presente nel Browser che permette di effettuare richieste HTTP
                asincrone verso un server, comportandosi come una Promise. Questo significa che è possibile utilizzare
                il metodo .then() per gestire la risposta della richiesta ed il metodo .catch() per gestire eventuali
                errori.
            </p>
            <p>fetch() accetta come parametro obbligatorio l'URL a cui effettuare la richiesta e come parametro opzionale
                un oggetto di configurazione. Questo oggetto può contenere le seguenti proprietà:
            </p>
            <ul>
                <li>method: il metodo HTTP da utilizzare per la richiesta (GET, POST, PUT, DELETE, ecc.)</li>
                <li>headers: un oggetto contenente le intestazioni da inviare con la richiesta</li>
                <li>body: i dati da inviare con la richiesta</li>
                <li>mode: il modo in cui gestire il CORS (Cross-Origin Resource Sharing)</li>
                <li>credentials: il tipo di credenziali da inviare con la richiesta</li>
                <li>cache: il tipo di cache da utilizzare per la richiesta</li>
                <li>redirect: come gestire i redirect</li>
                <li>referrer: il referrer da inviare con la richiesta</li>
                <li>integrity: l'integrità del contenuto da inviare con la richiesta</li>
                <li>keepalive: se mantenere attiva la connessione</li>
                <li>signal: un'istanza di AbortSignal per interrompere la richiesta</li>
            </ul>
            <p>Facciamo quindi un esempio di utilizzo di fetch() per effettuare una richiesta GET ad un sample
                server:
            </p>
            <JavascriptCode code={`
                const urlAPI = 'https://jsonplaceholder.typicode.com/posts/1';
                
                // Effettua una richiesta GET all'URL specificato
                const fetchData = fetch(urlAPI);
               
               // Gestisce la risposta (oggetto response) della richiesta
                fetchData
                    .then(response => { console.log(response); })
                    .catch(error => { console.error(error); });
            `}/>
            <p>Result:</p>
            <TerminalCode code={`
                Response { 
                    type: "cors", 
                    url: "https://jsonplaceholder.typicode.com/posts/1", 
                    redirected: false, 
                    status: 200, 
                    ok: true, 
                    … 
                }
            `}/>
            <p>Quello che abbiamo visualizzato in questo caso è la response nella sua interezza, ma nella maggioranza
                dei casi quello che si vuole visualizzare è il contenuto della response. Per fare ciò, è necessario
                utilizzare il metodo <code>.json()</code> (sono disponibili anche i meno usati text(), blob() e
                arrayBuffer()) sulla response, che restituisce a sua volta una Promise.
            </p>
            <JavascriptCode code={`
                const urlAPI = 'https://jsonplaceholder.typicode.com/posts/1';
                
                // Effettua una richiesta GET all'URL specificato
                const fetchData = fetch(urlAPI);
               
               // Gestisce la risposta (oggetto response) della richiesta
                fetchData
                    .then(response => response.json())
                    .then(data => { console.log(data); })
                    .catch(error => { console.error(error); });
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                { 
                    userId: 1, 
                    id: 1, 
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", 
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae 
                        ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" 
                }
            `}/>
            <p>Se volessimo rendere il codice ancora più leggibile potremmo ottimizzare nel seguente modo:</p>
            <JavascriptCode code={`
                // URL a cui effettuare la richiesta
                const urlAPI = 'https://jsonplaceholder.typicode.com/posts/1';
                
                // Effettua una richiesta GET all'URL specificato
                fetch(urlAPI)
                    .then(response => response.json())
                    .then(data => { console.log(data); })
                    .catch(error => { console.error(error); });
            `}/>






        </div>
    );
};

export default Frontend;