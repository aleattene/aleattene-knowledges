import React from 'react';
import './Http.css'

const Http: React.FC = () => {
    return (
        <div>
            <h1>HTTP</h1>
            <p>Il protocollo HTTP è forse il protocollo di rete più famoso al mondo.
                E' il protocollo grazie al quale Internet è diventate l'immensa rete che è oggi, infatti lo usiamo
                più o meno consapevolmente ogni volta che navighiamo su internet quando::
                <ul>
                    <li>visitiamo un sito web digitando la URL nel browser</li>
                    <li>usiamo un dispositivo connesso alla Rete</li>
                    <li>etc..</li>
                </ul>
            </p>
            <p>Si tratta di un protocollo nato nel 1989 al CERN di Ginevra, in Svizzera, grazie alla mente di Tim
                Berners-Lee. Nel corso dei decenni ha subito diverse evoluzioni, arrivando alla versione 3
                (2022 - RFC9112), seppur la versione più diffusa è la 1.1 (1997 - RFC2068) poiché universalmente
                supportata da qualsiasi software moderno.
                <i>RFC è l'acronimo di Request for Comments è rappresenta una documento contenente le specifiche di
                uno standard internet o di un protocollo. La pubblicazione di un RFC è il risultato di un processo
                di revisione e discussione pubblica, e non implica necessariamente l'approvazione da parte di un
                organismo ufficiale. Gli RFC sono pubblicati dalla Internet Engineering Task Force (IETF).
                </i>
            </p>
            <p>Nel protocollo HTTP, il client (browser) invia una richiesta al server (web server) e il server
                risponde con una risposta. La richiesta e la risposta sono composte da header e body. L'header
                contiene informazioni sul messaggio, come il tipo di contenuto, la lunghezza del contenuto, ecc.
                Il body contiene i dati effettivi scambiati tra client e server.
                Ogni messaggio contiene quindi:
                <ul>
                    <li>informazioni di controllo (control data) che identifica la risorsa richiesta (solitamente
                        espressa sotto forma di URI), il metodo (per indicare cosa si vuole fare con la risorsa) e
                        la versione del protocollo
                    </li>
                </ul>
            </p>
            <p>[IMG] Struttura Messaggi Request/Response HTP (to fix)</p>
            <h2>URL, URI, and URN</h2>
            La URI (acronimo di Uniform Resource Identifier) è una sequenza di caratteri che identifica in modo univoco
            una risorsa (fisica o non) su Internet. Esempi di URI sono:
            <ul>
                <li>https://nodejs.org</li>
                <li>https://www.atleti.com/high-jumper/rossi/</li>
                <li>http://127.0.0.1</li>
            </ul>
            Questi indirizzi mostrati sono anche URL (acronimo di Uniform Resource Locator), perché oltre
            all'identificativo della risorsa(/high-jumper/rossi/) anche le informazioni su dove questa si trova
            (www.atleti.com) e come ottenerla (usando il protocollo https:// ).
            Attenzione a pensare che il primo ed il terzo esempio non siano degli URL, perché in realtà lo sono,
            in quanto la risorsa è /.
            Da questo possiamo quindi dedurre che gli URL (Uniform Resource Locator) sono un sottoinsieme delle URI
            (Uniform Resource Identifier).
            Ma non solo l'unico sottoinsieme, esistono infatti anche gli URN (Uniform Resource Name) i quali
            identificano in modo univoco una risorsa, senza però includere le informazioni su come raggiungerla.
            Ad esempio <code>urn:isbn:0451450523</code> identifica un libro tramite il suo codice ISBN, ma non
            dice nulla su dove trovare il libro, mentre <code>urn:ietf:rfc:2648</code> identifica il RFC che definisce
            i concetti di URI, URL e URN.
            <i>Come nota a margine è bene comunque osservare che nella pratica quotidiana siamo soliti definire:
                <ul>
                    <li>URL o indirizzo per riferirci ad esempio a https://www.atleti.com/risorsa</li>
                    <li>risorsa o path per riferirci alla parte /risorsa indicata nella URL</li>
                </ul>

            </i>
        </div>
    );
};

export default Http;