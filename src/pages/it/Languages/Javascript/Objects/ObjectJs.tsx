import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const inOperator = `
    const person = {
        name: 'Alessandro',
        age: 45
    };
    
    name in person      // true
    surname in person;  // false
`;

const hasMethod = `
    const person = {
        name: 'Alessandro',
        age: 45
    };
    
    Reflect.has(person, 'name'); // true
    Reflect.has(person, 'surname'); // false
`;

const ObjectJs: React.FC = () => {
    return (
        <div>
            <h1>Javascript</h1>
            <h2>Verificare in un oggetto se è presente una determinata chiave.</h2>
            <p>Si può utilizzare l'operatore
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> in </code>
                </a>
            </p>
            <p><JavascriptCode code={inOperator}/></p>
            <p> oppure il metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> has() </code>
                </a>
            </p>
            <p><JavascriptCode code={hasMethod}/></p>
            <h2>Freeze</h2>
            <p>Questo metodo statico consente di congelare un oggetto, cioè di impedirne la modifica.</p>
            <JavascriptCode code={`
                // Creazione di un Literal Object
                const person = {
                    name: 'Alessandro',
                    age: 45
                };
                
                // Congelamento dell'oggetto
                Object.freeze(person);
                
                // Tentativo (inefficace) di modifica dell'oggetto
                person.age = 46;                
                console.log(person.age);        // 45
                
                // Tentativo (inefficace) di aggiungere una nuova proprietà all'oggetto
                person.surname = 'Attene';      
                console.log(person.surname);    // undefined
                
                // Tentativo (inefficace) di eliminare una proprietà dell'oggetto
                delete person.age;              
                console.log(person.age);        // 45
                (???)
            `}/>
        </div>
    );
};

export default ObjectJs;