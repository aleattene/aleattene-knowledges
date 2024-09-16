import React from "react";
import JavascriptCode from "../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";

const Dom: React.FC = () => {
    return (
        <div>
            <h1>DOM - Document Object Model</h1>
            <p>Il Document Object Model (DOM) è una rappresentazione gerarchica ad oggetti di un documento strutturato,
                come ad esempio HTML o XML.
                La sua rappresentazione ad albero permette quindi di manipolare il contenuto, la struttura e lo stile
                di un documento.
            </p>
            <p>Sostanzialmente noi abbiamo il Browser (chrome/Firefox, etc) che elabora e renderizza la nostra pagina.
                Contestualmente però attraverso altri tools genera il DOM, esponendo a sua volta delle API che
                permettono poi a JS (ospitato nel browser) di manipolare il DOM stesso.
            </p>
            <JavascriptCode code={`
                // Esempio di manipolazione del DOM
                const title = document.createElement("h1");
                title.textContent = "Hello World!";
                document.body.appendChild(title);
            `}/>
            {/* [TO FIX] Img del Browser/DOM/Tree + Descrizione (verificare differenza tra nodo ed elemento) */}
            <p>In questa struttura ad albero possiamo osservare tre concetti fondamentali:
                <ul>
                    <li><strong>Element Node</strong>: sono quei nodi che rappresentano gli elementi HTML (tag)</li>
                    <li><strong>Text Node</strong>: sono nodi che contengono solo testo (solitamente si trovano
                        nei nodi foglia)
                    </li>
                    <li><strong>Attribute Node</strong>: attributo che troviamo all'interno del tag HTML</li>
                </ul>
            </p>

            <h3>Accesso agli Elementi del DOM</h3>
            <p>Abbiamo sei aspetti fondamentali da considerare:
                <ul>
                    <li>children : contiene i children elements, ovvero tutti gli elementi figli di un elemento
                        <JavascriptCode code={`
                            // Inspector del Browser
                            $0.children
                        `}/>
                        <TerminalCode code={`
                            HTMLCollection(2) [h1, ul]
                                length: 2
                                0: h1
                                1: nav
                                __proto__: HTMLCollection
                        `}/>
                    </li>

                    <li>childNodes : contiene i children nodes, ovvero tutti i nodi figli (text-nodes compresi) di un
                        elemento
                        <JavascriptCode code={`
                            // Inspector del Browser
                            $0.childNodes
                        `}/>
                        <TerminalCode code={`
                            NodeList(3) [text, h1, ul]
                             length: 3
                                0: text
                                1: h1
                                2: nav
                                __proto__: NodeList
                        `}/>
                    </li>
                    <li>firstElementChild : contiene il primo child element (sottoinsieme di children)
                        <JavascriptCode code={`
                            // Inspector del Browser
                            $0.firstElementChild
                        `}/>
                        <TerminalCode code={`
                            <\h1> .... <\/h1>
                        `}/>

                    </li>
                    <li>firstChild : contiene il primo child node (sottoinsieme di childNodes)
                        <JavascriptCode code={`
                            // Inspector del Browser
                            $0.firstChild
                        `}/>
                        <TerminalCode code={`
                            #text
                        `}/>
                    </li>
                    <li>lastElementChild : contiene l'ultimo child element (sottoinsieme di children)
                        <JavascriptCode code={`
                            // Inspector del Browser
                            $0.lastElementChild
                        `}/>
                        <TerminalCode code={`
                            <\nav> .... <\/nav>
                        `}/>
                    </li>
                    <li>lastChild : contiene l'ultimo child node (sottoinsieme di childNodes)
                        <JavascriptCode code={`
                            // Inspector del Browser
                            $0.lastChild
                        `}/>
                        <TerminalCode code={`
                            <\nav> .... <\/nav>
                        `}/>
                    </li>
                </ul>
            </p>

            <h3>Cercare elementi nel DOM</h3>
            <p>Per cercare un elemento nel DOM possiamo utilizzare i seguenti metodi:
                <ul>
                    <li>getElementById : restituisce l'elemento con l'id specificato
                        <JavascriptCode code={`
                            document.getElementById("id");
                        `}/>
                        <TerminalCode code={`
                            <\button type="button" id="myButton">Click Me!</button>
                        `}/>
                    </li>
                    <li>getElementsByTagName : restituisce una HTMLCollection di elementi con il nome del tag specificato
                        <JavascriptCode code={`
                            document.getElementsByTagName("tag");
                        `}/>
                        <TerminalCode code={`
                            HTMLCollection(2) [button#myButton, button#myButton2]
                                length: 2
                                0: button#myButton
                                1: button#myButton2
                                myButton: button#myButton
                                myButton2: button#myButton2
                                __proto__: HTMLCollection
                        `}/>
                    </li>
                    <li>getElementsByClassName : restituisce una HTMLCollection di elementi con la classe specificata
                        <JavascriptCode code={`
                            document.getElementsByClassName("class");
                        `}/>
                        <TerminalCode code={`
                            HTMLCollection(2) [button#myButton, button#myButton2]
                                length: 2
                                0: button#myButton
                                1: button#myButton2
                                myButton: button#myButton
                                myButton2: button#myButton2
                                __proto__: HTMLCollection
                        `}/>
                    </li>
                    <li>querySelector : restituisce il primo elemento che corrisponde al selettore specificato
                        <JavascriptCode code={`
                            document.querySelector(".selector");
                        `}/>
                        <TerminalCode code={`
                            <\button type="button" id="myButton">Click Me!</button>
                        `}/>
                    </li>
                    <li>querySelectorAll : restituisce tutti gli elementi che corrispondono al selettore specificato
                        <JavascriptCode code={`
                            document.querySelectorAll(".selector");
                        `}/>
                        <TerminalCode code={`
                            NodeList(2) [button#myButton, button#myButton2]
                                length: 2
                                0: button#myButton
                                1: button#myButton2
                                __proto__: NodeList
                        `}/>
                    </li>
                </ul>
            </p>
            <p>Relativamente a questo esempio diventa importante osservare che il metodo <strong>querySelector</strong>
                e <strong>querySelectorAll</strong> non sono per così dire reattivi, come lo sono invece i metodi
                <strong>getElements...</strong>, poiché infatti eventuali modifiche che dovessimo apportare al DOM
                non vengono recepiti da questi due metodi. Contrariamente come detto, ai metodi
                <strong>getElements...</strong>
            </p>

            <h3>Manipolare gli Elementi del DOM</h3>
            <p>Per manipolare gli elementi del DOM possiamo utilizzare i seguenti metodi:
                <ul>
                    <li>element.append() : aggiunge un nodo o un elemento alla fine dell'elemento
                        <JavascriptCode code={`
                            const elementToAdd = document.createElement("li");
                            elementoAdd.innerText = "textAppended";
                            element.classList.add("my-list-item");
                            document.getElementById("my-list")[0].append(elementToAdd);
                        `}/>
                    </li>
                    <li>element.prepend() : aggiunge un nodo o un elemento all'inizio dell'elemento
                        <JavascriptCode code={`
                            const elementToAdd = document.createElement("li");
                            elementoAdd.innerText = "textPrepended";
                            element.classList.add("my-list-item");
                            document.getElementById("my-list")[0].prepend(elementToAdd);
                        `}/>
                    </li>
                    <li>innerHTML : restituisce o imposta il contenuto HTML di un elemento
                        <JavascriptCode code={`
                            document.getElementById("my-list")[0].children[0].innerHTML = "<\h1>Title</h1>";
                        `}/>
                    </li>
                    <li>innerText : restituisce o imposta il contenuto testuale di un elemento
                        <JavascriptCode code={`
                            document.getElementById("my-list")[0].children[0].innerText = "Text";
                        `}/>
                    </li>
                    <li>elem.className : restituisce o imposta la classe di un elemento
                        <JavascriptCode code={`
                            document.getElementByClassName("element")[0].className = "new-class";
                        `}/>
                    </li>
                    <li>elem.classList.add() : aggiunge una classe a un elemento
                        <JavascriptCode code={`
                            document.getElementByClassName("element")[0].classList.add("new-class");
                        `}/>
                    </li>
                    <li>elem.classList.remove() : rimuove una classe da un elemento
                        <JavascriptCode code={`
                            document.getElementByClassName("element")[0].classList.remove("class");
                        `}/>
                    </li>
                    <li>elem.classList.toggle() : aggiunge (se non presente) o rimuove (se presente) una classe da un
                        elemento
                        <JavascriptCode code={`
                            document.getElementByClassName("element")[0].classList.toggle("class");
                        `}/>
                    </li>
                    <li>elem.classList.contains() : verifica (restituendo un booleano) se un elemento ha una classe
                        specifica
                        <JavascriptCode code={`
                            document.getElementByClassName("element")[0].classList.contains("class");
                        `}/>
                    </li>
                </ul>
            </p>

            <h3>BOM - Browser Object Model</h3>
            <p>Il Browser Object Model (BOM) è una rappresentazione ad oggetti di un browser.
                Il BOM permette di interagire con il browser stesso, ad esempio per aprire nuove finestre, gestire i
                cookies, ecc.
            </p>
            <p>Il document fa parte di un oggetto gerarchicamente superiore chiamato window, che rappresenta la finestra
                del browser. Si tratta di un oggetto globale, a cui possiamo accedervi in ogni parte del codice,
                che espone tutte le API per interagire con il browser (location, navigator, history, ecc) e quindi
                interagire con l'intera finestra (contenente il documento) e non solo con il singolo elemento del DOM.
            </p>
            <p>L'oggetto window è l'oggetto globale di JavaScript, che rappresenta la finestra del browse, e che per il
                suo utilizzo non necessita di essere esplicitamente dichiarato.
            </p>
            <JavascriptCode code={`
                // Esempio di utilizzo dell'oggetto window (con dichiarazione esplicita, non necessaria)
                window.alert("Windows Richiamato Esplicitamente");
                
                // Esempio di utilizzo dell'oggetto window (senza dichiarazione esplicita)
                alert("Windows Richiamato Implicitamente");
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                Windows Richiamato Esplicitamente
                Windows Richiamato Implicitamente
            `}/>
            <p>Alcune API disponibili in window sono:
                <ul>
                    <li>location : permette di interagire con l'URL della pagina
                        <JavascriptCode code={`
                            window.locatio 
                        `}/>
                        <TerminalCode code={`
                            Location {
                                href: "http://localhost:3000/", 
                                ancestorOrigins: DOMStringList, 
                                origin: "http://localhost:3000", 
                                protocol: "http:", 
                                host: "localhost:3000", 
                                …
                            }
                        `}/>
                        <JavascriptCode code={`
                            window.location.href = "http://localhost:3000/";
                        `}/>
                        <JavascriptCode code={`
                            // Ricarica la pagina
                            window.location.reload;
                            
                            // Indica la posizione della finestra sull'asse Y (verticale)
                            window.location.scrollY;
                            
                            // Indica la posizione della finestra sull'asse X (orizzontale)
                            window.location.scrollX;
                            
                            // Reindirizza l'utente ad un'altra pagina (es. Google)
                            window.location = "https://www.google.com";
                        `}/>
                    </li>
                    <li>navigator : permette di interagire con le informazioni sul browser</li>
                    <li>history : permette di interagire con la cronologia del browser</li>
                    <li>screen : permette di interagire con le informazioni sullo schermo</li>
                    <li>document : permette di interagire con il DOM</li>
                </ul>
            </p>
        </div>
);
};

export default Dom;