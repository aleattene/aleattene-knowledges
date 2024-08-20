import React from 'react';
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";


const Sql: React.FC = () => {
    return (
        <div>
            <h1>Classi Python</h1>
            <p>Le classi in Python sono usate per creare nuovi oggetti. Un oggetto è un'istanza di una classe.</p>
            <h3>Costruttore</h3>
            <p>Nelle classi python il costruttore è un metodo speciale che viene chiamato automaticamente (non solo per
                eseguire codice, ma anche per allocare spazio in memoria) quando viene creato un nuovo oggetto
                (istanza della classe).
                Esso si trova all'interno della classe ed è rappresentato dal metodo <code>__init__</code>.
            </p>
            <p>Esempio:</p>
            <PythonCode code={`
                // Definizione di una classe Student
                class Student:
                    def __init__(self, name, surname, age):
                        self.name = name
                        self.surname = surname
                        self.age = age
                
                # Creazione di un oggetto Student     
                student = Student("Mario", "Rossi", 25)   
            `}/>
    </div>
    );
};

export default Sql;