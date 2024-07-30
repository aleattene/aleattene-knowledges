import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {removeTsxIndentation} from "../UtilsCode.tsx";


interface PhpCodeProps {
    code: string;
}

const PhpCode: React.FC<PhpCodeProps> = ({ code }) => {
    const formattedCode = removeTsxIndentation(code);
    return (
        <SyntaxHighlighter language="php" style={cb}>
            {formattedCode}
        </SyntaxHighlighter>
    );
};

export default PhpCode;
