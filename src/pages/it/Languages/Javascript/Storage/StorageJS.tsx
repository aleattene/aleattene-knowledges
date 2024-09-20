import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";

const StorageJS: React.FC = () => {
    return (
        <div>
            <h1>Storage in JavaScript</h1>
            <p>Sappiamo che Javascript viene eseguito nel browser e che il browser ha la capacità di memorizzare dati
                localmente (sezione Ispeziona(F12)/Application/Storage), in modo da renderli "persistenti".
            </p>
            <p>Nel browser, questa persistenza dei dati viene gestita in quattro modi:</p>
            <ul>
                <li>localStorage:
                    <ul>
                        <li>salvataggio tramite chiave - valore</li>
                        <li>memorizzazione permanente dei dati (anche dopo la chiusura del browser)</li>
                        <li>maggior spazio di memorizzazione</li>
                        <li>same origin policy (soltanto i domini che provengono dallo stesso dominio possono accedere
                            al Web Storage)</li>
                    </ul>
                </li>
                <li>sessionStorage:
                    <ul>
                        <li>salvataggio tramite chiave - valore</li>
                        <li>memorizzazione temporanea dei dati (dopo la chiusura del browser, alias fine sessione,
                            i dati vengono persi)
                        </li>
                        <li>maggior spazio di memorizzazione</li>
                        <li>same origin policy</li>
                    </ul>
                </li>
                <li>cookies (piccoli files salvati all'interno del browser):
                    <ul>
                        <li>salvataggio tramite nomeCookie - valore</li>
                        <li>se non viene indicata una scadenza, eliminazione dei dati a fine sessione (chiusura
                            finestra del browser dove viene eseguita l'applicazione)
                        </li>
                        <li>minor spazio di memorizzazione</li>
                        <li>same origin policy</li>
                    </ul>
                </li>
                <li>IndexedDB (objects store):
                    <ul>
                        <li>approccio strutturato alla gestione dei dati</li>
                        <li>ideale per grandi quantità di dati</li>
                        <li>operazioni transazionali (le modifiche effettive vengono effettuate solo a completamento
                            di tutte le operazioni)</li>
                        <li>same origin policy</li>
                    </ul>
                </li>
            </ul>

            <h2>localStorage e sessionStorage</h2>
            <p>Prima di fare qualsiasi operazione con il localStorage, è necessario verificare se il browser lo
                supporta (ormai tutti i browser moderni lo supportano):
            </p>
            <JavascriptCode code={`
                if (typeof(Storage) !== 'undefined') {
                    // localStorage è supportato
                } else {
                    // localStorage non è supportato
                }
            `}/>
            <p>Dopodiché per operare con il localStorage (ma lo stesso discorso vale per sessionStorage), possiamo
                utilizzare quattro metodi principali:
                <ul>
                    <li>setItem(): inserisce un elemento con chiave e valore
                        <JavascriptCode code={`
                            // Sintassi (scatena l'evento storage in window se salvataggio da un'altra finestra) (???)
                            localStorage.setItem('key', 'value')
                            
                            // Handler molto utile per gestire l'evento storage
                            window.addEventListener('storage', (event) => {
                                console.log(event.key, event.oldValue, event.newValue, event.url)
                            }
                            
                            // Alternativa non consigliata
                            localstorage.key = 'value'  
                            
                            // Esempio
                            localStorage.setItem('name', 'Alessandro')
                            // Alternativa non consigliata
                            localStorage.name = 'Alessandro'
                        `}/>
                    </li>
                    <li>getItem(): restituisce il valore associato alla chiave indicata
                        <JavascriptCode code={`
                            // Sintassi 
                            localStorage.getItem('key')
                            // Alternativa non consigliata
                            localstorage["key"]
                            
                            // Esempio
                            localStorage.getItem('name')
                            // Alternativa non consigliata
                            localStorage["name"]
                        `}/>
                        <TerminalCode code={`
                            Alessandro
                        `}/>
                    </li>
                    <li>removeItem(): rimuove l'elemento associato alla chiave indicata
                        <JavascriptCode code={`
                            // Sintassi
                            localStorage.removeItem('key')
                            
                            // Esempio
                            localStorage.removeItem('name')
                        `}/>
                    </li>
                    <li>clear(): rimuove tutti gli elementi presenti nel localStorage
                        <JavascriptCode code={`
                            // Sintassi
                            localStorage.clear()
                        `}/>
                    </li>
                </ul>
                <p>Nel localStorage possiamo memorizzare soltanto stringhe, quindi se vogliamo memorizzare un oggetto
                    dobbiamo serializzarlo, alias convertirlo in stringa (ad esempio con JSON.stringify()) e, al momento
                    di recuperarlo de-serializzandolo, alias convertirlo nuovamente in oggetto JS
                    (ad esempio con JSON.parse()):
                </p>
                <JavascriptCode code={`
                    // Oggetto JS
                    const user = {
                        name: 'Alessandro',
                        surname: 'Attene'
                    }
                    
                    // Serializzazione (da oggetto a stringa)
                    localStorage.setItem('user', JSON.stringify(user))
                    
                    // De-serializzazione (da stringa a oggetto)
                    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'))
                `}/>
            </p>

            <h2>I cookies</h2>
            <p>Consigliato nella gestione dei cookie far uso di librerie dedicate, come ad esempio js-cookie, ma se ciò
                non fosse possibile, ecco come si può operare con i cookie:
            </p>
            <JavascriptCode code={`
                const userID = '123'
                const user = { nome: 'Mario', cognome: 'Rossi' }         
            
                // Salvataggio di un cookie (sempre e solo testuale) di Sessione (perché non si è indicata la scadenza)
                document.cookie = \`userID=\${userID}\`;
                document.cookie = \`userObj=\${JSON.stringify(user)}\`;
                
                // Recupero dei un cookie 
                const cookieData = document.cookie.split(';')
            `}/>
            <p>Qualora volessimo salvare un cookie con scadenza (non sarà più quindi un cookie di sessione), possiamo
                farlo nel seguente modo:
            </p>
            <JavascriptCode code={`
                // Salvataggio di un cookie con scadenza
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 1); // Scadenza tra un giorno
                document.cookie = \`userID=\${userID}; expires=\${expirationDate.toUTCString()}\`;
            `}/>
            <p>Altra interessante proprietà dei cookie è la possibilità di specificare la loro durata (in secondi)
                tramite la proprietà max-age:
            </p>
            <JavascriptCode code={`
                // Salvataggio di un cookie con durata di 10 secondi
                document.cookie = \`userID=\${userID}; max-age=10\`;
            `}/>
            <p>Una cosa importante da sapere è che i cookie non vengono settati esclusivamente dal client, ma possono
                anche essere settati dal server (non a caso spesso ci troviamo di fronte a disclaimer che ci informano
                che il sito utilizza i cookie) durante la fase di request/response (ad esempio con PHP) per poi
                eventuale recuperarli lato client con JS (e viceversa).
                Il tutto differentemente da localStorage e sessionStorage che vengono settati e recuperati
                esclusivamente lato client poiché entrambi non manipolabili lato server.
            </p>

            <h2>IndexedDB</h2>
            <p>IndexedDb è un Object Store, ovvero un database NoSQL che permette di memorizzare dati in modo
                strutturato.
            </p>
            <p>Per operare con IndexedDB, dobbiamo in primis aprirlo: </p>
            <JavascriptCode code={`
                // Apertura del database (nome del database, versione del database)
                const request = indexedDB.open('myDatabase', 1);    
            `}/>
            <p>Dobbiamo considerare anche che il metodo open() opera in maniera asincrona, restituendoci un oggetto di
                tipo IDBRequest sul quale possiamo conseguentemente definire tre principali gestori di evento:
                <ul>
                    <li>onsuccess: si verifica quando l'apertura database avviene con successo</li>
                    <li>onerror: si verifica quando si verifica un problema nell'apertura del database</li>
                    <li>onupgradeneeded: indica la situazione in cui il database non esiste o quando la sua versione è
                        differente da quella specificata</li>
                </ul>
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                // File database.js                   
                const data = { };
                data.version = 1;   // numero progressivo per la versione del database
                data.db = "";
                
                // Funzione di gestione apertura del database
                data.open = function() {
                    
                    // Apertura del database (nome del database, versione del database)               
                    const request = indexedDB.open('myDatabase', data.version);
                    
                    // Gestione dell'evento di aggiornamento richiesto
                    request.onUpgradeNeeded = function(event) {
                        console.log('Aggiornamento del DB in corso...');
                        const db = event.target.result;
                        if(db.objectStoreNames.contains('users')) {
                            db.deleteObjectStore('users');
                    }
                    
                    // Gestione dell'evento di successo
                    request.onsuccess = function(event) {
                        console.log('Connessione al DB avvenuta con successo...');
                        data.db = event.target.result;
                        console.log(data)
                    };
                    
                    // Gestione dell'evento di errore
                    request.onerror = function(event) {
                        console.log('Errore nella connessione al DB...');
                    };
                };
                
                data.connect = function() {
                    return window.indexedDB.open('myDatabase', this.version);
                
                // Funzione di Aggiunta utente  
                data.addUser = function(user) {
                    const db = data.db;
                    console.log(data);
                    const transaction = db.transaction(['users'], 'readwrite');
                    const store = transaction.objectStore('users');
                    const request = store.add(user);
                    
                    request.onsuccess = function(event) {
                        console.log('Utente aggiunto con successo...');
                    };
                    
                    request.onerror = function(event) {
                        console.log('Errore nell\'aggiunta dell\'utente...');
                    };
                };
                
                // Funzione di gestione recupero utente
                data.getUser = function(id) {
                    const db = data.db;
                    const transaction = db.transaction(['users'], 'readonly');
                    const store = transaction.objectStore('users');
                    const request = store.get(id);
                    
                    request.onsuccess = function(event) {
                        console.log('Utente trovato: ' + event.target.result.name + '.' );                       
                    };
                    
                    request.onerror = function(event) {
                        console.log('Errore nel recupero dell\'utente...');
                    };                    
                };
                
                // Funzione di gestione aggiornamento utente
                data.updateUser = function(user) {
                    const db = data.db;
                    const transaction = db.transaction(['users'], 'readwrite');
                    const store = transaction.objectStore('users');
                    const request = store.put(user);
                    
                    request.onsuccess = function(event) {
                        console.log('Utente aggiornato con successo...');
                    };
                    
                    request.onerror = function(event) {
                        console.log('Errore nell\'aggiornamento dell\'utente...');
                    };
                };
                
                // Funzione di gestione eliminazione utente
                data.deleteUser = function(id) {
                    const db = data.db;
                    const transaction = db.transaction(['users'], 'readwrite');
                    const store = transaction.objectStore('users');
                    const request = store.delete(id);
                    
                    request.onsuccess = function(event) {
                        console.log('Utente eliminato con successo...');
                    };
                    
                    request.onerror = function(event) {
                        console.log('Errore nell\'eliminazione dell\'utente...');
                    };
                };
                
                export default data;              
            `}/>
            <JavascriptCode code={`
                // File index.js
                import data from './database.js';
                
                data.open();
                
                data.connect().onsuccess = function() {
                    console.log('Connessione al DB avvenuta con successo...');
                    const user = { id: 1, name: 'Mario', surname: 'Verdi' };
                    data.addUser(user);
            `}/>

            <p><i>Come si può osservare gestire l'interazione con IndexedDB è tutt'altro che semplice, motivo per cui è
                fortemente consigliato fare uso di librerie dedicate, come ad esempio jakearchibald/idb.</i>
            </p>
        </div>
    );
};

export default StorageJS;