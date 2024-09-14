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
                    <li>interagire con gli elementi HTML</li>
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

            <h2>Tipi di Dato</h2>
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
                    <li>Array: sequenza di elementi (numeri, stringhe, eterogenei)</li>
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

            <h3>Null, Undefined e NotaNumber (NaN)</h3>
            <p>Undefined è un valore primitivo che rappresenta il valore non assegnato, ovvero non c'è stata una
                inizializzazione di una variabile.
                <JavascriptCode code={`
                    // Dichiarazione di una variabile senza assegnazione (undefined serve a identificare proprio questo)
                    let a;
                    console.log(a); // undefined
                    
                    // Assegnazione di undefined ad una variabile (bad practice)
                    let b = undefined;
                `}/>
            </p>
            <p>Null è un valore che serve a resettare una variabile a runtime, ovvero a rimuovere il valore
                precedentemente assegnato. Come abbiamo detto non è una buona pratica assegnare undefined ad una
                variabile (poiché la sua funzione è quelle di indicare la non assegnazione di un valore) ma viceversa
                assegnare null ad una variabile è una pratica comune.
                <JavascriptCode code={`
                    // Assegnazione di null ad una variabile
                    let c = "Mario";
                    c = null;
                    console.log(c); // null
                `}/>
            </p>
            <p>Infine abbiamo NaN (Not a Number) che è un valore speciale che indica che un'operazione matematica
                effettuata su di un valore non ha prodotto un numero valido.
                <JavascriptCode code={`
                    // Operazione matematica non valida
                    const result = 10 / 'ciao';
                    console.log(result); // NaN
                    
                    // Verifica se un valore è NaN
                    isNaN(result); // true
                `}/>
            </p>

            <h2>Async and Defer</h2>
            <p>Quando si carica una pagina web, il browser legge il codice HTML, CSS e JS dall'alto verso il basso.
                Quando incontra un tag script, il browser interrompe il caricamento della pagina e inizia a scaricare
                ed eseguire il codice JS.
            </p>
            <p>Questo può rallentare il caricamento della pagina, poiché il browser non può continuare a caricare la
                pagina fino a quando non ha finito di scaricare ed eseguire il codice JS.
            </p>
            <p>Per risolvere questo problema, possiamo utilizzare gli attributi <code>async</code> e <code>defer</code>
                nei tag script.
            </p>
            <p>L'attributo <code>async</code> dice al browser di scaricare lo script in background e di eseguirlo
                non appena è pronto (quindi nel momento in cui è subito disponibile interrompe il parsing html e lo
                esegue).
            </p>
            <p> Questo consente al browser di accelerare il processo di costruzione del DOM senza attendere il tempo
                di download. In condizioni normali, infatti, il browser blocca il parser, scarica lo script, esegue
                il codice e poi riprende.
            </p>
            <JavascriptCode code={`
                <script async src="script.js"></script>
            `}/>
            <p>In presenza di più script async sequenziali viene sempre eseguito quello disponibile per primo, ovvero
                quello il cui download si è rivelato essere più veloce.
                Di conseguenza l’attributo async non garantisce che lo script venga eseguito nell’ordine in cui si
                trova all’interno della pagina HTML e quindi non va assolutamente usato per script che richiedono
                dipendenze non già caricate altrimenti il verificarsi di errori di race condition sarà molto alto.
            </p>
            <p>L'attributo <code>defer</code> dice al browser di scaricare lo script in background ma di eseguirlo
                solo dopo che la pagina è stata completamente caricata, quindi solo alla fine del parsing html.
                Anche se ad essere precisi il codice Javascript defer viene eseguito al verificarsi dell’evento DOM
                interactive ma prima del DOMContentLoaded.
            </p>
            <JavascriptCode code={`
                <script defer src="script.js"></script>
                
            `}/>
            <p>A differenza di async, gli script con attributo defer vengono eseguiti rispettando l’ordine in cui sono
                presenti all’interno della pagina HTML e vengono eseguiti a fine parsing del codice HTML.
            </p>
            {/*[TO FIX] img script vs async vs defer */}
            {/*[TO FIX] script (normale/classico) description -> html locked during download script js*/}

            <h2>IF, ELSE IF, ESLE</h2>
            <p>La struttura di controllo condizionale <code>if</code> permette di eseguire un blocco di codice se
                una condizione è vera, altrimenti esegue un altro o altri blocchi di codice.
            </p>
            <p>La struttura di controllo condizionale <code>if</code> ha la seguente sintassi:
            </p>
            <JavascriptCode code={`
                if (condizione) {
                    // Blocco di codice IF
                } else if (altre condizioni) {
                    // Blocco di codice ELSE IF
                } else {
                    // Blocco di codice ELSE (tutte le altre condizioni)
                }
            `}/>
            <p>Esempio:</p>
            <JavascriptCode code={`
                const x = 10;
                if (x > 10) {
                    console.log('x è maggiore di 10');
                } else if (x < 10) {
                    console.log('x è minore di 10');
                } else {
                    console.log('x è uguale a 10');
                }
            `}/>
            {/*
                [TO FIX] condizione vere/false con stringa(true)/vuota(false)/numero(true)/0(false)
                                                    /object(true)/null(false)/undefined(false)/NaN(false)
             */}

            {/*
                [TO FIX] Attenzione all'uguaglianza tra oggetti (pur essendo gli stessi, stesso nome e stesse
                 proprietà sono due oggetti diversi
                 car1 == car2 -> SEMPRE false (perchè la reference è diversa)
                 car1 === car2 -> SEMPRE false (perchè la reference è diversa)
                 car1.name === car2.name -> può anche essere true (se il valore è effettivamente lo stesso)
                 car1.name == car2.name -> può anche essere true (se il valore è effettivamente lo stesso)
              */}

            <h2>Operatore Ternario</h2>
            <p>L'operatore ternario è un operatore condizionale che può essere utilizzato al posto di un'istruzione
                <code>if</code> per rendere il codice più conciso.
            </p>
            <p>L'operatore ternario ha la seguente sintassi:
            </p>
            <JavascriptCode code={`
                condizione ? espressione1 : espressione2
            `}/>
            <p>Esempio:</p>
            <JavascriptCode code={`
                // Assegnazione di un valore ad una variabile in base ad una condizione
                const x = 10;
                const message = x > 10 ? 'x è maggiore di 10' : 'x è minore o uguale a 10';
                console.log(message);   // x è minore o uguale a 10
            `}/>
            <p>Questo codice è equivalente a:</p>
            <JavascriptCode code={`
                const x = 10;
                if (x > 10) {
                    console.log('x è maggiore di 10');
                } else {
                    console.log('x è minore o uguale a 10');
                }
            `}/>

            <h2>And e Or Condizionali</h2>
            <p>Esempio</p>
            <JavascriptCode code={`
                const valueTest = null;
                // OR
                const valueOr = valueTest || 'default value';
                console.log(valueOr); // default value
                // AND
                const valueAnd = valueTest && 'default value';
                console.log(valueAnd); // null
                
                const valueTest2 = 'value';
                // OR
                const value2Or = valueTest2 || 'default value';
                console.log(value2Or); // value
                // AND
                const value2And = valueTest2 && 'default value';
                console.log(value2And); // default value
            `}/>

        </div>
    );
};

export default Javascript;