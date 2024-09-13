import React from 'react';
import './Javascript.css'
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";


const Javascript: React.FC = () => {
    return (
        <div>
            <h1>Javascript</h1>
            <p>JavaScript (acronimo JS) è un linguaggio di programmazione nato negli anni '90,
                sviluppato da Brendan Eich per la piattaforma Netscape Navigator.
                Inizialmente concepito come un semplice strumento per gestire il comportamento delle pagine web,
                ha acquisito poi una popolarità enorme nel corso degli anni grazie alla sua flessibilità e
                alla capacità di essere eseguito direttamente dal browser.</p>
            <p>Come detto, inizialmente JS veniva utilizzato principalmente per aggiungere funzionalità dinamiche
                alle pagine web, ovvero consentendo agli sviluppatori di:
                <ul>
                    <li>interagire con gli elementi HTML </li>
                    <li>manipolare il DOM</li>
                    <li>rispondere agli eventi dell'utente.</li>
                </ul>
                L'obiettivo iniziale era quindi quello di migliorare l'esperienza di navigazione degli utenti,
                rendendo le pagine più interattive e coinvolgenti.
                </p>
            <p>Tuttavia, la storia di JS è caratterizzata anche da una guerra tra i browser, con Netscape Navigator e
                Internet Explorer che implementavano versioni diverse del linguaggio.
                Questa frammentazione ha creato difficoltà agli sviluppatori, che dovevano scrivere codice diverso
                per ogni browser.
                Per risolvere questo problema, sono state introdotte le librerie JS, tra cui spicca jQuery.
                jQuery ha semplificato la scrittura del codice e fornito una serie di funzionalità comuni,
                rendendo più agevole lo sviluppo web multi-browser.
            </p>
            <p>Tuttavia, il punto di svolta per JavaScript è avvenuto con l'introduzione degli standard ECMAScript,
                specialmente con la pubblicazione della versione ES6 nel 2015.
                Questo aggiornamento ha introdotto molte nuove caratteristiche e miglioramenti nel linguaggio,
                rendendolo più moderno e potente.
                Con l'adozione degli standard, la necessità di librerie come jQuery è gradualmente diminuita.
            </p>
            <p>Parallelamente agli sviluppi lato client, JS ha aperto nuove porte non solo nel campo del server (grazie
                al runtime Node.js), ma anche nello sviluppo di app mobili ibride.
                Con l'avvento di framework quali React Native, Ionic e NativeScript, gli sviluppatori sono divenuti
                infatti in grado di utilizzare JS per creare applicazioni mobili eseguibili su diverse piattaforme,
                come iOS e Android.
                Questo approccio ibrido offre vantaggi come la condivisione del codice tra diverse piattaforme,
                facilitando lo sviluppo e riducendo i tempi di produzione.
            </p>
            <p>Inoltre, l'esplosione di nuove librerie JS per il rendering avanzato ha aperto nuove opportunità
                alla creazione di User Interfaces (UI) complesse e coinvolgenti.
                Librerie come React.js e framework come Angular e Vue hanno rivoluzionato lo sviluppo front-end,
                consentendo agli sviluppatori di creare interfacce utente dinamiche e reattive.
                Questi strumenti, basati sul concetto di componenti riutilizzabili, hanno semplificato lo sviluppo
                delle applicazioni ed il relativo mantenimento del codice.
            </p>
            <p>Grazie all'adozione di Nodejs lato server e allo sviluppo di app ibride, JS si è affermato come
                un linguaggio di programmazione full-stack.
                Gli sviluppatori possono infatti utilizzare JS sia per la parte client che per la parte server
                delle applicazioni web, consentendo un'implementazione coerente e semplificata dell'intero
                stack tecnologico.
                Questo ha notevolmente accelerato la possibilità di sviluppare applicazioni web complesse
                favorendo quindi l'adozione di JS quale linguaggio dominante nello sviluppo web moderno.
            </p>

            {/* JS Academy - Start */}
            <p>Si tratta di un linguaggio di scripting orientato agli oggetti ed agli eventi (???) che riga per riga
                viene entrapretati a runtime (in tempo reale) dal browser.
                Come abbiamo visto, non ha nulla a che vedere con Java, se non i primi 5 caratteri del nome (anche se
                in merito l'origine del nome sembra comunque volesse richiamare l'allora popolarità di Java).
            </p>
            {/* <p> [TO IX} Immagine Di un Documento HTML, browser, request, response di come funziona JS</p> */}
            <p>Di base, JS nasce per rendere dinamiche le nostre pagine web, poichè prima dells sua nascita erano
                statiche e non interattive. Infatti il trio base per la realizzazione di una semplice pagina web è
                proprio composta da:
                <ul>
                    <li>HTML: per la struttura</li>
                    <li>CSS: per la presentazione/stile</li>
                    <li>JS: per la dinamicità degli elementi</li>
                </ul>
            </p>
            <p>L'engine V8 è stato sviluppato da Google e viene utilizzato in Chrome e in Node.js con lo scopo
                interpretare il nostro codice JS.
                Vi sono naturalmente altri engine come SpiderMonkey (Firefox), Chakra (Edge) e JavaScriptCore (Safari).
                Ogni engine ha un suo modo di interpretare il codice JS, ed è per questo motivo che quando sviluppiamo
                del codice, magari aggiungendo delle funzionalità avanzate, dobbiamo sempre verificare la compatibilità
                ed il supporto che abbiamo in ogni browser (magari usando degli alert appositi per quei browser che
                non dovessero supportare determinate funzionalità di nostro interesse all'implementazione).
            </p>
            <p> Un altro aspetto molto importante da ricordare sempre è che JS è single-threaded.
            </p>
            <p>Prima di poter accedere alla sintassi di JS è anche importante fare accenno alla differenza presenta tra
                il concetto di Server-Side e Client-Side:
                <ul>
                    <li>Server-Side:
                        <ul>
                            <li>riguarda tutto ciò che si trova nel server</li>
                            <li>dal server è possibile accedere a file e database</li>
                        </ul>
                    </li>
                    <li>Client-Side (browser):
                        <ul>
                            <li>riguarda tutto ciò che si trova nella macchina dell'utente</li>
                            <li>dal client (browser) non è possibile accedere a file o database direttamente, poichè
                                questi si trovano nel server
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>Un altro aspetto importante da considerare è che JS è un linguaggio debolmente tipizzato, ovvero una
                variabile può cambiare tipo durante l'esecuzione del programma:
                <JavascriptCode code={`
                    // Variabile contenente un valore di tipo number
                    let a = 42; 
                    // Stessa variabile, ora contenente un valore di tipo string
                    a = 'ciao';
                `}/>
                Il problema della debolezza di tipizzazione è stato poi risolto grazie a TypeScript.
            </p>
            <p>Vediamo ora la differenza tra ECMAScript e JavaScript:
                <ul>
                    <li>ECMAScript: è uno standard, una specifica tecnica, che definisce la sintassi e le funzionalità
                        di un linguaggio di scripting
                    </li>
                    <li>JavaScript: è un implementazione di ECMAScript (altre sono ActionScript, JScript, ecc.)</li>
                </ul>
            </p>
            <p>Un esempio di codice JS all'interno di una pagina HTML è il seguente:</p>
            <JavascriptCode code={`
                <\html>
                    <head>
                        <title>JS Example</title>
                    </head>
                    <body>
                        <h1>Pagina di esempio JS</h1>
                        <script type="text/javascript" src="path-to-javascript-file.js">
                            // Il codice può essere importato oppure anche scrivere direttamente qui
                            // Inizio Codice JS
                            alert('Alert della Pagina di Esempio');
                            const btn = document.getElementById('myButton');
                            btn.onclick = function() {
                                alert('Hai cliccato il bottone');
                            }
                            // Fine Codice JS 
                        </script>
                    </body>
                </html>
            `}/>

            {/* JS Academy - End */}

            <h2>Operatore di Uguaglianza</h2>
            <p>JavaScript supporta due tipi di uguaglianza:
                <ul>
                    <li>Uguaglianza debole <code>==</code> : confronta i valori senza confrontare il tipo di dato</li>
                    <li>Uguaglianza stretta <code>===</code>: confronta sia il valore che il tipo di dato</li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const a = "42";  
                const b = 42;  
                  
                a == b;   // true  
                a === b;  // false
            `}/>
            <h3>Altri esempi (???):</h3>
            <JavascriptCode code={`
                1 == '1';       // true 
                1 === '1';      // false
                1 == true;      // true 
                1 === true;     // false
                0 == '';        // true 
                0 === '';       // false
                0 == '0';       // true 
                0 === '0';      // false
                0 == false;     // true
                0 === false;    // false
                
                1 == [1];    // true 
            `}/>
            <h3>Altri esempi ancora (???):</h3>
            <JavascriptCode code={`
                const a = null; 

                a == null;        // true
                a == undefined);  // true
                
                a === null;       // true
                a === undefined;  // false
                
                null == undefined;  // true
                null === undefined; // false
            }`}/>
            <p>Ricordiamo in merito a questa ultima comparazione che:
                <ul>
                    <li><code>null</code> è un valore primitivo che rappresenta l'assenza di valore (???)</li>
                    <li><code>undefined</code> è un valore primitivo che rappresenta il valore non assegnato, ovvero
                        non c'è proprio stata una inizializzazione (???)
                    </li>
                </ul>
            </p>

            <h2>Tipi</h2>
            <p>Javascript è un linguaggio di programmazione debolmente tipizzato (differentemente da Typescript),
                il che significa che non è necessario specificare il tipo di dato di una variabile quando la si
                dichiara.
                Il tipo di dato di una variabile può cambiare durante l'esecuzione del programma e Javascript
                si adatta automaticamente al nuovo tipo.
            </p>
            <p>Tra i tipi built-in di Javascript troviamo:
                <ul>
                    <li>Number: numeri interi e decimali</li>
                    <li>String: sequenze di caratteri</li>
                    <li>Boolean: valori true o false</li>
                    <li>Object: oggetti</li>
                    <li>Function: funzioni</li>
                    <li>Array: array</li>
                    <li>Null: valore nullo</li>
                    <li>Undefined: valore non assegnato</li>
                    <li>Symbol (ES6+): valore univoco</li>
                </ul>
            </p>
            <p>Quando si vuole conoscere il tipo di un dato (eventualmente memorizzato all'interno di una variabile),
                si può utilizzare l'operatore
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'>
                    <code className={'documentation-link'}>typeof</code>
                </a>:
            </p>
            <JavascriptCode code={`
                let a;
                typeof a;                   // undefined
                a = undefined;
                typeof a;                   // undefined
                typeof undefined;           // undefined
                
                a ='hello';
                typeof a;                   // string
                typeof 'hello';             // string 
                
                a = 42;
                typeof a;                   // number
                typeof 42;                  // number
                
                a = true;
                typeof a;                   // boolean
                typeof true;                // boolean
                
                a = null;
                typeof a;                   // object  (--weird, bug ???)
                typeof null;                // object
                
                a = ['a', 'b', 'c'];
                typeof a;                   // object
                typeof ['a', 'b', 'c'];     // object
             
                a = { key: 'value' };
                typeof a;                   // object
                typeof { key: 'value' };    // object
            `}/>

            <h2>Variables</h2>
            <p>Una variabile è che un contenitore che può contenere un dato.
                Questo contenitore di fatto è
                uno spazio di memoria che può contenere un valore.
                Per accedere a questo spazio di memoria si dovrebbe utilizzare il suo indirizzo di memoria (molto
                scomodo per noi esseri umani), ma per fortuna JS ci permette di utilizzare un nome identificativo
                che punta a questo spazio di memoria proprio grazie all'indirizzo associato.
            </p>
            <p>Per convenzione in JS si utilizza per assegnare un nome da un variabile il Camel Case.
                Ma non solo, in JS ci sono altre principali regole da rispettare per assegnare un nome ad una variabile:
                <ul>
                    <li>può contenere lettere, numeri, underscore (_) e dollari ($)</li>
                    <li>non può iniziare con un numero e non può essere una parola chiave di JS</li>
                </ul>
            </p>
            <p>Per dichiarare una variabile in JS si utilizza la parola chiave <code>let</code> o <code>const</code>:
                <ul>
                    <li><code>let</code> (block scope): per dichiarare una variabile la cui assegnazione può cambiare
                        <JavascriptCode code={`
                            // Dichiarazione di una variabile
                            let studentName = "John";
                            console.log(studentName); // John
                            
                            // Cambio del valore assegnato alla variabile
                            studentName = "Jane";
                            console.log(studentName); // Jane
                        `}/>
                    </li>
                    <li><code>const</code> (block scope): per dichiarare una variabile la cui assegnazione non può
                        cambiare
                    </li>
                    <JavascriptCode code={`
                        // Dichiarazione di una variabile costante
                        const PI_GRECO = 3.14;
                        console.log(PI_GRECO); // 3.14
                        
                        // Tentativo di cambiare il valore della variabile costante
                        PI_GRECO = 3.14159; // TypeError: Assignment to constant variable
                        
                        // Esempio con stringa
                        const myName = "John";
                        myName = "Jane"; // TypeError: Assignment to constant variable
                        
                        // Esempio con array
                        const myArray = [1, 2, 3];
                        myArray.push(4); // OK: perché costante è il riferimento in memoria all'array e non il contenuto 
                    `}/>
                    <li><code>var</code> (global scope): per dichiarare una variabile in modo globale</li>
                </ul>
            </p>

            <h3>Operatori di Concatenazione</h3>
            <JavascriptCode code={`
                const firstName = 'John';
                const lastName = 'Doe';
                const fullName = firstName + ' ' + lastName;
                console.log(fullName); // John Doe    
                
                const age = 30;
                const message = 'I am ' + age + ' years old';       // Single quotes   
                const message_2 = "I am " + age + " years old";     // Double quotes
                const message_3 = \`I am \${age} years old\`;       // Template literals and interpolation (backticks)
                const message_4 = 'My name\'s Mario'                // Escape character
                const message_5 = "My name's Mario"                 // Single quotes inside double quotes
               
            `}/>
            <p>Come si può osservare dall'esempio, in questo caso l'operatore di somma, quando si trova a dover sommare
                due valori di tipo stringa si trasforma in un operatore di concatenazione.
                Analogamente a quando si trova a dover sommare un valore di tipo stringa ad un valore di tipo number,
                in cui effettua però prima una conversione (operazione di casting) automatica del number in stringa per
                poi procedere con la concatenazione.
            </p>





        </div>
    );
};

export default Javascript;