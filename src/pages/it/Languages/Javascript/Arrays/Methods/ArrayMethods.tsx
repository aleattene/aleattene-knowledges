import React from 'react';
import './ArrayMethods.css'
import JavascriptCode from "../../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../../components/Code/TerminalCode/TerminalCode.tsx";

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

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> entries </code>
                </a>
            </h3>
            <p> Questo metodo ritorna un nuovo oggetto Array Iterator che contiene coppie chiave/valore
                per ogni elemento dell'array. La coppia chiave valore è sostanzialmente composta dalla chiave
                che è l'indice dell'elemento ed il valore che è l'elemento stesso. </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana', 'cherry'];
                const iterator = fruits.entries();
                
                for (const [index, value] of iterator) {
                    console.log(index, value);
                }
            `}/>
            <p> Output:</p>
            <TerminalCode code={`
                0 apple
                1 banana
                2 cherry
            `}/>
            <h3>Esempio</h3>
            <JavascriptCode code={`
            const persona = { name: 'Alessandro', age: 45 };
            const entries = Object.entries(persona);
            Object.entries(persona); // [['name', 'Alessandro'], ['age', 45]]
            Object.entries(persona).forEach(([key, value]) => {
                console.log(\`Key: \${key} | Value: \${value}\`);
            });
            `}/>
            <p> Output:</p>
            <TerminalCode code={`
                 Key: name | Value: Alessandro
                 Key: age | Value: 45
            `}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> every </code>
                </a>
            </h3>
            <p> Questo metodo verifica se tutti gli elementi dell'array soddisfano una determinata condizione
                specificata in una funzione di callback.
                Restituisce true se tutti gli elementi soddisfano la condizione, altrimenti restituisce false.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.every(callback)`}/>
            <p>dove <code>callback</code> è la funzione che viene eseguita per ogni elemento dell'array e che
                restituisce true o false.
                Va osservato che a valutazione si interrompe non appena viene trovato un elemento che non soddisfa
                la condizione, poiché non sarebbe di alcuna utilità continuare a valutare gli altri elementi.
                Inoltre è bene osservare che il metodo <code>every</code> se applicato ad un array vuoto restituisce
                sempre true.</p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const ages = [32, 33, 16, 40];
                const isAdult = ages.every(age => age >= 18);
                console.log(isAdult); // false
                const isUnder50 = ages.every(age => age < 50);
                console.log(isUnder50); // true
            `}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> fill </code>
                </a>
            </h3>
            <p> Questo metodo riempie tutti gli elementi di un array con un valore statico.
                La posizione di inizio e fine possono essere specificate come argomenti opzionali.</p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.fill(value, start, end)`}/>
            <p>dove:
                <ul>
                    <li><code>value</code> è il valore con cui riempire l'array</li>
                    <li><code>start</code> (opzionale) è l'indice iniziale da cui iniziare a riempire l'array
                                           (se non specificato di default ha valore zero mentre se ha valore negativo
                                            fa riferimento alla fine dell'array)</li>
                    <li><code>end</code> (opzionale) è l'indice finale (escluso) di riempimento dell'array
                                         (se non specificato di default è la lunghezza dell'aray mentre se ha valore
                                            negativo fa riferimento alla fine dell'array)
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const array = [1, 2, 3, 4, 5];
                array.fill(0, 2, 4);
                console.log(array); // Output: [1, 2, 0, 0, 5]
            `}/>
            <JavascriptCode code={`
                const array = [1, 2, 3, 4, 5];
                array.fill(0);
                console.log(array); // Output: [0, 0, 0, 0, 0]
            `}/>
            <JavascriptCode code={`
                const array = ['apple', 'banana', 'cherry'];
                array.fill('orange', 1, 2);
                console.log(array); // Output: ['apple', 'orange', 'cherry']
            `}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> filter </code>
                </a>
            </h3>
            <p> Questo metodo crea un nuovo array con tutti gli elementi che soddisfano una determinata condizione
                specificata in una funzione di callback.
                La funzione di callback viene eseguita per ogni elemento dell'array e restituisce true o false.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.filter(callback)`}/>
            <p>dove <code>callback</code> è la funzione che viene eseguita per ogni elemento dell'array e che
                restituisce true o false.
                Il nuovo array creato conterrà solo gli elementi per i quali la funzione di callback ha restituito
                true.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const ages = [32, 33, 16, 40];
                const adults = ages.filter(age => age >= 18);
                console.log(adults); // [32, 33, 40]
                console.log(ages); // [32, 33, 16, 40]
            `}/>
            <p>E' importante osservare che il metodo <code>filter</code> non modifica l'array originale ma ne crea
               uno nuovo con solo gli elementi che soddisfano la condizione.</p>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> find </code>
                </a>
            </h3>
            <p> Questo metodo ritorna il primo elemento dell'array che soddisfa una determinata condizione
                specificata in una funzione di callback.
                La funzione di callback viene eseguita per ogni elemento dell'array e restituisce true o false.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.find(callback)`}/>
            <p>dove <code>callback</code> è la funzione che viene eseguita per ogni elemento dell'array e che
                restituisce true o false.
                Il metodo <code>find</code> restituisce il primo elemento per il quale la funzione di callback
                ha restituito true.
                Se nessun elemento soddisfa la condizione, il metodo restituisce undefined.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const ages = [32, 33, 16, 40];
                const adult = ages.find(age => age >= 18);
                console.log(adult); // 32
                console.log(ages); // [32, 33, 16, 40]
            `}/>
            <p>E' importante osservare che il metodo <code>find</code> non modifica l'array originale ma restituisce
               unicamente il primo elemento che soddisfa la condizione.
            </p>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> findIndex </code>
                </a>
            </h3>
            <p> Questo metodo ritorna l'indice del primo elemento dell'array che soddisfa una determinata condizione
                specificata in una funzione di callback.
                La funzione di callback viene eseguita per ogni elemento dell'array e restituisce true o false.
                Se nessun elemento soddisfa la condizione, il metodo restituisce -1.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.findIndex(callback)`}/>
            <p>dove <code>callback</code> è la funzione che viene eseguita per ogni elemento dell'array e che
                restituisce true o false.
                Il metodo <code>findIndex</code> restituisce l'indice del primo elemento per il quale la funzione di callback
                ha restituito true; se nessun elemento soddisfa la condizione, il metodo restituisce -1.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const ages = [32, 33, 16, 40];
                const adultIndex = ages.findIndex(age => age >= 18);
                console.log(adultIndex);    // 0
                console.log(ages);          // [32, 33, 16, 40]
            `}/>


        </div>
    );
};

export default ArrayMethods;