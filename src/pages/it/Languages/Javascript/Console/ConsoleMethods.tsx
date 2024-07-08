import React from 'react';
import './ConsoleMethods.css';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const ConsoleMethods: React.FC = () => {
    return (
        <div>
            <h1>Metodi della Console</h1>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/log"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> log </code>
                </a>
            </h3>
            <p>Questo metodo è usato per stampare messaggi o valori in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`console.log('Hello World!');`}/>
            <p> Output:</p>
            <TerminalCode code={`Hello World!`}/>
            <h4>Esempio</h4>
            <JavascriptCode code={'const x = 10;\nconsole.log(`The value of x is ${x}`);'}/>
            <p> Output:</p>
            <TerminalCode code={`The value of x is 10`}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> error </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per per stampare messaggi di errore in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`console.log('This is an error message');`}/>
            <p> Output:</p>
            <TerminalCode code={`This is an error message`}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/warn"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> warn </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per per stampare messaggi di warning in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`console.warn('This is a warning message');`}/>
            <p> Output:</p>
            <TerminalCode code={`This is a warning message`}/>

            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/info"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> info </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per per stampare messaggi informativi in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`console.info('This is an info message');`}/>
            <p> Output:</p>
            <TerminalCode code={`This is an info message`}/>

            // Table
            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/table"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> table </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per visualizzare una tabella in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`
            const fruits = [
                { id: 1, name: 'Apple' },
                { id: 2, name: 'Banana' },
                { id: 3, name: 'Cherry' }
            ];
            console.table(fruits);`}/>
            <p> Output:</p>
            <TerminalCode code={`
            ┌─────────┬─────┬─────────┐
            │ (index) │ id  │  name   │
            ├─────────┼─────┼─────────┤
            │    0    │  1  │ 'Apple' │
            │    1    │  2  │ 'Banana'│
            │    2    │  3  │ 'Cherry'│
            └─────────┴─────┴─────────┘
            `}/>

            // Assert
            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/assert"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> assert </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per verificare se un'espressione è vera o falsa e stampare un messaggio
                di errore se l'espressione è falsa.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`
            const nameOne = 'Alessandro';
            const nameTwo = 'Mario';
            const nameThree = 50;
            console.assert(typeof nameOne === typeof nameTwo, 'I due nomi sono dello stesso tipo');
            console.assert(typeof nameOne === typeof nameThree, 'I due nomi non sono dello stesso tipo');
            `}/>
            <p> Output:</p>
            <TerminalCode code={`
            Assertion failed: I due nomi non sono dello stesso tipo
            `}/>

            // Trace
            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/trace"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> trace </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per stampare una traccia dello stack di chiamate in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`
            const function a() = () => {
                console.trace("This is a function");
            }
            
            const function b() = () => {
                console.trace("This is b function");
            }
            
            const mainFunction = () => {
                a();
                b();
            }
            
            mainFunction();
            `}/>
            <p> Output (WIP):</p>
            <TerminalCode code={`
            This is a function
            console.trace
            a
            mainFunction
            ........  
            `}/>

            // Time
            <h3> Metodo
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/time"
                   target="_blank" rel="noopener noreferrer">
                    <code className='documentation-link'> time </code>
                </a>
            </h3>
            <p>Questo metodo è utilizzato per avviare un timer in console.</p>
            <h3>Esempio</h3>
            <JavascriptCode code={`
            console.time('Timer');
            const arr = [];
            for (let i = 0; i < 1000000; i++) {
                arr.push(i);
            }
            console.timeEnd('Timer');
            `}/>
            <p> Output:</p>
            <TerminalCode code={`
            Timer: 1.3ms
            `}/>

        </div>
    );
};

export default ConsoleMethods;