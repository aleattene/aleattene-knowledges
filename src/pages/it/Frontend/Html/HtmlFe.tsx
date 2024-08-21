import React from 'react';
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";

const HtmlFe: React.FC = () => {
    return (
        <div>
            <h1>HTML</h1>
            <p>HTML (HyperText Markup Language) è il linguaggio di markup standard per la creazione di pagine web.
                Notoriamente sappiamo che una pagina HTML è di fatto composta da elementi HTML, ovvero tag HTML che
                definiscono la struttura della pagina stessa e che vengono letti dai browser (Chrome, Firefox,
                Safari, ecc.) per mostrare all'utente la pagina web.
            </p>
            <p>A livello basilare, un sito web altro non è che un insieme di pagine HTML collegate tra loro da link e
                che possono contenere immagini, video, testi, ecc.
                Da non dimenticare poi la presenza dei cd <code>assets</code> (solitamente all'interno di una specifica
                directory/folder) ovvero file come fogli di stile (CSS), script (Javascript) e immagini.
            </p>

            <h2>Table</h2>
            <p>Le tabelle in HTML sono utilizzate per visualizzare dati in un formato tabellare, ovvero per
                rappresentare dati in una griglia formata da righe e colonne.
            </p>
            <p>Nella costruzione di una tabella in HTML è possibile innanzitutto utilizzare il tag (opzionale)
                <code>
                    <caption>...</caption>
                </code> per definire il titolo della tabella (da inserirsi subito dopo
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
                    relative ai dati (&lt;td&gt;) o all'intestazione (&lt;th&gt;)
                </li>
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

            <h2>Motori di Ricerca (Search Engine)</h2>
            <p>I motori di ricerca tramite opportuni strumenti leggono il codice HTML ed è per questo motivo che diventa
                doveroso ottimizzare il nostro codice HTML, poiché poi sono proprio loro che alzano (valutando anche
                accessibilità e performance) il punteggio del nostro sito, grazie al quale potremmo poi conseguentemente
                apparire nelle prime posizioni della SERP (Search Engine Results Page), con un conseguente ritorno di
                immagine, che a sua volta potrebbe anche tramutarsi in un maggior ritorno economico.
            </p>
            <p><i>Nota di merito speciale merità l'accessibilità, che negli ultimi anni sta diventando un aspetto sempre
                più fondamentale per i motori di ricerca, per questo premiamo molto l'inclusività. (???)</i>
            </p>
            <h3>Struttura base di una Pagina HTML</h3>
            <JavascriptCode code={`
                <!DOCTYPE html> 
                Specifica che il tipo di documento è HTML e ciò ne faciliterà l'interpretazione da parte del browser 
                che saprà conseguentemente come gestirlo.
                
                <html lang='en'> 
                A livello di accessibilità questo attributo può essere ad esempio utile per uno screen reader sul 
                comprendere in che lingua leggere il testo.
                
                    <head>
                    Testa del documento
                    Prima delle due sezioni più importanti di una pagina HTML
                    
                        <meta charset="UTF-8" />
                            I meta-dati non vengono visualizzati direttamente dal browser ma si rivelano utili per il 
                            funziomento/posizionamento della pagina HTML
                        <meta name="viewport" content="IE-edge" />
                        
                        <title> Titolo della Pagina </title>
                        Titolo utilizzato sia per il titolo della pagina (compare nella scheda in alto del browser) che del 
                        titolo nella SERP dei motori di ricerca.
                        
                    Fine Testa del Documento
                    </head>
                
                    <body>
                    Corpo del Documento
                    Seconda delle due sezioni più importanti di una pagina HTML
                    E' quella che contiene il contenuto vero e proprio della pagina HTML.
                    
                        <h1> Titolo della Pagine </h1>
                        <p> Un paragrafo della pagina <p>
                    
                    Fine Corpo del Documento
                    </body>
                
                Fine del Documento
                </html>
            `}/>

            <p>[TO FIX] Elementi HTML vs Tag HTML
                {`<\tagDiApertura> TestoNodo </tagDiChiusura>
                    Questa è la struttura base di un elemento HTML (che )
                    Per quanto riguarda il tag di chiusura va considerato che in alcuni casi vi sono delle eccezioni 
                    possibili <img> <br> etc (detti tag/elementi vuoti in quanto non accettano children, 
                    ovvero altri elementi al loro interno)`}
            </p>

        </div>
    );
};

export default HtmlFe;