import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { removeTsxIndentation } from "../UtilsCode.tsx";


interface PythonCodeProps {
    code: string;
}

const PythonCode: React.FC<PythonCodeProps> = ({ code }) => {
    const formattedCode = removeTsxIndentation(code);
    return (
        <SyntaxHighlighter language="python" style={cb}>
            {formattedCode}
        </SyntaxHighlighter>
    );
};

export default PythonCode;
