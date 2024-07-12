import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface JavaCodeProps {
    code: string;
}

const JavaCode: React.FC<JavaCodeProps> = ({ code }) => {
    return (
        <SyntaxHighlighter language="java" style={cb}>
            {code}
        </SyntaxHighlighter>
    );
};

export default JavaCode;