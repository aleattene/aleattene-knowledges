import React from 'react';
import TerminalCode from "../../../components/TerminalCode/TerminalCode.tsx";

const createEmptyLocalRepository: string = `git init`;
const cloneRepository: string = `git clone <url>`;

const Git: React.FC = () => {
    return (
        <div>
            <h1>Git</h1>
            <h3>Creazione di un Nuovo Repository Locale</h3>
            <TerminalCode code={createEmptyLocalRepository}/>
            <h3>Clonare in Locale un Repository Remoto</h3>
            <TerminalCode code={cloneRepository}/>
        </div>
    );
};

export default Git;
