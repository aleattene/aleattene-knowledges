import React from 'react';
import './TerminalCode.css';

interface TerminalCodeProps {
    code: string;
}

const TerminalCode: React.FC<TerminalCodeProps> = ({ code }) => {
    return (
        <pre className="terminal-code">
            <code>{code}</code>
        </pre>
    );
};

export default TerminalCode;