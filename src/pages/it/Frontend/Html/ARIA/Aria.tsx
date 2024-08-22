import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const Aria: React.FC = () => {
    return (
        <div>
            <h1>ARIA</h1>
            <p>ARIA (Accessible Rich Internet Applications) è un insieme di attributi che possono essere aggiunti agli
                elementi HTML per fornire informazioni aggiuntive su come questi elementi dovrebbero essere
                interpretati, in particolar modo per rendere più accessibile e fruibile il web a quei particolari
                utenti che sono costretti ad utilizzare tecnologie assistive (come i lettori di schermo) per potervi
                accedere.
            </p>
            <p>Alcuni attributi ARIA comuni sono:</p>
            <ul>
                <li><code>Ruoli ARIA</code>: definiscono il tipo di elemento (ad esempio un pulsante, un menu, una
                    finestra di dialogo, ecc.)
                    <JavascriptCode code={`
                        role="navigation"   // per un menu di navigazione
                        role="button"       // per un pulsante
                        role="dialog"       // per una finestra di dialogo 
                    `}/>
                </li>
                <li><code>Proprietà ARIA</code>: forniscono informazioni aggiuntive che possono essere utili agli utenti
                    (ad esempio per indicare che un campo di input è obbligatorio, ecc.)
                    <JavascriptCode code={`
                        aria-required="true"    // per indicare che un campo di input è obbligatorio
                    `}/>
                </li>
                <li><code>Stati ARIA</code>: forniscono informazioni sullo stato corrente di un elemento (ad esempio se è
                    espanso o compresso, se è disabilitato, ecc.) e come cambia a seguito di interazioni con l'utente
                    <JavascriptCode code={`
                        aria-checked="true"     // per indicare che una casella di controllo è selezionato             
                        aria-expanded="true"    // per indicare che un elemento è espanso
                        aria-disabled="true"    // per indicare che un elemento è disabilitato
                    `}/>
                </li>
            </ul>
            <h3>Esempio:</h3>
            <JavascriptCode code={`
                <nav role="navigation">
                    <ul>
                        <li><a href="#home" aria-label="Vai alla home page">Home</a></li>
                        <li><a href="#about" aria-label="Vai alla pagina Chi siamo">Chi siamo</a></li>
                        <li><a href="#contact" aria-label="Vai alla pagina Contatti">Contatti</a></li>
                    </ul>
                </nav>
            `}/>
            <p>In questo esempio possiamo osservare che:
                <ul>
                    <li>l'attributo <code>role="navigation"</code> aiuta le tecnologie assistive a capire che
                        l'elemento <code>&lt;nav&gt;</code> è usato per la navigazione
                    </li>
                    <li>l'attributo  <code>aria-label</code> fornisce una descrizione dettagliata di ogni link,
                        che può essere letta ad alta voce da un lettore di schermo.
                    </li>
                </ul>
            </p>
            <p><i>Piccola nota a margine di fondamentale importanza è quella di non utilizzare ARIA per correggere
                problemi di accessibilità che possono essere risolti con HTML e CSS standard.
                ARIA dovrebbe essere utilizzato solo come ultima risorsa, quando i soli strumenti standard non sono
                sufficienti a garantire l'accessibilità appropriata ad un sito web.
                A riguardo è infatti importantissimo seguire le linee guida di accessibilità, ovvero le WCAG
                (Web Content Accessibility Guidelines).</i>
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
                <table role="presentation">
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