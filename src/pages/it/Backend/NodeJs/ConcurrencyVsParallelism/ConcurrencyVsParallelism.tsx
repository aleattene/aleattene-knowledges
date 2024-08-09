import React from "react";

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
            </div>
    );
}

export default ConcurrencyVsParallelism;