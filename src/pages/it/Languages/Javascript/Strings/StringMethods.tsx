import React from 'react';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const StringMethods: React.FC = () => {
    return (
        <div>
            <h1>Metodi delle Stringhe</h1>

            <h3>charAt</h3>
            <p>Restituisce il carattere che si trova nella posizione specificata:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.charAt(4));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'o'}/>

            <h3>concat</h3>
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

            <h3>includes</h3>
            <p>Verifica, restituendo true o false, se una stringa include uno specifico carattere o stringa:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.includes("x"));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'false'}/>

            <h3>indexOf</h3>
            <p>Restituisce l'indice della prima occorrenza di un carattere o di una stringa all'interno di un'altra
                stringa:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.indexOf("l"));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'2'}/>

            <h3>lastIndexOf</h3>
            <p>Restituisce l'indice dell'ultima occorrenza di un carattere o di una stringa all'interno di un'altra
                stringa:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.lastIndexOf("l"));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'3'}/>

            <h3>match</h3>
            <p>Restituisce un array contenente le corrispondenze trovate tra una stringa e una regex:</p>
            <JavascriptCode code={`
                const stringa = "Hello";
                console.log(stringa.match(/[A-Z]/g));  
            `}/>
            <p>Output:</p>
            <TerminalCode code={'[H]'}/>

            <h3>padEnd</h3>
            <p>Aggiunge un carattere di riempimento (passato come secondo parametro/argomento alla funzione) alla fine
                di una stringa fino a raggiungere la lunghezza specificata (primo parametro):
            </p>
            <JavascriptCode code={
                `const stringa = "Hello";
                console.log(stringa.padEnd(8, "!"));`
            }/>
            <p>Output:</p>
            <TerminalCode code={'Hello!!!'}/>

            <h3>padStart</h3>
            <p>Aggiunge un carattere di riempimento (passato come secondo parametro/argomento alla funzione) all'inizio
                di una stringa fino a raggiungere la lunghezza specificata (primo parametro):
            </p>
            <JavascriptCode code={
                `const stringa = "Hello";
                console.log(stringa.padStart(7, "_"));`
            }/>
            <p>Output:</p>
            <TerminalCode code={'__Hello'}/>

            <h3>repeat</h3>
            <p>Ritorna una stringa composta da un numero specificato (parametro) di copie della stringa originale.
                Se il parametro passato ha valore 0, viene restituita una stringa vuota:
            </p>
            <JavascriptCode code={
                `const stringa = "Hello";
                
                const stringa_ripetuta = stringa.repeat(3);
                const stringa_vuota = stringa.repeat(0);
                
                console.log(stringa_ripetuta);
                console.log(stringa_vuota);
            `}/>
             <p>Output:</p>
            <TerminalCode code={`
                    // Stringa ripetuta 3 volte
                    HelloHelloHello     
                    
                    // Stringa vuota
                    ""
            `}/>

            <h3>replace</h3>
            <p>Sostituisce una stringa/sotto-stringa (singola occorrenza) con un'altra stringa:</p>
            <JavascriptCode code={`
                // Stringa originale
                const stringa = "Hello";
                
                // Sostituzione intera stringa
                const stringa_replaced = stringa.replace("Hello", "World");
                console.log(stringa_replaced);          # World
                
                // Sostituzione sotto-stringa unitaria
                const stringa_replaced2 = stringa.replace("l", "X");
                console.log(stringa_replaced2);          # HeXlo
                
                // Sostituzione sotto-stringa
                const stringa_replaced3 = stringa.replace('llo', "y");
                console.log(stringa_replaced3);          # Hey
            `}/>

            <h3>replaceAll</h3>
            <p>Sostituisce tutte le occorrenze di una stringa/sotto-stringa con un'altra stringa:</p>
            <JavascriptCode code={`
                // Stringa originale
                const stringa = "Hello";

                // Sostituzione sotto-stringa
                const stringa_replaced = stringa.replaceAll('l', "-");
                console.log(stringa_replaced);        
            `}/>
            <p>Output:</p>
            <TerminalCode code={'He--o'}/>



        </div>
    );
}

export default StringMethods;