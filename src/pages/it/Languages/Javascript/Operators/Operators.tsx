import React from 'react';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";


const Operators: React.FC = () => {
    return (
        <div>
            <h1>Operatori</h1>
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

            {/* <p>+=</p> */}
            {/* <p>++</p> */}
        </div>
    );
};


export default Operators;


