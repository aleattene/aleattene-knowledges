import React from 'react';
import './HttpStatusCodes.css'

const httpStatusCodes = [
    {
        code: '1xx',
        description: 'Informational Codes',
        subcodes: [
            {
                code: '100',
                description: 'Continue'
            },
            {
                code: '101',
                description: 'Switching Protocols'
            },
            {
                code: '102',
                description: 'Processing'
            },
            {
                code: '103',
                description: 'Early Hints'
            },
        ]
    },
    {
        code: '2xx',
        description: 'Success Codes',
        subcodes: [
            {
                code: '200',
                description: 'OK - La richiesta è stata completata con successo.'
            },
            {
                code: '201',
                description: 'Created - La richiesta è stata completata con successo ' +
                    'e una nuova risorsa è stata creata.'
            },
            {
                code: '202',
                description: 'Accepted - La richiesta è stata accettata per l\'elaborazione.'
            },
            {
                code: '203',
                description: 'Non-Authoritative Information - ????.'
            },
            {
                code: '204',
                description: `No Content - La richiesta è stata completata con successo ma non c'è 
                nessun contenuto da mostrare.`
            },
            {
                code: '205',
                description: 'Reset Content - Il server chiede al client di resettare la visualizzazione del documento.'
            },
            {
                code: '206',
                description: 'Partial Content - Il server sta restituendo solo una parte della risorsa richiesta.'
            },
        ]
    },
    {
        code: '3xx',
        description: 'Redirection Codes',
        subcodes: [
            {
                code: '300',
                description: `Multiple Choices - Il server ha più risorse disponibili che possono soddisfare 
                la richiesta del client, ma non può scegliere quale restituire.`
            },
            {
                code: '301',
                description: 'Moved Permanently - La risorsa richiesta è stata spostata in maniera permanente.'
            },
            {
                code: '302',
                description: 'Moved Temporarily - La risorsa richiesta è stata spostata temporaneamente.'
            },
            {
                code: '303',
                description: 'See Other - ???.'
            },
            {
                code: '304',
                description: `Not Modified - La risorsa non è stata modificata poiché il client ha già 
                la versione aggiornata della risorsa richiesta.`
            },
            {
                code: '307',
                description: 'Temporary Redirect - ???'
            },
            {
                code: '308',
                description: 'Permanent Redirect - ???'
            },
        ]
    },
    {
        code: '4xx',
        description: 'Client Error Codes',
        subcodes: [
            {  code: '400',
               description: 'Bad Request - La richiesta non può essere soddisfatta a causa della sintassi errata.'
            },
            {  code: '401',
               description: 'Unauthorized - Il client deve autenticarsi per ottenere la risorsa richiesta.'
            },
            {  code: '402',
               description: 'Payment Required - ???.'
            },
            {  code: '403',
               description: `Forbidden - Il server ha rifiutato al client l\'accesso alla richiesta poiché privo 
               delle autorizzazioni necessarie.`
            },
            {  code: '404',
               description: 'Not Found - Il server non ha trovato la risorsa richiesta.'
            },
            {  code: '405',
               description: `Method Not Allowed - Il metodo utilizzato per la richiesta non è consentito 
               per la risorsa richiesta.`
            },
            {  code: '406',
               description: `Not Acceptable - Il server non può restituire la risorsa richiesta nel formato richiesto
               dal client`
            },
            {  code: '407',
               description: `Proxy Authentication Required - Il client deve autenticarsi con il proxy prima di
               effettuare la richiesta.`
            },
            {  code: '408',
               description: `Request Timeout - ???`
            },
            {  code: '409',
               description: `Conflict - La richiesta del client non può essere completata poiché entra in conflitto
                con lo stato attuale del server.`
            },
            {  code: '410',
               description: 'Gone - La risorsa richiesta non è più disponibile e non sarà disponibile in futuro.'
            },
            {  code: '411',
               description: 'Length Required - Il server richiede la lunghezza del contenuto della richiesta.'
            }
        ]
    },
    {
        code: '5xx',
        description: 'Server Error Codes',
        subcodes: [
            {
                code: '500',
                description: `Internal Server Error - Il server ha riscontrato un errore interno imprevisto e 
                non può completare la richiesta.`
            },
            {
                code: '501',
                description: `Not Implemented - Il server non supporta la funzionalità richiesta.`
            },
            {
                code: '502',
                description: `Bad Gateway - Il server agisce come gateway o proxy e ha ricevuto una risposta 
                non valida dal server upstream.`
            },
            {
                code: '503',
                description: `Service Unavailable - Il server non è disponibile per la richiesta del client 
                poiché è sovraccarico o in manutenzione.`
            },
            {
                code: '504',
                description: `Gateway Timeout - Il server agisce come gateway o proxy e non ha ricevuto una risposta 
                valida dal server upstream entro il tempo limite.`
            },
            {
                code: '505',
                description: `HTTP Version Not Supported - Il server non supporta la versione HTTP utilizzata 
                nella richiesta.`
            },
            {
                code: '507',
                description: `Insufficient Storage - Il server non può completare la richiesta poiché è 
                insufficiente lo spazio di archiviazione.`
            },
            {
                code: '508',
                description: `Loop Detected - Il server ha rilevato un loop infinito durante la richiesta.`
            },
            {
                code: '511',
                description: `Network Authentication Required - Il client deve autenticarsi per ottenere 
                la risorsa richiesta.`
            },
        ]
    },
];



const HttpStatusCodes: React.FC = () => {
    return (
        <div>
            <h1>Http Status Codes</h1>
            <ul>
                { httpStatusCodes.map((httpStatusCode, index) => (
                    <li key={index}>
                        <a href={'/it/HTTP/HttpStatusCodes/' + httpStatusCode.code}>{httpStatusCode.code}</a>
                        <p>{httpStatusCode.description}</p>
                        <ul>
                        {httpStatusCode.subcodes.map((subcode, index) => (
                            <li key={index}>
                                <a href={'/it/HTTP/HttpStatusCodes/' + httpStatusCode.code + '/' + subcode.code}>{subcode.code}</a>
                                <p>{subcode.description}</p>
                            </li>
                        ))}
                        </ul>
                    </li>
                ))}
            </ul>
    </div>
);
};

export default HttpStatusCodes;