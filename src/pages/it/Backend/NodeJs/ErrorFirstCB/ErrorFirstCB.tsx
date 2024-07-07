import React from 'react';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const ErrorFirstCB: React.FC = () => {
    return (
        <div>
            <h1>Error First CallBack</h1>
            <p>Le Error-First-Callback vengono utilizzate per passare errori e dati, ma aspetto fondamentale
                da cui ne deriva il nome, è che il primo argomento è sempre un oggetto errore. 
                Questo significa che se c'è un errore, il primo parametro sarà un oggetto errore 
                e il secondo parametro sarà null. 
                Se non c'è, il primo parametro sarà null e il secondo parametro conterrà i dati.
                Il programmatore deve quindi sempre controllare se c'è un errore e se c'è, gestirlo di conseguenza.
            </p>
            <JavascriptCode code={`
                fs.readFile(filePath, function(err, data) { 
                \tif (err) { 
                \t\t//handle the error 
                \t} 
                \t// use the data object });
            `}/>
        </div>
    );
};

export default ErrorFirstCB;