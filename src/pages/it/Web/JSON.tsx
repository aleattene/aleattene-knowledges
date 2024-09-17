import React from "react";
import JavascriptCode from "../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const JSON: React.FC = () => {
    return (
        <div>
            <h1>JSON</h1>
            <p>JSON (JavaScript Object Notation) è un formato di scambio dati leggero e indipendente dal linguaggio di
                programmazione.
                È facile da leggere e scrivere per gli esseri umani e facile da analizzare e generare per le macchine.
            </p>
            <p>JSON è basato su due strutture:</p>
            <ul>
                <li>l'oggetto:
                    <JavascriptCode code={`
                        \`{
                            anagrafica1: {
                                "nome": "Mario",
                                "cognome": "Rossi",
                                "età": 30
                            },
                            anagrafica2: {
                                "nome": "Luca",
                                "cognome": "Bianchi",
                                "età": 25
                            },
                            anagrafica3: {
                                "nome": "Paolo",
                                "cognome": "Verdi",
                                "età": 35
                            }
                        }\`
                    `}/>
                </li>
                <li>l'array:
                    <JavascriptCode code={`
                        \`[
                            { "nome": "Mario", "cognome": "Rossi", "età": 30 },
                            { "nome": "Luca", "cognome": "Bianchi", "età": 25 },
                            { "nome": "Paolo", "cognome": "Verdi", "età": 35 }
                        ]\`
                    `}/>
                </li>
            </ul>
            <p>Dato che JSON è di fatto una stringa, esistono due metodi dedicate per la conversione oggetto JS in
                stringa JSON e viceversa:
                <ul>
                    <li><code>JSON.stringify()</code>: converte un oggetto JavaScript in una stringa JSON</li>
                    <li><code>JSON.parse()</code>: converte una stringa JSON in un oggetto JavaScript</li>
                </ul>
            </p>
        </div>
    );
};

export default JSON;