import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";


const VariableJS: React.FC = () => {
    return (
        <div>
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

            {/* <h3>Scope di una Variabile</h3>*/}

        </div>
    );
};

export default VariableJS;