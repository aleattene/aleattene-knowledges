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
        </div>
    );
};

export default Javascript;