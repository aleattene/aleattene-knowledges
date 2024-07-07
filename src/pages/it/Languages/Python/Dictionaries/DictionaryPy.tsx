import React from 'react';
import './DictionaryPy.css'
import Table from "../../../../../components/Table/Table.tsx";


const pythonDictMethods = [
    { Method: 'copy()', Description: 'Ritorna una copia del dizionario.', Example: 'new_dict = my_dict.copy()' },
    { Method: 'clear()', Description: 'Rimuove tutti gli elementi dal dizionario.', Example: 'my_dict.clear()' },
    { Method: 'fromkeys()', Description: 'Ritorna un dizionario con le chiavi specificate e i valori impostati a value.', Example: 'dict.fromkeys(keys, value)' },
    { Method: 'items()', Description: 'Ritorna una lista contenente una tupla per ogni coppia chiave-valore.', Example: 'my_dict.items()' },
    { Method: 'get()', Description: 'Ritorna il valore della chiave specificata.', Example: 'my_dict.get("key")' },
    { Method: 'keys()', Description: 'Ritorna una lista con tutte le chiavi del dizionario.', Example: 'my_dict.keys()' },
    { Method: 'pop()', Description: 'Rimuove la chiave specificata e ritorna il valore corrispondente.', Example: 'my_dict.pop("key")' },
    { Method: 'values()', Description: 'Ritorna una lista con tutti i valori del dizionario.', Example: 'my_dict.values()' },
    { Method: 'update()', Description: 'Aggiorna il dizionario con le coppie chiave-valore di un altro dizionario.', Example: 'my_dict.update({"key": "value"})' },
    { Method: 'setdefault()', Description: 'Ritorna il valore della chiave specificata. Se la chiave non esiste, la aggiunge con il valore specificato.', Example: 'my_dict.setdefault("key", "default_value")' },
    { Method: 'popitem()', Description: 'Rimuove e ritorna l\'ultima coppia chiave-valore aggiunta.', Example: 'my_dict.popitem()' },
];


const DictionaryPy: React.FC = () => {
    return (
        <div>
            <h1>Dizionario Python</h1>
            <h2>Metodi dei Dizionari</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonDictMethods}/>
        </div>
    );
};

export default DictionaryPy;