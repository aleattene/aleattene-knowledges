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

            <h3>Prevenire il comportamento predefinito di un evento (preventDefault)</h3>
            <p>Ogni evento ha un suo comportamento predefinito (ad esempio, se si clicca su un link, il
                comportamento predefinito è quello di aprire il link).
            </p>
            <p>Ecco allora che per prevenire il comportamento predefinito di un evento si può utilizzare il metodo
                preventDefault(). Ad esempio:
            </p>
            <JavascriptCode code={`
                // File HTML
                <\form action="">
                    <label for="myInput">Nome:</label>
                    <input id="myInput" type="text">
                    <button type="submit">Invia</button>
                </form>
            `}/>
            <JavascriptCode code={`
                // File JavaScript
                const form = document.querySelector('form');
                form.addEventListener('submit', (event) => {
                    // previene il comportamento predefinito di refresh pagina al submit
                    event.preventDefault(); 
                    // comportamento custom al submit
                    console.log('Form not submitted!');
                });
            `}/>

            <h3>Prevenire la Propagazione degli eventi (stopPropagation)</h3>
            <p>Quando si clicca su un elemento, l'evento si propaga in tutto il DOM. Esiste infatti un flusso di
                propagazione degli eventi che va dal nodo più interno al nodo più esterno.
            </p>
            {/* [TO COMPLETE] IMG flusso propagazione eventi */}
            <p>Questo flusso di propagazione si compone sostanzialmente di tre fasi:</p>
            <ul>
                <li>La fase di cattura (capturing phase): l'evento scende dal nodo più esterno al nodo più interno</li>
                <li>La fase di target (target phase): l'evento arriva al nodo target</li>
                <li>La fase di bubbling (bubbling phase): l'evento risale dal nodo più interno al nodo più esterno</li>
            </ul>
            <p>Per prevenire la propagazione degli eventi (come sarebbe previsto di default) si può utilizzare il
                metodo stopPropagation(). Ad esempio:
            </p>
            <JavascriptCode code={`
                // File HTML
                <\div id="primoDiv">
                    <p id="primoP">Clicca qui ... </div>
                    <p id="secondoP">Clicca anche qui ...</div>
                </div>
            `}/>
            <JavascriptCode code={`
                // File JavaScript
                const primoDiv = document.getElementById('primoDiv');
                primoDiv.addEventListener('click', (event) => {
                    console.log('Primo Div cliccato!');
                });
                
                const primoP = document.getElementById('primoP');
                primoP.addEventListener('click', (event) => {
                    console.log('Primo P cliccato!');
                });
                
                const secondoP = document.getElementById('secondoP');
                secondoP.addEventListener('click', (event) => {
                    console.log('Secondo P cliccato!');
                });
            `}/>
            <p>Cliccando sul primo paragrafo otterremo quanto segue:</p>
            <TerminalCode code={`
                Primo P cliccato!
                Primo Div cliccato!
            `}/>
            <p>Succede questo perché la cattura dell'evento avviene durante la fase di bubbling (risalita), quindi
                il primo a rilevare l'evento è il paragrafo (più interno), poi propagandosi viene rilevato anche dal
                div (più esterno).
            </p>
            <p>Qualora volessimo invertire l'ordine di captura dell'evento, si può utilizzare il terzo parametro
                del metodo addEventListener() impostandolo a true (di default è false):
            </p>
            <JavascriptCode code={`
                const primoDiv = document.getElementById('primoDiv');
                primoDiv.addEventListener('click', (event) => {
                    console.log('Primo Div cliccato!');
                }, true);
                
                const primoP = document.getElementById('primoP');
                primoP.addEventListener('click', (event) => {
                    console.log('Primo P cliccato!');
                }, true);
                
                const secondoP = document.getElementById('secondoP');
                secondoP.addEventListener('click', (event) => {
                    console.log('Secondo P cliccato!');
                }, true);
            `}/>
            <p>Il risultato sarà il seguente:</p>
            <TerminalCode code={`
                Primo Div cliccato!
                Primo P cliccato!
            `}/>
            <p>Se infine volessimo prevenire la propagazione dell'evento dal paragrafo al div, si può utilizzare il
                metodo stopPropagation():
            </p>
            <JavascriptCode code={`
                const primoDiv = document.getElementById('primoDiv');
                primoDiv.addEventListener('click', (event) => {
                    console.log('Primo Div cliccato!');
                });
            
                const primoP = document.getElementById('primoP');
                primoP.addEventListener('click', (event) => {
                    event.stopPropagation();
                    console.log('Primo P cliccato!');
                });
                
                const secondoP = document.getElementById('secondoP');
                secondoP.addEventListener('click', (event) => {
                    console.log('Secondo P cliccato!');
                });
            `}/>
            <p>In tal caso l'evento sarà catturato solo dal paragrafo, senza propagarsi al div:</p>
            <TerminalCode code={`
                Primo P cliccato!
            `}/>

            {/* <h3>Pattern Delegation</h3> -> [TO COMPLETE] e.target.closest('button') for example */}

             

        </div>
    );
};

export default EventJS;