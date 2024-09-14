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
                    <li><code>var</code> (global scope): per dichiarare una variabile in modo globale
                        <JavascriptCode code={`
                            // Dichiarazione di una variabile con scope globale
                            var studentName = "John";
                            
                            function printStudentName() {
                                console.log(studentName);
                            }
                            
                            console.log(studentName); // John
                            printStudentName(); // John
                        `}/>
                    </li>
                </ul>
            </p>

            <h3>Scope di una Variabile</h3>
            <p>Lo scope di una variabile è la parte di codice in cui la variabile è accessibile.
                In JS ci sono due tipi di scope:
                <ul>
                    <li>Global Scope: la variabile è accessibile da qualsiasi parte del codice</li>
                    <li>Block (local) Scope: la variabile è accessibile solo all'interno di un blocco di codice</li>
                </ul>
            </p>
            <p>Esempi:</p>
            <JavascriptCode code={`
                // Global Scope
                let studentName = "John";
                var studentAge = 25;
                
                function printStudentName() {
                    // Block Scope
                    let studentName = "Jane";
                    console.log(studentName); // Jane
                }
                
                console.log(studentName); // John
                printStudentName(); // Jane
            `}/>
            <JavascriptCode code={`
                // Block Scope con let (sarebbe la stessa cosa con const)
                for (let i = 0; i < 5; i++) {
                    console.log(i);
                }
                console.log(i); // ReferenceError: i is not defined
                
                // Block (global) Scope con var
                for (var j = 0; j < 5; j++) {
                    console.log(j);
                }
                console.log(j); // 5
            `}/>
            <p>In sostanza se si dichiara una variabile con <code>let</code> o <code>const</code> all'interno di un
                blocco di codice, questa variabile sarà accessibile solo all'interno di quel blocco di codice.
                Se si dichiara una variabile con <code>var</code> all'interno di un blocco di codice, questa variabile
                sarà accessibile all'interno di quel blocco di codice e anche all'esterno di esso.
                A livello globale, sia che si dichiari una variabile con <code>let</code>, <code>const</code> o
                <code>var</code>, questa variabile sarà accessibile da qualsiasi parte del codice.
            </p>
            <p>Altra differenza tra <code>let/const</code> e <code>var</code> è che se si dichiara una variabile e poi
                la si ri-dichiara con lo stesso nome, con <code>let/const</code> si avrà un errore, mentre con
                <code>var</code> no.
            </p>
            <JavascriptCode code={`
                // let/const
                let studentName = "John";
                let studentName = "Jane";   // SyntaxError: Identifier 'studentName' has already been declared
                
                // var
                var studentAge = 25;
                var studentAge = 30;        // Consentito
            `}/>
            <p>Come best practice si consiglia di utilizzare <code>let</code> o <code>const</code> per dichiarare le
                variabili, evitando di utilizzare <code>var</code> a meno che non si abbia una buona ragione per farlo.
            </p>

            <h3>Strict Mode</h3>
            <p>Lo strict mode è una direttiva che permette di scrivere un codice più sicuro e corretto.
                Per abilitare lo strict mode si deve inserire la stringa <code>'use strict';</code> all'inizio di un
                file JS (livello globale) o di una funzione (livello locale).
            </p>
            <JavascriptCode code={`
                // Standard Mode
                studentAge = 25;
                console.log(studentAge); // 25
                
                // Strict Mode (livello globale)
                'use strict';  
                studentAge = 25; // ReferenceError: studentAge is not defined
                const studentAge = 25;
                
                // Strict Mode all'interno di una funzione (livello locale)
                function printStudentAge() {
                    'use strict';
                    studentAge = 25; // ReferenceError: studentAge is not defined
                    const studentAge = 25;
                    return studentAge;
                }
            `}/>
            {/* [TO FIX] Eventuali Approfondimenti su Strict Mode */}

        </div>
    );
};

export default VariableJS;