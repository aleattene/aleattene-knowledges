import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface PhpCodeProps {
    code: string;
}

const PhpCode: React.FC<PhpCodeProps> = ({ code }) => {
    return (
        <SyntaxHighlighter language="php" style={cb}>
            {code}
        </SyntaxHighlighter>
    );
};

export default PhpCode;
