import React from 'react';
import './ListPy.css'
import Table from "../../../../../components/Table/Table.tsx";

const pythonListMethods = [
    { Method: 'append()', Description: 'Aggiunge un elemento alla fine della lista.', Example: 'my_list.append(4)' },
    { Method: 'copy()', Description: 'Ritorna una copia della lista.', Example: 'new_list = my_list.copy()' },
    { Method: 'count()', Description: 'Conta il numero di elementi con un valore specifico.', Example: 'my_list.count(4)' },
    { Method: 'insert()', Description: 'Inserisce un elemento alla posizione specificata.', Example: 'my_list.insert(1, "a")' },
    { Method: 'reverse()', Description: 'Inverte l\'ordine della lista.', Example: 'my_list.reverse()' },
    { Method: 'remove()', Description: 'Rimuove la prima occorrenza di un elemento con un valore specifico.', Example: 'my_list.remove(4)' },
    { Method: 'sort()', Description: 'Ordina la lista.', Example: 'my_list.sort()' },
    { Method: 'pop()', Description: 'Rimuove e ritorna l\'elemento alla posizione specificata.', Example: 'my_list.pop(1)' },
    { Method: 'extend()', Description: 'Aggiunge gli elementi di una lista (o di un qualsiasi iterabile) alla fine della lista corrente.', Example: 'my_list.extend([4, 5])' },
    { Method: 'index()', Description: 'Ritorna l\'indice della prima occorrenza di un elemento con un valore specifico.', Example: 'my_list.index(4)' },
    { Method: 'clear()', Description: 'Rimuove tutti gli elementi dalla lista.', Example: 'my_list.clear()' },
];

const ListPy: React.FC = () => {
    return (
        <div>
            <h1>Lista Python</h1>
            <h2>Metodi delle Liste</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonListMethods}/>
        </div>
    );
};

export default ListPy;