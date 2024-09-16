import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";


const FindNumber: React.FC = () => {
    return (
        <div>
            <h1>Indovina il Numero</h1>
            <p>Step:
                - Generare un numero casuale tra 1 e 100
                - Chiedere all'utente di indovinare il numero
                - Se il numero inserito è maggiore del numero casuale, stampare "Il numero è troppo alto" visualizzando
                    lo storico dei tentativi
                - Se il numero inserito è minore del numero casuale, stampare "Il numero è troppo basso"
                    visualizzando lo storico dei tentativi
                - Se il numero inserito è uguale al numero casuale, stampare "Congratulazioni, hai indovinato il
                numero!" e chiedere se si vuole giocare ancora oppure smettere
            </p>

            <h3>Implementazione:</h3>
            <h3>Generazione del numero casuale:</h3>
            <p>Per generare un numero casuale tra 1 e 100, possiamo utilizzare il metodo <code>Math.random()</code>
                che restituisce un numero casuale tra 0 e 1. Moltiplicando il risultato per 100 e sommando 1,
                otteniamo un numero casuale tra 1 e 100.
            </p>
            <JavascriptCode code={`
                // Generazione di un numero casuale tra 1 e 100
                function getRandomNumber(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                
                const randomNumber = getRandomNumber(1, 100);     
            `}/>

            <h3>Chiedere all'utente di indovinare il numero:</h3>
            <p>Per chiedere all'utente di indovinare il numero, possiamo utilizzare il metodo <code>prompt()</code>
                che visualizza un messaggio di input per l'utente.
            </p>
            <JavascriptCode code={`
                // Chiedere all'utente di indovinare il numero (lato Node e lato Browser)
                const userNumber = Number(prompt("Indovina il numero tra 1 e 100"));
                
                <\input type="number" placeholder="Indovina il numero tra 1 e 100" id="userNumber"/>
                <button onclick="guessNumber()">Indovina</button>
                <button onclick="guessNumber()">Ricomincia</button>
                
                function guessNumber() {
                    const userNumber = Number(document.getElementById("userNumber").value);
                }
            `}/>

            <h3>Verifica del numero inserito:</h3>
            <p>Per verificare se il numero inserito dall'utente è maggiore, minore o uguale al numero casuale,
                possiamo utilizzare un costrutto <code>if-else</code>.
            </p>
            <JavascriptCode code={`
                // Verifica del numero inserito
                if isNaN(userNumber) {
                    console.log("Inserisci un numero valido");
                }
                if (userNumber > randomNumber) {
                    console.log("Il numero è troppo alto");
                } else if (userNumber < randomNumber) {
                    console.log("Il numero è troppo basso");
                } else {
                    console.log("Congratulazioni, hai indovinato il numero!");
                }
            `}/>

            <h3>Visualizzazione dello storico dei tentativi:</h3>
            <p>Per visualizzare lo storico dei tentativi, possiamo utilizzare un array per memorizzare i tentativi
                dell'utente.
            </p>
            <JavascriptCode code={`
                // Array per memorizzare i tentativi dell'utente
                const attempts = [];
                
                // Aggiunta del tentativo all'array
                attempts.push(userNumber);
                
                // Visualizzazione dello storico dei tentativi
                console.log("Tentativi:", attempts.join(", "));
            `}/>

            <h3>Chiedere all'utente se vuole giocare ancora:</h3>
            <p>Per chiedere all'utente se vuole giocare ancora, possiamo utilizzare il metodo <code>confirm()</code>
                che visualizza un messaggio di conferma per l'utente.
            </p>
            <JavascriptCode code={`
                // Chiedere all'utente se vuole giocare ancora
                const playAgain = confirm("Vuoi giocare ancora?");
                
                // Se l'utente vuole giocare ancora, ricomincia il gioco
                if (playAgain) {
                    // Ricomincia il gioco
                }
            `}/>

            <p> Implementazione da fixare e completare .... (work in progress)</p>

        </div>
    );
};

export default FindNumber;