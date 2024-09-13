import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const functionJS: React.FC = () => {
    return (
        <div>
            <h1>Funzioni in JavaScript</h1>
            <p>Le funzioni sono di fatto un blocco di codice che esegue un'azione specifica.
                Per definire una funzione in JavaScript, si utilizza la parola chiave <code>function</code>,
                seguita dal nome della funzione, una lista di parametri tra parentesi tonde e il blocco di codice
                racchiuso tra parentesi graffe.</p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // 1 - Definizione di una funzione chiamata greet
                function greet(parametro1, ... , parametroN) {
                    // Corpo della funzione
                };
                
                // 2 - Chiamata alla funzione greet
                greet(argomento1, ... , argomentoN);
            `}/>
            <h3>Esempio (somma due numeri):</h3>
            <JavascriptCode code={`
                // 1 - Definizione di una funzione chiamata somma
                function somma(a, b) {
                    return a + b;
                };
                
                // 2 - Chiamata alla funzione somma
                const risultato = somma(5, 3);
                
                console.log(risultato); 
            `}/>
            <p>Output:</p>
            <TerminalCode code={`8`}/>
            <p>Potrebbe per molti essere utile osservare che nel codice JS è possibile chiamare una
                funzione anche prima che sia stata definita, come mostrato nell'esempio seguente:</p>
            <JavascriptCode code={`
                // Chiamata alla funzione somma
                const risultato = somma(5, 3);
                
                // Definizione della funzione somma
                function somma(a, b) {
                    return a + b;
                };
                
                console.log(risultato); 
            `}/>
            <p>Questo è possibile grazie al meccanismo di <strong>hoisting</strong> che sposta tutte le dichiarazioni
                di variabili e funzioni all'inizio dello script.</p>
            <p>Quanto appena affermato non vale però per le arrow functions, che quindi al contrario, non possono essere
                chiamate prima della loro definizione.</p>
        </div>
    );
};


export default functionJS;
