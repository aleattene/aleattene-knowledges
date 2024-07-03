import React from 'react';
import Table from "../../../../components/Table/Table.tsx";


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

const Python: React.FC = () => {
    return (
        <div>
            <h1>Python</h1>

            <h2>Metodi delle Liste</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonListMethods} />

            <h2>Metodi dei Dizionari</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonDictMethods} />

            <h2>Metodi dei Set</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonSetMethods} />
        </div>
    );
};

export default Python;


