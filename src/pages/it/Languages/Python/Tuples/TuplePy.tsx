import React from 'react';
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";
const Python: React.FC = () => {
    return (
        <div>
            <h1>Tuple</h1>
            <p>Le tuple sono strutture dati simili alle liste, ma immutabili. Sono degli oggetti della classe Tuple.</p>
            <p>Esempi di utilizzo:</p>
            <PythonCode code={`
                # Inizializzazione tupla vuota
                medaglie = ()
                medaglie = tuple()
                
                # Inizializzazione tupla con valori
                medaglie = 'oro', 'argento', 'bronzo'
                medaglie = ('oro', 'argento', 'bronzo')
            `}/>
            <p>Con le tuple è possibile effettuare il cd <code>unpacking</code> similmente al
                <code>destructuring</code> in JavaScript:</p>
            <PythonCode code={`
                medaglie = 'oro', 'argento', 'bronzo'
                a, b, c = medaglie
                print(a) # oro
                print(b) # argento
                print(c) # bronzo
            `}/>
        </div>
    );
};

export default Python;