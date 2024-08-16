import React from 'react';
import './ListPy.css'
import Table from "../../../../../components/Table/Table.tsx";
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";

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
            <p>Le liste sono istanze della classe List.</p>
            <p>Esempi di utilizzo:</p>
            <PythonCode code={`
                # Inizializzazione
                my_list = []                # monodimensionale
                my_list = [1, 2, 3]
                my_list = list()            # costruttore della classe List
                my_list = [[1, 2], [3, 4]]  # bidimensionale (liste innestate)
            `}/>
            <p>[TO FIX] Slicing: possibile utilizzarlo sia per le liste che per le stringhe.</p>
            <PythonCode code={`
                # Inserimento nuovo elemento (metodo append della classe List) in fondo alla lista
                my_list = [10, 20, 30]
                my_list.append(50)      # [10, 20, 30, 50]
                
                # Inserimento nuovo elemento (metodo insert della classe List) in posizione specifica (indice)
                my_list.insert(3, 40)   # [10, 20, 30, 40, 50]
            `}/>
            <PythonCode code={`
                # Cancellare un elemento
                my_list = [10, 20, 30]
                del my_list(1)          # [10, 30]
            `}/>
            <PythonCode code={`
                # Operatore in (iterare tra gli elementi all'interno di una lista)
                my_list = [10, 20, 30]
                20 in my_list       # True (boolean)
                15 in my_list       # False
            `}/>
            <PythonCode code={`
                # Due Nomi per un'unica lista
                my_list = [10, 20, 30]
                
                my_list2 = mylist       # copia per referenza (entrambe puntano allo stesso indirizzo di memoria)
                
                my_list2[1] = 60        # modifico valore secondo elemento
                
                print(my_list2)         # Output: [10, 60, 30]
                print(my_list)          # Output: [10, 60, 30]
            `}/>
            <PythonCode code={`
                # Copia di una lista (con funzione copy)
                my_list = [10, 20, 30]
                
                my_list2 = my_list.copy()        # duplicazione lista
                my_list2[1] = 60                 # modifica elemento
                 
                print(my_list2)     # Output: [10, 60, 30] modificata solo questa lista
                print(my_list)      # Output: [10, 20, 30] lista originale non modificata
            `}/>






            <h2>Metodi delle Liste</h2>
            <Table headers={['Metodo', 'Descrizione', 'Esempio']} data={pythonListMethods}/>
        </div>
    );
};

export default ListPy;