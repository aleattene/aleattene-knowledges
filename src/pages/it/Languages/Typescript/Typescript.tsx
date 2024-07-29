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


        </div>
    );
};

export default Typescript;