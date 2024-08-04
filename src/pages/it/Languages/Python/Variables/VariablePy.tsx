import React from 'react';
import './VariablePy.css'
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";

const VariablePy: React.FC = () => {
    return (
        <div>
            <h1>Variabili</h1>
            <p>Una variabile è sostanzialmente una blackbox (cella di memoria) che:</p>
            <ul>
                <li>ha un nome (identificativo per noi esseri umani che mappa a sua volta l'indirizzo di memoria)</li>
                <li>contiene un valore (il cui tipo viene inferito dal valore stesso)</li>
            </ul>
            <p>Per dichiarare (ed anche inizializzare e tipizzare dinamicamente) una variabile in Python, si può
                utilizzare la seguente sintassi:</p>
            <PythonCode code={`
                # Dichiarazione di una variabile (naming convention: snake_case)
                nome_variabile = valore
                
                # Esempio
                eta = 30
                
                # Solo dichiarazione (non possibile)
                y # Errore y non è stata inizializzata
                
                # Dichiarazione multipla
                x, y, z = 10, 20, 30
                print(x) # Output: 30
                print(y) # Output: 20
                print(z) # Output: 30
                
                x = y = z = 10
                print(x) # Output: 10
                print(y) # Output: 10
                print(z) # Output: 10
                
                # Unpack di una lista
                lista = [10, 20, 30]
                x, y, z = lista
                print(x) # Output: 10
                print(y) # Output: 20
                print(z) # Output: 30                
            `}/>
            <p>In Python come abbiamo anticipato poco sopra, le variabili sono puntatori (riferimenti) ad oggetti
                memorizzati in memoria.
                Ad esempio se dichiariamo una variabile <code>x = 10</code>, in realtà stiamo dicendo a Python di:
            </p>
            <ul>
                <li>creare un oggetto di tipo <code>int</code> con valore <code>10</code></li> e memorizzarlo in memoria
                <li>assegnare all'identificativo <code>x</code> il riferimento in memoria a tale oggetto</li>
            </ul>
            <p>Dopodiché se dichiariamo <code>x = "Alessandro"</code>, stiamo dicendo a Python di:
            </p>
            <ul>
                <li>creare un oggetto di tipo <code>str</code> con valore <code>"Alessandro"</code></li> e memorizzarlo
                    in memoria
                <li>assegnare all'identificativo <code>x</code> il riferimento in memoria a tale oggetto</li>
                <li>il vecchio riferimento all'oggetto di tipo <code>int</code> con valore <code>10</code> può non
                    essere più considerato e quindi se non ha altri riferimenti attivi e validi può essere rimosso
                    dalla memoria tramite il Garbage Collector (raccoglitore di rifiuti); ovvero in un momento
                    successivo il Garbage Collector si accorge che l'oggetto non è più referenziato e quindi lo
                    eliminerà liberando spazio in memoria
                </li>
            </ul>
            <h3>Naming convention</h3>
            <p>Le variabili in Python devono essere nominate secondo la seguente convenzione (PEP 8):</p>
            <ul>
                <li>snake_case come aggregatore di parole (es. <code>nome_variabile</code>)</li>
                <li>devono iniziare con una lettera o un underscore <code>_</code> (no numeri)</li>
                <li>può contenere lettere, numeri e underscore</li>
                <li>non devono contenere spazi e trattini</li>
            </ul>
            <p>Esempio:</p>
            <PythonCode code={`
                # Nomi validi
                nome = "Alessandro"
                eta = 30
                _variabile = 10
                variabile_2 = 20
                variabile3 = 30
                variabile4 = 40
                
                # Nomi non validi
                1variabile = 10
                variabile-5 = 50
                variabile 6 = 60
            `}/>
            <h3>Tipi di Dato</h3>

        </div>
    );
};

export default VariablePy;