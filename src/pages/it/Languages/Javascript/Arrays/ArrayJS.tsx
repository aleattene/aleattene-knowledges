import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const ArrayJS: React.FC = () => {
    return (
        <div>
            <h1>Array</h1>
            <p>Un array è un oggetto JavaScript che permette di memorizzare multipli valori eterogenei (numeri,
                stringhe, booleani, oggetti, etc) in una singola variabile.
            </p>
            <p>Per comprendere meglio il concetto di array, ha senso aprire una piccola parentesi sul concetto di
                iterator.
            </p>
            <p>Un oggetto è considerato un iterator quando sa come accedere agli elementi di una collezione, uno alla
                volta, mantenendo il tracciamento della sua posizione corrente all'interno di quella stessa sequenza.
            </p>
            <p>In JS un iterator è un oggetto che implementa il metodo next(), il quale ritorno (l'elemento successivo
                della sequenza ??? ) un oggetto con due proprietà:
                <ul>
                    <li>value (il valore corrente)</li>
                    <li>done (un booleano che indica se l'iterazione è terminata)</li>
                </ul>
            </p>
            {/* [TO Fix] Esempio semplice e comprensibile di un iterator */}
            <p>Dato che creare manualmente un iterator è un'operazione complessa, come alternativa possiamo utilizzare
                i generatori (o Generator). Essi infatti permettono di scrivere una funzione che tiene traccia della
                propria posizione ed ha il metodo next() già implementato.
            </p>
            <p>I generatori:
                <ul>
                    <li>sono definiti utilizzando la sintassi function* ()</li>
                    <li>ritornano un oggetto Generator</li>
                    <li>tramite la keyword yield permettono di mettere in pausa e riprendere l'esecuzione della funzione
                        generatore
                    </li>
                </ul>
            </p>
            {/* [TO Fix] Esempio semplice e comprensibile di un generatore */}
            <p>Abbiamo poi anche gli iterable, ovvero un oggetto che per essere definito tale deve definire un
                comportamento di iterazione, ovvero implementare il metodo @@iterator, che significa in definitiva che
                l'oggetto deve avere una proprietà con chiave Symbol.iterator.
            </p>
            <p>Esempio:</p>
            {/* [TO Fix] Esempio semplice e comprensibile di un iterable */}
            <p>Quello che interessa noi al momento è l'affermazione che <strong>non tutti gli Iterables sono Array
                in JS</strong>(infatti Nodelist, String, Map e Set per esempio sono Iterables ma non Array).
            </p>
            <p>Altro aspetto importante da considerare è quello relativo agli oggetti Array-like, ovvero oggetti che
                hanno una proprietà <strong>length</strong> e gli elementi sono accessibili tramite
                <strong>indice</strong>.
                Anche in questo caso fondamentale da considerare è l'affermazione che <strong>non tutti gli oggetti
                Array-like sono Array in JS</strong> (infatti NodeList e String sono Array-like ma non Array).
            </p>
            {/* [TO Fix] Operatore yield vs yield*(usato per delegare ad un altro generatore/oggetto iterabile) */}

            <h2>Creazione di un Array</h2>
            <p>Per creare un array in JS possiamo utilizzare la sintassi letterale:</p>
            <JavascriptCode code={`
                // Array vuoto
                const emptyArray = [];
                const emptyArray = new Array();
            
                // Array con elementi
                const array = [1, 2, 3, 4, 5];
                const array = new Array(1, 2, 3, 4, 5);               
            `}/>
            <p>Una cosa a cui però prestare la massima attenzione nella creazione di un array quando si utilizza il
                costruttore Array() è quando si passa un solo argomento numerico, in quanto questo viene interpretato
                come la lunghezza dell'array e non come un elemento dell'array.
            </p>
            <JavascriptCode code={`
                const array = new Array(5);
                console.log(array); // [empty x 5]
            `}/>
            <p>Contrariamente a quanto ci si aspetterebbe, ovvero <code>[5]</code> otteniamo invece un array con 5
                elementi vuoti.
                Se invece gli elementi sono più di uno, allora vengono considerati giustamente come elementi dell'array.
            </p>
            <JavascriptCode code={`
                const array = new Array(5,2);
                console.log(array); // [5, 2]
            `}/>

            <h2>Array Annidati</h2>
            <p>Un array annidato è un array che contiene uno o più array al suo interno.</p>
            <JavascriptCode code={`
                const nestedArray = [
                    ["Marco", 35, true],
                    ["Luca, 14, false], 
                    ["Maria, 20, true]
                ];
            `}/>
            <p>Se per accedere agli elementi di un array si utilizza l'indice, per accedere ad un elemento di un array
                annidato, si può analogamente utilizzare la notazione a doppio indice:</p>
            <JavascriptCode code={`
                console.log(nestedArray[0][0]);     // Marco
                console.log(nestedArray[0][2]);     // true
                console.log(nestedArray[1][0]);     // Luca
                console.log(nestedArray[2][1]);     // 20
            `}/>

            <h2>Inserimento elementi in un Array</h2>
            <p>Per inserire elementi in un array possiamo utilizzare i metodi
                <ul>
                    <li><code>push()</code>: per inserire un elemento in coda all'array
                        <JavascriptCode code={`
                            const array = [1, 2, 3];
                            array.push("Mario");
                            console.log(array); // [1, 2, 3, "Mario"]
                        `}/>
                    </li>
                    <li><code>unshift()</code>: per inserire un elemento in testa all'array
                        <JavascriptCode code={`
                            const array = [1, 2, 3];
                            array.unshift("Mario");
                            console.log(array); // ["Mario", 1, 2, 3]
                        `}/>
                    </li>
                </ul>
            </p>

            <h2>Rimozione elementi da un Array</h2>
            <p>Per rimuovere elementi da un array possiamo utilizzare i metodi
                <ul>
                    <li><code>pop()</code>: per rimuovere l'ultimo elemento dall'array
                        <JavascriptCode code={`
                            const array = [1, 2, 3];
                            array.pop();
                            console.log(array); // [1, 2]
                        `}/>
                    </li>
                    <li><code>shift()</code>: per rimuovere il primo elemento dall'array
                        <JavascriptCode code={`
                            const array = [1, 2, 3];
                            array.shift();
                            console.log(array); // [2, 3]
                        `}/>
                    </li>
                </ul>
            </p>

            <h2>Sostituzione elementi in un Array</h2>
            <p>Per sostituire un elemento in un array possiamo utilizzare la notazione a indice:
                <JavascriptCode code={`
                    const array = [1, 2, 3];
                    array[1] = "Mario";
                    console.log(array); // [1, "Mario", 3]
                `}/>
            </p>
            <p>Una cosa a cui bisogna fare attenzione è non utilizzare un indice che sia superiore alla lunghezza
                dell'alrray, altrimenti si otterrà un array con elementi vuoti.</p>
            <JavascriptCode code={`
                const array = [1, 2, 3];
                array[10] = "Mario";
                console.log(array); // [1, 2, 3, empty x 7, "Mario"]
                console.log(array[5]);  // undefined
                console.log(array.10);  // "Mario"
            `}/>
            <p>Se si vuole evitare questo comportamento, è possibile utilizzare il metodo <code>splice()</code>:
                <JavascriptCode code={`
                    // Sintassi
                    array.splice(start, deleteCount=array.length, items);
                    
                    // Esempio
                    const array = [1, 2, 3];
                    
                    // Taglia dall'elemento con indice 1 fino alla fine
                    array.splice(1);        // [1]      
                    
                    // Taglia l'ultimo elemento
                    array.splice(-1);       // [1, 2]   
                    
                    // Taglia un elemento a partire dall'indice 1
                    array.splice(1, 1);     // [1, 3]   
                    
                    // Aggiunge "Mario" all'indice 1 (non rimuove nessun elemento poiché deleteCount=0)
                    array.splice(1, 0, "Mario");        // [1, "Mario", 2, 3]   
                    
                    // Sostituisce l'elemento con indice 1 con "Mario"
                    array.splice(1, 1, "Mario");        // [1, "Mario", 3]
                    
                    // Sostituisce 2 elementi a partire dall'indice 1 con "Mario"
                    array.splice(1, 2, "Mario");        // [1, "Mario"]  
                `}/>
            </p>

            <h2>Concatenazione di Array</h2>
            <p>Per concatenare due array possiamo utilizzare il metodo <code>concat()</code>:
                <JavascriptCode code={`
                    const array1 = [1, 2, 3];
                    const array2 = [4, 5, 6];
                    const array3 = array1.concat(array2);
                    console.log(array3);    // [1, 2, 3, 4, 5, 6]
                `}/>
            </p>
            <p>Esiste poi un altro modo per concatenare due array, ovvero utilizzando l'operatore di spread
                (spread operator):
                <JavascriptCode code={`
                    const array1 = [1, 2, 3];
                    const array2 = [4, 5, 6];
                    const array3 = [...array1, ...array2];
                    console.log(array3);    // [1, 2, 3, 4, 5, 6]
                `}/>
            </p>

            <h2>Trovare l'indice di un elemento in un Array</h2>
            <p>Per trovare l'indice di un elemento in un array possiamo utilizzare il metodo <code>indexOf()</code>:
                <JavascriptCode code={`
                    const array = ["Mario", "Luca", "Maria"];
                    
                    // Elemento presente
                    console.log(array.indexOf("Luca"));    // 1     
                    
                    // Elemento non presente
                    console.log(array.indexOf("Paolo"));   // -1
                `}/>
            </p>
            <p>Questo metodo scansiona l'array dall'inizio alla fine (quindi da sinistra verso destra), se per motivi
                di performance si vuole scansionare l'array dalla fine all'inizio (quindi da destra verso sinistra),
                possiamo utilizzare il metodo <code>lastIndexOf()</code>:
                <JavascriptCode code={`
                    const array = ["Mario", "Luca", "Maria", "Luca"];
                    
                    // Elemento presente
                    console.log(array.lastIndexOf("Luca"));    // 3     
                    
                    // Elemento non presente
                    console.log(array.lastIndexOf("Paolo"));   // -1
                `}/>
            </p>
            <p>Scegliere quale metodo utilizzare dipende dal caso d'uso, se si vuole trovare la prima occorrenza di un
                elemento si può utilizzare <code>indexOf()</code>, se si vuole trovare l'ultima occorrenza si può
                utilizzare <code>lastIndexOf()</code>, oppure se anche l'occorrenza fosse unica, qualora si supponga
                che l'elemento da ricercare sia presumibilmente più vicino all'iniizo dell'array, si può utilizzare
                <code>indexOf()</code>, altrimenti <code>lastIndexOf()</code>.
            </p>

            <h2>Destrutturazione di un Array</h2>
            <p>La destrutturazione di un array è una tecnica che permette di estrarre valori da un array
                (o da un oggetto) e assegnarli a variabili separate.
                <JavascriptCode code={`
                    const array = [1, 2, 3];
                    const [a, b, c] = array;
                    console.log(a); // 1
                    console.log(b); // 2
                    console.log(c); // 3
                    
                    // Ignorare un elemento
                    const [a, , c] = array;
                    console.log(a); // 1
                    console.log(c); // 3
                    
                    // Assegnare i valori restanti ad un altro array
                    const [a, ...rest] = array;
                    console.log(a); // 1
                    console.log(rest); // [2, 3]
                `}/>
            </p>

        </div>
    );
};

export default ArrayJS;