import React from 'react';
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";
import PythonCode from "../../../../components/Code/PythonCode/PythonCode.tsx";

const DjangoBE: React.FC = () => {
    return (
        <div>
            <h1>Django</h1>
            <p>Django risulta essere uno dei framework web più importanti e diffusi al mondo,
                scritto in Python e dotato di oltre 50000 stelle su GitHub.</p>
            <p>Con questo framework il processo di sviluppo si semplifica notevolmente, abbiamo infatti:
                <ul>
                    <li>modelli: permettono di definire in modo flessibile la struttura dei dati</li>
                    <li>viste: trasformano i dati in pagine web dinamiche</li>
                    <li>template: permettono di creare la struttura delle pagine web</li>
                    <li>URLs: offrono percorsi intuitivi per navigare tra le diverse sezioni del progetto</li>
                    <li>amministrazione: un pannello di controllo automatico per gestire i dati con facilità</li>
                </ul>
            </p>
            <p>Django si basa sulla filosofia "Don't Repeat Yourself" (DRY) cercando per quando possibile di rendere lo
                sviluppo di un progetto quanto più semplice ed intuitivo possibile. Non a caso offre un set completo di
                strumenti atti a rendere la vita più semplice possibile agli sviluppatori, permettendo loro di
                concentrarsi prioritariamente sulla logica di business piuttosto che sulle le complessità tecniche.
            </p>
            <p>Pro:
                <ul>
                    <li>Rapidità di sviluppo: basandosi sulla filosofia "a batterie incluse", Django offre un set
                        completo di strumenti e funzionalità integrate che permettono allo sviluppatore di essere
                        estremamente efficace su progetti richiedenti implementazioni standard di funzionalità quali
                        ad esempio l'autenticazione, la gestione dei permessi, il routing, ecc.
                    </li>
                    <li>ORM potente: Django offre un ORM (Object-Relational Mapping) molto potente in grado di
                        semplificare notevolmente l'interazione con i database relazionali permettendo agli sviluppatori
                        di interagire con esso attraverso oggetti Python, riducendo così la complessità delle query SQL
                        ed offrendo un approccio più orientato agli oggetti. In particolare è possibile definire il
                        modello di dati una sola volta in Python e poi sarà Django a creare automaticamente le tabelle
                        e relazioni del database corrispondente, il tutto ovviamente a vantaggio della manutenibilità
                        del codice e rispetto del principio DRY.
                    </li>
                    <li>Sicurezza: il framework integra di default diverse misure di sicurezza per proteggere gli
                        sviluppatori da errori comuni e per mitigare rischi associati alle vulnerabilità più diffuse.
                        Fornisce infatti funzionalità di protezione da attacchi CSRF, SQL injection, XSS, hashing delle
                        password, autenticazione e autorizzazione, ecc.
                    </li>
                    <li>Comunità Attiva</li>
                </ul>
            </p>
            <p>Contro:
                <ul>
                    <li>Steep Learning Curve: curva di apprendimento piuttosto ripida, soprattutto per chi non ha
                        esperienza con Python, con i framework web in generale o con le tecnologie MVC
                        (Model-View-Controller). Chiaramente l'investimento di tempo iniziale per apprendere Django
                        viene ampiamente ripagato in termini di successiva maggiore efficienza e facilità di sviluppo.
                    </li>
                    <li>Eccessiva struttura per progetti semplici</li>
                    <li>Overhead: a volte potrebbe capitare soggettivamente di percepire come eccessiva la quantità di
                        risorse (tempo di sviluppo e potenza di calcolo) richieste rispetto alle esigenze specifiche di
                        un progetto.
                    </li>
                    <li>Non adatto a tutte le applicazioni: Django è ottimo per lo sviluppo rapido di applicazioni web
                        ma potrebbe non essere la selezione migliore per progetti altamente specializzati o Single Page
                        Applications (SPA).
                    </li>
                </ul>
            </p>
            <h2>Installazione</h2>
            <TerminalCode code={`
                # Installazione ultima versione stabile di Django
                pip install django    
                
                # Installazione versione specifica di Django
                pip install django==5.0.4
            `}/>
            <p>Se l'installazione è andata a buon fine, possiamo verificare la versione di Django installata con il
                comando:
                <TerminalCode code={`
                    django-admin --version
                `}/>
            </p>
            {/*<p>Pylint: ottimo linter gratuito</p>*/}
            {/*<p>ChatGPT: Generative Pre-trained Transformer<p>*/}
            {/*<p>Bootstrap: framework frontend che si può includere tramite CDN nei template di Django</p>*/}
            {/*Ottenuti i file andranno configurati all'interno dell'applicazione copiandoli all'interno della directory
                static/ per poi referenziarli all'interno dei template HTML utilizzando i tag {% load static %} ,
                <link> e <script> .*/}
            <h2>Esempio Template</h2>
            <PythonCode code={`
                {% load static %}
                <\!DOCTYPE html>
                <html lang="it">
                    <head>
                        <title>Il mio primo sito Django</title>
                        <link rel="stylesheet" type="text/css" href="{% static 'css/bootstrap.min.css' %}">
                    </head>
                    <body>
                        <h1>Benvenuto nel mio primo sito Django!</h1>
                        <p>Questo è il mio primo template HTML con Django.</p>
                        <script src="{% static 'js/bootstrap.min.js' %}"></script>    
                    </body>
                </html>
            `}/>




        </div>
    );
}

export default DjangoBE;