import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const ConcurrencyVsParallelism: React.FC = () => {
    return (
        <div>
            <h1>Concorrenza e Parallelismo</h1>
            <p>Sostanzialmente le performance elevate che vengono attribuite al modo in cui è stato progettato per
                gestire l'I/O in modo non bloccante.
                Tutto il codice che scriviamo (non solo quindi quello relativo all'I/O) sarà governato dal famigerato
                <code>event loop</code> che si occuperà di decidere quale codice sarà eseguito prima e quale dopo,
                poiché a prima vista potrebbe sembrare tutto casuale, quando in realtà non è così visto che ci sono
                diverse variabili che influenzano queste decisioni.
            </p>
            <p><i>Piccola nota a margine per menzionare il fatto che è buona pratica comprendere prima bene il modello
                di esecuzione di NodeJS è condizione necessaria per avere una chiara visione di quello che succede al
                nostro codice JS durante l'esecuzione, che altrimenti potrebbe davvero sembrare casuale o quasi.</i>
            </p>
            <p>Diventa altrettanto importante comprendere come sia possibile sfruttare processi e thread aggiuntivi,
                ovvero come creare più istanze di NodeJS che possano lavorare in parallelo collaborando al
                funzionamento delle nostre applicazioni permettendone la scalabilità su una singola macchina.
            </p>
            <h2>Event Loop</h2>
            <p>Esistono delle situazioni in cui effettuare dei calcoli, come quello di determinare se un numero è primo
                o meno, che possono richiedere, a seconda della potenza di calcolo della propria macchina e dal numero
                da considerare, da pochi istanti a diverso secondi.
                Ecco allora che per evitare di bloccare l'esecuzione della nostra applicazione mentre la funzione per
                determinare se un numero è primo o meno è in esecuzione, ha senso provare a sfruttare il meccanismo
                delle callback.
                In questo specifico caso quindi, creiamo una funzione che riceve in input un numero ed un'altra funzione
                (callback) da chiamare al completamento della prima.
            </p>
            <JavascriptCode code={`
                // File isPrime.mjs
                export function isPrime(num) {
                    if (num < 2) return false;
                    for (let i = 2; i < num; i++) {
                        if (num % i === 0) return false;
                    }
                    return true;
                
                    
                // File callback-prime.js
                import { PRIME_BIG, isPrime } from './isPrime.mjs';
                
                function calcPrime(num, cb) {
                    const isNumPrime = isPrime(num);
                    cb(isNumPrime);
                }
                
                console.log('Avvio Script');
                
                calcPrime(PRIME_BIG, (result) => {
                    console.log(\`\${PRIME_BIG} è primo? \${result}\`);
                });
                
                console.log('Fine Script');
            `}/>
            <p>Stranamente forse rispetto a quanto ci si potrebbe aspettare, il risultato non sarà quello atteso.
                Infatti i due log di inizio e fine non sono mostrati subito per poi mostrare le
                informazioni sul numero primo, ma l'esecuzione del codice appare ancora sequenziale nonostante il
                nostro utilizzo del meccanismo delle callback.
            </p>
        </div>
    );
}

export default ConcurrencyVsParallelism;