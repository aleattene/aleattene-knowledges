import React from 'react';
import './HttpMethods.css'

interface httpRequestMethods {
    [key: string]: string;
}

const httpRequestMethods: httpRequestMethods = {
    'GET': 'Trasferisce una rappresentazione della risorsa richiesta.',
    'HEAD': 'Simile a GET, ma non trasferisce il contenuto della risposta.',
    'POST': 'Processa la risorsa usando il contenuto della richiesta.',
    'PUT': 'Sostituisce la risorsa indicata con il contenuto della richiesta.',
    'PATCH': 'Modifica la risorsa indicata con il contenuto della richiesta.',
    'DELETE': 'Rimuove tutte le rappresentazioni della risorsa indicata.',
    'CONNECT': 'Crea un tunnel verso il server identificato dal risorsa indicata.',
    'OPTIONS': 'Descrive le possibili opzioni per comunicare con la risorsa indicata.',
    'TRACE': 'Mostra se la risorsa viene modificata durante la comunicazione.'
};


const HttpRequestMethods: React.FC = () => {
    return (
        <div>
            <h1>Metodi HTTP</h1>
            <p>I metodi HTTP indicano l'azione che si desidera eseguire sulla risorsa indicata nella richiesta:</p>
            <ul>
                {Object.entries(httpRequestMethods).map(([key, value]) => {
                    return (
                        <li>
                            <b><code className={'documentation-link'}> {key} </code></b>: {value}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default HttpRequestMethods;