import React from 'react';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const StringMethods: React.FC = () => {
    return (
        <div>
            <h1>Metodi delle Stringhe</h1>

            <h2>charAt</h2>
            <p>Restituisce il carattere che si trova nella posizione specificata:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.charAt(4));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'o'}/>

            <h2>concat</h2>
            <p>Concatena (unendole) due o più stringhe:</p>
            <JavascriptCode code={`
                const stringa1 = "Hello";
                const stringa2 = "World";
                console.log(stringa1.concat(" ", stringa2));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'Hello World'}/>

            <h3>endsWith</h3>
            <p>Verifica, restituendo true o false, se una stringa termina con uno specifico carattere o stringa:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.endsWith("o"));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'true'}/>


        </div>
    );
}

export default StringMethods;