import React from "react";
import JavascriptCode from "../../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const CalculatorJS: React.FC = () => {
    return (
        <div>
            <h2>Calcolatrice</h2>
            <p>Proviamo a realizzare una semplice Calcolatrice (???).</p>
            <JavascriptCode code={`
                // File index.html
                <\!DOCTYPE html>
                ...
                <body>
                    <h1>Calcolatrice</h1>
                    <input type="number" id="num1">
                    <input type="number" id="num2">
                    <button id="add">+</button>
                    <button id="subtract">-</button>
                    <button id="multiply">*</button>
                    <button id="divide">/</button>
                    <button id="modulo">%</button>
                    <button id="power">**</button>
                    
                    <div id="result">Result:</div>
                ...
                </body>
                ...
                </html>
            `}/>
            <JavascriptCode code={`
                // File Operations.js           
                
                // Funzione per sommare due numeri
                function add(a, b) { return a + b; }
                
                // Funzione per sottrarre due numeri
                function subtract(a, b) { return a - b; }
                
                // Funzione per moltiplicare due numeri
                function multiply(a, b) { return a * b; }
                
                // Funzione per dividere due numeri
                function divide(a, b) { return a / b; 
                
                // Funzione per calcolare il modulo di due numeri
                function modulo(a, b) { return a % b; }
                
                // Funzione per calcolare la potenza di un numero
                function power(a, b) { return a ** b; }
            `}/>
            <JavascriptCode code={`
                // File main.js
                
                // Acquisizione dati utente
                const num1 = Number(document.getElementById('num1').value));
                const num2 = Number(document.getElementById('num2').value));
                
                // Risultato
                const result = document.getElementById('result');
                
                // Bottone Somma
                const addBtn = document.getElementById('add');
                addBtn.addEventListener('click', () => { 
                    result.innerHTML = add(num1, num2);
                });
                             
                // Bottone Sottrazione                
                const subtractBtn = document.getElementById('subtract');
                subtractBtn.addEventListener('click', () => { 
                    result.innerHTML = subtract(num1, num2);
                });
                
                // Bottone Moltiplicazione
                const multiplyBtn = document.getElementById('multiply');
                multiplyBtn.addEventListener('click', () => { 
                    result.innerHTML = multiply(num1, num2);
                });
                
                // Bottone Division
                const divideBtn = document.getElementById('divide');
                divideBtn.addEventListener('click', () => { 
                    result.innerHTML = divide(num1, num2);
                });
                
                // Bottone Modulo
                const moduloBtn = document.getElementById('modulo');
                moduloBtn.addEventListener('click', () => { 
                    result.innerHTML = modulo(num1, num2);
                });
                
                // Bottone Potenza
                const powerBtn = document.getElementById('power');
                powerBtn.addEventListener('click', () => { 
                    result.innerHTML = power(num1, num2);
                });
            `}/>
            {/* [TO FIX] Differenza interessante tra parseInt e Number (oltre che +string -> number) */}
            {/* [TO FIX] Possibile Evoluzione con Switch-Case (operation) -> case SUM / SUB / etc */}

        </div>
    );
}

export default CalculatorJS;