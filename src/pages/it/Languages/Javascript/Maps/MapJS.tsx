import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const MapJS: React.FC = () => {
    return (
        <div>
            <h1>Map</h1>
            <p>Caratteristiche delle Map:
                <ul>
                    <li>possono salvare dati di diversa lunghezza (come array e set)</li>
                    <li>non sono ammessi duplicati (come non sono ammessi nei set, ma contrariamente agli array dove
                        i duplicati sono concessi)</li>
                    <li>l'ordinamento è garantito (come negli array, ma contrariamente ai set dove l'ordinamento non è
                        garantito)
                    </li>
                    <li>l'accesso è tramite chiave in una struttura chiave:valore (contrariamente agli array dove
                        l'accesso è tramite indice, ed hai set che è senza indice (???))</li>
                    <li>hanno degli iterable (come array e set) con dei metodi propri</li>
                </ul>
            </p>
            {/* [TO FIX] Tabella riepilogativa Array/Set/Map */}
            <p>A questo punto ci si potrebbe chiedere quale sia la differenza tra un oggetto e una mappa. Vediamo allora
                quese differenze:
                <ul>
                    <li>chiavi: le mappe possono avere chiavi di qualsiasi tipo, mentre gli oggetti possono avere solo
                        stringhe, numeri e simboli come chiavi
                    </li>
                    <li>utilizzo: le mappe forniscono ottime performance con grandi quantità di dati, mentre gli oggetti
                        sono perfetti per piccole quantità di dati
                    </li>
                    <li>manipolazione: me mappe forniscono ottime performance per l'aggiunta, la rimozione di dati ad
                        alta frequenza, mentre gli oggetti sono ottimi per personalizzare e costruire dati velocemente
                    </li>
                </ul>
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                // Creazione di una Map
                const myMap = new Map();
                
                // Aggiunta di elementi alla Map
                myMap.set('name', 'Alessandro');
                myMap.set('age', 45);
                
                console.log(myMap);     // Map { 'name' => 'Alessandro', 'age' => 45 }
                
                console.log(myMap.get('name'));     // Alessandro
                console.log(myMap.get('age'));      // 45
                
                // Verifica se un elemento è presente nella Map
                const isPresent = myMap.has('name');
                console.log(isPresent);    // true
                
                // Rimozione di un elemento dalla Map
                myMap.delete('name');
            `}/>

            <h2>WeakMap</h2>
            {/* [TO COMPLETE] comportamento differente (più leggera - weak) garbage collector*/}
            <p>...</p>




        </div>
    );
};

export default MapJS;