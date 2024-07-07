import React from 'react';
import './StringPy.css'
import PythonCode from '../../../../../components/Code/PythonCode/PythonCode'
import TerminalCode from '../../../../../components/Code/TerminalCode/TerminalCode'

const StringPy: React.FC = () => {
    return (
        <div>
                <h1>Stringa Python</h1>
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

        </div>
    );
};

export default StringPy;