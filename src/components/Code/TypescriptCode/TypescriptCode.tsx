import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface TypescriptCodeProps {
    code: string;
}

const TypescriptCode: React.FC<TypescriptCodeProps> = ({ code }) => {
    return (
        <SyntaxHighlighter language="typescript" style={cb}>
            {code}
        </SyntaxHighlighter>
    );
};

export default TypescriptCode;
