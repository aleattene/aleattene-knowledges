import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface JavascriptCodeProps {
    code: string;
}

const JavascriptCode: React.FC<JavascriptCodeProps> = ({ code }) => {
    return (
        <SyntaxHighlighter language="javascript" style={cb}>
            {code}
        </SyntaxHighlighter>
    );
};

export default JavascriptCode;
