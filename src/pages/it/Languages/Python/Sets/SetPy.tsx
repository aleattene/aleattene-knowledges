import React from 'react';
import './SetPy.css'
import Table from "../../../../../components/Table/Table.tsx";

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
            <h2>Metodi dei Set</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonSetMethods}/>
        </div>
    );
};

export default SetPy;