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
            <h2>Versioni di Django</h2>
            <p>Le versioni di Django seguono uno schema di numerazione ben definito, dove la prima cifra indica la
                versione principale, la seconda cifra indica la versione minore e la terza cifra indica la patch di
                correzione. Ad esempio, la versione 4.1.1 indica che si tratta della versione 4 di Django, con la patch
                di correzione 1.
                Tra le versioni tra cui scegliere un'importante distinzione va fatta tra:
                <ul>
                    <li>versioni LTS (Long Term Support): versioni supportate a lungo termine, con un ciclo di vita di
                        circa 3 anni, che ricevono aggiornamenti di sicurezza e correzioni di bug per un periodo di
                        tempo più lungo rispetto alle versioni non LTS. Vale la pena scegliere questa versione quando si
                        ha a che fare con progetti che richiedono un elevato livello di affidabilità ed un ciclo di vita
                        di diversi anni.
                    </li>
                    <li>versioni non LTS: versioni che ricevono aggiornamenti di sicurezza e correzioni di bug per un
                        periodo di tempo più breve rispetto alle versioni LTS. Si tratta quindi di scegliere queste
                        versioni nel momento in cui si affrontano progetti che necessitano delle ultime funzionalità pur
                        essendo disposti ad accettare un rischio maggiore di instabilità.
                    </li>
                </ul>
            </p>
            <h2>Architettura Django</h2>
            <p>Django segue il modello architetturale MTV (Model-Template-View) che è una variante del più noto MVC
                (Model-View-Controller). Si tratta di un'architettura organizzativa chiara per lo sviluppo di
                applicazioni web che separa:
                <ul>
                    <li>la logica di business (Model)</li>
                    <li>la presentazione dei dati (View)</li>
                    <li>la gestione delle interazioni utente (Template)</li>
                </ul>
            </p>
            <h2>MVC vs MTV</h2>
            <p>Le architetture MVC basano la suddivisione delle applicazioni in tre componenti distinti, ognuno dei
                quali con un ruolo specifico:
                <ul>
                    <li>Model: rappresenta la struttura dei dati e gestisce la logica di business; in sostanza il Model
                        definisce come i dati sono organizzati, elaborati e archiviati. Nel caso di Django il Model è
                        responsabile di definire la struttura del database, interagendo con esso attraverso il proprio
                        ORM (Object-Relational Mapping).
                    </li>
                    <li>View: gestisce la presentazione dei dati all'utente esibendo i dati forniti dal Model ma in un
                        formato più adatto. Nel caso di Django, con la variante MTV, la View può essere paragonata alla
                        componente Template, responsabile quindi di definire come i dati devono essere presentati
                        all'utente.
                    </li>
                    <li>Controller: gestisce le interazioni utente tra Model e View, occupandosi infatti di ricevere le
                        richieste dell'utente, manipolare il Model di conseguenza e aggiornare la View per riflettere le
                        modifiche apportate. In Django tuttavia, la logica di controllo è prettamente gestita dalle
                        View (variante MTV).
                    </li>
                </ul>
            </p>
            <h2>Model</h2>
            <p>In Django il Model rappresenta la struttura dei dati e come questi devono essere organizzati, elaborati e
                archiviati; in sostanza il Model in Django è responsabile di definire la struttura del database,
                interagendo con esso attraverso il proprio ORM (Object-Relational Mapping).
            </p>
            <p>Esempio (modello utenti):
                <PythonCode code={`
                    from django.db import models
                    
                    class User(models.Model):
                        first_name = models.CharField(max_length=50)
                        last_name = models.CharField(max_length=50)
                        email = models.EmailField(unique=True)
                        date_joined = models.DateTimeField(auto_now_add=True)
                        is_active = models.BooleanField(default=True)
                        
                        def __str__(self):
                            return f'User: {self.first_name} {self.last_name}.'
                `}/>
            </p>
            <p>In questo caso è stata creata la classe User(models.Model) che eredita da models.Model le funzionalità
                di base.
                Tutti gli altri campi del modello (first_name, last_name, email, date_joined, is_active) rappresentano
                di fatto gli attributi dell'utente.
                Infine il metodo __str__ permette di definire come l'oggetto User deve essere rappresentato a livello di
                leggibilità una volta mandato in stampa l'oggetto stesso o ad esempio quando visualizzato all'interno
                dell'interfaccia di amministrazione di Django.
            </p>
            <p>Definito il modello per far si che questi cambiamenti diventino effettivi a livello di database
                (creazione tabelle, etc) bisogna eseguire le cosiddette migrazioni, ovvero delle operazioni che
                sincronizzano il modello con il database.
                Per creare una migrazione si utilizza il comando:
                <TerminalCode code={`
                    python manage.py makemigrations
                `}/>
                e per applicarle:
                <TerminalCode code={`
                    python manage.py migrate
                `}/>
            </p>
            <p>A questo punto il modello è stato definito e sincronizzato con il database e possiamo quindi interagire
                con i dati e il database attraverso l'ORM di Django. Se ad esempio volessimo creare un nuovo utente
                potremmo farlo in questo modo:
                <PythonCode code={`
                    from myapp.models import User
                    
                    user = User(first_name='John', last_name='Doe', email='example@example.com, is_active=True)
                    user.save()
                `}/>
            </p>

            <h2>Template</h2>
            <p>In Django (MTV) il Template svolge un ruolo simile alla View del pattern MVC, ovvero si occupa di
                definire la presentazione dei dati ed il modo in cui devono essere visualizzati nell'interfaccia utente.
            </p>
            <p>Di fatto il Template è un file di testo contenente markup HTML insieme a tag e particolari filtri di
                Django.
            </p>
            <p>Il loro utilizzo permette quindi la chiara separazione della logica di presentazione dalla
                logica di business.
            </p>
            <p>Esempio:</p>
            <PythonCode code={`
                <\!DOCTYPE html>
                <html lang="it">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        
                        <title>Il mio primo sito Django</title>
                    </head>
                    <body>
                        <header>
                            <h1>Benvenuto su {{ name }}</h1>
                        </header>
                        <main>
                            <h2> Last Articles </h2>
                            <ul>
                                {% for article in articles %}
                                    <li><a href="{{ article.url }}">{{ article.title }}</a></li>
                                {% endfor %}
                            </ul>
                        </main>
                        <footer>
                            <p>Copyright &copy; {{ current_year }} - AA</p> 
                        </footer>   
                    </body>
                </html>
            `}/>
            <p>Una prima cosa che salta sicuramente all'occhio è:
                <ul>
                    <li>l'inserimento di variabili all'interno del template racchiuse tra parentesi graffe
                        &lbrace;&lbrace; variabile &rbrace;&rbrace; le quali una volta che il template verrà processato
                        saranno sostituite con il valore corrispondente
                    </li>
                    <li>la presenza di una struttura di controllo &lbrace;% for ... in ... %&rbrace;  che
                        permette di iterare su iterable generando poi di conseguenza codice HTML dinamico, magari con
                        dati forniti dal Model
                    </li>
                </ul>
                In sostanza quando un utente richiede la pagina, Django processa il template, sostituendo le variabili
                e valutando le strutture di controllo, per poi restituire l'HTML risultante al browser dell'utente.
            </p>

            <h2>View</h2>
            <p>La View si occupa di elaborare la logica di presentazione, interagendo con il Model e il Template per
                generare la risposta da inviare al client (browser dell'utente).
            </p>
            <p>Sostanzialmente le View sono responsabili di ricevere le richieste degli utenti, elaborarle e restituire
                una risposta appropriata, che nella maggioranza dei casi è un pagani HTML dinamicamente generata grazie
                all'utilizzo di un Template.
            </p>
            <p>Esempio:</p>
            <PythonCode code={`
                from django.http import HttpResponse
                from django.shortcuts import render
                from .models import Article
                                    
                # VIEW function                    
                def article_list(request):
                    
                    # Recupera gli ultimi 10 articoli dal database
                    last_articles = Article.objects.order_by('-date')[:10]
                    
                    # Passa gli articoli al Template
                    context = {'last_articles': last_articles}
                    
                    # Carica il Template e genera una risposta
                    return render(request, 'articles/article_list.html', context) 
            `}/>
            <p>In questo esempio la prima cosa da osservare è che la funzione article_list è la nostra View e come
                argomento prende un oggetto request contenente le informazioni sulla richiesta HTTP ricevuta dal
                browser dell'utente.
            </p>
            <p>Dopodiché una volta recuperati gli articoli dal database questi vengono passati al template sotto forma
                di dizionario Python (context).
            </p>
            <p>Infine la funzione render() si occupa di caricare il template, popolarlo e generare una risposta HTTP
                contenente il codice HTML da inviare al client (browser dell'utente).
            </p>
            <p>Per far sì che la View sia effettivamente eseguita quando un utente richiede una pagina, è necessario
                associare la View stessa ad un URL e ciò può essere fatto attraverso il file urls.py: così facendo
                quando un utente vista l'URL corrispondente Django esegue la View associata restituendo poi la pagina
                HTML generata al browser dell'utente.
            </p>

            <h2>URL e View</h2>
            <p>Le URL (Uniform Resource Locator) sono stringhe di testo uniche che identificano risorse specifiche
               all'interno di un'applicazione web, infatti ogniqualvolta un utente digita una URL nel browser Django
               usa le definizioni URL (attraverso i file urls.py) per determinare quale View eseguire per rispondere
               alla richiesta.
            </p>
            <p>In questi file urls.py è possibile definire le URL dell'applicazione e associarle alle View
                corrispondenti con una sintassi costituita da una stringa di testo statico o da parti variabili
                (parametri dinamici) che consentono di passare dati specifici alla view, come ad esempio ID di un
                utente.
            </p>
            <p>Le URLs possono inoltre essere organizzate in modo gerarchico o modulare allo scopo di adattarsi alle
                esigenze specifiche dell'applicazione rendendo la struttura più efficiente, chiara ed organizzata.
            </p>
            <p>Esempio - file urls.py dell'applicazione:</p>
            <PythonCode code={`
                from django.urls import path
                from . import views
                
                urlpatterns = [
                    path('', views.article_list, name='article_list'),
                    path('articles/<\int:article_id>/', views.article_detail, name='article_detail'),
                ]
            `}/>
            <p>I due punti più importante che dobbiamo osservare in questo codice sono:
                <ul>
                    <li>la funzione path() che definisce un URL e associa ad esso una View specifica</li>
                    <li>il parametro dinamico &lt;int:article_id&gt; presente nella URL che rappresenta l'ID
                        dell'articolo e che verrà passato come argomento alla View associata
                    </li>
                    <li>il parametro name che fornisce un identificativo per la specifica View, utile successivamente
                        per riferirsi ad essa e generare URL dinamici all'interno del Template
                    </li>
                </ul>
            </p>
            <p>Esempio (file urls del progetto):</p>
            <PythonCode code={`
                from django.contrib import admin
                from django.urls import path, include
                
                urlpatterns = [
                    path('admin/', admin.site.urls),
                    path('articles/', include('myapp.urls')),
            `}/>
            <p>In questo caso la funzione include() permette di includere le definizioni URL dell'applicazione
                myapp.urls all'interno delle definizioni URL del progetto principale, dando vita come già preannunciato
                ad una struttura gerarchica di routing.
            </p>

            {/* [TO FIX] img funzionalità Django 4.2.11 vs 5 */}

            <h2>Model</h2>
            <p>In Django i Model sono utilizzati per definire la struttura dei dati dell'applicazione e per interagire
                con il database. Per la loro definizione è necessario creare una classe Python che erediti le
                funzionalità principali da models.Model (indicando tra le altre cose a Django che si tratta di classi
                che devono essere salvate nel database) e che definisca gli attributi della classe come campi del
                modello.
            </p>
            <p>Esempio:</p>
            <PythonCode code={`
                from django.db import models
                
                class Article(models.Model):
                    title = models.CharField(max_length=100)
                    content = models.TextField()
                    author = models.ForeignKey('Author', on_delete=models.CASCADE)
                    date = models.DateTimeField(auto_now_add=True)
                    
                class Author(models.Model):
                    name = models.CharField(max_length=50)
                    surname = models.CharField(max_length=50)
                    email = models.EmailField()
            `}/>
            <p>La cosa più semplice da osservare immediatamente è che di fatto questi modelli altro non fanno che essere
                mappati direttamente su tabelle nel database relazionale, sulla base sia della struttura del modello
                stesso che dalle sue relazioni con altri modelli.
            </p>
            <p>Questo mapping, come già più volte ripetuto, viene effettuato automaticamente da Django attraverso il
                proprio ORM (Object Relational Mapping) che si occupa di tradurre le operazioni sui modelli in query SQL
                che interagiscono direttamente con il database.
            </p>
            <p>Questo mapping avviene nel seguente modo:
                <ul>
                    <li>definizione del modello python che rappresenta la struttura dei dati dell'applicazione
                        <PythonCode code={`
                            from django.db import models
                            
                            class User(models.Model):
                                name = models.CharField(max_length=100)
                                email = models.EmailField(unique=True)
                        `}/>
                    </li>
                    <li>creazione delle migrazioni del database contenenti le istruzioni SQL necessarie per creare o
                        aggiornare il database
                        <TerminalCode code={`
                            python manage.py makemigrations
                        `}/>
                    </li>
                    <li>applicazione delle migrazioni per interagire effettivamente con il database
                        <TerminalCode code={`
                            python manage.py migrate
                        `}/>
                    </li>
                    <li>manipolazione dei dati attraverso l'ORM stesso, come ad esempio per la creazione di un nuovo
                        utente
                        <PythonCode code={`
                            user = User(name='Alessandro', email='example@example.com')
                            user.save()
                        `}/>
                    </li>
                    <li>recupero dei dati dal database, sfruttando i metodi di query forniti dall'ORM
                        <PythonCode code={`
                            # Recover all users from the database
                            users = User.objects.all()
                        `}/>
                    </li>
                    <li>Aggiornamento ed eliminazione dei dati
                        <PythonCode code={`
                            # Modify the name of the user with name 'Alessandro' to 'Alessio'
                            user = User.objects.get(name='Alessandro')
                            user.name = 'Alessio'
                            user.save()
                            
                            # Delete the user with name 'Mario'
                            user = User.objects.get(name='Mario')
                            user.delete()   
                        `}/>

                    </li>
                </ul>
            </p>

            {/* [TO FIX] img funzionalità QuerySet, Json, Ordinamento, Validatori Django 4.2.11 vs 5 */}

            <h2>ORM e QuerySet</h2>
            <p>L'ORM (Object-Relational Mapping) di Django è un componente fondamentale del framework che permette di
                tradurre automaticamente le operazioni sui modelli Python in istruzioni SQL che interagiscono
                direttamente con il database. Attraverso l'ORM è possibile quindi effettuare una vasta gamma di
                operazioni sul database, tra cui:
                <ul>
                    <li>creazione di nuovi record: creando e salvando nuove istanze dei modelli Python corrispondenti
                    </li>
                    <li>lettura di dati: utilizzando metodi di query come .all(), .filter(), .get(), ecc. forniti dai
                        manager dei modelli
                    </li>
                    <li>aggiornamento di dati: modificando le proprietà degli oggetti dei modelli Python e salvando le
                        modifiche
                    </li>
                    <li>eliminazione dei record: utilizzando il metodo .delete() sui modelli Python
                    </li>
                </ul>
            </p>
            <p>Aspetto importante da non dimenticare è che l'ORM di Django oltre a semplificare l'interazione con il
                database, fornisce anche funzionalità avanzate come la gestione delle transazioni, la prevenzione degli
                attacchi di SQL injection e la gestione delle relazioni tra i modelli.
            </p>
            <p>Per l'interrogazione del database ed il recupero dei dati Django si serve di QuerySet, ovvero una serie
                di risultato di query su un modello specifico o su più modelli correlati.
                Un QuerySet può essere creato utilizzando i manager dei modelli Django, ad esempio:
                <ul>
                    <li>recupero di tutti gli articoli dal database
                        <PythonCode code={`
                            articles = Article.objects.all()
                        `}/>
                    </li>
                    <li>filtraggio dei risultati in base a determinati criteri (metodo filter() ed exclude())
                        <PythonCode code={`
                            # Recupera tutti gli articoli scritti da un determinato autore
                            articles = Article.objects.filter(author='Alessandro')
                            
                            # Recupera tutti gli articoli tranne quelli scritti da un determinato autore
                            articles = Article.objects.exclude(author='Alessandro')
                            
                            # Recupera tutti gli articoli scritti dopo il primo Gennaio 2024
                            articles = Article.objects.filter(date__gt='2024-01-01')
                        `}/>
                    </li>
                    <li>ordinamento dei risultati (metodo order_by())
                        <PythonCode code={`
                            # Recupera tutti gli articoli ordinati per data di creazione
                            articles = Article.objects.order_by('date')
                        `}/>
                    </li>
                    <li>recupero di un singolo oggetto (metodo get())
                        <PythonCode code={`
                            # Recupera l'articolo con ID 77
                            article = Article.objects.get(id=77)
                        `}/>
                    </li>
                    <li>limitazione di risultati (slice)
                        <PythonCode code={`
                            # Recupera i primi 10 articoli dal database
                            first_ten_articles = Article.objects.all()[:10]
                        `}/>
                    </li>
                    <li>concatenazione di QuerySet (operatore AND e OR) per combinare più filtri
                        <PythonCode code={`
                            # Recupera tutti gli articoli scritti da Alessandro e pubblicati dopo il 01/01/2024
                            articles = Article.objects.filter(author='Alessandro') & 
                                        Article.objects.filter(date__gt='2024-01-01')
                                        
                            # Recupera tutti gli articoli scritti da Alessandro o pubblicati prima del 01/01/2024  
                            articles = Article.objects.filter(author='Alessandro') | 
                                        Article.objects.filter(date__lt='2024-01-01')          
                        `}/>
                    </li>
                    <li>esecuzione di query complesse (annidate, di aggregazione, più condizioni, ecc.)</li>
                </ul>
            </p>
            <p>Di fatto i QuerySet rappresentano una collezione di oggetti che soddisfano determinati criteri di query;
                di seguito un esempio di utilizzo:
                <PythonCode code={`
                    from myapp.models import Article
                    
                    # Recupera tutti gli articoli dal database
                    articles = Article.objects.all()
                    
                    # Recupera gli articoli scritti da Alessandro (filtraggio)
                    articles = Article.objects.filter(author='Alessandro')
                    
                    # Ordinamento degli articoli per data di creazione
                    articles = Article.objects.order_by('date')
                    
                    # Recupera un singolo articolo
                    article_77 = Article.objects.get(pk=77)
                    
                    Aggiornamento singolo articolo
                    article_77.title = 'Title updated'
                    article_77.save()
                    
                    # Eliminazione singolo articolo
                    article_77.delete()
                `}/>
            </p>
            <p>Una cosa importante che possiamo osservare è che i QuerySet sono lazy, ovvero non vengono eseguiti
                effettivamente sino a quando non si richiedono i risultati, rendendo conseguentemente la loro esecuzione
                molto efficace e performante.
            </p>
            <p>Inoltre essi possono anche essere concatenati tra loro per creare query più complesse, andando ad
                eseguire operazioni successive su risultati ottenuti da una query precedente.
            </p>
            {/* [TO FIX] img differenze ORM e QUeryset Django 4.2.11 vs 5 */}

            <h2>Template</h2>
            <p>I Template in Django sono file di testo contenenti markup HTML insieme a tag e filtri speciali di Django
                che permettono di definire la presentazione dei dati all'interno di un'applicazione web. Il loro ruolo
                principale è quello di generare dinamicamente pagine HTML basate sui dati forniti dalle View.
            </p>
            <p>In sostanza quando un utente fa una HTTP request ad un'applicazione Django, viene cercato il Template
                corrispondente e processato per generare la risposta HTML da inviare al browser dell'utente.
                Durante questo processo i Template (tag e variabili) vengono popolati con i dati forniti dalle View e i
                risultati custom restituiti al client.
            </p>
            <p>I template supportano una vasta gamma di funzionalità, tra cui:
                <ul>
                    <li>variabili: consentono di inserire dati dinamicamente all'interno del template
                        <PythonCode code={`
                            <\h1>Benvenuto {{ user_name }}.</h1>
                        `}/>
                    </li>
                    <li>strutture di controllo: permettono di eseguire operazioni condizionali o iterazioni sui dati
                        all'interno del template, ad esempio:
                        <PythonCode code={`
                            <\\ul>
                                {% for article in articles %}
                                    <li>{{ article.title }}</li>
                                {% endfor %}
                            </ul>
                        `}/>
                    </li>
                    <li>includere altri template: utilizzando il tag %lbrace% include %rbrace% cosi da poter
                        suddividere il codice HTML in moduli riutilizzabili
                        <PythonCode code={`
                            {% include 'header.html' %}
                        `}/>
                    </li>
                    <li>estensione dei template: è una tecnica che permette di definere un layout di base e di
                        estenderlo o personalizzarlo in base alle esigenze specifiche di ciascuna pagina, promuovendo la
                        manutenibilità e la riusabilità del codice
                        <PythonCode code={`
                            {% extends 'base.html' %}
                        `}/>
                    </li>
                    <li>filtraggio dei dati: grazie ai filtri è possibile modificare o formattare i dati all'interno del
                        template prime che vengano visualizzati
                        <PythonCode code={`
                            <\h1>{{ testo|upper }}</h1>
                        `}/>
                    </li>
                </ul>
            </p>
            <p>Per utilizzare i template è necessario definirne uno che descriva la struttura dell'output HTML
                desiderato e incorporare i dati dinamici forniti dalle view, utilizzando come sappiamo i tag e i
                filtri speciali di Django. Di seguito un esempio di template che potremmo chiamare articles_list.html:
                <PythonCode code={`
                    <\!DOCTYPE html>
                    <html lang="it">
                        <head>
                            <meta charset="UTF-8">
                            <title>Lista Articoli</title>
                        </head>
                        <body>
                            <h1>Lista dei miei Articoli</h1>
                            <ul>
                                {% for article in articles %}
                                    <li>
                                        <a href="{% url 'article_detail' article.id %}">{{ article.title }}</a>
                                    </li>
                                {% endfor %}
                            </ul>
                        </body>
                    </html>
                `}/>
            </p>
            <p>Osserviamo in questo caso come attraverso il tag &lbrace;% url ... %&rbrace; sia possibile generare URL
                dinamici all'interno del template al fine di visualizzare i dettagli di ciascun specifico articolo.
            </p>
            <p>Inoltre è fondamentale che al template vengano passati dalla view i dati necessari relativa alla lista
                degli articoli, in modo che questi possano essere visualizzati correttamente. La nostra view potrà
                quindi essere simile alla seguente:
                <PythonCode code={`
                    from django.shortcuts import render
                    from .models import Article
                  
                    def articles_list(request):
                        # Recupera tutti gli articoli dal database
                        articles = Article.objects.all()
                        # Passa gli articoli al template articles_list.html
                        return render(request, 'articles_list.html', {'articles': articles})
                `}/>
            </p>
            <p>In questo caso, quando l'utente visita la pagina article_list, Django esegue la view articles_list
                associata, la quale recupererà tutti gli articoli dal database per passarli poi al template, il quale
                a sua volta elaborerà i dati forniti generando dinamicamente la pagina HTML corrispondente per
                restituirla infine al browser dell'utente.
            </p>
            <p>Altro aspetto molto importante da considerare è che nell'organizzazione e strutturazione dei template è
                importante adottare una metodologia che renda la presentazione dei dati efficiente, manutenibile e
                flessibile; per far ciò esistono alcune pratiche consigliate:
                <li>separazione dei template per le pagine: i template devono quindi essere organizzati in modo tale che
                    ciascun template rappresenti una pagina o una sezione specifica dell'applicazione (ad esempio un
                    template per la homepage, uno per la pagina di contatto, etc)
                </li>
                <li>utilizzo di blocchi e layout di base: è buona norma definire un layout di base che includa gli
                    elementi comuni a tutte le pagine dell'applicazione (ad esempio header, footer, navbar, ecc.),
                    dopodiché grazie all'utilizzo di blocchi sarà consentito ai template specifici di sovrascrivere
                    parti di layout base in modo da personalizzarle in base alle esigenze specifiche, ad esempio come
                    di seguito mostrato:
                    <PythonCode code={`
                        <-- layout_base.html -->
                        <\!DOCTYPE html>
                        <html lang="it">
                            <head>
                                <meta charset="UTF-8">
                                <title>{% block title %}My Site{% endblock %}</title>
                            </head>
                            <body>
                                <header>
                                    {% block header %} {% include 'header.html' %} {% endblock %}
                                </header>
                                
                                <main>
                                    {% block content %} {% endblock %}
                                </main>
                                
                                <footer>
                                    {% block footer %} {% include 'footer.html' %} {% endblock %}
                                </footer>
                            </body>
                        </html>
                    `}/>
                    <PythonCode code={`
                        <-- homepage.html -->
                        {% extends 'layout_base.html' %}
                        
                        {% block title %}Homepage{% endblock %}
                        
                        {% block content %}
                            <h1>Benvenuto nella Homepage</h1>
                            <!-- Altri contenuti specifici della homepage -->
                        {% endblock %}
                    `}/>
                </li>
                <li>riutilizzo di blocchi con include: è infatti possibile utilizzare il tag include per riutilizzare
                    parti di codice comuni in diversi template, ad esempio:
                    <PythonCode code={`
                        <-- article.html -->
                        <div class="article">
                            <h2>{{ article.title }}</h2>
                            <p>{{ article.content }}</p>
                        </div>
                    `}/>
                    <PythonCode code={`
                        <-- article_list.html -->
                        {% for article in articles %}
                            {% include 'article.html' %}
                        {% endfor %}
                    `}/>
                </li>
                <li>organizzazione dei template per app: è consigliabile organizzare i template in cartelle separate per
                    ciascuna app dell'applicazione, ad esempio creando ad esempio una cartella templates all'interno
                    di ogni singola applicazione che possa contenere i template relativi a quella specifica app.
                </li>
                <li>utilizzo di blocchi condizionali: per visualizzare o meno elementi basati sullo stato
                    dell'applicazione o sui dati forniti dalle view
                </li>
                <li>separazione dei compiti: assicurarsi che i template siano responsabili solo della presentazione dei
                    dati e non della logica di business
                </li>
            </p>
            {/* [TO FIX] img funzionalità Template Tag e Filtro Django 4.2.11 vs 5 */}

            <h2>Gestione dei Fom</h2>
            <p>La gestione dei form è sicuramente un aspetto fondamentale per la creazione di UI interattive e per la
                raccolta dei dati dagli utenti. Per tale motivo, sempre in ottica di essere un framework "a batterie
                incluse", Django fornisce un sistema di gestione dei form che semplifica notevolmente la creazione,
                la validazione e l'elaborazione dei form all'interno delle applicazioni web.
            </p>
            <p>Per gestire i form sono necessari alcuni passaggi fondamentali:
                <ul>
                    <li>definizione del form: lo si può fare utilizzando una classe Python che erediti da:
                        <ul>
                            <li>django.forms.Form se si vuole creare un form personalizzato
                                <PythonCode code={`
                                    # forms.py
                                    from django import forms
                                    
                                    class ContactForm(forms.Form):
                                        name = forms.CharField(max_length=100)
                                        email = forms.EmailField()
                                `}/>
                            </li>
                            <li>django.forms.ModelForm se si vuole creare un form basato su un modello esistente come
                                sua base
                            </li>
                        </ul>
                    </li>
                    <li>rendering del form: utilizzando il sistema di template di Django, in modo da poterlo
                        renderizzare all'interno di una pagina HTML. A riguardo si tenga bene a mente che è possibile
                        utilizzare il tag &lbrace;% csrf_input %&gbrace; per aggiungere un campo di tipo hidden
                        (nascosto) contenente il token CSRF per proteggere appunto il form da attacchi di tipo CSRF:
                        <PythonCode code={`
                            <\!-- template.html -->
                            <form method="post">
                                {% csrf_input %}
                                {{ form.as_p }}
                                <button type="submit">Invia</button>
                            </form>
                        `}/>
                    </li>
                    <li>elaborazione del form: nella view associata al form, è necessario gestire sia la richiesta
                        iniziale per la visualizzazione che la sua successiva sottomissione verificando anche la sua
                        validità, come di seguito mostrato utilizzando il metodo is_valid():
                        <PythonCode code={`
                            # views.py
                            from django.shortcuts import render
                            from .forms import ContactForm
                            
                            def contact_view(request):
                                if request.method == 'POST':
                                    form = ContactForm(request.POST)
                                    if form.is_valid():
                                        # Process the form data
                                        name = form.cleaned_data['name']
                                        email = form.cleaned_data['email']
                                        # Do something with the data...
                                else:
                                    form = ContactForm()
                                return render(request, 'contact_template.html', {'form': form})
                        `}/>
                    </li>
                    <li>validazione dei dati del form: tramite il sistema di validazione integrato in Django (ma nulla
                        vieta comunque di definire eventualmente altri metodi di validazione personalizzati):
                        <PythonCode code={`
                            # forms.py
                            from django import forms
                            from django.core.validators import validate_email
                            
                            class ContactForm(forms.Form):
                                name = forms.CharField(max_length=100)
                                email = forms.EmailField(validators=[validate_email])
                                
                                def clean_name(self):
                                    name = self.cleaned_data['name']
                                    if len(name) < 3:
                                        raise forms.ValidationError('Il nome deve contenere almeno 3 caratteri.')
                                    return name
                        `}/>
                    </li>
                    <li>restituzione dei dati del form al template: in caso il form non sia valido deve infatti essere
                        data la possibilità all'utente di correggere gli eventuali errori:
                        <PythonCode code={`
                            # views.py
                            def contact_view(request):
                                if request.method == 'POST':
                                    form = ContactForm(request.POST)
                                    if form.is_valid():
                                        name = form.cleaned_data['name']
                                        email = form.cleaned_data['email']
                                        # Do something with the data...
                                    else:
                                        # Return the form with the form data
                                        return render(request, 'contact_template.html', {'form': form})
                                else:
                                    form = ContactForm()
                                return render(request, 'contact_template.html', {'form': form})
                        `}/>
                    </li>
                </ul>
            </p>
            <p>In definitiva quindi la gestione del forma in Django necessita quindi di quattro fasi fondamentali:
                <ol>
                    <li>la definizione</li>
                    <li>il rendering all'interno di un template HTML</li>
                    <li>l'elaborazione all'interno di una view</li>
                    <li>la validazione</li>
                </ol>
            </p>
            {/* [TO FIX] img funzionalità Form e Widget Django 4.2.11 vs 5 */}

            <h2>Middleware</h2>
            <p>IL middleware in Django è componente importantissimo che permette di eseguire specifiche operazioni
                (elaborazione della richiesta, manipolazione della risposta, aggiunta di header personalizzati,
                gestione delle sessioni, autenticazione, etc.) durante il processo di gestione delle richieste e
                delle risposte HTTP.
            </p>
            <p>Il middleware in Django è implementato come una serie di classi Python, ognuno delle quali definisce
                uno specifico comportamento da eseguire durante il ciclo di vita di una richiesta/risposta HTTP.
                Importante sottolineare che queste classi devono implementare almeno uno dei metodi definiti
                dall'interfaccio di middleware, come ad esempio __init__, __call__, process_request(),
                process_response(), etc.
            </p>
            <h3>Middleware di Default</h3>
            <p>Django fornisce una serie di middleware di default che vengono abilitati automaticamente all'interno
                di un nuovo progetto e si occupano di svolgere funzionalità comuni come:
                <ul>
                    <li>gestione delle sessioni</li>
                    <li>protezione contro attacchi CSRF</li>
                    <li>compressione delle risposte</li>
                    <li>controllo della cache</li>
                    <li>ecc.</li>
                </ul>
            </p>
            <p>Naturalmente nulla vieta la creazione di middleware personalizzati per gestire funzionalità specifiche.
                Per far ciò è necessario :
                <ul>
                    <li>creare una nuova classe Python che implementi i metodi appropriati</li>
                    <li>aggiungere il percorso della classe middleware al file settings.py del progetto, all'interno
                        della lista MIDDLEWARE
                    </li>
                </ul>
            </p>
            <h3>Configurazione del Middleware</h3>
            <p>Per abilitare o disabilitare un middleware in Django è necessario modificare il file settings.py del
                progetto, all'interno del quale è presente la lista MIDDLEWARE contenente tutti i percorsi delle
                classi middleware che si desidera utilizzare all'interno del progetto, nell'ordine specificato.
            </p>
            <PythonCode code={`
                # settings.py
                MIDDLWARE = [
                    django.middleware.security.SecurityMiddleware',
                    'django.contrib.sessions.middleware.SessionMiddleware',
                    'django.contrib.staticfiles.middleware.StaticFilesMiddleware',
                    ...
                    'django.contrib.auth.middleware.AuthenticationMiddleware',
                    ...
                    'myapp.middleware.AddUUIDMiddleware',
                    'myapp.middleware.AddCustomHeaderMiddleware',
                    ...
                    'django.middleware.csrf.CsrfRequestMiddleware',
                    'django.middleware.csrf.CsrfResponseMiddleware',
                ]     
            `}/>
            <p>Questo ultimo aspetto (ordine di esecuzione) è molto importante da tenere in considerazione in quanto
                un middleware può influenzare il comportamento di un altro middleware se viene eseguito prima
                piuttosto che dopo.
            </p>

            <h3>Modifica delle richieste</h3>
            <p>Un middleware può essere utilizzato per intercettare e modificare le richieste HTTP in arrivo prima che
                queste vengano inviate alle view, per esempio per:
                <ul>
                    <li>eseguire controlli di sicurezza aggiuntivi</li>
                    <li>aggiungere header personalizzati</li>
                    <li>applicare trasformazioni ai dati della richiesta</li>
                    <li>ecc.</li>
                </ul>
            </p>
            <p>Ad esempio si potrebbe aver necessità di creare un middleware che aggiunga un ID univoco ad ogni
                richiesta in arrivo:
                <PythonCode code={`
                    # middleware.py
                    class AddUUIDMiddleware:
                        def __init__(self, get_response):
                            self.get_response = get_response
                            
                        def __call__(self, request):
                            request.id = uuid.uuid4()
                            response = self.get_response(request)
                            return response
                `}/>
            </p>

            <h3>Modifica delle risposte</h3>
            <p>Un middleware può essere utilizzato anche per intercettare e modificare le risposte HTTP in uscita prima
                che queste vengano inviate al client, per esempio per:
                <ul>
                    <li>aggiungere header personalizzati</li>
                    <li>applicare trasformazioni ai dati della risposta</li>
                    <li>loggare informazioni aggiuntive</li>
                    <li>ecc.</li>
                </ul>
            </p>
            <p>Ad esempio si potrebbe aver necessità di creare un middleware che aggiunga un header personalizzato
                ad ogni risposta:
                <PythonCode code={`
                    # middleware.py
                    class AddCustomHeaderMiddleware:
                        def __init__(self, get_response):
                            self.get_response = get_response
                            
                        def __call__(self, request):
                            response = self.get_response(request)
                            # Add a custom header to the response
                            response['X-Custom-Header'] = 'Custom Value'
                            return response
                `}/>
            </p>

            {/* [TO FIX] img funzionalità Middleware Django 4.2.11 vs 5 */}

            <h2>Django Admin</h2>
            <p>Django Admin è un componente integrato (seppur personalizzabile qualora necessario) di Django che
                fornisce un'interfaccia di amministrazione generata automaticamente per gestire i dati presenti nel
                database dell'applicazione, basandosi sui modelli definiti nell'applicazione stessa.
                Da questa interfaccia sarà quindi possibile:
                <ul>
                    <li>visualizzare dati in dettaglio</li>
                    <li>aggiungere nuovi dati</li>
                    <li>modificare dati esistenti</li>
                    <li>eliminare dati</li>
                    <li>ecc.</li>
                </ul>
            </p>
            <p>Per utilizzare Django Admin è necessario:
                <ul>
                    <li>definire i modelli all'interno dell'applicazione
                        <PythonCode code={`
                            # models.py
                            from django.db import models
                            
                            class Article(models.Model):
                                title = models.CharField(max_length=100)
                                content = models.TextField()
                                date = models.DateTimeField(auto_now_add=True)
                        `}/>
                    </li>
                    <li>registrare i modelli all'interno del file admin.py dell'applicazione
                        <PythonCode code={`
                            # admin.py
                            from django.contrib import admin
                            from .models import Article
                            
                            admin.site.register(Article)
                        `}/>
                    </li>
                    <li>creare un superuser per accedere all'interfaccia di amministrazione
                        {/* [TO FIX] How Create Super User */}
                    </li>
                </ul>
            </p>
            <p>Come abbiamo accennato inizialmente l'interfaccia di amministrazione può anche essere personalizzata
                per soddisfare requisiti specifici dell'applicazione; in questo caso proviamo ad esempio ad aggiungere
                un filtro per data di pubblicazione e un campo di ricerca articoli per titolo:
                <PythonCode code={`
                    # admin.py
                    from django.contrib import admin
                    from .models import Article

                    class ArticleAdmin(admin.ModelAdmin):
                        list_display = ('title', 'date')
                        list_filter = ('date',)
                        search_fields = ('title',)
                        
                    admin.site.register(Article, ArticleAdmin)
                `}/>
            </p>
            <p>A seguito di questo aggiornamento sarà ora possibile vedere nella nostra interfaccia di amministrazione:
                <ul>
                    <li>un filtro per data di pubblicazione sulla barra laterale sinistra</li>
                    <li>un campo di ricerca per titolo sopra l'elenco degli articoli</li>
                </ul>
            </p>
            {/* [TO FIX] img Django Admin Real */}
            <p>Esiste anche la possibilità di aggiungere azioni personalizzate per eseguire ad esempio operazioni su
                più articoli contemporaneamente, come ad esempio:
                <PythonCode code={`
                    # admin.py
                    from django.contrib import admin
                    from .models import Article

                    class ArticleAdmin(admin.ModelAdmin):
                        list_display = ('title', 'date')
                        list_filter = ('date',)
                        search_fields = ('title',)
                        actions = [make_published]
                        
                        # Imposta lo stato degli articoli selezionati come 'Pubblicato'
                        def publish_article(self, request, queryset):
                            queryset.update(published=True)
                                                    
                    admin.site.register(Article, ArticleAdmin)
                `}/>
            </p>
            {/* [TO FIX] img funzionalità Django Admin Django 4.2.11 vs 5 */}

            <h2>Contenuti Statici</h2>
            <p>Per contenuti statici possiamo intendere immagini, fogli di stile CSS, file JavaScript, ecc, che
                vengono serviti direttamente al client senza alcun processo di elaborazione da parte del server.
                Per gestire e servire efficientemente questi contenuti, Django fornisce un sistema di gestione le cui
                impostazioni vengono definite nel file settings.py del progetto.
            </p>
            <p>In particolare, Django ci mette a disposizione:
                <ol>
                    <li>un'apposita variabile STATIC_URL: nella quale specificare la URL da utilizzare per servire i
                        file statici
                    </li>
                    <li>un'altra variabile STATIC_ROOT: nella quale specificare la directory in cui i file statici
                        saranno raccolti durante il processo di deployment
                    </li>
                    <li>un'ulteriore variabile STATICFILES_DIRS: nella quale specificare una lista di directory in cui
                        cercare i file statici, magari provenienti da diverse directory (come ad esempio file CSS e
                        JavaScript proveniente da terze parti)
                    </li>
                </ol>
            </p>
            <p>Ma non solo, Django fornisce anche un sistema di gestione dei file statici che consente di organizzarli
                e gestirli modularmente, definendo i percorsi di questi file all'interno delle applicazioni ed
                utilizzando la cartella static presente in ognuna di esse. Sarà poi Django che cercherà automaticamente
                i file all'interno di queste cartelle nel momento specifico della raccolta.
            </p>
            <p>In merito a questo è bene però osservare che durante lo sviluppo, Django offre una vista di servizio dei
                file statici integrata (in modo da lavorarci più agevolmente), mentre in produzione è consigliabile
                utilizzare un server web dedicato o un servizio di hosting dei file statici (come ad esempio Amazon S3
                o Google Cloud Storage) per poterli gestire e servire in modo più efficiente e scalabile.
            </p>
            <p>Esempio:</p>
            <PythonCode code={`
                # settings.py
                # Descrizione URB base per file statici
                STATIC_URL = '/static/'
                
                # Definizione directory radice per file statici raccolti
                STATIC_ROOT = os.path.join(BASE_DIR, 'static-files')
                
                # Definizione directory aggiuntive dei file statici
                STATICFILES_DIRS = [
                    os.path.join(BASE_DIR, 'static'),
                ]
            `}/>
            <p>A questo punto potremmo supporre di avere un'applicazione chiamata myapp con un file CSS chiamato
                style.css all'interno della cartella myapp/static/css. Per poterlo utilizzare in un template HTML
                potremmo procedere nel seguente modo:
                <PythonCode code={`
                    <\DOCTYPE html>
                    <html lang="it">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>My Site</title>
                            <!-- Inclusione file CSS -->
                            <link rel="stylesheet" href="{% static 'cdd/style.css' %}">
                        </head>
                        <body>
                            <h1>Benvenuto nel mio sito</h1>
                            <!-- Inclusione immagine -->
                            <img src="{% static 'images/logo.png' %}" alt="Logo">
                            <!-- Inclusione file JavaScript -->
                            <script src="{% static 'js/script.js' %}"></script>
                        </body>
                    </html>
                `}/>
            </p>
            <p>Abbiamo parlato di file statici raccolti, ma come possiamo fare per raccoglierli? Semplicemente eseguendo
                il comando collectstatic fornito da Django, durante il deployment dell'applicazione:
                <TerminalCode code={`
                    python manage.py collectstatic
                `}/>
            </p>
            <p>Così facendo, Django raccoglierà tutti i file statici dalle directory specificate nelle impostazioni e
                li copierà nella directory specificata da STATIC_ROOT, pronti per essere serviti dal server web.
            </p>
            {/* [TO FIX] img funzionalità Contenuti Statici Django 4.2.11 vs 5 */}

            <h2>Sessione e Autenticazione</h2>
            <h3>Gestione delle Sessioni</h3>
            <p>Gestire una sessione significa consentire di mantenere lo stato dell'utente tra le varie richieste HTTP.
                Succede infatti che ogniqualvolta un utente accede al nostro sito, Django crea automaticamente una
                sessione univoca per quell'utente, assegnandogli un cookie. Grazie all'invio di questo cookie ad ogni
                richiesta successiva, Django è in grado di identificare l'utente e ripristinare conseguentemente i dati
                della sessione.
            </p>
            <p>Per abilitare le sessioni in Django è necessario configurare correttamente le impostazioni del
                progetto all'interno del file settings.py. Django offre infatti diverse opzioni per la memorizzazione
                dei dati di sessione, tra cui:
                <ul>
                    <li>database</li>
                    <li>cache</li>
                    <li>cookie firmato</li>
                </ul>
            </p>
            <p>E' possibile specificare queste opzioni attraverso la variabile SESSION_ENGINE:
                <PythonCode code={`
                    # settings.py
                    # memorizzazione dei dati di sessione nel database
                    SESSION_ENGINE = 'django.contrib.sessions.backends.db'
                `}/>
            </p>
            <p>Il conseguente accesso ai dati di sessione sarà possibile all'interno delle view attraverso l'oggetto
                request, contenente l'attributo session:
                <PythonCode code={`
                    def my_view(request):
                        # Legge il valore di 'my_key' dalla sessione
                        my_value = request.session.get('my_key')
                        # Imposta il valore di 'my_key' nella sessione
                        request.session['my_key'] = 'my_value'
                `}/>
            </p>
            <h3>Autenticazione</h3>
            <p>L'autenticazione in Django è gestita attraverso il modulo django.contrib.auth, che fornisce le doverose
                funzionalità richieste allo scopo, quali ad esempio:
                <ul>
                    <li>registrazione e autenticazione degli utenti</li>
                    <li>gestione delle password</li>
                    <li>logout</li>
                    <li>ecc.</li>
                </ul>
            </p>
            <p>Anche in questo caso per poterne far uso è necessario configurare correttamente il backend di
                autenticazione all'interno del file settings.py (considerando comunque che Django supporta
                l'autenticazione basata su database, su servizi esterni come OAuth2, su token, etc):
                <PythonCode code={`
                    # settings.py
                    # Autenticazione basata su database (default)
                    AUTHENTICATION_BACKENDS = [
                        'django.contrib.auth.backends.ModelBackend',
                    ]
                `}/>
            </p>
            <p>Una volta configurato correttamente il backend. è possibile utilizzare queste funzionalità nelle view e
                nei template sfruttando i decoratori di view forniti da Django, come ad esempio @login_required in grado
                di proteggere le view riservate agli utenti autenticati fornendo contestualmente funzioni di utilità
                come authenticate() e login() per gestire il processo di autenticazione e login degli utenti.
            </p>
            <p>Cerchiamo a questo punto di vedere i passaggi fondamentali necessari per implementare un sistema di
                autenticazione in Django, utilizzando il modulo django.contrib.auth:
                <ol>
                    <li>configurare il backend di autenticazione: necessario specificarlo nel file settings.py
                        utilizzando la variabile AUTHENTICATION_BACKENDS. IL backend di default è basata su database
                        (quindi django.contrib.auth.backends.ModelBackend) mentre la variabile AUTH_USER_MODEL permette
                        di definire il modello utente personalizzato da utilizzare (per usare lo standard la riga va
                        rimossa:
                        <PythonCode code={`
                            # settings.
                            # Autenticazione basata su database (default)
                            AUTHENTICATION_BACKENDS = [
                                'django.contrib.auth.backends.ModelBackend',
                            ]
                            
                            # Definizione del modello utente personalizzato (rimuove la riga per usare auth default)
                            AUTH_USER_MODEL = 'myapp.CustomUser'
                        `}/>
                    </li>
                    <li>creare un sistema di registrazione e login: lo si può fare utilizzando le viste fornite da
                        django.contrib.auth.views:
                        <PythonCode code={`
                            # views.py
                            from django.contrib.auth import authenticate, login
                            from django.shortcuts import render, redirect
                            from .forms import RegistrationForm, LoginForm
                            
                            def register_view(request):
                                if request.method == 'POST':
                                    form = RegistrationForm(request.POST)
                                    if form.is_valid():
                                        form.save()
                                        return redirect('login')
                                else:
                                    form = RegistrationForm()
                                return render(request, 'register.html', {'form': form})
                                
                            def user_login(request):
                                if request.method == 'POST':
                                    form = LoginForm(request.POST)
                                    if form.is_valid():
                                        username = form.cleaned_data['username']
                                        password = form.cleaned_data['password']
                                        user = authenticate(username=username, password=password)
                                        if user is not None:
                                            login(request, user)
                                            return redirect('dashboard')
                                else:
                                    form = LoginForm()
                                return render(request, 'login.html', {'form':form})
                        `}/>
                    </li>
                    <li>creare dei moduli per la registrazione e login: è possibile farlo utilizzando i moduli forniti
                        da Django:
                        <ul>
                            <li>UserCreationForm per la registrazione</li>
                            <li>AuthenticationForm per il login</li>
                        </ul>
                        <PythonCode code={`
                            # forms.py
                            from django import forms
                            from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
                            from django.apps import apps
                            
                            User = apps.get_model('auth', 'User')
                            
                            class RegistrationForm(UserCreationForm):
                                class Meta:
                                    model = User
                                    fields = ['username', 'password1', 'password2']
                            
                            class LoginForm(AuthenticationForm):
                                class Meta:
                                    model = User
                                    fields = ['username', 'password']  
                        `}/>
                    </li>
                    <li>creazione dei template HTML per la registrazione e login utenti</li>
                    <li>protezione delle view riservate agli utenti autenticati: utilizzando il decoratore
                        @login_required fornito da Django (django.contrib.auth):
                        <PythonCode code={`
                            # views.py
                            from django.contrib.auth.decorators import login_required
                            
                            @login_required
                            def dashboard_view(request):
                                return render(request, 'dashboard.html')
                        `}/>
                    </li>
                </ol>
            </p>

            <h2>Deployment</h2>
            <p>Il deployment di un'applicazione Django è il processo di pubblicazione dell'applicazione su un server
                web in modo che sia accessibile al pubblico. Questo processo può variare a seconda delle esigenze
                specifiche dell'applicazione e dell'infrastruttura di hosting utilizzata, ma in linea generale
                la prima cosa da fare è configurare l'ambiente di produzione per ospitare l'applicazione, ovvero:
                <ul>
                    <li>scegliere e configurare un server web: Apache, Nginx, etc. Solitamente questo processo comporta
                        il dover configurare un file nginx.conf o apache2.conf cosi da poter instradare le richieste
                        HTTP al server di applicazioni corretto
                        Esempio do configurazione di Nginx per instradare richieste HTTP a Gunicorn:
                        <PythonCode code={`
                            server {
                                listen 80;
                                server_name example.com;
                                
                                location / {
                                    proxy_pass http://127.0.0.1:8000;
                                    proxy_set_header Host $host;
                                    proxy_set_header X-Real-IP $remote_addr;
                                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                                }
                            }
                        `}/>
                    </li>
                    <li>configurare correttamente un server di applicazioni: Gunicorn, uWSGI, etc. Questo renderà
                        possibile l'esecuzione corretta dell'applicazione Django in un ambiente di produzione ma
                        potrebbe richiedere durante la fase di configurazione la definizione del numero di processi e
                        thread, la gestione del caricamento degli script WSGI e altre eventuali impostazioni di tuning
                        delle prestazioni
                    </li>
                    <li>accertarsi di aver gestito correttamente le dipendenze di progetto: fortemente consigliato
                        l'utilizzo di pip (Python Package Installer) ed un file requirements.txt da generare nel
                        seguente modo:
                        <TerminalCode code={`
                            pip freeze > requirements.txt
                        `}/>
                        <TerminalCode code={`
                            # requirements.txt
                            Python==3.10.1
                            ...
                            Django==4.2.11
                            ...
                            psycopg2==2.9.1
                        `}/>
                        Ed eventualmente poi, per installare le dipendenze lanciare il comando:
                        <TerminalCode code={`
                            pip install -r requirements.txt
                        `}/>
                        Sempre consigliato utilizzare un ambiente virtuale (virtual environment) per isolare le
                        dipendenze del progetto da quelle del sistema host.
                    </li>
                    <li>adottare corrette configurazioni di sicurezza: assicurandoci di proteggere l'applicazione da
                        attacchi comuni come SQL injection, XSS, CSRF, etc, ad esempio impostando a True le seguenti
                        variabili presenti nel file settings.py:
                        <PythonCode code={`
                            # Impostazioni di Sicurezza
                            SECURE_BROWSER_XSS_FILTER = True
                            SECURE_CONTENT_TYPE_NOSNIFF = True
                            ...
                            DEBUG = False
                            ALLOWED_HOSTS = ['example.com']
                        `}/>
                        Non dimenticandoci poi di utilizzare HTTPS per crittografare la comunicazione server-client.
                    </li>
                    <li>configurare un database: PostgreSQL, MySQL, etc.</li>
                    <li>esecuzione di eventuali migrazioni: utilizzando il comando migrate di Django al fine di
                        avere sicurezza circa il fatto che lo schema del database sia allineato con i modelli definiti
                        nel momento corrente
                    </li>
                    <li>configurare correttamente le variabili d'ambiente (secret-key, credenziali db, etc) in linea
                        con l'ambiente di produzione, magari servendosi anche di un file .env dedicato
                        <PythonCode code={`
                            # settings.py
                            import os
                            
                            SECRET_KEY = os.environ.get('SECRET_KEY')
                            DATABASE_URL = os.environ.get('DATABASE_URL')
                        `}/>
                        Volendo è possibile gestire queste variabili in maniera ancora più sicura utilizzando ad esempio
                        il package django-environ:
                        <TerminalCode code={`
                            # Installazione django-environ
                            pip install django-environ
                        `}/>
                        <PythonCode code={`
                            # .env
                            SECRET_KEY=your_secret_key
                            DATABASE_URL=your_database_url
                        `}/>
                        <PythonCode code={`
                            # settings.py
                            import environ
                            # Inizializza istanza di environ
                            env = environ.Env()
                            
                            # Se presente, legge le variabili d'ambiente da un file .env
                            environ.Env.read_env()
                            
                            SECRET_KEY = env('SECRET_KEY')
                            DATABASE_URL = env('DATABASE_URL')
                        `}/>
                    </li>
                    <li>raccogliere i file statici: utilizzando il comando collectstatic che copierà conseguentemente
                        tutti i file statici definiti nell'applicazione nella directory specificata da STATIC_ROOT
                        (pronti per essere serviti dal server web)
                    </li>
                </ul>
            </p>
            <p>Va poi ricordato che una volta che l'applicazione è stata distribuita in produzione, è importante:
                <ul>
                    <li>monitorare le prestazioni e la stabilità al fine di identificare eventuali problemi o degrado
                        delle prestazioni stesse
                    </li>
                    <li>eseguire regolarmente aggiornamenti di sicurezza e manutenzione</li>
                </ul>
            </p>

            {/* [TO FIX] 01 - Handle Products Project */}
        </div>
    );
}

export default DjangoBE;