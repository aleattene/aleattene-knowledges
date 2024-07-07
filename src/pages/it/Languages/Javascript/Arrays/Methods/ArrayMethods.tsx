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


            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> copyWithin </code>
                </a>
            </h3>
            <p> Questo metodo copia superficialmente parte di un array (porzione di elementi)
                in un'altra posizione nello stesso array e restituisce l'array modificato
                senza modificarne la lunghezza.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.copyWithin(target, start, end)`}/>
            <p>dove:
                <ul>
                    <li><code>target</code> è l'indice iniziale in cui iniziare a copiare gli elementi
                                            (se l'indice è negativo fa riferimento alla fine dell'array)</li>
                    <li><code>start</code> (opzionale) è l'indice iniziale da cui selezionare/copiare gli elementi
                                           (se non specificato di default ha valore zero mentre se ha valore negativo
                                            fa riferimento alla fine dell'array)</li>
                    <li><code>end</code> (opzionale) è l'indice finale (escluso) di selezione/copia degli elementi
                                         (se non specificato di default è la lunghezza dell'aray mentre se ha valore
                                            negativo fa riferimento alla fine dell'array)
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={
                `const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
                 array.copyWithin(2, 0, 3);

                 console.log(array);  // Output: ['apple', 'banana', 'apple', 'banana', 'cherry']
            `}/>
            <p>
                In questo esempio, il metodo <code>copyWithin</code> copia gli elementi dall'indice 0 all'indice 3
                (escluso) e li incolla a partire dall'indice 2 nello stesso array (sovrascrivendo i valori)
                senza quindi restituire un nuovo array.
            </p>
            <p>
                Si tratta di un metodo utile quando si desidera effettuare copie e sovrascritture di elementi
                all'interno dello stesso array, senza la necessita di crearne uno nuovo.
            </p>
        </div>
    );
};

export default ArrayMethods;