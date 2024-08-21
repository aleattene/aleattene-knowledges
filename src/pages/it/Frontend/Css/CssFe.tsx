import React from 'react';
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const CssFe: React.FC = () => {
    return (
        <div>
            <h1>CSS</h1>
            <h2>Import file CSS in HTML</h2>
            <p>Per importare un file CSS in un file HTML, si utilizza il tag <code>{'<\link>'}</code> all'interno del
                tag <code>{'<\head>'}</code>.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                <\head>
                    <link rel="stylesheet" href="style.css">
                </head>
            `}/>
            <p>Le regole CSS possono anche definite <strong>inline</strong>, all'interno del tag HTML, utilizzando
                l'attributo <code>style</code>:
            </p>
            <JavascriptCode code={`
                <\p style="color: blue;">Testo blu</p>
            `}/>
            <h2>Justify-Content</h2>
            <p>La proprietà <code>justify-content</code> definisce l'allineamento orizzontale degli elementi all'interno
                di un container.</p>
            <p>Valori possibili:</p>
            <ul>
                <li><code>flex-start</code>: allinea gli elementi all'inizio del container</li>
                <li><code>flex-center</code>: allinea gli elementi al centro del container</li>
                <li><code>flex-end</code>: allinea gli elementi alla fine del container</li>

                <li><code>space-between</code>: distribuisce uniformemente gli elementi all'interno del container</li>
                <li><code>space-around</code>: distribuisce uniformemente gli elementi all'interno del container, con
                    spazi uguali tra gli elementi e metà dello spazio agli estremi destro e sinistro
                </li>
                <li><code>space-evenly</code>: distribuisce uniformemente gli elementi all'interno del container, con
                    spazi uguali tra gli elementi e agli estremi destro e sinistro
                </li>
            </ul>
            <p>[IMG to fix] Justify-Content Values in Flex</p>
            <h2>Selettori di Attributo</h2>
            <p>I selettori di attributo consentono di selezionare elementi HTML in base ad un certo attributo o valore
                dell'attributo.</p>
            <p>Di seguito una lista dei selettori di attributo più comuni:</p>
            <ul>
                <li><code>[attributo]</code>: seleziona tutti gli elementi con l'attributo specificato,
                    indipendentemente dal suo valore
                    <JavascriptCode code={`
                        // Selezione di tutti gli elementi di input con l'attributo title 
                        input [title] {
                            color: red;
                        }
                    `}/>
                </li>
                <li><code>[attributo="valore"]</code>: seleziona tutti gli elementi con l'attributo specificato e il
                    valore specificato
                    <JavascriptCode code={`
                        // Selezione di tutti gli elementi di input con l'attributo type e il valore "text"
                        input [type="text"] {
                            color: red;
                        }
                    `}/>
                </li>
                <li><code>[attributo~="valore"]</code>: seleziona tutti gli elementi con l'attributo specificato e il
                    cui valore specificato sia incluso in una lista di valori separati da spazi (o da un solo valore)
                    <JavascriptCode code={`
                        // Selezione di tutti gli elementi div con l'attributo class che include un valore 'special                      
                        div [class~="special"] {
                            color: red;
                        }
                    `}/>
                </li>
                <li><code>[attributo|="valore"]</code>: seleziona tutti gli elementi con l'attributo specificato e il
                    cui valore specificato sia uguale al valore specificato o inizi con il valore specificato seguito da
                    un trattino
                    <JavascriptCode code={`
                        // Selezione degli elementi div con l'attributo lang e il valore "en" o che inizia con "en-"
                        div [lang|="en"] {
                            color: red;
                        }
                    `}/>
                </li>
                <li><code>[attributo^="valore"]</code>: seleziona tutti gli elementi con l'attributo specificato e il
                    cui valore inizia con il valore specificato
                    <JavascriptCode code={`
                        // Selezione degli elementi a con l'attributo href che inizia con "https"
                        a [href^="https"] {
                            color: red;
                        }
                    `}/>
                </li>
                <li><code>[attributo$="valore"]</code>: seleziona tutti gli elementi con l'attributo specificato e il
                    cui valore termina con il valore specificato
                    <JavascriptCode code={`
                        // Selezione degli elementi a con l'attributo href che termina con ".pdf"
                        a [href$=".pdf"] {
                            color: red;
                        }
                    `}/>
                </li>
                <li><code>[attributo*="valore"]</code>: seleziona tutti gli elementi con l'attributo specificato e il
                    cui valore contiene almeno un'occorrenza del valore specificato
                    <JavascriptCode code={`
                        // Selezione degli elementi a con l'attributo href che contiene "wikipedia"
                        a [href*="wikipedia"] {
                            color: red;
                        }
                    `}/>
                </li>
            </ul>
            <p><i>E' bene infine ricordare che i selettori di attributo possono essere meno efficienti dei selettori
                di tipo, classe o ID, quindi è consigliabile utilizzarli con prudenza per non impattare negativamente
                sulle prestazioni della pagina.</i>
            </p>
        </div>
    );
};

export default CssFe;