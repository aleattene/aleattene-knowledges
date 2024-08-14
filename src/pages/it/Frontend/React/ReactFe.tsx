import React from 'react';
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
                (in questo caso <code>&lt;h1&gt;Web App&lt;/h1&gt;</code>), permettendoci di vedere il risultato nel
                browser.
            </p>
            <p>L’elemento del DOM in cui visualizzare l’output di React viene recuperato con l’apposita funzione
                <a href={'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById'}>
                    <code className={'documentation-link'}> document.getElementById() </code>
                </a>
                fornita dal browser.
            </p>
            <p><i>Attenzione: un elemento React (come ad esempio <code>&lt;h1&gt;Web app&lt;/h1&gt;</code>) non è un
                normale
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
                <i>Questo modello contiene al suo interno tutti gli elementi dell’interfaccia, rappresentati come
                    normali
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
            <h3>Classname</h3>
            <p>Come per i normali elementi HTML, anche per quelli definiti in JSX è chiaramente possibile utilizzare
                degli attributi:</p>
            <TypescriptCode code={`
                <\h1 id="title">Todo app</h1>
            `}/>
            <p>Tuttavia, essendo JSX un’estensione di JavaScript (e non di HTML), segue la convenzione (comune nel
                mondo JavaScript) di avere le proprietà composte da più parole scritte in camelCase (nomeAttributo)
                invece del modo nome-attributo usato normalmente con HTML (separato da un trattino).
                Inoltre, anche alcuni attributi che in HTML sono composti da una sola parola, in JSX sono trasformati
                in camelCase (per esempio, l’attributo <code>tabindex</code> usato in HTML, diventa
                <code>tabIndex</code> in JSX.
            </p>
            <p>In React è quindi possibile utilizzare tutti i normali attributi HTML, ma alcuni di questi richiedono un
                diverso utilizzo rispetto alle loro controparti HTML; un caso speciale è quello dell’attributo HTML
                <code>class</code>, che in JSX diventa <strong><code>className</code></strong>:
            </p>
            <TypescriptCode code={`
                const helloElement = (
                    <\div>
                       <h1 className="title">Todo app</h1>
                       <p className="message">Benvenuto!</p>
                    </div>
                );
            `}/>
            <h3>Style</h3>
            <p>Per dare uno stile inline a un elemento JSX, possiamo usare l’attributo
                <strong><code>style</code></strong> al posto di <code>className</code>.
            </p>
            <TypescriptCode code={`
                const helloElement = (
                    <\p style={{color: 'red'}}>Benvenuto!</p>”
            `}/>
            <p>La sintassi <code>style=&#123;&#123; &#125;&#125;</code> (con le doppie graffe) è necessaria perché, rispetto a quanto fatto
                con <code>className</code>, qui non stiamo passando una stringa come valore dell’attributo:
                <ul>
                    <li>la coppia più esterna di graffe indica a JSX che il valore dell’attributo sarà quello prodotto
                        dal codice JavaScript contenuto al suo interno.</li>
                    <li>la coppia più interna, invece, è quella che usiamo per definire un normale oggetto JavaScript
                        con le sue proprietà. In questo caso l’oggetto ha una sola proprietà color con valore 'red'
                        (una normale stringa).
                    </li>
                </ul>
                Nell’oggetto style possono essere usate tutte le normali proprietà CSS, ma i loro nomi vanno convertiti
                (come abbiamo precedentemente detto) in camelCase (come per gli attributi HTML).
                Quindi, per esempio, <code>font-size</code> diventerà <strong><code>fontSize</code></strong>.
            </p>
            <TypescriptCode code={`
                // File HTML
                <\p style="color: red; font-size: 12px; line-height: 2">Benvenuto!</p>
                
                // File JSX
                <p style={{color: 'red', fontSize: '12px', lineHeight: 2}}>Benvenuto!</p>
            `}/>
            <p>Se il valore della proprietà è un numero, possiamo passarlo come tale, altrimenti dobbiamo inserirlo in
                una stringa, come nel caso di <code>12px</code>.
                Volendo, possiamo anche definire un oggetto JavaScript con le proprietà dello stile e poi passarlo
                all’attributo style.
            </p>
            <TypescriptCode code={`
                const helloStyle = { color: 'red', fontSize: '12px', lineHeight: 2 };
                const helloElement = (
                <\div>
                    <p style={helloStyle}>Benvenuto!</p>
                </div>
                );
            `}/>
            <h3>Closing e Self-Closing tag</h3>
            <TypescriptCode code={`
                const helloElement = (
                    <\div>
                        <h1>Todo app</h1>
                        <p>Benvenuto!</p>
                        <img src="https://via.placeholder.com/728x90.png?text=Todo+app"/>
                        <img src="https://via.placeholder.com/728x90.png?text=Todo+app"></img>
                    </div>
                );

                ReactDOM
                    .createRoot(document.getElementById('root'))
                    .render(helloElement);
            `}/>
            <p> I componenti React ci permettono di dividere le nostre interfacce in parti indipendenti e riutilizzabili,
                oltre che di fatto rappresentare il passo successivo rispetto ai semplici elementi visti sino ad ora.
                Per definire un componente è sufficiente creare una normale funzione JavaScript che restituisca
                elementi React: ogni volta che la funzione viene eseguita, viene generato e restituito l’elemento
                definito al suo interno.
            </p>
            <TypescriptCode code={`
                // Definizione di un componente
                function App() {
                    return ( 
                        <\div>
                            <h1>Web app</h1>
                            <p>Benvenuto!</p>
                        </div>
                    );
                };
                    
                ReactDOM
                    .createRoot(document.getElementById('root'))
                    .render(<App />);
            `}/>
            <p>La funzione <code>App</code>è il nostro componente React, e come tale possiamo usarlo nel codice JSX
                usando ognuno il proprio tag identificativo:
            </p>
            <TypescriptCode code={`
                <\App></\App> oppure direttamente self-closing <App /> (anche se non è propriamente la stessa cosa)
            `}/>
            <p>I nomi dei componenti, e quindi le funzioni che li definiscono, devono sempre iniziare con una lettera
                maiuscola; questo è necessario per indicare a React che non si tratta di normali elementi HTML ma di
                componenti.
                I componenti possono essere composti, a loro volta, da altri componenti, così da poter realizzare
                interfacce complesse, lavorando però sempre in blocchi singoli e separati, che possono essere sempre
                riutilizzati. Vediamo un esempio:
            </p>
            <TypescriptCode code={`
                function AppTitle () { return <\h1>Web app</h1>; }
                    
                function AppMessage() { return <p>Benvenuto!</p>; }
                    
                function App() {    
                    return ( 
                        <div> 
                            <AppTitle />
                            <AppMessage />
                        </div>
                    );
                }
                    
                ReactDOM    
                    .createRoot(document.getElementById('root'))    
                    .render(<App />);
            `}/>
        </div>
    );
};

export default ReactFe;