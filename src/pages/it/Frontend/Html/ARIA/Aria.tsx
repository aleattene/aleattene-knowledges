import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const Aria: React.FC = () => {
    return (
        <div>
            <h1>ARIA</h1>
            <p>ARIA (Accessible Rich Internet Applications) è un insieme di attributi che possono essere aggiunti agli
                elementi HTML per fornire informazioni aggiuntive su come questi elementi dovrebbero essere
                interpretati.
            </p>
            <h2>Attributo Role</h2>
            <p>L'attributo
                <a href={"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"}>
                    <code className={'documentation-link'}> role </code>
                </a>
                è un attributo ARIA utilizzato per indicare agli strumenti di accessibilità (come ad esempio i lettori
                di schermo) che un elemento (e tutti i suoi discendenti) riguardano la formattazione visiva e non
                dovrebbero essere interpretati con un significato semantico.
            </p>
            <p>Ad esempio, se si utilizza una tabella (<code>&lt;table&gt;</code>) solo per la formattazione e non per
                rappresentare dati tabulari, è possibile utilizzare `role="presentation"` per comunicare questa
                intenzione agli strumenti di accessibilità.
            </p>
            <p>Ecco che in questo caso senza <code>role="presentation"</code>, uno strumento di accessibilità potrebbe
                tentare di interpretare la tabella come dati tabulari, andando a confondere l'utente che lo ascolta.
            </p>
            <h3>Esempio</h3>
            <JavascriptCode code={`
                <\table role="presentation">
                    <tr>
                        <td>Questo è solo un testo di formattazione.</td>
                    </tr>
                </table>
            `}/>

            <h2>Attributo aria-labelledby</h2>
            <p>L'attributo
                <a href={"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby"}>
                    <code className={'documentation-link'}> aria-labelledby </code>
                </a>
                è utilizzato per indicare agli strumenti di accessibilità (come i lettori di schermo) quale elemento
                o elementi del DOM (Document Object Model) forniscono l'etichetta o il nome per l'elemento corrente.
            </p>
            <p>L'attributo accetta un elenco di ID di elementi separati da spazi, e gli strumenti di accessibilità
                leggeranno il contenuto di quegli elementi come l'etichetta dell'elemento corrente.
            </p>
            <p>Ad esempio, potremmo avere un modulo con un campo di input e un'etichetta separata, e potremmo
                utilizzare <code>aria-labelledby</code> per collegare l'etichetta all'input, nel modo seguente:
            </p>
            <JavascriptCode code={`
                <\label id="name-label">Nome:</label>
                <input type="text" aria-labelledby="name-label" />
            `}/>
            <p>Così facendo lo strumento di accessibilità leggerà "Nome:" come l'etichetta per il campo di input.</p>
        </div>
    );
}

export default Aria;