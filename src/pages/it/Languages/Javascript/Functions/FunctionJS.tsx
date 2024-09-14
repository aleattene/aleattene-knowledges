import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const functionJS: React.FC = () => {
    return (
        <div>
            <h1>Funzioni in JavaScript</h1>
            <p>Le funzioni sono di fatto un blocco di codice che esegue un'azione specifica.
                Per definire una funzione in JavaScript, si utilizza la parola chiave <code>function</code>,
                seguita dal nome della funzione, una lista di parametri (che saranno valorizzati con gli argomenti
                passati in fase di chiamata) tra parentesi tonde e il blocco di codice racchiuso tra parentesi graffe.
            </p>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                // 1 - Definizione di una funzione chiamata greet
                function greet(parametro1, ... , parametroN) {
                    // Corpo della funzione
                };
                
                // 2 - Chiamata alla funzione greet
                greet(argomento1, ... , argomentoN);
            `}/>
            <h3>Esempio (somma due numeri):</h3>
            <JavascriptCode code={`
                // 1 - Definizione di una funzione chiamata somma
                function somma(a, b) {
                    return a + b;
                };
                
                // 2 - Chiamata alla funzione somma
                const risultato = somma(5, 3);
                
                console.log(risultato); 
            `}/>
            <p>Output:</p>
            <TerminalCode code={`8`}/>
            <p>Potrebbe per molti essere utile osservare che nel codice JS è possibile chiamare una
                funzione anche prima che sia stata definita, come mostrato nell'esempio seguente:</p>
            <JavascriptCode code={`
                // Chiamata alla funzione somma
                const risultato = somma(5, 3);
                
                // Definizione della funzione somma
                function somma(a, b) {
                    return a + b;
                };
                
                console.log(risultato); 
            `}/>
            <p>Questo è possibile grazie al meccanismo di <strong>hoisting</strong> che sposta tutte le dichiarazioni
                di funzioni all'inizio dello script.
            </p>
            <p>Quanto appena affermato non vale però per le arrow functions, che quindi al contrario, non possono essere
                chiamate prima della loro definizione.
            </p>
            <p>Nonostante la possibilità di sfruttre il meccanismo di hoisting resta comunque il fatto che come best
                practice è sempre meglio definire le funzioni all'inizio dello script, sia in termini di manutenibilità
                che letture future anche da parte di altri sviluppatori che dovessero mettere mano al nostro codice.
            </p>

            <h2>Chiamate Dirette ed Indiretta ad una funzione</h2>
            <p>Per comprendere questo meccanismo simuliamo di avere un bottone che al click esegue una funzione di
                saluto:</p>
            <JavascriptCode code={`
                // Codice HTML con Bootstrap
                <\button id="btn-saluta" class="btn btn-primaty">Saluta</button>
                
                // Codice JavaScript che referenzia il bottone
                const btnSaluta = document.getElementById('btn-saluta');
                
                // Funzione che saluta
                function saluta() {
                    alert('Ciao!');
                }
                
                // Aggiunta di un event listener al bottone (chiamata indiretta che esegue la funzione saluta al click)
                btnSaluta.addEventListener('click', saluta);    // SI - Questa chiamata esegue la funzione al click
                btnSaluta.addEventListener('click', saluta());  // NO - Questa chiamata esegue subito la funzione
                
                
                // Chiamata diretta alla funzione saluta
                saluta;     // NO - Questa chiamata non esegue la funzione
                saluta();   // SI - Questa chiamata esegue la funzione  
            `}/>

            <p>Una funzione all'interno di un oggetto è chiamata metodo. Per esempio, <code>toUpperCase</code> è un
                metodo della stringa:</p>
            <JavascriptCode code={`
                const stringa = 'ciao';
                console.log(stringa.toUpperCase()); // CIAO
            `}/>
            <p>Volendo possiamo anche avere funzioni (metodi) all'interno dei literal object:</p>
            <JavascriptCode code={`
                const persona = {
                    nome: 'Alessandro',
                    eta: 45,
                    saluta: function() {
                        console.log('Ciao...!');
                    }
                };
                
                persona.saluta(); // Ciao...!
            `}/>
            <p>Anche con le function è possibile utilizzare typeof:</p>
            <JavascriptCode code={`
                console.log(typeof saluta);     // function
            `}/>
            <p>Le funzioni sono di fatto degli oggetti che hanno una particolare struttura e proprietà:</p>
            <JavascriptCode code={`
                function saluta() {
                    console.log('Ciao...!');
                }
                
                console.dir(saluta);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                ƒ saluta()
                    length: 0
                    name: "saluta"
                    arguments: null
                    caller: null
                    prototype: {constructor: ƒ}
                    __proto__: ƒ ()
                    [[FunctionLocation]]: VM101:1
                    [[Scopes]]: Scopes[1]
            `}/>
            <p>In JS le funzioni possono anche essere assegnate a variabili:</p>
            <JavascriptCode code={`
                // Anonymous Function (funzione anonima)
                const saluta = function() {
                    console.log('Ciao...!');
                };
                
                saluta(); // Ciao...!
            `}/>
            <p>In questo caso però non è possibile utilizzare il meccanismo di hoisting, quindi la funzione va
                necessariamente definita prima di essere chiamata.
            </p>

            <h3>Arrow Function (lambda function)</h3>
            <p>Le arrow function sono una nuova sintassi introdotta in ES6 per creare funzioni in modo più conciso e
                leggibile.
            </p>
            <p>Anche le arrow function non possono essere chiamate prima della loro definizione, poiché infatti non
                supportano il meccanismo di hoisting.
            </p>
            <p>Sintassi:</p>
            <JavascriptCode code={`,
                // Arrow Function
                const saluta = () => { console.log('Ciao...!'); };
                
                saluta(); // Ciao...!
                
                // Arrow Function con un parametro
                const saluta = nome => { console.log('Ciao ' + nome + '...!'); };
                
                saluta('Alessandro'); // Ciao Alessandro...!
                
                // Arrow Function con più parametri
                const somma = (a, b) => { return a + b; };
                const somma = (a, b) => a + b; // Sintassi ancora più concisa
            `}/>

            <h3>Default Parameters</h3>
            <p>I default parameters sono quei parametri che se non valorizzati opportunamente durante la chiamata
                (tramite il passaggio di argomenti) assumono comunque un valore di default.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                function saluta(nome = 'Alessandro') {
                    console.log('Ciao ' + nome + '...!');
                }
                
                saluta();           // Ciao Alessandro...!
                saluta('Marco');    // Ciao Marco...!
            `}/>

            <h3>Rest Parameters</h3>
            <p>I rest parameters sono quei parametri che permettono di passare un numero variabile di argomenti ad una
                funzione (devono essere sempre gli ultimi parametri della lista).
                Sono rappresentati da tre punti <code>...</code> seguiti dal nome del parametro.
                Il parametro che segue i tre punti sarà un array (costruito a runtime) contenente tutti gli argomenti
                passati alla funzione.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                function somma(...numeri) {
                    let risultato = 0;
                    for (const numero of numeri) {
                        risultato += numero;
                    }
                    return risultato;
                }
                
                console.log(somma(1, 2, 3, 4, 5));
            `}/>
            <p>Output:</p>
            <TerminalCode code={`15`}/>

            <p>Rest Parameters con altri parametri</p>
            <JavascriptCode code={`
                function somma(primo, secondo, ...restanti) {
                    let risultato = primo + secondo;
                    for (const numero of restanti) {
                        risultato += numero;
                    }
                    return risultato;
                }
                
                console.log(somma(1, 2, 3, 4, 5));
                console.log(somma(1, 2));
                console.log(somma(1, 2, 3));
            `}/>
            <p>Output:</p>

            <TerminalCode code={`
                15
                3
                6
            `}/>





        </div>
    );
};


export default functionJS;
