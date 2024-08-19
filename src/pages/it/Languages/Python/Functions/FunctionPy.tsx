import React from "react";
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";

const FunctionPy: React.FC = () => {
    return (
        <div>
            <h1>Funzioni</h1>
            <p>In python una funzione è un oggetto chiamato <code>callable object</code>.</p>
            <h3>Dichiarazione della funzione:</h3>
            <PythonCode code={`
                def name_function(parameters):
                    statements
            `}/>
            <p>Relativamente a questa sintassi possiamo aggiungere che:
                <ul>
                    <li><code>def</code> : è una parola chiave che indica l'inizio della definizione di una funzione;</li>
                    <li><code>name_function</code> : è il nome della funzione;</li>
                    <li><code>parameters</code> : è la lista dei parametri che la funzione accetta; sono opzionali ed in
                        fase di chiamata della funzione vengono valorizzati con il valore degli argomenti passati;
                    </li>
                    <li><code>statements</code> : sono le istruzioni che la funzione eseguirà una volta che sarà
                        chiamata/invocata.
                    </li>
                </ul>
            </p>
            <h3>chiamata / Invocazione di una funzione:</h3>
            <PythonCode code={`
                name_function(arguments)
            `}/>
            <p>Come abbiamo già detto, gli <code>arguments</code> sono i valori che valorizzeranno i parametri della
                funzione.
            </p>
            <h3>Esempio:</h3>
            <PythonCode code={`
                # Definizione della funzione
                def greet(name):
                    print(f"Hello {name}")
                    
                # Chiamata della funzione    
                greet("Alice")
            `}/>
            <p>Output:</p>
            <PythonCode code={`
                Hello Alice
            `}/>
        </div>
    );
}

export default FunctionPy;