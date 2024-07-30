import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";
import './JavascriptCode.css';
import { removeTsxIndentation } from './../UtilsCode.tsx';


interface JavascriptCodeProps {
    code: string;
}

const JavascriptCode: React.FC<JavascriptCodeProps> = ({ code }) => {
    const formattedCode = removeTsxIndentation(code);
    return (
        <SyntaxHighlighter language="javascript" style={cb} className="js-code">
            {formattedCode}
        </SyntaxHighlighter>
    );
};


export default JavascriptCode;
