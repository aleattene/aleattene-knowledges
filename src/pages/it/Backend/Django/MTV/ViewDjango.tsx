import React from 'react';
import PythonCode from "../../../../../components/Code/PythonCode/PythonCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";


const ViewDjango: React.FC = () => {
    return (
        <div>
            <h1>View Django</h1>
            <p>Nello sviluppo di un'applicazione wev con Django, oltre ai template diventano fondamentali le view e l
                URL. Questi ultimi due elementi sono infatti strettamente interconnessi poichè in un progetto
                costituiscono di fatto il cuore del sistema di routing e rendering delle pagine.
            </p>
            <p>Diversamente da quanto accadeva nel pattern MVC, in Django il controller è sostituito dalle view e
                appunto analoga al controller, la view si occupa di gestire la logica di business dell'applicazione,
                ovvero si riferisce alle regole, algoritmi, processi ed operazione dell'applicazione stessa.
            </p>
            <p>Si tratta in sostanza della logica che determina come l'applicazione deve elaborare i dati, gestire le
                operazioni e quindi fornire le risposte agli utenti. Ovvero, in breve, la logica di business definisce
                il cuore dell'applicazione e come questa andrà ad interagire con i dati e come risponderà alle richieste
                degli utenti.
            </p>
            <p>Tecnicamente parlando è una funzione (come vedremo poi, può anche essere altro) che accetta una richiesta
                HTTP e restituisce una risposta HTTP.
            </p>
            <p>Ecco quindi che possiamo osservare che all'interno delle view è possibile accedere ai dati del database,
                elaborarli e quindi restituire una risposta appropriata (pagine HTML, risposte JSON, etc) al client.
            </p>
            <p>Come detto View e URL sono strettamente connesse, infatti sono proprio loro a fungere da collegamento tra
                gli URL richiesti dagli utenti e le views corrispondenti che devono essere eseguite per soddisfare
                quella richiesta. All'interno dei file di configurazione urls.py, si associano gli URL alle views
                utilizzando un sistema di routing basato su espressioni regolari.
            </p>
            <p>Succede infatti che quando Django riceve una richiesta HTTP, esegue un processo di matching tra lo URL
                richiesto e le URL definite all'interno del file urls.py: una volta trova corrispondenza invoca la view
                associata a quella URL.
            </p>
            <p>Una view come detto può essere definita come una funzione (ma può anche essere una classe) all'interno di
                un file views.py all'interno di una applicazione Django. Questa funzione accetta una richiesta HTTP e
                restituisce una risposta. Esempio:
                <PythonCode code={`
                    # app/views.py
                    from django.http import HttpResponse
                    
                    def hello(request: HttpRequest) -> HttpResponse:
                        # Eventuale Logica di business per la generazione del contenuto
                        message: str = "Hello, world."
                        response: HttpResponse = HttpResponse(message)
                        return response
                `}/>
            </p>
            <p>Come abbiamo già accennato la view deve anche essere associata ad uno URL, per fare ciò si utilizza il
                file urls.py all'interno della stessa applicazione:
                <PythonCode code={`
                    # app/urls.py
                    from django.urls import path
                    from .views import hello
                    
                    urlpatterns = [
                        path('hello/', hello, name='hello'),
                    ]
                `}/>
            </p>
            <p>E' interessante notare il terzo elemento della funzione path, ovvero il nome della view. Questo nome
                è molto importante in quanto rappresenta un identificativo univoco della view all'interno
                dell'applicazione e per tale motivo può essere comodamente utilizzato per fare riferimento ad essa
                in altri punti dell'applicazione (e come vedremo più avanti anche con la funzione reverse()).
            </p>
            <p>A questo punto quello che succederà è che quando un utente richiederà la pagina
                <TerminalCode code={`http//localhost:8000/hello/`}/>
                Django indirezzarà la richiesta alla view hello() che la elaborerà e restituirà la risposta appropriata
                (la cui creazione può ragionevolmente essere create dall'interfaccia standardizzata delle classi di
                risposta HTTP).
            </p>

            <h2>Classi di risposta HTTP</h2>
            <p>Queste classi non devono essere confuse con le classi di definizione delle view, che rappresentano
                appunto tutta un'altra cosa.
            </p>
            <p>Una classe di risposta in Django è essenzialmente un oggetto che rappresenta una risposta HTTP, come
                ad esempio:
                <ul>
                    <li>una risposta HTTP</li>
                    <li>una pagina HTML</li>
                    <li>un file JSON</li>
                    <li>un re-indirizzamento ad un'altra URL</li>
                </ul>
            </p>
            <p>Si tratta di classi appositamente progettate per semplificare il percorso di generazione e invio delle
                response agli utenti, fornendo contestualmente un'ampia gamma di funzionalità ed opzioni per la
                personalizzazione. Inoltre includono una vastissima gamma di scenari di risposta (ognuno con propri
                metodi ed attributi per configurare specificatamente la risposta), come:
                <ul>
                    <li>HttpResponse: per risposte personalizzate</li>
                    <li>JsonResponse: per risposte con dati in formato JSON (JavaScript Object Notation, formato standard per
                        lo scambio di dati nelle REST API)
                    </li>
                    <li>HttpResponseRedirect: per re-indirizzamenti ad altre URL</li>
                    <li>File response: per restituire file come risposte HTTP. Utile quindi quando si desidera fornire
                        file scaricabili agli utenti (pdf, immagini, etc)
                    </li>
                    <li>StreamingHttpResponse: per gestire risposte HTTP con dati di grandi dimensioni o output di
                        streaming
                    </li>
                    <li>TemplateResponse: per risposte HTTP utilizzando modelli di Django per la generazione dinamica
                        del contenuto HTML
                    </li>
                    <li>Http404: per gestire risposte personalizzate a fronte dell'eccezione che viene sollevata quando
                        una risorsa non viene trovata
                    </li>
                    <li>HttpResponseForbidden: rappresenta una risposta HTTP 403 Forbidden, utilizzata quando un utente
                        non ha i permessi necessari per accedere ad una determinata risorsa.
                    </li>
                    <li>HttpResponseNotAllowed: rappresenta una risposta HTTP 405 Method Not Allowed, utilizzata quando
                        un endpoint API viene richiamato con un metodo HTTP non consentito.
                    </li>
                    <li>HttpResponsePermanentRedirect: si tratta della classe che rappresenta la risposta HTTP 301 Moved
                        Permanently, utilizzata per re-indirizzare permanentemente  gli utenti da uno URL ad un altro.
                    </li>
                    <li>HttResponseTemporaryRedirect: riporta una risposta HTTP 302 Found, utilizzata per
                        re-indirizzare temporaneamente gli utenti da uno URL ad un altro. (???)
                    </li>
                    <li>HttpBadRequest</li> {/* TO FIX DESCRIPTION*/}
                    <li>HttpResponseNotFound</li> {/* TO FIX DESCRIPTION*/}
                    <li>HttpResponseServerError</li> {/* TO FIX DESCRIPTION*/}
                </ul>
            </p>
            <p>Il numero di classi di risposta presenti in Django non è fisso ma in continua evoluzione (parallelamente
                all'evoluzione di Django stesso), tuttavia buona parte delle classi più utili e comuni sono disponibili
                nel modulo predefinito di Django django.http.
            </p>
            <h3>Esempio:</h3>
            <PythonCode code={`
                from django.http import (
                    HttpResponse, 
                    JsonResponse, 
                    HttpResponseRedirect, 
                    HttpResponseBadRequest,
                    HttpResponseNotFound,
                    HttpResponseServerError,
                )
                from django.shortcuts import redirect
                
                # Restituisce una risposta di benvenuto
                def index(request):
                    return HttpResponse("Welcome to our Django Web App")
                    
                # Restituisce un Json alle richieste GET altrimenti restituisce un errore Metodo non consentito    
                def api_example(request):
                    if request.method == 'GET':
                        data = {'message': 'Example of API RESTful'}
                        return JsonResponse(data)
                    else:
                        return HttpResponseNotAllowed(['GET'])
                        
                # Reindirizza alla homepage        
                def redirect(request):
                    return HttpResponseRedirect('/')
                    
                # Restituisce un errore di richiesta non valida    
                def error_bad_request(request):
                    return HttpResponseBadRequest("Error 400: Bad request")
                    
                # Restituisce un errore di pagina non trovata    
                def page_not_found(request):
                    return HttpResponseNotFound("Error 404: Page not found")
                    
                # Restituisce un errore di server interno    
                def server_error(request):
                    return HttpResponseServerError("Error 500: Internal Server error")
            `}/>
            <p>E' importante comunque osservare che Django offre anche meccanismi più avanzati per la gestione degli
                errori, come ad esempio:
                <ul>
                    <li>i middleware personalizzati</li>
                    <li>i gestori dei segnali</li>
                </ul>
                in grado di gestire gli errori in modo più flessibile e robusto in tutta l'applicazione.
            </p>
        </div>
    );
}

export default ViewDjango;