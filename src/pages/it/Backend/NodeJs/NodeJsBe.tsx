import React from 'react';
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";

const NodeJsBe: React.FC = () => {
    return (
        <div>
            <h1>NodeJS</h1>
            <p>Contenuti relativi a NodeJS.</p>
            <p>NodeJS nasce in un periodo in cui Js era considerato il linguaggio di programmazione per eccellenza
                nel campo dello sviluppo Web, per cio' che riguarda la creazione di interfacce utente dinamiche ed
                accattivanti.
                Tuttavia, il suo utilizzo era limitato alla parte client-side dell'applicazione, ovvero il browser.
                L'avvento di NodeJS ha quindi permesso di utilizzare Js anche lato server, permettendo la creazione
                di applicazioni Web complesse, scalabili, leggere e preformanti.
                Questo è possibile grazie al fatto che è divantato possibile sviluppare un'intera applicazione
                sfruttando la sua natura asincrona e non bloccante, che permette di gestire un numero elevato di
                richieste simultaneamente.
                Diventa quindi candidato ideale per la creazione di applicazioni real-time, come ad esempio chat, ed
                applicazione con architettura a microservizi.
            </p>
            <p>NodeJS viene sviluppato da Ryan Dahl nel 2009 e si basa sul motore V8 di Google Chrome, che permette
                di eseguire codice Js in modo molto veloce ed efficiente.
            </p>
            <p>E' importante sottolineare che NodeJS è un runtime, ovvero un ambiente di esecuzione per Js, e non un
                framework, librerie o linguaggio di programmazione.
                Laddove NodeJS ha un grande merito nei confronti di JS è che ha permesso a JS di liberarsi dalla
                dipendenza del browser, permettendo di poter essere utilizzato anche lato server.
                Al riguardo possiamo infatti osservare che se eseguissimo l'istruzione:
                <JavascriptCode code={`console.log("Sono Codice JS")`}/>
                avremmo come risultato sia nel browser che nel terminale quanto segue:
                <TerminalCode code={`Sono Codice JS`}/>
                Al contrario però se eseguissimo l'istruzione:
                <JavascriptCode code={`document.querySelectorAll("body > div")`}/>
                nel browser avremmo come risultato un <strong> array di elementi </strong> HTML,
                mentre nel terminale avremmo un errore: <strong> ReferenceError: document is not defined </strong>.
                O viceversa, se eseguissimo l'istruzione:
                <JavascriptCode code={`require('fs')`}/>
                nel browser avremmo un errore: <strong> ReferenceError: require is not defined </strong>,
                mentre in NodeJs avremmo la possibilità di caricare il modulo <strong> fs </strong>.
            </p>
            <h2> Differenze tra Browser e NodeJS </h2>
            <p>Le differenze principali tra Browser e NodeJS sono le seguenti: ...... </p>
            <p> Ci si potrebbe quindi chiedere come mai essendo JS un unico linguaggio, alcune istruzioni possono
                essere eseguite solo lato browser, altre solo lato server e altre ancora in entrambi i contesti.
                La risposta è che JS è un linguaggio molto flessibile, che si adatta a diversi contesti, e che
                l'ambiente di esecuzione (il cd host environment) in cui viene eseguito determina quali funzionalità
                sono disponibili.
            </p>
            <p>Il linguaggio JS è infatti uno solo, definito dalla specifica ECMAScript (definito dall'associazione
                ECMA International, attraverso il comitato tecnico TC39), mentre l'ambiente di esecuzione può variare.
                Le specifiche del limguaggio JS non contengono infatti informazioni sull'oggetto
                <strong> document </strong> o sull'istrzione <strong> require </strong>, che sono invece fornite
                dall'ambiente di esecuzione. E' in sostanza l'ambiente di esecuzione che fornisce le API disponibili
                per l'interazione con il sistema.
            </p>
            <p> BROWSER = JS + DOM API (document, windows, ... )</p>
            <p> NODEJS = JS + NODE API (fs, http, require, ... )</p>
            <p> Per comprendere meglio questo punto si prova a pensare al fatto che se andate al supermercato e chiedete
                al cassiere di fare un bonifico, vi risponderà che non è possibile, in quanto il suo ambiente di lavoro
                (il supermercato) non fornisce tale servizio. Allo stesso modo, se andate in banca e chiedete al
                cassiere di fare la spesa, vi risponderà che non è possibile, in quanto il suo ambiente di lavoro (la
                banca) non fornisce tale servizio.
                In sostanza, l'ambiente di esecuzione determina quali funzionalità sono disponibili e quindi quale
                espressioni hanno senso (fare la spesa al supermercato, fare un bonifico in banca) e quali no (fare un
                bonifico al supermercato, fare la spesa in banca).
            </p>
            <p>Un aspetto che sicuramente necessita di un chiarimento è quello che riguarda il concetto di
                <strong>runtime environment</strong>; abbiamo
                infatti osservato che l'environment è l'ambiente dove viene esegito il codice JS, ma allora per runtime
                environment cosa si intende?
                Da un punto di vista letterario dovremmo considerare il runtime environment come l'intero ambiente
                di esecuzione, quindi inclusivo di tutto quanto concerne l'hardware e software coinvolto (CPU, memoria,
                Sistema Operativo, stc), di fatto però in questa casistica per <strong>runtime environment</strong>
                si intende l'<strong>ambiente di esecuzione</strong> di JS offerto da NodeJS.
            </p>
            <p> Come abbiamo già visto NodeJs si basa sul Motore V8 di Google Chrome. E' possibile affermare questo
                perché in effetti NodeJS delega l'esecuzione del codice JS all'engine (appunto il motore V8) che si
                trova al suo interno.
                Il motore V8 è un motore di esecuzione open source sviluppato da Google per il browser Chrome (ad oggi
                è utilizzato anche da altri software) che permette di eseguire codice JS in modo molto veloce ed
                efficiente; di fatto il suo scopo è quindi quello di eseguire il codice JS che riceve in input.
                Ma non solo, durante questo processo infatti non solo compila ed esegue il codice JS, ma si occupa
                anche di allocare la memoria necessaria per gli oggetti e di liberare in modo automatico quella non
                più utilizzata (garbage collection).
            </p>
            <p>Come abbiamo appena detto, NodeJS utilizza quindi V8 al suo interno e comunica con esso attraverso il
                linguaggio C++, ovvero con il linguaggio con il quale è scritto il motore V8 stesso.
                NodeJS, definisce quindi come deve essere fatto l'ambiente in cui V8 esegue il codice JS, aggiungendo
                tutti gli oggetti e le funzioni caratteristiche di NodeJS stesso, come ad esempio l'istruzione
                <strong> require </strong> che abbiamo visto in precedenza.
                Questo ci fa quindi comprendere che potremmo vedere NodeJS come un'applicazione C++ contenente al suo
                interno il motore V8, verso il quale espone un'elevato numero di API, utilizzabile dai programmi JS che
                potranno essere eseguiti attraverso esso.
                <u>Banalmente, conoscendo il linguaggio C++, si potrebbe avere  la possibilità di realizzare NodeJS
                ex-novo, ovvero una applicazione C++ che contenga al suo interno il motore V8 e che sia in grado di
                    eseguire del codice al suo interno.</u>
            </p>
            <p> File JS =&gt; NodeJS [C++] [ V8 esegue Js + API NodeJS (http, fs, etc) ]</p>
        </div>
    );
};

export default NodeJsBe;