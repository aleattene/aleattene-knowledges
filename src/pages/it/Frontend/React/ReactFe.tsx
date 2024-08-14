import React from 'react';
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TypescriptCode from "../../../../components/Code/TypescriptCode/TypescriptCode.tsx";

const ReactFe: React.FC = () => {
    return (
        <div>
            <h1>React</h1>
            <h2>Introduzione</h2>
            <p>React, contrariamente a quanto si possa pensare, non è un framework, ma una <strong>libreria</strong>
                (semplice ma non banale) specializzata nella creazione di interfacce utente (le cosiddette UI)
                per applicazioni web.
                <i>ReactNative, Next, Gatsby e Remix sono esempi di <strong>framework</strong> basati su React.</i>
                La prima versione open source di React risale al 2013 ed è stata creata all’interno di Facebook proprio
                con l’obiettivo di migliorare lo sviluppo e la manutenzione delle sue interfacce.
                Nel 2019, con la versione 16.8.0 e l’introduzione degli hook, React ha subito una trasformazione
                radicale, che lo ha fatto diventare come lo conosciamo oggi.
                Questa nuova via intrapresa da React ne ha aumentato la complessità, perché lo ha spostato verso un
                approccio più funzionale, abbandonando il precedente modo di utilizzo, che era simile a quello dei
                linguaggi di programmazione a oggetti, con classi e metodi, cui la maggior parte degli sviluppatori
                era abituato.
            </p>
            <TypescriptCode code={`
                // File HTML    
                <div id='root'></div>
            `}/>
            <TypescriptCode code={`
                // File JSX
                ReactDOM
                    .createRoot(document.getElementById('root'))
                    .render(
                        <\h1>Todo App</h1>    
                    );
            `}/>
            <p>La funzione <code>ReactDOM.createRoot</code> crea, nell’elemento selezionato del DOM (il div con id
                root), la radice (il contenitore) in cui visualizzare gli elementi generati da React.
                La funzione render poi, mostra all’interno di questa radice l’elemento passato come parametro
                (in questo caso <code>&lt;h1&gt;Todo app&lt;/h1&gt;</code>), permettendoci di vedere il risultato nel browser.
            </p>
            <p>L’elemento del DOM in cui visualizzare l’output di React viene recuperato con l’apposita funzione
                <a href={'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById'}>
                    <code className={'documentation-link'}> document.getElementById() </code>
                </a>
                fornita dal browser.
            </p>
            <p><i>Attenzione: un elemento React (come ad esempio <code>&lt;h1&gt;Todo app&lt;/h1&gt;</code>) non è un normale
                elemento del DOM, ma è un oggetto JavaScript; React si occuperà poi di mostrarlo per noi nel DOM
                del browser, quando necessario.</i>
            </p>
            <p>[TO FIX] Vedere vecchia sintassi: ReactDom.render()
                https://github.com/reactwg/react-18/discussions/5
            </p>
            <h2>Virtual DOM</h2>
            <p>Per mostrare una pagina web, il browser trasforma il codice HTML in un modello chiamato DOM (Document
                Object Model).
                Dopodiché lo interpreta e ne effettua il rendering, ovvero lo trasforma in quello che vediamo sullo
                schermo (caratteri, immagini e così via).
            </p>
            <p>Prima dell’avvento di React, la maggior parte delle librerie JavaScript per costruire interfacce utente
                manipolava direttamente gli elementi del DOM, aggiungendoli, rimuovendoli e modificandoli.
                Questo approccio, anche se pratico, è limitato dalle prestazioni del DOM stesso, che di solito non sono
                elevate.
                La conseguenza principale della manipolazione diretta del DOM è quindi la scarsa reattività delle
                interfacce, che risulteranno sempre piuttosto lente nell’aggiornarsi nelle interazioni utente.
            </p>
            <p>Anche React manipola il DOM, ma lo fa usando la tecnica del <strong>Virtual DOM</strong>, ovvero invece
                di modificare direttamente il contenuto del DOM, React mantiene in memoria un modello del DOM
                (il virtual DOM) e gli applica tutte le modifiche quando l’interfaccia cambia.
                <i>Questo modello contiene al suo interno tutti gli elementi dell’interfaccia, rappresentati come normali
                oggetti JavaScript.</i>
            </p>
            <p>Dopo aver modificato questo modello in memoria, tramite uno speciale algoritmo React calcola la
                differenza tra il DOM del browser e il suo modello e successivamente nel DOM del browser verranno
                aggiornate solo le parti che risultano diverse tra i due modelli, con un notevole guadagno dal punto di
                vista delle prestazioni.
            </p>
            <p>[To FIX] IMG DOM and VIRTUAL DOM https://commons.wikimedia.org/wiki/File:DOM-model.svg</p>
            <p>Quello che ci interessa sapere al momento è che questo modello ideale dalla nostra interfaccia utente
                viene usato per modificare il DOM del browser solo quando è necessario, attraverso una fase di
                rendering (nel nostro caso, questa operazione è gestita dalla funzione render che abbiamo visto poco
                fa).
            </p>
            <TypescriptCode code={`
                // JSX Code (codice simile a HTML all'interno di JavaScript)
                const helloElement = <\h1>Todo app</h1>;
                
                ReactDOM
                    .createRoot(document.getElementById('root'))
                    .render(helloElement);
            `}/>
            <TypescriptCode code={`
                const helloElement = (
                    <\div>
                        <h1>Todo app</h1>
                        <p>Benvenuto</p>
                    </div>
                );

                ReactDOM
                    .createRoot(document.getElementById('root'))
                    .render(helloElement);
            `}/>



        </div>
    );
};

export default ReactFe;