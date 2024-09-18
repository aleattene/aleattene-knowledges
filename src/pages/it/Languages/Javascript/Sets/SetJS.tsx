import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const SetJS: React.FC = () => {
    return (
        <div>
            <h1>Set</h1>
            <p>Caratteristiche dei Set (matematicamente sono degli Insiemi):
                <ul>
                    <li>possono salvare dati di diversa lunghezza (come array e map)</li>
                    <li>non sono ammessi duplicati (come non sono ammessi nelle map, ma contrariamente agli array dove
                        i duplicati sono concessi)
                    </li>
                    <li>l'ordinamento non è garantito (contrariamente ad array e map dove l'ordinamento è
                        garantito)
                    </li>
                    <li>non è possibile accedere ai dati tramite indice (contrariamente agli array dove l'accesso agli
                        elementi è proprio tramite indice, ed alle map dove l'accesso è tramite chiave) ma si può
                        solo verificare se un determinato elemento è presente o meno
                    </li>
                    <li>hanno degli iterable (come array e map) con dei metodi propri</li>
                </ul>
            </p>
            {/* [TO FIX] Tabella riepilogativa Array/Set/Map */}

            <p>Esempio:</p>
            <JavascriptCode code={`
                // Creazione di un Set
                const set = new Set(1,2,3);
                console.log(set);    // Set { 1, 2, 3 }
                
                // Aggiunta di un elemento al Set
                set.add(4);
                set.add(4);     // non verrà aggiunto
                set.add(4);     // non verrà aggiunto
                
                // Verifica se un elemento è presente nel Set
                isPresent = set.has(4);
                console.log(isPresent);    // true
                isPresent = set.has(5);
                console.log(isPresent);    // false
                
                // Rimozione di un elemento dal Set
                set.delete(4);
                console.log(set);    // Set { 1, 2, 3 }
                
                // Stampa di tutti gli elementi del Set (???keys()???)
                for (const element of set) {
                    console.log(element);
                }
            `}/>

            <h2>WeakSet</h2>
            {/* [TO COMPLETE] comportamento differente (più leggera - weak) garbage collector*/}
            <p>...</p>

        </div>
    );
};

export default SetJS;