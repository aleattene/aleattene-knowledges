import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";

const EventJS: React.FC = () => {
    return (
        <div>
            <h1>Eventi</h1>
            <p>Un evento è un qualcosa che accade nel documento, per esempio un click su un bottone, il caricamento di
                una pagina, ecc. Al verificarsi di un evento, il browser esegue una funzione, detta "gestore di eventi",
                (handler) che si occupa di gestire l'evento stesso sulla base di quanto da noi definito nel codice.
            </p>
            <p>Le tre principali tipologie di eventi sono:</p>
            <ul>
                <li>Eventi del Mouse (mouse events)</li>
                <li>Eventi del DOM (Dom events)</li>
                <li>Altri eventi (keyboard events, form events, ecc.)</li>
            </ul>
            <p>Esempi di eventi sono:
                <ul>
                    <li>onclick</li>
                    <li>onmouseover</li>
                    <li>onkeypress</li>
                    <li>onkeydown</li>
                    <li>onfocus</li>
                    <li>onscroll</li>
                </ul>
            </p>
            <p>La cosa interessante da osservare è la presenza del prefisso "on" prima del nome di ogni evento;
                in particolare tale prefisso è necessario quando si richiama l'evento all'interno del codice HTML,
                mentre nel programmarli in JavaScript il prefisso non è necessario.
            </p>

            <p>Per aggiungere un evento in HTML si può utilizzare l'attributo "on" seguito dal nome dell'evento,
                ad esempio:
            </p>
            <JavascriptCode code={`
                // Sintassi
                <\elemento nomeEvento="codiceJavaScript"/>
                
                // Esempio
                <button onclick="alert('Ciao!')">Clicca qui</button>              
            `}/>
            <p>Il codice JavaScript viene eseguito quando l'evento si verifica.</p>
            <p>L'evento si può anche aggiungere direttamente con JavaScript, come ad esempio:</p>
            <JavascriptCode code={`
                // Sintassi
                elemento.nomeEvento = funzione;
                
                // Esempio 
                const button = document.getElementById('myButton');
                
                const myFunction = () => { console.log('Call my function!'); };
                
                button.onclick = myFunction;
            `}/>
            <p>Seppur fattibile, questa pratica non è consigliata. Decisamente consigliato invece è l'utilizzo
                del metodo addEventListener():
            </p>
            <JavascriptCode code={`
                // Sintassi
                elemento.addEventListener(nomeEvento, funzione);
                
                // Esempio
                const button = document.getElementById('myButton');
                
                const myFunction = () => { console.log('Call my function!'); };
                
                // Aggiunge un evento click al bottone
                button.addEventListener('click', myFunction);
                
                // Rimuove un evento click dal bottone
                button.removeEventListener('click', myFunction);
            `}/>
            <p>Un'interessante approfondimento che si può fare è relativo all'evento:</p>
            <JavascriptCode code={`
                const button = document.getElementById('myButton');
                
                const myFunction = (event) => { console.log(event); };
                
                button.addEventListener('click', myFunction);
                });
            `}/>
            <p>Il parametro event contiene informazioni sull'evento stesso, come ad esempio il tipo di evento,
                l'elemento che ha generato l'evento, ecc.</p>
            <TerminalCode code={`
                MouseEvent { 
                    isTrusted: true, 
                    screenX: 0, 
                    screenY: 0, 
                    clientX: 0, 
                    clientY: 0, 
                    target: button#myButton,
                    … 
                }
            `}/>
            <p>Molto interessante è la proprietà target che ci permette appunto di sapere quale elemento ha generato
                l'evento.
            </p>
            <JavascriptCode code={`
                const button = document.getElementById('myButton');
                const myFunction = (event) => { console.log(event.target); };
                button.addEventListener('click', myFunction);
            `}/>
            <TerminalCode code={`
                <button id="myButton">Click me</button>
            `}/>

            <h2>Aggiunta di un evento alla finestra</h2>
            <p>Per aggiungere un evento alla finestra si può fare in questo modo:</p>
            <JavascriptCode code={`
                window.addEventListener('scroll', (event) => { console.log(event); });
            `}/>
            <p>Ogni volta che si scrolla la pagina, verrà visualizzato un evento:</p>
            <TerminalCode code={`
                Event { 
                    isTrusted: true, 
                    type: "scroll", 
                    target: Window, 
                    currentTarget: Window, 
                    … 
                }
                Event { 
                    isTrusted: true, 
                    type: "scroll", 
                    target: Window, 
                    currentTarget: Window, 
                    … 
                }
                ...
            `}/>
        </div>
    );
};

export default EventJS;