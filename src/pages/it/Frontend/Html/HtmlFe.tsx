import React from 'react';
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";

const HtmlFe: React.FC = () => {
    return (
        <div>
            <h1>HTML</h1>
            <h2>Table</h2>
            <p>Le tabelle in HTML sono utilizzate per visualizzare dati in un formato tabellare, ovvero per
                rappresentare dati in una griglia formata da righe e colonne.
            </p>
            <p>Nella costruzione di una tabella in HTML è possibile innanzitutto utilizzare il tag (opzionale)
                <code><caption>...</caption></code> per definire il titolo della tabella (da inserirsi subito dopo
                l'apertura del tag <code>&lt;table&gt;</code>).
            </p>
            <p><i>Da osservare che una tabella può avere un solo titolo/didascalia e sebbene sia un tag opzionale è
                considerato una best practice utilizzarlo per migliorarne l'accessibilità (ad esempio gli utenti che
                utilizzeranno i lettori di schermo o altre tecnologie assistive ne potranno sicuramente trarre
                giovamento).</i>
            </p>
            <h3>Sintassi</h3>
            <JavascriptCode code={`
                <table>
                    <caption>Tabella delle calorie</caption>
                    // ...
                </table>
            `}/>
            <p>In questo esempio avremo quindi che <code>Tabella delle calorie</code> sarà mostrato come titolo della
                tabella.
            </p>
            <p>Una volta definito il titolo della tabella, i tag principali da utilizzare per la costruzione di una
                tabella sono:</p>
            <ul>
                <li><code>&lt;table&gt;</code>: tag principale che definisce la tabella</li>
                <li><code>&lt;thead&gt;</code>: tag che raggruppa le righe che andranno a definire l'intestazione della
                    tabella (da utilizzarsi una sola volta per tabella)
                </li>
                <li><code>&lt;tbody&gt;</code>: tag che raggruppa le righe che andranno a definire il corpo della
                    tabella (a differenza di &lt;thead&gt; possono esserci più &lt;tbody&gt;) (???)
                </li>
                <li><code>&lt;tfoot&gt;</code>: (opzionale) tag che definisce il piè di pagina della tabella</li>
                <li><code>&lt;tr&gt;</code>: tag che definisce una riga della tabella e può contenere più colonne
                    relative ai dati (&lt;td&gt;) o all'intestazione (&lt;th&gt;)</li>
                <li><code>&lt;th&gt;</code>: tag che definisce una cella di intestazione della tabella</li>
                <li><code>&lt;td&gt;</code>: tag che definisce una cella dati della tabella</li>
            </ul>
            <h3>Esempio</h3>
            <JavascriptCode code={`
                <table>
                    <caption>Elenco degli impiegati</caption>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Età</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mario</td>
                            <td>Rossi</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Luigi</td>
                            <td>Verdi</td>
                            <td>42</td>
                        </tr>
                    </tbody>
                </table>
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                Elenco degli impiegati
                Nome    Cognome Età
                Mario   Rossi   35
                Luigi   Verdi   42
            `}/>
            <h2>Title</h2>
            <p>Il tag <code>&lt;title&gt;</code> è un tag obbligatorio (standard HTML5) che si trova all'interno
                dell'elemento <code>&lt;head&gt;</code> di un documento HTML e serve proprio a definire il titolo di
                questo documento.
            </p>
            <p>Il titolo è poi quello normalmente visualizzato nella barra/tab del browser e come titolo della pagina
                nella SERP (Search Engine Results Page) dei motori di ricerca.
            </p>
            <h3>Sintassi:</h3>
            <JavascriptCode code={`
                <head>
                    <title>Titolo della pagina</title>
                    // ...
                </head>
            `}/>
        </div>
);
};

export default HtmlFe;