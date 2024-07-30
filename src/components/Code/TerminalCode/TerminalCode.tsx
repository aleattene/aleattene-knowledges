import React from 'react';
import './TerminalCode.css';
import { removeTsxIndentation } from "../UtilsCode.tsx";

interface TerminalCodeProps {
    code: string;
}

const TerminalCode: React.FC<TerminalCodeProps> = ({ code }) => {
    const formattedCode = removeTsxIndentation(code);
    return (
        <pre className="terminal-code">
            <code>{formattedCode}</code>
        </pre>
    );
};


export default TerminalCode;