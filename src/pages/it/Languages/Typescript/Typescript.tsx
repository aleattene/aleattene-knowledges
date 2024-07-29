import React from 'react';
import TypescriptCode from "../../../../components/Code/TypescriptCode/TypescriptCode.tsx";

const Typescript: React.FC = () => {
    return (
        <div>
            <h1>Typescript</h1>
            <p>TS è un linguaggio di programmazione costruito su JS, infatti ne condivide sintassi e funzionalità.</p>
            <p>Ma non solo, TS aggiunge funzionalità come tipizzazione statica, classi, interfacce, moduli e decoratori.
            </p>
            <TypescriptCode code={`
                // Javascript
                const prova = 5;
                // Typescript
                const prova: number = 5;
            `} />
            <p>TS non può essere eseguito direttamente dal browser e/o da NodeJs, ma deve essere prima compilato (processo
                di transpilazione) in JS.</p>
            <p>Framework come Angular, NestJs, Ionic, etc.. sono scritti in TS.</p>
            <h3>Installazione:</h3>
            <p>Node (incluso npm) è necessario per installare TS.</p>
            <TypescriptCode code={`
                [sudo] npm install -g typescript    // Installazione globale (su tutto il pc)
            `}/>
            <p>Strumenti Utili:</p>
                <ul>
                    <li>IDE: VSCode o Webstorm (ad esempio)</li>
                    <li>ESLint: per il controllo della qualità del codice</li>
                    <li>Prettier: per la formattazione del codice</li>
                </ul>
            <TypescriptCode code={`
                // Javascript
                function somma(a, b) {
                    return a + b;
                }
                somma(3, 5);    // 8
                somma('ciao', 5); // ciao5 (cast implicito number -> string e concatenazione)
                somma(3, '5');  // '35' (cast implicito number -> string e concatenazione)
                
                // Typescript
                function somma(a: number, b: number): number {
                    return a + b;
                }
                somma(3, '..5..');  // Errore in fase di implementazione
            `}/>
            <p>In questo ultimo esempio possiamo osservare come non sia neanche necessario arrivare alla transpilazione
                <code>tsc file.ts</code> poiché Ts ci avvisa del problema direttamente in fase di implementazione;
                questo naturalmente ci permette di scrivere codice più robusto e sicuro e soprattutto che non manifesta
                problemi a runtime.</p>
            <h2>TIPI di DATO (Data Types)</h2>
            <p>Come abbiamo visto in altri contesti JS ha una tipizzazione dinamica, mentre TS ha una tipizzazione
                statica</p>
            <TypescriptCode code={`
                // Javascript
                let a = 5;
                a = 'ciao'; // OK
                
                // Typescript
                let a: number = 5;
                ..a.. = 'ciao'; // Errore in fase di implementazione (type string is not assignable to type number)
            `}/>
            <p>TS supporta tipi di dato, quali ad esempio:</p>
            <ul>
                <li>String / Number / Boolean</li>
                <li>Object / Array / Tuple / Custom Type</li>
                <li>Enum / Any / Union / Alias</li>
            </ul>
            <h3>Object</h3>
            <TypescriptCode code={`               
                // Typescript
                const user: { } = {
                    name: 'Mario',
                    age: 30
                };
                ..user.name.. // Errore
            `}/>
            <p> In questo caso abbiamo un errore in fase di implementazione poiché abbiamo definito un oggetto vuoto con
                <code>{}</code> (sarebbe la stessa cosa se avessimo usato <code>object</code>).
                Di fronte a situazioni come queste, se non abbiamo chiaro come sarà l'oggetto meglio non srcivere nulla
                e lasciare che TS inferisca il tipo corretto.</p>
            <TypescriptCode code={`
                // Typescript
                const user : { name: string, age: number } = { name: "Mario", age: 30 };
                user.name // OK - Mario
                const ..user2.. : { name: string, age: number } = { name: "Mario" };    
                // Errore in fase di implementazione (age is missing) il quale ci specifica che ci siamo dimenticati
                // di inizializzare la proprietà age
            `}/>
            <p>In sostanza dall'esempio abbiamo potuto osservare come TS di fatto ci permetta di definire la struttura
                dell'oggetto (ma anche di oggetti innestati) e poi questa stessa struttura deve essere rispettata
                sia in termini di proprietà che di tipi.
                Alternativamente TS ci segnalerebbe un errore direttamente in fase di implementazione.
            </p>
            <TypescriptCode code={`
                function getData (data: { name: string, age: number }) {
                    return data;
                }
                getData({ name: 'Mario', age: 30 }); // OK
                getData({ name: 'Mario' }); 
                // Errore in fase di implementazione poiché la funzione si aspetta un oggetto con proprietà name e age
                // come definito in fase di dichiarazione della funzione stessa
            `}/>
            <TypescriptCode code={`
                // Union Type (nel nostro caso accetta solo stringhe, numeri e booleani)
                const array: (string | number | boolean)[] = ['Mario', 30, true];
            `}/>
            <TypescriptCode code={`
                // Any Type (viene accettato qualsiasi tipo)
                const array: any[] = ['Mario', 30, true];
            `}/>



        </div>
    );
};

export default Typescript;