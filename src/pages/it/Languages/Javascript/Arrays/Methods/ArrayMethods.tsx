import React from 'react';
import './ArrayMethods.css'
import JavascriptCode from "../../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const ArrayMethods: React.FC = () => {
    return (
        <div>
            <h1>Accesso ad un Array JS</h1>
            <p> Sappiamo che un array è una collezione di elementi, e che ogni elemento ha un indice.
                Per accedere quindi ad un elemento di un array, è possibile quindi usare la sintassi:
            </p>
            <JavascriptCode code={'array[index]'}/>
            <h3>Esempio</h3>
            <JavascriptCode code={`
                const array = [1, true, 'hello'];
                console.log(array[0]); // 1
                console.log(array[1]); // true
                console.log(array[2]); // 'hello'
            `}/>
            <h3>Lunghezza (numero elementi) Array:</h3>
            <JavascriptCode code={'array.length;  // 3'}/>
            <h3>Tipo Array:</h3>
            <JavascriptCode code={'typeof array;  // object'}/>

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
                        (se l'indice è negativo fa riferimento alla fine dell'array)
                    </li>
                    <li><code>start</code> (opzionale) è l'indice iniziale da cui selezionare/copiare gli elementi
                        (se non specificato di default ha valore zero mentre se ha valore negativo
                        fa riferimento alla fine dell'array)
                    </li>
                    <li><code>end</code> (opzionale) è l'indice finale (escluso) di selezione/copia degli elementi
                        (se non specificato di default è la lunghezza dell'aray mentre se ha valore
                        negativo fa riferimento alla fine dell'array)
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
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
                        fa riferimento alla fine dell'array)
                    </li>
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
                Il metodo <code>findIndex</code> restituisce l'indice del primo elemento per il quale la funzione di
                callback
                ha restituito true; se nessun elemento soddisfa la condizione, il metodo restituisce -1.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const ages = [32, 33, 16, 40];
                const adultIndex = ages.findIndex(age => age >= 18);
                console.log(adultIndex);    // 0
                console.log(ages);          // [32, 33, 16, 40]
            `}/>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> flat </code>
                </a>
            </h2>
            <p>Questo metodo crea un nuovo array unidimensionale (partendo da un array multidimensionale) con tutti gli
                elementi dei sub-arrays concatenati in modo ricorsivo fino alla profondità specificata.</p>
            <h3>Sintassi:</h3>
            <JavascriptCode code={`array.flat(depth)`}/>
            <p>dove <code>depth</code> è la profondità di ricorsione per concatenare gli array interni. Se non viene
                specificata, di default assume valore 1. (??? valore negativo)</p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const numbers = [1, 2, [3, 4, [5, 6]]];
                const flatNumbers = numbers.flat(INFINITY);
                console.log(flatNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[1, 2, 3, 4, 5, 6]`}/>
            <h3>Esempio (da array unidimensionale a array unidimensionale):</h3>
            <JavascriptCode code={`
                const numbers = [1, 2, 3, 4, 5];
                const flatNumbers = numbers.flat();
                console.log(flatNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[1, 2, 3, 4, 5]`}/>
            <h3>Esempio (da array bidimensionale a array unidimensionale):</h3>
            <JavascriptCode code={`
                const numbers = [1, 2, [3, 4], 5]];
                const flatNumbers = numbers.flat();
                console.log(flatNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[1, 2, 3, 4, 5]`}/>
            <h3>Esempio (da array multidimensionale a array bidimensionale):</h3>
            <JavascriptCode code={`
                const numbers = [1, [2, [3, [4]]]];
                const flatNumbers = numbers.flat(2);
                console.log(flatNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[1, 2, 3, [4]]`}/>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> flatMap </code>
                </a>
            </h2>
            <p>Questo metodo combina le funzionalità del metodo <code>map</code> e del metodo <code>flat</code>, infatti
                permette di mappare ogni elemento dell'array con una funzione di callback e di concatenare i risultati
                in un nuovo array unidimensionale.</p>
            <h3>Sintassi:</h3>
            <JavascriptCode code={`array.flatMap(callback)`}/>
            <p>la funzione di callback naturalmente sarà applicata ad ogni elemento dell'array e restituirà un array
                di elementi da essa trasformati.</p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const numbers = [1, 2, 3, 4, 5];
                const doubleAndSquaredNumbers = numbers.flatMap(number => [number * 2, number * number]);
                console.log(doubleAndSquaredNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[2, 1, 4, 4, 6, 9, 8, 16, 10, 25]`}/>
            <p>Di questo metodo dobbiamo quindi ricordare che:
                <ul>
                    <li>applica una funzione di callback a ciascun elemento dell'array e concatena i risultati in un
                        nuovo array unidimensionale
                    </li>
                    <li>elimina eventuali elementi <code>undefined</code> o <code>null</code> dall'array risultante.
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const nestedArrayOfStrings = ['apple,banana', 'cherry,date'];
                const flatArrayOfStrings = nestedArrayOfStrings.flatMap(string => string.split(','));
                console.log(flatArrayOfStrings);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`['apple', 'banana', 'cherry', 'date']`}/>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> forEach </code>
                </a>
            </h2>
            <p>Questo metodo esegue una funzione di callback per ogni elemento dell'array.
                Contrariamente a quanto avviene con il metodo <code>map</code>, il metodo <code>forEach</code> non
                restituisce un nuovo array, ma come detto si limita ad eseguire la funzione di callback per ogni
                elemento dell'array su cui viene eseguito il metodo stesso.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.forEach(callback)`}/>
            <p>dove <code>callback</code> è la funzione da eseguire per ogni elemento dell'array.</p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const numbers = [1, 2, 3];
                numbers.forEach(number => console.log(number * 2));
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                2
                4
                6
            `}/>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const doubleNumbers = numbers.forEach(number => number * 2);
                console.log(doubleNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`undefined`}/>
            <p>Come avevamo già anticipato e come mostra l'esempio, il metodo <code>forEach</code> non restituisce
                un nuovo array, di conseguenza <code>doubleNumbers</code> risulterà <code>undefined</code>.
            </p>

            <h2> Metodo from
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from'
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> from </code>
                </a>
            </h2>
            <p>Questo metodo crea un nuovo array da un oggetto (struttura) simile ad un array o da un oggetto
                iterabile.</p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`Array.from(object, mapFunction, thisValue)`}/>
            <p> dove abbiamo:
                <ul>
                    <li><code>object</code> è l'oggetto/struttura da cui creare l'array</li>
                    <li><code>mapFunction</code> (opzionale) è la funzione da eseguire per ogni elemento dell'array,
                        il cui risultato viene incluso nell'array di destinazione
                    </li>
                    <li><code>thisValue</code> (opzionale) è il valore da utilizzare come <code>this</code> quando si
                        esegue la funzione di mappatura.
                    </li>
                </ul>
            </p>
            <h3>Esempio (creazione Array da una Stringa):</h3>
            <JavascriptCode code={`
                const stringa = 'Hello';
                const array = Array.from(stringa);
                console.log(array);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`['H', 'e', 'l', 'l', 'o']`}/>
            <h3>Esempio (creazione Array con valori mappati da un iterable):</h3>
            <JavascriptCode code={`
                const nums = [1, 2, 3, 4, 5];
                const squaredNums = Array.from(nums, num => num * num);
                console.log(squaredNums);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[1, 4, 9, 16, 25]`}/>
            <h3>Esempio (creazione Array da un Set):</h3>
            <JavascriptCode code={`
                const set = new Set(['apple', 'banana', 'cherry']);
                const array = Array.from(set);
                console.log(array);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`['apple', 'banana', 'cherry']`}/>
            <h3>Esempio (avanzato - creazione Array da Struttura/Oggetto simile ad un Array):</h3>
            <JavascriptCode code={`
                const obj = {
                  length: 4,
                  0: 'apple',
                  1: 'banana',
                  2: 'orange',
                  3: 'grape'
                };

                const arr = Array.from(obj);
                console.log(arr); 
            `}/>
            <p>Output:</p>
            <TerminalCode code={`['apple', 'banana', 'orange', 'grape']`}/>
            <p>Quello che possiamo osservare in questo esempio è che il metodo <code>from</code>:
                <ul>
                    <li>utilizza la proprietà <code>length</code> dell'oggetto per determinare la lunghezza dell'array
                        da creare
                    </li>
                    <li>utilizza gli indici numerici dell'oggetto per creare gli elementi dell'array (gli indici non
                        numerici vengono ignorati e non inclusi nell'array risultante)
                    </li>
                </ul>
            </p>
            <p>Volendo anche in questo caso possiamo utilizzare la funzione di mappatura per trasformare gli elementi
                dell'array risultante:</p>
            <JavascriptCode code={`
                const obj = {
                    length: 4,
                    0: 10
                    1: 20,
                    2: 30
                };

                const arr = Array.from(obj, num => num * 2);
                console.log(arr);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`[20, 40, 60]`}/>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> includes </code>
                </a>
            </h2>
            <p>Questo metodo verifica se un array include un determinato elemento e restituisce true o false
                a seconda del risultato della verifica.</p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.includes(element, start)`}/>
            <p>dove:
                <ul>
                    <li><code>element</code> è l'elemento da cercare nell'array</li>
                    <li><code>start</code> (opzionale) è l'indice da cui iniziare la ricerca (se non specificato
                        di default ha valore zero, ovvero inizia dalla prima posizione/primo elemento)
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana', 'cherry'];
                const hasApple = fruits.includes('apple');
                const hasOrange = fruits.includes('orange');
                console.log(hasApple);
                console.log(hasOrange);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                true
                false
            `}/>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> indexOf </code>
                </a>
            </h2>
            <p>Questo metodo restituisce l'indice della prima occorrenza di un elemento specificato in un array,
                oppure -1 se l'elemento non è presente nell'array.</p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.indexOf(element, start)`}/>
            <p>dove:
                <ul>
                    <li><code>element</code> è l'elemento da cercare nell'array</li>
                    <li><code>start</code> (opzionale) è l'indice da cui iniziare la ricerca (se non specificato
                        di default ha valore zero, ovvero inizia dalla prima posizione/primo elemento)
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana', 'cherry'];
                const indexOfApple = fruits.indexOf('apple');
                const indexOfOrange = fruits.indexOf('orange');
                console.log(indexOfApple);
                console.log(indexOfOrange);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                0       // indice di 'apple'
                -1      // 'orange' non è presente nell'array
            `}/>
            <p>Concludiamo osservando che si tratta del metodo complementare al metodo <code>lastIndexOf</code> che
                restituisce invece l'indice dell'ultima occorrenza, o -1 se l'elemento non è presente nell'array.
            </p>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> isArray </code>
                </a>
            </h2>
            <p>Questo metodo verifica se un oggetto (passato come parametro) è un array o meno e restituisce true o
                false a seconda del risultato della verifica.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`Array.isArray(objectToVerify)`}/>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana', 'cherry'];
                const isFruitsArray = Array.isArray(fruits);
                console.log(isFruitsArray);
                
                const fruitsObject = {0: 'apple', 1: 'banana', 2: 'cherry'};
                const isFruitsObjectArray = Array.isArray(fruitsObject);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                true    // fruits è un array
                false   // fruitsObject non è un array
            `}/>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> join </code>
                </a>
            </h2>
            <p>Questo metodo crea e restituisce una nuova stringa concatenando tutti gli elementi di un array
                separati da uno specifico separatore passato come argomento al metodo stesso.
                Se non viene specificato alcun separatore, di default viene utilizzata la virgola. (???)
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.join(separatore)`}/>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana', 'cherry'];
                const fruitsString = fruits.join(', ');
                console.log(fruitsString);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`apple, banana, cherry`}/>

            <h2>Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> lastIndexOf </code>
                </a>
            </h2>
            <p>Questo metodo restituisce l'indice dell'ultima occorrenza di un elemento specificato in un array,
                oppure -1 se l'elemento non è presente nell'array.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`array.lastIndexOf(element, start)`}/>
            <p>dove:
                <ul>
                    <li><code>element</code> è l'elemento da cercare nell'array</li>
                    <li><code>start</code> (opzionale) è l'indice da cui iniziare la ricerca (se non specificato
                        di default ha valore zero, ovvero inizia dalla prima posizione/primo elemento)
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const fruits = ['apple', 'banana', 'cherry', 'apple'];
                const lastIndexOfApple = fruits.lastIndexOf('apple');
                const lastIndexOfOrange = fruits.lastIndexOf('orange');
                console.log(lastIndexOfApple);
                console.log(lastIndexOfOrange);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                3       // indice dell'ultima occorrenza di 'apple'
                -1      // 'orange' non è presente nell'array
            `}/>
            <p>Concludiamo osservando che si tratta del metodo complementare al metodo <code>indexOf</code> che
                restituisce invece l'indice della prima occorrenza, o -1 se l'elemento non è presente nell'array.
            </p>

            <h2> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> map </code>
                </a>
            </h2>
            <p>Questo metodo (molto utilizzato) crea un nuovo array con i risultati di una funzione di callback
                eseguita su ciascun elemento dell'array.
            </p>
            <h2>Sintassi:</h2>
            <JavascriptCode code={`
                const newArray = array.map(callback, index, array);
            `}/>
            <p>dove:
                <ul>
                    <li><code>callback</code> è la funzione da eseguire per ogni elemento dell'array</li>
                    <li><code>index</code> (opzionale) è l'indice dell'elemento corrente che viene processato
                    </li>
                    <li><code>array</code> (opzionale) è l'array su cui viene eseguito il metodo
                    </li>
                </ul>
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                const numbers = [1,2,3,4,5];
                const squaredNumbers = numbers.map((number) => {
                  return number * number;
                });

console.log(squaredNumbers);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                [1, 4, 9, 16, 25]
            `}/>
            <p>Relativamente al metodo <code>map</code> dobbiamo sempre ricordarci che esso non modifica l'array
                originale e che restituisce un nuovo array con gli elementi trasformati dalla funzione di callback,
                quindi della stessa lunghezza.
                Qualora volessimo applicare dei filtri per escludere alcuni elementi dall'array, dovremmo utilizzare
                il metodo <code>filter</code> o <code>reduce</code>.
            </p>

        </div>
    );
};

export default ArrayMethods;