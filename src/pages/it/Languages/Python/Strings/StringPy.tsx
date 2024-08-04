import React from 'react';
import './StringPy.css'
import PythonCode from '../../../../../components/Code/PythonCode/PythonCode'
import TerminalCode from '../../../../../components/Code/TerminalCode/TerminalCode'

const StringPy: React.FC = () => {
    return (
        <div>
            <h1>Stringa Python</h1>
            <p>Le stringhe in Python sono sequenze di caratteri, e possono essere definite utilizzando:</p>
            <ul>
                <li>singoli apici: <PythonCode code={'Ciao Mondo'} /></li>
                <li>doppie apici: <PythonCode code={"Ciao Mondo"} /></li>
                <li>triplice apice/doppio apice: <PythonCode code={`
                    # Triplice singolo apice
                    '''Ciao Mondo
                        Questa è una stringa multi-riga
                    '''
                    
                    # Triplice doppio apice
                    """Ciao Mondo
                       Anche questa è una stringa multi-riga
                    """
                `}/>
                </li>
            </ul>
            <p>Come abbiamo appena detto si tratta di una sequenza/collezione di caratteri, quindi possiamo trattarla
                in maniera simile:
            </p>
            <ul>
                <li>accesso ai singoli caratteri tramite indice che va da 0 a len(string) - 1 (o volendo a ritroso
                    dall'ultimo carattere che ha indice -1 sino al primo che ha valore -len(stringa)</li>
                <li>accesso a sotto-stringa tramite lo slice:
                    <PythonCode code={`
                        # Accesso ai singoli caratteri
                        stringa = 'Ciao Mondo'
                        stringa[0] # C
                        stringa[1] # i
                        ...
                        stringa[-1] # o
                        stringa[-2] # d
                        
                        # Accesso a sotto-stringa (da indice 0 incluso a indice 4 escluso)
                        stringa[0:4] # Ciao (step default di 1)
                        stringa[2:6] # ao M (da indice 2 incluso a indice 6 escluso)
                        stringa[:4] # Ciao (se non specificato il primo indice, parte da 0)
                        stringa[5:] # Mondo (se non specificato il secondo indice, arriva fino alla fine, default -1)
                        stringa[:] # Ciao Mondo (se non specificato nessun indice, prende tutta la stringa)
                        stringa[::1] # Ciao Mondo (prende tutta la stringe, step default di 1)
                        stringa[::2] # Ca od (prende tutta la stringa, step di 2 alla volta)
                        
                        stringa[0:4:2] # Ca (da indice 0 incluso a indice 4 escluso, con step di 2 alla volta)
                        
                        # Invertire una stringa
                        stringa[::-1] # odnoM oaiC (restituisce la stringa al contrario, step a ritroso se -1)
                        
                        stringa[-5,-2]  # Mon (da indice -5 incluso a indice -2 escluso) 
                        stringa[-2:-5:-1] # dno (da indice -2 a indice -5 escluso, con step a ritroso)
                    `}/>
                </li>
            </ul>
            <h3>Iterazione:</h3>
            <PythonCode code={`
            
                stringa = 'Ciao Mondo'
                
                for char in stringa:
                    print(char, end=' ') 
            `}/>
            <p>Output:</p>
            <TerminalCode code={`C i a o   M o n d o `}/>



                <h2>Formattazione</h2>

                <h3> Old string formatting with % - BAD PRACTICE </h3>

                <PythonCode code={`msg = 'hello world'\n'mgs: %s' % msg`}/>
                <p>Output:</p>
                <TerminalCode code={`msg: hello world`}/>

                <h3> Using string.format - ACCEPTABLE PRACTICE </h3>
                <PythonCode code={`msg = 'hello world'\n'mgs: {}'.format(msg)`}/>
                <p>Output:</p>
                <TerminalCode code={`msg: hello world`}/>

                <h3> Using f-strings - BEST PRACTICE </h3>
                <PythonCode code={`msg = 'hello world'\nf'mgs: {msg}'`}/>
                <p>Output:</p>
                <TerminalCode code={`msg: hello world`}/>


                <h2>Metodi Stringhe</h2>

                <h3>Capitalize</h3>
                <PythonCode code={`'Hello World'.capitalize()`}/>
                <p>Output:</p>
                <TerminalCode code={`Hello world`}/>

                <h3>Casefold</h3>
                <PythonCode code={`'Hello World'.casefold()`}/>
                <p>Output:</p>
                <TerminalCode code={`hello world`}/>

                <h3>Count</h3>
                <PythonCode code={`'Hello World'.count('o')`}/>
                <p>Output:</p>
                <TerminalCode code={`2`}/>

                <h3>Find</h3>
                <PythonCode code={`'Hello World'.find('World')`}/>
                <p>Output:</p>
                <TerminalCode code={`6`}/>

                <h3>Index</h3>
                <PythonCode code={`'Hello World'.index('Hello')`}/>
                <p>Output:</p>
                <TerminalCode code={`0`}/>

                <h3>Isalnum</h3>
                <PythonCode code={`'Hello World'.isalnum()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Isalpha</h3>
                <PythonCode code={`'Hello World'.isalpha()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Isascii</h3>
                <PythonCode code={`'Hello World'.isascii()`}/>
                <p>Output:</p>
                <TerminalCode code={`True`}/>

                <h3>Isdecimal</h3>
                <PythonCode code={`'Hello World'.isdecimal()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Isdigit</h3>
                <PythonCode code={`'Hello World'.isdigit()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Isidentifier</h3>
                <PythonCode code={`'Hello World'.isidentifier()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Islower</h3>
                <PythonCode code={`'Hello World'.islower()`}/>
                <p>Output:</p>
                <TerminalCode code={`True`}/>

                <h3>Isnumeric</h3>
                <PythonCode code={`'Hello World'.isnumeric()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Isprintable</h3>
                <PythonCode code={`'Hello World'.isprintable()`}/>
                <p>Output:</p>
                <TerminalCode code={`False`}/>

                <h3>Upper and Lower</h3>
                <PythonCode code={`
                stringa = 'Ciao Mondo'
                
                # Trasformazione della stringa in maiuscolo
                stringa.upper() # CIAO MONDO
                
                # Trasformazione della stringa in minuscolo
                stringa.lower() # ciao mondo
                `}/>

            <h3>Rimozione Spazi</h3>
            <PythonCode code={`
                stringa = '   Ciao Mondo   '
                
                # Rimozione spazi bianchi a sinistra
                stringa.lstrip()    # 'Ciao Mondo   '
                
                # Rimozione spazi bianchi a destra
                stringa.rstrip()    # '   Ciao Mondo'
                
                # Rimozione spazi bianchi a destra e sinistra
                stringa.strip()     # 'Ciao Mondo'
            `}/>
            <h3>Sostituzione Caratteri e Sotto-stringhe</h3>
            <PythonCode code={`
                stringa = 'Ciao Mondo'
                
                # Sostituzione di un carattere per tutte le occorrenze (senza modificare la stringa originale)
                new_string = stringa.replace('C', 'B') 
                
                print(new_string) # Biao Mondo
                print(stringa)    # Ciao Mondo
                
                new_string_all = stringa.replace('o', 'xyz')
                
                print(new_string_all) # Ciaxyz Mxyzndxyz
                print(stringa)        # Ciao Mondo
                               
                # Sostituzione di una sotto-stringa (senza modificare la stringa originale)
                new_substring = stringa.replace('Ciao', 'Buongiorno') 
                
                print(new_substring) # Buongiorno Mondo
                print(stringa)       # Ciao Mondo
            `}/>

        </div>
    );
};

export default StringPy;