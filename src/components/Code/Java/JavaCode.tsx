import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {removeTsxIndentation} from "../UtilsCode.tsx";


interface JavaCodeProps {
    code: string;
}

const JavaCode: React.FC<JavaCodeProps> = ({ code }) => {
    const formattedCode = removeTsxIndentation(code);
    return (
        <SyntaxHighlighter language="java" style={cb}>
            {formattedCode}
        </SyntaxHighlighter>
    );
};

export default JavaCode;