import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {removeTsxIndentation} from "../UtilsCode.tsx";


interface TypescriptCodeProps {
    code: string;
}

const TypescriptCode: React.FC<TypescriptCodeProps> = ({ code }) => {
    const formattedCode = removeTsxIndentation(code);
    return (
        <SyntaxHighlighter language="typescript" style={cb}>
            {formattedCode}
        </SyntaxHighlighter>
    );
};

export default TypescriptCode;
