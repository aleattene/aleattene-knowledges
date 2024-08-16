import React from 'react';
import './DictionaryPy.css'
import Table from "../../../../../components/Table/Table.tsx";
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";


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
            <p>I dizionari, rispetto alle liste ed alle tuple, non hanno un ordinamento definito degli elementi.
                Essi sono composti da coppi <code>chiave: valore</code> e sono istanze della classe <code>Dict</code>.
                Per accedere al valore di un elemento, non essendo presente un ordinamento (quindi nessun indice),
                si utilizza la chiave (che deve essere univoca, di qualunque tipo ed immutabile) associata al valore.
            </p>
            <h3>Esempi di utilizzo:</h3>
            <PythonCode code={`
                # Creazione di un dizionario vuoto
                my_dict = {}
                my_dict = dict()
                
                # Inizializzazione di un dizionario con valori
                my_dict = { 'primo': 10 , 'secondo': 20 }
                
                # Modifica valore di un elemento (sintassi ed esempio)
                dizionario[chiave_presente] = nuovo_valore
                
                my_dict['primo'] = 0
                print(my_dict)          # { 'primo': 0 , 'secondo': 20 }
                
                # Aggiunta di un elemento (sintassi ed esempio)
                dizionario[chiave_non_presente] = valore
                
                my_dict['terzo'] = 30
                print(my_dict)      # { 'primo': 0 , 'secondo': 20, 'terzo': 30 }
                
                # Cancellazione di un elemento (sintassi ed esempio)
                del dizionario[chiave_presente]
                
                del my_dict['primo']
                print(my_dict)      # { 'secondo': 20, 'terzo': 30 }
                
                # Svuotamento dizionario (cancellando tutte le chiavi e valori)
                my_dict.clear()
                my_dict = {}
            `}/>
            <p>Quando si vuole verificare la presenza o meno di una chiave in un dizionario si può usare l'operatore
                <a href={'#'}>
                    <code className={'documentation-link'} > in </code>
                </a>:
            </p>
            <PythonCode code={`
                my_dict = { 'primo': 10 , 'secondo': 20 }
                'primo' in my_dict       # True
                'decimo' in my_dict       # False
            `}/>
            <p>Molto interessante ed utile la possibilità di copia di un dizionario:</p>
            <PythonCode code={`
                my_dict = { 'primo': 10, 'secondo': 20 }
                
                my_dict2 = my_dict          # puntano entrambi allo stesso indirizzo di memoria 
                
                print(my_dict)      # { 'primo': 10 , 'secondo': 20 }
                print(my_dict2)     # { 'primo': 10 , 'secondo': 20 }
                
                my_dict2 = my_dict.copy()   # puntano a due indirizzi/oggetti differenti
                
                # Modifica di un valore in my_dict
                my_dict['primo'] = 0
                
                print(my_dict)      # { 'primo': 0 , 'secondo': 20 }
                print(my_dict2) # { 'primo': 10 , 'secondo': 20 }
                
                # Modifica di un valore in my_dict2
                my_dict2['secondo'] = 0
                
                print(my_dict) # { 'primo': 0 , 'secondo': 20 }
                print(my_dict2) # { 'primo': 10 , 'secondo': 0 }
            `}/>
            <h3>Metodo Items</h3>
            <p>Il metodo <code>items()</code> ritorna una lista contenente una tupla per ogni coppia chiave-valore.</p>
            <PythonCode code={`
                my_dict1 = { 10: 'a', 20: 'b'}
                my_dict2 = { 30: 'c' }
                
                list1 = my_dict1.items()        # riferimento ad oggetto di tipo dict-items (iteratore)
                list2 = my_dict2.items()        
                
                print(list1)        # [ (10, 'a'), (20, 'b')]
                print(list2)        # [ (30, 'c') ]
                
                # Possibile conversione (da lista di tuple a dizionario)
                my_dict3 = dict(list1)      # { 10: 'a', 20: 'b'}
                
                # Possibili ulteriori modifiche
                my_dict3.update(dict(list2))       # { 10: 'a', 20: 'b', 30: 'c'}
            `}/>
            <p><i>In questo ultimo caso abbiamo aggiornato il dizionario my_dict3 aggiungendo ad esso le coppie
                chiave-valore del dizionario ottenuto trasformando la lista di tuple list2 in un dizionario.</i>
            </p>




            <h2>Metodi dei Dizionari</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonDictMethods}/>
        </div>
    );
};

export default DictionaryPy;