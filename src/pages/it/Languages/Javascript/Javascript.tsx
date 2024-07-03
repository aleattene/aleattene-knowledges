import React from 'react';
import './Javascript.css'
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const hasMethod = `
    const person = {
        name: 'Alessandro',
        age: 45
    };
    
    Reflect.has(person, 'name'); // true
    Reflect.has(person, 'surname'); // false
`

const Javascript: React.FC = () => {
    return (
        <div>
            <h1>Javascript</h1>
            <h2>Verificare in un oggetto se è presente una determinata chiave.</h2>
            <p>Si utilizza il metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> has() </code>
                </a>
            </p>
            <p><JavascriptCode code={hasMethod}/></p>
        </div>
);
};

export default Javascript;