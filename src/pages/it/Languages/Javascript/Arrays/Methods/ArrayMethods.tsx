import React from 'react';
import './ArrayMethods.css'
import JavascriptCode from "../../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const ArrayMethods: React.FC = () => {
    return (
        <div>
            <h1>Metodi degli Array</h1>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> at </code>
                </a>
            </h3>
            <p> Questo metodo ritorna l'elemento che si trova in una specifica posizione dell'array.</p>
            <p> La posizione è specificata tramite l'indice (ricordando che la prima posizione ha indice zero
                che viene passato come argomento al metodo stesso.</p>
            <JavascriptCode code={`
                const arr = ['apple','banana','cherry'];
                
                arr.at(1); // banana
            `}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> concat </code>
                </a>
            </h3>
            <p> Questo metodo concatena un secondo array (passato come parametro alla funzione)
                ad un primo array, ritornano un nuovo array, senza quindi modificare nessuno dei due array originali.
            </p>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana'];
                const moreFruits = ['cherry', 'orange'];
                
                const allFruits = fruits.concat(moreFruits)
                
                console.log(fruits)         // ['apple', 'banana']  
                console.log(moreFruits)     // ['cherry', 'orange']
                console.log(allFruits)      // ['apple', 'banana', 'cherry', 'orange']
            `}/>

        </div>
    );
};

export default ArrayMethods;