import React from 'react';
import './SetPy.css'
import Table from "../../../../../components/Table/Table.tsx";
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";

const pythonSetMethods = [
    { Method: 'add()', Description: 'Aggiunge un elemento al set.', Example: 'my_set.add(1)' },
    { Method: 'clear()', Description: 'Rimuove tutti gli elementi dal set.', Example: 'my_set.clear()' },
    { Method: 'pop()', Description: 'Rimuove e ritorna un elemento casuale dal set.', Example: 'my_set.pop()' },
    { Method: 'union()', Description: 'Ritorna un nuovo set contenente tutti gli elementi di entrambi i set.', Example: 'my_set.union(other_set)' },
    { Method: 'issuperset()', Description: 'Ritorna True se il set corrente contiene tutti gli elementi di un altro set.', Example: 'my_set.issuperset(other_set)' },
    { Method: 'issubset()', Description: 'Ritorna True se il set corrente è contenuto in un altro set.', Example: 'my_set.issubset(other_set)' },
    { Method: 'intersection()', Description: 'Ritorna un nuovo set contenente gli elementi comuni ai set.', Example: 'my_set.intersection(other_set)' },
    { Method: 'difference()', Description: 'Ritorna un nuovo set contenente gli elementi del set corrente che non sono nel set passato come argomento.', Example: 'my_set.difference(other_set)' },
    { Method: 'isdisjoint()', Description: 'Ritorna True se i due set non hanno elementi in comune.', Example: 'my_set.isdisjoint(other_set)' },
    { Method: 'discard()', Description: 'Rimuove un elemento dal set se esiste.', Example: 'my_set.discard(1)' },
    { Method: 'copy()', Description: 'Ritorna una copia del set.', Example: 'new_set = my_set.copy()' },
];

const SetPy: React.FC = () => {
    return (
        <div>
            <h1>Set Python</h1>
            <p>I set (insiemi) sono oggetti della classe <code>Set</code> e vengono utilizzati come contenitore di
                elementi univoci. Sono simili ai dizionari, dai quali però sono eliminati tutti i valori e mantenute
                solamente le chiavi.</p>
            <p>Esempi di utilizzo:</p>
            <PythonCode code={`
                my_set = set()
                my_set = set([10,20,30,40]) # lista-parametro del costruttore di Set
                my_set = {10, 20, 30, 40} # literal form
                # my_set = {} NO -> creerebbe un dizionario vuoto, non un insieme vuoto
                my_set.add(50) # {10, 20, 30, 40, 50}
            `}/>
            <p>Interessante osservazione di può fare con i <code>frozenset</code> che sono set immutabili.</p>
            <PythonCode code={`
                my_set = frozenset([10,20,30,40])
                my_set.add(50)      # AttributeError: 'frozenset' object has no attribute 'add'
            `}/>
            <p>L'errore appena ottenuto deriva dal fatto che <code>add()</code> è un metodo della classe
                <code>Set</code> e non di <code>Frozenset</code>.</p>
            <p>Anche per i set è possibile utilizzare l'operatore <code>in</code> :</p>
            <PythonCode code={`
                my_set = {10, 20, 30, 40}
                10 in my_set    # True
                90 in my_set    # False
            `}/>
            <p>Ancora più interessanti sono però gli operatori insiemistici:</p>
            <PythonCode code={`
                # Dichiarazione Set
                my_set1 = {10, 20, 30, 40}
                my_set2 = {30, 40, 50, 60}
                
                # Intersezione (&) : ritorna gli elementi comuni ai due set
                set_intersection = my_set1 & my_set2    # {30, 40}
                
                # Unione (|) : ritorna un set contenente tutti gli elementi di entrambi i set (senza duplicati)
                set_union = my_set1 | my_set2            # {10, 20, 30, 40, 50, 60}
                
                # Differenza (-) : ritorna un set contenente gli elementi appartenenti al primo set ma non al secondo
                set_difference1 = my_set1 - my_set2        # { 10, 20 }
                set_difference2 = my_set2 - my_set1        # { 50, 60 }
                
                # OR esclusivo (^) : ritorna un set contenente gli elementi che non sono comuni ai due set
                set_symmetric_difference = my_set1 ^ my_set2    # {10, 20, 50, 60}
            `}/>
            <h2>Set Comprehension</h2>
            <p>La <code>Set Comprehension</code> è una sintassi che permette di creare un set in modo conciso.</p>
            <h3>Sintassi:</h3>
            <PythonCode code={`
                new_set = {expression for item in iterable if condition}
            `}/>
            <p>In questo caso è bene osservare che qualora l'espressione produca dei duplicati, questi non verranno
                ovviamente inseriti nel set.</p>
            <h3>Esempio:</h3>
            <PythonCode code={`
                # Stringa originale
                word = doppione
                
                # Creazione di un set con i caratteri della stringa (senza caratteri duplicati)
                my_set = { char for char in word }
                
                print(my_set)
            `}/>
            <p>Output:</p>
            <PythonCode code={`
                # Attenzione al fatto che l'ordine degli elementi non è garantito, ma è casuale
                { 'n', 'o', 'd', 'i', 'p', 'e' }
            `}/>




            <h2>Metodi dei Set</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonSetMethods}/>
        </div>
    );
};

export default SetPy;