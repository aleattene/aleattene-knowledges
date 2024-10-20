import React from 'react';
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";


const TemplateDjango: React.FC = () => {
    return (
        <>
            <h1>Template</h1>
            <p>Possiamo immaginare il template in Django come un modello, uno schema predefinito, che consente di
                organizzare presentare le informazioni in modo coerente e strutturato.
            </p>
            <p>Django offre questo strumento agli sviluppatori per consentire loro di creare pagine web dinamiche e
                interattive, concentrandosi sulla logica di business piuttosto che sulla riscrittura continua della
                struttura base delle interfacce utente.
            </p>
            <p>Sappiamo che questo approccio è noto come MVT (Model-View-Template), la quale è una versione leggermente
                modificata del più noto MVC (Model-View-Controller). In entrambi i casi si tratta di approcci atti a
                favorire una migliore organizzazione del codice ed una migliore e più semplice manutenibilità del
                codice stesso.
            </p>
            <p>In sintesi i templare in Django sono file HTML che possono contenere marcatori e istruzioni di controllo,
                permettendo la generazione dinamica del contenuto, in base ai dati forniti dal backend.
                Si tratta di file in grado di incorporare quindi variabili, cicli, condizioni ed altri costrutti logici
                permettendo di adattare la visualizzazione in base alle esigenze specifiche dell'applicazione.
            </p>
            <p>Molto importante considerare anche che Django offre un sistema di ereditarietà dei template, dando quindi
                possibilità agli addetti ai lavori di creare dei template base che possono essere estesi
                (o sovrascritti) allo scopo di crearne di più specifici, favorendo quindi una gestione più efficiente
                e modulare dell'interfaccia utente, riducendo la duplicazione del codice e promuovendo una migliore
                coerenza visiva.
            </p>
            <p>Vediamo a questo punto un esempio pratico di template ipotizzando il caso di dover mostrare dinamicamente
                un elenco di prodotti con diverse categorie.
                Partiamo con il modello models.py:
                <PythonCode code={`
                    # models.py
                    from django.db import models
                    
                    class Product(models.Model):
                        title = models.CharField(max_length=100)
                        category = models.CharField(max_length=50)
                        price = models.DecimalField(max_digits=8, decimal_places=2)
                        
                        def __str__(self):
                            return self.title
                `}/>
            </p>
            <p>Passiamo a questo punto al template HTML, che avrà il compito di visualizzare i prodotti presenti nel
                nostro database, raggruppandoli per categoria e visualizzando solo i prodotti con prezzo inferiore a
                100€:
                <PythonCode code={`
                    # products_template.html
                    
                    <\!DOCTYPE html>
                    <html lang="it">
                        <head>
                            <meta charset="UTF-8">
                            <title>Lista Prodotti</title>
                        </head>
                        <body>
                            <h1>Lista Prodotti</h1>
                            <ul>
                                {% for category in categories %}
                                    <li>{{ category }}</li>
                                    <ul>
                                        {% for product in products %}
                                            {% if product.category == category and product.price < 100 %}
                                                <li>{{ product.title }} - {{ product.price }}</li>
                                            {% endif %}
                                        {% endfor %}
                                    </ul>
                                {% endfor %}
                            </ul>
                        </body>
                    </html>
                `}/>
            </p>
            <p>Osservando il codice ne emerge una sintassi chiara ed intuitiva, che permette appunto di creare un
                template per visualizzare i dati dei prodotti raggruppati per categoria e filtrati per prezzo, che a
                sua volta Django renderizzerà sostituendo i marcatori (le variabili) con i dati effettivi prima di
                che questo venga visualizzato dall'utente nel browser.
            </p>
            <p>Per quanto riguarda le variabili ed i cicli utilizzati nei template di Django possiamo notare una
                notevole somiglianza, seppur con alcune differenze:
                <ul>
                    <li>condizioni: in Django il linguaggio è più limitato, non supportando tutte le costruzioni
                        condizionali avanzate (ad esempio non è possibile utilizzare gli operatori logici and, or e not,
                        così come non è possibile definire condizioni complesse all'interno di un singolo blocco if).
                    </li>
                    <li>variabili: sono limitate all'ambito del template stesso e non possono accedere direttamente
                        agli oggetti e alle variabili del codice python del backend (devono infatti essere passate
                        esplicitamente dal backend attraverso il contesto del template)
                    </li>
                    <li>cicli: sono simili al classico ciclo for di Python, progettati per iterare su oggetti iterabili
                        (liste, tuple, dizionari, ecc.); di contro non è possibile utilizzare cicli while, definire
                        funzioni all'interno del ciclo for, la generazione di numeri o la creazioni di generatori
                    </li>
                </ul>
            </p>

            <h3>Filtri nei Template</h3>
            <p>Vengono utilizzati per formattare e manipolare dati in modo efficiente e pulito all'interno dei template,
                mantenendo la logica di presentazione separata dalla logica di business e adattando quindi i dati al
                contesto di visualizzazione desiderato.
            </p>
            <p>Tra la vasta gamma di operazioni possibili abbiamo:
                <ul>
                    <li>formattazione delle date e delle stringhe, per esempio:
                        <ul>
                            <li>date: formatta una data in un formato specifico
                                <PythonCode code={`
                                    <\p> Data di Registrazione: {{ registration_date|date:"d/m/Y" }}</p>
                                `}/>
                            </li>
                            <li>time: formatta un'ora in un formato specifico
                                <PythonCode code={`
                                    <\p> Ora di Inizio: {{ start_time|time:"H:i" }}</p>
                                `}/>
                            </li>
                            <li>capfirst: rende maiuscola la prima lettera di una stringa
                                <PythonCode code={`
                                    <\p> Nome: {{ name|capfirst }}</p>
                                `}/>
                            </li>
                            <li>lower e upper: rendono rispettivamente minuscola e maiuscola una stringa (django 5)
                                <PythonCode code={`
                                    <\p> Username: {{ username|lower }}</p>
                                    <\p> Password: {{ password|upper }}</p>
                                `}/>
                            </li>
                        </ul>
                    </li>
                    <li>manipolazione delle liste e dei numeri:
                        <ul>
                            <li>length: restituisce la lunghezza di una lista
                                <PythonCode code={`
                                    <\p> Numero di Prodotti: {{ products|length }}</p>
                                `}/>
                            </li>
                            <li>slice: restituisce una porzione di una lista
                                <PythonCode code={`
                                    <\\ul>
                                        {% for product in products|slice:":3" %}
                                            <li>{{ product }}</li>
                                        {% endfor %}
                                    <\\ul>
                                `}/>
                            </li>
                            <li>floatformat: formatta un numero in virgola mobile (django 5)
                                <PythonCode code={`
                                    <\p> Prezzo: {{ price|floatformat:"2" }}</p>
                                `}/>
                            </li>
                            <li>intcomma: inserisce una virgola ogni tre cifre di un numero intero (django 5)
                                <PythonCode code={`
                                    <\p> Prezzo: {{ price|intcomma }}</p>
                                `}/>
                            </li>
                            <li>truncatechars: tronca una stringa al numero di caratteri specificato
                                <PythonCode code={`
                                    <\p> Descrizione: {{ description|truncatechars:100 }}</p>
                                `}/>
                            </li>
                            <li>wordcount: conta il numero di parole in una stringa
                                <PythonCode code={`
                                    <\p> Numero di Parole: {{ text|wordcount }}</p>
                                `}/>

                            </li>
                        </ul>

                    </li>
                    <li>ecc.</li>
                </ul>
            </p>

            <h3>Tag nei Template</h3>
            <p>I tag nei template rappresentano lo strumento essenziale per la manipolazione dinamica del contenuto
                HTML, basata su dati e condizioni specifiche. I tag possono infatti essere utilizzati per:
                <ul>
                    <li>controllare il flusso del programma: tramite cicli, condizioni, ecc.</li>
                    <li>manipolare le variabili</li>
                    <li>iterare attraverso collezioni di dati</li>
                    <li>importare altri template</li>
                    <li>definire blocchi di contenuto</li>
                    <li>ecc.</li>
                </ul>
            </p>
            <p>Tra tutti, possiamo considerare i seguenti come i più significativi:
                <ul>
                    <li>&lbrace;% csrf_token %&brace; (django 4): utilizzato per la generazione di un token CSRF per un
                        form HTML,
                        necessario a proteggere un sito web da attacchi di tipo CSRF (Cross-Site Request Forgery).
                        Deprecato per le versioni successive a favore di &lbrace;% csrf_input %&brace;
                        <PythonCode code={`
                            <\form method="post">
                                &lbrace;% csrf_token %&brace;
                                <!-- Eventuali altri campi del form -->
                                <button type="submit"> Invia </button>
                            </form>
                        `}/>
                    </li>
                    <li>&lbrace;% if %&rbrace;: utilizzato per eseguire un blocco di codice a seguito del verificarsi
                        di una condizione (vera)
                        <PythonCode code={`
                            {% if user.is_authenticated %}
                                <\p> Benvenuto, {{ user.username }}!</p>
                            {% else %}
                                <\p> Benvenuto, Ospite!</p>
                            {% endif %}
                        `}/>
                    </li>
                    <li>&lbrace;% for %&rbrace;: utilizzato per iterare su una sequenza di elementi ed eseguire a sua
                        volta un blocco di codice per ogni elemento
                        <PythonCode code={`
                            <\\ul>
                                {% for item in items %}
                                    <li>{{ item }}</li>
                                {% endfor %}
                            <\\ul>
                        `}/>
                    </li>
                    <li>&lbrace;% block %&rbrace; e &lbrace;% extends %&rbrace;: utilizzati per la creazione della
                        struttura di un template estendibile, consentendo di conseguenza di definire blocchi di
                        contenuto che possono essere sovrascritti da template figli
                        <PythonCode code={`
                            # base.html
                            <\!DOCTYPE html>
                            <html lang="it">
                                <head>
                                    <meta charset="UTF-8">
                                    <title>{% block title %}Titolo Predefinito{% endblock %}</title>
                                </head>
                                <body>
                                    <header>
                                        {% block header %}
                                            <!-- Contenuto dell'intestazione -->
                                        {% endblock %}
                                    </header>
                                    <main>
                                        {% block content %}
                                            <!-- Contenuto principale -->
                                        {% endblock %}
                                    </main>
                                    <footer>
                                        {% block footer %}
                                            <!-- Contenuto del piè di pagina -->
                                        {% endblock %}
                                    </footer>
                                </body>
                            </html>
                        `}/>
                        <PythonCode code={`
                            # child_template.html
                            {% extends "base.html" %}
                            
                            {% block title %}Titolo Personalizzato{% endblock %}
                             
                            {% block content %}
                                <\h1>Contenuto Personalizzato</h1>
                                <!-- Altri contenuti personalizzati -->
                            {% endblock %}
                            
                            {% block footer %}
                                <p>Piè di Pagina Personalizzato</p>
                            {% endblock %}
                        `}/>
                    </li>
                    <li>&lbrace;% url 'website:page' %&rbrace;: utilizzato per generare un URL-reverse a partire da un
                        nome di vista specifico, permettendo così agli sviluppatori la creazione di link dinamici alle
                        diverse viste del progetto
                        <PythonCode code={`
                            <a href="{% url 'website:home' %}">Go to Page</a>
                        `}/>
                    </li>
                    <li>&lbrace;% ifequal %&rbrace; e &lbrace;% ifnotequal %&rbrace;: utilizzati per confrontare due
                        valori ed eseguire un blocco di codice a seguito del verificarsi l'uguaglianza piuttosto che la
                        disuguaglianza
                        <PythonCode code={`
                            {% ifequal user.role 'admin' %}
                                <\p> Accesso Amministratore</p>
                            {% else %}
                                <\p> Accesso Utente</p>
                            {% endifequal %}
                        `}/>
                    </li>
                    <li>&lbrace;% include %&rbrace;: utilizzato per importare un template all'interno del template
                        corrente, consentendo di riutilizzare blocchi di codice comuni a più template
                        <PythonCode code={`
                            {% include 'header.html' %}
                                <!-- Altri contenuti -->
                            {% include 'footer.html' %}
                        `}/>
                    </li>
                    <li>&lbrace;% with %&rbrace;: utilizzato per assegnare un valore ad una variabile all'interno del
                        blocco, rendendo più leggibile e conciso il codice del template
                        <PythonCode code={`
                            {% with total_price=product.price*quantity %}
                                <\p> Prezzo Totale: {{ total_price }}</p>
                            {% endwith %}
                        `}/>
                    </li>
                    <li>&lbrace;% comment %&rbrace;: utile per inserire commenti all'interno del codice del template,
                        senza che questi vengano poi visualizzati nella pagina HTML risultante
                        <PythonCode code={`
                            {% comment %}
                                Questo è un commento che non verrà visualizzato nel codice HTML
                            {% endcomment %}
                        `}/>
                    </li>
                    <li>&lbrace;% now %&rbrace;: restituisce la data e l'ora corrente, formattata in base al formato
                        specificato
                        <PythonCode code={`
                            <\p> Data e Ora Corrente: {% now "Y-m-d H:i" %}</p>
                        `}/>
                    </li>
                    &lbrace;% timezone %&rbrace;: utilizzato per regolare la rappresentazione di un oggetto
                    datetime in base al fuso orario specificato
                    <PythonCode code={`
                            {% timezone "Europe/Rome" %}
                                <\p> Data e Ora Corrente: {{ value }}</p>
                            {% endtimezone %}
                        `}/>
                    <li>&lbrace;% spaceless %&rbrace;: rimuove tutti gli spazi vuoti superflui dal contenuto generato
                        all'interno del blocco, riducendo la dimensione del codice HTML risultante
                        <PythonCode code={`
                            {% spaceless %}
                                <\div>
                                    <p>Testo con spazi vuoti superflui</p>
                                </div>
                            {% endspaceless %}
                        `}/>
                    </li>
                    <li>&lbrace;% verbatim %&rbrace;: utilizzato per includere testo che non deve essere interpretato
                        all'interno del template ed è particolarmente utile quando si desidera evitare l'interpretazione
                        di alcuni caratteri speciali piuttosto che di codice JS
                        <PythonCode code={`
                            {% verbatim %}
                                <\script>
                                    // Codice JavaScript che non deve essere interpretato
                                    const x = 10;
                                </script>
                            {% endverbatim %}
                        `}/>
                    </li>
                    <li>&lbrace;% urlize %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% widthratio %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% templatetag %&rbrace;: ... {/*TO FIX */}</li>
                    {/*TO Tag di Commento FIX */}
                    <li>&lbrace;% regroup %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% ssi %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% unordered_list %&rbrace;: ... {/*TO FIX */}</li>

                    {/*TO FIX -> Nuovi tag disponibili solo in Django 5 */}
                    <li>&lbrace;% lorem %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% ifchanged %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% csrf_input %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% autoescape %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% cycle %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% truncatechars %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% truncatewords %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% striptags %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% pluralize %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% date %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% time %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% filesizeformat %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% shuffle %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% slice %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% humanize_timesince %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% firstof %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% istrip %&rbrace; e &lbrace;% rstrip %&rbrace;: ... {/*TO FIX */}</li>
                    <li>&lbrace;% phone2numeric %&rbrace;: ... {/*TO FIX */}</li>
                </ul>
            </p>
        </>
    );
}

export default TemplateDjango;