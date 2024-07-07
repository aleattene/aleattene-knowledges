import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface PythonCodeProps {
    code: string;
}

const PythonCode: React.FC<PythonCodeProps> = ({ code }) => {
    return (
        <SyntaxHighlighter language="python" style={cb}>
            {code}
        </SyntaxHighlighter>
    );
};

export default PythonCode;
